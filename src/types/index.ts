// User types
export type UserType = 'vendor' | 'couple';
export type VendorType = 'photographer' | 'florist' | 'venue' | 'planner' | 'caterer' | 'musician' | 'officiant' | 'dj' | 'other';

export interface User {
  id: string;
  email: string;
  name: string;
  userType: UserType;
}

export interface VendorProfile {
  id: string;
  userId: string;
  businessName?: string;
  businessType?: string;
  location?: string;
  phone?: string;
  website?: string;
  description?: string;
}

// Navigation types  
export type View = 
  | "landing" 
  | "search" 
  | "cart" 
  | "checkout"
  | "auth"
  | "dashboard"
  | "coupleDashboard"
  | "calendar" 
  | "blockDate" 
  | "listings"
  | "createListing"
  | "addPhotos"
  | "photoEdit"
  | "businessHours"
  | "description"
  | "service"
  | "vendorService"
  | "review"
  | "vendorDetail"
  | "billing"
  | "messages"
  | "invoiceTemplateCreator"
  | "contacts"
  | "contactDetail"
  | "invoiceContacts"
  | "myAccount"
  | "accountTypeSelection"
  | "userTypeSelection"
  | "vendorTypeSelection"
  | "coupleSignup"
  | "vendorYourInfoStep"
  | "vendorSubscriptionStep"
  | "vendorPaymentStep"
  | "paymentSuccessStep"
  | "paymentFailureStep"
  | "vendorCreateAccountStep"
  | "businessInfoStep"
  | "createAccountStep"
  // Vendor-specific views
  | "venueAuth"
  | "floristAuth"
  | "photographerAuth"
  | "venueDashboard"
  | "floristDashboard"
  | "photographerDashboard"
  | "venueListings"
  | "floristListings"
  | "photographerListings"
  | "venueCreateListing"
  | "floristCreateListing"
  | "photographerCreateListing"
  | "createdListing"
  | "createdServices";

// Search types
export interface SearchParams {
  vendorType: string;
  location: string;
  date: string;
}

// Cart types
export interface CartItem {
  id: string;
  vendorId: string;
  vendorName: string;
  serviceName: string;
  price: number;
  image: string;
  date?: string;
  guests?: number;
}

// Wizard data types
export interface BusinessHours {
  [day: string]: {
    isOpen: boolean;
    startTime: string;
    endTime: string;
  };
}

export interface ServiceData {
  name: string;
  description: string;
  price: string;
  duration: string;
  category: string;
}

export interface WizardData {
  photos: string[];
  businessHours: BusinessHours;
  description: string;
  service: ServiceData;
}

// Re-export contacts types
export * from './contacts';