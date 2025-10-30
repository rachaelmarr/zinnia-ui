import { useState, useEffect, useRef } from 'react';

interface CoupleYourInfoStepProps {
  onNext: (data: CoupleYourInfoData) => void;
  onBack: () => void;
  onCancel: () => void;
}

interface CoupleYourInfoData {
  firstName: string;
  lastName: string;
  partnerFirstName: string;
  partnerLastName: string;
  city: string;
  state: string;
  hasDate: boolean;
  weddingDate: string;
}

export default function CoupleYourInfoStep({ onNext, onBack, onCancel }: CoupleYourInfoStepProps) {
  const [formData, setFormData] = useState<CoupleYourInfoData>({
    firstName: '',
    lastName: '',
    partnerFirstName: '',
    partnerLastName: '',
    city: '',
    state: '',
    hasDate: false,
    weddingDate: ''
  });

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const cityInputRef = useRef<HTMLInputElement | null>(null);
  const stateInputRef = useRef<HTMLInputElement | null>(null);

  // Initialize Google Places Autocomplete for city and state
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && cityInputRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        cityInputRef.current,
        {
          types: ['(cities)'],
          componentRestrictions: { country: 'us' }
        }
      );

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.address_components) {
          let city = '';
          let state = '';

          place.address_components.forEach((component) => {
            const types = component.types;
            if (types.includes('locality')) {
              city = component.long_name;
            } else if (types.includes('administrative_area_level_1')) {
              state = component.short_name;
            }
          });

          setFormData(prev => ({
            ...prev,
            city: city,
            state: state
          }));
        }
      });
    }

    return () => {
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, []);

  const handleInputChange = (field: keyof CoupleYourInfoData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'partnerFirstName', 'partnerLastName', 'city', 'state'];
    const isValid = requiredFields.every(field => formData[field as keyof CoupleYourInfoData].toString().trim() !== '');
    
    if (isValid) {
      onNext(formData);
    }
  };

  const isFormValid = () => {
    const requiredFields = ['firstName', 'lastName', 'partnerFirstName', 'partnerLastName', 'city', 'state'];
    return requiredFields.every(field => formData[field as keyof CoupleYourInfoData].toString().trim() !== '');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with progress indicator */}
      <div className="flex justify-between items-center p-6">
        {/* Progress indicator - centered */}
        <div className="flex-1 flex justify-center">
          <img 
            src="/assets/stepper-couple-your-info.svg" 
            alt="Step 1 of 2: Your Info" 
            className="h-16 object-contain"
          />
        </div>

        {/* Close button */}
        <button
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-md mx-auto w-full">
        <h1 className="text-2xl font-semibold text-[#47567B] mb-2 text-center" style={{ fontFamily: 'Literata, serif' }}>
          Let's get to know each other
        </h1>
        <p className="text-sm text-[#47567B] mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          All fields are required.
        </p>

        <div className="space-y-4 w-full">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              First name
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              placeholder="First name"
              className="w-full h-10 px-3 text-sm text-[#47567B] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Last name
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              placeholder="Last name"
              className="w-full h-10 px-3 text-sm text-[#47567B] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          {/* Partner's First Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Partner's first name
            </label>
            <input
              type="text"
              value={formData.partnerFirstName}
              onChange={(e) => handleInputChange('partnerFirstName', e.target.value)}
              placeholder="Partner's first name"
              className="w-full h-10 px-3 text-sm text-[#47567B] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          {/* Partner's Last Name */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Partner's last name
            </label>
            <input
              type="text"
              value={formData.partnerLastName}
              onChange={(e) => handleInputChange('partnerLastName', e.target.value)}
              placeholder="Partner's last name"
              className="w-full h-10 px-3 text-sm text-[#47567B] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
          </div>

          {/* Where are you getting married? */}
          <div>
            <label className="block text-sm font-medium text-[#47567B] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Where are you getting married?
            </label>
            <input
              ref={cityInputRef}
              type="text"
              value={`${formData.city}${formData.state ? ', ' + formData.state : ''}`}
              onChange={(e) => {
                const value = e.target.value;
                // Parse the input to separate city and state
                const parts = value.split(', ');
                const city = parts[0] || '';
                const state = parts[1] || '';
                setFormData(prev => ({
                  ...prev,
                  city: city,
                  state: state
                }));
              }}
              placeholder="Start typing your wedding location..."
              autoComplete="off"
              className="w-full h-10 px-3 text-sm text-[#47567B] placeholder:text-[#667593] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
            />
            <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              💡 Start typing and select from Google suggestions for accurate location
            </p>
          </div>

          {/* Date Checkbox and Field */}
          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={formData.hasDate}
                onChange={(e) => handleInputChange('hasDate', e.target.checked)}
                className="w-4 h-4 text-[#47567B] border-[#8c97ac] rounded focus:ring-[#2f7685] focus:ring-2"
              />
              <span className="text-sm font-medium text-[#47567B]" style={{ fontFamily: 'Montserrat, sans-serif' }}>We have a date</span>
            </label>
            
            {formData.hasDate && (
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#47567B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <input
                  type="date"
                  value={formData.weddingDate}
                  onChange={(e) => handleInputChange('weddingDate', e.target.value)}
                  className="flex-1 h-10 px-3 text-sm text-[#47567B] bg-white border border-[#8c97ac] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-[#2f7685]"
                />
              </div>
            )}
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
          disabled={!isFormValid()}
          className="px-8 py-3 rounded-full font-medium bg-[#2f7685] hover:bg-[#1e6b7a] text-white transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
