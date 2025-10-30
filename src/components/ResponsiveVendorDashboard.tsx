import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-9qipy85krk";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import VendorLeftNav, { MobileMenuButton } from "./VendorLeftNav";
import { useAuth } from "../hooks/useAuth";
import GlobalHeader from "./GlobalHeader";

interface ResponsiveVendorDashboardProps {
  onNavigate: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
}

// Icon Components for Header and Content
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

function Home() {
  return (
    <div className="relative shrink-0 size-5" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path
            d={svgPaths.p2d4f9980}
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
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

function ClipboardList() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clipboard-list">
          <path
            d={svgPaths.p5d88c0}
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

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar">
          <path
            d={svgPaths.p12005030}
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

function ChatAlt3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat-alt-2">
          <path
            d={svgPaths.pf3bce40}
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

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path
            d="M15 19L8 12L15 5"
            id="Vector"
            stroke="var(--stroke-0, #CCD7E6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-6" data-name="chevron-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-right">
          <path
            d="M9 5L16 12L9 19"
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}


// Mobile Calendar Component
function MobileCalendar({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden mb-6">
      <div className="p-4">
        <h3 className="section-heading text-[#2e7684] mb-4">My Calendar</h3>
        
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-4">
          <ChevronLeft />
          <h4 className="font-['Literata'] text-[20px] font-semibold text-[#47567b]">
            September 2023
          </h4>
          <ChevronRight />
        </div>

        {/* Mini Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 mb-6">
          {/* Calendar days would go here */}
          {Array.from({ length: 35 }, (_, i) => {
            const day = ((i - 2) % 31) + 1;
            const isToday = day === 4;
            const isSelected = [21, 23, 25, 28].includes(day);
            
            return (
              <div
                key={i}
                className={`
                  h-8 w-8 flex items-center justify-center text-[14px] font-['Montserrat'] font-normal
                  ${isToday ? 'bg-white border border-[#47567b] rounded-full' : ''}
                  ${isSelected ? 'bg-white rounded-full border border-white' : ''}
                  ${day > 0 && day <= 31 ? 'text-[#47567b]' : 'text-transparent'}
                `}
              >
                {day > 0 && day <= 31 ? day : ''}
              </div>
            );
          })}
        </div>

        <button 
          onClick={() => onNavigate('calendar')}
          className="w-full bg-transparent border border-[#8c97ac] rounded-3xl px-3 py-2"
        >
          <span className="button-text text-[#47567b]">Manage Availability</span>
        </button>
      </div>
    </div>
  );
}

// Desktop Calendar Component  
function DesktopCalendar({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="bg-white h-[480px] rounded-2xl overflow-hidden">
      <div className="p-4 h-full flex flex-col">
        <h3 className="section-heading text-[#2e7684] mb-4">My Calendar</h3>
        
        {/* Calendar Header */}
        <div className="flex items-center justify-center gap-[85px] mb-6">
          <ChevronLeft />
          <h4 className="font-['Literata'] text-[20px] font-semibold text-[#47567b]">
            September 2023
          </h4>
          <ChevronRight />
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-7 gap-0 mb-6">
            {/* Calendar weeks */}
            {Array.from({ length: 5 }, (_, weekIndex) => (
              <div key={weekIndex} className="contents">
                {Array.from({ length: 7 }, (_, dayIndex) => {
                  const dayNumber = weekIndex * 7 + dayIndex + 1;
                  const isHighlighted = [4, 21, 23, 25, 28].includes(dayNumber);
                  
                  return (
                    <div
                      key={dayIndex}
                      className={`
                        h-[55px] flex items-center justify-center text-[14px] font-['Montserrat'] font-normal text-[#47567b] border border-white
                        ${isHighlighted ? 'rounded-full border-[#47567b]' : ''}
                      `}
                    >
                      {dayNumber <= 31 ? dayNumber : ''}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => onNavigate('calendar')}
            className="bg-transparent border border-[#8c97ac] rounded-3xl px-3 py-2"
          >
            <span className="button-text text-[#47567b]">Manage Availability</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Revenue Chart Component
function RevenueChart() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden mb-6">
      <div className="p-6">
        <h3 className="section-heading text-[#2e7684] mb-4">Revenue</h3>
        <div className="text-[32px] font-['Literata'] font-semibold text-[#47567b] mb-8">
          $0
        </div>
        
        {/* Chart placeholder */}
        <div className="h-32 relative mb-4">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f3f3f3] rounded-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-1 bg-[#47567b] rounded-lg"></div>
        </div>
        
        {/* Chart labels */}
        <div className="flex justify-between text-[14px] font-['Literata'] font-light text-[#47567b] uppercase tracking-[0.28px]">
          <span>AUG</span>
          <span>SEP</span>
          <span>OCT</span>
          <span>NOV</span>
          <span>DEC</span>
          <span>JAN</span>
          <span>FEB</span>
          <span>MAR</span>
        </div>
      </div>
    </div>
  );
}

// Services Widget Component
function ServicesWidget({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden mb-6">
      <div className="p-6">
        <h3 className="section-heading text-[#2e7684] mb-4">My services</h3>
        
        <div className="flex items-center gap-2 mb-6">
          <span className="font-['Literata'] text-[14px] font-medium text-[#2e7684]">0</span>
          <span className="font-['Literata'] text-[14px] font-medium text-[#47567b] tracking-[0.28px]">Services</span>
          <div className="w-0 h-[24.5px] border-l border-[#47567b] rotate-90"></div>
          <span className="font-['Literata'] text-[14px] font-medium text-[#2e7684]">0</span>
          <span className="font-['Literata'] text-[14px] font-medium text-[#47567b] tracking-[0.28px]">total views this month</span>
        </div>

        {/* Chart placeholder */}
        <div className="h-32 flex items-end justify-between mb-4">
          {['AUG', 'SEP', 'OCT', 'NOV', 'DEC'].map((month, index) => (
            <div key={month} className="flex flex-col items-center gap-2">
              <div className={`w-[42px] h-[3px] rounded-lg ${index === 0 ? 'bg-[#2e7684]' : 'bg-[#ccd7e6]'}`}></div>
              <span className="text-[14px] font-['Literata'] font-light text-[#47567b] uppercase tracking-[0.28px]">
                {month}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mb-6">
          <span className="font-['Literata'] text-[14px] font-medium text-[#47567b] tracking-[0.28px]">
            Total views
          </span>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => onNavigate('listings')}
            className="bg-transparent border border-[#8c97ac] rounded-3xl px-3 py-2"
          >
            <span className="button-text text-[#47567b]">Manage My Services</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Bookings Component
function BookingsWidget() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden mb-6">
      <div className="p-6">
        <h3 className="section-heading text-[#2e7684] mb-8">New Bookings</h3>
        <div className="text-center">
          <p className="font-['Montserrat'] text-[14px] font-normal text-black tracking-[0.28px]">
            You don't have any bookings to confirm.
          </p>
        </div>
      </div>
    </div>
  );
}

// Dashboard Welcome Component
function DashboardWelcome() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden mb-6">
      <div className="p-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#47567b] mb-4" style={{ fontFamily: 'Literata, serif' }}>
            Welcome to your Dashboard
          </h2>
          <p className="text-[14px] leading-[1.5] tracking-[0.28px] text-[#47567b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Manage your listings, calendar, and bookings all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

// Getting Started Guide Component
function GettingStartedGuide({ onNavigate }: { onNavigate: (view: string) => void }) {
  const steps = [
    {
      title: "Create your listing",
      description: "Create your listing and add services",
      buttonText: "Create listing",
      action: () => onNavigate('createListing')
    },
    {
      title: "Set your availability", 
      description: "Set your availability so people can book you.",
      buttonText: "Set Availability",
      action: () => onNavigate('calendar')
    },
    {
      title: "Bank account and tax information",
      description: "We'll use stripe to verify your information",
      buttonText: "Add Bank Info",
      action: () => onNavigate('banking')
    },
    {
      title: "Finalize your bio",
      description: "Finalize your listing bio",
      buttonText: "Update Bio", 
      action: () => onNavigate('bio')
    }
  ];

  return (
    <div className="bg-white rounded-[20px] overflow-hidden mb-6">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <p className="font-['Jost'] text-[12px] font-normal text-[#667593] mb-2">
            Welcome Ted Lasso!
          </p>
          <h2 className="progress-heading text-[#47567b] mb-2">
            0/4 steps completed
          </h2>
          <p className="setup-description text-[#47567b]">
            Once your profile is complete customers can book you.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 pb-6 border-b border-[#ccd7e6] last:border-b-0">
              {/* Icon */}
              <div className="relative rounded-full border border-[#667593] p-2 shrink-0">
                <div className="size-[46px] flex items-center justify-center">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
                    <g id="Illustration">
                      <path d={svgPaths.p1d3de700} fill="var(--fill-0, #47567B)" id="Vector" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h4 className="step-title text-[#47567b] mb-1 tracking-[0.28px]">
                  {step.title}
                </h4>
                <p className="step-description text-[#47567b] tracking-[0.28px]">
                  {step.description}
                </p>
              </div>

              {/* Button */}
              <button 
                onClick={step.action}
                className="bg-[#667493] rounded-3xl px-3 py-2 shrink-0"
              >
                <span className="button-text text-white">
                  {step.buttonText}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ResponsiveVendorDashboard({ 
  onNavigate, 
  hasCompletedListing, 
  hasVisitedCalendar, 
  currentView,
  profilePhotos = []
}: ResponsiveVendorDashboardProps & { profilePhotos?: any[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f5fa]">
      {/* Global Header */}
      <GlobalHeader onOpenMobileMenu={handleOpenMobileMenu} onNavigate={onNavigate} profilePhotos={profilePhotos} />
      
      <div className="flex">
        {/* Vendor Left Navigation */}
        <VendorLeftNav 
          onNavigate={onNavigate} 
          currentView={currentView}
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={handleOpenMobileMenu}
          onCloseMobileMenu={handleCloseMobileMenu}
        />
        
        {/* Main Content */}
        <div className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile Layout */}
            <div className="lg:hidden space-y-6">
              <DashboardWelcome />
              <MobileCalendar onNavigate={onNavigate} />
              <ServicesWidget onNavigate={onNavigate} />
              <BookingsWidget />
              <RevenueChart />
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-12 gap-8">
                {/* Left Column */}
                <div className="col-span-7 space-y-8">
                  <DashboardWelcome />
                  <BookingsWidget />
                  <RevenueChart />
                </div>

                {/* Right Column */}
                <div className="col-span-5 space-y-8">
                  <DesktopCalendar onNavigate={onNavigate} />
                  <ServicesWidget onNavigate={onNavigate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}