import React, { useState } from "react";
import { X } from "lucide-react";
import svgPaths from "../imports/svg-2ehxk3jqwm";
import selectedSvgPaths from "../imports/svg-o7v90jecmg";
import Timeline from "../imports/Timeline-173-240";

interface AccountTypeSelectionProps {
  onNavigate: (view: string) => void;
  onNext: (accountType: string) => void;
  onCancel: () => void;
}

// Component for the couple illustration
function CoupleIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[261px] h-[261px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261 261">
        {(isSelected || isHovered) ? (
          <path d={selectedSvgPaths.p1de8e400} fill="#47567B" />
        ) : (
          <path d={svgPaths.p2e0def80} fill="#47567B" />
        )}
      </svg>
    </div>
  );
}

// Component for the vendor illustration
function VendorIllustration({ isSelected = false, isHovered = false }: { isSelected?: boolean; isHovered?: boolean }) {
  return (
    <div className="absolute left-[11.5px] top-2 w-[181px] h-[181px]">
      <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]">
        {(isSelected || isHovered) && (
          <div className="absolute inset-[52.31%_48.69%_21.43%_27.1%]">
            <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 48">
              <path d={selectedSvgPaths.p36183200} fill="#DC332E" />
            </svg>
          </div>
        )}
        <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 130">
          <path d={svgPaths.p3db2b480} fill="#47567B" />
        </svg>
      </div>
    </div>
  );
}

export default function AccountTypeSelection({ onNavigate, onNext, onCancel }: AccountTypeSelectionProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [hoveredType, setHoveredType] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedType) {
      onNext(selectedType);
    }
  };

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* Close button */}
      <button 
        onClick={onCancel}
        className="absolute top-6 right-6 z-10 p-2 text-[#47567b] hover:bg-gray-100 rounded-full transition-colors"
      >
        <X size={24} />
      </button>

      {/* Desktop layout */}
      <div className="hidden md:flex min-h-screen">
        {/* Left side - Timeline */}
        <div className="w-1/4 bg-neutral-50 flex items-center justify-center">
          <Timeline />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <h1 className="font-['Literata'] font-semibold text-2xl text-[#47567b] text-center leading-[1.5] max-w-[530.5px]">
              Are you signing up as a couple or vendor?
            </h1>
            <div className="font-['Montserrat'] font-normal text-sm text-[#47567b] leading-[1.5] tracking-[0.28px] text-center">
              <span>Already have an account? </span>
              <button 
                onClick={() => onNavigate('auth')}
                className="text-[#2e7684] underline hover:text-[#246b77] transition-colors"
              >
                Log in here
              </button>
            </div>
          </div>

          {/* Selection Cards */}
          <div className="flex gap-[61px] items-center justify-center">
            {/* Couple Card */}
            <button
              onClick={() => setSelectedType('couple')}
              onMouseEnter={() => setHoveredType('couple')}
              onMouseLeave={() => setHoveredType(null)}
              className="flex flex-col items-center gap-4 transition-all duration-200 touch-manipulation hover:scale-105 active:scale-95"
            >
              <div className={`bg-white relative rounded-full w-[203px] h-[203px] transition-all duration-200 ${
                selectedType === 'couple' 
                  ? 'border-[3px] border-[#47567b] shadow-lg' 
                  : hoveredType === 'couple'
                  ? 'border-[3px] border-[#ccd7e6]'
                  : 'border-[3px] border-[#ccd7e6]'
              }`}>
                <div className="overflow-hidden relative w-full h-full rounded-full">
                  <CoupleIllustration 
                    isSelected={selectedType === 'couple'} 
                    isHovered={hoveredType === 'couple'} 
                  />
                </div>
              </div>
              <div className="font-['Literata'] font-semibold text-xl text-[#47567b] leading-[1.5]">
                Couple
              </div>
            </button>

            {/* Vendor Card */}
            <button
              onClick={() => setSelectedType('vendor')}
              onMouseEnter={() => setHoveredType('vendor')}
              onMouseLeave={() => setHoveredType(null)}
              className="flex flex-col items-center gap-4 transition-all duration-200 touch-manipulation hover:scale-105 active:scale-95"
            >
              <div className={`bg-white relative rounded-full w-[203px] h-[203px] transition-all duration-200 ${
                selectedType === 'vendor' 
                  ? 'border-[3px] border-[#47567b] shadow-lg' 
                  : hoveredType === 'vendor'
                  ? 'border-[3px] border-[#ccd7e6]'
                  : 'border-[3px] border-[#ccd7e6]'
              }`}>
                <div className="overflow-hidden relative w-full h-full rounded-full">
                  <VendorIllustration 
                    isSelected={selectedType === 'vendor'} 
                    isHovered={hoveredType === 'vendor'} 
                  />
                </div>
              </div>
              <div className="font-['Literata'] font-semibold text-xl text-[#47567b] leading-[1.5]">
                Vendor
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Mobile Step Indicator */}
        <div className="pt-8 pb-4 px-4">
          <div className="font-['Literata'] font-light text-sm text-[#47567b] uppercase tracking-[0.28px] leading-[1.5] text-center">
            Step 1 of 4
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12">
            <h1 className="font-['Literata'] font-semibold text-xl text-[#47567b] text-center leading-[1.5] max-w-md">
              Are you signing up as a couple or vendor?
            </h1>
            <div className="font-['Montserrat'] font-normal text-sm text-[#47567b] leading-[1.5] tracking-[0.28px] text-center">
              <span>Already have an account? </span>
              <button 
                onClick={() => onNavigate('auth')}
                className="text-[#2e7684] underline hover:text-[#246b77] transition-colors"
              >
                Log in here
              </button>
            </div>
          </div>

          {/* Selection Cards */}
          <div className="flex flex-col gap-8 items-center justify-center">
            {/* Couple Card */}
            <button
              onClick={() => setSelectedType('couple')}
              onMouseEnter={() => setHoveredType('couple')}
              onMouseLeave={() => setHoveredType(null)}
              className="flex flex-col items-center gap-4 transition-all duration-200 touch-manipulation active:scale-95"
            >
              <div className={`bg-white relative rounded-full w-40 h-40 transition-all duration-200 ${
                selectedType === 'couple' 
                  ? 'border-[3px] border-[#47567b] shadow-lg' 
                  : 'border-[3px] border-[#ccd7e6]'
              }`}>
                <div className="overflow-hidden relative w-full h-full rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
                    <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 261 261">
                      <path d={selectedType === 'couple' ? selectedSvgPaths.p1de8e400 : svgPaths.p2e0def80} fill="#47567B" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="font-['Literata'] font-semibold text-lg text-[#47567b] leading-[1.5]">
                Couple
              </div>
            </button>

            {/* Vendor Card */}
            <button
              onClick={() => setSelectedType('vendor')}
              onMouseEnter={() => setHoveredType('vendor')}
              onMouseLeave={() => setHoveredType(null)}
              className="flex flex-col items-center gap-4 transition-all duration-200 touch-manipulation active:scale-95"
            >
              <div className={`bg-white relative rounded-full w-40 h-40 transition-all duration-200 ${
                selectedType === 'vendor' 
                  ? 'border-[3px] border-[#47567b] shadow-lg' 
                  : 'border-[3px] border-[#ccd7e6]'
              }`}>
                <div className="overflow-hidden relative w-full h-full rounded-full">
                  <div className="absolute left-[11.5px] top-2 w-[130px] h-[130px]">
                    <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]">
                      {selectedType === 'vendor' && (
                        <div className="absolute inset-[52.31%_48.69%_21.43%_27.1%]">
                          <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 48">
                            <path d={selectedSvgPaths.p36183200} fill="#DC332E" />
                          </svg>
                        </div>
                      )}
                      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 130">
                        <path d={svgPaths.p3db2b480} fill="#47567B" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="font-['Literata'] font-semibold text-lg text-[#47567b] leading-[1.5]">
                Vendor
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom action bar - Desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-neutral-50 px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={onCancel}
            className="font-['Montserrat'] font-medium text-sm text-[#47567b] tracking-[0.28px] leading-[1.5] px-3 py-2 rounded-[24px] hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedType}
            className={`font-['Montserrat'] font-medium text-sm tracking-[0.28px] leading-[1.5] px-3 py-2 rounded-[24px] w-[164px] transition-colors ${
              selectedType 
                ? 'bg-[#667493] text-white hover:bg-[#5a6280]' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Bottom action bar - Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-neutral-50 px-4 py-6 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onCancel}
            className="font-['Montserrat'] font-medium text-sm text-[#47567b] tracking-[0.28px] leading-[1.5] px-4 py-2 rounded-[24px] hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedType}
            className={`font-['Montserrat'] font-medium text-sm tracking-[0.28px] leading-[1.5] px-6 py-2 rounded-[24px] flex-1 max-w-[164px] transition-colors ${
              selectedType 
                ? 'bg-[#667493] text-white hover:bg-[#5a6280]' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}