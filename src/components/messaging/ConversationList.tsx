import React from 'react';
import { Search, MessageCircle, Heart } from 'lucide-react';

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isSelected: boolean;
  type: 'text' | 'email';
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedConversationId: string;
  onSelectConversation: (id: string) => void;
  activeTab: 'text' | 'email';
  onTabChange: (tab: 'text' | 'email') => void;
}

export default function ConversationList({
  conversations,
  selectedConversationId,
  onSelectConversation,
  activeTab,
  onTabChange
}: ConversationListProps) {
  const textConversations = conversations.filter(conv => conv.type === 'text');
  const emailConversations = conversations.filter(conv => conv.type === 'email');

  const currentConversations = activeTab === 'text' ? textConversations : emailConversations;

  return (
    <div className="w-full lg:w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
            Inbox
          </h2>
          <button className="w-8 h-8 bg-[#2f7685] text-white rounded-full flex items-center justify-center hover:bg-[#256a75] transition-colors">
            <span className="text-lg">+</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          />
        </div>

        {/* Tabs */}
        <div className="flex mt-4">
          <button
            onClick={() => onTabChange('text')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'text'
                ? 'bg-[#2f7685] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <MessageCircle className="w-4 h-4" />
            Text
          </button>
          <button
            onClick={() => onTabChange('email')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-colors relative ${
              activeTab === 'email'
                ? 'bg-[#2f7685] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Heart className="w-4 h-4" />
            Emails
            {emailConversations.some(conv => conv.unreadCount > 0) && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {emailConversations.reduce((sum, conv) => sum + conv.unreadCount, 0)}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {currentConversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation.id)}
            className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
              conversation.isSelected ? 'bg-[#f0f9ff] border-l-4 border-l-[#2f7685]' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Avatar */}
              <div className="relative">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {conversation.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                {conversation.unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-medium text-sm truncate ${
                    conversation.isSelected ? 'text-[#2f7685]' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {conversation.name}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {conversation.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {conversation.lastMessage}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
