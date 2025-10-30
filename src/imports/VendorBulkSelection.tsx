import svgPaths from "./svg-3zb67tnx7t";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import imgScreenshot20250211At80525Pm1 from "figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png";
import { imgScreenshot20250211At80525Pm2 } from "./svg-bmdim";

function ChatAlt2() {
  return (
    <div className="relative shrink-0 size-6" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chat-alt-2">
          <path d={svgPaths.p3a2fce80} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
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
          <path d={svgPaths.pe392c80} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="content-stretch flex gap-4 items-start justify-start relative shrink-0" data-name="Action Icons">
      <ChatAlt2 />
      <Bell />
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-10" data-name="Avatar">
      <div className="absolute bg-center bg-cover bg-no-repeat inset-0 rounded-[120px]" data-name="Webex_Avatar_Molly" style={{ backgroundImage: `url('${imgWebexAvatarMolly}')` }} />
    </div>
  );
}

function RightContent() {
  return (
    <div className="basis-0 content-stretch flex gap-6 grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name=".Right Content">
      <ActionIcons />
      <Avatar />
    </div>
  );
}

function BaseGlobalHeaderDefault() {
  return (
    <div className="basis-0 bg-[#ffffff] grow h-[72px] min-h-px min-w-px relative shrink-0" data-name=".BASE - Global Header/Default">
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
    <div className="absolute content-stretch flex items-start justify-start left-0 top-0 w-[1440px]" data-name="Global Header - Vendor Admin">
      <BaseGlobalHeaderDefault />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-6 left-10 top-6 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_139_8021)" id="Logo">
          <path d={svgPaths.p24342a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_139_8021">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-5" data-name="home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path d={svgPaths.p111ed900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Home />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="calendar">
          <path d={svgPaths.p111ed900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem1() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Calendar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">Availability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem1 />
    </div>
  );
}

function UserGroup() {
  return (
    <div className="relative shrink-0 size-5" data-name="user-group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="user-group">
          <path d={svgPaths.p19860600} id="Vector" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem2() {
  return (
    <div className="basis-0 bg-[#2e7684] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <UserGroup />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-100 tracking-[0.28px]">
            <p className="leading-[1.5]">Contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem2 />
    </div>
  );
}

function ClipboardList() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clipboard-check">
          <path d={svgPaths.p1f70dd00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem3() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ClipboardList />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">{`My Listing & Services`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem3() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem3 />
    </div>
  );
}

function CurrencyDollar() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar">
          <path d={svgPaths.p12005030} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem4() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <CurrencyDollar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">Bookings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem4() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem4 />
    </div>
  );
}

function ChatAlt3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat-alt-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat-alt-2">
          <path d={svgPaths.pf3bce40} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem5() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ChatAlt3 />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">Messages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem5() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem5 />
    </div>
  );
}

function UserCircle() {
  return (
    <div className="relative shrink-0 size-5" data-name="user-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar">
          <path d={svgPaths.p12005030} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem6() {
  return (
    <div className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <UserCircle />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="leading-[1.5]">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftNavItem6() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0 w-full" data-name="Left Nav Item">
      <BaseLeftNavItem6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <LeftNavItem />
      <LeftNavItem1 />
      <LeftNavItem2 />
      <LeftNavItem3 />
      <LeftNavItem4 />
      <LeftNavItem5 />
      <LeftNavItem6 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Frame1 />
    </div>
  );
}

function SideBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-11 h-[884px] items-start justify-start left-10 overflow-clip top-[92px] w-[210px]" data-name="Side Bar">
      <Content />
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-6" data-name="arrow-left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow-left">
          <path d={svgPaths.p3e896500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-1 items-center justify-start top-[88px]" style={{ left: "calc(16.667% + 30px)" }}>
      <ArrowLeft />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Back to contacts</p>
      </div>
    </div>
  );
}

function BaseUnderlinedTabItem() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Activity</p>
      </div>
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div className="h-9 relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Notes and tasks</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BaseUnderlinedTabItem2() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Messages</p>
      </div>
    </div>
  );
}

function UnderlinedTabs() {
  return (
    <div className="absolute content-stretch flex gap-4 items-start justify-start left-[347px] top-[29px] w-[825px]" data-name="Underlined Tabs">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
      <BaseUnderlinedTabItem />
      <BaseUnderlinedTabItem1 />
      <BaseUnderlinedTabItem2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[94px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[90px_90px] ml-[-2px] mt-[-2px] w-[101px]" data-name="Screenshot 2025-02-11 at 8.05.25 PM 1" style={{ backgroundImage: `url('${imgScreenshot20250211At80525Pm1}')`, maskImage: `url('${imgScreenshot20250211At80525Pm2}')` }} />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-5" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="mail">
          <path d={svgPaths.p80d7900} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Mail />
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-5" data-name="chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat">
          <path d={svgPaths.pac89d00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Chat />
    </div>
  );
}

function PencilAlt() {
  return (
    <div className="relative shrink-0 size-5" data-name="pencil-alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="pencil-alt">
          <path d={svgPaths.p27607500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <PencilAlt />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-5" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="trash">
          <path d={svgPaths.p9c56500} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0" data-name="Quick actions">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-center relative shrink-0 w-full">
      <MaskGroup />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">John Doe</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          Last activity
          <br aria-hidden="true" />
          February 6, 2025 12:35 PM
        </p>
      </div>
      <QuickActions />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>{`You’ve been paid. `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">View invoice</span>
        </p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[257px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#667593] text-[32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">$1,000</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>{`You’re owed. `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">Send reminder</span>
        </p>
      </div>
    </div>
  );
}

function Frame12040() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[257px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#dc332e] text-[32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">$2,000</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0">
      <Frame7 />
      <Frame12040 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Email</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12038() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame10 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Phone number</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12036() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame11 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">312-555-1234</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Address</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function Frame12037() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start leading-[0] relative shrink-0 w-full">
      <Frame12 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          10607 Lockridge drive
          <br aria-hidden="true" />
          Silver Spring, MD
          <br aria-hidden="true" />
          20901
        </p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex font-['Montserrat:Regular',_sans-serif] font-normal gap-1 items-start justify-start leading-[0] relative shrink-0 text-[14px] text-nowrap tracking-[0.28px]">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Tags</p>
      </div>
      <div className="relative shrink-0 text-[#2e7684]">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[1.5] text-nowrap underline whitespace-pre">Edit</p>
      </div>
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">New lead</p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge />
    </div>
  );
}

function BaseBadge1() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Interested</p>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge1 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0">
      <Badge />
      <Badge1 />
    </div>
  );
}

function Frame12039() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[257px]">
      <Frame9 />
      <Frame12038 />
      <Frame12036 />
      <Frame12037 />
      <Frame12039 />
    </div>
  );
}

function Contact() {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-start justify-start left-9 top-[29px] w-[257px]" data-name="contact">
      <Frame6 />
      <Frame15 />
    </div>
  );
}

function Frame12033() {
  return (
    <div className="absolute bg-[#ffffff] h-[892px] rounded-lg top-[132px] w-[1130px]" style={{ left: "calc(16.667% + 30px)" }}>
      <div className="h-[892px] overflow-clip relative w-[1130px]">
        <UnderlinedTabs />
        <div className="absolute flex h-[787px] items-center justify-center left-[324px] top-[29px] w-[0px]">
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[787px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 787 1">
                  <line id="Line 6" stroke="var(--stroke-0, #CCD7E6)" x2="787" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]" data-name="Text Container">
      <div className="relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Type</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">*</p>
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
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer />
      <InformationCircleFill />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Note</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #667593)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
          <ChevronDown />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function CoreHelperText() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Helper Text">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Just for reference, no action needed.</p>
      </div>
    </div>
  );
}

function BaseInputField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel />
      <CoreInputField />
      <CoreHelperText />
    </div>
  );
}

function BaseDropdown() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name=".Base - Dropdown">
      <BaseInputField />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Dropdown">
      <BaseDropdown />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex font-['Literata:Medium',_sans-serif] font-medium gap-0.5 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]" data-name="Text Container">
      <div className="relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Title</p>
      </div>
      <div className="relative shrink-0">
        <p className="leading-[1.5] text-nowrap whitespace-pre">(required)</p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Placeholder text</p>
      </div>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer3 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel1 />
      <CoreInputField1 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Text Input">
      <BaseInputField1 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Description</p>
      </div>
    </div>
  );
}

function CoreInputLabel2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Placeholder text</p>
      </div>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-[62px] relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-[62px] items-center justify-start px-3 py-2 relative w-full">
          <TextContainer5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ccd7e6] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Add note</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-9 items-center justify-center relative shrink-0" data-name="Button">
      <BaseButton />
    </div>
  );
}

function BaseInputField2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel2 />
      <CoreInputField2 />
      <Button />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full" data-name="Text Input">
      <BaseInputField2 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start pl-5 pr-0 py-0 relative w-full">
          <TextInput />
          <TextInput1 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start justify-start relative shrink-0 w-[400px]">
      <Dropdown />
      <Frame16 />
    </div>
  );
}

function BaseBadge2() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Note</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge2 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Client prefers blush decor</p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Input Label">
      <TextContainer6 />
    </div>
  );
}

function CoreHelperText1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Helper Text">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">{`Sarah wants all table settings to be blush & gold.`}</p>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Text Container">
      <CoreInputLabel3 />
      <CoreHelperText1 />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <TextContainer7 />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Checkbox">
      <BaseCheckbox />
    </div>
  );
}

function Pencil() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-4" data-name="pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="pencil">
          <path d={svgPaths.pf2db700} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Trash1() {
  return (
    <div className="[grid-area:1_/_1] ml-7 mt-0 relative size-4" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash">
          <path d={svgPaths.p15061780} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Pencil />
      <Trash1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-end justify-start leading-[0] relative shrink-0 w-[231px]">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#47567b] text-[12px] text-right tracking-[0.24px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">Created March 5, 2025 9:42 PM</p>
      </div>
      <Group2 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0 w-full">
      <Checkbox />
      <Frame3 />
    </div>
  );
}

function Frame12044() {
  return (
    <div className="relative rounded-lg shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[20px] relative w-full">
          <Badge2 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function BaseBadge3() {
  return (
    <div className="bg-[#a75701] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Task</p>
      </div>
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge3 />
    </div>
  );
}

function CheckboxBox1() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function InputContainer1() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <CheckboxBox1 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Follow up on catering</p>
      </div>
    </div>
  );
}

function CoreInputLabel4() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Input Label">
      <TextContainer8 />
    </div>
  );
}

function CoreHelperText2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Helper Text">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Client is undecided between plated or buffet.</p>
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Text Container">
      <CoreInputLabel4 />
      <CoreHelperText2 />
    </div>
  );
}

function BaseCheckbox1() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <InputContainer1 />
      <TextContainer9 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Checkbox">
      <BaseCheckbox1 />
    </div>
  );
}

function Pencil1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-4" data-name="pencil">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="pencil">
          <path d={svgPaths.pf2db700} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Trash2() {
  return (
    <div className="[grid-area:1_/_1] ml-7 mt-0 relative size-4" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash">
          <path d={svgPaths.p15061780} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Pencil1 />
      <Trash2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-end justify-start leading-[0] relative shrink-0 w-[230px]">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[#47567b] text-[12px] text-right tracking-[0.24px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">Due in 3 days</p>
      </div>
      <Group3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[13px] items-center justify-start relative shrink-0 w-full">
      <Checkbox1 />
      <Frame19 />
    </div>
  );
}

function Frame12043() {
  return (
    <div className="relative rounded-lg shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[20px] relative w-full">
          <Badge3 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-start relative shrink-0 w-full">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[1.5]">{`March 2025 `}</p>
      </div>
      <Frame12044 />
      <Frame12043 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-6 items-start justify-start top-[217px] w-[636px]" style={{ left: "calc(41.667% + 17px)" }}>
      <Frame17 />
      <Frame21 />
    </div>
  );
}

export default function VendorBulkSelection() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="Vendor - bulk selection">
      <GlobalHeaderVendorAdmin />
      <Logo />
      <SideBar />
      <Frame5 />
      <Frame12033 />
      <Frame22 />
    </div>
  );
}