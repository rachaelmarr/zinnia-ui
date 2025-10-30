import type { SearchParams } from "../types";

export const DEFAULT_BLOCKED_DATES = [10, 15, 22];
export const DEFAULT_CURRENT_DATE_INDEX = 0;
export const DEFAULT_EDITING_PHOTO_URL = "";
export const DEFAULT_EDITING_PHOTO_INDEX = 0;
export const DEFAULT_PHOTO_EDITS = {};
export const DEFAULT_HAS_COMPLETED_LISTING = true;
export const DEFAULT_HAS_VISITED_CALENDAR = false;
export const DEFAULT_VENDOR_LISTINGS: any[] = [];
export const DEFAULT_SELECTED_VENDOR_ID = '';
export const DEFAULT_SELECTED_CONTACT_ID = '';
export const DEFAULT_VENDOR_TYPE: 'venue' | 'florist' | 'photographer' = 'venue';

export const DEFAULT_SEARCH_PARAMS: SearchParams = {
  vendorType: 'Florists',
  location: 'Chicago, IL',
  date: 'Any Day'
};

export const DEFAULT_CART_ITEMS: any[] = [];

export const PUBLIC_VIEWS = ['landing', 'search', 'cart', 'checkout', 'vendorDetail', 'auth', 'accountTypeSelection', 'userTypeSelection', 'vendorTypeSelection', 'vendorYourInfoStep', 'vendorSubscriptionStep', 'vendorPaymentStep', 'paymentSuccessStep', 'paymentFailureStep', 'vendorCreateAccountStep', 'businessInfoStep', 'createAccountStep', 'accountCreationStep', 'coupleSignup', 'coupleDashboard', 'venueAuth', 'floristAuth', 'photographerAuth'];
export const PROTECTED_VIEWS_EXEMPT_FROM_AUTH_REDIRECT = ['landing', 'search', 'cart', 'vendorDetail', 'auth', 'accountTypeSelection', 'userTypeSelection', 'vendorTypeSelection', 'vendorYourInfoStep', 'vendorSubscriptionStep', 'vendorPaymentStep', 'paymentSuccessStep', 'paymentFailureStep', 'vendorCreateAccountStep', 'businessInfoStep', 'createAccountStep', 'accountCreationStep', 'coupleSignup'];