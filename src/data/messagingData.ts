// Dummy data for messaging UI

export interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isSelected: boolean;
  type: 'text' | 'email';
}

export interface Message {
  id: string;
  content: string;
  timestamp: string;
  sender: 'vendor' | 'client';
  senderName: string;
  senderAvatar?: string;
}

export interface Template {
  id: string;
  title: string;
  content: string;
  category: string;
}

export const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Amanda Barnes',
    avatar: '',
    lastMessage: 'Thank you so much for the beautiful flowers!',
    timestamp: 'Today, 12:11pm',
    unreadCount: 2,
    isSelected: false,
    type: 'text'
  },
  {
    id: '2',
    name: 'Valerie Cook',
    avatar: '',
    lastMessage: 'I have a few questions about the pricing...',
    timestamp: 'Today, 9:52pm',
    unreadCount: 0,
    isSelected: false,
    type: 'text'
  },
  {
    id: '3',
    name: 'Caitlin Smith',
    avatar: '',
    lastMessage: 'Let me know if you need update on timing.',
    timestamp: 'Today, 8:30pm',
    unreadCount: 0,
    isSelected: true,
    type: 'text'
  },
  {
    id: '4',
    name: 'Sarah Johnson',
    avatar: '',
    lastMessage: 'Wedding planning checklist attached',
    timestamp: 'Yesterday, 3:45pm',
    unreadCount: 1,
    isSelected: false,
    type: 'email'
  },
  {
    id: '5',
    name: 'Emily Davis',
    avatar: '',
    lastMessage: 'Contract review needed',
    timestamp: 'Yesterday, 1:20pm',
    unreadCount: 0,
    isSelected: false,
    type: 'email'
  }
];

export const messages: Message[] = [
  {
    id: '1',
    content: "It's so nice to meet you! Looking forward to working with you. I just have a couple of questions that I'd love to discuss.",
    timestamp: '2024-01-10T19:30:00Z',
    sender: 'client',
    senderName: 'Caitlin Smith',
    senderAvatar: '',
    type: 'sms'
  },
  {
    id: '2',
    content: "Hello there. thanks for reaching out! I'm excited to work together! Let me know if you need update on timing.",
    timestamp: '2024-01-11T20:30:00Z',
    sender: 'vendor',
    senderName: 'You',
    senderAvatar: '',
    type: 'sms'
  },
  {
    id: '3',
    content: "Perfect! I'll send over the contract details tomorrow morning. Does that work for you?",
    timestamp: '2024-01-11T20:35:00Z',
    sender: 'client',
    senderName: 'Caitlin Smith',
    senderAvatar: '',
    type: 'sms'
  },
  {
    id: '4',
    content: "Thanks for booking! 🎉 We're so excited to be part of your special day. Here's a quick overview of what we'll be providing for your wedding on June 13th, 2025. We'll be handling the florals and setup as discussed. Please let me know if you have any questions!",
    timestamp: '2024-01-11T21:00:00Z',
    sender: 'vendor',
    senderName: 'You',
    senderAvatar: '',
    type: 'email',
    subject: 'Wedding Confirmation - June 13th, 2025',
    senderEmail: 'vendor@zinnia.com'
  },
  {
    id: '5',
    content: "Thank you so much! I'm so excited to work with you. The contract looks perfect. I'll review it and get back to you by tomorrow.",
    timestamp: '2024-01-11T21:15:00Z',
    sender: 'client',
    senderName: 'Caitlin Smith',
    senderAvatar: '',
    type: 'email',
    subject: 'Re: Wedding Confirmation - June 13th, 2025',
    senderEmail: 'caitlin.smith@email.com'
  },
  {
    id: '6',
    content: "Absolutely! Looking forward to it. I'll review everything and get back to you by end of day.",
    timestamp: '2024-01-11T20:40:00Z',
    sender: 'vendor',
    senderName: 'You',
    senderAvatar: '',
    type: 'sms'
  }
];

export const templates: Template[] = [
  {
    id: '1',
    title: 'Welcome Message',
    content: "Hi [Name]! Thank you for reaching out about your wedding. I'm so excited to help make your special day absolutely perfect. I'd love to learn more about your vision and answer any questions you might have. When would be a good time to chat?",
    category: 'Greetings'
  },
  {
    id: '2',
    title: 'Pricing Inquiry Response',
    content: "Thank you for your interest in our services! I'd be happy to provide you with a detailed quote based on your specific needs. Could you tell me a bit more about your wedding date, guest count, and any specific requirements you have in mind?",
    category: 'Pricing'
  },
  {
    id: '3',
    title: 'Follow-up After Meeting',
    content: "It was wonderful meeting with you today! I'm so excited about your wedding plans. As discussed, I'll send over the detailed proposal by [date]. Please don't hesitate to reach out if you have any questions in the meantime.",
    category: 'Follow-up'
  },
  {
    id: '4',
    title: 'Contract Sent',
    content: "Hi [Name]! I've sent over the contract and pricing details for your review. Please take your time to go through everything, and let me know if you have any questions. I'm here to help make this process as smooth as possible!",
    category: 'Contracts'
  },
  {
    id: '5',
    title: 'Payment Reminder',
    content: "Hi [Name]! Just a friendly reminder that your [payment type] is due on [date]. You can pay securely through our online portal or by calling us directly. Let me know if you need any assistance!",
    category: 'Payments'
  },
  {
    id: '6',
    title: 'Day-of Coordination',
    content: "Hi [Name]! I'm so excited for your wedding day! Just wanted to confirm the timeline and make sure everything is set for [date]. I'll be there at [time] to ensure everything runs smoothly. See you soon!",
    category: 'Coordination'
  },
  {
    id: '7',
    title: 'Thank You After Event',
    content: "Congratulations on your beautiful wedding! It was such an honor to be part of your special day. Thank you for choosing us, and I wish you both a lifetime of happiness together!",
    category: 'Thank You'
  },
  {
    id: '8',
    title: 'Reschedule Request',
    content: "Hi [Name]! I understand you need to reschedule our [meeting type]. No problem at all! I have availability on [dates]. Please let me know which works best for you, and I'll send over a calendar invite.",
    category: 'Scheduling'
  }
];
