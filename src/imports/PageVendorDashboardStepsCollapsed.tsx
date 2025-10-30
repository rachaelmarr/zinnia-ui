import svgPaths from "./svg-uce3lavw1z";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import BottomNav from "../../components/BottomNav";

interface VendorDashboardProps {
  onNavigate?: (view: string) => void;
  hasCompletedListing?: boolean;
  hasVisitedCalendar?: boolean;
  currentView?: string;
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
        <g clipPath="url(#clip0_1_2416)" id="Logo">
          <path
            d={svgPaths.p28a7000}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2416">
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

function UserCircle({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const { signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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
      
      {/* Dropdown Menu */}
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

function ActionIcons({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <UserCircle onNavigate={onNavigate} />
    </div>
  );
}

function Icons({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0 size-10"
      data-name="Icons"
    >
      <ActionIcons onNavigate={onNavigate} />
    </div>
  );
}

function Header({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between px-4 py-5 relative shrink-0 w-full"
      data-name="Header"
    >
      <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LogoContainer />
      <Icons onNavigate={onNavigate} />
    </div>
  );
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-center w-[360px]">
        <p className="block leading-[1.2]">0/4 steps done</p>
      </div>
    </div>
  );
}

function Top1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px]">
        <p className="block leading-[1.5]">{`Once your profile is complete customers can book you. `}</p>
      </div>
    </div>
  );
}

function MainHeader({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-0.5 items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Main Header"
    >
      <Top1 />
    </div>
  );
}

function Frame125({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#667593] text-[14px] text-center tracking-[0.28px] w-full">
        <p className="block leading-[1.5]">Welcome Ted Lasso!</p>
      </div>
      <Top />
      <MainHeader onNavigate={onNavigate} />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative size-6" data-name="chevron-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
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
  );
}

function GroupSetupstepsCollapsed({ onNavigate }: { onNavigate?: (view: string) => void }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-[340px]"
      data-name="Group/setupsteps/collapsed"
    >
      <Frame125 onNavigate={onNavigate} />
      <div 
        className="flex items-center justify-center relative shrink-0 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
        onClick={toggleExpanded}
      >
        <div className={`flex-none transition-transform ${isExpanded ? 'rotate-0' : 'rotate-[180deg]'}`}>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
}

function Top2() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-[17.503px] items-center justify-start p-0 relative shrink-0 w-[373px]"
      data-name="Top"
    >
      <div className="basis-0 font-['Literata:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[20px] text-center">
        <p className="block leading-[1.5]">My Calendar</p>
      </div>
    </div>
  );
}

function MainHeader1() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-[1.459px] items-start justify-start left-0 p-0 top-0 w-[308px]"
      data-name="Main Header"
    >
      <Top2 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Page Header">
      <MainHeader1 />
    </div>
  );
}

function Day() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day1() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day2() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.733px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day3() {
  return (
    <div
      className="absolute bg-[#ffffff] left-[123.982px] rounded-[72.9305px] size-[43.758px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.233px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div className="absolute border-[#47567b] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Day4() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            5
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day5() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.233px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            6
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day6() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.868px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            7
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Week3() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 3"
    >
      <Day />
      <Day1 />
      <Day2 />
      <Day3 />
      <Day4 />
      <Day5 />
      <Day6 />
    </div>
  );
}

function Day7() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.774px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            8
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day8() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.503px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            9
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day9() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            10
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day10() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            11
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day11() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            12
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day12() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.409px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            13
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day13() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.18px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            14
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Week6() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 6"
    >
      <Day7 />
      <Day8 />
      <Day9 />
      <Day10 />
      <Day11 />
      <Day12 />
      <Day13 />
    </div>
  );
}

function Day14() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.951px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            15
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day15() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            16
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day16() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            17
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day17() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.909px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            18
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day18() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            19
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day19() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.451px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            20
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day20() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.9305px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            21
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Week7() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 7"
    >
      <Day14 />
      <Day15 />
      <Day16 />
      <Day17 />
      <Day18 />
      <Day19 />
      <Day20 />
    </div>
  );
}

function Day21() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[19.857px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            22
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day22() {
  return (
    <div
      className="absolute h-[40.112px] left-[40.112px] rounded-[72.9305px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.586px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            23
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Day23() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            24
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day24() {
  return (
    <div
      className="absolute h-[40.112px] left-[123.982px] rounded-[72.9305px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.68px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            25
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Day25() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            26
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day26() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.815px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            27
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day27() {
  return (
    <div
      className="absolute h-[40.112px] left-[252.34px] rounded-[72.9305px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.086px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            28
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none rounded-[72.9305px]" />
    </div>
  );
}

function Week8() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 8"
    >
      <Day21 />
      <Day22 />
      <Day23 />
      <Day24 />
      <Day25 />
      <Day26 />
      <Day27 />
    </div>
  );
}

function Day28() {
  return (
    <div
      className="absolute bg-[#ffffff] left-0 size-[40.112px] top-0"
      data-name="day"
    >
      <div className="overflow-clip relative size-[40.112px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.357px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            29
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day29() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[40.112px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.721px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            30
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day30() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[81.682px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.045px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            31
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day31() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[123.982px] top-0 w-[43.758px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.758px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.191px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            1
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day32() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[167.74px] top-0 w-[41.57px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[41.57px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[21.368px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            2
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day33() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[209.311px] top-0 w-[43.029px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[43.029px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[22.097px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            3
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Day34() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[40.112px] left-[252.34px] top-0 w-[42.3px]"
      data-name="day"
    >
      <div className="h-[40.112px] overflow-clip relative w-[42.3px]">
        <div className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] left-[20.503px] text-[#47567b] text-[12px] text-center text-nowrap top-[12.398px] tracking-[0.24px] translate-x-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            4
          </p>
        </div>
      </div>
      <div className="absolute border-[#ffffff] border-[0.364653px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Week9() {
  return (
    <div
      className="h-[43.758px] relative shrink-0 w-[299.015px]"
      data-name="Week 9"
    >
      <Day28 />
      <Day29 />
      <Day30 />
      <Day31 />
      <Day32 />
      <Day33 />
      <Day34 />
    </div>
  );
}

function Month() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col h-[218.792px] items-start justify-start left-[13.127px] p-0 top-[55.036px] w-[294.639px]"
      data-name="Month"
    >
      <Week3 />
      <Week6 />
      <Week7 />
      <Week8 />
      <Week9 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[17.503px]" data-name="chevron-left">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="chevron-left">
          <path
            d={svgPaths.p1d08b380}
            id="Vector"
            stroke="var(--stroke-0, #CCD7E6)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.45861"
          />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div
      className="relative shrink-0 size-[17.503px]"
      data-name="chevron-right"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 18"
      >
        <g id="chevron-right">
          <path
            d={svgPaths.p1e8d2100}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.45861"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame127() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-[61.991px] items-center justify-start left-[27.714px] p-0 top-[24.405px]">
      <ChevronLeft />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-left text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">September 2023</p>
      </div>
      <ChevronRight />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
            Manage Availability
          </p>
        </div>
      </div>
      <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function ButtonOutlineManageAvailability() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center p-0 top-[280px] translate-x-[-50%]"
      data-name="Button/Outline/manageAvailability"
      style={{ left: "calc(50% + 0.5px)" }}
    >
      <BaseButton />
    </div>
  );
}

function Calendar() {
  return (
    <div
      className="bg-[#ffffff] h-[340px] relative rounded-[11.6689px] shrink-0 w-[321px]"
      data-name="Calendar"
    >
      <div className="h-[340px] overflow-clip relative w-[321px]">
        <Month />
        <Frame127 />
        <ButtonOutlineManageAvailability />
      </div>
      <div className="absolute border-[#ccd7e6] border-[0.729306px] border-solid inset-0 pointer-events-none rounded-[11.6689px]" />
    </div>
  );
}

function GroupCalendar({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="bg-[#ccd7e6] box-border content-stretch flex flex-col gap-2 items-center justify-start overflow-clip px-0 py-7 relative shrink-0 w-full cursor-pointer"
      data-name="Group/Calendar"
      onClick={() => onNavigate?.('calendar')}
    >
      <PageHeader />
      <Calendar />
    </div>
  );
}

export default function VendorDashboard({ onNavigate, hasCompletedListing, hasVisitedCalendar, currentView }: VendorDashboardProps) {
  return (
    <div
      className="bg-neutral-50 flex flex-col min-h-screen relative w-full pb-[95px] overflow-y-auto"
      data-name="Zinnia vendor dashboard"
    >
      <Header onNavigate={onNavigate} />
      <div className="flex-1 px-4 pt-6 space-y-6">
        <GroupSetupstepsCollapsed onNavigate={onNavigate} />
        <GroupCalendar onNavigate={onNavigate} />
      </div>
      <BottomNav onNavigate={onNavigate} currentView={currentView} />
    </div>
  );
}