# Deploy Your Zinnia Supabase Server

You already have a complete server implementation! Here's how to deploy it:

## Prerequisites

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Have your Supabase project ready (you should already have this from your environment variables)

## Deployment Steps

### 1. Login to Supabase
```bash
supabase login
```

### 2. Link Your Project
You'll need your project reference ID (you can find this in your Supabase dashboard URL):
```bash
supabase link --project-ref YOUR_PROJECT_REF
```

### 3. Deploy the Edge Function
```bash
supabase functions deploy server
```

### 4. Set Environment Variables
Your server needs the Stripe secret key:
```bash
supabase secrets set STRIPE_SECRET_KEY=your_stripe_secret_key_here
```

### 5. Test the Deployment
After deployment, your server will be available at:
```
https://YOUR_PROJECT_ID.supabase.co/functions/v1/server
```

You can test it by visiting:
```
https://YOUR_PROJECT_ID.supabase.co/functions/v1/server/health
```

## What Your Server Includes

Your server already has these endpoints:
- `/health` - Health check
- `/invoice-templates` (GET/POST) - Manage invoice templates  
- `/stripe/create-invoice-template` - Create Stripe invoice templates
- Calendar and event management endpoints
- Authentication and user management

## Troubleshooting

- Make sure you have the correct project reference ID
- Ensure you're logged into the right Supabase account
- Check that your Stripe secret key is valid
- View logs with: `supabase functions logs server`

## Alternative: Continue with Demo Mode

If you prefer to continue without deploying the server, the app works perfectly in demo mode with mock data. Just click "Continue Without Server (Demo Mode)" when you see the connection error.