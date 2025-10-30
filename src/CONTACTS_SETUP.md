# Zinnia Contacts System Setup

This document explains the contacts data model and API implementation for the Zinnia platform.

## Overview

The contacts system provides vendor-scoped contact management with the following features:

- **Vendor Scoping**: Each contact belongs to a specific vendor (RLS enforced)
- **Contact Statuses**: Track contact progression (new → lead → customer, etc.)
- **Tagging System**: Organize contacts with custom tags
- **Photo Support**: Avatar selection or photo uploads
- **Opt-in Management**: SMS and email marketing consent
- **Full-text Search**: Search across names, emails, and companies
- **Bulk Operations**: Manage multiple contacts at once

## Database Schema

### Tables Created

1. **`contacts`** - Main contact information
2. **`contact_tags`** - Vendor-specific tags for organizing contacts
3. **`contact_tag_links`** - Many-to-many relationship between contacts and tags

### Enums Created

1. **`contact_status`** - Contact progression states
2. **`photo_source`** - How contact photos are managed

## Quick Start

### 1. Run the Migration

The migration file is already created at `/supabase/migrations/create_contacts_schema.sql`. Apply it to your Supabase database:

```bash
# If using Supabase CLI
supabase db reset

# Or apply manually in Supabase dashboard SQL editor
```

### 2. Environment Variables

Ensure your Supabase environment variables are set:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Import and Use

```typescript
import { 
  getContacts, 
  createContact, 
  updateContact,
  getTags,
  createTag 
} from '../lib/contacts-api';
import { Contact, ContactStatus } from '../types/contacts';

// Get all contacts for the current vendor
const contacts = await getContacts();

// Create a new contact
const newContact = await createContact({
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  status: 'lead'
});

// Search contacts
const searchResults = await getContacts({
  query: 'john',
  status: 'lead',
  limit: 10
});
```

## API Reference

### Contact Operations

#### `getContacts(params?: ContactSearchParams): Promise<ContactWithTags[]>`
Retrieve contacts with optional filtering, sorting, and pagination.

```typescript
const contacts = await getContacts({
  query: 'wedding',        // Search across name, email, company
  status: 'lead',          // Filter by status
  tag_ids: ['tag-1'],      // Filter by tags
  sort_by: 'created_at',   // Sort field
  sort_order: 'desc',      // Sort direction
  limit: 20,               // Pagination
  offset: 0
});
```

#### `createContact(payload: CreateContactPayload): Promise<Contact>`
Create a new contact.

```typescript
const contact = await createContact({
  first_name: 'Jane',
  last_name: 'Smith',
  email: 'jane@example.com',
  phone: '+1234567891',
  company_name: 'Smith Weddings',
  status: 'potential_customer',
  photo_mode: 'avatar',
  avatar_key: 'couple',
  sms_opt_in: true,
  email_opt_in: true,
  notes: 'Interested in venue booking for June 2024'
});
```

#### `updateContact(payload: UpdateContactPayload): Promise<Contact>`
Update an existing contact.

```typescript
const updated = await updateContact({
  id: 'contact-id',
  status: 'customer',
  notes: 'Booked venue for June 15, 2024'
});
```

### Tag Operations

#### `getTags(): Promise<ContactTag[]>`
Get all tags for the current vendor.

#### `createTag(payload: CreateTagPayload): Promise<ContactTag>`
Create a new tag.

```typescript
const tag = await createTag({
  name: 'VIP Client',
  color: '#10B981'
});
```

#### `addTagsToContact(contactId: string, tagIds: string[]): Promise<void>`
Add tags to a contact.

### Bulk Operations

#### `bulkContactOperation(operation: BulkContactOperation): Promise<void>`
Perform bulk operations on multiple contacts.

```typescript
await bulkContactOperation({
  contact_ids: ['id1', 'id2', 'id3'],
  operation: 'update_status',
  data: { status: 'customer' }
});

await bulkContactOperation({
  contact_ids: ['id1', 'id2'],
  operation: 'add_tags',
  data: { tag_ids: ['tag-1', 'tag-2'] }
});
```

## Contact Statuses

The system supports the following contact statuses:

- **`new_contact`** - Recently added contact
- **`lead`** - Potential customer showing interest  
- **`potential_customer`** - Strong interest, likely to book
- **`customer`** - Active paying customer
- **`inactive`** - No recent activity
- **`archived`** - Archived contact

## Photo Management

Contacts support three photo modes:

1. **`none`** - No photo
2. **`avatar`** - Predefined avatar selection (couple, flowers, camera, cake, etc.)
3. **`upload`** - Custom photo upload

Example avatar usage:
```typescript
const contact = await createContact({
  // ... other fields
  photo_mode: 'avatar',
  avatar_key: 'couple'  // Options: couple, flowers, camera, cake, rings, venue
});
```

## Search Capabilities

The system includes full-text search across:
- First name
- Last name  
- Email
- Company name

```typescript
// Search for "wedding planner"
const results = await getContacts({
  query: 'wedding planner'
});

// Search with filters
const leadResults = await getContacts({
  query: 'smith',
  status: 'lead',
  tag_ids: ['vip-tag']
});
```

## Security (RLS)

Row Level Security is automatically enforced:

- Vendors can only see/modify their own contacts
- Vendors can only see/modify their own tags
- Tag associations are validated through contact ownership

## Add Contact Wizard Integration

The types support a 3-step wizard flow:

### Step 1: Basic Info
```typescript
interface ContactWizardStep1 {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name?: string;
}
```

### Step 2: Status & Tags
```typescript
interface ContactWizardStep2 {
  status: ContactStatus;
  tag_ids: string[];
  notes?: string;
}
```

### Step 3: Photo & Preferences
```typescript
interface ContactWizardStep3 {
  photo_mode: PhotoSource;
  avatar_key?: string;
  photo_file?: File;
  sms_opt_in: boolean;
  email_opt_in: boolean;
}
```

## Statistics

Get contact statistics for dashboard displays:

```typescript
import { getContactStats } from '../lib/contacts-api';

const stats = await getContactStats();
// Returns:
// {
//   total_contacts: 150,
//   by_status: {
//     new_contact: 25,
//     lead: 45, 
//     potential_customer: 30,
//     customer: 40,
//     inactive: 8,
//     archived: 2
//   },
//   recent_contacts: 12,
//   contacts_with_tags: 89
// }
```

## Error Handling

All API functions throw errors that should be caught:

```typescript
try {
  const contacts = await getContacts();
} catch (error) {
  console.error('Failed to load contacts:', error);
  // Handle error appropriately
}
```

## Performance Considerations

The schema includes optimized indexes for:
- Vendor scoping queries
- Status filtering
- Date-based sorting
- Full-text search
- Tag associations

For large contact lists, use pagination:

```typescript
const pageSize = 50;
const page = 2;

const contacts = await getContacts({
  limit: pageSize,
  offset: page * pageSize
});
```

## Integration with Existing App

The contacts system is already integrated into the main app:

1. **Navigation**: "Contacts" view in vendor dashboard
2. **Components**: ContactsPage component with responsive table
3. **Types**: All types exported from `/types/index.ts`
4. **Routing**: Contacts route in main App.tsx

The ContactsPage already shows the empty state and is ready for connecting to the real API once the migration is applied.