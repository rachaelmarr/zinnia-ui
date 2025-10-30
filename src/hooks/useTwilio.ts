import { useState, useCallback } from 'react';
import { twilioService } from '../lib/twilio';

interface TwilioState {
  isLoading: boolean;
  error: string | null;
  lastMessageId: string | null;
}

interface SendSMSOptions {
  to: string;
  message: string;
}

interface SendEmailOptions {
  to: string;
  subject: string;
  htmlContent: string;
  textContent?: string;
}

interface SendNotificationOptions {
  email: string;
  phone: string;
  subject: string;
  message: string;
  htmlContent?: string;
}

export function useTwilio() {
  const [state, setState] = useState<TwilioState>({
    isLoading: false,
    error: null,
    lastMessageId: null
  });

  const setLoading = (isLoading: boolean) => {
    setState(prev => ({ ...prev, isLoading }));
  };

  const setError = (error: string | null) => {
    setState(prev => ({ ...prev, error }));
  };

  const setSuccess = (messageId: string) => {
    setState(prev => ({ ...prev, lastMessageId: messageId, error: null }));
  };

  const sendSMS = useCallback(async (options: SendSMSOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await twilioService.sendSMS(options.to, options.message);
      
      if (result.success) {
        setSuccess(result.messageId || 'SMS sent');
        return result;
      } else {
        setError(result.error || 'SMS failed');
        return result;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const sendEmail = useCallback(async (options: SendEmailOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await twilioService.sendEmail(
        options.to,
        options.subject,
        options.htmlContent,
        options.textContent
      );
      
      if (result.success) {
        setSuccess(result.messageId || 'Email sent');
        return result;
      } else {
        setError(result.error || 'Email failed');
        return result;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const sendCoupleNotification = useCallback(async (options: SendNotificationOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await twilioService.sendCoupleNotification(
        options.email,
        options.phone,
        options.subject,
        options.message,
        options.htmlContent
      );
      
      setSuccess('Notification sent');
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      return { sms: { success: false, error: errorMessage }, email: { success: false, error: errorMessage } };
    } finally {
      setLoading(false);
    }
  }, []);

  const sendVendorNotification = useCallback(async (options: SendNotificationOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await twilioService.sendVendorNotification(
        options.email,
        options.phone,
        options.subject,
        options.message,
        options.htmlContent
      );
      
      setSuccess('Notification sent');
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      return { sms: { success: false, error: errorMessage }, email: { success: false, error: errorMessage } };
    } finally {
      setLoading(false);
    }
  }, []);

  const sendBookingConfirmation = useCallback(async (
    coupleEmail: string,
    couplePhone: string,
    vendorName: string,
    bookingDetails: {
      date: string;
      time: string;
      service: string;
      location?: string;
    }
  ) => {
    setLoading(true);
    setError(null);

    try {
      const result = await twilioService.sendBookingConfirmation(
        coupleEmail,
        couplePhone,
        vendorName,
        bookingDetails
      );
      
      setSuccess('Booking confirmation sent');
      return result;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      return { sms: { success: false, error: errorMessage }, email: { success: false, error: errorMessage } };
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    ...state,
    sendSMS,
    sendEmail,
    sendCoupleNotification,
    sendVendorNotification,
    sendBookingConfirmation,
    clearError
  };
}







