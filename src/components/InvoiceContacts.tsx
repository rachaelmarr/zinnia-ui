import { useState } from "react";
import ContactsImport from "../imports/Contacts-126-7041";

interface InvoiceContactsProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onNext?: () => void;
  onClose?: () => void;
}

// Functional wrapper for the imported Contacts component
export default function InvoiceContacts({
  onNavigate,
  onBack,
  onNext,
  onClose
}: InvoiceContactsProps) {
  const [selectedContact, setSelectedContact] = useState<any>(null);

  // Mock contact data - in a real app this would come from the backend
  const mockContact = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "312-555-1234",
    address: {
      street: "10607 Lockridge drive",
      city: "Silver Spring, MD",
      zip: "20901"
    }
  };

  const handleContactSearch = (query: string) => {
    console.log("🔍 Searching for contact:", query);
    // In a real app, this would search the contact database
    if (query.toLowerCase().includes("john")) {
      setSelectedContact(mockContact);
    } else {
      setSelectedContact(null);
    }
  };

  const handleContactSelect = (contact: any) => {
    console.log("👤 Contact selected:", contact);
    setSelectedContact(contact);
  };

  const handleNextStep = () => {
    if (!selectedContact) {
      alert("Please select a contact first");
      return;
    }
    
    console.log("➡️ Proceeding to next step with contact:", selectedContact);
    // Here you would typically save the selected contact to your invoice data
    // and navigate to the next step (Additional info)
    onNext?.();
  };

  const handleBackStep = () => {
    console.log("⬅️ Going back to template selection");
    onBack?.();
  };

  const handleCloseModal = () => {
    console.log("❌ Closing invoice creation flow");
    onClose?.();
  };

  // For now, we'll render the imported component as-is
  // In a full implementation, you'd want to make it interactive
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <ContactsImport />
      
      {/* Overlay for handling interactions */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Close button handler */}
        <button
          className="absolute right-8 top-8 z-50 size-8 cursor-pointer hover:opacity-80 transition-opacity pointer-events-auto"
          onClick={handleCloseModal}
        >
          <span className="sr-only">Close</span>
        </button>

        {/* Search field handler */}
        <div className="absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[555px] pointer-events-auto">
          <input
            type="text"
            placeholder="John Doe"
            className="w-full h-9 px-3 border border-[#8c97ac] rounded-lg bg-white text-[#47567b] text-[14px] font-['Montserrat:Regular',_sans-serif]"
            onChange={(e) => handleContactSearch(e.target.value)}
          />
        </div>

        {/* Navigation buttons at bottom */}
        <div className="absolute bottom-4 right-[82px] flex gap-3 items-center pointer-events-auto">
          <button
            onClick={handleCloseModal}
            className="px-3 py-2 text-[#47567b] text-[14px] font-['Montserrat:Medium',_sans-serif] hover:bg-gray-100 rounded-3xl transition-colors"
          >
            Close
          </button>
          
          <button
            onClick={handleBackStep}
            className="px-3 py-2 border border-[#8c97ac] text-[#47567b] text-[14px] font-['Montserrat:Medium',_sans-serif] hover:bg-gray-50 rounded-3xl transition-colors"
          >
            Back
          </button>
          
          <button
            onClick={handleNextStep}
            className="px-3 py-2 bg-[#2f7685] text-white text-[14px] font-['Montserrat:Medium',_sans-serif] hover:opacity-90 rounded-3xl transition-opacity"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}