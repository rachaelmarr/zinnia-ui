import { useState, useRef, useEffect } from "react";
import svgPaths from "../imports/svg-huts8kz60a";
import desktopSvgPaths from "../imports/svg-y93zotu5pg";
import eventSvgPaths from "../imports/svg-tqy3jjq3f3";
import sidebarSvgPaths from "../imports/svg-nvwhdk8aaz";
import newSidebarSvgPaths from "../imports/svg-7d0hvxr7ib";
import confirmedSvgPaths from "../imports/svg-n9dpj63hyn";
import confirmedSidebarSvgPaths from "../imports/svg-m2btvjdaqq";
import checkSvgPaths from "../imports/svg-6vgndqbbll";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import imgMap from "figma:asset/3a139f5c438cc3d08ea7f3470b38333bcbc7e543.png";
import Frame11958 from "../imports/Frame11958-64-7549";
import Frame11958Unconfirmed from "../imports/Frame11958-64-8947";
import VendorLeftNav from "./VendorLeftNav";
import { Checkbox } from "./listing/shared/Checkbox";

interface ResponsiveCalendarProps {
  onNavigate?: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
  blockedDates?: number[];
  onDateClick?: (date: number) => void;
  selectedDate?: number;
  onBlockDate?: (date: number, isBlocked: boolean) => void;
}

// Event Components
function Warning() {
  return (
    <div className="absolute left-1 sm:left-2 size-3 top-[13px] hidden md:block" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="warning">
          <path
            d={eventSvgPaths.p3d2be900}
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

function CheckCircle() {
  return (
    <div className="absolute left-1 sm:left-2 md:left-[7px] size-3 top-3.5 hidden md:block" data-name="check-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check-circle">
          <path
            d={confirmedSvgPaths.p37f67170}
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

function EventPill({ time, name, isConfirmed = false }: { time: string; name: string; isConfirmed?: boolean }) {
  return (
    <div
      className={`absolute h-10 overflow-clip rounded-xl top-9 translate-x-[-50%] w-20 sm:w-24 md:w-[108px] ${
        isConfirmed ? 'bg-[#2e7684]' : 'bg-neutral-400'
      }`}
      data-name="wedding"
      style={{ left: "calc(50% + 0.428px)" }}
    >
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 sm:left-4 md:left-6 text-[#ffffff] text-[10px] sm:text-[11px] md:text-[12px] text-nowrap top-5 tracking-[0.24px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.2] whitespace-pre truncate max-w-[60px] sm:max-w-[72px] md:max-w-[84px]">
          {time}
          <br aria-hidden="true" />
          <span className="truncate block">{name}</span>
        </p>
      </div>
      {isConfirmed ? <CheckCircle /> : <Warning />}
    </div>
  );
}

// Blocked Date Components
function DiagonalLine() {
  return (
    <div className="absolute flex h-[112px] items-center justify-center left-0 top-0 w-full">
      <div className="flex-none rotate-[45deg]">
        <div className="h-0 relative w-[158px]">
          <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158 1">
              <line stroke="var(--stroke-0, #CCD7E6)" x2="158" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}




function MobileCalendarHeader({ 
  displayMonth, 
  displayYear, 
  canGoPrevious, 
  onPreviousMonth, 
  onNextMonth, 
  getMonthName 
}: { 
  displayMonth: number;
  displayYear: number;
  canGoPrevious: boolean;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  getMonthName: (month: number) => string;
}) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="font-['Literata:Medium',_sans-serif] font-medium text-[24px] text-[#47567b]">
        {getMonthName(displayMonth)} {displayYear}
      </h1>
      <div className="flex gap-2">
        <button 
          className={`p-1 ${canGoPrevious ? 'cursor-pointer hover:opacity-70' : 'cursor-not-allowed opacity-40'}`}
          onClick={canGoPrevious ? onPreviousMonth : undefined}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="p-1 cursor-pointer hover:opacity-70" onClick={onNextMonth}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

function MobileBottomNav({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="bg-neutral-50 box-border content-start flex flex-wrap gap-0 h-[75px] items-start justify-center p-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5" onClick={() => onNavigate?.('dashboard')}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="home">
              <path
                d={desktopSvgPaths.p2d4f9980}
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Home
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="calendar-fill">
              <path d={desktopSvgPaths.p2431a400} fill="var(--fill-0, #F5F5F5)" stroke="var(--stroke-0, #F5F5F5)" />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-neutral-100 text-[10px] text-center tracking-[0.2px]">
          Calendar
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5" onClick={() => onNavigate?.('listings')}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="clipboard-list">
              <path
                d={desktopSvgPaths.p5d88c0}
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Listings
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="currency-dollar">
              <path
                d={desktopSvgPaths.p12005030}
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Billing
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="chat-alt-2">
              <path
                d={desktopSvgPaths.pf3bce40}
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          Clients
        </div>
      </div>
      
      <div className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]">
        <div className="relative shrink-0 size-5">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="dots-horizontal">
              <path
                d={desktopSvgPaths.p32a3d900}
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </g>
          </svg>
        </div>
        <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#47567b] text-[10px] text-center tracking-[0.2px]">
          More
        </div>
      </div>
    </div>
  );
}

// Event Details Sidebar Component
function EventSidebar({
  selectedDate,
  onClose,
  sidebarRef
}: {
  selectedDate?: number;
  onClose: () => void;
  sidebarRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div 
      ref={sidebarRef}
      className="absolute bg-[#ffffff] h-[1048px] overflow-clip top-0 w-[365px] right-0 z-50 shadow-lg border-l border-[#ccd7e6]"
    >
      {/* Close button */}
      <div 
        className="absolute left-5 size-6 top-5 cursor-pointer hover:opacity-70 transition-opacity z-10" 
        onClick={onClose}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="x">
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Event details content */}
      <Frame11958 />
    </div>
  );
}

// Unconfirmed Event Details Sidebar Component
function UnconfirmedEventSidebar({
  selectedDate,
  onClose,
  sidebarRef
}: {
  selectedDate?: number;
  onClose: () => void;
  sidebarRef?: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div 
      ref={sidebarRef}
      className="absolute bg-[#ffffff] h-[1048px] overflow-clip top-0 w-[365px] right-0 z-50 shadow-lg border-l border-[#ccd7e6]"
    >
      {/* Close button */}
      <div 
        className="absolute left-5 size-6 top-5 cursor-pointer hover:opacity-70 transition-opacity z-10" 
        onClick={onClose}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="x">
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Unconfirmed event details content */}
      <Frame11958Unconfirmed />
    </div>
  );
}

// Block Date Sidebar Component
function BlockSidebar({
  selectedDate,
  isBlocked,
  onClose,
  onBlockDate,
  sidebarRef,
  displayMonth,
  displayYear
}: {
  selectedDate?: number;
  isBlocked: boolean;
  onClose: () => void;
  onBlockDate: () => void;
  sidebarRef?: React.RefObject<HTMLDivElement>;
  displayMonth: number;
  displayYear: number;
}) {
  const handleCheckboxClick = () => {
    onBlockDate();
    // Don't close the sidebar immediately - let the user see the state change
  };

  // Format the date display
  const getFormattedDate = () => {
    if (!selectedDate) return '';
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${monthNames[displayMonth]} ${selectedDate}, ${displayYear}`;
  };

  return (
    <div 
      ref={sidebarRef}
      className="absolute bg-[#ffffff] h-[1048px] overflow-clip top-0 w-[365px] right-0 z-50 shadow-lg border-l border-[#ccd7e6]"
    >
      {/* Close button */}
      <div 
        className="absolute left-5 size-6 top-5 cursor-pointer hover:opacity-70 transition-opacity z-10" 
        onClick={onClose}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="x">
            <path
              d="M6 6L18 18M6 18L18 6L6 18Z"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>

      {/* Block date content */}
      <div className="p-6 pt-12">
        <h2 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[24px] text-[#47567b] mb-2">
          {isBlocked ? 'Blocked day' : 'Block day'}
        </h2>
        <h4 className="font-['Montserrat:Medium',_sans-serif] font-medium text-[16px] text-[#8c97ac] mb-6">
          {getFormattedDate()}
        </h4>
        <p className="font-['Montserrat:Regular',_sans-serif] font-normal text-[14px] text-[#47567b] mb-6">
          {isBlocked 
            ? 'This day is blocked so you will not show when a couple searches.' 
            : 'Block this day to not show up when a couple searches.'
          }
        </p>
        
        <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={handleCheckboxClick}>
          <Checkbox 
            label={isBlocked ? 'Blocked day' : 'Block day'}
            checked={isBlocked}
            onChange={handleCheckboxClick}
            checkmarkPath={checkSvgPaths.p131e2980}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#8c97ac] rounded-lg font-['Montserrat:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] hover:bg-[#f8f9fa] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCheckboxClick}
            className="px-4 py-2 bg-[#2e7684] rounded-lg font-['Montserrat:Medium',_sans-serif] font-medium text-[14px] text-white hover:bg-[#276570] transition-colors"
          >
            {isBlocked ? 'Unblock' : 'Block'} Date
          </button>
        </div>
      </div>
    </div>
  );
}

// Calendar Cell Component
function CalendarDay({
  date,
  isCurrentMonth,
  isToday,
  isSelected,
  isBlocked,
  hasEvent,
  hasUnconfirmedEvent,
  onClick,
  events = []
}: {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isBlocked: boolean;
  hasEvent: boolean;
  hasUnconfirmedEvent: boolean;
  onClick: () => void;
  events?: Array<{ time: string; name: string; isConfirmed?: boolean }>;
}) {
  const cellClasses = `
    relative h-[112px] w-full cursor-pointer transition-colors
    ${isCurrentMonth ? 'text-[#47567b]' : 'text-[#8c97ac]'}
    ${isSelected ? 'bg-[#e3f2fd]' : 'hover:bg-[#f8f9fa]'}
    ${isToday ? 'ring-2 ring-[#2e7684]' : ''}
  `;

  return (
    <div className={cellClasses} onClick={onClick}>
      {/* Date number */}
      <div className="absolute left-2 top-2 font-['Montserrat:Regular',_sans-serif] font-normal text-[12px]">
        {date}
      </div>

      {/* Blocked date line */}
      {isBlocked && <DiagonalLine />}

      {/* Event pills */}
      {events.map((event, index) => (
        <EventPill
          key={index}
          time={event.time}
          name={event.name}
          isConfirmed={event.isConfirmed}
        />
      ))}
    </div>
  );
}

// Main Calendar Component
function CalendarGrid({
  displayMonth,
  displayYear,
  selectedDate,
  blockedDates = [],
  onDateClick,
  onEventClick,
  onUnconfirmedEventClick,
  onBlockClick
}: {
  displayMonth: number;
  displayYear: number;
  selectedDate?: number;
  blockedDates?: number[];
  onDateClick?: (date: number) => void;
  onEventClick?: (date: number) => void;
  onUnconfirmedEventClick?: (date: number) => void;
  onBlockClick?: (date: number) => void;
}) {
  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Mock events data
  const events: { [key: number]: Array<{ time: string; name: string; isConfirmed?: boolean }> } = {
    12: [{ time: '2:00 PM', name: 'Johnson Wedding', isConfirmed: true }],
    18: [{ time: '11:00 AM', name: 'Smith Wedding', isConfirmed: false }],
    25: [{ time: '4:00 PM', name: 'Davis Wedding', isConfirmed: true }]
  };

  // Get first day of month and days in month
  const firstDay = new Date(displayYear, displayMonth, 1).getDay();
  const daysInMonth = new Date(displayYear, displayMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(displayYear, displayMonth, 0).getDate();

  // Generate calendar cells
  const calendarCells = [];
  
  // Previous month's trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    const date = daysInPrevMonth - i;
    calendarCells.push(
      <CalendarDay
        key={`prev-${date}`}
        date={date}
        isCurrentMonth={false}
        isToday={false}
        isSelected={false}
        isBlocked={false}
        hasEvent={false}
        hasUnconfirmedEvent={false}
        onClick={() => {}}
      />
    );
  }

  // Current month's days
  for (let date = 1; date <= daysInMonth; date++) {
    const isToday = displayYear === currentYear && displayMonth === currentMonth && date === currentDate;
    const isSelected = selectedDate === date;
    const isBlocked = blockedDates.includes(date);
    const dayEvents = events[date] || [];
    const hasEvent = dayEvents.some(e => e.isConfirmed);
    const hasUnconfirmedEvent = dayEvents.some(e => !e.isConfirmed);

    const handleClick = () => {
      if (hasEvent) {
        onEventClick?.(date);
      } else if (hasUnconfirmedEvent) {
        onUnconfirmedEventClick?.(date);
      } else if (isBlocked) {
        onBlockClick?.(date);
      } else {
        onDateClick?.(date);
      }
    };

    calendarCells.push(
      <CalendarDay
        key={`current-${date}`}
        date={date}
        isCurrentMonth={true}
        isToday={isToday}
        isSelected={isSelected}
        isBlocked={isBlocked}
        hasEvent={hasEvent}
        hasUnconfirmedEvent={hasUnconfirmedEvent}
        onClick={handleClick}
        events={dayEvents}
      />
    );
  }

  // Next month's leading days to fill grid
  const totalCells = calendarCells.length;
  const remainingCells = 42 - totalCells; // 6 weeks * 7 days
  for (let date = 1; date <= remainingCells; date++) {
    calendarCells.push(
      <CalendarDay
        key={`next-${date}`}
        date={date}
        isCurrentMonth={false}
        isToday={false}
        isSelected={false}
        isBlocked={false}
        hasEvent={false}
        hasUnconfirmedEvent={false}
        onClick={() => {}}
      />
    );
  }

  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="w-full">
      {/* Weekday headers */}
      <div className="grid grid-cols-7 mb-2">
        {weekdays.map(day => (
          <div
            key={day}
            className="h-8 flex items-center justify-center font-['Montserrat:Medium',_sans-serif] font-medium text-[12px] text-[#8c97ac]"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 border border-[#ccd7e6] rounded-lg overflow-hidden">
        {calendarCells.map((cell, index) => (
          <div key={index} className="border-r border-b border-[#ccd7e6] last:border-r-0 [&:nth-child(7n)]:border-r-0">
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Component
export default function ResponsiveCalendar({
  onNavigate,
  hasCompletedListing,
  hasVisitedCalendar,
  currentView,
  blockedDates = [],
  onDateClick,
  selectedDate,
  onBlockDate
}: ResponsiveCalendarProps) {
  const [displayMonth, setDisplayMonth] = useState(new Date().getMonth());
  const [displayYear, setDisplayYear] = useState(new Date().getFullYear());
  const [showEventSidebar, setShowEventSidebar] = useState(false);
  const [showUnconfirmedSidebar, setShowUnconfirmedSidebar] = useState(false);
  const [showBlockSidebar, setShowBlockSidebar] = useState(false);
  const [sidebarDate, setSidebarDate] = useState<number | undefined>();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  const canGoPrevious = !(displayYear === currentYear && displayMonth === currentMonth);

  const getMonthName = (month: number) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[month];
  };

  const onPreviousMonth = () => {
    if (canGoPrevious) {
      if (displayMonth === 0) {
        setDisplayMonth(11);
        setDisplayYear(displayYear - 1);
      } else {
        setDisplayMonth(displayMonth - 1);
      }
    }
  };

  const onNextMonth = () => {
    if (displayMonth === 11) {
      setDisplayMonth(0);
      setDisplayYear(displayYear + 1);
    } else {
      setDisplayMonth(displayMonth + 1);
    }
  };

  const handleEventClick = (date: number) => {
    setSidebarDate(date);
    setShowEventSidebar(true);
    setShowUnconfirmedSidebar(false);
    setShowBlockSidebar(false);
  };

  const handleUnconfirmedEventClick = (date: number) => {
    setSidebarDate(date);
    setShowUnconfirmedSidebar(true);
    setShowEventSidebar(false);
    setShowBlockSidebar(false);
  };

  const handleBlockClick = (date: number) => {
    const isBlocked = blockedDates?.includes(date) || false;
    setSidebarDate(date);
    setShowBlockSidebar(true);
    setShowEventSidebar(false);
    setShowUnconfirmedSidebar(false);
  };

  const handleSidebarBlockDate = () => {
    if (sidebarDate && onBlockDate) {
      const isCurrentlyBlocked = blockedDates?.includes(sidebarDate) || false;
      onBlockDate(sidebarDate, !isCurrentlyBlocked); // Toggle the blocked state
    }
  };

  const handleDateClickInternal = (date: number) => {
    onDateClick?.(date);
    // Also show block sidebar for empty dates
    handleBlockClick(date);
  };

  const closeSidebars = () => {
    setShowEventSidebar(false);
    setShowUnconfirmedSidebar(false);
    setShowBlockSidebar(false);
    setSidebarDate(undefined);
  };

  const handleBlockDate = () => {
    if (sidebarDate && onBlockDate) {
      const isCurrentlyBlocked = blockedDates?.includes(sidebarDate) || false;
      onBlockDate(sidebarDate, !isCurrentlyBlocked);
    }
    // Don't close sidebar immediately - let user see the state change and close manually
  };

  // Handle click outside sidebar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        closeSidebars();
      }
    };

    if (showEventSidebar || showUnconfirmedSidebar || showBlockSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showEventSidebar, showUnconfirmedSidebar, showBlockSidebar]);

  return (
    <div className="bg-[#f0f5fa] relative min-h-screen">
      {/* Mobile View */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          <MobileCalendarHeader
            displayMonth={displayMonth}
            displayYear={displayYear}
            canGoPrevious={canGoPrevious}
            onPreviousMonth={onPreviousMonth}
            onNextMonth={onNextMonth}
            getMonthName={getMonthName}
          />
          
          <CalendarGrid
            displayMonth={displayMonth}
            displayYear={displayYear}
            selectedDate={selectedDate}
            blockedDates={blockedDates}
            onDateClick={handleDateClickInternal}
            onEventClick={handleEventClick}
            onUnconfirmedEventClick={handleUnconfirmedEventClick}
            onBlockClick={handleBlockClick}
          />
        </div>
        
        <MobileBottomNav onNavigate={onNavigate} />
        <VendorLeftNav 
          onNavigate={onNavigate} 
          currentView="calendar"
          isMobileMenuOpen={isMobileMenuOpen}
          onOpenMobileMenu={handleOpenMobileMenu}
          onCloseMobileMenu={handleCloseMobileMenu}
        />

        {/* Mobile Sidebars */}
        {showEventSidebar && (
          <EventSidebar
            selectedDate={sidebarDate}
            onClose={closeSidebars}
            sidebarRef={sidebarRef}
          />
        )}

        {showUnconfirmedSidebar && (
          <UnconfirmedEventSidebar
            selectedDate={sidebarDate}
            onClose={closeSidebars}
            sidebarRef={sidebarRef}
          />
        )}

        {showBlockSidebar && (
          <BlockSidebar
            selectedDate={sidebarDate}
            isBlocked={sidebarDate ? blockedDates.includes(sidebarDate) : false}
            onClose={closeSidebars}
            onBlockDate={handleBlockDate}
            sidebarRef={sidebarRef}
            displayMonth={displayMonth}
            displayYear={displayYear}
          />
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex lg:flex-col min-h-screen">
        {/* Content Area */}
        <div className="flex flex-1">
          
          {/* Main Content */}
          <div className="flex-1 min-w-0 relative">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[32px] text-[#47567b]">
                  {getMonthName(displayMonth)} {displayYear}
                </h1>
                <div className="flex gap-2">
                  <button 
                    className={`p-2 rounded-lg border border-[#8c97ac] ${canGoPrevious ? 'cursor-pointer hover:bg-gray-50' : 'cursor-not-allowed opacity-40'}`}
                    onClick={canGoPrevious ? onPreviousMonth : undefined}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12.5 15L7.5 10L12.5 5" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="p-2 rounded-lg border border-[#8c97ac] cursor-pointer hover:bg-gray-50" 
                    onClick={onNextMonth}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7.5 15L12.5 10L7.5 5" stroke="#47567B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <CalendarGrid
                displayMonth={displayMonth}
                displayYear={displayYear}
                selectedDate={selectedDate}
                blockedDates={blockedDates}
                onDateClick={handleDateClickInternal}
                onEventClick={handleEventClick}
                onUnconfirmedEventClick={handleUnconfirmedEventClick}
                onBlockClick={handleBlockClick}
              />
            </div>

            {/* Sidebars */}
            {showEventSidebar && (
              <EventSidebar
                selectedDate={sidebarDate}
                onClose={closeSidebars}
                sidebarRef={sidebarRef}
              />
            )}

            {showUnconfirmedSidebar && (
              <UnconfirmedEventSidebar
                selectedDate={sidebarDate}
                onClose={closeSidebars}
                sidebarRef={sidebarRef}
              />
            )}

            {showBlockSidebar && (
              <BlockSidebar
                selectedDate={sidebarDate}
                isBlocked={sidebarDate ? blockedDates.includes(sidebarDate) : false}
                onClose={closeSidebars}
                onBlockDate={handleBlockDate}
                sidebarRef={sidebarRef}
                displayMonth={displayMonth}
                displayYear={displayYear}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}