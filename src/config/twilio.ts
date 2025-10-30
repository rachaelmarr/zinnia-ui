// Twilio Configuration (client-safe)
// Do not expose secrets in client code. The frontend should only call backend endpoints.

export const TWILIO_CONFIG = {
  // Backend API endpoints
  SMS_API_URL: '/api/send-sms',
  EMAIL_API_URL: '/api/send-email'
};
