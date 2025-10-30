import React, { useState } from "react";
import { X } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";

interface VendorYourInfoStepProps {
  onNavigate: (view: string) => void;
  onNext: (yourInfoData: YourInfoData) => void;
  onBack: () => void;
  onCancel: () => void;
}

interface YourInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  website: string;
  instagram: string;
  textUpdatesConsent: boolean;
}

export default function VendorYourInfoStep({ 
  onNavigate, 
  onNext, 
  onBack, 
  onCancel 
}: VendorYourInfoStepProps) {
  const [formData, setFormData] = useState<YourInfoData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    website: "",
    instagram: "",
    textUpdatesConsent: true
  });

  const [errors, setErrors] = useState<Partial<YourInfoData>>({});
  const [touched, setTouched] = useState<Partial<YourInfoData>>({});

  const handleInputChange = (field: keyof YourInfoData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleBlur = (field: keyof YourInfoData) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWebsite = (website: string) => {
    const urlRegex = /^www\.[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.[a-zA-Z]{2,}$/;
    return urlRegex.test(website);
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<YourInfoData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number (XXX-XXX-XXXX)";
    }
    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.website.trim()) {
      newErrors.website = "Website is required";
    } else if (!validateWebsite(formData.website)) {
      newErrors.website = "Please enter a valid website URL (e.g., www.example.com)";
    }
    if (!formData.instagram.trim()) newErrors.instagram = "Instagram handle is required";
    // textUpdatesConsent is optional - no validation needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with progress indicator */}
      <div className="flex justify-between items-center p-6">
        {/* Progress indicator - centered */}
        <div className="flex-1 flex justify-center">
          <VendorProgressIndicator currentStep={2} />
        </div>

        {/* Close button */}
        <button
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#47567B] mb-2 text-center" style={{ fontFamily: 'Literata, serif' }}>
          Tell us about yourself
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm text-[#47567B] mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          All fields are required.
        </p>

        {/* Form */}
        <div className="w-full space-y-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Your first name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              onBlur={() => handleBlur('firstName')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                errors.firstName ? 'border-red-500' : 'border-[#d1d5db]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="First name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Your last name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              onBlur={() => handleBlur('lastName')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                errors.lastName ? 'border-red-500' : 'border-[#d1d5db]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="Last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                errors.email ? 'border-red-500' : 'border-[#d1d5db]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.email}</p>
            )}
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Business name
            </label>
            <input
              type="text"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              onBlur={() => handleBlur('businessName')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                errors.businessName ? 'border-red-500' : 'border-[#d1d5db]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="Business name"
            />
            {errors.businessName && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.businessName}</p>
            )}
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Website
            </label>
            <input
              type="text"
              value={formData.website}
              onChange={(e) => handleInputChange('website', e.target.value)}
              onBlur={() => handleBlur('website')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                errors.website ? 'border-red-500' : 'border-[#d1d5db]'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
              placeholder="www.example.com"
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.website}</p>
            )}
          </div>


          {/* Instagram */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Instagram
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6b7280]">@</span>
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => handleInputChange('instagram', e.target.value)}
                onBlur={() => handleBlur('instagram')}
                className={`w-full pl-8 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                  errors.instagram ? 'border-red-500' : 'border-[#d1d5db]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                placeholder="Handle"
              />
            </div>
            {errors.instagram && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.instagram}</p>
            )}
          </div>

          {/* Phone Number with Country Code */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Literata, serif', fontSize: '14px' }}>
              Phone Number
            </label>
            <div className="flex">
              {/* Country Code Dropdown */}
              <div className="flex items-center px-3 py-3 border border-r-0 border-[#d1d5db] rounded-l-lg bg-gray-50">
                <span className="text-lg mr-2">🇺🇸</span>
                <span className="text-sm text-[#374151]">+1</span>
                <svg className="w-4 h-4 ml-1 text-[#6b7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {/* Phone Input */}
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => {
                  // Auto-format phone number as XXX-XXX-XXXX
                  let value = e.target.value.replace(/\D/g, '');
                  if (value.length >= 6) {
                    value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                  } else if (value.length >= 3) {
                    value = value.slice(0, 3) + '-' + value.slice(3);
                  }
                  handleInputChange('phoneNumber', value);
                }}
                onBlur={() => handleBlur('phoneNumber')}
                className={`flex-1 px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors placeholder:text-[#9ca3af] ${
                  errors.phoneNumber ? 'border-red-500' : 'border-[#d1d5db]'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
                placeholder="301-565-1220"
                maxLength={12}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>{errors.phoneNumber}</p>
            )}
          </div>

          {/* Text Updates Consent */}
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="textUpdatesConsent"
                checked={formData.textUpdatesConsent}
                onChange={(e) => setFormData(prev => ({ ...prev, textUpdatesConsent: e.target.checked }))}
                className="h-4 w-4 text-[#2f7685] border-gray-300 rounded focus:ring-[#2f7685]"
              />
              <label htmlFor="textUpdatesConsent" className="ml-1 text-sm text-[#374151]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Get text updates from us.
              </label>
            </div>
            <p className="text-xs text-[#6b7280] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              By agreeing to get text messages from us, you agree to receive calls or SMS messages for Zinnia account updates from Zinnia and its affiliates to the number provided. I understand that I may opt out by texting "STOP." Message & data rates may apply.
            </p>
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
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
