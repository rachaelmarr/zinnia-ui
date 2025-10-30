// =========================
// Zinnia Contacts Types
// TypeScript definitions for contacts data model
// =========================

export type ContactStatus = 
  | 'new_contact'
  | 'lead' 
  | 'potential_customer'
  | 'customer'
  | 'inactive'
  | 'archived';

export type PhotoSource = 'avatar' | 'upload' | 'none';

export interface Contact {
  id: string;
  vendor_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name?: string;
  profile_image_url?: string;
  status?: string;
  tags: Tag[];
  created_at: string;
  updated_at: string;
  last_activity_at?: string;
}

export interface Tag {
  id?: string;
  name: string;
  color?: string;
}

export interface Activity {
  id: string;
  contact_id: string;
  vendor_id: string;
  type: string;
  summary: string;
  description?: string;
  created_at: string;
}

export interface Note {
  id: string;
  contact_id: string;
  vendor_id: string;
  type: 'note' | 'task';
  title: string;
  description: string;
  completed?: boolean;
  due_date?: string;
  created_at: string;
}

export interface ContactDetailData {
  contact: Contact;
  financial: {
    total_paid: number;
    total_owed: number;
    total_invoiced: number;
  };
  activities: Activity[];
  notes?: Note[];
}

export interface ContactTag {
  id: string;
  vendor_id: string;
  name: string;
  color?: string;
  created_at: string;
}

export interface ContactTagLink {
  contact_id: string;
  tag_id: string;
}

// Extended contact with tags
export interface ContactWithTags extends Contact {
  tags: ContactTag[];
}

// Contact creation payload (subset of Contact)
export interface CreateContactPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name?: string;
  status?: ContactStatus;
  photo_mode?: PhotoSource;
  avatar_key?: string;
  photo_url?: string;
  photo_meta?: Contact['photo_meta'];
  sms_opt_in?: boolean;
  email_opt_in?: boolean;
  notes?: string;
  source?: string;
}

// Contact update payload (partial contact)
export interface UpdateContactPayload extends Partial<CreateContactPayload> {
  id: string;
}

// Contact search/filter parameters
export interface ContactSearchParams {
  query?: string;           // Search across name, email, company
  status?: ContactStatus;   // Filter by status
  tag_ids?: string[];      // Filter by tag IDs
  limit?: number;
  offset?: number;
  sort_by?: 'created_at' | 'updated_at' | 'last_contacted_at' | 'first_name' | 'last_name';
  sort_order?: 'asc' | 'desc';
}

// Contact wizard step data (for Add Contact wizard)
export interface ContactWizardStep1 {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company_name?: string;
}

export interface ContactWizardStep2 {
  status: ContactStatus;
  tag_ids: string[];
  notes?: string;
}

export interface ContactWizardStep3 {
  photo_mode: PhotoSource;
  avatar_key?: string;
  photo_file?: File;     // For upload mode
  sms_opt_in: boolean;
  email_opt_in: boolean;
}

export interface ContactWizardData {
  step1?: ContactWizardStep1;
  step2?: ContactWizardStep2;
  step3?: ContactWizardStep3;
}

// Avatar options for the avatar selection step
export interface AvatarOption {
  key: string;
  label: string;
  icon: string;  // Icon name or URL
}

export const AVATAR_OPTIONS: AvatarOption[] = [
  { key: 'couple', label: 'Couple', icon: '👫' },
  { key: 'flowers', label: 'Flowers', icon: '💐' },
  { key: 'camera', label: 'Camera', icon: '📷' },
  { key: 'cake', label: 'Cake', icon: '🎂' },
  { key: 'rings', label: 'Rings', icon: '💍' },
  { key: 'venue', label: 'Venue', icon: '🏛️' },
];

// Status options with display labels and colors
export interface StatusOption {
  value: ContactStatus;
  label: string;
  color: string;
  description: string;
}

export const STATUS_OPTIONS: StatusOption[] = [
  { 
    value: 'new_contact', 
    label: 'New Contact', 
    color: '#6B7280', 
    description: 'Recently added contact' 
  },
  { 
    value: 'lead', 
    label: 'Lead', 
    color: '#F59E0B', 
    description: 'Potential customer showing interest' 
  },
  { 
    value: 'potential_customer', 
    label: 'Potential Customer', 
    color: '#3B82F6', 
    description: 'Strong interest, likely to book' 
  },
  { 
    value: 'customer', 
    label: 'Customer', 
    color: '#10B981', 
    description: 'Active paying customer' 
  },
  { 
    value: 'inactive', 
    label: 'Inactive', 
    color: '#8B5CF6', 
    description: 'No recent activity' 
  },
  { 
    value: 'archived', 
    label: 'Archived', 
    color: '#6B7280', 
    description: 'Archived contact' 
  },
];

// Tag creation payload
export interface CreateTagPayload {
  name: string;
  color?: string;
}

// Tag update payload
export interface UpdateTagPayload extends Partial<CreateTagPayload> {
  id: string;
}

// Bulk operations
export interface BulkContactOperation {
  contact_ids: string[];
  operation: 'update_status' | 'add_tags' | 'remove_tags' | 'archive' | 'delete';
  data?: {
    status?: ContactStatus;
    tag_ids?: string[];
  };
}

// Contact statistics
export interface ContactStats {
  total_contacts: number;
  by_status: Record<ContactStatus, number>;
  recent_contacts: number; // contacts added in last 30 days
  contacts_with_tags: number;
}

// =========================
// Contact Detail View Types
// =========================

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
export type PaymentMethod = 'stripe' | 'cash' | 'check' | 'bank_transfer' | 'other';
export type ActivityType = 'invoice' | 'payment' | 'sms' | 'email' | 'note' | 'meeting' | 'call' | 'contract' | 'other';

export interface Invoice {
  id: string;
  vendor_id: string;
  contact_id: string;
  
  // Invoice details
  invoice_number: string;
  title?: string;
  description?: string;
  
  // Financial
  total_amount: number;
  amount_paid: number;
  
  // Status
  status: InvoiceStatus;
  
  // Dates
  due_date?: string;
  paid_at?: string;
  sent_at?: string;
  
  // System fields
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  vendor_id: string;
  invoice_id: string;
  contact_id: string;
  
  // Payment details
  amount: number;
  method: PaymentMethod;
  
  // External references
  stripe_payment_intent_id?: string;
  transaction_id?: string;
  
  // Notes
  notes?: string;
  
  // System fields
  paid_at: string;
  created_at: string;
}

export interface Activity {
  id: string;
  vendor_id: string;
  contact_id: string;
  
  // Activity details
  type: ActivityType;
  summary: string;
  description?: string;
  
  // Related records
  invoice_id?: string;
  payment_id?: string;
  
  // Metadata
  metadata?: Record<string, any>;
  
  // System fields
  created_at: string;
}

// Contact detail view data
export interface ContactDetailData {
  contact: Contact;
  financial: {
    total_paid: number;
    total_owed: number;
    total_invoiced: number;
  };
  activities: Activity[];
  notes?: Note[];
}

// Computed financial summary
export interface ContactFinancialSummary {
  total_paid: number;    // sum of amount_paid where status='paid'
  total_owed: number;    // sum of (total_amount - amount_paid) where status!='paid'
  invoice_count: number;
  payment_count: number;
}

// Activity creation payload
export interface CreateActivityPayload {
  contact_id: string;
  type: ActivityType;
  summary: string;
  description?: string;
  invoice_id?: string;
  payment_id?: string;
  metadata?: Record<string, any>;
}

// Invoice creation payload
export interface CreateInvoicePayload {
  contact_id: string;
  invoice_number: string;
  title?: string;
  description?: string;
  total_amount: number;
  due_date?: string;
}

// Payment creation payload
export interface CreatePaymentPayload {
  invoice_id: string;
  contact_id: string;
  amount: number;
  method: PaymentMethod;
  stripe_payment_intent_id?: string;
  transaction_id?: string;
  notes?: string;
}