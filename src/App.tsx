import React, { useState, useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import { useAuth } from "./hooks/useAuth";
import { useAppNavigation } from "./hooks/useAppNavigation";
import { useCartManagement } from "./hooks/useCartManagement";
import { useVendorData } from "./hooks/useVendorData";
import { useWizardData } from "./hooks/useWizardData";
import { useAppState } from "./hooks/useAppState";
import { 
  handleToggleBlockDate as toggleBlockDate,
  isPublicView,
  shouldSkipAuthRedirect,
  checkLocalStorageAuth
} from "./utils/appHelpers";
import type { View } from "./types";

export default function App() {
  const { user, vendorProfile, userType, loading, signOut, syncFromLocalStorage } = useAuth();

  // Consolidated state management
  const {
    currentView,
    blockedDates,
    currentDateIndex,
    selectedDate,
    editingPhotoUrl,
    editingPhotoIndex,
    photoEdits,
    hasCompletedListing,
    hasVisitedCalendar,
    vendorListings,
    searchParams,
    cartItems,
    wizardData,
    selectedVendorId,
    selectedContactId,
    vendorType,
    businessInfo,
    yourInfoData,
    subscriptionInfo,
    paymentInfo,
    profilePhotos,
    setCurrentView,
    setBlockedDates,
    setCurrentDateIndex,
    setSelectedDate,
    setEditingPhotoUrl,
    setEditingPhotoIndex,
    setPhotoEdits,
    setHasCompletedListing,
    setHasVisitedCalendar,
    setVendorListings,
    setSearchParams,
    setCartItems,
    setWizardData,
    setSelectedVendorId,
    setSelectedContactId,
    setBusinessInfo,
    setYourInfoData,
    setSubscriptionInfo,
    setPaymentInfo,
    setProfilePhotos,
    resetAppState
  } = useAppState();

  // Debug current view
  console.log('🎯 App rendering with currentView:', currentView);
  
  // Debug currentView changes
  useEffect(() => {
    console.log('🔄 currentView changed to:', currentView);
  }, [currentView]);

  // Custom hooks for functionality
  const { loadVendorData, getCurrentSelectedDate, handleBlockDate, handleDateClick } = useVendorData({
    user,
    userType,
    setVendorListings,
    setHasCompletedListing,
    setBlockedDates,
    setCurrentView,
    setSelectedDate,
    blockedDates,
    currentDateIndex
  });

  const { handleNavigate } = useAppNavigation({
    userType,
    signOut,
    setCurrentView,
    setHasVisitedCalendar,
    setSelectedVendorId,
    resetAppState
  });

  const { handleSearch, handleAddToCart, handleUpdateCart, handleClearCart } = useCartManagement({
    setSearchParams,
    setCurrentView,
    setCartItems
  });

  const {
    handleEditPhoto,
    handleClosePhotoEdit,
    handleSavePhotoEdit,
    handlePhotosNext,
    handleServiceBack,
    handleServiceNext,
    handleReviewBack,
    handleReviewComplete
  } = useWizardData({
    user,
    userType,
    setWizardData,
    setCurrentView,
    setEditingPhotoUrl,
    setEditingPhotoIndex,
    setPhotoEdits,
    setHasCompletedListing,
    loadVendorData,
    wizardData,
    editingPhotoUrl,
    editingPhotoIndex
  });

  // Helper function for toggling blocked dates
  const handleToggleBlockDate = (date: number, isBlocked: boolean) => 
    toggleBlockDate(date, isBlocked, setBlockedDates);

  // Load user data when authenticated
  useEffect(() => {
    console.log(`🔍 Auth state changed - user: ${user ? user.email : 'null'}, userType: ${userType}, loading: ${loading}, currentView: ${currentView}`);
    console.log('🔍 Full auth state:', { user: !!user, userType, loading, currentView });
    
    if (loading) return;
    
    try {
      // Special handling for dashboard views (both general and vendor-specific)
      if (currentView === 'dashboard' || currentView === 'venueDashboard' || currentView === 'floristDashboard' || currentView === 'photographerDashboard') {
        const { savedUser, savedUserType } = checkLocalStorageAuth();
        const vendorTypeFromStorage = localStorage.getItem('zinnia_vendorType');
        
        console.log('🔍 Dashboard view - checking authentication:', { 
          reactUser: !!user, 
          reactUserType: userType,
          savedUser: !!savedUser,
          savedUserType,
          currentView,
          vendorTypeFromStorage,
          savedUserContent: savedUser ? JSON.parse(savedUser) : null
        });
        
        if ((user && userType === 'vendor') || (savedUser && savedUserType === 'vendor')) {
          console.log('✅ Vendor authenticated for dashboard - loading vendor data');
          try {
            loadVendorData();
            console.log('✅ loadVendorData completed for dashboard access');
          } catch (loadError) {
            console.error('❌ Error loading vendor data for dashboard:', loadError);
          }
        } else {
          console.log('🚨 Dashboard accessed without proper vendor authentication, redirecting to auth');
          setCurrentView('auth');
          return;
        }
        return;
      }
      
      // For couple dashboard
      if (currentView === 'coupleDashboard') {
        const { savedUser, savedUserType } = checkLocalStorageAuth();
        
        console.log('🔍 Couple dashboard view - checking authentication:', { 
          reactUser: !!user, 
          reactUserType: userType,
          savedUser: !!savedUser,
          savedUserType,
          savedUserContent: savedUser ? JSON.parse(savedUser) : null
        });
        
        // If we have localStorage data but no React state, sync it for couple dashboard
        if (savedUser && savedUserType === 'couple' && (!user || userType !== 'couple')) {
          console.log('🔄 Syncing couple auth state from localStorage for couple dashboard');
          syncFromLocalStorage();
          return;
        }
        
        if ((user && userType === 'couple') || (savedUser && savedUserType === 'couple')) {
          console.log('✅ Couple authenticated for couple dashboard');
          return;
        } else {
          console.log('🚨 Couple dashboard accessed without proper authentication, redirecting to auth');
          setCurrentView('auth');
          return;
        }
      }
      
      // Auto-navigation from auth screen when authenticated
      console.log('🔍 Checking auto-navigation conditions:', {
        currentView,
        user: user?.email || 'null',
        userType,
        shouldNavigate: currentView === 'auth' && user && userType
      });
      
      if (currentView === 'auth' && user && userType) {
        console.log(`👤 User authenticated as ${userType}: ${user.email} - auto-navigating from auth screen`);
        
        if (userType === 'vendor') {
          console.log('📊 Auto-navigating authenticated vendor to dashboard');
          try {
            loadVendorData().then(() => {
              console.log('✅ loadVendorData completed');
              setCurrentView("dashboard");
              console.log('✅ setCurrentView("dashboard") completed');
            }).catch((loadError) => {
              console.error('❌ Error loading vendor data:', loadError);
              // Still navigate even if vendor data loading fails
              console.log('🔄 Navigating to dashboard despite vendor data error');
              setCurrentView("dashboard");
            });
          } catch (error) {
            console.error('❌ Error calling loadVendorData:', error);
            // Still navigate even if vendor data loading fails
            console.log('🔄 Navigating to dashboard despite vendor data error');
            setCurrentView("dashboard");
          }
        } else if (userType === 'couple') {
          console.log('💑 Auto-navigating authenticated couple to couple dashboard');
          setCurrentView("coupleDashboard");
          console.log('✅ setCurrentView("coupleDashboard") completed');
        }
      }
      
      // Handle couple signup completion - check if we have couple data in localStorage but no current view
      if (!currentView || currentView === 'landing') {
        const { savedUser, savedUserType } = checkLocalStorageAuth();
        
        if (savedUser && savedUserType === 'couple') {
          console.log('💑 Found couple data in localStorage, navigating to couple dashboard');
          setCurrentView('coupleDashboard');
          return;
        }
      }
      
    } catch (effectError) {
      console.error('❌ Error in useEffect auth handler:', effectError);
    }
  }, [user, userType, loading, loadVendorData]);

  // Removed problematic logout useEffect to prevent race conditions
  // The main auth logic in the first useEffect handles navigation properly

  // Removed duplicate logout useEffect to prevent conflicts

  // Show auth screen if not authenticated and not on public pages
  if (!user && !isPublicView(currentView)) {
    const { savedUser, savedUserType } = checkLocalStorageAuth();
    
    if (!savedUser || !savedUserType) {
      console.log('🔐 Showing auth screen via fallback logic - no localStorage data found');
      return <AppRoutes 
        currentView="auth"
        loading={loading}
        userType={userType}
        user={user}
        handleNavigate={handleNavigate}
        handleSearch={handleSearch}
        setCurrentView={setCurrentView}
        searchParams={searchParams}
        cartItems={cartItems}
        selectedVendorId={selectedVendorId}
        selectedContactId={selectedContactId}
        hasCompletedListing={hasCompletedListing}
        hasVisitedCalendar={hasVisitedCalendar}
        blockedDates={blockedDates}
        selectedDate={selectedDate}
        editingPhotoUrl={editingPhotoUrl}
        editingPhotoIndex={editingPhotoIndex}
        photoEdits={photoEdits}
        wizardData={wizardData}
        vendorType={vendorType}
        businessInfo={businessInfo}
        yourInfoData={yourInfoData}
        subscriptionInfo={subscriptionInfo}
        paymentInfo={paymentInfo}
        profilePhotos={profilePhotos}
        setProfilePhotos={setProfilePhotos}
        setSelectedContactId={setSelectedContactId}
        setWizardData={setWizardData}
        setBusinessInfo={setBusinessInfo}
        setYourInfoData={setYourInfoData}
        setSubscriptionInfo={setSubscriptionInfo}
        setPaymentInfo={setPaymentInfo}
        handleAddToCart={handleAddToCart}
        handleUpdateCart={handleUpdateCart}
        handleClearCart={handleClearCart}
        getCurrentSelectedDate={getCurrentSelectedDate}
        handleBlockDate={handleBlockDate}
        handleDateClick={handleDateClick}
        handleToggleBlockDate={handleToggleBlockDate}
        handleEditPhoto={handleEditPhoto}
        handleClosePhotoEdit={handleClosePhotoEdit}
        handleSavePhotoEdit={handleSavePhotoEdit}
        handlePhotosNext={handlePhotosNext}
        handleServiceBack={handleServiceBack}
        handleServiceNext={handleServiceNext}
        handleReviewBack={handleReviewBack}
        handleReviewComplete={handleReviewComplete}
      />;
    } else {
      console.log('🔄 Fallback auth check skipped - localStorage has user data, React state catching up');
    }
  }

  // Vendor-only routes - redirect to search if not vendor  
  if (userType !== 'vendor' && !isPublicView(currentView)) {
    const { savedUserType } = checkLocalStorageAuth();
    
    if (savedUserType !== 'vendor') {
      console.log('🚫 Non-vendor user accessing vendor-only route, redirecting to search');
      setCurrentView('search');
      return <AppRoutes 
        currentView="search"
        loading={loading}
        userType={userType}
        user={user}
        handleNavigate={handleNavigate}
        handleSearch={handleSearch}
        setCurrentView={setCurrentView}
        searchParams={searchParams}
        cartItems={cartItems}
        selectedVendorId={selectedVendorId}
        selectedContactId={selectedContactId}
        hasCompletedListing={hasCompletedListing}
        hasVisitedCalendar={hasVisitedCalendar}
        blockedDates={blockedDates}
        selectedDate={selectedDate}
        editingPhotoUrl={editingPhotoUrl}
        editingPhotoIndex={editingPhotoIndex}
        photoEdits={photoEdits}
        wizardData={wizardData}
        vendorType={vendorType}
        businessInfo={businessInfo}
        yourInfoData={yourInfoData}
        subscriptionInfo={subscriptionInfo}
        paymentInfo={paymentInfo}
        profilePhotos={profilePhotos}
        setProfilePhotos={setProfilePhotos}
        setSelectedContactId={setSelectedContactId}
        setWizardData={setWizardData}
        setBusinessInfo={setBusinessInfo}
        setYourInfoData={setYourInfoData}
        setSubscriptionInfo={setSubscriptionInfo}
        setPaymentInfo={setPaymentInfo}
        handleAddToCart={handleAddToCart}
        handleUpdateCart={handleUpdateCart}
        handleClearCart={handleClearCart}
        getCurrentSelectedDate={getCurrentSelectedDate}
        handleBlockDate={handleBlockDate}
        handleDateClick={handleDateClick}
        handleToggleBlockDate={handleToggleBlockDate}
        handleEditPhoto={handleEditPhoto}
        handleClosePhotoEdit={handleClosePhotoEdit}
        handleSavePhotoEdit={handleSavePhotoEdit}
        handlePhotosNext={handlePhotosNext}
        handleServiceBack={handleServiceBack}
        handleServiceNext={handleServiceNext}
        handleReviewBack={handleReviewBack}
        handleReviewComplete={handleReviewComplete}
      />;
    }
  }

  // Render the current route
  return (
    <AppRoutes 
      currentView={currentView}
      loading={loading}
      userType={userType}
      user={user}
      handleNavigate={handleNavigate}
      handleSearch={handleSearch}
      setCurrentView={setCurrentView}
      searchParams={searchParams}
      cartItems={cartItems}
      selectedVendorId={selectedVendorId}
      selectedContactId={selectedContactId}
      hasCompletedListing={hasCompletedListing}
      hasVisitedCalendar={hasVisitedCalendar}
      blockedDates={blockedDates}
      selectedDate={selectedDate}
      editingPhotoUrl={editingPhotoUrl}
      editingPhotoIndex={editingPhotoIndex}
      photoEdits={photoEdits}
      wizardData={wizardData}
      vendorType={vendorType}
      businessInfo={businessInfo}
      yourInfoData={yourInfoData}
      subscriptionInfo={subscriptionInfo}
      paymentInfo={paymentInfo}
      profilePhotos={profilePhotos}
      setProfilePhotos={setProfilePhotos}
      setSelectedContactId={setSelectedContactId}
      setWizardData={setWizardData}
      setBusinessInfo={setBusinessInfo}
      setYourInfoData={setYourInfoData}
      setSubscriptionInfo={setSubscriptionInfo}
      setPaymentInfo={setPaymentInfo}
      handleAddToCart={handleAddToCart}
      handleUpdateCart={handleUpdateCart}
      handleClearCart={handleClearCart}
      getCurrentSelectedDate={getCurrentSelectedDate}
      handleBlockDate={handleBlockDate}
      handleDateClick={handleDateClick}
      handleToggleBlockDate={handleToggleBlockDate}
      handleEditPhoto={handleEditPhoto}
      handleClosePhotoEdit={handleClosePhotoEdit}
      handleSavePhotoEdit={handleSavePhotoEdit}
      handlePhotosNext={handlePhotosNext}
      handleServiceBack={handleServiceBack}
      handleServiceNext={handleServiceNext}
      handleReviewBack={handleReviewBack}
      handleReviewComplete={handleReviewComplete}
    />
  );
}