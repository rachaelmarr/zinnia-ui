import { useState } from "react";
import { INITIAL_WIZARD_DATA } from "../constants";
import {
  DEFAULT_BLOCKED_DATES,
  DEFAULT_CURRENT_DATE_INDEX,
  DEFAULT_EDITING_PHOTO_URL,
  DEFAULT_EDITING_PHOTO_INDEX,
  DEFAULT_PHOTO_EDITS,
  DEFAULT_HAS_COMPLETED_LISTING,
  DEFAULT_HAS_VISITED_CALENDAR,
  DEFAULT_VENDOR_LISTINGS,
  DEFAULT_SEARCH_PARAMS,
  DEFAULT_CART_ITEMS,
  DEFAULT_SELECTED_VENDOR_ID,
  DEFAULT_SELECTED_CONTACT_ID,
  DEFAULT_VENDOR_TYPE
} from "../constants/appDefaults";
import type { View, SearchParams, CartItem, WizardData } from "../types";

export function useAppState() {
  const [currentView, setCurrentView] = useState<View>("landing");
  const [blockedDates, setBlockedDates] = useState<number[]>(DEFAULT_BLOCKED_DATES);
  const [currentDateIndex, setCurrentDateIndex] = useState(DEFAULT_CURRENT_DATE_INDEX);
  const [selectedDate, setSelectedDate] = useState<number | undefined>(undefined);
  const [editingPhotoUrl, setEditingPhotoUrl] = useState<string>(DEFAULT_EDITING_PHOTO_URL);
  const [editingPhotoIndex, setEditingPhotoIndex] = useState<number>(DEFAULT_EDITING_PHOTO_INDEX);
  const [photoEdits, setPhotoEdits] = useState<{[key: string]: { scale: number, offset: { x: number, y: number } }}>(DEFAULT_PHOTO_EDITS);
  const [hasCompletedListing, setHasCompletedListing] = useState(DEFAULT_HAS_COMPLETED_LISTING);
  const [hasVisitedCalendar, setHasVisitedCalendar] = useState(DEFAULT_HAS_VISITED_CALENDAR);
  const [vendorListings, setVendorListings] = useState<any[]>(DEFAULT_VENDOR_LISTINGS);
  const [searchParams, setSearchParams] = useState<SearchParams>(DEFAULT_SEARCH_PARAMS);
  const [cartItems, setCartItems] = useState<CartItem[]>(DEFAULT_CART_ITEMS);
  const [wizardData, setWizardData] = useState<WizardData>(INITIAL_WIZARD_DATA);
  const [selectedVendorId, setSelectedVendorId] = useState<string>(DEFAULT_SELECTED_VENDOR_ID);
  const [selectedContactId, setSelectedContactId] = useState<string>(DEFAULT_SELECTED_CONTACT_ID);
  const [vendorType] = useState<'venue' | 'florist' | 'photographer'>(DEFAULT_VENDOR_TYPE);
  const [businessInfo, setBusinessInfo] = useState<any>(null);
  const [yourInfoData, setYourInfoData] = useState<any>(null);
  const [subscriptionInfo, setSubscriptionInfo] = useState<any>(null);
  const [paymentInfo, setPaymentInfo] = useState<any>(null);
  const [profilePhotos, setProfilePhotos] = useState<any[]>([]);

  const resetAppState = () => {
    setBlockedDates([]);
    setCurrentDateIndex(0);
    setHasCompletedListing(false);
    setHasVisitedCalendar(false);
    setVendorListings([]);
    setEditingPhotoUrl("");
    setEditingPhotoIndex(0);
    setPhotoEdits({});
    setProfilePhotos([]);
  };

  return {
    // State
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
    
    // Setters
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
    
    // Actions
    resetAppState
  };
}