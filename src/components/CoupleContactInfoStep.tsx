import { useState } from 'react';
import { X } from 'lucide-react';

interface CoupleContactInfoStepProps {
  onNext: (data: CoupleContactInfoData) => void;
  onBack: () => void;
  onCancel: () => void;
}

interface CoupleContactInfoData {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  textUpdatesConsent: boolean;
}

export default function CoupleContactInfoStep({ onNext, onBack, onCancel }: CoupleContactInfoStepProps) {
  const [formData, setFormData] = useState<CoupleContactInfoData>({
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    textUpdatesConsent: true // Auto-on by default
  });
  const [errors, setErrors] = useState<Partial<CoupleContactInfoData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof CoupleContactInfoData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<CoupleContactInfoData> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

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

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      onNext(formData);
    } catch (error) {
      console.error('Error processing form:', error);
    } finally {
      setIsLoading(false);
    }
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
    <div className="min-h-screen bg-white relative">
      {/* Close button - positioned absolutely in top right */}
      <button
        onClick={onCancel}
        className="absolute top-6 right-6 z-10 p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
      >
        <X size={24} />
      </button>

      {/* Header */}
      <div className="flex justify-center items-center p-6 border-b border-gray-200">
        <h1 className="font-semibold text-xl text-[#47567b]" style={{ fontFamily: 'Literata, serif' }}>
          Contact Information
        </h1>
      </div>

      {/* Stepper */}
      <div className="flex justify-center items-center p-6">
        <img 
          src="/assets/stepper-couple-contact.svg" 
          alt="Step 2 of 2: Contact Info" 
          className="h-16 object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 py-8">
        <div className="max-w-md mx-auto">
          {/* Success Message */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
              Let's set up your account! 🎉
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Create your account to access your couple dashboard. By creating a Zinnia account you agree to our{' '}
              <a href="#" className="text-[#2f7685] underline hover:text-[#1e6b7a]">terms of use</a> and{' '}
              <a href="#" className="text-[#2f7685] underline hover:text-[#1e6b7a]">privacy policy</a>. All fields are required.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Email Field (Editable for couples) */}
            <div>
              <label className="block text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontWeight: '500', fontSize: '14px' }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="your@email.com"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontWeight: '500', fontSize: '14px' }}>
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Password"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              
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
              <label className="block text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontWeight: '500', fontSize: '14px' }}>
                Re-enter Password
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm your password"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontWeight: '500', fontSize: '14px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#2f7685] focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="(555) 123-4567"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Text Updates Checkbox */}
            <div className="flex items-start space-x-4">
              <input
                type="checkbox"
                id="textUpdates"
                checked={formData.textUpdatesConsent}
                onChange={(e) => handleInputChange('textUpdatesConsent', e.target.checked)}
                className="mt-1 h-4 w-4 text-[#2f7685] focus:ring-[#2f7685] border-gray-300 rounded"
              />
              <label htmlFor="textUpdates" className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="font-medium">Get text updates from us</span>
                <br />
                By agreeing to get text messages from us, you agree to receive calls or SMS messages for Zinnia account updates from Zinnia and its affiliates to the number provided. I understand that I may opt out by texting "STOP." Message & data rates may apply.
              </label>
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
          onClick={handleNext}
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
