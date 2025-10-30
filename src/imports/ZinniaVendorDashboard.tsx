import { useState, useRef, useEffect } from "react";
import svgPaths from "./svg-fmbxvxa2ts";
import BottomNav from "../../components/BottomNav";

interface ZinniaVendorDashboardProps {
  onNavigate?: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
  blockedDates?: number[];
  onBlockDate?: () => void;
  onDateClick?: (date: number) => void;
  selectedDate?: number;
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-left w-[360px]">
        <p className="block leading-[1.2]">Calendar</p>
      </div>
    </div>
  );
}

function Frame125() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Top />
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-[150px]">
      <Frame125 />
    </div>
  );
}

function Top1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#ccd7e6] text-[32px] text-left w-[360px]">
        <p className="block leading-[1.2]">29 Jun</p>
      </div>
    </div>
  );
}

function Frame127() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <Top1 />
    </div>
  );
}

function Frame2609510() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-[150px]">
      <Frame127 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-1 items-center justify-start left-[13px] p-0 top-[88px]">
      <Frame126 />
      <Frame2609510 />
    </div>
  );
}

function Group129() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[18px] mt-0 relative text-[#667593] text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Thu
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-[15px] relative text-[#667593] text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          26
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-[17px] mt-[59px] relative size-1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
        >
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #667593)"
            id="Ellipse 1"
            r="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Date({ dateInfo, isBlocked, isSelected, onClick }: { 
  dateInfo: { day: string; date: number }; 
  isBlocked: boolean; 
  isSelected: boolean; 
  onClick: (date: number) => void;
}) {
  const handleClick = () => {
    onClick(dateInfo.date);
  };

  return (
    <div
      className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0 cursor-pointer transition-all duration-200 hover:bg-gray-100 ${
        isBlocked ? 'bg-red-100 border-red-300' : 
        isSelected ? 'bg-[#ccd7e6] border-[#1a2652] border-2' : 
        'border border-[#667593]'
      }`}
      data-name="Date"
      onClick={handleClick}
    >
      {!isBlocked && !isSelected && (
        <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      )}
      {isSelected && (
        <div className="absolute border-2 border-[#1a2652] border-solid inset-0 pointer-events-none rounded-lg" />
      )}
      {isBlocked && (
        <div className="absolute border border-red-300 border-solid inset-0 pointer-events-none rounded-lg" />
      )}
      
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
        <div className={`[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[18px] mt-0 relative text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase ${
          isBlocked ? 'text-red-600' :
          isSelected ? 'bg-clip-text' : 
          'text-[#667593]'
        }`}
        style={isSelected ? {
          WebkitTextFillColor: "transparent",
          backgroundImage: "linear-gradient(94.0059deg, rgb(26, 38, 82) 4.4853%, rgb(33, 67, 100) 7.7793%, rgb(34, 70, 102) 27.326%, rgb(35, 75, 105) 51.855%, rgb(51, 110, 121) 72.168%)",
        } : {}}>
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            {dateInfo.day}
          </p>
        </div>
        <div className={`[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-[15px] relative text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase ${
          isBlocked ? 'text-red-600' :
          isSelected ? 'bg-clip-text' : 
          'text-[#667593]'
        }`}
        style={isSelected ? {
          WebkitTextFillColor: "transparent",
          backgroundImage: "linear-gradient(91.6565deg, rgb(26, 38, 82) 4.4853%, rgb(33, 67, 100) 7.7793%, rgb(34, 70, 102) 27.326%, rgb(35, 75, 105) 51.855%, rgb(51, 110, 121) 72.168%)",
        } : {}}>
          <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
            {dateInfo.date}
          </p>
        </div>
        
        {/* Show dot indicator for bookings/events */}
        <div className="[grid-area:1_/_1] ml-[17px] mt-[59px] relative size-1">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 4 4"
          >
            <circle
              cx="2"
              cy="2"
              fill={isBlocked ? "var(--fill-0, #dc2626)" : 
                    isSelected ? "url(#paint0_linear_4_3165)" : 
                    "var(--fill-0, #667593)"}
              id="Ellipse 1"
              r="2"
            />
            {isSelected && (
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_4_3165"
                  x1="-0.0592593"
                  x2="3.11745"
                  y1="-3.38211"
                  y2="-3.26293"
                >
                  <stop stopColor="#1A2652" />
                  <stop offset="1" stopColor="#2E7684" />
                </linearGradient>
              </defs>
            )}
          </svg>
        </div>
        
        {/* Show block indicator */}
        {isBlocked && (
          <div className="[grid-area:1_/_1] ml-[15px] mt-[8px] relative">
            <div className="w-2 h-0.5 bg-red-600 transform rotate-45"></div>
            <div className="w-2 h-0.5 bg-red-600 transform -rotate-45 -mt-0.5"></div>
          </div>
        )}
      </div>
    </div>
  );
}

function Group130() {
  return (
    <div className="font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#667593] text-center text-nowrap uppercase">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] ml-[17px] mt-0 relative text-[12px] tracking-[0.48px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          FRI
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] ml-[17.5px] mt-[15px] relative text-[32px] tracking-[1.28px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          27
        </p>
      </div>
    </div>
  );
}

function Date1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group130 />
    </div>
  );
}

function Group131() {
  return (
    <div className="font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#667593] text-center text-nowrap uppercase">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] ml-[18.5px] mt-0 relative text-[12px] tracking-[0.48px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          Sat
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] ml-[18.5px] mt-[15px] relative text-[32px] tracking-[1.28px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          28
        </p>
      </div>
    </div>
  );
}

function Date2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group131 />
    </div>
  );
}

function Group132() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div
        className="[grid-area:1_/_1] bg-clip-text font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[18px] mt-0 relative text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(94.0059deg, rgb(26, 38, 82) 4.4853%, rgb(33, 67, 100) 7.7793%, rgb(34, 70, 102) 27.326%, rgb(35, 75, 105) 51.855%, rgb(51, 110, 121) 72.168%)",
        }}
      >
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          sun
        </p>
      </div>
      <div
        className="[grid-area:1_/_1] bg-clip-text font-['Literata:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-[15px] relative text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(91.6565deg, rgb(26, 38, 82) 4.4853%, rgb(33, 67, 100) 7.7793%, rgb(34, 70, 102) 27.326%, rgb(35, 75, 105) 51.855%, rgb(51, 110, 121) 72.168%)",
        }}
      >
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          29
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-[17px] mt-[59px] relative size-1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
        >
          <circle
            cx="2"
            cy="2"
            fill="url(#paint0_linear_4_3165)"
            id="Ellipse 1"
            r="2"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_4_3165"
              x1="-0.0592593"
              x2="3.11745"
              y1="-3.38211"
              y2="-3.26293"
            >
              <stop stopColor="#1A2652" />
              <stop offset="1" stopColor="#2E7684" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Date3() {
  return (
    <div
      className="bg-[#ccd7e6] box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border-2 border-[#1a2652] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group132 />
    </div>
  );
}

function Group133() {
  return (
    <div className="font-semibold grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#667593] text-center text-nowrap uppercase">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] ml-[19.5px] mt-0 relative text-[12px] tracking-[0.48px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          Mon
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] ml-[19.5px] mt-[15px] relative text-[32px] tracking-[1.28px] translate-x-[-50%]">
        <p className="adjustLetterSpacing block leading-[normal] text-nowrap whitespace-pre">
          30
        </p>
      </div>
    </div>
  );
}

function Date4() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group133 />
    </div>
  );
}

function Group134() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[18px] mt-0 relative text-[#667593] text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Tue
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-[15px] relative text-[#667593] text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          28
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-[17px] mt-[59px] relative size-1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
        >
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #667593)"
            id="Ellipse 1"
            r="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Date5() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group134 />
    </div>
  );
}

function Group135() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-0 relative text-[#667593] text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Wed
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[18.5px] mt-[15px] relative text-[#667593] text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          29
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-[17px] mt-[59px] relative size-1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
        >
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #667593)"
            id="Ellipse 1"
            r="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Date6() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group135 />
    </div>
  );
}

function Group136() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Montserrat:SemiBold',_sans-serif] font-semibold ml-[19px] mt-0 relative text-[#667593] text-[12px] text-center text-nowrap tracking-[0.48px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          Thu
        </p>
      </div>
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[19.5px] mt-[15px] relative text-[#667593] text-[32px] text-center text-nowrap tracking-[1.28px] translate-x-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[normal] whitespace-pre">
          30
        </p>
      </div>
      <div className="[grid-area:1_/_1] ml-[18px] mt-[59px] relative size-1">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 4 4"
        >
          <circle
            cx="2"
            cy="2"
            fill="var(--fill-0, #667593)"
            id="Ellipse 1"
            r="2"
          />
        </svg>
      </div>
    </div>
  );
}

function Date7() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start p-[12px] relative rounded-lg shrink-0"
      data-name="Date"
    >
      <div className="absolute border border-[#667593] border-solid inset-0 pointer-events-none rounded-lg" />
      <Group136 />
    </div>
  );
}

function SwipeableDates({ blockedDates = [], onDateClick, selectedDate }: { 
  blockedDates?: number[]; 
  onDateClick?: (date: number) => void;
  selectedDate?: number;
}) {
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startTranslateX = useRef(0);

  // Calendar dates mapping - these should match the ones from App.tsx
  const calendarDates = [
    { day: 'THU', date: 26 },
    { day: 'FRI', date: 27 },
    { day: 'SAT', date: 28 },
    { day: 'SUN', date: 29 },
    { day: 'MON', date: 30 },
    { day: 'TUE', date: 1 },
    { day: 'WED', date: 2 }
  ];

  // Calculate bounds - dates container is wider than viewport
  const maxTranslate = 0;
  const minTranslate = -200; // Allow scrolling to see more dates

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    startTranslateX.current = translateX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    
    const deltaX = clientX - startX.current;
    const newTranslateX = startTranslateX.current + deltaX;
    
    // Constrain within bounds
    const boundedTranslateX = Math.max(minTranslate, Math.min(maxTranslate, newTranslateX));
    setTranslateX(boundedTranslateX);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleMouseUp = () => {
      handleEnd();
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const handleDateClick = (date: number) => {
    if (!isDragging && onDateClick) {
      onDateClick(date);
    }
  };

  return (
    <div className="absolute left-0 top-[152px] w-[375px] h-[87px] overflow-hidden">
      <div
        ref={containerRef}
        className="absolute box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 w-[573px] select-none"
        data-name="dates"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease-out',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
      >
        {calendarDates.map((dateInfo, index) => (
          <Date 
            key={index}
            dateInfo={dateInfo}
            isBlocked={blockedDates.includes(dateInfo.date)}
            isSelected={selectedDate === dateInfo.date}
            onClick={handleDateClick}
          />
        ))}
      </div>
      
      {/* Visual scroll indicators */}
      {translateX > minTranslate + 10 && (
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-l from-white/90 to-transparent pointer-events-none flex items-center justify-end pr-1">
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60"></div>
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60 ml-0.5"></div>
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60 ml-0.5"></div>
        </div>
      )}
      
      {translateX < -10 && (
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-white/90 to-transparent pointer-events-none flex items-center justify-start pl-1">
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60"></div>
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60 ml-0.5"></div>
          <div className="w-1 h-1 bg-[#667593] rounded-full opacity-60 ml-0.5"></div>
        </div>
      )}
    </div>
  );
}

function Dates({ blockedDates = [], onDateClick, selectedDate }: { 
  blockedDates?: number[]; 
  onDateClick?: (date: number) => void;
  selectedDate?: number;
}) {
  return <SwipeableDates blockedDates={blockedDates} onDateClick={onDateClick} selectedDate={selectedDate} />;
}

function Home() {
  return (
    <div className="relative shrink-0 size-5" data-name="home">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="home">
          <g id="Vector">
            <path d={svgPaths.pca0a7b1} fill="var(--fill-0, #F5F5F5)" />
            <path
              d={svgPaths.p2d4f9980}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => onNavigate?.('dashboard')}
    >
      <Home />
      <div
        className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Home</p>
      </div>
    </div>
  );
}

function CalendarFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar-fill">
          <path
            d={svgPaths.p2431a400}
            fill="var(--fill-0, #F5F5F5)"
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px]"
      style={{
        backgroundImage:
          "linear-gradient(91.5759deg, rgb(26, 38, 82) 4.4853%, rgb(46, 118, 132) 72.168%)",
      }}
    >
      <CalendarFill />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[10px] text-center text-neutral-100 tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Calendar</p>
      </div>
    </div>
  );
}

function ClipboardList() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-list">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clipboard-list">
          <path
            d={svgPaths.p5d88c0}
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

function Frame7({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={() => onNavigate?.('listings')}
    >
      <ClipboardList />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Listings</p>
      </div>
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="currency-dollar">
          <path
            d={svgPaths.p12005030}
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

function Frame8({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const handleClick = () => {
    // Placeholder for billing functionality
    console.log('Billing functionality coming soon!');
  };

  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={handleClick}
    >
      <CurrencyDollar />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Billing</p>
      </div>
    </div>
  );
}

function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="chat-alt-2">
          <path
            d={svgPaths.pf3bce40}
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

function Frame3({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const handleClick = () => {
    // Placeholder for clients functionality
    console.log('Clients functionality coming soon!');
  };

  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={handleClick}
    >
      <ChatAlt2 />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">Clients</p>
      </div>
    </div>
  );
}

function DotsHorizontal() {
  return (
    <div className="relative shrink-0 size-5" data-name="dots-horizontal">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="dots-horizontal">
          <path
            d={svgPaths.p32a3d900}
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

function Frame4({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const handleClick = () => {
    // Placeholder for more menu functionality
    console.log('More menu functionality coming soon!');
  };

  return (
    <div 
      className="box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={handleClick}
    >
      <DotsHorizontal />
      <div className="font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[10px] text-center tracking-[0.2px] w-[79px]">
        <p className="adjustLetterSpacing block leading-[1.5]">More</p>
      </div>
    </div>
  );
}

function BottomNav({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="[flex-flow:wrap] fixed bg-white bottom-0 box-border content-start flex gap-0 h-[75px] items-start justify-center left-1/2 transform -translate-x-1/2 p-0 w-[375px] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
      data-name="bottom nav"
    >
      <Frame1 onNavigate={onNavigate} />
      <Frame2 />
      <Frame7 onNavigate={onNavigate} />
      <Frame8 onNavigate={onNavigate} />
      <Frame3 onNavigate={onNavigate} />
      <Frame4 onNavigate={onNavigate} />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 143 24"
      >
        <g clipPath="url(#clip0_4_3151)" id="Logo">
          <path
            d={svgPaths.pb289280}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_4_3151">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <Logo />
    </div>
  );
}

function LogoContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Logo Container"
    >
      <Frame130 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="user-circle">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 39 39"
      >
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
  );
}

function ActionIcons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <UserCircle />
    </div>
  );
}

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 size-10"
      data-name="Icons"
    >
      <ActionIcons />
    </div>
  );
}

function Header() {
  return (
    <div
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
      data-name="Header"
    >
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoContainer />
      <Icons />
    </div>
  );
}

function CalendarDateViewTimes() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col font-['Montserrat:Medium',_sans-serif] font-medium gap-[42px] items-start justify-start leading-[0] left-4 p-0 text-[#000000] text-[12px] text-left top-[281px] w-[55px]"
      data-name="Calendar/date view/times"
    >
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">9:00 AM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">10:00 AM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">11:00 AM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">12:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">1:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">2:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">3:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">4:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">5:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">6:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">7:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">8:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">9:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">10:00 PM</p>
      </div>
      <div className="relative shrink-0 w-full">
        <p className="block leading-[1.5]">11:00 PM</p>
      </div>
    </div>
  );
}

function LocationMarker() {
  return (
    <div className="relative shrink-0 size-6" data-name="location-marker">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="location-marker">
          <path
            d={svgPaths.p356cbf00}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p2acb45a2}
            id="Vector_2"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame131() {
  return (
    <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0 relative shrink-0">
      <LocationMarker />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          The Garden Loft
        </p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1.5 items-start justify-start p-0 relative shrink-0 w-full">
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Jess + Ryan wedding</p>
      </div>
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">3:00 PM - 11:00 PM</p>
      </div>
      <Frame131 />
      <div
        className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-left tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Booked by: jess@gmail.com</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="absolute bg-purple-100 box-border content-stretch flex flex-col gap-2.5 h-[493px] items-start justify-center left-[110px] p-[12px] top-[281px] w-[203px]"
      data-name="Calendar"
    >
      <Frame132 />
    </div>
  );
}

export default function ZinniaVendorDashboard({ 
  onNavigate, 
  hasCompletedListing, 
  hasVisitedCalendar, 
  currentView,
  blockedDates,
  onDateClick,
  selectedDate
}: ZinniaVendorDashboardProps) {
  return (
    <div
      className="bg-[#ffffff] relative size-full overflow-x-hidden pb-[95px]"
      data-name="Zinnia vendor dashboard"
    >
      <Frame129 />
      <div className="absolute flex h-[446px] items-center justify-center left-[353px] top-[296px] w-[0px]">
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[446px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 446 1"
              >
                <line
                  id="Line 1"
                  stroke="var(--stroke-0, #CCD7E6)"
                  x2="446"
                  y1="0.5"
                  y2="0.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Dates blockedDates={blockedDates} onDateClick={onDateClick} selectedDate={selectedDate} />
      <BottomNav onNavigate={onNavigate} currentView={currentView} />
      <Header />
      <CalendarDateViewTimes />
      <Calendar />
    </div>
  );
}