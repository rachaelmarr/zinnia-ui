const express = require('express');
require('dotenv').config();
const cors = require('cors');
const twilio = require('twilio');
const app = express();
const port = 3001;

// Twilio configuration (use environment variables; do not hardcode secrets)
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_FROM_NUMBER;

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Middleware
app.use(cors());
app.use(express.json());

// SMS API endpoint - Mock mode for development
app.post('/api/send-sms', async (req, res) => {
  try {
    const { to, body } = req.body;
    
    console.log('📱 SMS API called (MOCK MODE):', { to, body });
    
    // REAL SMS sending - Uncommented for testing
    const message = await client.messages.create({
      body: body,
      from: fromNumber,
      to: to
    });
    
    console.log('✅ Real SMS sent successfully:', message.sid);
    
    res.json({
      success: true,
      messageId: message.sid,
      to: to,
      body: body,
      status: message.status
    });
    
    // Mock response for development (commented out)
    /*
    const mockMessageId = `SM${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    
    console.log('✅ Mock SMS sent successfully:', mockMessageId);
    console.log('💡 To send real SMS: Upgrade your Twilio account and uncomment the Twilio code in server.js');
    
    res.json({
      success: true,
      messageId: mockMessageId,
      to: to,
      body: body,
      status: 'sent (mock)'
    });
    */
    
  } catch (error) {
    console.error('❌ SMS API error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Mock Email API endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { to, subject, htmlContent, textContent, from } = req.body;
    
    console.log('📧 Email API called:', { to, subject });
    
    // Mock email sending
    const mockMessageId = `EM${Date.now()}${Math.random().toString(36).substr(2, 9)}`;
    
    console.log('✅ Mock Email sent successfully:', mockMessageId);
    
    res.json({
      success: true,
      messageId: mockMessageId,
      to: to,
      subject: subject,
      status: 'sent'
    });
    
  } catch (error) {
    console.error('❌ Email API error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 Mock API server running on http://localhost:${port}`);
  console.log(`📱 SMS endpoint: http://localhost:${port}/api/send-sms`);
  console.log(`📧 Email endpoint: http://localhost:${port}/api/send-email`);
});
