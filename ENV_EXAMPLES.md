# Environment Variable Examples

Create these files locally (not committed):

## .env (server)

TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_FROM_NUMBER=+1xxxxxxxxxx

Run the server with these env vars set, e.g.:

TWILIO_ACCOUNT_SID=... TWILIO_AUTH_TOKEN=... TWILIO_FROM_NUMBER=... npm run server

## .env.local (client - Vite)

VITE_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
VITE_SUPABASE_URL=https://<project-id>.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...

Notes:
- Never commit real secrets.
- Only publishable Stripe keys belong in the client. Secret keys must stay on the server.
- Supabase anon key is public but should still be provided via env, not hardcoded in code.
