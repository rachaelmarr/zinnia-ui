import { useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import AccountTypeSelection from './AccountTypeSelection'
import VendorProgressIndicator from './VendorProgressIndicator'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Card } from './ui/card'
import svgPaths from "../imports/svg-nag4br4gyo";

interface AuthProps {
  onNavigate: (view: string) => void;
  isVendorFlow?: boolean;
}

function Logo({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo" onClick={() => onNavigate('landing')} style={{ cursor: 'pointer' }}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_26_2042)" id="Logo">
          <path
            d={svgPaths.p33702600}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_26_2042">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UserCircle({ size = 22 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }} data-name="user-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
        <g id="user-circle">
          <path
            d={svgPaths.p221cbb00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </div>
  );
}


export default function Auth({ onNavigate, isVendorFlow = false }: AuthProps) {
  const { signIn, signUp, user, userType, loading: authLoading } = useAuth()
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')
  const [currentStep, setCurrentStep] = useState<'userType' | 'auth'>('auth')
  const [selectedUserType, setSelectedUserType] = useState<'vendor' | 'couple' | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [debugInfo, setDebugInfo] = useState('')

  // Forgot password modal state
  const [isForgotOpen, setIsForgotOpen] = useState(false)
  const [forgotStep, setForgotStep] = useState<'request' | 'check' | 'reset' | 'success'>('request')
  const [resetEmail, setResetEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmTouched, setConfirmTouched] = useState(false)
  const [forgotLoading, setForgotLoading] = useState(false)
  const [forgotError, setForgotError] = useState('')

  const openForgot = () => {
    setIsForgotOpen(true)
    setForgotStep('request')
    setResetEmail('')
    setNewPassword('')
    setConfirmPassword('')
    setConfirmTouched(false)
    setForgotError('')
  }

  const closeForgot = () => {
    setIsForgotOpen(false)
    setForgotError('')
  }

  // Simple password strength calculation tailored to the design
  const getPasswordStrength = (pwd: string) => {
    let score = 0
    if (pwd.length >= 8) score++
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++
    if (/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd)) score++
    return score // 0..3
  }

  const strength = getPasswordStrength(newPassword)
  const displayStrength = Math.max(1, strength)

  const handleSendResetEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotError('')
    if (!resetEmail) {
      setForgotError('Please enter your email address')
      return
    }
    try {
      setForgotLoading(true)
      await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: resetEmail,
          subject: 'Reset your Zinnia password',
          htmlContent: `<p>Click the link to reset your password (demo):</p>`
        })
      })
      setForgotStep('check')
    } catch (err: any) {
      setForgotError(err?.message || 'Failed to send reset email')
    } finally {
      setForgotLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setForgotError('')
    if (newPassword !== confirmPassword) {
      setConfirmTouched(true)
      return
    }
    if (strength < 3) {
      setForgotError('Please use a stronger password')
      return
    }
    // Demo: simulate successful reset
    setForgotLoading(true)
    setTimeout(() => {
      setForgotLoading(false)
      setForgotStep('success')
    }, 600)
  }

  // Allow simulating an email reset deep link for testing:
  // Visiting the app with `#reset-password` or `?reset=1` opens the modal on the reset step
  useEffect(() => {
    try {
      const hash = window.location.hash
      const params = new URLSearchParams(window.location.search)
      if (hash === '#reset-password' || params.get('reset') === '1') {
        setIsForgotOpen(true)
        setForgotStep('reset')
      }
    } catch {}
  }, [])

  // Debug authentication state
  console.log('🔍 Auth component state:', { user: user?.email, userType, authLoading, loading })

  // Handle case where user is already authenticated
  useEffect(() => {
    if (user && userType && !authLoading) {
      console.log('🎉 User is already authenticated, redirecting to appropriate dashboard')
      setDebugInfo('Already logged in, redirecting...')
      
      // Navigate to the correct dashboard based on user type
      if (userType === 'vendor') {
        // Always navigate to the general vendor dashboard
        onNavigate('dashboard');
      } else if (userType === 'couple') {
        onNavigate('coupleDashboard')
      } else {
        onNavigate('dashboard') // fallback
      }
    }
  }, [user, userType, authLoading, onNavigate])

  const handleUserTypeSelect = (userType: 'vendor' | 'couple') => {
    setSelectedUserType(userType)
    setCurrentStep('auth')
  }

  const handleBackToUserType = () => {
    setCurrentStep('userType')
    setSelectedUserType(null)
    setError('')
  }

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🎯 Sign in form submitted', { email, password })
    
    setLoading(true)
    setError('')
    setDebugInfo('Starting sign in process...')
    
    try {
      console.log('🔐 Calling signIn function...')
      setDebugInfo('Attempting authentication...')
      
      await signIn(email, password)
      
      console.log('✅ Sign in function completed - bypassing React state, forcing navigation...')
      setDebugInfo('Authentication successful! Forcing navigation...')
      
      // BYPASS REACT STATE ISSUES: Directly navigate after a short delay
      setTimeout(() => {
        console.log('🚀 Direct navigation to appropriate dashboard')
        // Check localStorage for user type to determine correct navigation
        const savedUserType = localStorage.getItem('zinnia_user_type')
        console.log('🔍 Saved user type from localStorage:', savedUserType)
        
        if (savedUserType === 'couple') {
          console.log('🎯 Navigating to couple dashboard')
          onNavigate('coupleDashboard')
        } else {
          console.log('🎯 Navigating to vendor dashboard')
          onNavigate('dashboard')
        }
        setLoading(false)
      }, 100)
      
    } catch (err: any) {
      console.error('❌ Sign in error in Auth component:', err)
      setError(err.message || 'Failed to sign in')
      setDebugInfo(`Error: ${err.message || 'Failed to sign in'}`)
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('🎯 Sign up form submitted', { email, password, selectedUserType, businessName })
    
    if (!selectedUserType) {
      setError('Please select a user type')
      return
    }
    
    setLoading(true)
    setError('')
    setDebugInfo('Starting sign up process...')
    
    try {
      console.log('🔐 Calling signUp function...')
      setDebugInfo('Creating account...')
      
      await signUp(email, password, selectedUserType, businessName)
      
      console.log('✅ Sign up successful, calling onNavigate')
      setDebugInfo('Account created successfully! Redirecting...')
      
      // Small delay to show success message
      setTimeout(() => {
        // Navigate based on user type
        if (selectedUserType === 'vendor') {
          onNavigate('dashboard')
        } else if (selectedUserType === 'couple') {
          onNavigate('coupleDashboard')
        } else {
          onNavigate('dashboard') // fallback
        }
      }, 500)
      
    } catch (err: any) {
      console.error('❌ Sign up error in Auth component:', err)
      setError(err.message || 'Failed to create account')
      setDebugInfo(`Error: ${err.message || 'Failed to create account'}`)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleToSignUp = () => {
    // Navigate to the proper signup flow instead of switching auth mode
    onNavigate('userTypeSelection')
  }

  const handleToggleToSignIn = () => {
    setAuthMode('signin')
    setCurrentStep('auth')
    setSelectedUserType(null)
    setError('')
    setDebugInfo('')
    setEmail('')
    setPassword('')
    setBusinessName('')
  }



  // Monitor authentication state changes for successful login
  useEffect(() => {
    if (user && userType && !authLoading && loading) {
      console.log('🎉 Authentication state updated successfully!', { 
        user: user.email, 
        userType,
        authLoading,
        formLoading: loading 
      })
      
      setLoading(false)
      setDebugInfo('Sign in successful! Redirecting...')
      
      // The App.tsx useEffect will handle the actual navigation
      // We just need to update our local state to reflect success
    }
  }, [user, userType, authLoading, loading])

  // Show user type selection for signup only
  if (authMode === 'signup' && currentStep === 'userType') {
    return (
      <AccountTypeSelection 
        onNavigate={onNavigate}
        onNext={handleUserTypeSelect}
        onCancel={() => setAuthMode('signin')}
      />
    );
  }

  // Show authentication form for both sign in and sign up
  return (
    <div
      className="bg-neutral-100 relative w-full min-h-screen"
      data-name="Auth"
    >
      {/* Mobile Header */}
      <div
        className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-full"
        data-name="Mobile/Header"
      >
        <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div
          className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
          data-name="Logo Container"
        >
          <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
            <Logo onNavigate={onNavigate} />
          </div>
        </div>
        <div
          className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 size-10"
          data-name="Icons"
        >
          <div
            className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
            data-name="Action Icons"
          >
            <UserCircle size={22} />
          </div>
        </div>
      </div>

      {/* Vendor Progress Indicator */}
      {isVendorFlow && (
        <div className="absolute top-[76px] left-0 right-0 bg-white border-b border-[#ccd7e6] py-4">
          <div className="flex justify-center">
            <VendorProgressIndicator currentStep={3} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="absolute box-border content-stretch flex flex-col gap-8 items-center justify-start left-1/2 transform -translate-x-1/2 p-0 top-[131px] w-[324px] max-w-[calc(100%-52px)]">
        {/* Back Button and User Type Indicator (only show for signup) */}
        {authMode === 'signup' && selectedUserType && (
          <div className="w-full flex items-center justify-between">
            <Button
              variant="link"
              onClick={handleBackToUserType}
              className="text-[14px] text-[#2e7684] p-0 h-auto"
            >
              ← Change user type
            </Button>
            <div className="text-right">
              <span className="font-medium text-[12px] text-[#667593] tracking-[0.24px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {selectedUserType === 'vendor' ? 'Vendor Account' : 'Couple Account'}
              </span>
            </div>
          </div>
        )}

        {/* Login Header */}
        <div
          className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
          data-name=".Login Header"
        >
          <div
            className="box-border content-stretch flex flex-col gap-3 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-center text-nowrap"
            data-name="Title"
          >
            <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[20px]" style={{ fontFamily: 'Literata, serif' }}>
              <p className="block leading-[1.5] text-nowrap whitespace-pre">
                {authMode === 'signup' ? 'Create your account' : 'Sign in to your account'}
              </p>
            </div>
            <div className="flex flex-col font-normal justify-center relative shrink-0 text-[14px] tracking-[0.28px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p className="leading-[1.5] text-nowrap whitespace-pre">
                <span className="text-[#667593]">
                  {authMode === 'signup' ? 'Already have an account?' : 'New to Zinnia?'}
                </span>{" "}
                <Button 
                  type="button"
                  variant="link"
                  onClick={authMode === 'signup' ? handleToggleToSignIn : handleToggleToSignUp}
                  className="text-[#2e7684] text-[14px] tracking-[0.28px] p-0 h-auto"
                >
                  {authMode === 'signup' ? 'Sign in' : 'Create a free account'}
                </Button>
              </p>
            </div>
          </div>
        </div>



        {/* Login Form */}
        <form
          onSubmit={authMode === 'signup' ? handleSignUp : handleSignIn}
          className="box-border content-stretch flex flex-col gap-[18px] items-start justify-start p-0 relative shrink-0 w-full"
          data-name=".Login Form"
        >
          {/* Business Name Input (only for vendor sign up) */}
          {authMode === 'signup' && selectedUserType === 'vendor' && (
            <Input
              type="text"
              label="Business Name"
              optional
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Your business name"
            />
          )}

          {/* Email Input */}
          <Input
            type="email"
            label="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          {/* Password Input and Forgot Password Container */}
          <div className="flex flex-col gap-2 w-full">
            <Input
              type="password"
              label="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              minLength={6}
            />

            {/* Forgot Password (only show on sign in) */}
            {authMode === 'signin' && (
              <div className="w-full flex justify-end">
                <Button 
                  type="button" 
                  variant="link"
                  className="text-[14px] tracking-[0.28px]"
                  onClick={openForgot}
                >
                  Forgot password?
                </Button>
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <Card variant="error" className="w-full">
              <p className="font-medium text-[12px] text-red-700" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Error:
              </p>
              <p className="font-normal text-[12px] text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {error}
              </p>
            </Card>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-9"
          >
            {loading ? (authMode === 'signup' ? 'Creating Account...' : 'Signing In...') : (authMode === 'signup' ? 'Create Account' : 'Sign in')}
          </Button>
        </form>

        {/* Quick Account Access (only show on sign in) */}
        {authMode === 'signin' && (
          <Card variant="outline" className="w-full">
            <div className="mb-4">
              <p className="font-medium text-[12px] text-[#47567b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Quick Account Access:
              </p>
              <p className="text-[11px] text-[#667593] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Test different account types and vendor experiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {/* Venue Login */}
              <div className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg border border-[#e9ecef]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img 
                      src="/assets/venue-default.svg" 
                      alt="Venue" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[12px] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Venue Owner
                    </p>
                    <p className="text-[10px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      vendor@test.com
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    setEmail('vendor@test.com');
                    setPassword('password123');
                    setError('');
                    // Vendor type is now handled by the signup flow
                    // Perform the authentication
                    try {
                      await signIn('vendor@test.com', 'password123');
                    } catch (err: any) {
                      setError(err.message || 'Authentication failed');
                    }
                  }}
                  className="text-[11px] h-7 px-3"
                >
                  Login
                </Button>
              </div>
              
              {/* Florist Login */}
              <div className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg border border-[#e9ecef]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img 
                      src="/assets/florist-default.svg" 
                      alt="Florist" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[12px] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Florist
                    </p>
                    <p className="text-[10px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      vendor@test.com
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    setEmail('vendor@test.com');
                    setPassword('password123');
                    setError('');
                    // Vendor type is now handled by the signup flow
                    // Perform the authentication
                    try {
                      await signIn('vendor@test.com', 'password123');
                    } catch (err: any) {
                      setError(err.message || 'Authentication failed');
                    }
                  }}
                  className="text-[11px] h-7 px-3"
                >
                  Login
                </Button>
              </div>
              
              {/* Photographer Login */}
              <div className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg border border-[#e9ecef]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img 
                      src="/assets/photographer-default.svg" 
                      alt="Photographer" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[12px] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Photographer
                    </p>
                    <p className="text-[10px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      vendor@test.com
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    setEmail('vendor@test.com');
                    setPassword('password123');
                    setError('');
                    // Vendor type is now handled by the signup flow
                    // Perform the authentication
                    try {
                      await signIn('vendor@test.com', 'password123');
                    } catch (err: any) {
                      setError(err.message || 'Authentication failed');
                    }
                  }}
                  className="text-[11px] h-7 px-3"
                >
                  Login
                </Button>
              </div>
              
              {/* Couple Login */}
              <div className="flex items-center justify-between p-3 bg-[#f8f9fa] rounded-lg border border-[#e9ecef]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8">
                    <img 
                      src="/assets/couple-default.svg" 
                      alt="Couple" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-[12px] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Couple
                    </p>
                    <p className="text-[10px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      couple@test.com
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={async () => {
                    setEmail('couple@test.com');
                    setPassword('password123');
                    setError('');
                    // Perform the authentication
                    try {
                      await signIn('couple@test.com', 'password123');
                    } catch (err: any) {
                      setError(err.message || 'Authentication failed');
                    }
                  }}
                  className="text-[11px] h-7 px-3"
                >
                  Login
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
      {isForgotOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <div className="h-6 w-[143px]"><Logo onNavigate={onNavigate} /></div>
            <button onClick={closeForgot} className="text-[#47567b] hover:bg-gray-100 rounded-full p-2">✕</button>
          </div>

          {/* Body */}
          <div className="flex-1 flex items-center justify-center px-6 py-10">
            <div className="w-full max-w-[620px]">
              {/* Request reset email */}
              {forgotStep === 'request' && (
                <form onSubmit={handleSendResetEmail}>
                  <h2 className="text-[20px] font-semibold text-center text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>Forgot Password</h2>
                  <p className="text-[14px] text-center text-[#667593] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>No worries, we’ll email you with reset instructions.</p>
                  <div className="mx-auto" style={{ maxWidth: 400, width: '100%' }}>
                    <Input 
                      type="email" 
                      label="Email Address" 
                      value={resetEmail} 
                      onChange={(e) => setResetEmail(e.target.value)} 
                      placeholder="Enter your email address" 
                      required 
                    />
                  </div>
                  {forgotError && <p className="mt-2 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>{forgotError}</p>}
                  <div className="flex justify-center mt-6">
                    <Button type="submit" disabled={forgotLoading} className="w-[280px]">{forgotLoading ? 'Sending…' : 'Send reset password email'}</Button>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Button type="button" variant="link" onClick={() => setIsForgotOpen(false)}>Back to login</Button>
                  </div>
                </form>
              )}

              {/* Check email */}
              {forgotStep === 'check' && (
                <div className="text-center">
                  <h2 className="text-[20px] font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>Check your email</h2>
                  <p className="text-[14px] text-[#667593] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>We’ve sent a password reset link to {resetEmail || 'your email'}.</p>
                  <p className="text-[14px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Didn’t receive an email? Check your spam folder or <button className="text-[#2e7684] underline" onClick={(e) => { e.preventDefault(); setForgotStep('request'); }}>resend the email</button>.</p>
                  <div className="flex justify-center mt-8">
                    <Button onClick={() => setIsForgotOpen(false)} className="w-[240px]">Back to login</Button>
                  </div>
                </div>
              )}

              {/* Reset password form */}
              {forgotStep === 'reset' && (
                <form onSubmit={handleResetPassword}>
                  <h2 className="text-[20px] font-semibold text-center text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>Reset your password</h2>
                  <p className="text-[14px] text-center text-[#667593] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Create a new password for your account.</p>

                  {/* New password */}
                  <div className="mx-auto" style={{ maxWidth: 400, width: '100%' }}>
                    <Input 
                      type="password" 
                      label="New Password" 
                      value={newPassword} 
                      onChange={(e) => setNewPassword(e.target.value)} 
                      placeholder="Create a password" 
                      required 
                    />
                  </div>
                  {/* Strength meter */}
                  <div className="mt-2 mx-auto" style={{ maxWidth: 400, width: '100%' }}>
                    {/* Three-segment bar that changes color progressively */}
                    <div className="flex gap-3">
                      <div className={`h-2 flex-1 rounded ${displayStrength >= 1 ? 'bg-[#e53935]' : 'bg-[#d7dee9]'}`} />
                      <div className={`h-2 flex-1 rounded ${displayStrength >= 2 ? 'bg-[#d97706]' : 'bg-[#d7dee9]'}`} />
                      <div className={`h-2 flex-1 rounded ${displayStrength >= 3 ? 'bg-[#2e7d32]' : 'bg-[#d7dee9]'}`} />
                    </div>
                    {/* Intentionally omit textual label (Weak/Average/Strong) per design preference */}
                    <ul className="mt-2 text-[14px] text-[#667593]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <li className={`mb-1 ${(/[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword)) ? 'line-through opacity-60' : ''}`}>• Upper and lowercase letters</li>
                      <li className={`mb-1 ${(/[0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(newPassword)) ? 'line-through opacity-60' : ''}`}>• A symbol (!@#$%^&*)</li>
                      <li className={`${newPassword.length >= 8 ? 'line-through opacity-60' : ''}`}>• At least 8 characters</li>
                    </ul>
                  </div>

                  {/* Confirm password */}
                  <div className="mx-auto mt-4" style={{ maxWidth: 400, width: '100%' }}>
                    <Input 
                      type="password" 
                      label="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() => setConfirmTouched(true)}
                      placeholder="Confirm Password"
                      error={confirmTouched && newPassword !== confirmPassword ? "Passwords don't match." : undefined}
                      required 
                    />
                  </div>
                  {forgotError && <p className="mt-2 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>{forgotError}</p>}
                  <div className="flex justify-center mt-6">
                    <Button type="submit" disabled={forgotLoading || !newPassword || !confirmPassword || newPassword !== confirmPassword} className="w-[240px]">{forgotLoading ? 'Submitting…' : 'Submit'}</Button>
                  </div>
                </form>
              )}

              {/* Success */}
              {forgotStep === 'success' && (
                <div className="text-center">
                  <h2 className="text-[20px] font-semibold text-[#47567b] mb-2" style={{ fontFamily: 'Literata, serif' }}>Password Successfully changed</h2>
                  <p className="text-[14px] text-[#667593] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Sign in now with your new credentials.</p>
                  <div className="flex justify-center">
                    <Button onClick={() => { closeForgot(); setAuthMode('signin') }} className="w-[240px]">Sign in</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}