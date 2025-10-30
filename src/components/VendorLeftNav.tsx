import React, { useState } from "react";
import svgPaths from "../imports/svg-3pfkk9wkna";
import contactsSvgPaths from "../imports/svg-rrkjzphkty";
import { Menu, X, Calendar } from "lucide-react";

interface VendorLeftNavProps {
  onNavigate?: (view: string) => void;
  currentView?: string;
  isMobileMenuOpen?: boolean;
  onOpenMobileMenu?: () => void;
  onCloseMobileMenu?: () => void;
}

// Navigation items configuration
const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'home',
    svgPath: svgPaths.p2d4f9980,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Dashboard clicked in mobile menu');
      onNavigate?.('dashboard');
    }
  },
  {
    id: 'calendar',
    label: 'Calendar',
    icon: 'calendar',
    iconType: 'calendar',
    svgPath: svgPaths.p2d4f9980, // Fallback for SVG
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Calendar clicked in mobile menu');
      onNavigate?.('calendar');
    }
  },
  {
    id: 'contacts',
    label: 'Contacts',
    icon: 'user-group',
    svgPath: contactsSvgPaths.p19860600,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Contacts clicked in mobile menu');
      onNavigate?.('contacts');
    }
  },
  {
    id: 'listings',
    label: 'My Listing & Services',
    icon: 'clipboard-list',
    svgPath: svgPaths.p5d88c0,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Listings clicked in mobile menu');
      onNavigate?.('listings');
    }
  },
  {
    id: 'invoices',
    label: 'Invoices',
    icon: 'currency-dollar',
    svgPath: svgPaths.p12005030,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Invoices clicked in mobile menu');
      onNavigate?.('billing');
    }
  },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'chat-alt',
    svgPath: svgPaths.pf3bce40,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Messages clicked - navigating to messages');
      onNavigate?.('messages');
    }
  },
  {
    id: 'account',
    label: 'My Account',
    icon: 'user-circle',
    svgPath: svgPaths.p12005030,
    onClick: (onNavigate?: (view: string) => void) => {
      console.log('📱 Account clicked in mobile menu');
      onNavigate?.('myAccount');
    }
  }
];

function NavIcon({ svgPath, isActive, iconType }: { svgPath?: string; isActive?: boolean; iconType?: string }) {
  const iconColor = isActive ? "#F5F5F5" : "#47567B";
  
  if (iconType === 'calendar') {
    return (
      <div className="relative shrink-0 size-5">
        <Calendar 
          size={16} 
          color={iconColor}
          strokeWidth={1.5}
        />
      </div>
    );
  }
  
  return (
    <div className="relative shrink-0 size-5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g>
          <path
            d={svgPath}
            stroke={iconColor}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function NavItem({ 
  item, 
  onNavigate, 
  isActive, 
  onItemClick 
}: { 
  item: typeof navItems[0]; 
  onNavigate?: (view: string) => void; 
  isActive?: boolean;
  onItemClick?: () => void;
}) {
  const handleClick = () => {
    item.onClick(onNavigate);
    onItemClick?.(); // Close mobile menu when item is clicked
  };

  return (
    <div className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className={`basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0 cursor-pointer transition-colors ${
          isActive 
            ? 'bg-[#2f7685]' 
            : 'bg-[rgba(47,118,133,0)] hover:bg-gray-50'
        }`}
        onClick={handleClick}
      >
        <div className="relative size-full">
          <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
            <NavIcon svgPath={item.svgPath} isActive={isActive} iconType={item.iconType} />
            <div className={`basis-0 font-medium grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] tracking-[0.28px] ${
              isActive ? 'text-neutral-100' : 'text-[#47567b]'
            }`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <p className="block leading-[1.5]">{item.label}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopSidebar({ onNavigate, currentView }: { onNavigate?: (view: string) => void; currentView?: string }) {
  return (
    <div className="hidden lg:block w-[210px] pt-6 px-4">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        {navItems.map((item) => (
          <NavItem
            key={item.id}
            item={item}
            onNavigate={onNavigate}
            isActive={
              currentView === item.id || 
              (item.id === 'invoices' && currentView === 'billing') ||
              (item.id === 'account' && currentView === 'myAccount')
            }
          />
        ))}
      </div>
    </div>
  );
}

function MobileMenu({ 
  isOpen, 
  onClose, 
  onNavigate, 
  currentView 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onNavigate?: (view: string) => void; 
  currentView?: string;
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />
      
      {/* Menu */}
      <div className="lg:hidden fixed left-0 top-0 h-full w-[375px] bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="h-6 w-[143px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
                <g clipPath="url(#clip0_69_2112)">
                  <path d={svgPaths.p34ba2900} fill="var(--fill-0, #47567B)" />
                </g>
                <defs>
                  <clipPath id="clip0_69_2112">
                    <rect fill="white" height="24" width="143" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation */}
          <div className="flex-1 px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  onNavigate={onNavigate}
                  isActive={
                    currentView === item.id || 
                    (item.id === 'invoices' && currentView === 'billing') ||
                    (item.id === 'account' && currentView === 'myAccount')
                  }
                  onItemClick={onClose}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the hamburger menu button component for use in headers
export function MobileMenuButton({ onClick }: { onClick: () => void }) {
  const handleClick = () => {
    console.log('🍔 Hamburger menu button clicked!');
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className="lg:hidden p-2 rounded-md text-[#47567B] hover:bg-gray-100 transition-colors"
      aria-label="Open navigation menu"
    >
      <Menu size={24} />
    </button>
  );
}

export default function VendorLeftNav({ 
  onNavigate, 
  currentView,
  isMobileMenuOpen = false,
  onOpenMobileMenu,
  onCloseMobileMenu
}: VendorLeftNavProps) {
  const [internalMobileMenuOpen, setInternalMobileMenuOpen] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isMenuOpen = onOpenMobileMenu ? isMobileMenuOpen : internalMobileMenuOpen;
  const handleOpenMenu = onOpenMobileMenu || (() => setInternalMobileMenuOpen(true));
  const handleCloseMenu = onCloseMobileMenu || (() => setInternalMobileMenuOpen(false));

  return (
    <>
      {/* Desktop Sidebar */}
      <DesktopSidebar onNavigate={onNavigate} currentView={currentView} />
      
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        onNavigate={onNavigate}
        currentView={currentView}
      />
    </>
  );
}