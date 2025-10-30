// Calendar API functions for interacting with Supabase calendar tables
import { supabase } from './supabase';

// Types for the calendar tables
export interface CalendarDay {
  id: string;
  vendor_id: string;
  date: string; // ISO date string (YYYY-MM-DD)
  is_blocked: boolean;
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  vendor_id: string;
  client_name: string;
  client_profile_url?: string;
  start_time: string; // ISO timestamp
  end_time: string; // ISO timestamp
  arrival_time?: string; // HH:MM format
  status: 'tentative' | 'confirmed' | 'cancelled';
  location_address: string;
  location_lat?: number;
  location_lng?: number;
  total_guests: number;
  total_payout: number;
  travel_time_minutes?: number;
  notes?: string;
  attachment_url?: string;
  created_at: string;
  updated_at: string;
}

// Calendar Days API
export const calendarDaysApi = {
  // Get all blocked dates for a vendor
  async getBlockedDates(vendorId: string): Promise<CalendarDay[]> {
    const { data, error } = await supabase
      .from('calendar_days')
      .select('*')
      .eq('vendor_id', vendorId)
      .eq('is_blocked', true)
      .order('date', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Get calendar days for a specific date range
  async getCalendarDays(vendorId: string, startDate: string, endDate: string): Promise<CalendarDay[]> {
    const { data, error } = await supabase
      .from('calendar_days')
      .select('*')
      .eq('vendor_id', vendorId)
      .gte('date', startDate)
      .lte('date', endDate)
      .order('date', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Block a specific date
  async blockDate(vendorId: string, date: string, notes?: string): Promise<CalendarDay> {
    const { data, error } = await supabase
      .from('calendar_days')
      .upsert({
        vendor_id: vendorId,
        date,
        is_blocked: true,
        notes
      }, {
        onConflict: 'vendor_id,date'
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Unblock a specific date
  async unblockDate(vendorId: string, date: string): Promise<void> {
    const { error } = await supabase
      .from('calendar_days')
      .delete()
      .eq('vendor_id', vendorId)
      .eq('date', date);

    if (error) throw error;
  },

  // Update notes for a blocked date
  async updateNotes(vendorId: string, date: string, notes: string): Promise<CalendarDay> {
    const { data, error } = await supabase
      .from('calendar_days')
      .update({ notes })
      .eq('vendor_id', vendorId)
      .eq('date', date)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};

// Events API
export const eventsApi = {
  // Get all events for a vendor
  async getEvents(vendorId: string): Promise<Event[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('vendor_id', vendorId)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Get events for a specific date range
  async getEventsInRange(vendorId: string, startDate: string, endDate: string): Promise<Event[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('vendor_id', vendorId)
      .gte('start_time', startDate)
      .lte('start_time', endDate)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Get events by status
  async getEventsByStatus(vendorId: string, status: Event['status']): Promise<Event[]> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('vendor_id', vendorId)
      .eq('status', status)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Create a new event
  async createEvent(eventData: Omit<Event, 'id' | 'created_at' | 'updated_at'>): Promise<Event> {
    const { data, error } = await supabase
      .from('events')
      .insert(eventData)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Update an event
  async updateEvent(eventId: string, updates: Partial<Event>): Promise<Event> {
    const { data, error } = await supabase
      .from('events')
      .update(updates)
      .eq('id', eventId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  // Confirm an event (change status to confirmed)
  async confirmEvent(eventId: string): Promise<Event> {
    return this.updateEvent(eventId, { status: 'confirmed' });
  },

  // Cancel an event
  async cancelEvent(eventId: string): Promise<Event> {
    return this.updateEvent(eventId, { status: 'cancelled' });
  },

  // Delete an event
  async deleteEvent(eventId: string): Promise<void> {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', eventId);

    if (error) throw error;
  },

  // Get event by ID
  async getEvent(eventId: string): Promise<Event | null> {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('id', eventId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // No rows returned
      throw error;
    }
    return data;
  }
};

// Helper functions for calendar integration
export const calendarHelpers = {
  // Check if a date is blocked
  async isDateBlocked(vendorId: string, date: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('calendar_days')
      .select('id')
      .eq('vendor_id', vendorId)
      .eq('date', date)
      .eq('is_blocked', true)
      .single();

    if (error && error.code !== 'PGRST116') throw error;
    return !!data;
  },

  // Get events for a specific date
  async getEventsForDate(vendorId: string, date: string): Promise<Event[]> {
    const startOfDay = `${date}T00:00:00.000Z`;
    const endOfDay = `${date}T23:59:59.999Z`;

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('vendor_id', vendorId)
      .gte('start_time', startOfDay)
      .lte('start_time', endOfDay)
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Get upcoming events (next 30 days)
  async getUpcomingEvents(vendorId: string): Promise<Event[]> {
    const now = new Date().toISOString();
    const futureDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from('events')
      .select('*')
      .eq('vendor_id', vendorId)
      .gte('start_time', now)
      .lte('start_time', futureDate)
      .in('status', ['tentative', 'confirmed'])
      .order('start_time', { ascending: true });

    if (error) throw error;
    return data || [];
  },

  // Get events needing confirmation (tentative status)
  async getEventsNeedingConfirmation(vendorId: string): Promise<Event[]> {
    return eventsApi.getEventsByStatus(vendorId, 'tentative');
  },

  // Format date for database storage (YYYY-MM-DD)
  formatDateForDb(date: Date): string {
    return date.toISOString().split('T')[0];
  },

  // Format datetime for database storage
  formatDateTimeForDb(date: Date): string {
    return date.toISOString();
  },

  // Parse date from database
  parseDate(dateString: string): Date {
    return new Date(dateString);
  }
};