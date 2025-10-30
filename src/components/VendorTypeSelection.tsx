import React, { useState } from "react";
import { X } from "lucide-react";
import VendorProgressIndicator from "./VendorProgressIndicator";

interface VendorTypeSelectionProps {
  onNavigate: (view: string) => void;
  onNext: (vendorType: 'florist' | 'photographer' | 'venue') => void;
  onBack: () => void;
  onCancel: () => void;
}

// Florist illustration component
function FloristIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  const imageSrc = isSelected || isHovered ? "/assets/florist-selected.svg" : "/assets/florist-default.svg";
  
  return (
    <img 
      src={imageSrc}
      alt="Florist illustration"
      className="max-w-[100px] max-h-[100px] object-contain"
      onLoad={() => console.log('✅ Florist image loaded:', imageSrc)}
      onError={(e) => console.error('❌ Florist image failed to load:', imageSrc, e)}
    />
  );
}

// Photographer illustration component
function PhotographerIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  const imageSrc = isSelected || isHovered ? "/assets/photographer-selected.svg" : "/assets/photographer-default.svg";
  
  return (
    <img 
      src={imageSrc}
      alt="Photographer illustration"
      className="max-w-[100px] max-h-[100px] object-contain"
      onLoad={() => console.log('✅ Photographer image loaded:', imageSrc)}
      onError={(e) => console.error('❌ Photographer image failed to load:', imageSrc, e)}
    />
  );
}

// Venue illustration component
function VenueIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  const imageSrc = isSelected || isHovered ? "/assets/venue-selected.svg" : "/assets/venue-default.svg";
  
  return (
    <img 
      src={imageSrc}
      alt="Venue illustration"
      className="max-w-[100px] max-h-[100px] object-contain"
      onLoad={() => console.log('✅ Venue image loaded:', imageSrc)}
      onError={(e) => console.error('❌ Venue image failed to load:', imageSrc, e)}
    />
  );
}

export default function VendorTypeSelection({ onNavigate, onNext, onBack, onCancel }: VendorTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<'florist' | 'photographer' | 'venue' | null>(null);
  const [hoveredType, setHoveredType] = useState<'florist' | 'photographer' | 'venue' | null>(null);

  const handleNext = () => {
    if (selectedType) {
      onNext(selectedType);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with progress indicator */}
      <div className="flex justify-between items-center p-6">
        {/* Progress indicator - centered */}
        <div className="flex-1 flex justify-center">
          <VendorProgressIndicator currentStep={1} />
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
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1 className="text-2xl font-semibold text-[#1f2937] mb-4 text-center" style={{ fontFamily: 'Literata, serif' }}>
          What type of vendor are you?
        </h1>

        {/* Login link */}
        <p className="text-sm text-[#6b7280] mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Already have an account?{" "}
          <button
            onClick={() => onNavigate('auth')}
            className="text-[#2f7685] underline hover:text-[#1e6b7a] transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Log in here
          </button>
        </p>

        {/* Vendor type selection */}
        <div className="flex flex-col sm:flex-row gap-8 mb-12">
          {/* Florist */}
          <button
            onClick={() => setSelectedType('florist')}
            onMouseEnter={() => setHoveredType('florist')}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex flex-col items-center space-y-4 p-6 rounded-2xl transition-all duration-200 ${
              selectedType === 'florist' || hoveredType === 'florist'
                ? 'scale-102'
                : ''
            }`}
          >
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative">
                  <FloristIllustration 
                    isSelected={selectedType === 'florist'} 
                    isHovered={hoveredType === 'florist'} 
                  />
                </div>
              </div>
            </div>
            <div className={`font-semibold text-lg transition-colors duration-200 pt-5 ${
              selectedType === 'florist' || hoveredType === 'florist'
                ? 'text-[#2f7685]'
                : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Literata, serif' }}>
              Florist
            </div>
          </button>

          {/* Photographer */}
          <button
            onClick={() => setSelectedType('photographer')}
            onMouseEnter={() => setHoveredType('photographer')}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex flex-col items-center space-y-4 p-6 rounded-2xl transition-all duration-200 ${
              selectedType === 'photographer' || hoveredType === 'photographer'
                ? 'scale-102'
                : ''
            }`}
          >
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative">
                  <PhotographerIllustration 
                    isSelected={selectedType === 'photographer'} 
                    isHovered={hoveredType === 'photographer'} 
                  />
                </div>
              </div>
            </div>
            <div className={`font-semibold text-lg transition-colors duration-200 pt-5 ${
              selectedType === 'photographer' || hoveredType === 'photographer'
                ? 'text-[#2f7685]'
                : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Literata, serif' }}>
              Photographer
            </div>
          </button>

          {/* Venue */}
          <button
            onClick={() => setSelectedType('venue')}
            onMouseEnter={() => setHoveredType('venue')}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex flex-col items-center space-y-4 p-6 rounded-2xl transition-all duration-200 ${
              selectedType === 'venue' || hoveredType === 'venue'
                ? 'scale-102'
                : ''
            }`}
          >
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative">
                  <VenueIllustration 
                    isSelected={selectedType === 'venue'} 
                    isHovered={hoveredType === 'venue'} 
                  />
                </div>
              </div>
            </div>
            <div className={`font-semibold text-lg transition-colors duration-200 pt-5 ${
              selectedType === 'venue' || hoveredType === 'venue'
                ? 'text-[#2f7685]'
                : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Literata, serif' }}>
              Venue
            </div>
          </button>
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
          disabled={!selectedType}
          className={`px-8 py-3 rounded-full font-medium transition-colors ${
            selectedType
              ? 'bg-[#2f7685] hover:bg-[#1e6b7a] text-white'
              : 'bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}