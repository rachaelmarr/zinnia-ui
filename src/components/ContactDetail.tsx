import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import svgPaths from "../imports/svg-c1beheyyvv";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import imgScreenshot20250211At80525Pm1 from "figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png";
import { imgScreenshot20250211At80525Pm2 } from "../imports/svg-ob3rb";
import VendorLeftNav, { MobileMenuButton } from "./VendorLeftNav";
import ContactPhoto from "./ContactPhoto";
import { ContactDetailData, Activity, Note } from "../types/contacts";
import { projectId } from "../utils/supabase/info";
import { supabase } from "../lib/supabase";

interface ContactDetailProps {
  contactId: string;
  onNavigate: (view: string) => void;
  onBack: () => void;
}

type ActiveTab = 'activity' | 'notes' | 'messages';

// Header Icons
function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path
            d={svgPaths.p3a2fce80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-6" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell">
          <path
            d={svgPaths.pe392c80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

// Activity Icon Components
function ActivityIcon({ type, bgColor }: { type: string; bgColor: string }) {
  const iconMap: Record<string, string> = {
    'invoice': svgPaths.p12005030,
    'payment': svgPaths.p12005030,
    'sms': svgPaths.pac89d00,
    'email': svgPaths.p80d7900,
    'note': svgPaths.p27607500,
    'meeting': svgPaths.p2d4f9980,
    'call': svgPaths.pac89d00,
    'contract': svgPaths.p5d88c0,
    'other': svgPaths.pdc79980
  };

  const iconPath = iconMap[type] || iconMap.other;

  return (
    <svg className="block size-5" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path 
        d={iconPath} 
        stroke="var(--stroke-0, #47567B)" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Activity Card Component
function ActivityCard({ activity }: { activity: Activity }) {
  const getActivityColor = (type: string) => {
    const colorMap: Record<string, string> = {
      'invoice': '#f8c964',
      'payment': '#d5f8a8',
      'sms': '#ccd7e6',
      'email': '#ccd7e6',
      'note': '#ffcdb2',
      'meeting': '#c7f8eb',
      'call': '#ccd7e6',
      'contract': '#d1d5db',
      'other': '#f8c964'
    };
    return colorMap[type] || colorMap.other;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white relative rounded-lg border border-[#ccd7e6] p-4">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div 
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: getActivityColor(activity.type) }}
        >
          <ActivityIcon type={activity.type} bgColor={getActivityColor(activity.type)} />
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title and Timestamp */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <div className="font-['Literata:Medium',_sans-serif] font-medium text-[16px] tracking-[0.32px] text-[#47567b] flex-1">
              {activity.summary}
            </div>
            <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[12px] tracking-[0.24px] text-[#47567b] whitespace-nowrap">
              {formatDate(activity.created_at)}
            </div>
          </div>
          
          {/* Description */}
          {activity.description && (
            <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px] text-[#47567b] leading-[1.5]">
              {activity.description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactDetail({ contactId, onNavigate, onBack }: ContactDetailProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactData, setContactData] = useState<ContactDetailData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('activity');
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState({
    type: 'note' as 'note' | 'task',
    title: '',
    description: '',
    due_date: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  });

  // Load contact detail data
  useEffect(() => {
    loadContactData();
    loadMockNotes();
  }, [contactId]);

  const loadContactData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get access token using the same pattern as ContactsPage
      // Check if we're in offline/mock mode
      const { data: sessionData } = await supabase.auth.getSession();
      const hasSupabaseSession = sessionData?.session?.access_token;
      const savedUser = localStorage.getItem('zinnia_user');
      const savedAccessToken = localStorage.getItem('zinnia_access_token');
      
      // If we have a user in localStorage but no Supabase session and no saved access token,
      // we're likely in mock/offline mode
      const isOfflineMode = savedUser && !hasSupabaseSession && !savedAccessToken;
      
      if (isOfflineMode) {
        console.log('📱 Contact detail in offline mode - loading from localStorage');
        
        try {
          const user = JSON.parse(savedUser);
          const userId = user.id;
          
          // Load contacts from localStorage
          const storedContacts = JSON.parse(localStorage.getItem(`contacts_${userId}`) || '[]');
          
          // Find the specific contact
          const contact = storedContacts.find((c: any) => c.id === contactId);
          
          if (!contact) {
            setError('Contact not found in offline mode');
            return;
          }
          
          // Create mock financial data
          const financial = {
            total_paid: 1250.00,
            total_owed: 850.00,
            total_invoiced: 2100.00
          };

          // Create mock activities
          const activities = [
            {
              id: 'activity_1',
              contact_id: contactId,
              vendor_id: userId,
              type: 'invoice',
              summary: 'Invoice sent for wedding flowers',
              description: 'Sent invoice #001 for $850 for bridal bouquet and centerpieces',
              created_at: new Date(Date.now() - 86400000).toISOString() // 1 day ago
            },
            {
              id: 'activity_2', 
              contact_id: contactId,
              vendor_id: userId,
              type: 'email',
              summary: 'Follow-up email sent',
              description: 'Sent follow-up email about venue visit scheduling',
              created_at: new Date(Date.now() - 172800000).toISOString() // 2 days ago
            },
            {
              id: 'activity_3',
              contact_id: contactId,
              vendor_id: userId,
              type: 'payment',
              summary: 'Payment received',
              description: 'Received $1,250 payment via Stripe for deposit',
              created_at: new Date(Date.now() - 259200000).toISOString() // 3 days ago
            }
          ];

          // Ensure contact has required fields with defaults
          const contactWithDefaults = {
            id: contact.id,
            first_name: contact.first_name || 'Unknown',
            last_name: contact.last_name || 'Contact',
            email: contact.email || 'unknown@example.com',
            phone: contact.phone || '+1234567890',
            company_name: contact.company_name || null,
            profile_image_url: contact.photo_url || null,
            last_activity_at: contact.updated_at || contact.created_at || new Date().toISOString(),
            tags: contact.tags || []
          };

          const mockData = {
            contact: contactWithDefaults,
            financial,
            activities
          };

          console.log('✅ Contact detail loaded from localStorage:', mockData);
          setContactData(mockData);
          return;
          
        } catch (offlineError) {
          console.error('Error loading contact from localStorage:', offlineError);
          setError('Failed to load contact information in offline mode');
          return;
        }
      }
      
      // Continue with online Supabase mode  
      const { data: { session } } = await supabase.auth.getSession();
      const accessToken = session?.access_token || savedAccessToken;
      
      if (!accessToken) {
        setError('Authentication required');
        return;
      }

      console.log('🔍 Fetching contact detail with token:', accessToken ? 'present' : 'missing');

      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-6e4d8724/contacts/${contactId}/detail`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('📡 Contact detail response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Contact detail error response:', errorText);
        throw new Error('Failed to load contact detail');
      }

      const data = await response.json();
      console.log('✅ Contact detail loaded successfully:', data);
      setContactData(data);

    } catch (error) {
      console.error('Error loading contact detail:', error);
      setError('Failed to load contact information');
    } finally {
      setLoading(false);
    }
  };

  const loadMockNotes = () => {
    // Create mock notes data
    const mockNotes: Note[] = [
      {
        id: 'note_1',
        contact_id: contactId,
        vendor_id: 'vendor_1',
        type: 'note',
        title: 'Client prefers blush decor',
        description: 'Sarah wants all table settings to be blush & gold.',
        created_at: new Date(Date.now() - 172800000).toISOString() // 2 days ago
      },
      {
        id: 'task_1',
        contact_id: contactId,
        vendor_id: 'vendor_1',
        type: 'task',
        title: 'Follow up on catering',
        description: 'Client is undecided between plated or buffet.',
        completed: false,
        due_date: new Date(Date.now() + 259200000).toISOString(), // 3 days from now
        created_at: new Date(Date.now() - 86400000).toISOString() // 1 day ago
      }
    ];
    
    setNotes(mockNotes);
  };

  const handleAddNote = () => {
    if (!newNote.title.trim()) return;
    
    const note: Note = {
      id: `${newNote.type}_${Date.now()}`,
      contact_id: contactId,
      vendor_id: 'vendor_1',
      type: newNote.type,
      title: newNote.title,
      description: newNote.description,
      completed: newNote.type === 'task' ? false : undefined,
      due_date: newNote.type === 'task' && newNote.due_date ? newNote.due_date : undefined,
      created_at: new Date().toISOString()
    };
    
    setNotes(prev => [note, ...prev]);
    setNewNote({
      type: 'note',
      title: '',
      description: '',
      due_date: '',
      priority: 'medium'
    });
  };

  const handleToggleTask = (taskId: string) => {
    setNotes(prev => prev.map(note => 
      note.id === taskId && note.type === 'task'
        ? { ...note, completed: !note.completed }
        : note
    ));
  };

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString()}`;
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f0f5fa] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="setup-description">Loading contact details...</p>
        </div>
      </div>
    );
  }

  if (error || !contactData) {
    return (
      <div className="min-h-screen bg-[#f0f5fa] flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || 'Contact not found'}</p>
          <button 
            onClick={onBack}
            className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-4 py-2 rounded-lg"
          >
            Back to Contacts
          </button>
        </div>
      </div>
    );
  }

  const { contact, financial, activities } = contactData;

  return (
    <div className="min-h-screen bg-[#f0f5fa] relative w-full" data-name="vendor - individual">
      {/* Global Header */}
      <div className="w-full h-[72px] bg-[#ffffff] border-b border-gray-200" data-name="Global Header - Vendor Admin">
        <div className="flex items-center justify-between h-full px-4 lg:px-10">
          {/* Left Content with Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenuButton onClick={handleOpenMobileMenu} />
            </div>
            
            {/* Logo */}
            <div className="h-6 w-[143px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
                <g clipPath="url(#clip0_137_3693)" id="Logo">
                  <path d={svgPaths.p2b86a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
                </g>
                <defs>
                  <clipPath id="clip0_137_3693">
                    <rect fill="white" height="24" width="143" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex items-center gap-6">
            {/* Action Icons */}
            <div className="flex gap-4 items-center">
              <ChatAlt2 />
              <Bell />
            </div>
            
            {/* Avatar */}
            <div className="relative size-10">
              <div className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-full" style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-72px)]">
        {/* Left Navigation */}
        <VendorLeftNav 
          onNavigate={onNavigate}
          currentView="contacts"
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={handleOpenMobileMenu}
          onCloseMobileMenu={handleCloseMobileMenu}
        />

        {/* Main Content */}
        <div className="flex-1 p-8 lg:ml-0">
          {/* Back Button */}
          <div className="flex items-center gap-1 mb-8">
            <ArrowLeft className="size-6" />
            <button 
              onClick={onBack}
              className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#000000] text-[14px] tracking-[0.28px] hover:text-[#2f7685] transition-colors"
            >
              Back to contacts
            </button>
          </div>

          {/* Main Content Container - Based on Figma Frame12033 structure */}
          <div className="bg-[#ffffff] rounded-lg border border-[#ccd7e6] relative w-full min-h-[800px] overflow-hidden">
            <div className="relative size-full">
              {/* Contact Info Section - Left Side */}
              <div className="absolute left-9 top-[29px] w-[300px] flex flex-col gap-5" data-name="contact">
                {/* Contact Photo and Basic Info */}
                <div className="flex flex-col gap-2">
                  {/* Contact Photo */}
                  <div className="inline-grid place-items-start">
                    <ContactPhoto
                      imageUrl={contact.profile_image_url}
                      firstName={contact.first_name}
                      lastName={contact.last_name}
                      size="lg"
                    />
                  </div>
                  
                  {/* Name */}
                  <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[16px] tracking-[0.32px] min-w-full" style={{ width: "min-content" }}>
                    <p className="leading-[1.5]">{contact.first_name} {contact.last_name}</p>
                  </div>
                  
                  {/* Last Activity */}
                  <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px] min-w-full" style={{ width: "min-content" }}>
                    <p className="leading-[1.5]">
                      Last activity
                      <br aria-hidden="true" />
                      {formatDate(contact.last_activity_at)}
                    </p>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="flex gap-3 items-center">
                    <div className="bg-[#ffffff] border border-[#47567b] rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                      <div className="size-5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="mail">
                            <path d={svgPaths.p80d7900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-[#ffffff] border border-[#47567b] rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                      <div className="size-5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="chat">
                            <path d={svgPaths.pac89d00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-[#ffffff] border border-[#47567b] rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                      <div className="size-5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="pencil-alt">
                            <path d={svgPaths.p27607500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="bg-[#ffffff] border border-[#47567b] rounded-full p-2 hover:bg-gray-50 cursor-pointer">
                      <div className="size-5">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <g id="trash">
                            <path d={svgPaths.p9c56500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Summary and Contact Details */}
                <div className="flex flex-col gap-6 w-[300px]">
                  {/* Financial Summary */}
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-3">
                      {/* Amount Paid */}
                      <div className="flex flex-col w-[300px]">
                        <div className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#667593] text-[32px] min-w-full" style={{ width: "min-content" }}>
                          <p className="leading-[1.5]">{formatCurrency(financial.total_paid)}</p>
                        </div>
                        <div className="flex gap-1">
                          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px]">
                            <p className="leading-[1.5] whitespace-pre">
                              <span>{`You've been paid. `}</span>
                              <span className="text-[#2e7684] underline">View invoice</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Amount Owed */}
                      <div className="flex flex-col w-[300px]">
                        <div className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[#dc332e] text-[32px] min-w-full" style={{ width: "min-content" }}>
                          <p className="leading-[1.5]">{formatCurrency(financial.total_owed)}</p>
                        </div>
                        <div className="flex gap-1">
                          <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px]">
                            <p className="leading-[1.5] whitespace-pre">
                              <span>{`You're owed. `}</span>
                              <span className="text-[#2e7684] underline">Send invoice.</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="flex flex-col gap-6 w-[300px]">
                    {/* Email */}
                    <div className="flex flex-col leading-[0] w-full">
                      <div className="flex gap-1 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px]">
                        <div className="text-[#47567b]">
                          <p className="leading-[1.5] text-nowrap whitespace-pre">Email</p>
                        </div>
                        <div className="text-[#2e7684]">
                          <p className="leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
                        </div>
                      </div>
                      <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#667593] text-[16px] tracking-[0.32px] min-w-full" style={{ width: "min-content" }}>
                        <p className="leading-[1.5]">{contact.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col leading-[0] w-full">
                      <div className="flex gap-1 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px]">
                        <div className="text-[#47567b]">
                          <p className="leading-[1.5] text-nowrap whitespace-pre">Phone number</p>
                        </div>
                        <div className="text-[#2e7684]">
                          <p className="leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
                        </div>
                      </div>
                      <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#667593] text-[16px] tracking-[0.32px] min-w-full" style={{ width: "min-content" }}>
                        <p className="leading-[1.5]">{contact.phone}</p>
                      </div>
                    </div>

                    {/* Company */}
                    {contact.company_name && (
                      <div className="flex flex-col leading-[0] w-full">
                        <div className="flex gap-1 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px]">
                          <div className="text-[#47567b]">
                            <p className="leading-[1.5] text-nowrap whitespace-pre">Company</p>
                          </div>
                          <div className="text-[#2e7684]">
                            <p className="leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
                          </div>
                        </div>
                        <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#667593] text-[16px] tracking-[0.32px] min-w-full" style={{ width: "min-content" }}>
                          <p className="leading-[1.5]">{contact.company_name}</p>
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex gap-1 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px] leading-[0]">
                        <div className="text-[#47567b]">
                          <p className="leading-[1.5] text-nowrap whitespace-pre">Tags</p>
                        </div>
                        <div className="text-[#2e7684]">
                          <p className="leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {contact.tags.map((tag, index) => (
                          <div key={tag.id || index} className="bg-[#8c97ac] px-1 py-0 rounded overflow-clip">
                            <div className="font-['Jost:Regular',_sans-serif] font-normal text-[12px] text-neutral-50 leading-[0]">
                              <p className="leading-[1.5] whitespace-pre">{tag.name}</p>
                            </div>
                          </div>
                        ))}
                        {contact.tags.length === 0 && (
                          <div className="bg-[#8c97ac] px-1 py-0 rounded overflow-clip">
                            <div className="font-['Jost:Regular',_sans-serif] font-normal text-[12px] text-neutral-50 leading-[0]">
                              <p className="leading-[1.5] whitespace-pre">New lead</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabs - Positioned below contact info on the left */}
              <div className="absolute left-[347px] top-[29px] w-[825px] flex gap-4" data-name="Underlined Tabs">
                <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
                
                {/* Activity Tab */}
                <button
                  onClick={() => setActiveTab('activity')}
                  className={`h-9 relative ${activeTab === 'activity' ? '' : 'cursor-pointer hover:bg-gray-50'}`}
                >
                  <div className="box-border flex gap-3 h-9 items-center overflow-clip p-[8px] relative">
                    <div className={`font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] text-[14px] tracking-[0.28px] ${
                      activeTab === 'activity' ? 'text-[#47567b]' : 'text-[#667593]'
                    }`}>
                      <p className="leading-[1.5] whitespace-pre">Activity</p>
                    </div>
                  </div>
                  {activeTab === 'activity' && (
                    <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
                  )}
                </button>

                {/* Notes and Tasks Tab */}
                <button
                  onClick={() => setActiveTab('notes')}
                  className={`h-9 relative ${activeTab === 'notes' ? '' : 'cursor-pointer hover:bg-gray-50'}`}
                >
                  <div className="box-border flex gap-3 h-9 items-center overflow-clip p-[8px] relative">
                    <div className={`font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] text-[14px] tracking-[0.28px] ${
                      activeTab === 'notes' ? 'text-[#47567b]' : 'text-[#667593]'
                    }`}>
                      <p className="leading-[1.5] whitespace-pre">Notes and tasks</p>
                    </div>
                  </div>
                  {activeTab === 'notes' && (
                    <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
                  )}
                </button>

                {/* Messages Tab */}
                <button
                  onClick={() => setActiveTab('messages')}
                  className={`h-9 relative ${activeTab === 'messages' ? '' : 'cursor-pointer hover:bg-gray-50'}`}
                >
                  <div className="box-border flex gap-3 h-9 items-center overflow-clip p-[8px] relative">
                    <div className={`font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] text-[14px] tracking-[0.28px] ${
                      activeTab === 'messages' ? 'text-[#47567b]' : 'text-[#667593]'
                    }`}>
                      <p className="leading-[1.5] whitespace-pre">Messages</p>
                    </div>
                  </div>
                  {activeTab === 'messages' && (
                    <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
                  )}
                </button>
              </div>

              {/* Vertical Divider */}
              <div className="absolute flex h-[787px] items-center justify-center left-[324px] top-[29px] w-[0px]">
                <div className="flex-none rotate-[90deg]">
                  <div className="h-0 relative w-[787px]">
                    <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 787 1">
                        <line id="Line 6" stroke="var(--stroke-0, #CCD7E6)" x2="787" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed - Right Side */}
              <div className="absolute top-[100px] left-[400px] right-[40px] max-h-[700px] overflow-y-auto">
                {activeTab === 'activity' && (
                  <div className="flex flex-col gap-6">
                    {activities.map((activity) => (
                      <ActivityCard key={activity.id} activity={activity} />
                    ))}
                    
                    {activities.length === 0 && (
                      <div className="text-center py-16">
                        <p className="text-[#667593] text-[14px]">No activities yet</p>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'notes' && (
                  <div className="flex flex-col gap-6 w-full">
                    {/* Create Note/Task Form */}
                    <div className="flex flex-col gap-[13px] w-[400px]">
                      {/* Type Dropdown */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex gap-2 items-center">
                          <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                            Type*
                          </div>
                          <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" fill="#667593" />
                            <path d="M8 4v4m0 2h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="relative">
                          <select
                            value={newNote.type}
                            onChange={(e) => setNewNote(prev => ({ ...prev, type: e.target.value as 'note' | 'task' }))}
                            className="w-full h-9 bg-white border border-[#8c97ac] rounded-lg px-3 py-2 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px] appearance-none"
                          >
                            <option value="note">Note</option>
                            <option value="task">Task</option>
                          </select>
                          <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                            <path d="M15.8333 7.5L10 13.3333L4.16667 7.5" stroke="#667593" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px]">
                          Just for reference, no action needed.
                        </div>
                      </div>

                      {/* Title Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                          Title (required)
                        </div>
                        <input
                          type="text"
                          value={newNote.title}
                          onChange={(e) => setNewNote(prev => ({ ...prev, title: e.target.value }))}
                          placeholder="Placeholder text"
                          className="w-full h-9 bg-white border border-[#8c97ac] rounded-lg px-3 py-2 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px]"
                        />
                      </div>

                      {/* Description Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                          Description
                        </div>
                        <textarea
                          value={newNote.description}
                          onChange={(e) => setNewNote(prev => ({ ...prev, description: e.target.value }))}
                          placeholder="Placeholder text"
                          rows={3}
                          className="w-full bg-white border border-[#8c97ac] rounded-lg px-3 py-2 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px] resize-none"
                        />

                        {/* Task-specific fields */}
                        {newNote.type === 'task' && (
                          <div className="flex flex-col gap-2.5 w-full mt-2.5">
                            {/* Due Date Field */}
                            <div className="flex flex-col gap-2 w-full">
                              <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                                Due date*
                              </div>
                              <div className="relative w-[380px]">
                                <input
                                  type="date"
                                  value={newNote.due_date}
                                  onChange={(e) => setNewNote(prev => ({ ...prev, due_date: e.target.value }))}
                                  className="w-full h-9 bg-white border border-[#8c97ac] rounded-lg px-3 py-2 pr-10 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px]"
                                />
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                                  <path d="M6.66667 5.83333V2.5M13.3333 5.83333V2.5M5.83333 9.16667H14.1667M4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5Z" stroke="#667593" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>

                            {/* Priority Field */}
                            <div className="flex flex-col gap-2 w-full">
                              <div className="flex gap-2 items-center">
                                <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                                  Priority*
                                </div>
                                <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                  <circle cx="8" cy="8" r="8" fill="#667593" />
                                  <path d="M8 4v4m0 2h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                              <div className="relative">
                                <select
                                  value={newNote.priority}
                                  onChange={(e) => setNewNote(prev => ({ ...prev, priority: e.target.value as 'low' | 'medium' | 'high' }))}
                                  className="w-full h-9 bg-white border border-[#8c97ac] rounded-lg px-3 py-2 font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px] appearance-none"
                                >
                                  <option value="low">Low</option>
                                  <option value="medium">Medium</option>
                                  <option value="high">High</option>
                                </select>
                                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 size-5 pointer-events-none" fill="none" viewBox="0 0 20 20">
                                  <path d="M15.8333 7.5L10 13.3333L4.16667 7.5" stroke="#667593" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                              <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#667593] tracking-[0.28px]">
                                Just for reference, no action needed.
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          onClick={handleAddNote}
                          disabled={!newNote.title.trim()}
                          className={`w-fit px-3 py-2 rounded-3xl font-['Montserrat:Medium',_sans-serif] font-medium text-[14px] tracking-[0.28px] transition-colors mt-2.5 ${
                            newNote.title.trim()
                              ? 'bg-[#2f7685] text-white hover:bg-[#265a66] cursor-pointer'
                              : 'bg-neutral-100 text-[#ccd7e6] cursor-not-allowed'
                          }`}
                        >
                          Add {newNote.type}
                        </button>
                      </div>
                    </div>

                    {/* Existing Notes/Tasks */}
                    <div className="flex flex-col gap-[18px] w-full">
                      <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#000000] text-[16px] tracking-[0.32px]">
                        March 2025
                      </div>

                      {notes.map((note) => (
                        <div key={note.id} className="bg-white rounded-lg border border-[#ccd7e6] p-5">
                          <div className="flex flex-col gap-2.5">
                            {/* Badge */}
                            <div className={`w-fit px-1 py-0 rounded ${
                              note.type === 'note' ? 'bg-[#8c97ac]' : 'bg-[#a75701]'
                            }`}>
                              <div className="font-['Jost:Regular',_sans-serif] font-normal text-[12px] text-neutral-50">
                                {note.type === 'note' ? 'Note' : 'Task'}
                              </div>
                            </div>

                            {/* Content and Actions */}
                            <div className="flex gap-[13px] items-start w-full">
                              {/* Checkbox for tasks or content for notes */}
                              <div className="flex-1">
                                {note.type === 'task' ? (
                                  <div className="flex gap-2 items-start">
                                    <input
                                      type="checkbox"
                                      checked={note.completed || false}
                                      onChange={() => handleToggleTask(note.id)}
                                      className="mt-0.5 w-4 h-4 rounded border border-[#8c97ac] bg-white"
                                    />
                                    <div className="flex-1">
                                      <div className={`font-['Literata:Medium',_sans-serif] font-medium text-[14px] tracking-[0.28px] ${
                                        note.completed ? 'line-through text-[#8c97ac]' : 'text-[#47567b]'
                                      }`}>
                                        {note.title}
                                      </div>
                                      {note.description && (
                                        <div className={`font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] tracking-[0.28px] leading-[1.5] ${
                                          note.completed ? 'line-through text-[#8c97ac]' : 'text-[#47567b]'
                                        }`}>
                                          {note.description}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ) : (
                                  <div>
                                    <div className="font-['Literata:Medium',_sans-serif] font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
                                      {note.title}
                                    </div>
                                    {note.description && (
                                      <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px] leading-[1.5]">
                                        {note.description}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>

                              {/* Timestamp and Actions */}
                              <div className="flex flex-col gap-1 items-end w-[231px]">
                                <div className="font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[12px] text-right tracking-[0.24px]">
                                  {note.type === 'task' && note.due_date && !note.completed ? (
                                    `Due in ${Math.ceil((new Date(note.due_date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days`
                                  ) : (
                                    `Created ${new Date(note.created_at).toLocaleDateString('en-US', { 
                                      month: 'long',
                                      day: 'numeric',
                                      year: 'numeric',
                                      hour: 'numeric',
                                      minute: '2-digit'
                                    })}`
                                  )}
                                </div>
                                <div className="flex gap-[7px]">
                                  {/* Edit Icon */}
                                  <svg className="size-4 cursor-pointer hover:text-blue-600" fill="none" viewBox="0 0 16 16">
                                    <path d="M10.1547 3.488L12.512 5.84533M11.1547 2.488C11.4673 2.1754 11.8912 1.99978 12.3333 1.99978C12.7754 1.99978 13.1994 2.1754 13.512 2.488C13.8246 2.8006 14.0002 3.22458 14.0002 3.66667C14.0002 4.10875 13.8246 4.53273 13.512 4.84533L4.33333 14.024H2V11.6427L11.1547 2.488Z" stroke="#47567B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  </svg>
                                  {/* Delete Icon */}
                                  <svg className="size-4 cursor-pointer hover:text-red-600" fill="none" viewBox="0 0 16 16">
                                    <path d="M6.66667 7.33333V11.3333M9.33333 7.33333V11.3333M2.66667 4.66667H13.3333M12.6667 4.66667L12.0887 12.7613C12.0647 13.0977 11.9142 13.4125 11.6674 13.6424C11.4206 13.8722 11.0959 14 10.7587 14H5.24133C4.90409 14 4.57938 13.8722 4.33259 13.6424C4.0858 13.4125 3.93528 13.0977 3.91133 12.7613L3.33333 4.66667H12.6667ZM10 4.66667V2.66667C10 2.48986 9.92976 2.32029 9.80474 2.19526C9.67971 2.07024 9.51014 2 9.33333 2H6.66667C6.48986 2 6.32029 2.07024 6.19526 2.19526C6.07024 2.32029 6 2.48986 6 2.66667V4.66667H10Z" stroke="#47567B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      {notes.length === 0 && (
                        <div className="text-center py-16">
                          <p className="text-[#667593] text-[14px]">No notes or tasks yet</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div className="text-center py-16">
                    <p className="text-[#667593] text-[14px]">Messages coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}