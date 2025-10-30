// =========================
// Zinnia Contacts API
// Supabase client functions for contacts management
// =========================

import { supabase } from './supabase';
import { 
  Contact, 
  ContactWithTags,
  ContactTag, 
  CreateContactPayload, 
  UpdateContactPayload,
  ContactSearchParams,
  CreateTagPayload,
  UpdateTagPayload,
  BulkContactOperation,
  ContactStats,
  ContactDetailData,
  ContactFinancialSummary,
  Invoice,
  Payment,
  Activity,
  CreateInvoicePayload,
  CreatePaymentPayload,
  CreateActivityPayload
} from '../types/contacts';

// Supabase client is centralized in src/lib/supabase

// =========================
// CONTACTS CRUD
// =========================

/**
 * Get all contacts for the current vendor with optional filters
 */
export async function getContacts(params: ContactSearchParams = {}): Promise<ContactWithTags[]> {
  try {
    let query = supabase
      .from('contacts')
      .select(`
        *,
        tags:contact_tag_links(
          tag:contact_tags(*)
        )
      `);

    // Apply filters
    if (params.status) {
      query = query.eq('status', params.status);
    }

    if (params.query) {
      // Use the full-text search index
      query = query.textSearch('to_tsvector_simple', params.query);
    }

    // Apply sorting
    const sortBy = params.sort_by || 'created_at';
    const sortOrder = params.sort_order || 'desc';
    query = query.order(sortBy, { ascending: sortOrder === 'asc' });

    // Apply pagination
    if (params.limit) {
      query = query.limit(params.limit);
    }
    if (params.offset) {
      query = query.range(params.offset, params.offset + (params.limit || 50) - 1);
    }

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }

    // Transform the data to include tags properly
    const contacts: ContactWithTags[] = (data || []).map(contact => ({
      ...contact,
      tags: contact.tags?.map((tl: any) => tl.tag).filter(Boolean) || []
    }));

    // Filter by tags if specified
    if (params.tag_ids && params.tag_ids.length > 0) {
      return contacts.filter(contact => 
        contact.tags.some(tag => params.tag_ids!.includes(tag.id))
      );
    }

    return contacts;
  } catch (error) {
    console.error('Error in getContacts:', error);
    throw error;
  }
}

/**
 * Get a single contact by ID
 */
export async function getContact(id: string): Promise<ContactWithTags | null> {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select(`
        *,
        tags:contact_tag_links(
          tag:contact_tags(*)
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw error;
    }

    return {
      ...data,
      tags: data.tags?.map((tl: any) => tl.tag).filter(Boolean) || []
    };
  } catch (error) {
    console.error('Error in getContact:', error);
    throw error;
  }
}

/**
 * Create a new contact
 */
export async function createContact(payload: CreateContactPayload): Promise<Contact> {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        ...payload,
        vendor_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating contact:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createContact:', error);
    throw error;
  }
}

/**
 * Update an existing contact
 */
export async function updateContact(payload: UpdateContactPayload): Promise<Contact> {
  try {
    const { id, ...updateData } = payload;
    
    const { data, error } = await supabase
      .from('contacts')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating contact:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateContact:', error);
    throw error;
  }
}

/**
 * Delete a contact
 */
export async function deleteContact(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting contact:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deleteContact:', error);
    throw error;
  }
}

/**
 * Archive a contact (soft delete)
 */
export async function archiveContact(id: string): Promise<Contact> {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .update({ 
        status: 'archived',
        archived_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error archiving contact:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in archiveContact:', error);
    throw error;
  }
}

// =========================
// TAGS CRUD
// =========================

/**
 * Get all tags for the current vendor
 */
export async function getTags(): Promise<ContactTag[]> {
  try {
    const { data, error } = await supabase
      .from('contact_tags')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getTags:', error);
    throw error;
  }
}

/**
 * Create a new tag
 */
export async function createTag(payload: CreateTagPayload): Promise<ContactTag> {
  try {
    const { data, error } = await supabase
      .from('contact_tags')
      .insert([{
        ...payload,
        vendor_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating tag:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createTag:', error);
    throw error;
  }
}

/**
 * Update an existing tag
 */
export async function updateTag(payload: UpdateTagPayload): Promise<ContactTag> {
  try {
    const { id, ...updateData } = payload;
    
    const { data, error } = await supabase
      .from('contact_tags')
      .update(updateData)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating tag:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in updateTag:', error);
    throw error;
  }
}

/**
 * Delete a tag
 */
export async function deleteTag(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('contact_tags')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting tag:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in deleteTag:', error);
    throw error;
  }
}

// =========================
// TAG ASSOCIATIONS
// =========================

/**
 * Add tags to a contact
 */
export async function addTagsToContact(contactId: string, tagIds: string[]): Promise<void> {
  try {
    const links = tagIds.map(tagId => ({
      contact_id: contactId,
      tag_id: tagId
    }));

    const { error } = await supabase
      .from('contact_tag_links')
      .insert(links);

    if (error) {
      console.error('Error adding tags to contact:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in addTagsToContact:', error);
    throw error;
  }
}

/**
 * Remove tags from a contact
 */
export async function removeTagsFromContact(contactId: string, tagIds: string[]): Promise<void> {
  try {
    const { error } = await supabase
      .from('contact_tag_links')
      .delete()
      .eq('contact_id', contactId)
      .in('tag_id', tagIds);

    if (error) {
      console.error('Error removing tags from contact:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in removeTagsFromContact:', error);
    throw error;
  }
}

/**
 * Replace all tags for a contact
 */
export async function replaceContactTags(contactId: string, tagIds: string[]): Promise<void> {
  try {
    // Remove all existing tags
    await supabase
      .from('contact_tag_links')
      .delete()
      .eq('contact_id', contactId);

    // Add new tags if any
    if (tagIds.length > 0) {
      await addTagsToContact(contactId, tagIds);
    }
  } catch (error) {
    console.error('Error in replaceContactTags:', error);
    throw error;
  }
}

// =========================
// BULK OPERATIONS
// =========================

/**
 * Perform bulk operations on multiple contacts
 */
export async function bulkContactOperation(operation: BulkContactOperation): Promise<void> {
  try {
    const { contact_ids, operation: op, data: opData } = operation;

    switch (op) {
      case 'update_status':
        if (!opData?.status) throw new Error('Status is required for update_status operation');
        await supabase
          .from('contacts')
          .update({ status: opData.status })
          .in('id', contact_ids);
        break;

      case 'add_tags':
        if (!opData?.tag_ids) throw new Error('Tag IDs are required for add_tags operation');
        for (const contactId of contact_ids) {
          await addTagsToContact(contactId, opData.tag_ids);
        }
        break;

      case 'remove_tags':
        if (!opData?.tag_ids) throw new Error('Tag IDs are required for remove_tags operation');
        for (const contactId of contact_ids) {
          await removeTagsFromContact(contactId, opData.tag_ids);
        }
        break;

      case 'archive':
        await supabase
          .from('contacts')
          .update({ 
            status: 'archived',
            archived_at: new Date().toISOString()
          })
          .in('id', contact_ids);
        break;

      case 'delete':
        await supabase
          .from('contacts')
          .delete()
          .in('id', contact_ids);
        break;

      default:
        throw new Error(`Unknown operation: ${op}`);
    }
  } catch (error) {
    console.error('Error in bulkContactOperation:', error);
    throw error;
  }
}

// =========================
// STATISTICS
// =========================

/**
 * Get contact statistics for the current vendor
 */
export async function getContactStats(): Promise<ContactStats> {
  try {
    // Get total contacts
    const { count: totalContacts } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true });

    // Get contacts by status
    const { data: statusData } = await supabase
      .from('contacts')
      .select('status')
      .not('status', 'eq', 'archived');

    const byStatus: Record<string, number> = {
      new_contact: 0,
      lead: 0,
      potential_customer: 0,
      customer: 0,
      inactive: 0,
      archived: 0
    };

    statusData?.forEach(contact => {
      byStatus[contact.status] = (byStatus[contact.status] || 0) + 1;
    });

    // Get recent contacts (last 30 days)
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { count: recentContacts } = await supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true })
      .gte('created_at', thirtyDaysAgo.toISOString());

    // Get contacts with tags
    const { data: taggedContactsData } = await supabase
      .from('contact_tag_links')
      .select('contact_id');

    const uniqueTaggedContacts = new Set(taggedContactsData?.map(link => link.contact_id));

    return {
      total_contacts: totalContacts || 0,
      by_status: byStatus as Record<ContactStatus, number>,
      recent_contacts: recentContacts || 0,
      contacts_with_tags: uniqueTaggedContacts.size
    };
  } catch (error) {
    console.error('Error in getContactStats:', error);
    throw error;
  }
}

// =========================
// UTILITY FUNCTIONS
// =========================

/**
 * Search contacts across multiple fields
 */
export async function searchContacts(query: string, limit = 20): Promise<ContactWithTags[]> {
  return getContacts({
    query,
    limit,
    sort_by: 'updated_at',
    sort_order: 'desc'
  });
}

/**
 * Get contacts by status
 */
export async function getContactsByStatus(status: ContactStatus): Promise<ContactWithTags[]> {
  return getContacts({
    status,
    sort_by: 'updated_at',
    sort_order: 'desc'
  });
}

/**
 * Get contacts by tag
 */
export async function getContactsByTag(tagId: string): Promise<ContactWithTags[]> {
  return getContacts({
    tag_ids: [tagId],
    sort_by: 'updated_at',
    sort_order: 'desc'
  });
}

/**
 * Update contact's last contacted timestamp
 */
export async function markContactAsContacted(contactId: string): Promise<void> {
  try {
    await supabase
      .from('contacts')
      .update({ last_contacted_at: new Date().toISOString() })
      .eq('id', contactId);
  } catch (error) {
    console.error('Error marking contact as contacted:', error);
    throw error;
  }
}

// =========================
// CONTACT DETAIL VIEW
// =========================

/**
 * Get complete contact detail data including financial summary and activities
 */
export async function getContactDetailData(contactId: string): Promise<ContactDetailData | null> {
  try {
    // Get contact with tags
    const contact = await getContact(contactId);
    if (!contact) return null;

    // Get financial data (invoices and payments)
    const [invoices, payments, activities] = await Promise.all([
      getContactInvoices(contactId),
      getContactPayments(contactId),
      getContactActivities(contactId)
    ]);

    // Calculate financial summary
    const financial = calculateFinancialSummary(invoices);

    return {
      contact,
      financial,
      activities,
      invoices,
      payments
    };
  } catch (error) {
    console.error('Error in getContactDetailData:', error);
    throw error;
  }
}

/**
 * Get all invoices for a contact
 */
export async function getContactInvoices(contactId: string): Promise<Invoice[]> {
  try {
    const { data, error } = await supabase
      .from('invoices')
      .select('*')
      .eq('contact_id', contactId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact invoices:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getContactInvoices:', error);
    throw error;
  }
}

/**
 * Get all payments for a contact
 */
export async function getContactPayments(contactId: string): Promise<Payment[]> {
  try {
    const { data, error } = await supabase
      .from('payments')
      .select('*')
      .eq('contact_id', contactId)
      .order('paid_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact payments:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getContactPayments:', error);
    throw error;
  }
}

/**
 * Get all activities for a contact
 */
export async function getContactActivities(contactId: string): Promise<Activity[]> {
  try {
    const { data, error } = await supabase
      .from('activities')
      .select('*')
      .eq('contact_id', contactId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contact activities:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error in getContactActivities:', error);
    throw error;
  }
}

/**
 * Calculate financial summary from invoices
 */
export function calculateFinancialSummary(invoices: Invoice[]): ContactFinancialSummary {
  let total_paid = 0;
  let total_owed = 0;
  
  invoices.forEach(invoice => {
    if (invoice.status === 'paid') {
      total_paid += invoice.amount_paid;
    } else if (invoice.status !== 'cancelled') {
      // For non-cancelled invoices, calculate what's still owed
      total_owed += (invoice.total_amount - invoice.amount_paid);
    }
  });

  return {
    total_paid,
    total_owed,
    invoice_count: invoices.length,
    payment_count: invoices.filter(inv => inv.amount_paid > 0).length
  };
}

/**
 * Create a new invoice
 */
export async function createInvoice(payload: CreateInvoicePayload): Promise<Invoice> {
  try {
    const { data, error } = await supabase
      .from('invoices')
      .insert([{
        ...payload,
        vendor_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating invoice:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createInvoice:', error);
    throw error;
  }
}

/**
 * Create a new payment
 */
export async function createPayment(payload: CreatePaymentPayload): Promise<Payment> {
  try {
    const { data, error } = await supabase
      .from('payments')
      .insert([{
        ...payload,
        vendor_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating payment:', error);
      throw error;
    }

    // Update invoice amount_paid
    await updateInvoicePaidAmount(payload.invoice_id);

    return data;
  } catch (error) {
    console.error('Error in createPayment:', error);
    throw error;
  }
}

/**
 * Create a new activity
 */
export async function createActivity(payload: CreateActivityPayload): Promise<Activity> {
  try {
    const { data, error } = await supabase
      .from('activities')
      .insert([{
        ...payload,
        vendor_id: (await supabase.auth.getUser()).data.user?.id
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating activity:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error in createActivity:', error);
    throw error;
  }
}

/**
 * Update invoice paid amount based on payments
 */
async function updateInvoicePaidAmount(invoiceId: string): Promise<void> {
  try {
    // Get all payments for this invoice
    const { data: payments } = await supabase
      .from('payments')
      .select('amount')
      .eq('invoice_id', invoiceId);

    // Calculate total paid
    const totalPaid = payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0;

    // Update invoice
    await supabase
      .from('invoices')
      .update({ amount_paid: totalPaid })
      .eq('id', invoiceId);

    // Also update status to paid if fully paid
    const { data: invoice } = await supabase
      .from('invoices')
      .select('total_amount, amount_paid')
      .eq('id', invoiceId)
      .single();

    if (invoice && invoice.amount_paid >= invoice.total_amount) {
      await supabase
        .from('invoices')
        .update({ 
          status: 'paid',
          paid_at: new Date().toISOString()
        })
        .eq('id', invoiceId);
    }
  } catch (error) {
    console.error('Error updating invoice paid amount:', error);
    throw error;
  }
}

/**
 * Update contact information with inline editing
 */
export async function updateContactField(contactId: string, field: string, value: any): Promise<void> {
  try {
    const updateData: Record<string, any> = { [field]: value };
    
    const { error } = await supabase
      .from('contacts')
      .update(updateData)
      .eq('id', contactId);

    if (error) {
      console.error('Error updating contact field:', error);
      throw error;
    }
  } catch (error) {
    console.error('Error in updateContactField:', error);
    throw error;
  }
}

export default {
  // Contacts
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  archiveContact,
  
  // Tags
  getTags,
  createTag,
  updateTag,
  deleteTag,
  
  // Tag associations
  addTagsToContact,
  removeTagsFromContact,
  replaceContactTags,
  
  // Bulk operations
  bulkContactOperation,
  
  // Statistics
  getContactStats,
  
  // Utilities
  searchContacts,
  getContactsByStatus,
  getContactsByTag,
  markContactAsContacted,
  
  // Contact detail view
  getContactDetailData,
  getContactInvoices,
  getContactPayments,
  getContactActivities,
  calculateFinancialSummary,
  createInvoice,
  createPayment,
  createActivity,
  updateContactField
};