import React, { useState } from 'react';
import GlobalHeader from '../GlobalHeader';
import VendorLeftNav from '../VendorLeftNav';
import ListingAndServicesEmpty from '../../imports/ListingAndServicesEmpty-69-9018';

type VendorType = 'venue' | 'florist' | 'photographer';

interface UnifiedVendorDashboardProps {
  onNavigate: (view: string) => void;
  profilePhotos?: any;
  currentView?: string;
  vendorType: VendorType;
}

export default function UnifiedVendorDashboard({ 
  onNavigate, 
  profilePhotos, 
  currentView = 'dashboard',
  vendorType 
}: UnifiedVendorDashboardProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle vendor-specific navigation based on vendorType
  const handleVendorNavigate = (view: string) => {
    if (view === 'listings') {
      onNavigate(`${vendorType}Listings`);
    } else if (view === 'createListing') {
      onNavigate(`${vendorType}CreateListing`);
    } else {
      onNavigate(view);
    }
  };

  // Get the listings view name based on vendor type
  const getListingsView = () => {
    return `${vendorType}Listings`;
  };

  // Render the appropriate view based on currentView
  const renderCurrentView = () => {
    const listingsView = getListingsView();
    
    switch (currentView) {
      case listingsView:
        return <ListingAndServicesEmpty onNavigate={handleVendorNavigate} />;
      case `${vendorType}CreateListing`:
        // This will be handled by the main AppRoutes
        return null;
      default:
        return (
          <div className="bg-[#f0f5fa] relative min-h-screen">
            {/* Mobile View */}
            <div className="lg:hidden">
              <ListingAndServicesEmpty onNavigate={handleVendorNavigate} />
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
                  <ListingAndServicesEmpty onNavigate={handleVendorNavigate} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return renderCurrentView();
}












