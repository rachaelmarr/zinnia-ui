# Calendar CRM Setup Guide

This document explains how to set up and use the calendar CRM tables for vendor booking management.

## Database Tables

### 1. calendar_days
Stores blocked dates for vendor availability management.

**Fields:**
- `id` - UUID primary key
- `vendor_id` - UUID foreign key to vendors.id
- `date` - Date (YYYY-MM-DD format)
- `is_blocked` - Boolean (default: true)
- `notes` - Optional text notes
- `created_at` - Timestamp
- `updated_at` - Timestamp (auto-updated)

**Constraints:**
- Unique constraint on (vendor_id, date)
- Cascade delete when vendor is deleted

### 2. events
Stores event bookings with full event details and status tracking.

**Fields:**
- `id` - UUID primary key
- `vendor_id` - UUID foreign key to vendors.id
- `client_name` - Text (e.g., "Kent + Rogers Wedding")
- `client_profile_url` - Optional text
- `start_time` - Timestamp with timezone
- `end_time` - Timestamp with timezone
- `arrival_time` - Time (HH:MM format)
- `status` - Enum: 'tentative', 'confirmed', 'cancelled'
- `location_address` - Text
- `location_lat` - Optional float
- `location_lng` - Optional float
- `total_guests` - Integer
- `total_payout` - Decimal(10,2)
- `travel_time_minutes` - Optional integer
- `notes` - Optional text
- `attachment_url` - Optional text (for files/images)
- `created_at` - Timestamp (default: now)
- `updated_at` - Timestamp (auto-updated)

**Constraints:**
- end_time must be after start_time
- Positive values for guests, payout, travel_time
- Cascade delete when vendor is deleted

## Setup Instructions

### 1. Run Migration
```bash
# Apply the database migration
psql -h your-supabase-host -d your-database -f supabase/migrations/create_calendar_tables.sql
```

Or use Supabase CLI:
```bash
supabase db push
```

### 2. Security (RLS Policies)
The migration automatically creates Row Level Security policies that ensure:
- Vendors can only access their own calendar days and events
- Authentication is required via Supabase auth
- CRUD operations are restricted to the vendor who owns the data

### 3. API Integration
Use the provided API functions in `/lib/calendar-api.ts`:

```typescript
import { calendarDaysApi, eventsApi, calendarHelpers } from './lib/calendar-api';

// Block a date
await calendarDaysApi.blockDate(vendorId, '2024-03-15', 'Personal day off');

// Create an event
await eventsApi.createEvent({
  vendor_id: vendorId,
  client_name: 'Smith Wedding',
  start_time: '2024-03-20T14:00:00Z',
  end_time: '2024-03-20T22:00:00Z',
  status: 'tentative',
  location_address: '123 Venue St, Chicago, IL',
  total_guests: 150,
  total_payout: 2500.00
});

// Confirm an event
await eventsApi.confirmEvent(eventId);
```

## Frontend Integration

### Calendar View Integration
The tables support the responsive calendar component with:

1. **Event Pills**: Display event time and client name
2. **Status Indicators**: Visual differentiation between tentative/confirmed/cancelled
3. **Blocked Dates**: Show diagonal lines or different styling for blocked days
4. **Event Sidebar**: Detailed event information with confirm/cancel actions

### Key Frontend Features Supported:

#### Event Cards
- Time and status display
- Client name and guest count
- Location with optional map integration
- Payout information

#### Confirmation Workflow
- Confirm/decline actions for tentative events
- Status updates with real-time sync
- Conflict detection for overlapping events

#### Availability Management
- Block/unblock individual dates
- Notes for blocked dates
- Visual indicators in calendar view

#### Event Details Sidebar
- Full event information display
- Arrival time and travel time
- Location with map integration (using lat/lng)
- Attachment viewing (contracts, images, PDFs)
- Notes editing

## Usage Examples

### Block a Date
```typescript
// Block December 25th for Christmas
await calendarDaysApi.blockDate(
  vendorId, 
  '2024-12-25', 
  'Christmas Day - Personal time'
);
```

### Get Events for Calendar Display
```typescript
// Get all events for the current month
const events = await eventsApi.getEventsInRange(
  vendorId,
  '2024-03-01T00:00:00Z',
  '2024-03-31T23:59:59Z'
);

// Group by date for calendar display
const eventsByDate = events.reduce((acc, event) => {
  const date = event.start_time.split('T')[0];
  acc[date] = acc[date] || [];
  acc[date].push(event);
  return acc;
}, {});
```

### Confirm an Event
```typescript
// User clicks confirm button in sidebar
const confirmedEvent = await eventsApi.confirmEvent(eventId);

// Update UI to show confirmed status
setEventStatus(confirmedEvent.status);
```

### Check for Conflicts
```typescript
// Before confirming, check for time conflicts
const dateEvents = await calendarHelpers.getEventsForDate(
  vendorId, 
  eventDate
);

const hasConflicts = dateEvents.some(existingEvent => 
  existingEvent.id !== eventId && 
  existingEvent.status === 'confirmed'
);
```

## Data Relationships

```
vendors (existing)
├── calendar_days (vendor_id FK)
│   ├── Stores blocked availability dates
│   └── One-to-many relationship
└── events (vendor_id FK)
    ├── Stores booking events
    └── One-to-many relationship
```

## Indexes for Performance

The migration creates optimized indexes for:
- Vendor-specific queries (`vendor_id`)
- Date range queries (`date`, `start_time`)
- Status filtering (`status`)
- Combined queries (`vendor_id + date`, `vendor_id + status`)

This ensures fast calendar loading and efficient event filtering even with large datasets.

## Future Enhancements

The schema is designed to support future features:
- Recurring events (with pattern tracking)
- Event templates
- Client relationship management
- Advanced conflict detection
- Calendar sharing between team members
- Integration with external calendar systems (Google Calendar, Outlook)

## Troubleshooting

### Common Issues:

1. **RLS Policy Errors**: Ensure user is authenticated and has proper vendor relationship
2. **Unique Constraint Violations**: Check for duplicate vendor_id + date combinations
3. **Time Validation Errors**: Ensure end_time is after start_time
4. **Permission Denied**: Verify RLS policies and user authentication

### Debug Queries:
```sql
-- Check RLS policies
SELECT * FROM pg_policies WHERE tablename IN ('calendar_days', 'events');

-- Verify vendor relationship
SELECT v.id, v.user_id FROM vendors v WHERE v.user_id = auth.uid();

-- Check for conflicts
SELECT * FROM events 
WHERE vendor_id = 'vendor-uuid' 
AND start_time::date = '2024-03-15'
ORDER BY start_time;
```