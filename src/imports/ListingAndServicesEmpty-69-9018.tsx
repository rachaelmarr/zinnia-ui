import svgPaths from "./svg-3pfkk9wkna";
import VendorLeftNav from "../components/VendorLeftNav";
import GlobalHeader from "../components/GlobalHeader";
import { useState } from "react";

interface ListingAndServicesEmptyProps {
  onNavigate?: (view: string) => void;
}





function Layer1() {
  return (
    <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 143">
        <g id="Layer_1">
          <path d={svgPaths.p5e03900} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[17.84%_11.74%_10.73%_7.99%]">
      <Layer1 />
    </div>
  );
}

function Illustration() {
  return (
    <div
      className="relative overflow-clip size-[200px] mx-auto mb-8"
      data-name="Illustration"
    >
      <Group1 />
    </div>
  );
}

function BaseButton({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <button
      className="bg-[#667493] box-border content-stretch flex gap-2 items-center justify-center overflow-clip px-3 py-2 relative rounded-3xl shrink-0 cursor-pointer hover:bg-[#5a6785] transition-colors border-none"
      data-name=".Base - Button"
      onClick={() => onNavigate?.('createListing')}
    >
      <span className="button-text text-white">
        Create listing
      </span>
    </button>
  );
}

function EmptyState({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
      <div className="max-w-[470px] text-center">
        <Illustration />
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
            Create your listing
          </h1>
          <p className="text-[14px] leading-[1.5] tracking-[0.28px] mb-6 text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let couples know who you are, what you offer, and how to get in touch. Your listing is the first step to getting booked on Zinnia.
          </p>
        </div>
        <div className="flex justify-center">
          <BaseButton onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

export default function ListingAndServicesEmpty({ onNavigate }: ListingAndServicesEmptyProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#f0f5fa] relative min-h-screen">
      {/* Mobile View */}
      <div className="lg:hidden">
        <GlobalHeader onNavigate={onNavigate} onOpenMobileMenu={handleOpenMobileMenu} profilePhotos={[]} />
        <EmptyState onNavigate={onNavigate} />
        <VendorLeftNav 
          onNavigate={onNavigate} 
          currentView="listings"
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={handleOpenMobileMenu}
          onCloseMobileMenu={handleCloseMobileMenu}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col min-h-screen">
        {/* Full-width Header */}
        <GlobalHeader onNavigate={onNavigate} onOpenMobileMenu={handleOpenMobileMenu} profilePhotos={[]} />
        
        {/* Content Area with Sidebar */}
        <div className="flex flex-1">
          {/* Desktop Left Navigation - Now uses VendorLeftNav's own width constraint */}
          <div className="bg-[#f0f5fa] flex-shrink-0">
            <VendorLeftNav onNavigate={onNavigate} currentView="listings" />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <EmptyState onNavigate={onNavigate} />
          </div>
        </div>
      </div>
    </div>
  );
}