import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Mail } from 'lucide-react';
import { useTwilio } from '../hooks/useTwilio';

interface MessagingPanelProps {
  vendorName: string;
  vendorPhone: string;
  vendorEmail: string;
  couplePhone: string;
  coupleEmail: string;
}

export default function MessagingPanel({ 
  vendorName, 
  vendorPhone, 
  vendorEmail, 
  couplePhone, 
  coupleEmail 
}: MessagingPanelProps) {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'sms' | 'email'>('sms');
  const { sendSMS, sendEmail, isLoading, error, clearError } = useTwilio();

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;

    clearError();

    if (messageType === 'sms') {
      await sendSMS({
        to: vendorPhone,
        message: `From Zinnia couple: ${message}`
      });
    } else {
      await sendEmail({
        to: vendorEmail,
        subject: `Message from Zinnia couple`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h3>Message from Zinnia Couple</h3>
            <p><strong>Vendor:</strong> ${vendorName}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <p><em>This message was sent through Zinnia's messaging system.</em></p>
          </div>
        `
      });
    }

    if (!error) {
      setMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <MessageCircle className="w-6 h-6 text-[#2f7685]" />
        <h3 className="text-lg font-semibold text-[#2f7685]" style={{ fontFamily: 'Literata, serif' }}>
          Message {vendorName}
        </h3>
      </div>

      {/* Contact Info */}
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-4 h-4" />
          <span style={{ fontFamily: 'Montserrat, sans-serif' }}>{vendorPhone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Mail className="w-4 h-4" />
          <span style={{ fontFamily: 'Montserrat, sans-serif' }}>{vendorEmail}</span>
        </div>
      </div>

      {/* Message Type Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setMessageType('sms')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            messageType === 'sms'
              ? 'bg-[#2f7685] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          SMS
        </button>
        <button
          type="button"
          onClick={() => setMessageType('email')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            messageType === 'email'
              ? 'bg-[#2f7685] text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Email
        </button>
      </div>

      {/* Message Form */}
      <form onSubmit={handleSendMessage} className="space-y-4">
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={`Type your message to ${vendorName}...`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent resize-none"
            rows={4}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3">
            <p className="text-red-700 text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Error: {error}
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading || !message.trim()}
            className="bg-[#2f7685] hover:bg-[#256a75] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send {messageType.toUpperCase()}
              </>
            )}
          </button>
        </div>
      </form>

      {/* Info Text */}
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-blue-700 text-xs" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          💡 Messages are sent through Zinnia's secure messaging system. Your contact information is protected.
        </p>
      </div>
    </div>
  );
}







