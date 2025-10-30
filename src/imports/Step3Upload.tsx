import svgPaths from "./svg-2qmpebzen4";
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
        <g clipPath="url(#clip0_132_19553)" id="Logo">
          <path d={svgPaths.p24342a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_132_19553">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Literata:SemiBold',_sans-serif] font-semibold gap-3 items-start justify-start leading-[0] relative shrink-0 text-[32px] text-nowrap">
      <div className="relative shrink-0 text-[#47567b]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">Contacts</p>
      </div>
      <div className="relative shrink-0 text-[#b1bccd]">
        <p className="leading-[1.5] text-nowrap whitespace-pre">100</p>
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
        <p className="leading-[1.5] whitespace-pre">Search contacts</p>
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
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <TextInput />
    </div>
  );
}

function Filter() {
  return (
    <div className="relative shrink-0 size-5" data-name="filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="filter">
          <path d={svgPaths.p39301980} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12031() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex gap-2.5 items-center justify-start p-[8px] relative rounded-lg shrink-0">
      <div aria-hidden="true" className="absolute border border-[#47567b] border-solid inset-0 pointer-events-none rounded-lg" />
      <Filter />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Add contact</p>
      </div>
      <ChevronDown />
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
    <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[1019px]">
      <Frame2 />
      <Frame12031 />
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-5 items-center justify-start relative shrink-0">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Name</p>
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Email</p>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Email">
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Phone</p>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[147px]" data-name="Phone">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Status</p>
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Status">
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Tags</p>
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

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Actions</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Tag">
      <Frame10 />
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
      <Status />
      <Tag />
      <Tag1 />
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">John Doe</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-start relative shrink-0 w-[109px]">
      <Frame12039 />
      <Frame11 />
    </div>
  );
}

function Name1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Name">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Email">
      <Frame13 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">312-555-1234</p>
      </div>
    </div>
  );
}

function Phone1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[145px]" data-name="Phone">
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Potential Customer</p>
      </div>
    </div>
  );
}

function Status1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[170px]" data-name="Status">
      <Frame15 />
    </div>
  );
}

function BaseBadge() {
  return (
    <div className="bg-[#8c97ac] box-border content-stretch flex gap-1 items-center justify-start overflow-clip px-1 py-0 relative rounded shrink-0" data-name=".Base - Badge">
      <div className="flex flex-col font-['Jost:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-neutral-50 text-nowrap">
        <p className="leading-[1.5] whitespace-pre">New Lead</p>
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

function Badge2() {
  return (
    <div className="content-stretch flex gap-1 items-center justify-start relative shrink-0" data-name="Badge">
      <Badge />
      <Badge1 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[204px]" data-name="Tag">
      <Badge2 />
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
    <div className="box-border content-stretch flex gap-3 items-center justify-start pl-2.5 pr-0 py-0 relative shrink-0" data-name="Quick actions">
      <IconButton />
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function ContactsListItem() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex items-center justify-start mb-[-1px] px-0 py-3 relative shrink-0 w-full" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Name1 />
      <Email1 />
      <Phone1 />
      <Status1 />
      <Tag2 />
      <QuickActions />
    </div>
  );
}

function Table() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-[1244px]" data-name="table">
      <Frame12029 />
      {[...Array(13).keys()].map((_, i) => (
        <ContactsListItem key={i} />
      ))}
    </div>
  );
}

function Frame76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-5 items-start justify-start top-24 w-[1306px]" style={{ left: "calc(8.333% + 35px)" }}>
      <Frame5 />
      <Table />
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

function Frame77() {
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
      <Frame77 />
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

function Check1() {
  return (
    <div className="relative shrink-0 size-5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.pb8f0300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function StepperDot1() {
  return (
    <div className="bg-[#2f7685] content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <Check1 />
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot1 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Contact basic info</p>
      </div>
    </div>
  );
}

function Line5() {
  return (
    <div className="h-0 relative shrink-0 w-[60px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
          <g id="Line 5">
            <line id="Line 3" stroke="var(--stroke-0, #8C97AC)" x2="60" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="check">
          <path d={svgPaths.pb8f0300} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function StepperDot2() {
  return (
    <div className="bg-[#2f7685] content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <Check2 />
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot2 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Organize your contact</p>
      </div>
    </div>
  );
}

function StepperDot3() {
  return (
    <div className="bg-[#47567b] content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot3 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Upload photo</p>
      </div>
    </div>
  );
}

function WizardStepper() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Wizard Stepper">
      <Step1 />
      <Line5 />
      <Step2 />
      <Line5 />
      <Step3 />
    </div>
  );
}

function RadioButtonInput() {
  return (
    <div className="bg-[#ffffff] relative rounded-3xl shrink-0 size-4" data-name=".Radio Button Input">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function InputContainer13() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <RadioButtonInput />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Use avatar</p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Input Label">
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Text Container">
      <CoreInputLabel1 />
    </div>
  );
}

function BaseRadioButton() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Radio Button">
      <InputContainer13 />
      <TextContainer3 />
    </div>
  );
}

function RadioButton() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Radio Button">
      <BaseRadioButton />
    </div>
  );
}

function RadioButtonInput1() {
  return (
    <div className="relative shrink-0 size-4" data-name=".Radio Button Input">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id=".Radio Button Input">
          <rect fill="var(--fill-0, #2F7685)" height="16" rx="8" width="16" />
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 9" r="3" />
        </g>
      </svg>
    </div>
  );
}

function InputContainer14() {
  return (
    <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0" data-name="Input Container">
      <RadioButtonInput1 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Upload an image</p>
      </div>
    </div>
  );
}

function CoreInputLabel2() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0" data-name=".Core - Input Label">
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0" data-name="Text Container">
      <CoreInputLabel2 />
    </div>
  );
}

function BaseRadioButton1() {
  return (
    <div className="content-stretch flex gap-2 items-start justify-start relative shrink-0" data-name=".Base - Radio Button">
      <InputContainer14 />
      <TextContainer5 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div className="content-stretch flex items-start justify-start relative shrink-0" data-name="Radio Button">
      <BaseRadioButton1 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0">
      <RadioButton />
      <RadioButton1 />
    </div>
  );
}

function DocumentDuplicate() {
  return (
    <div className="absolute left-[178px] size-[43px] top-14" data-name="document-duplicate">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="document-duplicate">
          <path d={svgPaths.p385fa730} id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12058() {
  return (
    <div className="h-[181px] relative shrink-0 w-full">
      <div className="h-[181px] overflow-clip relative w-full">
        <div className="absolute font-['Literata:Medium',_sans-serif] font-medium leading-[0] left-[200px] text-[#47567b] text-[0px] text-center top-[99px] tracking-[0.32px] translate-x-[-50%] w-[400px]">
          <p className="leading-[1.5] text-[16px]">
            Drop your image here or<span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Literata:Medium',_sans-serif] font-medium text-[#2e7684] tracking-[0.32px] underline">{` browse`}</span>
          </p>
        </div>
        <DocumentDuplicate />
      </div>
      <div aria-hidden="true" className="absolute border border-[#1a2652] border-dashed inset-0 pointer-events-none" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-8 items-start justify-start relative shrink-0 w-[400px]">
      <Frame78 />
      <Frame12058 />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Cancel</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-9 items-center justify-center relative shrink-0" data-name="Button">
      <BaseButton1 />
    </div>
  );
}

function BaseButton2() {
  return (
    <div className="bg-[#667493] box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Next</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-9 items-center justify-start relative shrink-0" data-name="Button">
      <BaseButton2 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-neutral-100 box-border content-stretch flex gap-3 items-center justify-end px-5 py-4 relative shrink-0 w-[668px]" data-name="footer">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Modal() {
  return (
    <div className="absolute bg-[#ffffff] box-border content-stretch flex flex-col gap-[70px] items-center justify-start pb-0 pt-5 px-5 rounded top-[211px] w-[668px]" data-name="Modal" style={{ left: "calc(25% + 14px)" }}>
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none rounded" />
      <WizardStepper />
      <Frame79 />
      <Footer />
    </div>
  );
}

export default function Step3Upload() {
  return (
    <div className="bg-[#f0f5fa] overflow-clip relative rounded-xl size-full" data-name="step 3 upload">
      <GlobalHeaderVendorAdmin />
      <Logo />
      <Frame76 />
      <SideBar />
      <div className="absolute bg-neutral-900 h-[1408px] left-[-329px] opacity-60 top-[-284px] w-[1976px]" />
      <Modal />
    </div>
  );
}