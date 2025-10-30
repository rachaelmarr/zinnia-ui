import React, { useState } from "react";
import { X, Check, User, Mail, Lock, Building } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";

interface VendorCreateAccountStepProps {
  onNavigate: (view: string) => void;
  onNext: (accountData: AccountData) => void;
  onBack: () => void;
  onCancel: () => void;
  paymentInfo?: {
    paymentStatus?: 'pending' | 'success' | 'failed';
    paymentError?: string;
  };
}

interface AccountData {
  username: string;
  password: string;
  confirmPassword: string;
  testMode?: 'success' | 'failure' | 'bypass' | 'next';
}

export default function VendorCreateAccountStep({ 
  onNavigate, 
  onNext, 
  onBack, 
  onCancel,
  paymentInfo
}: VendorCreateAccountStepProps) {
  const [formData, setFormData] = useState<AccountData>({
    username: 'kjones@kjpublicity.com', // Set username to email
    password: '',
    confirmPassword: '',
    testMode: 'next'
  });
  const [errors, setErrors] = useState<Partial<AccountData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof AccountData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    console.log('🎯 validateForm called with formData:', formData);
    const newErrors: Partial<AccountData> = {};

    // Username is automatically set to email, so no validation needed

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    console.log('🎯 Validation errors:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    console.log('🎯 handleNext called');
    
    if (!validateForm()) {
      console.log('🎯 Form validation failed');
      return;
    }

    console.log('🎯 Form validation passed, starting account creation');
    setIsLoading(true);
    
    try {
      // Simulate account creation process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('🎯 Account creation successful, setting auth state and navigating to dashboard');
      
      // Set authentication state in localStorage to simulate successful signup
      const mockUser = {
        id: 'mock-user-id',
        email: 'kjones@kjpublicity.com',
        user_metadata: {
          user_type: 'vendor',
          business_name: 'KJ Publicity'
        }
      };
      
      localStorage.setItem('zinnia_user', JSON.stringify(mockUser));
      localStorage.setItem('zinnia_user_type', 'vendor');
      localStorage.setItem('vendorFlow', 'false'); // Clear vendor flow flag
      
      console.log('🎯 Auth state set:', {
        zinnia_user: localStorage.getItem('zinnia_user'),
        zinnia_user_type: localStorage.getItem('zinnia_user_type'),
        vendorFlow: localStorage.getItem('vendorFlow')
      });
      
                // Force a page refresh to trigger useAuth to re-check localStorage
          console.log('🎯 Account created successfully, refreshing page to update auth state');
          window.location.reload();
    } catch (error) {
      console.error('Error creating account:', error);
      setErrors({ username: 'Failed to create account. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestModeChange = (mode: 'success' | 'failure' | 'bypass' | 'next') => {
    setFormData(prev => ({ ...prev, testMode: mode }));
  };

  const checkPasswordRequirement = (password: string, index: number) => {
    switch (index) {
      case 0: return password.length >= 8;
      case 1: return /[A-Z]/.test(password);
      case 2: return /[a-z]/.test(password);
      case 3: return /[0-9]/.test(password);
      case 4: return /[!@#$%^&*(),.?":{}|<>]/.test(password);
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <button
          onClick={onBack}
          className="p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={24} />
        </button>
        <h1 className="font-semibold text-xl text-[#47567b]" style={{ fontFamily: 'Literata, serif' }}>
          Create Your Account
        </h1>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      {/* Progress Indicator */}
      <div className="px-6 py-4">
        <VendorProgressIndicator currentStep={5} />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Payment Failed Status */}
          {paymentInfo?.paymentStatus === 'failed' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <X className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-red-800 font-medium text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Payment Failed ❌
                    </p>
                    <p className="text-red-700 text-xs mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {paymentInfo.paymentError || 'There was an issue processing your payment.'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('vendorPaymentStep')}
                  className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Retry Payment
                </button>
              </div>
            </div>
          )}

          {/* Success Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
              You're In! 🎉
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Payment successful. Set your password to continue to your vendor dashboard. By creating a Zinnia account you agree to our{' '}
              <a href="#" className="text-[#2f7685] underline hover:text-[#1e6b7a]">terms of use</a> and{' '}
              <a href="#" className="text-[#2f7685] underline hover:text-[#1e6b7a]">privacy policy</a>. All fields are required.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">

            {/* Email Field (Read-only) */}
            <div>
              <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value="kjones@kjpublicity.com"
                  readOnly
                  className="w-full pl-10 pr-4 py-3 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>
              <p className="mt-1 text-xs text-gray-500" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                This email was used for your payment
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Password"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>
              
              {/* Password Requirements */}
              <div className="mt-2 space-y-1">
                {[
                  'At least 8 characters',
                  'At least 1 uppercase letter',
                  'At least 1 lowercase letter',
                  'At least 1 number (0-9)',
                  'At least 1 special character (! @ # $ % etc.)'
                ].map((requirement, index) => {
                  const isMet = checkPasswordRequirement(formData.password, index);
                  return (
                    <div key={index} className="flex items-center text-xs">
                      <div className={`w-2 h-2 rounded-full mr-2 ${isMet ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className={`${isMet ? 'text-green-600' : 'text-gray-500'}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {requirement}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Re-enter Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Confirm your password"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Footer with navigation buttons */}
      <div className="p-6 flex justify-end space-x-4">
        <button
          onClick={onBack}
          className="px-6 py-3 text-[#6b7280] hover:text-[#374151] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Back
        </button>
        <button
          onClick={() => {
            console.log('🎯 Sign me up button clicked');
            handleNext();
          }}
          disabled={isLoading}
          className={`px-8 py-3 rounded-full font-medium transition-colors ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#2f7685] hover:bg-[#1e6b7a] text-white'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {isLoading ? 'Creating Account...' : 'Sign me up'}
        </button>
      </div>
    </div>
  );
}
