import { PUBLIC_VIEWS, PROTECTED_VIEWS_EXEMPT_FROM_AUTH_REDIRECT } from "../constants/appDefaults";

export const handleToggleBlockDate = (
  date: number, 
  isBlocked: boolean, 
  setBlockedDates: React.Dispatch<React.SetStateAction<number[]>>
) => {
  if (isBlocked) {
    // Add to blocked dates (isBlocked = true means we want to block it)
    setBlockedDates(prev => {
      if (!prev.includes(date)) {
        return [...prev, date];
      }
      return prev;
    });
  } else {
    // Remove from blocked dates (isBlocked = false means we want to unblock it)
    setBlockedDates(prev => prev.filter(d => d !== date));
  }
};

export const handleServiceStepNext = (
  data: any, 
  setWizardData: React.Dispatch<React.SetStateAction<any>>,
  setCurrentView: React.Dispatch<React.SetStateAction<any>>
) => {
  // Get the listing data from localStorage if it exists
  const tempListingData = localStorage.getItem('tempListingData');
  let listingData = {};
  
  if (tempListingData) {
    try {
      listingData = JSON.parse(tempListingData);
      // Don't clear the temporary data yet - let the Review component access it
      // localStorage.removeItem('tempListingData');
    } catch (error) {
      console.error('Error parsing temp listing data:', error);
    }
  }

  setWizardData((prev: any) => ({ 
    ...prev, 
    ...listingData, // Include photos, businessHours, description
    vendorService: data 
  }));
  setCurrentView('review');
};

export const handleEmptyStateNavigate = (
  view: string,
  setCurrentView: React.Dispatch<React.SetStateAction<any>>,
  handleNavigate: (view: string) => void
) => {
  if (view === 'createListing') {
    setCurrentView('createListing');
  } else {
    handleNavigate(view);
  }
};

export const customHandleNavigate = (
  view: string, 
  data: any,
  setSelectedContactId: React.Dispatch<React.SetStateAction<string>>,
  setCurrentView: React.Dispatch<React.SetStateAction<any>>,
  handleNavigate: (view: string) => void
) => {
  if (view === 'contactDetail' && data?.contactId) {
    setSelectedContactId(data.contactId);
    setCurrentView('contactDetail');
  } else {
    handleNavigate(view);
  }
};

export const isPublicView = (view: string): boolean => {
  return PUBLIC_VIEWS.includes(view);
};

export const shouldSkipAuthRedirect = (view: string): boolean => {
  return PROTECTED_VIEWS_EXEMPT_FROM_AUTH_REDIRECT.includes(view);
};

export const checkLocalStorageAuth = () => {
  const savedUser = localStorage.getItem('zinnia_user');
  const savedUserType = localStorage.getItem('zinnia_user_type');
  return { savedUser, savedUserType };
};