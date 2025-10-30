import svgPaths from "./svg-dikrbbzu8d";
import desktopSvgPaths from "./svg-ma03ownp04";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import BottomNav from "../components/BottomNav";
import VendorLeftNav, { MobileMenuButton } from "../components/VendorLeftNav";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";

interface VendorDashboardProps {
  onNavigate?: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
}

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_57_4197)" id="Logo">
          <path d={svgPaths.p33289800} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_57_4197">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function UserCircle({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const { signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserCircleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      console.log('🚨 LOGOUT CLICKED: User explicitly clicked logout button');
      await signOut();
      setIsDropdownOpen(false);
      onNavigate?.('auth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="relative shrink-0 size-[39px] cursor-pointer hover:opacity-80 transition-opacity" 
        data-name="user-circle"
        onClick={handleUserCircleClick}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
          <g id="user-circle">
            <path
              d={svgPaths.p221cbb00}
              id="Vector"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
      
      {isDropdownOpen && (
        <div className="absolute right-0 top-[45px] z-50 bg-white border border-[#ccd7e6] rounded-lg shadow-lg min-w-[120px] py-1">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 text-left text-[#47567b] text-[14px] font-['Montserrat:Medium',_sans-serif] font-medium hover:bg-[#f8f9fa] transition-colors cursor-pointer border-none bg-transparent"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

function Header({ 
  onNavigate, 
  onOpenMobileMenu 
}: { 
  onNavigate?: (view: string) => void;
  onOpenMobileMenu?: () => void;
}) {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex h-[76px] items-center justify-between px-4 py-5 relative shrink-0 w-full"
      data-name="Header"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0">
        <MobileMenuButton onClick={onOpenMobileMenu || (() => {})} />
        <Logo />
      </div>
      <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0 size-10">
        <UserCircle onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function GroupSetupstepsCollapsed({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const vendorName = "Ted Lasso";

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2.5 items-center justify-start overflow-clip px-4 lg:px-6 py-4 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full max-w-none lg:max-w-[640px] mx-auto">
        {/* Welcome Section */}
        <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
          <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#667593] text-[14px] text-center tracking-[0.28px] w-full">
            <p className="block leading-[1.5]">Welcome {vendorName}!</p>
          </div>
          
          <div className="box-border content-stretch flex gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full">
            <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[24px] lg:text-[32px] text-center w-full">
              <p className="block leading-[1.2]">0/4 steps done</p>
            </div>
          </div>
          
          <div className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px]">
              <p className="block leading-[1.5]">Once your profile is complete customers can book you.</p>
            </div>
          </div>
        </div>

        {/* Setup Steps - Conditionally Rendered */}
        {isExpanded && (
          <div className="w-full space-y-4">
            {/* Create Listing Step */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-full mb-2">
                <p className="block leading-[1.5]">Create your listing</p>
              </div>
              <div className="box-border content-stretch flex gap-3 items-center justify-between p-0 relative shrink-0 w-full">
                <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] flex-1">
                  <p className="block leading-[1.5]">Create your listing and add services</p>
                </div>
                <button
                  onClick={() => onNavigate?.('listings')}
                  className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 hover:bg-[#5a6584] transition-colors"
                >
                  <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                    <p className="block leading-[1.5] whitespace-pre">Create listing</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Bank Info Step */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] mb-2">
                <p className="block leading-[1.5]">Bank account information</p>
              </div>
              <div className="box-border content-stretch flex gap-3 items-center justify-between p-0 relative shrink-0 w-full">
                <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] flex-1">
                  <p className="block leading-[1.5]">We'll use stripe to verify your information</p>
                </div>
                <button className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 hover:bg-[#5a6584] transition-colors">
                  <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                    <p className="block leading-[1.5] whitespace-pre">Add Bank Info</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Availability Step */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] mb-2">
                <p className="block leading-[1.5]">Set availability</p>
              </div>
              <div className="box-border content-stretch flex gap-3 items-center justify-between p-0 relative shrink-0 w-full">
                <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] flex-1">
                  <p className="block leading-[1.5]">Set your availability so people can book you.</p>
                </div>
                <button 
                  onClick={() => onNavigate?.('calendar')}
                  className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 hover:bg-[#5a6584] transition-colors"
                >
                  <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                    <p className="block leading-[1.5] whitespace-pre">Set availability</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Bio Step */}
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="font-['Literata:ExtraBold',_sans-serif] font-extrabold leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] mb-2">
                <p className="block leading-[1.5]">Finalize your bio</p>
              </div>
              <div className="box-border content-stretch flex gap-3 items-center justify-between p-0 relative shrink-0 w-full">
                <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] flex-1">
                  <p className="block leading-[1.5]">Finalize your listing bio</p>
                </div>
                <button className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 hover:bg-[#5a6584] transition-colors">
                  <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
                    <p className="block leading-[1.5] whitespace-pre">Update Bio</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Expand/Collapse Button */}
        <div 
          className="flex items-center justify-center relative shrink-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
          onClick={toggleExpanded}
        >
          <div className={`flex-none transition-transform ${isExpanded ? 'rotate-0' : 'rotate-[180deg]'}`}>
            <div className="relative size-6" data-name="chevron-down">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="chevron-down">
                  <path
                    d="M19 9L12 16L5 9"
                    id="Vector"
                    stroke="var(--stroke-0, #47567B)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simplified versions of the other components for brevity
function GroupCalendar({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const currentMonth = "December 2024";
  
  return (
    <div className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-4 lg:gap-6 items-center justify-start overflow-clip px-4 lg:px-6 py-6 lg:py-8 relative shrink-0 w-full">
      <div className="w-full max-w-none lg:max-w-[640px] mx-auto">
        <div className="box-border content-stretch flex gap-6 items-center justify-start p-0 relative shrink-0 w-full mb-4">
          <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[20px] lg:text-[24px] text-center">
            <p className="block leading-[1.5]">My Calendar</p>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] h-auto lg:h-[340px] relative rounded-[11.669px] shrink-0 w-full max-w-[321px] lg:max-w-[600px] mx-auto">
        <div className="h-full overflow-clip relative w-full p-4 lg:p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[16px] lg:text-[18px] text-center">
              <p className="block leading-[1.5]">{currentMonth}</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => onNavigate?.('calendar')}
              className="relative rounded-3xl shrink-0 border border-[#8c97ac] border-solid hover:bg-[#f8f9fa] transition-colors"
            >
              <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                  <p className="block leading-[1.5] whitespace-pre">Manage Availability</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupMyservices({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-6 lg:gap-8 items-center justify-start overflow-clip px-4 lg:px-6 py-5 lg:py-8 relative rounded-[20px] shrink-0 w-full max-w-[312px] lg:max-w-[600px] mx-auto">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
        <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] lg:text-[24px] text-center">
          <p className="block leading-[1.5]">My services</p>
        </div>
        <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px]">
          <p className="block leading-[1.5] whitespace-pre">0 services listed | 0 views this month</p>
        </div>
      </div>

      <button 
        onClick={() => onNavigate?.('listings')}
        className="box-border content-stretch flex h-9 items-center justify-center p-0 relative shrink-0"
      >
        <div className="relative rounded-3xl shrink-0 border border-[#8c97ac] border-solid hover:bg-[#f8f9fa] transition-colors">
          <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
            <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
              <p className="block leading-[1.5] whitespace-pre">Manage My Services</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function GroupBookings() {
  return (
    <div className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-6 lg:gap-10 items-center justify-start p-5 lg:p-8 relative shrink-0 w-full">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] lg:text-[24px] text-center">
        <p className="block leading-[1.5]">New Bookings</p>
      </div>
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[18px] lg:text-[20px] text-center w-full">
        <p className="block leading-[1.5]">You'll see new bookings here once clients reach out.</p>
      </div>
    </div>
  );
}

function Earnings() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-6 lg:gap-8 items-center justify-center p-4 lg:p-8 relative shrink-0 w-full">
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#2e7684] text-[20px] lg:text-[24px] text-center">
        <p className="block leading-[1.5]">Earnings</p>
      </div>
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[28px] lg:text-[32px] text-center">
        <p className="block leading-[1.5]">$0 this month</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] text-[#47567b] text-[14px] lg:text-[16px] text-center tracking-[0.28px] max-w-[300px] lg:max-w-[400px]">
        <p className="block leading-[1.5]">
          Your earnings will show up here after your first payment.
        </p>
      </div>
    </div>
  );
}

export default function VendorDashboard({ onNavigate, hasCompletedListing, hasVisitedCalendar, currentView }: VendorDashboardProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    console.log('🔄 Opening mobile menu - Dashboard');
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    console.log('❌ Closing mobile menu - Dashboard');
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-[#f0f5fa] relative min-h-screen">
      {/* Mobile View */}
      <div className="lg:hidden">
        <Header onNavigate={onNavigate} onOpenMobileMenu={handleOpenMobileMenu} />
        <GroupSetupstepsCollapsed onNavigate={onNavigate} />
        <GroupCalendar onNavigate={onNavigate} />
        <GroupMyservices onNavigate={onNavigate} />
        <GroupBookings />
        <Earnings />
        <BottomNav onNavigate={onNavigate} />
        <VendorLeftNav 
          onNavigate={onNavigate} 
          currentView="dashboard"
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={handleOpenMobileMenu}
          onCloseMobileMenu={handleCloseMobileMenu}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col min-h-screen">
        {/* Full-width Header */}
        <Header onNavigate={onNavigate} />
        
        {/* Content Area with Sidebar */}
        <div className="flex flex-1">
          {/* Desktop Left Navigation - Now uses VendorLeftNav's own width constraint */}
          <div className="bg-[#f0f5fa] flex-shrink-0">
            <VendorLeftNav onNavigate={onNavigate} currentView="dashboard" />
          </div>
          
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <GroupSetupstepsCollapsed onNavigate={onNavigate} />
            <GroupCalendar onNavigate={onNavigate} />
            <GroupMyservices onNavigate={onNavigate} />
            <GroupBookings />
            <Earnings />
          </div>
        </div>
      </div>
    </div>
  );
}