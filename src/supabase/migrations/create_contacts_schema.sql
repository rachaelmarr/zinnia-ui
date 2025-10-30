-- =========================
-- Zinnia Contacts Schema
-- PostgreSQL (Supabase)
-- =========================

-- 1) Reference: vendors & clients/couples assumed to exist.
-- If you don't have a vendors table yet, swap the FK to your users table.

-- -------------------------
-- ENUMS
-- -------------------------
-- If you prefer a lookup table for statuses, replace this enum with a table.
create type contact_status as enum (
  'new_contact',
  'lead',
  'potential_customer',
  'customer',
  'inactive',
  'archived'
);

create type photo_source as enum ('avatar', 'upload', 'none');

-- -------------------------
-- CONTACTS
-- -------------------------
create table contacts (
  id uuid primary key default gen_random_uuid(),

  -- Ownership / scoping
  vendor_id uuid not null references auth.users(id) on delete cascade,

  -- Basic info (Step 1)
  first_name text not null,
  last_name  text not null,
  email      text not null,
  phone      text not null,
  company_name text,

  -- Organize (Step 2)
  status contact_status not null default 'new_contact',

  -- Photo choice (Step 3)
  photo_mode photo_source not null default 'none',
  avatar_key text,               -- e.g. 'couple', 'flowers', 'camera', 'cake'
  photo_url  text,               -- public URL or storage path when uploaded
  photo_meta jsonb default '{}'::jsonb, -- width/height/mime, optional

  -- Consent & prefs (used later by Messaging)
  sms_opt_in boolean default false,
  email_opt_in boolean default true,

  -- System fields
  notes text,
  source text,                   -- e.g., 'manual', 'inquiry_form', 'import'
  last_contacted_at timestamptz,
  archived_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Helpful uniqueness without being overly strict across the whole system.
-- Vendors often reuse the same email across contacts; scope by vendor.
create unique index contacts_vendor_email_unique
  on contacts (vendor_id, lower(email));

-- Case-insensitive phone match per vendor (optional; remove if too strict)
-- create unique index contacts_vendor_phone_unique
--   on contacts (vendor_id, phone);

-- Quick search index (first/last/email/company)
create index contacts_quick_search_idx on contacts
  using gin (to_tsvector('simple',
    coalesce(first_name,'') || ' ' ||
    coalesce(last_name,'')  || ' ' ||
    coalesce(email,'')      || ' ' ||
    coalesce(company_name,'')
  ));

create index contacts_vendor_status_idx on contacts (vendor_id, status);
create index contacts_vendor_created_idx on contacts (vendor_id, created_at);

-- -------------------------
-- TAGS (vendor-scoped)
-- -------------------------
create table contact_tags (
  id uuid primary key default gen_random_uuid(),
  vendor_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  color text,                 -- optional UI color token
  created_at timestamptz not null default now(),
  unique (vendor_id, lower(name))
);

-- Pivot: many-to-many contact <-> tag
create table contact_tag_links (
  contact_id uuid not null references contacts(id) on delete cascade,
  tag_id     uuid not null references contact_tags(id) on delete cascade,
  primary key (contact_id, tag_id)
);

create index contact_tag_links_contact_idx on contact_tag_links (contact_id);
create index contact_tag_links_tag_idx     on contact_tag_links (tag_id);

-- -------------------------
-- HOOKS / MAINTENANCE
-- -------------------------
-- Auto-update updated_at
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

create trigger trg_contacts_set_updated_at
before update on contacts
for each row execute function set_updated_at();

-- -------------------------
-- (Recommended) RLS Policies
-- -------------------------
-- Enable RLS
alter table contacts enable row level security;
alter table contact_tags enable row level security;
alter table contact_tag_links enable row level security;

-- Example policies (adjust to your auth model)
-- Assume auth.uid() maps to vendors.id via a profile or direct mapping.
-- Replace `current_setting('request.jwt.claim.vendor_id', true)` with
-- your preferred way to resolve vendor_id from the JWT.

-- Contacts
create policy "contacts_select_own"
  on contacts for select
  using (vendor_id = auth.uid());

create policy "contacts_modify_own"
  on contacts for all
  using (vendor_id = auth.uid())
  with check (vendor_id = auth.uid());

-- Contact Tags
create policy "contact_tags_select_own"
  on contact_tags for select
  using (vendor_id = auth.uid());

create policy "contact_tags_modify_own"
  on contact_tags for all
  using (vendor_id = auth.uid())
  with check (vendor_id = auth.uid());

-- Tag Links (derive access from contact & tag ownership)
create policy "contact_tag_links_select_own"
  on contact_tag_links for select
  using (
    exists (select 1 from contacts c
            join contact_tags t on t.vendor_id = c.vendor_id
            where c.id = contact_id
              and t.id = tag_id
              and c.vendor_id = auth.uid())
  );

create policy "contact_tag_links_modify_own"
  on contact_tag_links for all
  using (
    exists (select 1 from contacts c
            join contact_tags t on t.vendor_id = c.vendor_id
            where c.id = contact_id
              and t.id = tag_id
              and c.vendor_id = auth.uid())
  )
  with check (
    exists (select 1 from contacts c
            join contact_tags t on t.vendor_id = c.vendor_id
            where c.id = contact_id
              and t.id = tag_id
              and c.vendor_id = auth.uid())
  );

-- -------------------------
-- COMMENTS
-- -------------------------
comment on table contacts is 'Vendor-scoped contact management for Zinnia platform';
comment on table contact_tags is 'Vendor-specific tags for organizing contacts';
comment on table contact_tag_links is 'Many-to-many relationship between contacts and tags';

comment on column contacts.vendor_id is 'Foreign key to auth.users - scopes contacts to specific vendor';
comment on column contacts.photo_mode is 'How the contact photo is sourced: avatar selection, upload, or none';
comment on column contacts.avatar_key is 'Key for predefined avatar (e.g., couple, flowers, camera, cake)';
comment on column contacts.photo_url is 'Public URL or storage path for uploaded photos';
comment on column contacts.sms_opt_in is 'User consent for SMS marketing messages';
comment on column contacts.email_opt_in is 'User consent for email marketing (defaults to true)';
comment on column contacts.source is 'How this contact was created (manual, inquiry_form, import, etc.)';