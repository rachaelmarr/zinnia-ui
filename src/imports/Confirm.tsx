import svgPaths from "./svg-ktp71m2bur";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033 from "figma:asset/d799cc730f1bf8d3c7804cba6580800dc772354f.png";
import imgMap from "figma:asset/3a139f5c438cc3d08ea7f3470b38333bcbc7e543.png";

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
    <div
      className="box-border content-stretch flex gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <ChatAlt2 />
      <Bell />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10" data-name="Avatar">
      <div
        className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[120px]"
        data-name="Webex_Avatar_Molly"
        style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }}
      />
    </div>
  );
}

function RightContent() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-6 grow items-center justify-end min-h-px min-w-px p-0 relative shrink-0"
      data-name=".Right Content"
    >
      <ActionIcons />
      <Avatar />
    </div>
  );
}

function BaseGlobalHeaderDefault() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow h-[72px] min-h-px min-w-px relative shrink-0"
      data-name=".BASE - Global Header/Default"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-11 h-[72px] items-center justify-start px-10 py-4 relative w-full">
          <RightContent />
        </div>
      </div>
    </div>
  );
}

function GlobalHeaderVendorAdmin() {
  return (
    <div
      className="absolute box-border content-stretch flex items-start justify-start left-[0.29px] p-0 top-0 w-[1440px]"
      data-name="Global Header - Vendor Admin"
    >
      <BaseGlobalHeaderDefault />
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
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Home />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path
            d={svgPaths.p111ed900}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem1() {
  return (
    <div
      className="basis-0 bg-[#2e7684] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Calendar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-100 tracking-[0.28px]">
            <p className="block leading-[1.5]">Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem1 />
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

function BaseLeftNavItem2() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ClipboardList />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">{`My Listing & Services`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem2 />
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

function BaseLeftNavItem3() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <CurrencyDollar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Invoices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem3() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem3 />
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

function BaseLeftNavItem4() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ChatAlt3 />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem4() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem4 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-5" data-name="user-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-circle">
          <path
            d={svgPaths.p1de73df0}
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

function BaseLeftNavItem5() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <UserCircle />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem5() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-full"
      data-name="Left Nav Item"
    >
      <BaseLeftNavItem5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
      <LeftNavItem />
      <LeftNavItem1 />
      <LeftNavItem2 />
      <LeftNavItem3 />
      <LeftNavItem4 />
      <LeftNavItem5 />
    </div>
  );
}

function Content() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0 w-full"
      data-name="Content"
    >
      <Frame1 />
    </div>
  );
}

function SideBar() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-11 h-[884px] items-start justify-start left-[40.29px] overflow-clip p-0 top-28 w-[210px]"
      data-name="Side Bar"
    >
      <Content />
    </div>
  );
}

function CalendarDay() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-0 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay1() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-28 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">28</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-56 mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">29</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay3() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-[336px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay4() {
  return (
    <div className="[grid-area:1_/_1] bg-[#e4ecf6] ml-[448px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">31</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay5() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[560px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay6() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] ml-[672px] mt-0 relative size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group125() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CalendarDay />
      <CalendarDay1 />
      <CalendarDay2 />
      <CalendarDay3 />
      <CalendarDay4 />
      <CalendarDay5 />
      <CalendarDay6 />
    </div>
  );
}

function CalendarDay7() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay8() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay9() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11957() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-2 top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
      </div>
    </div>
  );
}

function CalendarDay10() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11957 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11960() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-2 top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">7</p>
      </div>
    </div>
  );
}

function CalendarDay11() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11960 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11968() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">8</p>
      </div>
    </div>
  );
}

function CalendarDay12() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11968 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11969() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-2">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">9</p>
      </div>
    </div>
  );
}

function CalendarDay13() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11969 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11970() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">10</p>
      </div>
    </div>
  );
}

function CalendarDay14() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11970 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11971() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">11</p>
      </div>
    </div>
  );
}

function CalendarDay15() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11971 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11972() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">12</p>
      </div>
    </div>
  );
}

function CalendarDay16() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11972 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay17() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">13</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11973() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">14</p>
      </div>
    </div>
  );
}

function CalendarDay18() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11973 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay19() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">15</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay20() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">16</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay21() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">17</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay22() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">18</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay23() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">19</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay24() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">20</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay25() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">21</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay26() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">22</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="absolute bg-[#ffffff] left-1 overflow-clip rounded-[100px] size-5 top-0.5" data-name="AVATAR">
      <div
        className="absolute bg-center bg-cover bg-no-repeat h-[21.75px] left-[-3.63px] top-0 w-[26.633px]"
        data-name="stock-photo-wedding-bouquet-in-bride-s-hands-david-austin-536417503 3"
        style={{ backgroundImage: `url('${imgStockPhotoWeddingBouquetInBrideSHandsDavidAustin5364175033}')` }}
      />
    </div>
  );
}

function Wedding() {
  return (
    <div
      className="absolute bg-[#2e7684] h-6 left-1/2 overflow-clip rounded-[20px] top-[53.5px] translate-x-[-50%] w-[108px]"
      data-name="wedding"
    >
      <Avatar1 />
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-[27.89px] text-[#ffffff] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Lasso</p>
      </div>
    </div>
  );
}

function CalendarDay27() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">23</p>
        </div>
        <Wedding />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f0f5fa] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay28() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">24</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay29() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">25</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay30() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">26</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Wedding1() {
  return (
    <div
      className="absolute bg-neutral-400 h-6 left-1/2 overflow-clip rounded-[20px] top-[53.5px] translate-x-[-50%] w-[108px]"
      data-name="wedding"
    >
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-4 text-[#ffffff] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Kent + Ro...</p>
      </div>
    </div>
  );
}

function CalendarDay31() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">27</p>
        </div>
        <Wedding1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#47567b] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11974() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">28</p>
      </div>
    </div>
  );
}

function CalendarDay32() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11974 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay33() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">29</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11975() {
  return (
    <div className="absolute bg-[#ffffff] h-[21px] left-[7px] top-[1.5px] w-3.5">
      <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-0 text-[#ccd7e6] text-[14px] text-nowrap top-[10.5px] tracking-[0.28px] translate-y-[-50%]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30</p>
      </div>
    </div>
  );
}

function CalendarDay34() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex h-[145.995px] items-center justify-center left-px top-[2.5px] w-[145.995px]">
          <div className="flex-none rotate-[45deg]">
            <div className="h-0 relative w-[206.475px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 1">
                  <line id="Line 13" stroke="var(--stroke-0, #CCD7E6)" x2="206.475" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame11975 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay35() {
  return (
    <div className="bg-[#ffffff] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">31</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay36() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay37() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">2</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay38() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">3</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay39() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">4</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay40() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CalendarDay41() {
  return (
    <div className="bg-[#f0f5fa] relative shrink-0 size-28" data-name="Calendar day">
      <div className="overflow-clip relative size-28">
        <div className="absolute flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] left-2 text-[#47567b] text-[14px] text-nowrap top-3 tracking-[0.28px] translate-y-[-50%]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">6</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11956() {
  return (
    <div
      className="absolute box-border content-start flex flex-wrap gap-0 h-[664px] items-start justify-start p-0 top-[244px] w-[784px]"
      style={{ left: "calc(16.667% + 30.286px)" }}
    >
      <Group125 />
      <CalendarDay7 />
      <CalendarDay8 />
      <CalendarDay9 />
      <CalendarDay10 />
      <CalendarDay11 />
      <CalendarDay12 />
      <CalendarDay13 />
      <CalendarDay14 />
      <CalendarDay15 />
      <CalendarDay16 />
      <CalendarDay17 />
      <CalendarDay18 />
      <CalendarDay19 />
      <CalendarDay20 />
      <CalendarDay21 />
      <CalendarDay22 />
      <CalendarDay23 />
      <CalendarDay24 />
      <CalendarDay25 />
      <CalendarDay26 />
      <CalendarDay27 />
      <CalendarDay28 />
      <CalendarDay29 />
      <CalendarDay30 />
      <CalendarDay31 />
      <CalendarDay32 />
      <CalendarDay33 />
      <CalendarDay34 />
      <CalendarDay35 />
      <CalendarDay36 />
      <CalendarDay37 />
      <CalendarDay38 />
      <CalendarDay39 />
      <CalendarDay40 />
      <CalendarDay41 />
    </div>
  );
}

function Warning() {
  return (
    <div className="relative shrink-0 size-3" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="warning">
          <path
            d={svgPaths.p3d2be900}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseBadge() {
  return (
    <div
      className="bg-[#a85701] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0"
      data-name=".Base - Badge"
    >
      <Warning />
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Unconfirmed</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0" data-name="Badge">
      <BaseBadge />
    </div>
  );
}

function Heart() {
  return (
    <div className="relative shrink-0 size-6" data-name="heart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="heart">
          <path
            d={svgPaths.p2f964100}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame11959() {
  return (
    <div className="box-border content-stretch flex gap-1 items-center justify-start p-0 relative shrink-0 w-[230px]">
      <Heart />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[225px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`Roy Kent & Keeley Rogers`}</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <Badge />
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[20px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Kent + Rogers Wedding</p>
      </div>
      <Frame11959 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#2e7684] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] adjustLetterSpacing block leading-[1.5] whitespace-pre">
          View Profile
        </p>
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0">
      <Frame126 />
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Confirm</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div
      className="bg-[#8c97ac] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Don’t Confirm</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="box-border content-stretch flex h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex gap-4 items-start justify-start p-0 relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Service Booked</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">Wedding Day</p>
      </div>
    </div>
  );
}

function Frame11965() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame130 />
    </div>
  );
}

function LocationMarkerFill() {
  return (
    <div className="absolute left-[38px] size-5 top-14" data-name="location-marker-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="location-marker-fill">
          <path
            clipRule="evenodd"
            d={svgPaths.p16c81e80}
            fill="var(--fill-0, #2E7684)"
            fillRule="evenodd"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function Map() {
  return (
    <div className="[grid-area:1_/_1] h-[166px] ml-0 mt-0 overflow-clip relative w-[304px]" data-name="map">
      <div
        className="absolute bg-no-repeat bg-size-[100%_100%] bg-top-left h-[448px] left-[-6.5px] top-0 w-[313.5px]"
        data-name="Map"
        style={{ backgroundImage: `url('${imgMap}')` }}
      />
      <div className="absolute left-[143px] size-[11px] top-[33px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
          <circle cx="5.5" cy="5.5" fill="var(--fill-0, #47567B)" id="Ellipse 43" r="5.5" />
        </svg>
      </div>
      <div className="absolute h-[59px] left-12 top-[41px] w-[99px]">
        <div className="absolute inset-[-3.39%_-2.02%_-4.32%_-2.02%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 64">
            <path
              d="M101 2L49 61L16 42L2 35"
              id="Vector 1"
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </div>
      <LocationMarkerFill />
    </div>
  );
}

function Frame131() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start left-0 p-0 top-0 w-[304px]">
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[0px] tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px]">
          <span className="font-['Montserrat:SemiBold',_sans-serif] font-semibold text-[#318913] tracking-[0.28px]">
            10 mins
          </span>
          <span>{` (via Jia Garuda Dr.)`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame11967() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame131 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal grow items-start justify-start leading-[0] min-h-px min-w-px p-0 relative shrink-0 text-[14px] text-right tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b] w-full">
        <p className="block leading-[1.5]">{`1002 Lake Dr. `}</p>
      </div>
      <div className="relative shrink-0 text-[#47567b] w-full">
        <p className="block leading-[1.5]">Chicago, IL 60076</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684] w-full">
        <p className="[text-decoration-line:underline] [text-decoration-skip-ink:none] [text-decoration-style:solid] [text-underline-position:from-font] block leading-[1.5]">
          View on Map
        </p>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start left-0 p-0 top-0 w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Address</p>
      </div>
      <Frame132 />
    </div>
  );
}

function Frame11966() {
  return (
    <div className="h-[63px] relative shrink-0 w-full">
      <Frame133 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-3 items-start justify-start ml-0 mt-[178px] p-0 relative w-[304px]">
      <Frame11967 />
      <Frame11966 />
    </div>
  );
}

function Group126() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Map />
      <Frame134 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Start time</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">10:00 AM</p>
      </div>
    </div>
  );
}

function Frame11961() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame135 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">End Time</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">2:00 PM</p>
      </div>
    </div>
  );
}

function Frame11962() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame136 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="absolute box-border content-stretch flex gap-5 items-start justify-start leading-[0] left-0 p-0 text-[#47567b] text-[14px] top-0 tracking-[0.28px] w-[304px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Total Guests</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">200</p>
      </div>
    </div>
  );
}

function Frame11963() {
  return (
    <div className="h-6 relative shrink-0 w-full">
      <Frame137 />
    </div>
  );
}

function Frame11964() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-full">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-nowrap">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Total Payout</p>
      </div>
      <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-right">
        <p className="block leading-[1.5]">$5,000</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]"
      data-name="Text Container"
    >
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-nowrap whitespace-pre">Notes</p>
      </div>
      <div className="relative shrink-0">
        <p className="adjustLetterSpacing block leading-[1.5] text-[14px] text-nowrap whitespace-pre">&nbsp;</p>
      </div>
    </div>
  );
}

function InformationCircleFill() {
  return (
    <div className="relative shrink-0 size-4" data-name="information-circle-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="information-circle-fill">
          <path d={svgPaths.p337a47f0} fill="var(--fill-0, #667593)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer />
      <InformationCircleFill />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Notes about this job....</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-[76px] relative rounded-lg shrink-0 w-[308px]" data-name=".Core - Input Field">
      <div className="box-border content-stretch flex gap-2 h-[76px] items-start justify-start overflow-clip px-3 py-1 relative w-[308px]">
        <TextContainer1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[308px]"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel />
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[308px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function Frame138() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-5 items-start justify-start left-[18.71px] p-0 top-16 w-[304px]">
      <Frame128 />
      <Frame129 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11965 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Group126 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11961 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11962 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11963 />
      <div className="h-0 relative shrink-0 w-[307.664px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 308 1">
            <line id="Line 15" stroke="var(--stroke-0, #CCD7E6)" x2="307.664" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame11964 />
      <div className="h-0 relative shrink-0 w-[304px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 304 1">
            <line id="Line 19" stroke="var(--stroke-0, #CCD7E6)" x2="304" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <TextInput />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-5 size-6 top-5" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
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

function Frame11958() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[1048px] overflow-clip top-[72px] w-[365px]"
      style={{ left: "calc(75% - 5px)" }}
    >
      <Frame138 />
      <X />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div
      className="absolute size-6 top-[203.5px]"
      data-name="chevron-left"
      style={{ left: "calc(16.667% + 34.286px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-left">
          <path
            d="M15 19L8 12L15 5"
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

function ChevronRight() {
  return (
    <div className="absolute size-6 top-[199px]" data-name="chevron-right" style={{ left: "calc(66.667% + 53px)" }}>
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

function X1() {
  return (
    <div className="absolute left-[556px] size-6 top-0" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path
            d="M6 6L18 18M6 18L18 6L6 18Z"
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

function Frame127() {
  return (
    <div className="absolute h-[27px] left-[0.29px] top-4 w-[600px]">
      <div className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] left-[299.71px] text-[#47567b] text-[18px] text-center top-0 translate-x-[-50%] w-[600px]">
        <p className="block leading-[1.5]">Confirm Kent + Rogers wedding</p>
      </div>
      <X1 />
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-6" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calendar">
          <path
            d={svgPaths.pb85af80}
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

function Frame139() {
  return (
    <div className="absolute box-border content-stretch flex gap-2 items-start justify-start left-1/2 p-0 top-[51px] translate-x-[-50%]">
      <Calendar1 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">September 27th, 2023 | 10:00 AM</p>
      </div>
    </div>
  );
}

function BaseButton2() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Cancel</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="box-border content-stretch flex h-9 items-center justify-center p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton2 />
    </div>
  );
}

function BaseButton3() {
  return (
    <div
      className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`I agree & confirm`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div
      className="box-border content-stretch flex h-9 items-center justify-start p-0 relative shrink-0"
      data-name="Button"
    >
      <BaseButton3 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="absolute box-border content-stretch flex gap-2 items-start justify-start left-[348px] p-0 top-[219px]">
      <Button2 />
      <Button3 />
    </div>
  );
}

function COnfirmation() {
  return (
    <div
      className="absolute bg-[#ffffff] h-[275px] overflow-clip rounded-lg translate-x-[-50%] translate-y-[-50%] w-[600px]"
      data-name="COnfirmation"
      style={{ top: "calc(50% - 3.5px)", left: "calc(50% - 0.286px)" }}
    >
      <Frame127 />
      <div className="absolute font-['Literata:Medium',_sans-serif] font-medium leading-[0] left-[60.29px] text-[#47567b] text-[14px] top-[99px] tracking-[0.28px] w-[480px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          By confirming Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nibh massa, gravida eget diam eget,
          rutrum bibendum ante. Nulla elementum diam placerat augue volutpat, eu iaculis quam ullamcorper.
        </p>
      </div>
      <Frame139 />
      <Frame140 />
    </div>
  );
}

export default function Confirm() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="Confirm">
      <GlobalHeaderVendorAdmin />
      <SideBar />
      <Frame11956 />
      <div
        className="absolute flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center leading-[0] text-[#47567b] text-[18px] text-center top-[212.5px] translate-x-[-50%] translate-y-[-50%] w-[784px]"
        style={{ left: "calc(16.667% + 422.286px)" }}
      >
        <p className="block leading-[1.5]">September</p>
      </div>
      <div
        className="absolute font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] text-[#47567b] text-[32px] text-center top-28 translate-x-[-50%] w-[784px]"
        style={{ left: "calc(16.667% + 422.286px)" }}
      >
        <p className="block leading-[1.5]">Availability</p>
      </div>
      <Frame11958 />
      <ChevronLeft />
      <ChevronRight />
      <div className="absolute bg-[rgba(204,215,230,0.8)] h-[1392px] left-[-52px] top-[-128px] w-[1636px]" />
      <COnfirmation />
    </div>
  );
}