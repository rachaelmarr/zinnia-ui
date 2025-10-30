import React, { useState } from 'react';
import { MessageCircle, Zap, ArrowLeft } from 'lucide-react';
import ConversationList from './ConversationList';
import MessageThread from './MessageThread';
import MessageComposer from './MessageComposer';
import TemplateModal from './TemplateModal';
import { conversations, messages, templates, type Conversation, type Message, type Template } from '../../data/messagingData';

export default function MessagingPage() {
  const [selectedConversationId, setSelectedConversationId] = useState('1'); // Amanda Barnes
  const [activeTab, setActiveTab] = useState<'text' | 'email'>('text');
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [conversationList, setConversationList] = useState<Conversation[]>(conversations);
  const [messageList, setMessageList] = useState<Message[]>(messages);
  const [mobileView, setMobileView] = useState<'list' | 'thread'>('list');

  // Debug logging
  console.log('📱 MessagingPage rendered', { selectedConversationId, activeTab });

  const selectedConversation = conversationList.find(conv => conv.id === selectedConversationId);
  const selectedMessages = messageList.filter(msg => {
    // Filter by conversation ID and message type based on active tab
    const messageType = activeTab === 'text' ? 'sms' : 'email';
    return msg.type === messageType;
  });

  const handleSelectConversation = (id: string) => {
    setSelectedConversationId(id);
    // Update conversation selection state
    setConversationList(prev => 
      prev.map(conv => ({
        ...conv,
        isSelected: conv.id === id
      }))
    );
    // Switch to thread view on mobile
    setMobileView('thread');
  };

  const handleTabChange = (tab: 'text' | 'email') => {
    setActiveTab(tab);
  };

  const handleSendMessage = (message: string, subject?: string, type?: 'sms' | 'email') => {
    const messageTypeToUse = type || (activeTab === 'text' ? 'sms' : 'email');
    const newMessage: Message = {
      id: Date.now().toString(),
      content: message,
      timestamp: new Date().toISOString(),
      sender: 'vendor',
      senderName: 'You',
      senderAvatar: '',
      type: messageTypeToUse,
      subject: subject,
      senderEmail: 'vendor@zinnia.com'
    };

    setMessageList(prev => [...prev, newMessage]);

    // Update conversation list with new message
    setConversationList(prev =>
      prev.map(conv =>
        conv.id === selectedConversationId
          ? {
              ...conv,
              lastMessage: message,
              timestamp: 'Just now',
              unreadCount: 0
            }
          : conv
      )
    );
  };

  const handleSelectTemplate = (template: Template) => {
    // In a real app, this would insert the template into the message input
    console.log('Selected template:', template);
    setIsTemplateModalOpen(false);
  };

  const handleViewContact = () => {
    console.log('View contact clicked');
    // In a real app, this would open a contact details modal or navigate to contact page
  };

  const handleAttachFile = () => {
    console.log('Attach file clicked');
    // In a real app, this would open a file picker
  };

  const handleBackToList = () => {
    setMobileView('list');
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-[#2f7685]" />
            <h1 className="text-2xl font-bold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
              Messages
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Desktop Layout */}
        <div className="hidden lg:flex w-full">
          {/* Left Sidebar - Conversation List */}
          <div className="w-80">
            <ConversationList
              conversations={conversationList}
              selectedConversationId={selectedConversationId}
              onSelectConversation={handleSelectConversation}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {selectedConversation ? (
              <>
                {/* Message Thread */}
                <MessageThread
                  messages={selectedMessages}
                  contactName={selectedConversation.name}
                  onViewContact={handleViewContact}
                />

                {/* Message Composer */}
                <MessageComposer
                  onSendMessage={handleSendMessage}
                  onOpenTemplates={() => setIsTemplateModalOpen(true)}
                  onAttachFile={handleAttachFile}
                  messageType={activeTab === 'text' ? 'sms' : 'email'}
                  couplePhone="+12402477459" // Your phone number for testing
                  coupleEmail="amanda.barnes@email.com" // Amanda Barnes email
                  coupleName={selectedConversation?.name || 'Amanda Barnes'}
                  vendorName="Zinnia Vendor" // Your business name
                />
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-white">
                <div className="text-center p-6">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-500 mb-2" style={{ fontFamily: 'Literata, serif' }}>
                    Select a conversation
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Choose a conversation from the sidebar to start messaging
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - Contact Details (when conversation is selected) - Hidden on mobile */}
          {selectedConversation && (
            <div className="hidden xl:block w-80 bg-white border-l border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-[#2f7685]" />
                <h3 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
                  About {selectedConversation.name}
                </h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Wedding date
                  </p>
                  <p className="text-sm text-gray-900 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    June 13, 2025
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Services
                  </p>
                  <p className="text-sm text-gray-900 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Florals, setup
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Status
                  </p>
                  <p className="text-sm text-gray-900 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Inquiry
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout - iMessage Style */}
        <div className="lg:hidden w-full">
          {mobileView === 'list' ? (
            /* Mobile Conversation List */
            <div className="h-full">
              <ConversationList
                conversations={conversationList}
                selectedConversationId={selectedConversationId}
                onSelectConversation={handleSelectConversation}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </div>
          ) : (
            /* Mobile Message Thread */
            <div className="h-full flex flex-col">
              {/* Mobile Header with Back Button */}
              <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3">
                <button
                  onClick={handleBackToList}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-[#2f7685]" />
                </button>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#47567B]" style={{ fontFamily: 'Literata, serif' }}>
                    {selectedConversation?.name}
                  </h2>
                </div>
                <button
                  onClick={handleViewContact}
                  className="text-sm text-[#2f7685] hover:text-[#256a75] font-medium transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  View contact
                </button>
              </div>

              {/* Message Thread */}
              <div className="flex-1">
                <MessageThread
                  messages={selectedMessages}
                  contactName={selectedConversation?.name || ''}
                  onViewContact={handleViewContact}
                />
              </div>

              {/* Message Composer */}
              <MessageComposer
                onSendMessage={handleSendMessage}
                onOpenTemplates={() => setIsTemplateModalOpen(true)}
                onAttachFile={handleAttachFile}
                messageType={activeTab === 'text' ? 'sms' : 'email'}
                couplePhone="+12402477459" // Your phone number for testing
                coupleEmail="amanda.barnes@email.com" // Amanda Barnes email
                coupleName={selectedConversation?.name || 'Amanda Barnes'}
                vendorName="Zinnia Vendor" // Your business name
              />
            </div>
          )}
        </div>
      </div>

      {/* Template Modal */}
      <TemplateModal
        isOpen={isTemplateModalOpen}
        onClose={() => setIsTemplateModalOpen(false)}
        onSelectTemplate={handleSelectTemplate}
        templates={templates}
      />
    </div>
  );
}
