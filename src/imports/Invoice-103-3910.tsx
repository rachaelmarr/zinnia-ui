import svgPaths from "./svg-qfq07qodim";
import imgWebexAvatarMolly from "figma:asset/ddae9a87c44079ea58a9a4302f88e72c330120cd.png";

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
        <g clipPath="url(#clip0_103_5140)" id="Logo">
          <path d={svgPaths.p6d47c00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_103_5140">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Menu1() {
  return (
    <div className="relative shrink-0 size-5" data-name="menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="menu">
          <path d={svgPaths.p1db7ef00} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
          <path d={svgPaths.p19860600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseLeftNavItem2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-lg shrink-0" data-name=".BASE - Left Nav Item">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start px-3 py-1.5 relative w-full">
          <UserGroup />
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
    <div className="basis-0 content-stretch flex flex-col gap-5 grow items-center justify-start min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <Menu1 />
      <Frame1 />
    </div>
  );
}

function SideBar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-11 h-[316px] items-center justify-start left-10 overflow-clip top-[92px] w-[46px]" data-name="Side Bar">
      <Content />
    </div>
  );
}

function Shell() {
  return (
    <div className="absolute bg-[#f0f5fa] h-[976px] left-0 overflow-clip rounded-xl top-0 w-[1440px]" data-name="Shell">
      <GlobalHeaderVendorAdmin />
      <Logo />
      <SideBar />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Invoice #</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Client name</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[243px]" data-name="Email">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Service</p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[188px]" data-name="Phone">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Total amount owed</p>
      </div>
    </div>
  );
}

function Phone1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0" data-name="Phone">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Phone2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]" data-name="Phone">
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Due date</p>
      </div>
    </div>
  );
}

function Phone3() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]" data-name="Phone">
      <Frame10 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Actions</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Tag">
      <Frame11 />
    </div>
  );
}

function Frame12029() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex items-center justify-start mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Name />
      <Email />
      <Phone />
      <Phone1 />
      <Phone2 />
      <Phone3 />
      <Tag />
    </div>
  );
}

function CheckboxBox() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function InputContainer() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <CheckboxBox />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <InputContainer />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="absolute content-stretch flex items-start justify-start left-0 top-0" data-name="Checkbox">
      <BaseCheckbox />
    </div>
  );
}

function Frame12039() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61px]">
      <Checkbox />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">INV001</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12039 />
      <Frame13 />
    </div>
  );
}

function Name1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Bradley Cooper</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[245px]" data-name="Email">
      <Frame15 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Make up</p>
      </div>
    </div>
  );
}

function Email2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$5,000.00</p>
      </div>
    </div>
  );
}

function Email3() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[167px]" data-name="Email">
      <Frame17 />
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#318913] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Paid</p>
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

function Badge1() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Badge">
      <Badge />
    </div>
  );
}

function Tag1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]" data-name="Tag">
      <Badge1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">May 31, 2023</p>
      </div>
    </div>
  );
}

function Email4() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]" data-name="Email">
      <Frame18 />
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

function Download() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p38bee980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Download />
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

function IconButton2() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash />
    </div>
  );
}

function QuickActions() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0" data-name="Quick actions">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
    </div>
  );
}

function ContactsListItem() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Name1 />
      <Email1 />
      <Email2 />
      <Email3 />
      <Tag1 />
      <Email4 />
      <QuickActions />
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

function BaseCheckbox1() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <InputContainer1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="absolute content-stretch flex items-start justify-start left-0 top-0" data-name="Checkbox">
      <BaseCheckbox1 />
    </div>
  );
}

function Frame12040() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61px]">
      <Checkbox1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">INV002</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12040 />
      <Frame19 />
    </div>
  );
}

function Name2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Tina Gretch</p>
      </div>
    </div>
  );
}

function Email5() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[245px]" data-name="Email">
      <Frame21 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Hair</p>
      </div>
    </div>
  );
}

function Email6() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$2,000.00</p>
      </div>
    </div>
  );
}

function Email7() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[167px]" data-name="Email">
      <Frame23 />
    </div>
  );
}

function BaseBadge1() {
  return (
    <div className="bg-[#a85701] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Overdue 6 days</p>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge1 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Badge">
      <Badge2 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]" data-name="Tag">
      <Badge3 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">March 31, 2023</p>
      </div>
    </div>
  );
}

function Email8() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]" data-name="Email">
      <Frame24 />
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

function IconButton3() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Mail1 />
    </div>
  );
}

function Download1() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p38bee980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Download1 />
    </div>
  );
}

function Trash1() {
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

function IconButton5() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash1 />
    </div>
  );
}

function QuickActions1() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0" data-name="Quick actions">
      <IconButton3 />
      <IconButton4 />
      <IconButton5 />
    </div>
  );
}

function ContactsListItem1() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Name2 />
      <Email5 />
      <Email6 />
      <Email7 />
      <Tag2 />
      <Email8 />
      <QuickActions1 />
    </div>
  );
}

function CheckboxBox2() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function InputContainer2() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <CheckboxBox2 />
    </div>
  );
}

function BaseCheckbox2() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <InputContainer2 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="absolute content-stretch flex items-start justify-start left-0 top-0" data-name="Checkbox">
      <BaseCheckbox2 />
    </div>
  );
}

function Frame12041() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61px]">
      <Checkbox2 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">INV003</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12041 />
      <Frame25 />
    </div>
  );
}

function Name3() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame26 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">{`Olivia & Noah`}</p>
      </div>
    </div>
  );
}

function Email9() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[245px]" data-name="Email">
      <Frame27 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Hair</p>
      </div>
    </div>
  );
}

function Email10() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$4,000.00</p>
      </div>
    </div>
  );
}

function Email11() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[167px]" data-name="Email">
      <Frame29 />
    </div>
  );
}

function BaseBadge2() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Due in 16 days</p>
      </div>
    </div>
  );
}

function Badge4() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge2 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Badge">
      <Badge4 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]" data-name="Tag">
      <Badge5 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">April 19, 2023</p>
      </div>
    </div>
  );
}

function Email12() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]" data-name="Email">
      <Frame30 />
    </div>
  );
}

function Mail2() {
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

function IconButton6() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Mail2 />
    </div>
  );
}

function Download2() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p38bee980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Download2 />
    </div>
  );
}

function Trash2() {
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

function IconButton8() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash2 />
    </div>
  );
}

function QuickActions2() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0" data-name="Quick actions">
      <IconButton6 />
      <IconButton7 />
      <IconButton8 />
    </div>
  );
}

function ContactsListItem2() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Name3 />
      <Email9 />
      <Email10 />
      <Email11 />
      <Tag3 />
      <Email12 />
      <QuickActions2 />
    </div>
  );
}

function CheckboxBox3() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded" />
    </div>
  );
}

function InputContainer3() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <CheckboxBox3 />
    </div>
  );
}

function BaseCheckbox3() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Checkbox">
      <InputContainer3 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="absolute content-stretch flex items-start justify-start left-0 top-0" data-name="Checkbox">
      <BaseCheckbox3 />
    </div>
  );
}

function Frame12042() {
  return (
    <div className="h-[18px] relative shrink-0 w-[61px]">
      <Checkbox3 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">INV003</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12042 />
      <Frame31 />
    </div>
  );
}

function Name4() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame32 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">{`Emily & John`}</p>
      </div>
    </div>
  );
}

function Email13() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[245px]" data-name="Email">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Hair</p>
      </div>
    </div>
  );
}

function Email14() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame34 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$4,000.00</p>
      </div>
    </div>
  );
}

function Email15() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[167px]" data-name="Email">
      <Frame35 />
    </div>
  );
}

function BaseBadge3() {
  return (
    <div className="bg-[#318913] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Paid</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Badge">
      <BaseBadge3 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Badge">
      <Badge6 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[130px]" data-name="Tag">
      <Badge7 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">March 5, 2023</p>
      </div>
    </div>
  );
}

function Email16() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[137px]" data-name="Email">
      <Frame36 />
    </div>
  );
}

function Mail3() {
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

function IconButton9() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Mail3 />
    </div>
  );
}

function Download3() {
  return (
    <div className="relative shrink-0 size-5" data-name="download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="download">
          <path d={svgPaths.p38bee980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function IconButton10() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Download3 />
    </div>
  );
}

function Trash3() {
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

function IconButton11() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-start justify-start p-[8px] relative rounded-[100px] shrink-0" data-name="Icon Button">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Trash3 />
    </div>
  );
}

function QuickActions3() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0" data-name="Quick actions">
      <IconButton9 />
      <IconButton10 />
      <IconButton11 />
    </div>
  );
}

function ContactsListItem3() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Name4 />
      <Email13 />
      <Email14 />
      <Email15 />
      <Tag4 />
      <Email16 />
      <QuickActions3 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[156px] pb-px pt-0 px-0 top-[215px] w-[1244px]" data-name="table">
      <Frame12029 />
      <ContactsListItem />
      <ContactsListItem1 />
      <ContactsListItem2 />
      <ContactsListItem3 />
    </div>
  );
}

function BaseUnderlinedTabItem() {
  return (
    <div className="h-9 relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Invoices</p>
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
        <p className="leading-[1.5] whitespace-pre">Invoice templates</p>
      </div>
    </div>
  );
}

function UnderlinedTabs() {
  return (
    <div className="absolute content-stretch flex gap-4 items-start justify-start left-[156px] top-[155px] w-[1244px]" data-name="Underlined Tabs">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-300 border-solid inset-0 pointer-events-none" />
      <BaseUnderlinedTabItem />
      <BaseUnderlinedTabItem1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center justify-start left-[156px] top-[92px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Invoices</p>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p99f0820} id="Vector" stroke="var(--stroke-0, #667593)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Search invoices</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <Search />
          <TextContainer1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg" />
    </div>
  );
}

function BaseInputField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0 w-[400px]" data-name="Text Input">
      <BaseInputField />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0 w-[400px]">
      <TextInput />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-0 relative w-[690px]">
      <Frame2 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium h-12 justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[222px]">
        <p className="leading-[1.5]">4 invoices</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame12 />
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Send invoice</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-9 items-center justify-start relative shrink-0" data-name="Button">
      <BaseButton />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-9 items-center justify-start relative shrink-0 w-[846px]">
      <Group5 />
      <Button />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center justify-end left-[308px] top-[92px] w-[1092px]">
      <Frame4 />
    </div>
  );
}

export default function Invoice() {
  return (
    <div className="relative size-full" data-name="Invoice">
      <Shell />
      <Table />
      <UnderlinedTabs />
      <div className="absolute h-[508px] left-[1360px] top-[114px] w-[216px]">
        <div className="absolute inset-[-1.84%_-0.81%_-2.54%_-4.32%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 228 531">
            <path d={svgPaths.p1b9e9f00} fill="var(--stroke-0, #FF00FF)" id="Vector 1" />
          </svg>
        </div>
      </div>
      <Frame3 />
      <Frame37 />
    </div>
  );
}