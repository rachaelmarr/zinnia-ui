-- Migration: Create Calendar CRM Tables
-- Description: Creates calendar_days and events tables for vendor calendar management

-- Create custom type for event status
CREATE TYPE event_status AS ENUM ('tentative', 'confirmed', 'cancelled');

-- Create calendar_days table for blocking out full days from availability
CREATE TABLE calendar_days (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    is_blocked BOOLEAN NOT NULL DEFAULT true,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure unique constraint on vendor_id + date combination
    CONSTRAINT unique_vendor_date UNIQUE (vendor_id, date)
);

-- Create events table for storing event-level data for bookings
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    vendor_id UUID NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
    client_name TEXT NOT NULL,
    client_profile_url TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    arrival_time TIME,
    status event_status NOT NULL DEFAULT 'tentative',
    location_address TEXT NOT NULL,
    location_lat FLOAT,
    location_lng FLOAT,
    total_guests INTEGER NOT NULL,
    total_payout DECIMAL(10,2) NOT NULL,
    travel_time_minutes INTEGER,
    notes TEXT,
    attachment_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Ensure end_time is after start_time
    CONSTRAINT valid_time_range CHECK (end_time > start_time),
    -- Ensure positive values
    CONSTRAINT positive_guests CHECK (total_guests > 0),
    CONSTRAINT positive_payout CHECK (total_payout >= 0),
    CONSTRAINT positive_travel_time CHECK (travel_time_minutes >= 0)
);

-- Create indexes for calendar_days table
CREATE INDEX idx_calendar_days_vendor_id ON calendar_days(vendor_id);
CREATE INDEX idx_calendar_days_date ON calendar_days(date);
CREATE INDEX idx_calendar_days_vendor_date ON calendar_days(vendor_id, date);
CREATE INDEX idx_calendar_days_blocked ON calendar_days(vendor_id, is_blocked);

-- Create indexes for events table
CREATE INDEX idx_events_vendor_id ON events(vendor_id);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_start_time ON events(start_time);
CREATE INDEX idx_events_vendor_start_time ON events(vendor_id, start_time);
CREATE INDEX idx_events_vendor_status ON events(vendor_id, status);
CREATE INDEX idx_events_date_range ON events(start_time, end_time);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_calendar_days_updated_at 
    BEFORE UPDATE ON calendar_days
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_events_updated_at 
    BEFORE UPDATE ON events
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE calendar_days ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for calendar_days
-- Vendors can only see/modify their own calendar days
CREATE POLICY "Vendors can view their own calendar days" ON calendar_days
    FOR SELECT USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can insert their own calendar days" ON calendar_days
    FOR INSERT WITH CHECK (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can update their own calendar days" ON calendar_days
    FOR UPDATE USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can delete their own calendar days" ON calendar_days
    FOR DELETE USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

-- Create RLS policies for events
-- Vendors can only see/modify their own events
CREATE POLICY "Vendors can view their own events" ON events
    FOR SELECT USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can insert their own events" ON events
    FOR INSERT WITH CHECK (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can update their own events" ON events
    FOR UPDATE USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

CREATE POLICY "Vendors can delete their own events" ON events
    FOR DELETE USING (
        vendor_id IN (
            SELECT id FROM vendors 
            WHERE user_id = auth.uid()
        )
    );

-- Grant necessary permissions
GRANT ALL ON calendar_days TO authenticated;
GRANT ALL ON events TO authenticated;
GRANT USAGE ON TYPE event_status TO authenticated;

-- Add helpful comments
COMMENT ON TABLE calendar_days IS 'Stores blocked dates for vendor availability management';
COMMENT ON TABLE events IS 'Stores event bookings with full event details and status tracking';
COMMENT ON TYPE event_status IS 'Enum for tracking event confirmation status';

-- Add column comments for better documentation
COMMENT ON COLUMN events.status IS 'Event status: tentative, confirmed, or cancelled';
COMMENT ON COLUMN events.total_payout IS 'Total payout amount in dollars (e.g., 1500.00)';
COMMENT ON COLUMN events.arrival_time IS 'Vendor arrival time on the event date';
COMMENT ON COLUMN events.travel_time_minutes IS 'Estimated travel time in minutes';
COMMENT ON COLUMN events.attachment_url IS 'URL to attached files like contracts, images, or PDFs';
COMMENT ON COLUMN calendar_days.is_blocked IS 'True when the date is blocked from availability';