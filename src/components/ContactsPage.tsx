import React, { useState, useEffect } from "react";
import ContactWizard from "./ContactWizard";

// Icon components
function ChatAlt2Icon() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path
            d="M4 6H16V16H8L4 20V6Z"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function BellIcon() {
  return (
    <div className="relative shrink-0 size-6" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell">
          <path
            d="M18 8A6 6 0 0 0 6 8C6 15 3 17 3 17H21S18 15 18 8ZM13.73 21A2 2 0 0 1 10.27 21"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  tags: string[];
}

interface ContactsPageProps {
  onNavigate: (view: string) => void;
}

export default function ContactsPage({ onNavigate }: ContactsPageProps) {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Load contacts when component mounts
  useEffect(() => {
    loadContacts();
  }, []);

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact => {
    if (!searchTerm.trim()) return true;
    
    const searchLower = searchTerm.toLowerCase();
    return (
      contact.name.toLowerCase().includes(searchLower) ||
      contact.email.toLowerCase().includes(searchLower) ||
      contact.phone.includes(searchTerm)
    );
  });

  const loadContacts = async () => {
    try {
      const response = await fetch('/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data.contacts || []);
      } else {
        console.error('Failed to load contacts:', response.status);
      }
    } catch (error) {
      console.error('Error loading contacts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenWizard = () => {
    setIsWizardOpen(true);
  };

  const handleCloseWizard = () => {
    setIsWizardOpen(false);
  };

  const handleWizardSuccess = (newContact: Contact) => {
    setContacts(prev => [...prev, newContact]);
    setIsWizardOpen(false);
    setToast({ type: 'success', message: 'Contact added successfully!' });
    setTimeout(() => setToast(null), 3000);
  };

  const handleWizardError = (error: string) => {
    setToast({ type: 'error', message: error });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#f0f5fa]">
      {/* Content Container with responsive padding */}
      <div className="p-responsive">
        <div className="w-full max-w-none lg:max-w-7xl lg:mx-auto">
          {/* Custom Responsive Contacts Layout */}
          <div className="rounded-lg">
            {/* Header Section - responsive layout */}
            <div className="p-6 pb-4">
              {/* Mobile: Title and search stacked, Desktop: side by side */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                {/* Title and count */}
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                  <h1 className="section-heading text-[#47567B] mb-2 md:mb-0">Contacts</h1>
                  <span className="setup-description text-[#667593]">
                    {searchTerm.trim() 
                      ? `${filteredContacts.length} of ${contacts.length} contacts`
                      : `${contacts.length} total contacts`
                    }
                  </span>
                </div>
                
                {/* Search and Add button container */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  {/* Search Bar */}
                  <div className="relative flex-1 min-w-0 sm:min-w-[280px] md:w-[320px]">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <svg className="w-4 h-4 text-[#667593]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Search contacts..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent"
                    />
                  </div>

                  {/* Add Contact Button */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleOpenWizard}
                      className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Add contact
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Container - responsive */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                {/* Table Header */}
                <thead>
                  <tr className="bg-[#f8f9fa] border-b border-[#ccd7e6]">
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/3">
                      Name
                    </th>
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/3">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/6">
                      Phone
                    </th>
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/6">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/6">
                      Tags
                    </th>
                    <th className="text-left py-3 px-4 text-[14px] font-normal text-[#667593] font-['Montserrat'] tracking-[0.28px] w-1/6">
                      Actions
                    </th>
                  </tr>
                </thead>
                {/* Table Body - Loading or Contact Rows */}
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={6} className="py-16 px-4">
                        <div className="text-center">
                          <div className="text-[#667593] mb-4">Loading contacts...</div>
                        </div>
                      </td>
                    </tr>
                  ) : filteredContacts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-16 px-4">
                        <div className="text-center max-w-md mx-auto">
                          {/* Empty State Content */}
                          <div className="mb-6">
                            <h3 className="text-[24px] font-['Literata'] font-semibold text-[#47567B] mb-4 leading-tight">
                              No contacts (yet!)
                            </h3>
                            <p className="setup-description text-[#717182] leading-relaxed">
                              Add clients and leads, track their details and manage your event conversations here.
                            </p>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <button
                              onClick={handleOpenWizard}
                              className="button-text bg-[#2f7685] hover:bg-[#265a66] text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 3.33334V12.6667M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Add your first contact
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    filteredContacts.map((contact) => (
                      <tr key={contact.id} className="border-b border-[#f0f5fa] hover:bg-[#f8f9fa] transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#2f7685] rounded-full flex items-center justify-center">
                              <span className="text-white font-medium text-sm">
                                {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                              </span>
                            </div>
                            <div>
                              <div className="text-[14px] font-medium text-[#47567B]">
                                {contact.name}
                              </div>
                              <div className="text-[12px] text-[#667593]">
                                Contact
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-[14px] text-[#47567B]">{contact.email}</div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-[14px] text-[#47567B]">{contact.phone}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            contact.status === 'active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {contact.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1">
                            {contact.tags.map((tag, index) => (
                              <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#e5e7eb] text-[#47567B]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <button className="p-1 text-[#667593] hover:text-[#2f7685] transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button className="p-1 text-[#667593] hover:text-red-500 transition-colors">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Contact Wizard Modal */}
        <ContactWizard
          isOpen={isWizardOpen}
          onClose={handleCloseWizard}
          onSuccess={handleWizardSuccess}
          onError={handleWizardError}
        />

        {/* Toast Notifications */}
        {toast && (
          <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
            toast.type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            <div className="flex items-center gap-3">
              {toast.type === 'success' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
              <span className="text-sm font-medium">{toast.message}</span>
              <button
                onClick={() => setToast(null)}
                className="ml-auto text-white hover:text-gray-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
