import svgPaths from "./svg-8yng8agohe";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import { useState } from "react";

function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path
            d={svgPaths.p3a2fce80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-6" data-name="bell">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="bell">
          <path
            d={svgPaths.pe392c80}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="flex flex-row gap-4 items-center" data-name="Action Icons">
      <ChatAlt2 />
      <Bell />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10 rounded-full overflow-hidden" data-name="Avatar">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat"
        data-name="Webex_Avatar_Molly"
        style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }}
      />
    </div>
  );
}

function RightContent() {
  return (
    <div className="flex flex-row gap-6 items-center ml-auto" data-name=".Right Content">
      <ActionIcons />
      <Avatar />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-6 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_51_26369)" id="Logo">
          <path d={svgPaths.p6d47c00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_51_26369">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// Mobile Menu Button
function MobileMenuButton({ onClick, isOpen }: { onClick: () => void; isOpen: boolean }) {
  return (
    <button 
      onClick={onClick}
      className="lg:hidden flex items-center justify-center w-8 h-8 text-[#47567b]"
    >
      {isOpen ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  );
}

function BaseGlobalHeaderDefault({ onMenuClick, isMenuOpen }: { onMenuClick: () => void; isMenuOpen: boolean }) {
  return (
    <div className="bg-white h-[72px] w-full border-b border-gray-100" data-name=".BASE - Global Header/Default">
      <div className="flex items-center h-full px-4 lg:px-10 py-4">
        <MobileMenuButton onClick={onMenuClick} isOpen={isMenuOpen} />
        <Logo />
        <RightContent />
      </div>
    </div>
  );
}

// Calendar Day Component
function CalendarDay({ date, isSelected = false, hasBooking = false }: { date: string; isSelected?: boolean; hasBooking?: boolean }) {
  const baseClasses = "h-[55px] w-[55px] bg-white border-[0.5px] border-white flex items-center justify-center";
  const selectedClasses = isSelected ? "rounded-full border-[#47567b]" : "";
  const bookingClasses = hasBooking ? "rounded-full" : "";
  
  return (
    <div className={`${baseClasses} ${selectedClasses} ${bookingClasses}`}>
      <span className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#47567b] text-center">
        {date}
      </span>
    </div>
  );
}

// Calendar Week Component  
function CalendarWeek({ dates, selectedDate, bookingDates = [] }: { dates: string[], selectedDate?: string, bookingDates?: string[] }) {
  return (
    <div className="flex">
      {dates.map((date, index) => (
        <CalendarDay 
          key={index}
          date={date} 
          isSelected={date === selectedDate}
          hasBooking={bookingDates.includes(date)}
        />
      ))}
    </div>
  );
}

// Enhanced Mobile-Responsive Sidebar Navigation
function SidebarNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navItems = [
    { icon: svgPaths.p2d4f9980, label: "Dashboard", active: true },
    { icon: svgPaths.p111ed900, label: "Calendar", active: false },
    { icon: svgPaths.p5d88c0, label: "My Listing & Services", active: false },
    { icon: svgPaths.p12005030, label: "Invoices", active: false },
    { icon: svgPaths.pf3bce40, label: "Messages", active: false },
    { icon: svgPaths.p1de73df0, label: "My Account", active: false },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[210px] bg-transparent">
        <nav className="space-y-2 pt-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm ${
                item.active 
                  ? 'bg-[#2e7684] text-white' 
                  : 'text-[#47567b] hover:bg-gray-100'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                <path
                  d={item.icon}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill={item.active ? "currentColor" : "none"}
                />
              </svg>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6">
          <nav className="space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  item.active 
                    ? 'bg-[#2e7684] text-white' 
                    : 'text-[#47567b] hover:bg-gray-100'
                }`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                  <path
                    d={item.icon}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill={item.active ? "currentColor" : "none"}
                  />
                </svg>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

// Enhanced Mobile-Responsive Calendar
function Calendar() {
  const weeks = [
    { dates: ["1", "2", "3", "4", "5", "6", "7"], selectedDate: "4", bookingDates: [] },
    { dates: ["8", "9", "10", "11", "12", "13", "14"], selectedDate: undefined, bookingDates: [] },
    { dates: ["15", "16", "17", "18", "19", "20", "21"], selectedDate: undefined, bookingDates: ["21"] },
    { dates: ["22", "23", "24", "25", "26", "27", "28"], selectedDate: undefined, bookingDates: ["23", "25", "28"] },
    { dates: ["29", "30", "31", "1", "2", "3", "4"], selectedDate: undefined, bookingDates: [] },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 h-full" data-name="Calendar">
      <div className="mb-4 lg:mb-6">
        <div className="text-[#2e7684] section-heading mb-1 text-base lg:text-xl">My Calendar</div>
      </div>
      
      <div className="flex items-center justify-center gap-4 lg:gap-6 mb-4 lg:mb-6">
        <button className="p-1">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24">
            <path d="M15 19L8 12L15 5" stroke="#CCD7E6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="font-['Literata:SemiBold',_sans-serif] font-semibold text-lg lg:text-[20px] text-[#47567b]">
          September 2023
        </div>
        <button className="p-1">
          <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" viewBox="0 0 24 24">
            <path d="M9 5L16 12L9 19" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="space-y-0 mb-4 lg:mb-6 overflow-x-auto">
        <div className="min-w-[300px]">
          {weeks.map((week, index) => (
            <CalendarWeek 
              key={index}
              dates={week.dates} 
              selectedDate={week.selectedDate}
              bookingDates={week.bookingDates}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border border-[#8c97ac] rounded-3xl px-3 py-2 text-sm">
          <span className="button-text text-[#47567b]">Manage Availability</span>
        </button>
      </div>
    </div>
  );
}

// Revenue Chart Component
function RevenueChart() {
  const months = ['AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'];
  
  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 h-full" data-name="Revenue Chart">
      <div className="text-[#2e7684] section-heading mb-6 lg:mb-8 text-base lg:text-xl">Revenue</div>
      <div className="text-[#47567b] text-2xl lg:text-[32px] font-['Literata:SemiBold',_sans-serif] font-semibold mb-8 lg:mb-12">$0</div>
      
      <div className="relative h-24 lg:h-32 mb-4">
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="w-full max-w-[280px] lg:max-w-[324px] h-1 bg-[#FAFAFA] rounded-full relative">
            <div className="absolute left-0 top-0 h-full w-full bg-[#47567B] rounded-full"></div>
            <div className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-[#47567B] rounded-full border-2 border-white"></div>
          </div>
        </div>
        
        <div className="absolute top-8 lg:top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#47567b] text-white px-2 lg:px-3 py-1 lg:py-1.5 rounded text-xs lg:text-sm">$0</div>
        </div>
      </div>
      
      <div className="grid grid-cols-4 lg:flex lg:justify-between text-[#47567b] text-xs lg:text-[14px] font-['Literata:Light',_sans-serif] font-light uppercase gap-1">
        {months.map((month) => (
          <span key={month} className="text-center lg:text-left">{month}</span>
        ))}
      </div>
    </div>
  );
}

// Services Chart Component  
function ServicesChart() {
  const months = ['AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  
  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 h-full" data-name="Services Chart">
      <div className="text-[#2e7684] section-heading mb-3 lg:mb-4 text-base lg:text-xl">My services</div>
      
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 lg:gap-6 text-[#47567b] text-xs lg:text-[14px] font-['Literata:Medium',_sans-serif] font-medium mb-6 lg:mb-8">
        <span><span className="text-[#2e7684]">0</span> Services</span>
        <div className="hidden sm:block h-6 w-px bg-[#47567B] rotate-90"></div>
        <span><span className="text-[#2e7684]">0</span> total views this month</span>
      </div>

      <div className="text-center text-[#47567b] text-sm lg:text-[14px] font-['Literata:Medium',_sans-serif] font-medium mb-6 lg:mb-8">
        Total views
      </div>

      <div className="relative h-20 lg:h-24 mb-4 lg:mb-6">
        <div className="flex justify-between items-end h-full px-2">
          {months.map((month, index) => (
            <div key={month} className="flex flex-col items-center">
              <div className={`w-6 lg:w-10 rounded-lg ${index === 0 ? 'h-3 bg-[#2e7684]' : 'h-3 bg-[#ccd7e6]'}`}></div>
              <span className="text-[#47567b] text-xs lg:text-[14px] font-['Literata:Light',_sans-serif] font-light uppercase mt-2">
                {month}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border border-[#8c97ac] rounded-3xl px-3 py-2 text-sm">
          <span className="button-text text-[#47567b]">Manage My Services</span>
        </button>
      </div>
    </div>
  );
}

// Setup Steps Component
function SetupSteps() {
  const steps = [
    {
      icon: svgPaths.pb14a300,
      title: "Create your listing",
      description: "Create your listing and add services",
      buttonText: "Create listing",
      buttonStyle: "bg-[#667493] text-white"
    },
    {
      icon: svgPaths.p364eb800,
      title: "Set your availability", 
      description: "Set your availability so people can book you.",
      buttonText: "Set Availability",
      buttonStyle: "bg-[#667493] text-white"
    },
    {
      icon: svgPaths.p167a6900,
      title: "Bank account and tax information",
      description: "We'll use stripe to verify your information",
      buttonText: "Add Bank Info", 
      buttonStyle: "bg-[#667493] text-white"
    },
    {
      icon: svgPaths.p1d3de700,
      title: "Finalize your bio",
      description: "Finalize your listing bio",
      buttonText: "Update Bio",
      buttonStyle: "bg-[#667493] text-white"
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6">
      <div className="mb-4 lg:mb-6">
        <div className="setup-description text-[#667593] mb-2 text-xs lg:text-sm">Welcome Ted Lasso!</div>
        <div className="progress-heading text-[#47567b] mb-2 lg:mb-4 text-2xl lg:text-[32px]">0/4 steps completed</div>
        <div className="setup-description text-[#47567b] text-sm">Once your profile is complete customers can book you.</div>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-[#ccd7e6] last:border-b-0 gap-4">
            <div className="flex items-start gap-3 lg:gap-4 flex-1">
              <div className="w-[50px] h-[50px] lg:w-[62px] lg:h-[62px] rounded-full border border-[#667593] flex items-center justify-center p-2 shrink-0">
                <svg className="w-[32px] h-[32px] lg:w-[46px] lg:h-[46px]" fill="none" viewBox="0 0 46 46">
                  <path d={step.icon} fill="#47567B" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <div className="step-title text-[#47567b] mb-1 text-sm lg:text-base">{step.title}</div>
                <div className="step-description text-[#47567b] text-xs lg:text-sm">{step.description}</div>
              </div>
            </div>
            <button className={`${step.buttonStyle} rounded-3xl px-3 py-2 shrink-0 text-sm lg:text-base`}>
              <span className="button-text">{step.buttonText}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bookings Component
function BookingsCard() {
  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6" data-name="bookings">
      <div className="booking-title text-[#2e7684] mb-8 lg:mb-16 text-base lg:text-xl">New Bookings</div>
      <div className="text-center">
        <div className="booking-detail text-black text-sm">You don't have any bookings to confirm.</div>
      </div>
    </div>
  );
}

export default function VendorFilled() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f5fa]" data-name="Vendor - Filled">
      {/* Header */}
      <BaseGlobalHeaderDefault onMenuClick={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />
      
      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="lg:px-8">
          <SidebarNav isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 p-4 lg:p-8 max-w-full overflow-hidden">
          <div className="space-y-4 lg:space-y-6">
            {/* Setup Steps - Full Width */}
            <div className="w-full">
              <SetupSteps />
            </div>

            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 lg:gap-6">
              {/* Left Column */}
              <div className="space-y-4 lg:space-y-6">
                <BookingsCard />
                <RevenueChart />
              </div>
              
              {/* Right Column */}
              <div className="space-y-4 lg:space-y-6">
                <Calendar />
                <ServicesChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}