import { TWILIO_CONFIG } from '../config/twilio';

type SmsResult = { success: boolean; messageId?: string; error?: string };
type EmailResult = { success: boolean; messageId?: string; error?: string };

async function postJSON(url: string, body: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: `HTTP ${res.status}` }));
    throw new Error(err.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const twilioService = {
  async sendSMS(to: string, message: string): Promise<SmsResult> {
    try {
      const data = await postJSON(TWILIO_CONFIG.SMS_API_URL, { to, body: message });
      return { success: true, messageId: data.messageId };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  },

  async sendEmail(to: string, subject: string, htmlContent: string, textContent?: string): Promise<EmailResult> {
    try {
      const data = await postJSON(TWILIO_CONFIG.EMAIL_API_URL, { to, subject, htmlContent, textContent });
      return { success: true, messageId: data.messageId };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  },

  async sendCoupleNotification(email: string, phone: string, subject: string, message: string, htmlContent?: string) {
    const sms = await this.sendSMS(phone, message);
    const emailRes = await this.sendEmail(email, subject, htmlContent || `<p>${message}</p>`, message);
    return { sms, email: emailRes };
  },

  async sendVendorNotification(email: string, phone: string, subject: string, message: string, htmlContent?: string) {
    const sms = await this.sendSMS(phone, message);
    const emailRes = await this.sendEmail(email, subject, htmlContent || `<p>${message}</p>`, message);
    return { sms, email: emailRes };
  },

  async sendBookingConfirmation(
    coupleEmail: string,
    couplePhone: string,
    vendorName: string,
    bookingDetails: { date: string; time: string; service: string; location?: string }
  ) {
    const subject = `Booking Confirmation with ${vendorName}`;
    const text = `Your booking is confirmed for ${bookingDetails.service} on ${bookingDetails.date} at ${bookingDetails.time}${bookingDetails.location ? ' at ' + bookingDetails.location : ''}.`;
    const html = `<p>${text}</p>`;
    const sms = await this.sendSMS(couplePhone, text);
    const email = await this.sendEmail(coupleEmail, subject, html, text);
    return { sms, email };
  }
};


