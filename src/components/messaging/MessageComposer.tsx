import React, { useState } from 'react';
import { Send, Paperclip, Smile, ChevronDown, Mail, MessageSquare } from 'lucide-react';
import { useTwilio } from '../../hooks/useTwilio';

interface MessageComposerProps {
  onSendMessage: (message: string, subject?: string, type?: 'sms' | 'email') => void;
  onOpenTemplates: () => void;
  onAttachFile: () => void;
  isLoading?: boolean;
  messageType: 'sms' | 'email';
  couplePhone?: string;
  coupleEmail?: string;
  coupleName?: string;
  vendorName?: string;
}

export default function MessageComposer({
  onSendMessage,
  onOpenTemplates,
  onAttachFile,
  isLoading = false,
  messageType,
  couplePhone = '+12402477459', // Your phone number for testing
  coupleEmail = 'couple@test.com',
  coupleName = 'Couple',
  vendorName = 'Vendor'
}: MessageComposerProps) {
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { sendSMS, sendEmail, isLoading: twilioLoading, error: twilioError } = useTwilio();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('📱 MessageComposer handleSubmit called', { message: message.trim(), messageType, couplePhone, coupleName, vendorName });
    
    if (message.trim() && !isLoading && !isSending && !twilioLoading) {
      setIsSending(true);
      
      try {
        if (messageType === 'sms') {
          // Send SMS via Twilio
          const smsMessage = `From ${vendorName}: ${message.trim()}`;
          console.log('📱 Sending SMS:', { to: couplePhone, message: smsMessage });
          const result = await sendSMS({
            to: couplePhone,
            message: smsMessage
          });
          
          if (result.success) {
            console.log('✅ SMS sent successfully:', result.messageId);
            // Also call the onSendMessage callback to update UI
            onSendMessage(message.trim(), undefined, messageType);
            setMessage('');
            setSubject('');
          } else {
            console.error('❌ SMS failed:', result.error);
            alert(`SMS Error: ${result.error || 'Failed to send SMS'}`);
          }
        } else {
          // Send Email via Twilio
          const emailSubject = subject.trim() || `Message from ${vendorName}`;
          const htmlContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h3 style="color: #2f7685;">Message from ${vendorName}</h3>
              <p>Hello ${coupleName},</p>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Message:</strong></p>
                <p>${message.trim().replace(/\n/g, '<br>')}</p>
              </div>
              <p><em>This message was sent through Zinnia's messaging system.</em></p>
            </div>
          `;
          
          const result = await sendEmail({
            to: coupleEmail,
            subject: emailSubject,
            htmlContent: htmlContent
          });
          
          if (result.success) {
            console.log('✅ Email sent successfully:', result.messageId);
            // Also call the onSendMessage callback to update UI
            onSendMessage(message.trim(), emailSubject, messageType);
            setMessage('');
            setSubject('');
          } else {
            console.error('❌ Email failed:', result.error);
            alert(`Email Error: ${result.error || 'Failed to send email'}`);
          }
        }
      } catch (error) {
        console.error('❌ Error sending message:', error);
        alert(`Error: ${error instanceof Error ? error.message : 'Failed to send message'}`);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Error Display */}
        {twilioError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Error: {twilioError}
            </p>
          </div>
        )}

        {/* Email Subject Field - Only show for email */}
        {messageType === 'email' && (
          <div>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Email subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              disabled={isLoading || isSending || twilioLoading}
            />
          </div>
        )}

        {/* Message Input Row */}
        <div className="flex items-end gap-3">
          {/* Attachment Button */}
          <button
            type="button"
            onClick={onAttachFile}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            disabled={isLoading || isSending}
          >
            <Paperclip className="w-5 h-5" />
          </button>

          {/* Message Input */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={messageType === 'email' ? 'Compose your email...' : 'Type your message...'}
              className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent resize-none"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              rows={messageType === 'email' ? 4 : 1}
              disabled={isLoading || isSending || twilioLoading}
            />
            
            {/* Emoji Button */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 transition-colors"
              disabled={isLoading || isSending}
            >
              <Smile className="w-4 h-4" />
            </button>
          </div>

          {/* Send Button */}
          <div className="relative">
          <button
            type="submit"
            disabled={!message.trim() || isLoading || isSending || twilioLoading}
            className="bg-[#2f7685] hover:bg-[#256a75] disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {(isLoading || isSending || twilioLoading) ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                {isSending ? `Sending ${messageType.toUpperCase()}...` : 'Sending...'}
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send {messageType === 'email' ? 'Email' : 'SMS'}
              </>
            )}
          </button>
            
            {/* Template Dropdown */}
            <button
              type="button"
              onClick={onOpenTemplates}
              className="absolute -top-1 -right-1 w-6 h-6 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors"
              disabled={isLoading || isSending}
            >
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
