-- =========================
-- Contact Detail View Tables
-- PostgreSQL (Supabase)
-- =========================

-- Add profile_image_url and last_activity_at to contacts table
ALTER TABLE contacts 
ADD COLUMN IF NOT EXISTS profile_image_url text,
ADD COLUMN IF NOT EXISTS last_activity_at timestamptz;

-- -------------------------
-- INVOICES
-- -------------------------
CREATE TABLE IF NOT EXISTS invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  contact_id uuid NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  
  -- Invoice details
  invoice_number text NOT NULL,
  title text,
  description text,
  
  -- Financial
  total_amount decimal(10,2) NOT NULL DEFAULT 0,
  amount_paid decimal(10,2) NOT NULL DEFAULT 0,
  
  -- Status
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'sent', 'paid', 'overdue', 'cancelled')),
  
  -- Dates
  due_date date,
  paid_at timestamptz,
  sent_at timestamptz,
  
  -- System fields
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Unique invoice numbers per vendor
CREATE UNIQUE INDEX IF NOT EXISTS invoices_vendor_number_unique
  ON invoices (vendor_id, invoice_number);

-- Index for contact lookups
CREATE INDEX IF NOT EXISTS invoices_contact_idx ON invoices (contact_id);
CREATE INDEX IF NOT EXISTS invoices_vendor_status_idx ON invoices (vendor_id, status);
CREATE INDEX IF NOT EXISTS invoices_due_date_idx ON invoices (due_date);

-- -------------------------
-- PAYMENTS
-- -------------------------
CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  invoice_id uuid NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  contact_id uuid NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  
  -- Payment details
  amount decimal(10,2) NOT NULL,
  method text NOT NULL DEFAULT 'stripe' CHECK (method IN ('stripe', 'cash', 'check', 'bank_transfer', 'other')),
  
  -- External references
  stripe_payment_intent_id text,
  transaction_id text,
  
  -- Notes
  notes text,
  
  -- System fields
  paid_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for payments
CREATE INDEX IF NOT EXISTS payments_invoice_idx ON payments (invoice_id);
CREATE INDEX IF NOT EXISTS payments_contact_idx ON payments (contact_id);
CREATE INDEX IF NOT EXISTS payments_vendor_paid_at_idx ON payments (vendor_id, paid_at);

-- -------------------------
-- ACTIVITIES
-- -------------------------
CREATE TABLE IF NOT EXISTS activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vendor_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  contact_id uuid NOT NULL REFERENCES contacts(id) ON DELETE CASCADE,
  
  -- Activity details
  type text NOT NULL CHECK (type IN ('invoice', 'payment', 'sms', 'email', 'note', 'meeting', 'call', 'contract', 'other')),
  summary text NOT NULL,
  description text,
  
  -- Related records
  invoice_id uuid REFERENCES invoices(id) ON DELETE SET NULL,
  payment_id uuid REFERENCES payments(id) ON DELETE SET NULL,
  
  -- Metadata
  metadata jsonb DEFAULT '{}'::jsonb,
  
  -- System fields
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Indexes for activities
CREATE INDEX IF NOT EXISTS activities_contact_created_idx ON activities (contact_id, created_at DESC);
CREATE INDEX IF NOT EXISTS activities_vendor_created_idx ON activities (vendor_id, created_at DESC);
CREATE INDEX IF NOT EXISTS activities_type_idx ON activities (type);

-- -------------------------
-- TRIGGERS
-- -------------------------

-- Update invoice updated_at on change
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END $$;

CREATE TRIGGER IF NOT EXISTS trg_invoices_set_updated_at
  BEFORE UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Auto-update contact last_activity_at when activities are created
CREATE OR REPLACE FUNCTION update_contact_last_activity()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  UPDATE contacts 
  SET last_activity_at = NEW.created_at
  WHERE id = NEW.contact_id;
  RETURN NEW;
END $$;

CREATE TRIGGER IF NOT EXISTS trg_activities_update_contact_last_activity
  AFTER INSERT ON activities
  FOR EACH ROW EXECUTE FUNCTION update_contact_last_activity();

-- Auto-create activity when invoice is created/updated
CREATE OR REPLACE FUNCTION create_invoice_activity()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  -- Handle invoice creation
  IF TG_OP = 'INSERT' THEN
    INSERT INTO activities (vendor_id, contact_id, invoice_id, type, summary)
    VALUES (NEW.vendor_id, NEW.contact_id, NEW.id, 'invoice', 
           'Invoice ' || NEW.invoice_number || ' created');
    RETURN NEW;
  END IF;
  
  -- Handle status changes
  IF TG_OP = 'UPDATE' AND OLD.status != NEW.status THEN
    INSERT INTO activities (vendor_id, contact_id, invoice_id, type, summary)
    VALUES (NEW.vendor_id, NEW.contact_id, NEW.id, 'invoice',
           'Invoice ' || NEW.invoice_number || ' status changed to ' || NEW.status);
    RETURN NEW;
  END IF;
  
  RETURN NEW;
END $$;

CREATE TRIGGER IF NOT EXISTS trg_invoices_create_activity
  AFTER INSERT OR UPDATE ON invoices
  FOR EACH ROW EXECUTE FUNCTION create_invoice_activity();

-- Auto-create activity when payment is received
CREATE OR REPLACE FUNCTION create_payment_activity()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO activities (vendor_id, contact_id, payment_id, invoice_id, type, summary)
  VALUES (NEW.vendor_id, NEW.contact_id, NEW.id, NEW.invoice_id, 'payment',
         'Payment of $' || NEW.amount || ' received via ' || NEW.method);
  RETURN NEW;
END $$;

CREATE TRIGGER IF NOT EXISTS trg_payments_create_activity
  AFTER INSERT ON payments
  FOR EACH ROW EXECUTE FUNCTION create_payment_activity();

-- -------------------------
-- RLS POLICIES
-- -------------------------

-- Invoices
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "invoices_select_own"
  ON invoices FOR SELECT
  USING (vendor_id = auth.uid());

CREATE POLICY IF NOT EXISTS "invoices_modify_own"
  ON invoices FOR ALL
  USING (vendor_id = auth.uid())
  WITH CHECK (vendor_id = auth.uid());

-- Payments
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "payments_select_own"
  ON payments FOR SELECT
  USING (vendor_id = auth.uid());

CREATE POLICY IF NOT EXISTS "payments_modify_own"
  ON payments FOR ALL
  USING (vendor_id = auth.uid())
  WITH CHECK (vendor_id = auth.uid());

-- Activities
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

CREATE POLICY IF NOT EXISTS "activities_select_own"
  ON activities FOR SELECT
  USING (vendor_id = auth.uid());

CREATE POLICY IF NOT EXISTS "activities_modify_own"
  ON activities FOR ALL
  USING (vendor_id = auth.uid())
  WITH CHECK (vendor_id = auth.uid());

-- -------------------------
-- SAMPLE DATA
-- -------------------------
-- Note: This sample data will need to be inserted with actual vendor_id and contact_id values
-- The triggers will automatically create activities for invoices and payments

-- Example of how to insert sample data (uncomment and update with real IDs):
/*
-- Sample invoice (will trigger activity creation)
INSERT INTO invoices (vendor_id, contact_id, invoice_number, title, total_amount, amount_paid, status, due_date, created_at)
VALUES 
  ('[VENDOR_ID]', '[CONTACT_ID]', 'INV-001', 'Wedding Photography Package', 3000.00, 1000.00, 'sent', '2025-03-15', '2025-02-01 10:00:00'),
  ('[VENDOR_ID]', '[CONTACT_ID]', 'INV-002', 'Final Payment Due', 2000.00, 0.00, 'overdue', '2025-02-01', '2025-01-15 14:30:00');

-- Sample payment (will trigger activity creation)
INSERT INTO payments (vendor_id, contact_id, invoice_id, amount, method, paid_at)
VALUES 
  ('[VENDOR_ID]', '[CONTACT_ID]', '[INVOICE_1_ID]', 1000.00, 'stripe', '2025-02-13 12:35:00');

-- Sample manual activities
INSERT INTO activities (vendor_id, contact_id, type, summary, description, created_at)
VALUES 
  ('[VENDOR_ID]', '[CONTACT_ID]', 'note', 'Internal Note Added', 'Client prefers blush and gold color theme.', '2025-02-20 12:35:00'),
  ('[VENDOR_ID]', '[CONTACT_ID]', 'meeting', 'Meeting completed', 'Venue tour completed. Sarah loved the ballroom!', '2025-02-10 12:35:00'),
  ('[VENDOR_ID]', '[CONTACT_ID]', 'contract', 'Contract signed', 'Sarah & James signed the agreement.', '2025-02-10 12:35:00'),
  ('[VENDOR_ID]', '[CONTACT_ID]', 'email', 'Bulk email sent', 'Sent "Final Details Reminder" to all booked clients.', '2025-03-01 12:35:00'),
  ('[VENDOR_ID]', '[CONTACT_ID]', 'sms', 'SMS Sent', 'Final invoice overdue -- reminder sent.', '2025-03-05 12:35:00');
*/

-- -------------------------
-- COMMENTS
-- -------------------------
COMMENT ON TABLE invoices IS 'Vendor invoices for contacts';
COMMENT ON TABLE payments IS 'Payment records for invoices';
COMMENT ON TABLE activities IS 'Activity timeline for contacts';

COMMENT ON COLUMN contacts.profile_image_url IS 'URL to contact profile image (uploaded photo)';
COMMENT ON COLUMN contacts.last_activity_at IS 'Timestamp of most recent activity for this contact';