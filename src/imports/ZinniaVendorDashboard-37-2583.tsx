import svgPaths from "./svg-hp3xt4pm6y";
import BottomNav from "../../components/BottomNav";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

interface VendorListingsProps {
  onNavigate?: (view: string) => void;
  currentView?: string;
}

function Top() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-6 h-[52px] items-center justify-start p-0 relative shrink-0 w-full"
      data-name="Top"
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-left w-[360px]">
        <p className="block leading-[1.2]">Listings</p>
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

function Frame129() {
  return (
    <div className="absolute box-border content-stretch flex flex-row gap-1 items-center justify-start left-[13px] p-0 top-[88px]">
      <Frame126 />
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
        <g clipPath="url(#clip0_37_2590)" id="Logo">
          <path
            d={svgPaths.p33702600}
            fill="var(--fill-0, #47567B)"
            id="Zinnia"
          />
        </g>
        <defs>
          <clipPath id="clip0_37_2590">
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
      className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
      data-name="Header"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <LogoContainer />
      <Icons onNavigate={onNavigate} />
    </div>
  );
}

function Layer1() {
  return (
    <div
      className="absolute inset-[17.84%_11.74%_10.73%_7.99%]"
      data-name="Layer_1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 161 143"
      >
        <g id="Layer_1">
          <path
            d={svgPaths.p5e03900}
            fill="var(--fill-0, #47567B)"
            id="Vector"
          />
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
      className="absolute left-20 overflow-clip size-[200px] top-[216px]"
      data-name="Illustration"
    >
      <Group1 />
    </div>
  );
}

function BaseButton({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      onClick={() => onNavigate?.('addPhotos')}
      className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0 cursor-pointer bg-[#47567b] hover:bg-[#3e4b6b] transition-colors"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Create your listing
        </p>
      </div>
    </div>
  );
}

function Button({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton onNavigate={onNavigate} />
    </div>
  );
}

function Frame128({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 top-[430px] translate-x-[-50%] w-[301px]"
      style={{ left: "calc(50% - 8px)" }}
    >
      <div
        className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[24px] text-center"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Let couples know what you offer</p>
      </div>
      <div
        className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] text-center tracking-[0.28px]"
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">
          Create your listing to show up in search, set your services and
          pricing, and help couples understand if you're the right fit.
        </p>
      </div>
      <Button onNavigate={onNavigate} />
    </div>
  );
}

function Group128({ onNavigate }: { onNavigate?: (view: string) => void }) {
  return (
    <div className="absolute contents left-[29px] top-[216px]">
      <Illustration />
      <Frame128 onNavigate={onNavigate} />
    </div>
  );
}

export default function VendorListings({ onNavigate, currentView }: VendorListingsProps) {
  return (
    <div
      className="bg-neutral-50 relative size-full pb-[95px]"
      data-name="Zinnia vendor dashboard"
    >
      <Frame129 />
      <div className="absolute font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] left-4 text-[#000000] text-[12px] text-left text-nowrap top-[985px]">
        <p className="block leading-[1.5] whitespace-pre">2:00 AM</p>
      </div>
      <BottomNav onNavigate={onNavigate} currentView={currentView} />
      <Header onNavigate={onNavigate} />
      <Group128 onNavigate={onNavigate} />
    </div>
  );
}