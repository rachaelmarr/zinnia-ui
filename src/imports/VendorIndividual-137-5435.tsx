import svgPaths from "./svg-oos613hm3m";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";
import imgScreenshot20250211At80525Pm1 from "figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png";
import { imgScreenshot20250211At80525Pm2 } from "./svg-bmd3r";

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
        <g clipPath="url(#clip0_137_3693)" id="Logo">
          <path d={svgPaths.p2b86a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_137_3693">
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
        <g id="home">
          <path d={svgPaths.p2d4f9980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
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
        <g id="home">
          <path d={svgPaths.p2d4f9980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
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
        <g id="clipboard-list">
          <path d={svgPaths.p5d88c0} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
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

function Frame3() {
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
    <div className="h-9 relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Activity</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Notes and tasks</p>
      </div>
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

function Frame5() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[257px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] min-w-full relative shrink-0 text-[#667593] text-[32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">$1,000</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>{`You’re owed. `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">Send invoice.</span>
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
      <Frame7 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0">
      <Frame6 />
      <Frame12040 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Frame10() {
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
      <Frame10 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">312-555-1234</p>
      </div>
    </div>
  );
}

function Frame11() {
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
      <Frame11 />
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

function Frame12() {
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

function Frame13() {
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
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-6 items-start justify-start relative shrink-0 w-[257px]">
      <Frame8 />
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
      <Frame5 />
      <Frame14 />
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

function Warning() {
  return (
    <div className="relative shrink-0 size-5" data-name="warning">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="warning">
          <path d={svgPaths.pdc79980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12041() {
  return (
    <div className="bg-[#f8c964] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <Warning />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Payment overdue</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[201px]">
        <p className="leading-[1.5]">March 10, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">{`Final invoice overdue -- reminder sent. `}</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12041 />
          <Text />
        </div>
      </div>
    </div>
  );
}

function Chat1() {
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

function Frame12042() {
  return (
    <div className="bg-[#ccd7e6] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <Chat1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">SMS Sent</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">March 5, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title1 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">{`Final invoice overdue -- reminder sent. `}</p>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12042 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Mail1() {
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

function Frame12043() {
  return (
    <div className="bg-[#ccd7e6] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <Mail1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">Bulk email sent</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">March 1, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title2 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">Sent “Final Details Reminder” to all booked clients.</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12043 />
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function PencilAlt1() {
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

function Frame12044() {
  return (
    <div className="bg-[#ffcdb2] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <PencilAlt1 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">Internal Note Added</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">Feb 20, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title3 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">Client prefers blush and gold color theme.</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12044 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function CurrencyDollar1() {
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

function Frame12045() {
  return (
    <div className="bg-[#d5f8a8] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <CurrencyDollar1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">Payment received</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">Feb 13, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title4 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">Deposit of $1,000 received via Stripe.</p>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12045 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-5" data-name="calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="home">
          <path d={svgPaths.p2d4f9980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12046() {
  return (
    <div className="bg-[#c7f8eb] box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <Calendar1 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">Meeting completed</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">Feb 10, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title5 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">Venue tour completed. Sarah loved the ballroom!</p>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12046 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function ClipboardCheck() {
  return (
    <div className="relative shrink-0 size-5" data-name="clipboard-check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clipboard-list">
          <path d={svgPaths.p5d88c0} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12047() {
  return (
    <div className="bg-neutral-300 box-border content-stretch flex gap-2.5 items-center justify-start p-[2px] relative rounded-[100px] shrink-0">
      <ClipboardCheck />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex gap-6 items-end justify-start relative shrink-0 w-full" data-name="title">
      <div className="font-['Literata:Medium',_sans-serif] font-medium relative shrink-0 text-[16px] tracking-[0.32px] w-[169px]">
        <p className="leading-[1.5]">Contract signed</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[12px] text-right tracking-[0.24px] w-[171px]">
        <p className="leading-[1.5]">Feb 10, 2025 12:35 PM</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-1 items-start justify-start leading-[0] relative shrink-0 text-[#47567b] w-[364px]" data-name="Text">
      <Title6 />
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[1.5]">{`Sarah & James signed the agreement.`}</p>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#ffffff] relative rounded-lg shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-lg" />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex gap-5 items-center justify-start px-2 py-3 relative w-full">
          <Frame12047 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Frame12034() {
  return (
    <div className="absolute content-stretch flex flex-col gap-9 items-start justify-start top-[221px] w-[440px]" style={{ left: "calc(41.667% + 17px)" }}>
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
    </div>
  );
}

export default function VendorIndividual() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="vendor - individual">
      <GlobalHeaderVendorAdmin />
      <Logo />
      <SideBar />
      <Frame3 />
      <Frame12033 />
      <Frame12034 />
    </div>
  );
}