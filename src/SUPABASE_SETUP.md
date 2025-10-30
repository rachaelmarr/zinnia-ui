# Supabase Setup Guide for Zinnia Vendor Dashboard

## Prerequisites
You'll need to complete a few steps to fully integrate Supabase with your Zinnia app.

## 1. Get Your Supabase Credentials

1. Go to your Supabase dashboard: https://app.supabase.com/project/ikuxtbitjhunwdyhwjgb
2. Go to Settings → API
3. Copy your "Project URL" and "anon public" key
4. Update `/lib/supabase.ts` with your actual credentials:

```typescript
const supabaseUrl = 'https://ikuxtbitjhunwdyhwjgb.supabase.co'
const supabaseAnonKey = 'YOUR_ACTUAL_ANON_KEY_HERE'
```

## 2. Install Supabase Dependencies

Add these to your project:
```bash
npm install @supabase/supabase-js
```

## 3. Create Database Tables

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Enable RLS (Row Level Security)
ALTER TABLE IF EXISTS vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS listings ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS blocked_dates ENABLE ROW LEVEL SECURITY;

-- Create vendors table
CREATE TABLE IF NOT EXISTS vendors (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  business_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create listings table
CREATE TABLE IF NOT EXISTS listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  photos TEXT[] DEFAULT '{}',
  business_hours JSONB,
  description TEXT,
  service_data JSONB,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  customer_name TEXT NOT NULL,
  service_name TEXT NOT NULL,
  booking_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blocked_dates table
CREATE TABLE IF NOT EXISTS blocked_dates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vendor_id UUID REFERENCES vendors(id) ON DELETE CASCADE,
  blocked_date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(vendor_id, blocked_date)
);

-- RLS Policies
-- Vendors can only see their own data
CREATE POLICY "Vendors can view own profile" ON vendors
  FOR ALL USING (auth.uid() = id);

CREATE POLICY "Vendors can view own listings" ON listings
  FOR ALL USING (auth.uid() = vendor_id);

CREATE POLICY "Vendors can view own bookings" ON bookings
  FOR ALL USING (auth.uid() = vendor_id);

CREATE POLICY "Vendors can view own blocked dates" ON blocked_dates
  FOR ALL USING (auth.uid() = vendor_id);
```

## 4. Set Up Storage for Photos

1. Go to Storage in your Supabase dashboard
2. Create a new bucket called `vendor-photos`
3. Set it to public
4. Add this RLS policy for the bucket:

```sql
-- Allow authenticated users to upload to their own folder
CREATE POLICY "Vendors can upload own photos" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'vendor-photos' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow vendors to delete their own photos
CREATE POLICY "Vendors can delete own photos" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'vendor-photos' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow public read access
CREATE POLICY "Public can view photos" ON storage.objects
  FOR SELECT USING (bucket_id = 'vendor-photos');
```

## 5. Add Sample Data (Optional)

To test the booking system, you can add some sample bookings:

```sql
-- First, get your vendor ID after signing up
-- Then add sample bookings
INSERT INTO bookings (vendor_id, customer_name, service_name, booking_date, start_time, end_time)
VALUES 
  ('YOUR_VENDOR_ID', 'Sarah Johnson', 'Wedding Photography', '2025-06-28', '14:00', '17:00'),
  ('YOUR_VENDOR_ID', 'Mike Chen', 'Engagement Session', '2025-06-29', '10:00', '12:00');
```

## 6. Test the Integration

1. Start your app and try signing up with a new account
2. Create a listing through the wizard
3. Check your Supabase dashboard to see the data
4. Try blocking/unblocking dates
5. View the calendar to see your bookings

## Features Now Available

With Supabase integrated, your app now has:

✅ **User Authentication** - Secure vendor sign-up/sign-in
✅ **Persistent Listings** - Listings saved to database
✅ **Photo Storage** - Secure image hosting
✅ **Calendar Data** - Blocked dates saved persistently  
✅ **Booking Management** - Real booking data
✅ **Real-time Updates** - Live notifications for new bookings
✅ **Multi-device Sync** - Data synced across devices

## Next Steps

- Set up email authentication templates in Supabase
- Configure social login (Google, Facebook, etc.)
- Add push notifications for new bookings
- Implement customer-facing booking interface
- Add analytics and reporting features