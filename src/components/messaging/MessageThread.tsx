import React from 'react';
import { User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'vendor' | 'client';
  senderName: string;
  senderAvatar?: string;
  type?: 'sms' | 'email';
  subject?: string;
  senderEmail?: string;
}

interface MessageThreadProps {
  messages: Message[];
  contactName: string;
  onViewContact: () => void;
}

export default function MessageThread({ messages, contactName, onViewContact }: MessageThreadProps) {
  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    if (isToday) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { weekday: 'long', hour: '2-digit', minute: '2-digit' });
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
          {contactName}
        </h3>
        <button
          onClick={onViewContact}
          className="text-sm text-[#2f7685] hover:text-[#256a75] font-medium transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          View contact
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${
                message.sender === 'client' ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Client messages (left side) */}
              {message.sender === 'client' && (
                <>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    {message.senderAvatar ? (
                      <img
                        src={message.senderAvatar}
                        alt={message.senderName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-4 h-4 text-gray-600" />
                    )}
                  </div>
                  <div className="flex flex-col max-w-xs sm:max-w-sm lg:max-w-md">
                    <div className="bg-white border border-gray-200 shadow-sm p-3 rounded-2xl rounded-tl-sm">
                      {message.subject && (
                        <div className="mb-2 pb-2 border-b border-gray-100">
                          <p className="text-sm font-semibold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {message.subject}
                          </p>
                          <p className="text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            From: {message.senderEmail || message.senderName}
                          </p>
                        </div>
                      )}
                      <p className="text-sm text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {message.content}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 ml-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                </>
              )}

              {/* Vendor messages (right side) */}
              {message.sender === 'vendor' && (
                <>
                  <div className="flex flex-col max-w-xs sm:max-w-sm lg:max-w-md">
                    <div className="bg-[#2f7685] text-white p-3 rounded-2xl rounded-tr-sm">
                      {message.subject && (
                        <div className="mb-2 pb-2 border-b border-white/20">
                          <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {message.subject}
                          </p>
                          <p className="text-xs text-white/80" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            To: {message.senderEmail || message.senderName}
                          </p>
                        </div>
                      )}
                      <p className="text-sm text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {message.content}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 mr-1 text-right" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-[#2f7685] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-white" />
                  </div>
                </>
              )}
            </div>
          ))}

        {/* Typing indicator */}
        <div className="flex gap-3 justify-start">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-gray-600" />
          </div>
          <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
