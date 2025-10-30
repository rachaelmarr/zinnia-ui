import React, { useState } from 'react';
import { Send, MessageCircle, Phone, Mail } from 'lucide-react';
import { useTwilio } from '../hooks/useTwilio';

export default function TwilioTest() {
  const [phoneNumber, setPhoneNumber] = useState('+15056907121');
  const [message, setMessage] = useState('Hello Amanda! This is a test message from Zinnia Vendor. 🎉');
  const [email, setEmail] = useState('amanda.barnes@email.com');
  const [emailSubject, setEmailSubject] = useState('Test Email from Zinnia Vendor');
  const [emailMessage, setEmailMessage] = useState('Hello Amanda! This is a test email from Zinnia Vendor.');
  
  const { sendSMS, sendEmail, isLoading, error, clearError } = useTwilio();

  const handleSendSMS = async () => {
    clearError();
    const result = await sendSMS({
      to: phoneNumber,
      message: message
    });
    
    if (result.success) {
      alert('SMS sent successfully! Check your phone.');
    } else {
      alert(`SMS failed: ${result.error}`);
    }
  };

  const handleSendEmail = async () => {
    clearError();
    const result = await sendEmail({
      to: email,
      subject: emailSubject,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2f7685;">Test Email from Zinnia</h2>
          <p>${emailMessage}</p>
          <p><em>This is a test email sent through Zinnia's messaging system.</em></p>
        </div>
      `
    });
    
    if (result.success) {
      alert('Email sent successfully! Check your inbox.');
    } else {
      alert(`Email failed: ${result.error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <MessageCircle className="w-6 h-6 text-[#2f7685]" />
            <h1 className="text-2xl font-bold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
              Twilio SMS & Email Test
            </h1>
          </div>
          
          <p className="text-gray-600 mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Test the Twilio integration by sending SMS and email messages. Make sure the server is running on port 3001.
          </p>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Error: {error}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* SMS Test */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-blue-900" style={{ fontFamily: 'Literata, serif' }}>
                  SMS Test
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+1234567890"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your SMS message here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    rows={3}
                  />
                </div>
                
                <button
                  onClick={handleSendSMS}
                  disabled={isLoading || !phoneNumber || !message.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending SMS...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send SMS
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Email Test */}
            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-900" style={{ fontFamily: 'Literata, serif' }}>
                  Email Test
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="test@example.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Email subject"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Message
                  </label>
                  <textarea
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    placeholder="Type your email message here..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                    rows={3}
                  />
                </div>
                
                <button
                  onClick={handleSendEmail}
                  disabled={isLoading || !email || !emailSubject.trim() || !emailMessage.trim()}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Email...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h4 className="font-semibold text-yellow-800 mb-2" style={{ fontFamily: 'Literata, serif' }}>
              📱 Testing Instructions
            </h4>
            <ul className="text-sm text-yellow-700 space-y-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <li>• Make sure the server is running: <code className="bg-yellow-100 px-1 rounded">npm run server</code></li>
              <li>• For SMS: Use a verified phone number in your Twilio account</li>
              <li>• For Email: Use any valid email address (mock mode)</li>
              <li>• Check the server console for detailed logs</li>
              <li>• SMS will be sent in mock mode unless you upgrade your Twilio account</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}