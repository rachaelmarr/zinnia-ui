-- Migration: Update Vendors Table Schema
-- Description: Adds new fields to match Zinnia vendor onboarding flow
-- NOTE: This preserves all existing fields and data

-- First, create the vendor_type enum
CREATE TYPE IF NOT EXISTS vendor_type_enum AS ENUM (
    'florist',
    'photographer', 
    'venue',
    'caterer',
    'baker',
    'dj',
    'band',
    'videographer',
    'planner',
    'decorator',
    'makeup_artist',
    'hair_stylist',
    'transportation',
    'officiant',
    'other'
);

-- Add new columns to the existing vendors table
-- Note: Using IF NOT EXISTS equivalent for columns (checking if column exists first)

-- Personal Information Fields
DO $$ 
BEGIN 
    -- Add first_name if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'first_name') THEN
        ALTER TABLE vendors ADD COLUMN first_name TEXT;
    END IF;

    -- Add last_name if it doesn't exist  
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'last_name') THEN
        ALTER TABLE vendors ADD COLUMN last_name TEXT;
    END IF;

    -- Add phone_number if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'phone_number') THEN
        ALTER TABLE vendors ADD COLUMN phone_number TEXT;
    END IF;

    -- Add sms_opt_in if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'sms_opt_in') THEN
        ALTER TABLE vendors ADD COLUMN sms_opt_in BOOLEAN DEFAULT false;
    END IF;

    -- Add vendor_type if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'vendor_type') THEN
        ALTER TABLE vendors ADD COLUMN vendor_type vendor_type_enum;
    END IF;

    -- Add website if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'website') THEN
        ALTER TABLE vendors ADD COLUMN website TEXT;
    END IF;

    -- Add instagram_handle if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'instagram_handle') THEN
        ALTER TABLE vendors ADD COLUMN instagram_handle TEXT;
    END IF;

    -- Add business_address if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'vendors' AND column_name = 'business_address') THEN
        ALTER TABLE vendors ADD COLUMN business_address TEXT;
    END IF;
END $$;

-- Add helpful indexes for the new fields
CREATE INDEX IF NOT EXISTS idx_vendors_vendor_type ON vendors(vendor_type);
CREATE INDEX IF NOT EXISTS idx_vendors_phone_number ON vendors(phone_number);
CREATE INDEX IF NOT EXISTS idx_vendors_business_name_type ON vendors(business_name, vendor_type);

-- Add constraints for data validation
DO $$
BEGIN
    -- Ensure phone numbers are properly formatted (if provided)
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'vendors_phone_format_check') THEN
        ALTER TABLE vendors ADD CONSTRAINT vendors_phone_format_check 
        CHECK (phone_number IS NULL OR phone_number ~ '^\+?[1-9]\d{1,14}$');
    END IF;

    -- Ensure website URLs are properly formatted (if provided)
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'vendors_website_format_check') THEN
        ALTER TABLE vendors ADD CONSTRAINT vendors_website_format_check 
        CHECK (website IS NULL OR website ~ '^https?://.*' OR website ~ '^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\..*');
    END IF;

    -- Ensure Instagram handles don't include @ symbol
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'vendors_instagram_format_check') THEN
        ALTER TABLE vendors ADD CONSTRAINT vendors_instagram_format_check 
        CHECK (instagram_handle IS NULL OR instagram_handle !~ '^@');
    END IF;
END $$;

-- Update RLS policies if vendors table has RLS enabled
-- (This will only execute if RLS is already enabled)
DO $$
BEGIN
    -- Check if RLS is enabled on vendors table
    IF EXISTS (SELECT 1 FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace 
               WHERE c.relname = 'vendors' AND c.relrowsecurity = true) THEN
        
        -- Drop existing policies if they exist (to recreate with new columns)
        DROP POLICY IF EXISTS "vendors_select_own" ON vendors;
        DROP POLICY IF EXISTS "vendors_modify_own" ON vendors;
        
        -- Recreate policies for vendor access
        CREATE POLICY "vendors_select_own"
            ON vendors FOR SELECT
            USING (user_id = auth.uid());

        CREATE POLICY "vendors_modify_own"
            ON vendors FOR ALL
            USING (user_id = auth.uid())
            WITH CHECK (user_id = auth.uid());
    END IF;
END $$;

-- Grant usage on the enum type to authenticated users
GRANT USAGE ON TYPE vendor_type_enum TO authenticated;

-- Add helpful comments for documentation
COMMENT ON COLUMN vendors.first_name IS 'Vendor first name for personal identification';
COMMENT ON COLUMN vendors.last_name IS 'Vendor last name for personal identification';  
COMMENT ON COLUMN vendors.phone_number IS 'Vendor phone number in E.164 format';
COMMENT ON COLUMN vendors.sms_opt_in IS 'Whether vendor has opted in to SMS communications';
COMMENT ON COLUMN vendors.vendor_type IS 'Type of vendor service (florist, photographer, venue, etc.)';
COMMENT ON COLUMN vendors.website IS 'Vendor business website URL';
COMMENT ON COLUMN vendors.instagram_handle IS 'Instagram handle without @ symbol';
COMMENT ON COLUMN vendors.business_address IS 'Physical business address for vendor location';

COMMENT ON TYPE vendor_type_enum IS 'Enumeration of supported vendor types in the Zinnia platform';

-- Add a sample data update function (commented out - uncomment if you want to populate test data)
/*
-- Example function to populate sample data for existing vendors
CREATE OR REPLACE FUNCTION populate_sample_vendor_data() 
RETURNS void AS $$
BEGIN
    -- Update existing vendors with sample data
    UPDATE vendors 
    SET 
        first_name = CASE 
            WHEN business_name ILIKE '%photography%' THEN 'Sarah'
            WHEN business_name ILIKE '%floral%' OR business_name ILIKE '%flower%' THEN 'Emma' 
            WHEN business_name ILIKE '%venue%' OR business_name ILIKE '%hall%' THEN 'Michael'
            ELSE 'John'
        END,
        last_name = CASE 
            WHEN business_name ILIKE '%photography%' THEN 'Johnson'
            WHEN business_name ILIKE '%floral%' OR business_name ILIKE '%flower%' THEN 'Smith' 
            WHEN business_name ILIKE '%venue%' OR business_name ILIKE '%hall%' THEN 'Brown'
            ELSE 'Doe'
        END,
        vendor_type = CASE 
            WHEN business_name ILIKE '%photography%' OR business_name ILIKE '%photo%' THEN 'photographer'
            WHEN business_name ILIKE '%floral%' OR business_name ILIKE '%flower%' THEN 'florist'
            WHEN business_name ILIKE '%venue%' OR business_name ILIKE '%hall%' THEN 'venue'
            WHEN business_name ILIKE '%catering%' OR business_name ILIKE '%cater%' THEN 'caterer'
            WHEN business_name ILIKE '%cake%' OR business_name ILIKE '%baker%' THEN 'baker'
            ELSE 'other'
        END,
        phone_number = '+1555' || LPAD((RANDOM() * 9999999)::int::text, 7, '0'),
        sms_opt_in = (RANDOM() > 0.5),
        website = 'https://' || LOWER(REPLACE(business_name, ' ', '')) || '.com',
        instagram_handle = LOWER(REPLACE(business_name, ' ', '')),
        business_address = '123 Main St, ' || 
                          CASE (RANDOM() * 3)::int 
                              WHEN 0 THEN 'Chicago, IL'
                              WHEN 1 THEN 'New York, NY'  
                              WHEN 2 THEN 'Los Angeles, CA'
                              ELSE 'Miami, FL'
                          END || ' ' || LPAD((RANDOM() * 99999)::int::text, 5, '0')
    WHERE first_name IS NULL; -- Only update records that haven't been updated yet
END;
$$ LANGUAGE plpgsql;

-- Uncomment this line to run the sample data population:
-- SELECT populate_sample_vendor_data();
*/

-- Final verification
DO $$
BEGIN
    RAISE NOTICE 'Vendors table schema update completed successfully!';
    RAISE NOTICE 'New fields added: first_name, last_name, phone_number, sms_opt_in, vendor_type, website, instagram_handle, business_address';
    RAISE NOTICE 'Run: SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = ''vendors'' ORDER BY column_name; to verify schema';
END $$;