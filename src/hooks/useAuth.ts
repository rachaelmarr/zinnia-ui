import { useState, useEffect } from 'react'
import { projectId, publicAnonKey } from '../utils/supabase/info'

// Real user type definitions
interface User {
  id: string
  email: string
  user_metadata?: {
    user_type?: 'vendor' | 'couple'
    business_name?: string
  }
}

interface VendorProfile {
  id: string
  user_id: string
  business_name: string
  created_at: string
}

interface AuthContextType {
  user: User | null
  vendorProfile: VendorProfile | null
  userType: 'vendor' | 'couple' | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userType: 'vendor' | 'couple', businessName?: string) => Promise<void>
  signOut: () => Promise<void>
  syncFromLocalStorage: () => void
}

const API_BASE_URL = `https://${projectId}.supabase.co/functions/v1/make-server-6e4d8724`

// Check if Supabase backend is available
const checkBackendAvailability = async (): Promise<boolean> => {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 3000) // 3 second timeout
    
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`
      },
      signal: controller.signal
    })
    
    clearTimeout(timeoutId)
    return response.ok
  } catch (error) {
    return false
  }
}

// Mock authentication functions for fallback
const mockAuth = {
  signIn: async (email: string, password: string) => {
    console.log('🔍 mockAuth.signIn called with:', { email, password: '***' })
    
    // Mock authentication - test credentials
    if (email === 'vendor@test.com' && password === 'password123') {
      console.log('✅ Vendor test credentials match, creating mock user')
      const mockUser: User = {
        id: 'test-vendor-id',
        email: email,
        user_metadata: {
          user_type: 'vendor',
          business_name: 'Test Photography Studio'
        }
      }
      
      const mockVendorProfile: VendorProfile = {
        id: 'vendor-profile-1',
        user_id: mockUser.id,
        business_name: 'Test Photography Studio',
        created_at: new Date().toISOString()
      }
      
      return { user: mockUser, userType: 'vendor', vendorProfile: mockVendorProfile }
    }
    
    // Couple test credentials
    if (email === 'couple@test.com' && password === 'password123') {
      console.log('✅ Couple test credentials match, creating mock user')
      const mockUser: User = {
        id: 'test-couple-id',
        email: email,
        user_metadata: {
          user_type: 'couple',
          first_name: 'John',
          last_name: 'Doe',
          partner_first_name: 'Jane',
          partner_last_name: 'Smith'
        }
      }
      
      return { user: mockUser, userType: 'couple', vendorProfile: null }
    }
    
    // Check for other test accounts in localStorage
    const savedAccounts = JSON.parse(localStorage.getItem('zinnia_test_accounts') || '[]')
    const account = savedAccounts.find((acc: any) => acc.email === email && acc.password === password)
    
    if (account) {
      const mockUser: User = {
        id: account.id,
        email: account.email,
        user_metadata: {
          user_type: account.userType,
          business_name: account.businessName
        }
      }
      
      let mockVendorProfile = null
      if (account.userType === 'vendor') {
        mockVendorProfile = {
          id: `vendor-profile-${account.id}`,
          user_id: account.id,
          business_name: account.businessName || 'My Business',
          created_at: new Date().toISOString()
        }
      }
      
      return { user: mockUser, userType: account.userType, vendorProfile: mockVendorProfile }
    }
    
    console.log('❌ No matching credentials found')
    throw new Error('Invalid email or password')
  },

  signUp: async (email: string, password: string, userType: 'vendor' | 'couple', businessName?: string) => {
    const userId = `user-${Date.now()}`
    const mockUser: User = {
      id: userId,
      email: email,
      user_metadata: {
        user_type: userType,
        business_name: businessName
      }
    }
    
    let mockVendorProfile = null
    if (userType === 'vendor') {
      mockVendorProfile = {
        id: `vendor-profile-${userId}`,
        user_id: userId,
        business_name: businessName || 'My Business',
        created_at: new Date().toISOString()
      }
    }
    
    // Save to test accounts
    const savedAccounts = JSON.parse(localStorage.getItem('zinnia_test_accounts') || '[]')
    savedAccounts.push({
      id: userId,
      email,
      password,
      userType,
      businessName,
      createdAt: new Date().toISOString()
    })
    localStorage.setItem('zinnia_test_accounts', JSON.stringify(savedAccounts))
    
    return { user: mockUser, userType, vendorProfile: mockVendorProfile }
  }
}

// Hybrid authentication using Supabase with localStorage fallback
export function useAuth(): AuthContextType {
  const [user, setUser] = useState<User | null>(null)
  const [vendorProfile, setVendorProfile] = useState<VendorProfile | null>(null)
  const [userType, setUserType] = useState<'vendor' | 'couple' | null>(null)
  const [loading, setLoading] = useState(true)

  // Function to sync auth state from localStorage
  const syncFromLocalStorage = () => {
    const savedUser = localStorage.getItem('zinnia_user')
    const savedUserType = localStorage.getItem('zinnia_user_type')
    const savedVendorProfile = localStorage.getItem('zinnia_vendor_profile')
    
    console.log('🔄 Syncing from localStorage:', {
      savedUser: !!savedUser,
      savedUserType,
      currentUser: user?.email || 'null',
      currentUserType: userType || 'null'
    });
    
    if (savedUser && savedUserType) {
      try {
        const parsedUser = JSON.parse(savedUser)
        console.log('🔄 Setting user from localStorage sync:', parsedUser.email);
        setUser(parsedUser)
        setUserType(savedUserType as 'vendor' | 'couple')
        
        if (savedVendorProfile && savedUserType === 'vendor') {
          setVendorProfile(JSON.parse(savedVendorProfile))
        }
      } catch (error) {
        console.error('Error parsing saved user during sync:', error)
      }
    } else if (!savedUser && !savedUserType) {
      // Clear state if localStorage is empty
      console.log('🔄 Clearing auth state - no localStorage data');
      setUser(null)
      setUserType(null)
      setVendorProfile(null)
    }
  }

  useEffect(() => {
    // Only run once on mount
    let isMounted = true
    
    const initializeAuth = async () => {
      // Check if user was explicitly logged out
      const logoutFlag = localStorage.getItem('zinnia_logout_flag')
      const savedUser = localStorage.getItem('zinnia_user')
      const savedUserType = localStorage.getItem('zinnia_user_type')
      
      if (!isMounted) return
      
      if (logoutFlag === 'true') {
        // User was explicitly logged out, clear the flag and don't sync
        console.log('🔄 Initial auth sync - logout flag detected, user is logged out')
        localStorage.removeItem('zinnia_logout_flag')
        if (isMounted) {
          setUser(null)
          setUserType(null)
          setVendorProfile(null)
        }
      } else if (savedUser && savedUserType) {
        // Only sync if there's valid data in localStorage and no logout flag
        console.log('🔄 Initial auth sync - found localStorage data, syncing...')
        if (isMounted) {
          syncFromLocalStorage()
        }
      } else {
        // No localStorage data means user is logged out, don't sync
        console.log('🔄 Initial auth sync - no localStorage data, user is logged out')
        if (isMounted) {
          setUser(null)
          setUserType(null)
          setVendorProfile(null)
        }
      }
      
      if (isMounted) {
        setLoading(false)
      }
    }
    
    initializeAuth()
    
    return () => {
      isMounted = false
    }
  }, [])

  // Debug useEffect to track state changes
  useEffect(() => {
    console.log('🔍 Auth state change detected:', {
      user: user?.email || 'null',
      userType: userType || 'null',
      loading,
      timestamp: new Date().toISOString()
    })
  }, [user, userType, loading])

  // Removed problematic useEffect that was causing race conditions after logout

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      console.log('🚀 STARTING signIn process...')
      setLoading(true)
      
      console.log('🎯 useAuth.signIn called with:', { email, password: '***' })
      // Fast path for known demo accounts to avoid backend dependency
      if ((email === 'vendor@test.com' || email === 'couple@test.com') && password === 'password123') {
        console.log('⚡ Using demo fast-path authentication')
        const authResult = await mockAuth.signIn(email, password)
        setUser(authResult.user)
        setUserType(authResult.userType)
        setVendorProfile(authResult.vendorProfile)
        localStorage.setItem('zinnia_user', JSON.stringify(authResult.user))
        localStorage.setItem('zinnia_user_type', authResult.userType)
        if (authResult.vendorProfile) {
          localStorage.setItem('zinnia_vendor_profile', JSON.stringify(authResult.vendorProfile))
        }
        localStorage.removeItem('zinnia_logout_flag')
        console.log('✅ Demo fast-path sign in successful')
        return
      }
      
      // Check if Supabase backend is available
      const isBackendAvailable = await checkBackendAvailability()
      console.log('🔗 Backend availability check:', isBackendAvailable)
      
      if (isBackendAvailable) {
        console.log('🚀 Using Supabase authentication')
        
        try {
          const response = await fetch(`${API_BASE_URL}/auth/signin`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify({ email, password })
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || 'Authentication failed')
          }

          const data = await response.json()
          console.log('✅ Supabase sign in successful:', data.user?.email)
          
          setUser(data.user)
          setUserType(data.userType)
          setVendorProfile(data.vendorProfile)
          
          // Save to localStorage for persistence
          localStorage.setItem('zinnia_user', JSON.stringify(data.user))
          localStorage.setItem('zinnia_user_type', data.userType)
          localStorage.setItem('zinnia_access_token', data.session?.access_token || '')
          
          if (data.vendorProfile) {
            localStorage.setItem('zinnia_vendor_profile', JSON.stringify(data.vendorProfile))
          }
          
          return
        } catch (supabaseError) {
          console.warn('Supabase authentication failed, falling back to mock auth:', supabaseError)
        }
      }
      
      // Fallback to mock authentication
      console.log('📱 Using localStorage authentication')
      console.log('🔍 Calling mockAuth.signIn with:', { email, password: '***' })
      const authResult = await mockAuth.signIn(email, password)
      console.log('🔍 mockAuth.signIn result:', authResult)
      
      console.log('🔄 Mock auth result:', {
        user: authResult.user.email,
        userType: authResult.userType,
        hasVendorProfile: !!authResult.vendorProfile
      })
      
      console.log('🔧 About to set authentication state...')
      
      // IMPORTANT: Set state with immediate logging to debug
      console.log('🟡 BEFORE setState - Current state:', { 
        currentUser: user?.email || 'null', 
        currentUserType: userType || 'null' 
      })
      
      console.log('🔧 Setting user state...')
      setUser(authResult.user)
      
      // Force a re-render check immediately after setState
      setTimeout(() => {
        console.log('🟢 AFTER setUser - User state should be:', authResult.user.email)
      }, 0)
      
      console.log('🔧 Setting userType state...')
      setUserType(authResult.userType)
      
      setTimeout(() => {
        console.log('🟢 AFTER setUserType - UserType state should be:', authResult.userType)
      }, 0)
      
      console.log('🔧 Setting vendorProfile state...')
      setVendorProfile(authResult.vendorProfile)
      
      // Save to localStorage for persistence
      console.log('💾 Saving to localStorage...')
      localStorage.setItem('zinnia_user', JSON.stringify(authResult.user))
      localStorage.setItem('zinnia_user_type', authResult.userType)
      
      if (authResult.vendorProfile) {
        localStorage.setItem('zinnia_vendor_profile', JSON.stringify(authResult.vendorProfile))
      }
      
      // Clear logout flag on successful sign in
      localStorage.removeItem('zinnia_logout_flag')
      console.log('✅ localStorage save completed')
      
      console.log('✅ Sign in process completed successfully')
      
    } catch (error: any) {
      console.error('❌ Sign in error in useAuth:', error)
      throw new Error(error.message || 'Authentication failed')
    } finally {
      console.log('🔧 Setting loading to false...')
      setLoading(false)
      console.log('✅ Loading set to false')
    }
  }

  const signUp = async (email: string, password: string, userType: 'vendor' | 'couple', businessName?: string): Promise<void> => {
    try {
      setLoading(true)
      
      console.log('Attempting sign up...')
      
      // Check if Supabase backend is available
      const isBackendAvailable = await checkBackendAvailability()
      
      if (isBackendAvailable) {
        console.log('🚀 Using Supabase for sign up')
        
        try {
          const response = await fetch(`${API_BASE_URL}/auth/signup`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${publicAnonKey}`
            },
            body: JSON.stringify({ email, password, userType, businessName })
          })

          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || 'Sign up failed')
          }

          const data = await response.json()
          console.log('✅ Supabase sign up successful:', data.user?.email)
          
          setUser(data.user)
          setUserType(data.userType)
          setVendorProfile(data.vendorProfile)
          
          // Save to localStorage for persistence
          localStorage.setItem('zinnia_user', JSON.stringify(data.user))
          localStorage.setItem('zinnia_user_type', data.userType)
          
          if (data.vendorProfile) {
            localStorage.setItem('zinnia_vendor_profile', JSON.stringify(data.vendorProfile))
          }
          
          return
        } catch (supabaseError) {
          console.warn('Supabase sign up failed, falling back to mock auth:', supabaseError)
        }
      }
      
      // Fallback to mock authentication
      console.log('📱 Using localStorage for sign up')
      const authResult = await mockAuth.signUp(email, password, userType, businessName)
      
      setUser(authResult.user)
      setUserType(authResult.userType)
      setVendorProfile(authResult.vendorProfile)
      
      // Save to localStorage for persistence
      localStorage.setItem('zinnia_user', JSON.stringify(authResult.user))
      localStorage.setItem('zinnia_user_type', authResult.userType)
      
      if (authResult.vendorProfile) {
        localStorage.setItem('zinnia_vendor_profile', JSON.stringify(authResult.vendorProfile))
      }
      
      // Clear logout flag on successful sign up
      localStorage.removeItem('zinnia_logout_flag')
      
      console.log('✅ Mock sign up successful:', authResult.user.email)
      
    } catch (error: any) {
      console.error('Sign up error:', error)
      throw new Error(error.message || 'Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  const signOut = async (): Promise<void> => {
    try {
      console.log('🚨 STARTING SIGN OUT PROCESS...')
      console.log('🔍 Before signOut - localStorage:', {
        zinnia_user: localStorage.getItem('zinnia_user'),
        zinnia_user_type: localStorage.getItem('zinnia_user_type'),
        zinnia_logout_flag: localStorage.getItem('zinnia_logout_flag')
      });
      
      // Set logout flag FIRST to prevent auto-sync
      localStorage.setItem('zinnia_logout_flag', 'true')
      console.log('🏁 Logout flag set to true')
      
      // Clear React state
      console.log('🧹 Clearing React state...')
      setUser(null)
      setUserType(null)
      setVendorProfile(null)
      
      // Clear ALL zinnia-related localStorage items
      console.log('🗑️ Clearing localStorage...')
      const keysToRemove = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('zinnia_')) {
          keysToRemove.push(key)
        }
      }
      
      keysToRemove.forEach(key => {
        localStorage.removeItem(key)
        console.log(`🗑️ Removed localStorage key: ${key}`)
      })
      
      console.log('🔍 After signOut - localStorage:', {
        zinnia_user: localStorage.getItem('zinnia_user'),
        zinnia_user_type: localStorage.getItem('zinnia_user_type'),
        zinnia_logout_flag: localStorage.getItem('zinnia_logout_flag')
      });
      console.log('✅ Sign out complete')
      
    } catch (error: any) {
      console.error('Sign out error:', error)
      throw new Error(error.message || 'Sign out failed')
    }
  }

  return {
    user,
    vendorProfile,
    userType,
    loading,
    signIn,
    signUp,
    signOut,
    syncFromLocalStorage
  }
}