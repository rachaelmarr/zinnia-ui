import React, { useState } from "react";
import ListingsPage from "./ListingsPage";
import ResponsiveCalendar from "./ResponsiveCalendar";
import ResponsiveVendorDashboard from "./ResponsiveVendorDashboard";
import CoupleDashboard from "./CoupleDashboard";
import Auth from "./Auth";
import Landing from "./Landing";
import SearchResults from "./SearchResults";
import Cart from "./Cart";
import Checkout from "./Checkout";
import BlockDate from "./BlockDate";
import VendorDetail from "./VendorDetail";
import Invoice from "./Invoice";
import InvoiceTemplateCreator from "./InvoiceTemplateCreator";
import ContactsPage from "./ContactsPage";
import AccountTypeSelection from "./AccountTypeSelection";
import UserTypeSelectionNew from "./UserTypeSelectionNew";
import VendorTypeSelection from "./VendorTypeSelection";
import VendorYourInfoStep from "./VendorYourInfoStep";
import VendorSubscriptionStep from "./VendorSubscriptionStep";
import VendorPaymentStep from "./VendorPaymentStep";
import PaymentSuccessStep from "./PaymentSuccessStep";
import PaymentFailureStep from "./PaymentFailureStep";
import VendorCreateAccountStep from "./VendorCreateAccountStep";
import AccountCreationStep from "./AccountCreationStep";
import CoupleSignupFlow from "./CoupleSignupFlow";
import ListingAndServicesEmpty from "../imports/ListingAndServicesEmpty-69-9018";
import ContactDetail from "./ContactDetail";
import MyAccount from "./MyAccount";
import MessagingPage from "./messaging/MessagingPage";
import Header from "./Header";
import GlobalHeader from "./GlobalHeader";
import VendorLeftNav from "./VendorLeftNav";
import PhotoEdit from "./listing/PhotoEdit";
import BusinessHours from "./listing/BusinessHours";
import Description from "./listing/Description";
import Service from "./listing/Service";
import Review from "./listing/Review";
import CreatedListing from "./listing/CreatedListing";
import CreatedServices from "./listing/CreatedServices";
import UnifiedServiceCreation from "./listing/UnifiedServiceCreation";
import InvoiceContacts from "./InvoiceContacts";
// Vendor-specific components
import VenueAuth from "./vendor/VenueAuth";
import FloristAuth from "./vendor/FloristAuth";
import PhotographerAuth from "./vendor/PhotographerAuth";
import UnifiedVendorDashboard from "./vendor/UnifiedVendorDashboard";
import VenueListing from "./vendor/VenueListing";
import { MOCK_VENDOR_DATA } from "../constants/vendorData";
import { handleServiceStepNext, handleEmptyStateNavigate, customHandleNavigate } from "../utils/appHelpers";
import type { View } from "../types";

interface ResponsiveContainerProps {
  children: React.ReactNode;
}

function ResponsiveContainer({ children }: ResponsiveContainerProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full">
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}

interface AppRoutesProps {
  currentView: View;
  loading: boolean;
  userType: string | null;
  user: any;
  
  // Navigation
  handleNavigate: (view: string) => void;
  handleSearch: (params: any) => void;
  setCurrentView: React.Dispatch<React.SetStateAction<View>>;
  
  // State
  searchParams: any;
  cartItems: any[];
  selectedVendorId: string;
  selectedContactId: string;
  hasCompletedListing: boolean;
  hasVisitedCalendar: boolean;
  blockedDates: number[];
  selectedDate: number | undefined;
  editingPhotoUrl: string;
  editingPhotoIndex: number;
  photoEdits: any;
  wizardData: any;
  vendorType: 'venue' | 'florist' | 'photographer';
  businessInfo: any;
  yourInfoData: any;
  subscriptionInfo: any;
  paymentInfo: any;
  profilePhotos: any[];
  setProfilePhotos: React.Dispatch<React.SetStateAction<any[]>>;
  
  // Setters
  setSelectedContactId: React.Dispatch<React.SetStateAction<string>>;
  setBusinessInfo: React.Dispatch<React.SetStateAction<any>>;
  setWizardData: React.Dispatch<React.SetStateAction<any>>;
  setYourInfoData: React.Dispatch<React.SetStateAction<any>>;
  setSubscriptionInfo: React.Dispatch<React.SetStateAction<any>>;
  setPaymentInfo: React.Dispatch<React.SetStateAction<any>>;
  
  // Handlers
  handleAddToCart: (item: any) => void;
  handleUpdateCart: (items: any[]) => void;
  handleClearCart: () => void;
  getCurrentSelectedDate: () => number;
  handleBlockDate: (date: number) => void;
  handleDateClick: (date: number) => void;
  handleToggleBlockDate: (date: number, isBlocked: boolean) => void;
  
  // Photo/Wizard handlers
  handleEditPhoto: (url: string, index: number) => void;
  handleClosePhotoEdit: () => void;
  handleSavePhotoEdit: (edit: any) => void;
  handlePhotosNext: (data: any) => void;
  handleServiceBack: () => void;
  handleServiceNext: (data: any) => void;
  handleReviewBack: () => void;
  handleReviewComplete: () => void;
}

export default function AppRoutes(props: AppRoutesProps) {
  const {
    currentView,
    loading,
    userType,
    user,
    handleNavigate,
    handleSearch,
    setCurrentView,
    searchParams,
    cartItems,
    selectedVendorId,
    selectedContactId,
    hasCompletedListing,
    hasVisitedCalendar,
    blockedDates,
    selectedDate,
    editingPhotoUrl,
    editingPhotoIndex,
    photoEdits,
    wizardData,
    vendorType,
    yourInfoData,
    subscriptionInfo,
    paymentInfo,
    profilePhotos,
    setProfilePhotos,
    setSelectedContactId,
    setWizardData,
    setYourInfoData,
    setSubscriptionInfo,
    setPaymentInfo,
    handleAddToCart,
    handleUpdateCart,
    handleClearCart,
    getCurrentSelectedDate,
    handleBlockDate,
    handleDateClick,
    handleToggleBlockDate,
    handleEditPhoto,
    handleClosePhotoEdit,
    handleSavePhotoEdit,
    handlePhotosNext,
    handleServiceBack,
    handleServiceNext,
    handleReviewBack,
    handleReviewComplete
  } = props;

  // Mobile menu state for vendor pages
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Helper functions
  const customNav = (view: string, data?: any) => 
    customHandleNavigate(view, data, setSelectedContactId, setCurrentView, handleNavigate);

  const emptyStateNav = (view: string) => 
    handleEmptyStateNavigate(view, setCurrentView, handleNavigate);

  const serviceStepNext = (data: any) => 
    handleServiceStepNext(data, setWizardData, setCurrentView);

  // Show loading screen while checking auth
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="setup-description">Loading...</p>
        </div>
      </div>
    );
  }

  // Public routes
  if (currentView === "landing") {
    return (
      <ResponsiveContainer>
        <Landing onNavigate={handleNavigate} onSearch={handleSearch} />
      </ResponsiveContainer>
    );
  }

  if (currentView === "search") {
    return (
      <ResponsiveContainer>
        <SearchResults 
          onNavigate={handleNavigate}
          onAddToCart={handleAddToCart}
          searchParams={searchParams}
          cartItems={cartItems}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "cart") {
    return (
      <ResponsiveContainer>
        <Cart
          onNavigate={handleNavigate}
          cartItems={cartItems}
          onUpdateCart={handleUpdateCart}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "checkout") {
    return (
      <ResponsiveContainer>
        <Checkout
          onNavigate={handleNavigate}
          cartItems={cartItems}
          onClearCart={handleClearCart}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "auth") {
    // Check if this is part of the vendor flow
    const isVendorFlow = localStorage.getItem('vendorFlow') === 'true';
    
    return (
      <ResponsiveContainer>
        <Auth onNavigate={handleNavigate} isVendorFlow={isVendorFlow} />
      </ResponsiveContainer>
    );
  }

  // Onboarding routes - PLACEHOLDER IMPLEMENTATIONS
  if (currentView === "userTypeSelection") {
    console.log('🎯 AppRoutes: Rendering userTypeSelection component');
    return (
      <ResponsiveContainer>
        <UserTypeSelectionNew 
          onNavigate={handleNavigate}
          onNext={(userType) => {
            console.log('🎯 User type selected:', userType);
            if (userType === 'vendor') {
              console.log('🎯 Navigating to vendor type selection');
              localStorage.setItem('vendorFlow', 'true');
              setCurrentView('vendorTypeSelection');
            } else if (userType === 'couple') {
              console.log('🎯 Navigating to couple signup flow');
              localStorage.removeItem('vendorFlow');
              setCurrentView('coupleSignup');
            } else {
              localStorage.removeItem('vendorFlow');
              setCurrentView('auth');
            }
          }}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "accountTypeSelection") {
    return (
      <ResponsiveContainer>
        <AccountTypeSelection 
          onNavigate={handleNavigate}
          onNext={(accountType) => {
            console.log('🎯 Account type selected:', accountType);
            if (accountType === 'vendor') {
              console.log('🎯 Navigating to vendor type selection');
              setCurrentView('vendorTypeSelection');
            } else {
              setCurrentView('auth');
            }
          }}
          onCancel={() => setCurrentView('landing')}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorTypeSelection") {
    return (
      <ResponsiveContainer>
        <VendorTypeSelection 
          onNavigate={handleNavigate}
          onNext={(vendorType) => {
            console.log('🎯 Vendor type selected:', vendorType);
            // TODO: Store vendor type in state/database
            setCurrentView('vendorYourInfoStep');
          }}
          onBack={() => setCurrentView('userTypeSelection')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorYourInfoStep") {
    return (
      <ResponsiveContainer>
        <VendorYourInfoStep 
          onNavigate={handleNavigate}
          onNext={(yourInfoData) => {
            console.log('🎯 Your info collected:', yourInfoData);
            setYourInfoData(yourInfoData);
            setCurrentView('vendorSubscriptionStep');
          }}
          onBack={() => setCurrentView('vendorTypeSelection')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorSubscriptionStep") {
    return (
      <ResponsiveContainer>
        <VendorSubscriptionStep 
          onNavigate={handleNavigate}
          onNext={(subscriptionData) => {
            console.log('🎯 Subscription data collected:', subscriptionData);
            setSubscriptionInfo(subscriptionData);
            setCurrentView('vendorPaymentStep');
          }}
          onBack={() => setCurrentView('vendorYourInfoStep')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorPaymentStep") {
    return (
      <ResponsiveContainer>
        <VendorPaymentStep 
          onNavigate={handleNavigate}
          onNext={(paymentData) => {
            console.log('🎯 Payment data collected:', paymentData);
            setPaymentInfo(paymentData);
            
            // Always proceed to create account step first
            setCurrentView('vendorCreateAccountStep');
          }}
          onBack={() => setCurrentView('vendorSubscriptionStep')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
          subscriptionInfo={subscriptionInfo}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "paymentSuccessStep") {
    return (
      <ResponsiveContainer>
        <PaymentSuccessStep 
          onNavigate={handleNavigate}
          onNext={() => {
            console.log('🎯 Payment successful, proceeding to create account');
            setCurrentView('vendorCreateAccountStep');
          }}
          onBack={() => setCurrentView('vendorPaymentStep')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
          paymentInfo={paymentInfo}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "paymentFailureStep") {
    return (
      <ResponsiveContainer>
        <PaymentFailureStep 
          onNavigate={handleNavigate}
          onRetry={() => {
            console.log('🎯 Retrying payment');
            setCurrentView('vendorPaymentStep');
          }}
          onBack={() => setCurrentView('vendorPaymentStep')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
          paymentInfo={paymentInfo}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorCreateAccountStep") {
    return (
      <ResponsiveContainer>
        <VendorCreateAccountStep 
          onNavigate={handleNavigate}
          onNext={(accountData) => {
            console.log('🎯 Account data collected:', accountData);
            console.log('🎯 Your info:', yourInfoData);
            console.log('🎯 Subscription info:', subscriptionInfo);
            console.log('🎯 Payment info:', paymentInfo);
            
            // Handle different test modes from payment step or create account step
            if (paymentInfo?.testMode === 'success' || accountData.testMode === 'success') {
              setCurrentView('paymentSuccessStep');
            } else if (paymentInfo?.testMode === 'failure' || accountData.testMode === 'failure') {
              setCurrentView('paymentFailureStep');
            } else if (paymentInfo?.testMode === 'bypass' || accountData.testMode === 'bypass') {
              setCurrentView('paymentSuccessStep');
            } else if (paymentInfo?.testMode === 'next') {
              // Stay on create account step for testing
              console.log('🎯 Staying on create account step for testing');
            } else {
              // Normal flow - process payment and create account
              // TODO: Create account with Supabase and process payment
              setCurrentView('paymentSuccessStep');
            }
          }}
          onBack={() => setCurrentView('vendorPaymentStep')}
          onCancel={() => {
            localStorage.removeItem('vendorFlow');
            setCurrentView('landing');
          }}
          subscriptionInfo={subscriptionInfo}
          paymentInfo={paymentInfo}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "coupleSignup") {
    return (
      <CoupleSignupFlow
        onNavigate={handleNavigate}
        onComplete={(data) => {
          console.log('🎯 Couple signup completed:', data);
          
          // Set up authentication state for couple
          const mockUser = {
            id: 'mock-couple-id',
            email: data.contactInfo.email,
            user_metadata: {
              user_type: 'couple',
              first_name: data.yourInfo.firstName,
              last_name: data.yourInfo.lastName,
              partner_first_name: data.yourInfo.partnerFirstName,
              partner_last_name: data.yourInfo.partnerLastName
            }
          };
          
          localStorage.setItem('zinnia_user', JSON.stringify(mockUser));
          localStorage.setItem('zinnia_user_type', 'couple');
          localStorage.removeItem('vendorFlow'); // Clear vendor flow flag
          
          console.log('🎯 Couple auth state set:', {
            zinnia_user: localStorage.getItem('zinnia_user'),
            zinnia_user_type: localStorage.getItem('zinnia_user_type'),
            vendorFlow: localStorage.getItem('vendorFlow')
          });
          
          // Navigate to couple dashboard
          console.log('🎯 Couple account created successfully, navigating to couple dashboard');
          setCurrentView('coupleDashboard');
        }}
      />
    );
  }

  if (currentView === "accountCreationStep") {
    // COMPONENT DELETED - redirect to auth
    console.log('🚨 AccountCreationStep deleted, redirecting to auth');
    setTimeout(() => setCurrentView('auth'), 0);
    return (
      <ResponsiveContainer>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-red-600 mb-4">
              Component Deleted
            </h1>
            <p className="text-gray-600 mb-8">
              AccountCreationStep has been removed and needs reimplementation
            </p>
            <button 
              onClick={() => setCurrentView('auth')}
              className="bg-[#667493] text-white px-6 py-3 rounded-full hover:bg-[#5a6884] transition-colors"
            >
              Continue to Auth
            </button>
          </div>
        </div>
      </ResponsiveContainer>
    );
  }

  // Dashboard routes
  console.log('🔍 AppRoutes Debug:', { userType, currentView, user: user?.email });
  
  if (userType === 'couple' && currentView === "coupleDashboard") {
    console.log('🎯 Rendering CoupleDashboard');
    return (
      <ResponsiveContainer>
        <CoupleDashboard onNavigate={handleNavigate} />
      </ResponsiveContainer>
    );
  }

  if (currentView === "dashboard") {
    return (
      <ResponsiveVendorDashboard 
        onNavigate={handleNavigate} 
        hasCompletedListing={hasCompletedListing}
        hasVisitedCalendar={hasVisitedCalendar}
        currentView={currentView}
        profilePhotos={profilePhotos}
      />
    );
  }

  // Vendor-specific authentication routes
  if (currentView === "venueAuth") {
    return (
      <VenueAuth 
        onNavigate={handleNavigate}
        onSuccess={() => setCurrentView('venueDashboard')}
      />
    );
  }

  if (currentView === "floristAuth") {
    return (
      <FloristAuth 
        onNavigate={handleNavigate}
        onSuccess={() => setCurrentView('floristDashboard')}
      />
    );
  }

  if (currentView === "photographerAuth") {
    return (
      <PhotographerAuth 
        onNavigate={handleNavigate}
        onSuccess={() => setCurrentView('photographerDashboard')}
      />
    );
  }

  // Vendor-specific dashboard routes (now unified)
  if (currentView === "venueDashboard") {
    return (
      <UnifiedVendorDashboard 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
        currentView={currentView}
        vendorType="venue"
      />
    );
  }

  if (currentView === "floristDashboard") {
    return (
      <UnifiedVendorDashboard 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
        currentView={currentView}
        vendorType="florist"
      />
    );
  }

  if (currentView === "photographerDashboard") {
    return (
      <UnifiedVendorDashboard 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
        currentView={currentView}
        vendorType="photographer"
      />
    );
  }

  // Vendor-specific listing routes
  if (currentView === "venueListings") {
    return (
      <VenueListing 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
      />
    );
  }

  if (currentView === "floristListings") {
    return (
      <VenueListing 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
      />
    );
  }

  if (currentView === "photographerListings") {
    return (
      <VenueListing 
        onNavigate={handleNavigate}
        profilePhotos={profilePhotos}
      />
    );
  }

  // Messages
  if (currentView === "messages") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Header */}
        <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={handleNavigate} profilePhotos={profilePhotos} />
        
        <div className="flex">
          {/* Vendor Left Navigation */}
          <VendorLeftNav 
            onNavigate={handleNavigate} 
            currentView={currentView}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />
          
          {/* Main Content - Messaging Page */}
          <div className="flex-1">
            <MessagingPage />
          </div>
        </div>
      </div>
    );
  }


  // Vendor detail
  if (currentView === "vendorDetail") {
    const vendorData = MOCK_VENDOR_DATA[selectedVendorId];
    if (!vendorData) {
      setCurrentView('search');
      return (
        <ResponsiveContainer>
          <SearchResults 
            onNavigate={handleNavigate}
            onAddToCart={handleAddToCart}
            searchParams={searchParams}
            cartItems={cartItems}
          />
        </ResponsiveContainer>
      );
    }

    return (
      <VendorDetail 
        vendor={vendorData}
        onNavigate={handleNavigate}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        searchParams={searchParams}
      />
    );
  }

  // Calendar and date management
  if (currentView === "blockDate") {
    return (
      <ResponsiveContainer>
        <BlockDate
          selectedDate={getCurrentSelectedDate()}
          onBack={() => setCurrentView("calendar")}
          onBlockDate={handleBlockDate}
          onCancel={() => setCurrentView("calendar")}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "calendar") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Header */}
        <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={handleNavigate} profilePhotos={profilePhotos} />
        
        <div className="flex">
          {/* Vendor Left Navigation */}
          <VendorLeftNav 
            onNavigate={handleNavigate} 
            currentView={currentView}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />
          
          {/* Main Content - Calendar */}
          <div className="flex-1">
            <ResponsiveCalendar 
              onNavigate={handleNavigate}
              hasCompletedListing={hasCompletedListing}
              hasVisitedCalendar={hasVisitedCalendar}
              currentView={currentView}
              blockedDates={blockedDates}
              onDateClick={handleDateClick}
              selectedDate={selectedDate}
              onBlockDate={handleToggleBlockDate}
            />
          </div>
        </div>
      </div>
    );
  }

  // Listing management
  if (currentView === "listings") {
    return (
      <ResponsiveContainer>
        <ListingAndServicesEmpty onNavigate={emptyStateNav} />
      </ResponsiveContainer>
    );
  }

  if (currentView === "createListing") {
    return (
      <ResponsiveContainer>
        <ListingsPage onNavigate={handleNavigate} currentView={currentView} />
      </ResponsiveContainer>
    );
  }

  // Listing wizard - addPhotos step removed (photo editing now integrated into createListing step)

  if (currentView === "photoEdit") {
    return (
      <ResponsiveContainer>
        <PhotoEdit 
          onNavigate={handleNavigate}
          onClose={handleClosePhotoEdit}
          onSave={handleSavePhotoEdit}
          photoUrl={editingPhotoUrl}
          photoIndex={editingPhotoIndex}
          existingEdit={photoEdits[`${editingPhotoUrl}_${editingPhotoIndex}`]}
        />
      </ResponsiveContainer>
    );
  }



  if (currentView === "service") {
    return (
      <ResponsiveContainer>
        <Service 
          onNavigate={handleNavigate}
          onBack={handleServiceBack}
          onNext={handleServiceNext}
          initialData={wizardData.service}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "vendorService") {
    // Get vendor type from localStorage, fallback to default
    const storedVendorType = localStorage.getItem('zinnia_vendorType') as 'venue' | 'florist' | 'photographer' | null;
    const currentVendorType = storedVendorType || vendorType;
    
    const serviceProps = {
      onNavigate: handleNavigate,
      onBack: () => setCurrentView('createListing'),
      onNext: serviceStepNext,
      initialData: wizardData.vendorService
    };

    return (
      <ResponsiveContainer>
        <UnifiedServiceCreation 
          {...serviceProps}
          vendorType={currentVendorType}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "review") {
    return (
      <ResponsiveContainer>
        <Review 
          onNavigate={handleNavigate}
          onBack={handleReviewBack}
          onComplete={handleReviewComplete}
          wizardData={wizardData}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "createdListing") {
    return (
      <ResponsiveContainer>
        <CreatedListing 
          onNavigate={handleNavigate}
          wizardData={wizardData}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "createdServices") {
    return (
      <ResponsiveContainer>
        <CreatedServices 
          onNavigate={handleNavigate}
          wizardData={wizardData}
        />
      </ResponsiveContainer>
    );
  }

  // Invoice and billing
  if (currentView === "invoiceTemplateCreator") {
    return (
      <ResponsiveContainer>
        <InvoiceTemplateCreator 
          onNavigate={handleNavigate} 
          onBack={() => setCurrentView('billing')}
        />
      </ResponsiveContainer>
    );
  }

  if (currentView === "billing") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Header */}
        <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={handleNavigate} profilePhotos={profilePhotos} />

        <div className="flex">
          {/* Vendor Left Navigation */}
          <VendorLeftNav
            onNavigate={handleNavigate}
            currentView={currentView}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />

          {/* Main Content - Invoice */}
          <div className="flex-1">
            <Invoice 
              onNavigate={handleNavigate} 
              hasCompletedListing={hasCompletedListing}
              hasVisitedCalendar={hasVisitedCalendar}
              currentView={currentView}
            />
          </div>
        </div>
      </div>
    );
  }

  if (currentView === "invoiceContacts") {
    return (
      <ResponsiveContainer>
        <InvoiceContacts 
          onNavigate={handleNavigate}
          onBack={() => setCurrentView('billing')}
          onNext={() => {
            console.log('📋 Continuing to additional info step (not implemented yet)');
            setCurrentView('billing');
          }}
          onClose={() => setCurrentView('billing')}
        />
      </ResponsiveContainer>
    );
  }

  // Contacts
  if (currentView === "contacts") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Header */}
        <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={handleNavigate} profilePhotos={profilePhotos} />

        <div className="flex">
          {/* Vendor Left Navigation */}
          <VendorLeftNav
            onNavigate={handleNavigate}
            currentView={currentView}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />

          {/* Main Content - Contacts */}
          <div className="flex-1">
            <ContactsPage onNavigate={customNav} />
          </div>
        </div>
      </div>
    );
  }

  if (currentView === "contactDetail") {
    return (
      <ResponsiveContainer>
        <ContactDetail 
          contactId={selectedContactId}
          onNavigate={handleNavigate}
          onBack={() => setCurrentView('contacts')}
        />
      </ResponsiveContainer>
    );
  }

  // Account
  if (currentView === "myAccount") {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Global Header */}
        <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={handleNavigate} profilePhotos={profilePhotos} />

        <div className="flex">
          {/* Vendor Left Navigation */}
          <VendorLeftNav
            onNavigate={handleNavigate}
            currentView={currentView}
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />

          {/* Main Content - My Account */}
          <div className="flex-1">
            <MyAccount onNavigate={handleNavigate} profilePhotos={profilePhotos} setProfilePhotos={setProfilePhotos} />
          </div>
        </div>
      </div>
    );
  }


  // Default fallback
  return (
    <ResponsiveContainer>
      <Landing onNavigate={handleNavigate} onSearch={handleSearch} />
    </ResponsiveContainer>
  );
}