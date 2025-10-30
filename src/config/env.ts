// Centralized environment configuration and validation

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY as string | undefined;

// Dev-time validation (non-fatal warnings)
if (import.meta.env.DEV) {
  if (!supabaseUrl) console.warn('Missing VITE_SUPABASE_URL');
  if (!supabaseAnonKey) console.warn('Missing VITE_SUPABASE_ANON_KEY');
  if (!stripePublishableKey) console.warn('Missing VITE_STRIPE_PUBLISHABLE_KEY');
}

// Helper: normalized Supabase functions base URL
const supabaseFunctionsBaseUrl = supabaseUrl ? `${supabaseUrl.replace(/\/$/, '')}/functions/v1` : '';

export {
  supabaseUrl,
  supabaseAnonKey,
  stripePublishableKey,
  supabaseFunctionsBaseUrl
};

