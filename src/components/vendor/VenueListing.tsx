import React, { useState } from 'react';
import GlobalHeader from '../GlobalHeader';
import VendorLeftNav from '../VendorLeftNav';
// ResponsiveContainer is defined inline in AppRoutes
import ListingsPage from '../ListingsPage';

interface VenueListingProps {
  onNavigate: (view: string) => void;
  profilePhotos?: any;
}

export default function VenueListing({ onNavigate, profilePhotos }: VenueListingProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle venue-specific navigation
  const handleVendorNavigate = (view: string) => {
    if (view === 'createListing') {
      onNavigate('venueCreateListing');
    } else if (view === 'listings') {
      onNavigate('venueListings');
    } else {
      onNavigate(view);
    }
  };

  return (
    <div className="bg-[#f0f5fa] relative min-h-screen">
        {/* Mobile View */}
        <div className="lg:hidden">
          <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={onNavigate} profilePhotos={profilePhotos} />
          <ListingsPage onNavigate={handleVendorNavigate} currentView="createListing" />
          <VendorLeftNav 
            onNavigate={handleVendorNavigate} 
            currentView="listings"
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={handleOpenMobileMenu}
            onCloseMobileMenu={handleCloseMobileMenu}
          />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex lg:flex-col min-h-screen">
          {/* Full-width Header */}
          <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={onNavigate} profilePhotos={profilePhotos} />
          
          {/* Content Area with Sidebar */}
          <div className="flex flex-1">
            {/* Desktop Left Navigation */}
            <div className="bg-[#f0f5fa] flex-shrink-0">
              <VendorLeftNav onNavigate={handleVendorNavigate} currentView="listings" />
            </div>
            
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <ListingsPage onNavigate={handleVendorNavigate} currentView="createListing" />
            </div>
          </div>
        </div>
      </div>
  );
}
