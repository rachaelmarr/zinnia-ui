import React, { useState } from "react";
import { X } from "lucide-react";

interface UserTypeSelectionProps {
  onNavigate: (view: string) => void;
  onNext: (userType: 'couple' | 'vendor') => void;
  onCancel: () => void;
}

// Wedding ring illustration component
function WeddingRingIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  const imageSrc = isSelected || isHovered ? "/assets/couple-selected.svg" : "/assets/couple-default.svg";
  
  return (
    <img 
      src={imageSrc}
      alt="Wedding ring illustration"
      className="max-w-[100px] max-h-[100px] object-contain"
      onLoad={() => console.log('✅ Couple image loaded:', imageSrc)}
      onError={(e) => console.error('❌ Couple image failed to load:', imageSrc, e)}
    />
  );
}

// Storefront illustration component
function StorefrontIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  const imageSrc = isSelected || isHovered ? "/assets/vendor-selected.svg" : "/assets/vendor-default.svg";
  
  return (
    <img 
      src={imageSrc}
      alt="Storefront illustration"
      className="max-w-[100px] max-h-[100px] object-contain"
      onLoad={() => console.log('✅ Vendor image loaded:', imageSrc)}
      onError={(e) => console.error('❌ Vendor image failed to load:', imageSrc, e)}
    />
  );
}

export default function UserTypeSelection({ onNavigate, onNext, onCancel }: UserTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<'couple' | 'vendor' | null>(null);
  const [hoveredType, setHoveredType] = useState<'couple' | 'vendor' | null>(null);

  const handleNext = () => {
    if (selectedType) {
      onNext(selectedType);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <div className="flex-1"></div>
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-xl text-[#47567b]" style={{ fontFamily: 'Literata, serif' }}>
            How are you signing up?
          </h1>
        </div>
        <div className="flex-1 flex justify-end">
          <button
            onClick={onCancel}
            className="p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>

      {/* Login Link */}
      <div className="text-center py-4">
        <span className="font-normal text-sm text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Already have an account?{" "}
        </span>
        <button
          onClick={() => onNavigate('auth')}
          className="font-normal text-sm text-[#2e7684] hover:underline"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Log in here
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="flex gap-12 items-center justify-center max-w-2xl w-full">
          {/* Couple Option */}
          <button
            onClick={() => setSelectedType('couple')}
            onMouseEnter={() => setHoveredType('couple')}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex flex-col items-center gap-4 transition-all duration-200 ${
              selectedType === 'couple' 
                ? 'scale-105' 
                : hoveredType === 'couple'
                ? 'scale-102'
                : ''
            }`}
          >
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative -mt-2">
                  <WeddingRingIllustration 
                    isSelected={selectedType === 'couple'} 
                    isHovered={hoveredType === 'couple'} 
                  />
                </div>
              </div>
            </div>
            <div className={`font-semibold text-lg transition-colors duration-200 pt-5 ${
              selectedType === 'couple' || hoveredType === 'couple'
                ? 'text-[#2f7685]'
                : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Literata, serif' }}>
              I'm getting married
            </div>
          </button>

          {/* Vendor Option */}
          <button
            onClick={() => setSelectedType('vendor')}
            onMouseEnter={() => setHoveredType('vendor')}
            onMouseLeave={() => setHoveredType(null)}
            className={`flex flex-col items-center gap-4 transition-all duration-200 ${
              selectedType === 'vendor' 
                ? 'scale-105' 
                : hoveredType === 'vendor'
                ? 'scale-102'
                : ''
            }`}
          >
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">
              <div className="flex items-center justify-center w-full h-full">
                <div className="relative -mt-1">
                  <StorefrontIllustration 
                    isSelected={selectedType === 'vendor'} 
                    isHovered={hoveredType === 'vendor'} 
                  />
                </div>
              </div>
            </div>
            <div className={`font-semibold text-lg transition-colors duration-200 pt-5 ${
              selectedType === 'vendor' || hoveredType === 'vendor'
                ? 'text-[#2f7685]'
                : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Literata, serif' }}>
              I have a business and want to list services
            </div>
          </button>
        </div>
      </div>

      {/* Footer with navigation buttons */}
      <div className="p-6 flex justify-end space-x-4">
        <button
          onClick={onCancel}
          className="px-6 py-3 text-[#6b7280] hover:text-[#374151] transition-colors"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Cancel
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedType}
          className={`px-8 py-3 rounded-full font-medium transition-colors ${
            selectedType
              ? 'bg-[#2f7685] hover:bg-[#1e6b7a] text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
