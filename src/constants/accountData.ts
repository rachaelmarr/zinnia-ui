// Account form data types
export interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  website: string;
}

export interface BusinessData {
  businessName: string;
  businessType: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  taxId: string;
  businessPhone: string;
}

export interface SecurityData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface NotificationData {
  emailBookings: boolean;
  emailPayments: boolean;
  emailMarketing: boolean;
  smsBookings: boolean;
  smsPayments: boolean;
  smsMarketing: boolean;
  pushNotifications: boolean;
}

export type AccountTab = 'profile' | 'business' | 'security' | 'notifications' | 'billing';

// Initial form data
export const INITIAL_PROFILE_DATA: ProfileData = {
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah@bloompetals.com',
  phone: '+1 (555) 123-4567',
  bio: 'Passionate florist with 10+ years of experience creating beautiful wedding arrangements.',
  website: 'www.bloompetals.com'
};

export const INITIAL_BUSINESS_DATA: BusinessData = {
  businessName: 'Bloom Petals',
  businessType: 'Florist',
  address: '123 Main Street',
  city: 'Chicago',
  state: 'IL',
  zipCode: '60601',
  taxId: '',
  businessPhone: '+1 (555) 123-4567'
};

export const INITIAL_SECURITY_DATA: SecurityData = {
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
};

export const INITIAL_NOTIFICATION_DATA: NotificationData = {
  emailBookings: true,
  emailPayments: true,
  emailMarketing: false,
  smsBookings: true,
  smsPayments: false,
  smsMarketing: false,
  pushNotifications: true
};

// Account tabs configuration
export const ACCOUNT_TABS = [
  { id: 'profile', label: 'Profile' },
  { id: 'business', label: 'Business Details' },
  { id: 'security', label: 'Security' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'billing', label: 'Billing' }
] as const;

// Business type options
export const BUSINESS_TYPE_OPTIONS = [
  'Florist',
  'Venue',
  'Photographer',
  'Caterer',
  'Other'
] as const;

// Email notification settings
export const EMAIL_NOTIFICATION_SETTINGS = [
  { 
    key: 'emailBookings' as keyof NotificationData, 
    label: 'New Bookings', 
    description: 'Get notified when you receive new booking requests' 
  },
  { 
    key: 'emailPayments' as keyof NotificationData, 
    label: 'Payment Updates', 
    description: 'Receive notifications about payments and invoices' 
  },
  { 
    key: 'emailMarketing' as keyof NotificationData, 
    label: 'Marketing Updates', 
    description: 'Stay informed about new features and promotions' 
  }
] as const;

// SMS notification settings
export const SMS_NOTIFICATION_SETTINGS = [
  { 
    key: 'smsBookings' as keyof NotificationData, 
    label: 'New Bookings', 
    description: 'Get text alerts for urgent booking requests' 
  },
  { 
    key: 'smsPayments' as keyof NotificationData, 
    label: 'Payment Updates', 
    description: 'Receive SMS notifications about payments' 
  },
  { 
    key: 'smsMarketing' as keyof NotificationData, 
    label: 'Marketing Updates', 
    description: 'Promotional messages and updates via SMS' 
  }
] as const;

// Billing history mock data
export const BILLING_HISTORY = [
  { date: 'Feb 15, 2025', description: 'Professional Plan', amount: '$29.00', status: 'Paid' },
  { date: 'Jan 15, 2025', description: 'Professional Plan', amount: '$29.00', status: 'Paid' },
  { date: 'Dec 15, 2024', description: 'Professional Plan', amount: '$29.00', status: 'Paid' }
] as const;