import svgPaths from "./svg-53l921gdn4";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";

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
      className="absolute box-border content-stretch flex items-start justify-start left-0 p-0 top-0 w-[1440px]"
      data-name="Global Header - Vendor Admin"
    >
      <BaseGlobalHeaderDefault />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_69_2112)" id="Logo">
          <path d={svgPaths.p34ba2900} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_69_2112">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoContainer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col items-center justify-start left-5 p-0 top-6 w-[187px]"
      data-name="Logo Container"
    >
      <Logo />
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute inset-[17.84%_11.74%_10.73%_7.99%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 161 143">
        <g id="Layer_1">
          <path d={svgPaths.p5e03900} fill="var(--fill-0, #47567B)" id="Vector" />
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
      className="absolute overflow-clip size-[200px] top-[292px]"
      data-name="Illustration"
      style={{ left: "calc(41.667% + 20px)" }}
    >
      <Group1 />
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Create listing</p>
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

function Frame128() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 top-[506px]"
      style={{ left: "calc(33.333% + 5px)" }}
    >
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[24px] text-nowrap">
        <p className="block leading-[1.5] whitespace-pre">Create your listing</p>
      </div>
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] text-center tracking-[0.28px] w-[470px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre-wrap">
          <span>{`lorem upsum dolor sit.  lorem upsum dolor sit. lorem upsum dolor sit. `}</span>
          <span className="adjustLetterSpacing font-['Literata:Medium',_sans-serif] font-medium tracking-[0.28px]">{`lorem upsum dolor sit.  lorem upsum dolor sit. `}</span>
        </p>
      </div>
      <Button />
    </div>
  );
}

function Group128() {
  return (
    <div className="absolute contents top-[292px]" style={{ left: "calc(33.333% + 5px)" }}>
      <Illustration />
      <Frame128 />
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

function BaseLeftNavItem1() {
  return (
    <div
      className="basis-0 bg-[rgba(47,118,133,0)] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <Calendar />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px]">
            <p className="block leading-[1.5]">Calendar</p>
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
            stroke="var(--stroke-0, #F5F5F5)"
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
      className="basis-0 bg-[#2e7684] grow min-h-px min-w-px relative rounded-lg shrink-0"
      data-name=".BASE - Left Nav Item"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <ClipboardList />
          <div className="basis-0 font-['Montserrat:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[14px] text-neutral-100 tracking-[0.28px]">
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
      className="absolute box-border content-stretch flex flex-col gap-11 h-[884px] items-start justify-start left-10 overflow-clip p-0 top-28 w-[210px]"
      data-name="Side Bar"
    >
      <Content />
    </div>
  );
}

export default function ListingAndServicesEmpty() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="Listing and services -- empty">
      <GlobalHeaderVendorAdmin />
      <LogoContainer />
      <Group128 />
      <SideBar />
    </div>
  );
}