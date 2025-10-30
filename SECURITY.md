# Security Configuration

## Environment Variables

This project uses environment variables to store sensitive configuration data. 

### Required Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Twilio Configuration (if using SMS features)
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number
```

### Security Notes

1. **Never commit `.env` files** - They are already in `.gitignore`
2. **Use `.env.example`** - Copy this file to `.env` and fill in your actual values
3. **Supabase keys are public** - The anon key is safe to expose in client-side code
4. **Twilio credentials are private** - Keep these secure and never expose them

### File Structure

- `.env` - Your actual environment variables (gitignored)
- `.env.example` - Template file with placeholder values (committed)
- `.env.local` - Local development overrides (gitignored)

## API Key Security

✅ **Supabase API Key**: Moved to environment variables
✅ **Twilio Credentials**: Already in environment variables
✅ **Gitignore**: Properly configured to exclude sensitive files
