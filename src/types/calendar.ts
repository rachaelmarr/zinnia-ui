// Calendar-related TypeScript types

export type EventStatus = 'tentative' | 'confirmed' | 'cancelled';

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
  status: EventStatus;
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

// Form data types for creating/updating
export interface CreateEventData extends Omit<Event, 'id' | 'created_at' | 'updated_at'> {}

export interface UpdateEventData extends Partial<Omit<Event, 'id' | 'vendor_id' | 'created_at' | 'updated_at'>> {}

export interface CreateCalendarDayData extends Omit<CalendarDay, 'id' | 'created_at' | 'updated_at'> {}

export interface UpdateCalendarDayData extends Partial<Omit<CalendarDay, 'id' | 'vendor_id' | 'created_at' | 'updated_at'>> {}

// Calendar view types
export interface CalendarDayWithEvents {
  date: string;
  isBlocked: boolean;
  blockNotes?: string;
  events: Event[];
  isToday: boolean;
  isCurrentMonth: boolean;
}

export interface MonthViewData {
  year: number;
  month: number;
  days: CalendarDayWithEvents[];
  blockedDates: string[];
  events: Event[];
}

// Event sidebar data
export interface EventSidebarData {
  event: Event;
  canConfirm: boolean;
  canCancel: boolean;
  hasConflicts: boolean;
}

// Filter and search types
export interface EventFilters {
  status?: EventStatus[];
  dateRange?: {
    start: string;
    end: string;
  };
  searchText?: string;
  minPayout?: number;
  maxPayout?: number;
}

export interface CalendarFilters {
  dateRange?: {
    start: string;
    end: string;
  };
  showBlocked?: boolean;
  showEvents?: boolean;
}

// Calendar statistics
export interface CalendarStats {
  totalEvents: number;
  confirmedEvents: number;
  tentativeEvents: number;
  cancelledEvents: number;
  totalRevenue: number;
  averageEventValue: number;
  blockedDays: number;
  availableDays: number;
}

// Location data
export interface LocationData {
  address: string;
  lat?: number;
  lng?: number;
  travelTime?: number; // in minutes
}

// Time-related utilities
export interface TimeSlot {
  start: string; // HH:MM format
  end: string; // HH:MM format
}

export interface EventTimeDetails {
  start_time: string;
  end_time: string;
  arrival_time?: string;
  duration: number; // in minutes
  travel_time_minutes?: number;
}

// Conflict detection
export interface EventConflict {
  conflictingEventId: string;
  conflictType: 'time_overlap' | 'travel_time_conflict' | 'same_day_multiple';
  message: string;
}

export interface ConflictCheckResult {
  hasConflicts: boolean;
  conflicts: EventConflict[];
  suggestedTimes?: TimeSlot[];
}

// Notification/reminder types
export interface EventReminder {
  eventId: string;
  reminderType: 'confirmation_needed' | 'event_tomorrow' | 'travel_reminder';
  message: string;
  dueDate: string;
}

// Export utility types
export interface CalendarExportData {
  events: Event[];
  blockedDates: CalendarDay[];
  dateRange: {
    start: string;
    end: string;
  };
  format: 'ics' | 'csv' | 'json';
}

// Recurring event support (for future use)
export interface RecurringEventPattern {
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number; // every N days/weeks/months/years
  endDate?: string;
  occurrences?: number;
}

export interface RecurringEvent extends Event {
  is_recurring: boolean;
  recurring_pattern?: RecurringEventPattern;
  parent_event_id?: string;
}