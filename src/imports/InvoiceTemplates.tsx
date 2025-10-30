import svgPaths from "./svg-clcly1b3yj";
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
        <g clipPath="url(#clip0_108_5667)" id="Logo">
          <path d={svgPaths.p322e6d80} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_108_5667">
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
    <div className="absolute bg-[#f0f5fa] h-[928px] left-0 overflow-clip rounded-xl top-0 w-[1440px]" data-name="Shell">
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
        <p className="leading-[1.5] whitespace-pre">Invoice name</p>
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
        <p className="leading-[1.5] whitespace-pre">Service</p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[188px]" data-name="Phone">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">{`Total amount `}</p>
      </div>
    </div>
  );
}

function Phone1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0" data-name="Phone">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Date created</p>
      </div>
    </div>
  );
}

function Phone2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[574px]" data-name="Phone">
      <Frame8 />
    </div>
  );
}

function Frame9() {
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
      <Frame9 />
    </div>
  );
}

function Frame12029() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex items-center justify-start mb-[-1px] relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
      <Name />
      <Phone />
      <Phone1 />
      <Phone2 />
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

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Half day invoice</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12039 />
      <Frame10 />
    </div>
  );
}

function Name1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame11 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Make up</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$5,000.00</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[138px]" data-name="Email">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">May 31, 2023</p>
      </div>
    </div>
  );
}

function Email2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[562px]" data-name="Email">
      <Frame14 />
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
      <Email />
      <Email1 />
      <Email2 />
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

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Full day invoice</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12040 />
      <Frame15 />
    </div>
  );
}

function Name2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Hair</p>
      </div>
    </div>
  );
}

function Email3() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[184px]" data-name="Email">
      <Frame17 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">$2,000.00</p>
      </div>
    </div>
  );
}

function Email4() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[138px]" data-name="Email">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">March 31, 2023</p>
      </div>
    </div>
  );
}

function Email5() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[562px]" data-name="Email">
      <Frame19 />
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
      <Email3 />
      <Email4 />
      <Email5 />
      <QuickActions1 />
    </div>
  );
}

function Table() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start justify-start left-[156px] pb-px pt-0 px-0 top-[215px] w-[1244px]" data-name="table">
      <Frame12029 />
      <ContactsListItem />
      <ContactsListItem1 />
    </div>
  );
}

function BaseUnderlinedTabItem() {
  return (
    <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Invoices</p>
      </div>
    </div>
  );
}

function BaseUnderlinedTabItem1() {
  return (
    <div className="h-9 relative shrink-0" data-name=".Base - Underlined Tab Item">
      <div className="box-border content-stretch flex gap-3 h-9 items-center justify-start overflow-clip p-[8px] relative">
        <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Invoice templates</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-neutral-900 border-solid inset-0 pointer-events-none" />
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
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-1.5 relative">
      <TextInput />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Medium',_sans-serif] font-medium h-12 justify-center ml-[412px] mt-6 relative text-[#47567b] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[206px]">
        <p className="leading-[1.5]">2 invoices templates</p>
      </div>
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Create template</p>
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
    <div className="content-stretch flex gap-[98px] items-center justify-start relative shrink-0 w-[862px]">
      <Group5 />
      <Button />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[1092px]">
      <Frame4 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex gap-5 items-center justify-start left-[156px] top-[91px]">
      <Frame3 />
      <Frame20 />
    </div>
  );
}

export default function InvoiceTemplates() {
  return (
    <div className="relative size-full" data-name="Invoice Templates">
      <Shell />
      <Table />
      <UnderlinedTabs />
      <Frame21 />
    </div>
  );
}