import svgPaths from "../imports/svg-hp3xt4pm6y";

interface BottomNavProps {
  onNavigate?: (view: string) => void;
  currentView?: string;
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

function Frame1({ onNavigate, isActive }: { onNavigate?: (view: string) => void; isActive?: boolean }) {
  return (
    <div 
      onClick={() => onNavigate?.('dashboard')}
      className={`box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? 'bg-gradient-to-b from-[#1a2652] to-[#2e7684]' : ''}`}
    >
      <Home />
      <div
        className={`font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[10px] text-center tracking-[0.2px] ${isActive ? 'text-neutral-100' : 'text-[#47567b]'}`}
        style={{ width: "min-content" }}
      >
        <p className="block leading-[1.5]">Home</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
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

function Frame2({ onNavigate, isActive }: { onNavigate?: (view: string) => void; isActive?: boolean }) {
  return (
    <div 
      onClick={() => onNavigate?.('calendar')}
      className={`box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? 'bg-gradient-to-b from-[#1a2652] to-[#2e7684]' : ''}`}
    >
      {isActive ? <CalendarFill /> : <Calendar />}
      <div className={`font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[10px] text-center tracking-[0.2px] w-[79px] ${isActive ? 'text-neutral-100' : 'text-[#47567b]'}`}>
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

function ClipboardFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-fill">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="clipboard-fill">
          <path
            d={svgPaths.p18157200}
            fill="var(--fill-0, #F5F5F5)"
            id="Vector"
            stroke="var(--stroke-0, #F5F5F5)"
          />
          <path
            d={svgPaths.p21c86a00}
            fill="var(--fill-0, #F5F5F5)"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame7({ onNavigate, isActive }: { onNavigate?: (view: string) => void; isActive?: boolean }) {
  return (
    <div 
      onClick={() => onNavigate?.('listings')}
      className={`box-border content-stretch flex flex-col gap-2 h-[75px] items-center justify-center p-0 relative shrink-0 w-[55px] cursor-pointer hover:bg-gray-50 transition-colors ${isActive ? 'bg-gradient-to-b from-[#1a2652] to-[#2e7684]' : ''}`}
    >
      {isActive ? <ClipboardFill /> : <ClipboardList />}
      <div className={`font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[10px] text-center tracking-[0.2px] w-[79px] ${isActive ? 'text-neutral-100' : 'text-[#47567b]'}`}>
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

export default function BottomNav({ onNavigate, currentView }: BottomNavProps) {
  return (
    <div
      className="[flex-flow:wrap] fixed bg-white bottom-0 box-border content-start flex gap-0 h-[75px] items-start justify-center left-1/2 transform -translate-x-1/2 p-0 w-[375px] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]"
      data-name="bottom nav"
    >
      <Frame1 onNavigate={onNavigate} isActive={currentView === 'dashboard'} />
      <Frame2 onNavigate={onNavigate} isActive={currentView === 'calendar'} />
      <Frame7 onNavigate={onNavigate} isActive={currentView === 'listings'} />
      <Frame8 onNavigate={onNavigate} />
      <Frame3 onNavigate={onNavigate} />
      <Frame4 onNavigate={onNavigate} />
    </div>
  );
}