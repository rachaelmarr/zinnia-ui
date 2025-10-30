import { useCallback } from 'react';
import type { View } from '../types';

interface UseAppNavigationProps {
  userType: string | null;
  signOut: () => Promise<void>;
  setCurrentView: (view: View) => void;
  setHasVisitedCalendar: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedVendorId: React.Dispatch<React.SetStateAction<string>>;
  resetAppState: () => void;
}

export function useAppNavigation({ userType, signOut, setCurrentView, setHasVisitedCalendar, setSelectedVendorId, resetAppState }: UseAppNavigationProps) {
  const handleNavigate = useCallback(async (view: string, vendorId?: string) => {
    console.log(`🧭 Navigation requested: ${view}, userType: ${userType}`);
    console.log(`🧭 Navigation stack trace:`, new Error().stack);
    
    // SPECIAL TRACKING: Log when anyone tries to navigate to auth
    if (view === 'auth') {
      console.log('🚨 ALERT: handleNavigate("auth") called - this will trigger signOut!');
      console.log('🚨 Current authentication state:', {
        userType,
        hasLocalStorageUser: !!localStorage.getItem('zinnia_user'),
        localStorageUserType: localStorage.getItem('zinnia_user_type')
      });
    }
    
    if (view === 'dashboard') {
      // Check both React state and localStorage for userType
      const currentUserType = userType || localStorage.getItem('zinnia_user_type');
      console.log(`🔍 Dashboard navigation check - React userType: ${userType}, localStorage userType: ${currentUserType}`);
      
      if (currentUserType === 'vendor') {
        console.log('📍 Navigating to vendor dashboard');
        setCurrentView('dashboard');
      } else if (currentUserType === 'couple') {
        console.log('📍 Navigating to couple dashboard');
        setCurrentView('coupleDashboard');
      } else {
        console.warn('⚠️ Dashboard navigation requested but userType is null, checking localStorage...');
        
        // Try to get userType from localStorage as a fallback
        const savedUserType = localStorage.getItem('zinnia_user_type');
        const savedUser = localStorage.getItem('zinnia_user');
        
        console.log(`🔍 Fallback check - savedUserType: ${savedUserType}, hasUser: ${!!savedUser}`);
        
        if (savedUserType === 'vendor' && savedUser) {
          console.log('✅ Found vendor credentials in localStorage, navigating to dashboard');
          setCurrentView('dashboard');
        } else if (savedUserType === 'couple' && savedUser) {
          console.log('✅ Found couple credentials in localStorage, navigating to couple dashboard');
          setCurrentView('coupleDashboard');
        } else {
          console.error('❌ No valid userType found, defaulting to auth screen');
          setCurrentView('auth');
        }
      }
    } else if (view === 'coupleDashboard') {
      setCurrentView('coupleDashboard');
    } else if (view === 'calendar') {
      setHasVisitedCalendar(true);
      setCurrentView('calendar');
    } else if (view === 'contacts') {
      setCurrentView('contacts');
    } else if (view === 'listings') {
      setCurrentView('listings');
    } else if (view === 'createListing') {
      setCurrentView('createListing');
    } else if (view === 'billing') {
      setCurrentView('billing');
    } else if (view === 'messages') {
      setCurrentView('messages');
    } else if (view === 'myAccount') {
      setCurrentView('myAccount');
    } else if (view === 'addPhotos') {
      setCurrentView('addPhotos');
    } else if (view === 'photoEdit') {
      setCurrentView('photoEdit');
    } else if (view === 'businessHours') {
      setCurrentView('businessHours');
    } else if (view === 'description') {
      setCurrentView('description');
    } else if (view === 'service') {
      setCurrentView('service');
    } else if (view === 'vendorService') {
      setCurrentView('vendorService');
    } else if (view === 'review') {
      setCurrentView('review');
    } else if (view === 'landing') {
      setCurrentView('landing');
    } else if (view === 'search') {
      setCurrentView('search');
    } else if (view === 'cart') {
      setCurrentView('cart');
    } else if (view === 'checkout') {
      setCurrentView('checkout');
    } else if (view === 'userTypeSelection') {
      console.log('🎯 Navigation: userTypeSelection requested');
      setCurrentView('userTypeSelection');
    } else if (view === 'vendorTypeSelection') {
      setCurrentView('vendorTypeSelection');
    } else if (view === 'signupStep1') {
      setCurrentView('signupStep1');
    } else if (view === 'vendorDetail' && vendorId) {
      setSelectedVendorId(vendorId);
      setCurrentView('vendorDetail');
    } else if (view === 'createdListing') {
      setCurrentView('createdListing');
    } else if (view === 'createdServices') {
      setCurrentView('createdServices');
    } else if (view === 'auth') {
      setCurrentView('auth');
    } else if (view === 'venueAuth') {
      setCurrentView('venueAuth');
    } else if (view === 'floristAuth') {
      setCurrentView('floristAuth');
    } else if (view === 'photographerAuth') {
      setCurrentView('photographerAuth');
    } else if (view === 'venueDashboard') {
      setCurrentView('venueDashboard');
    } else if (view === 'floristDashboard') {
      setCurrentView('floristDashboard');
    } else if (view === 'photographerDashboard') {
      setCurrentView('photographerDashboard');
    } else if (view === 'venueListings') {
      setCurrentView('venueListings');
    } else if (view === 'floristListings') {
      setCurrentView('floristListings');
    } else if (view === 'photographerListings') {
      setCurrentView('photographerListings');
    }
  }, [userType, signOut, setCurrentView, setHasVisitedCalendar, setSelectedVendorId, resetAppState]);

  return { handleNavigate };
}