import { supabaseAnonKey, supabaseFunctionsBaseUrl } from '../config/env'

// Hybrid API layer that falls back to localStorage when Supabase is unavailable
const API_BASE_URL = `${supabaseFunctionsBaseUrl}/make-server-6e4d8724`

interface Listing {
  id: string
  user_id: string
  photos: string[]
  business_hours: Array<{
    name: string
    enabled: boolean
    startTime: string
    endTime: string
  }>
  description: string
  service_data: any
  created_at: string
  updated_at: string
}

interface BlockedDate {
  id: string
  user_id: string
  blocked_date: string
  notes?: string
  created_at: string
}

interface Booking {
  id: string
  user_id: string
  vendor_id: string
  booking_date: string
  service_type: string
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
}

// Backend connectivity status
let isSupabaseAvailable = false
let lastHealthCheck = 0
const HEALTH_CHECK_INTERVAL = 30000 // 30 seconds

// Helper functions for localStorage fallback
const getStorageKey = (key: string) => `zinnia_${key}`

const saveToStorage = (key: string, data: any) => {
  try {
    localStorage.setItem(getStorageKey(key), JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to storage:', error)
  }
}

const getFromStorage = (key: string, defaultValue: any = []) => {
  try {
    const data = localStorage.getItem(getStorageKey(key))
    return data ? JSON.parse(data) : defaultValue
  } catch (error) {
    console.error('Error getting from storage:', error)
    return defaultValue
  }
}

// Helper to get access token
const getAccessToken = (): string => {
  return localStorage.getItem('zinnia_access_token') || supabaseAnonKey || ''
}

// Health check with caching
const checkSupabaseHealth = async (): Promise<boolean> => {
  const now = Date.now()
  
  // Return cached result if recent
  if (now - lastHealthCheck < HEALTH_CHECK_INTERVAL) {
    return isSupabaseAvailable
  }
  
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout
    
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${supabaseAnonKey}`
      },
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)
    
    if (response.ok) {
      isSupabaseAvailable = true
      console.log('✅ Supabase backend is available')
    } else {
      isSupabaseAvailable = false
      console.log('⚠️ Supabase backend returned error:', response.status)
    }
  } catch (error) {
    isSupabaseAvailable = false
    console.log('📱 Using localStorage fallback (Supabase unavailable)')
  }
  
  lastHealthCheck = now
  return isSupabaseAvailable
}

// Helper for API requests with automatic fallback
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const accessToken = getAccessToken()
  
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        ...options.headers
      }
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Request failed' }))
      throw new Error(errorData.error || `HTTP ${response.status}`)
    }

    return response.json()
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// Mock localStorage-based implementations for fallback
const mockListingsAPI = {
  async getVendorListings(vendorId: string): Promise<Listing[]> {
    await new Promise(resolve => setTimeout(resolve, 100)) // Simulate network delay
    const allListings = getFromStorage('listings', [])
    return allListings.filter((listing: Listing) => listing.user_id === vendorId)
  },

  async createListing(vendorId: string, listingData: any): Promise<Listing> {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const newListing: Listing = {
      id: `listing-${Date.now()}`,
      user_id: vendorId,
      photos: listingData.photos || [],
      business_hours: listingData.businessHours || [],
      description: listingData.description || '',
      service_data: listingData.service || {},
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
    
    const allListings = getFromStorage('listings', [])
    allListings.push(newListing)
    saveToStorage('listings', allListings)
    
    return newListing
  }
}

const mockBlockedDatesAPI = {
  async getBlockedDates(vendorId: string): Promise<BlockedDate[]> {
    await new Promise(resolve => setTimeout(resolve, 100))
    const allBlockedDates = getFromStorage('blocked_dates', [])
    return allBlockedDates.filter((date: BlockedDate) => date.user_id === vendorId)
  },

  async blockDate(vendorId: string, date: string, notes?: string): Promise<BlockedDate> {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const newBlockedDate: BlockedDate = {
      id: `blocked-${Date.now()}`,
      user_id: vendorId,
      blocked_date: date,
      notes: notes || '',
      created_at: new Date().toISOString()
    }
    
    const allBlockedDates = getFromStorage('blocked_dates', [])
    
    // Check if date is already blocked
    const existingBlock = allBlockedDates.find((blocked: BlockedDate) => 
      blocked.user_id === vendorId && blocked.blocked_date === date
    )
    
    if (existingBlock) {
      throw new Error('Date is already blocked')
    }
    
    allBlockedDates.push(newBlockedDate)
    saveToStorage('blocked_dates', allBlockedDates)
    
    return newBlockedDate
  },

  async unblockDate(vendorId: string, date: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const allBlockedDates = getFromStorage('blocked_dates', [])
    const filteredDates = allBlockedDates.filter((blocked: BlockedDate) => 
      !(blocked.user_id === vendorId && blocked.blocked_date === date)
    )
    
    saveToStorage('blocked_dates', filteredDates)
  }
}

const mockBookingsAPI = {
  async getVendorBookings(vendorId: string): Promise<Booking[]> {
    await new Promise(resolve => setTimeout(resolve, 100))
    const allBookings = getFromStorage('bookings', [])
    return allBookings.filter((booking: Booking) => booking.vendor_id === vendorId)
  },

  async createBooking(bookingData: Omit<Booking, 'id' | 'created_at'>): Promise<Booking> {
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const newBooking: Booking = {
      ...bookingData,
      id: `booking-${Date.now()}`,
      created_at: new Date().toISOString()
    }
    
    const allBookings = getFromStorage('bookings', [])
    allBookings.push(newBooking)
    saveToStorage('bookings', allBookings)
    
    return newBooking
  }
}

// Listings API with automatic fallback
export const listingsAPI = {
  async getVendorListings(vendorId: string): Promise<Listing[]> {
    console.log('Fetching vendor listings for:', vendorId)
    
    // Check if Supabase is available
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const listings = await apiRequest(`/vendors/${vendorId}/listings`)
        console.log('✅ Fetched listings from Supabase:', listings)
        return listings
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false // Update status for future requests
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for listings')
    return mockListingsAPI.getVendorListings(vendorId)
  },

  async createListing(vendorId: string, listingData: any): Promise<Listing> {
    console.log('Creating listing for vendor:', vendorId, listingData)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const listing = await apiRequest(`/vendors/${vendorId}/listings`, {
          method: 'POST',
          body: JSON.stringify(listingData)
        })
        console.log('✅ Created listing in Supabase:', listing)
        return listing
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for listing creation')
    return mockListingsAPI.createListing(vendorId, listingData)
  }
}

// Blocked Dates API with automatic fallback
export const blockedDatesAPI = {
  async getBlockedDates(vendorId: string): Promise<BlockedDate[]> {
    console.log('Fetching blocked dates for vendor:', vendorId)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const blockedDates = await apiRequest(`/vendors/${vendorId}/blocked-dates`)
        console.log('✅ Fetched blocked dates from Supabase:', blockedDates)
        return blockedDates
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for blocked dates')
    return mockBlockedDatesAPI.getBlockedDates(vendorId)
  },

  async blockDate(vendorId: string, date: string, notes?: string): Promise<BlockedDate> {
    console.log('Blocking date for vendor:', vendorId, date, notes)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const blockedDate = await apiRequest(`/vendors/${vendorId}/blocked-dates`, {
          method: 'POST',
          body: JSON.stringify({ date, notes })
        })
        console.log('✅ Blocked date in Supabase:', blockedDate)
        return blockedDate
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for date blocking')
    return mockBlockedDatesAPI.blockDate(vendorId, date, notes)
  },

  async unblockDate(vendorId: string, date: string): Promise<void> {
    console.log('Unblocking date for vendor:', vendorId, date)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        await apiRequest(`/vendors/${vendorId}/blocked-dates/${date}`, {
          method: 'DELETE'
        })
        console.log('✅ Unblocked date in Supabase:', date)
        return
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for date unblocking')
    return mockBlockedDatesAPI.unblockDate(vendorId, date)
  }
}

// Bookings API with automatic fallback
export const bookingsAPI = {
  async getVendorBookings(vendorId: string): Promise<Booking[]> {
    console.log('Fetching vendor bookings for:', vendorId)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const bookings = await apiRequest(`/vendors/${vendorId}/bookings`)
        console.log('✅ Fetched bookings from Supabase:', bookings)
        return bookings
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for bookings')
    return mockBookingsAPI.getVendorBookings(vendorId)
  },

  async createBooking(bookingData: Omit<Booking, 'id' | 'created_at'>): Promise<Booking> {
    console.log('Creating booking:', bookingData)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const booking = await apiRequest(`/vendors/${bookingData.vendor_id}/bookings`, {
          method: 'POST',
          body: JSON.stringify(bookingData)
        })
        console.log('✅ Created booking in Supabase:', booking)
        return booking
      } catch (error) {
        console.warn('Supabase request failed, falling back to localStorage:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for booking creation')
    return mockBookingsAPI.createBooking(bookingData)
  },

  async updateBookingStatus(bookingId: string, status: Booking['status']): Promise<Booking> {
    console.log('Updating booking status:', bookingId, status)
    
    const useSupabase = await checkSupabaseHealth()
    
    if (useSupabase) {
      try {
        const vendorId = bookingId.split('_')[2] || bookingId.split('-')[1]
        const booking = await apiRequest(`/vendors/${vendorId}/bookings/${bookingId}`, {
          method: 'PUT',
          body: JSON.stringify({ status })
        })
        console.log('✅ Updated booking in Supabase:', booking)
        return booking
      } catch (error) {
        console.warn('Supabase request failed, using localStorage fallback:', error)
        isSupabaseAvailable = false
      }
    }
    
    // Fallback to localStorage
    console.log('📱 Using localStorage for booking status update')
    const allBookings = getFromStorage('bookings', [])
    const bookingIndex = allBookings.findIndex((booking: Booking) => booking.id === bookingId)
    
    if (bookingIndex === -1) {
      throw new Error('Booking not found')
    }
    
    allBookings[bookingIndex].status = status
    saveToStorage('bookings', allBookings)
    
    return allBookings[bookingIndex]
  }
}

// Backend status functions
export const getBackendStatus = () => ({
  isSupabaseAvailable,
  lastHealthCheck: new Date(lastHealthCheck),
  usingFallback: !isSupabaseAvailable
})

export const healthCheck = async (): Promise<boolean> => {
  return await checkSupabaseHealth()
}

// Initialize with immediate health check
export const initializeAPI = async () => {
  try {
    const isHealthy = await checkSupabaseHealth()
    if (isHealthy) {
      console.log('🚀 Connected to Supabase backend!')
    } else {
      console.log('📱 Running in offline mode with localStorage')
    }
    return isHealthy
  } catch (error) {
    console.log('📱 Backend unavailable, using localStorage fallback')
    return false
  }
}

// Auto-initialize on module load
initializeAPI()