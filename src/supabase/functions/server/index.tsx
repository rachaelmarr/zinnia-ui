import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'
import stripe from './stripe.ts'

const app = new Hono()

// Add CORS and logging
app.use('*', cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://*.supabase.co', '*'],
  allowHeaders: ['Content-Type', 'Authorization'],
  allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'DELETE'],
  credentials: true,
}))

app.use('*', logger(console.log))

// Create Supabase client with service role for server operations
const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

// Initialize storage buckets on startup
async function initializeStorageBuckets() {
  console.log('🪣 Initializing storage buckets...');
  
  const buckets = [
    { name: 'make-6e4d8724-contacts', config: { public: false } }
  ];
  
  for (const bucket of buckets) {
    try {
      const { data: existingBuckets } = await supabase.storage.listBuckets();
      const bucketExists = existingBuckets?.some(b => b.name === bucket.name);
      
      if (!bucketExists) {
        console.log(`Creating bucket: ${bucket.name}`);
        const { error } = await supabase.storage.createBucket(bucket.name, bucket.config);
        if (error) {
          console.error(`Failed to create bucket ${bucket.name}:`, error);
        } else {
          console.log(`✅ Created bucket: ${bucket.name}`);
        }
      } else {
        console.log(`✅ Bucket already exists: ${bucket.name}`);
      }
    } catch (error) {
      console.error(`Error checking/creating bucket ${bucket.name}:`, error);
    }
  }
}

// Initialize buckets on startup
initializeStorageBuckets().catch(console.error);

// Health check endpoint
app.get('/make-server-6e4d8724/health', async (c) => {
  try {
    console.log('🏥 Health check requested');
    
    // Test KV store connection
    const testKey = 'health_test_' + Date.now();
    await kv.set(testKey, { status: 'ok', timestamp: new Date().toISOString() });
    const testValue = await kv.get(testKey);
    await kv.del(testKey);
    
    // Test Supabase connection
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets();
    
    if (bucketError) {
      throw new Error(`Supabase storage error: ${bucketError.message}`);
    }
    
    console.log('✅ Health check passed');
    return c.json({ 
      status: 'ok', 
      timestamp: new Date().toISOString(),
      services: {
        kv_store: testValue ? 'ok' : 'error',
        supabase_storage: buckets ? 'ok' : 'error'
      }
    });
  } catch (error) {
    console.error('❌ Health check failed:', error);
    return c.json({ 
      status: 'error', 
      timestamp: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error'
    }, 500);
  }
});

// Mount Stripe routes first
app.route('/make-server-6e4d8724/stripe', stripe)

// Invoice template endpoints
app.get('/make-server-6e4d8724/invoice-templates', async (c) => {
  try {
    console.log('📋 Fetching invoice templates from Stripe via main server...');
    
    // Import Stripe directly
    const Stripe = await import('npm:stripe');
    const stripe = new Stripe.default(Deno.env.get('STRIPE_SECRET_KEY')!, {
      apiVersion: '2024-06-20',
    });
    
    // Retrieve all invoices that are marked as templates
    const invoices = await stripe.invoices.list({
      limit: 100,
    });
    
    console.log(`Found ${invoices.data.length} total invoices, filtering for templates...`);
    
    // Filter for templates (invoices with is_template metadata)
    const templateInvoices = invoices.data.filter(invoice => invoice.metadata?.is_template === 'true');
    
    console.log(`Found ${templateInvoices.length} template invoices`);
    
    // For each template, get its line items to calculate total amount
    const templatesWithDetails = await Promise.all(
      templateInvoices.map(async (invoice) => {
        try {
          // Get line items for this template
          const invoiceItems = await stripe.invoiceItems.list({
            invoice: invoice.id,
          });
          
          // Calculate total amount from line items
          const totalAmount = invoiceItems.data.reduce((sum, item) => {
            return sum + (item.unit_amount || 0) * (item.quantity || 1);
          }, 0);
          
          return {
            id: invoice.id,
            name: invoice.metadata?.template_name || 'Untitled Template',
            service: invoice.description || 'General Service',
            amount: `$${(totalAmount / 100).toFixed(2)}`, // Convert from cents to dollars
            dateCreated: new Date(invoice.created * 1000).toLocaleDateString(),
            description: invoice.description || '',
            footer: invoice.footer || '',
            dueInDays: parseInt(invoice.metadata?.due_days || '30'),
            created: invoice.created,
            metadata: invoice.metadata,
          };
        } catch (itemError) {
          console.error(`Error processing template ${invoice.id}:`, itemError);
          // Return template with default values if line items can't be fetched
          return {
            id: invoice.id,
            name: invoice.metadata?.template_name || 'Untitled Template',
            service: invoice.description || 'General Service',
            amount: '$0.00',
            dateCreated: new Date(invoice.created * 1000).toLocaleDateString(),
            description: invoice.description || '',
            footer: invoice.footer || '',
            dueInDays: parseInt(invoice.metadata?.due_days || '30'),
            created: invoice.created,
            metadata: invoice.metadata,
          };
        }
      })
    );
    
    console.log(`✅ Successfully processed ${templatesWithDetails.length} templates`);
    
    return c.json({
      success: true,
      templates: templatesWithDetails
    });
  } catch (error) {
    console.error('❌ Error fetching invoice templates:', error);
    return c.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      templates: []
    }, 500);
  }
});

// Error handling for 404s
app.notFound((c) => {
  console.log(`❌ Route not found: ${c.req.method} ${c.req.url}`);
  return c.json({ error: 'Route not found' }, 404);
});

// Global error handler
app.onError((err, c) => {
  console.error('❌ Unhandled server error:', err);
  return c.json({ 
    error: 'Internal server error',
    message: err instanceof Error ? err.message : 'Unknown error'
  }, 500);
});

// Start the server
console.log('🚀 Starting Hono server...');
console.log('📊 Available routes:');
console.log('  GET  /make-server-6e4d8724/health');
console.log('  GET  /make-server-6e4d8724/invoice-templates');
console.log('  ALL  /make-server-6e4d8724/stripe/*');

// Export for Supabase Edge Functions
Deno.serve({
  port: 8000,
  onListen: ({ port, hostname }) => {
    console.log(`✅ Server running on ${hostname}:${port}`);
  },
  onError: (error) => {
    console.error('❌ Server startup error:', error);
    return new Response('Server Error', { status: 500 });
  }
}, app.fetch);