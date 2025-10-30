import svgPaths from "./svg-g4b4c1ays1";

function Frame3() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Contacts</p>
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-center justify-start ml-0 mt-1.5 relative">
      <TextInput />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Frame2 />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Medium',_sans-serif] font-medium h-12 justify-center ml-[412px] mt-6 relative text-[#47567b] text-[14px] tracking-[0.28px] translate-y-[-50%] w-[122px]">
        <p className="leading-[1.5]">100 total contacts</p>
      </div>
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-9 items-center justify-start ml-[725px] mt-1 relative" data-name="Button">
      <BaseButton />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group5 />
      <Button />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-end relative shrink-0 w-[1019px]">
      <Group4 />
    </div>
  );
}

function ContactHeader() {
  return (
    <div className="content-stretch flex gap-5 items-center justify-start relative shrink-0" data-name="Contact header">
      <Frame3 />
      <Frame5 />
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

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="capitalize flex flex-col font-['Literata:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#667593] text-[32px] text-center text-nowrap">
        <p className="leading-[1.25] whitespace-pre">No contacts (yet!)</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-1.5 items-center justify-center relative shrink-0 w-[286px]">
      <Frame11 />
    </div>
  );
}

function Name1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-center px-3 py-2 relative shrink-0 w-[448px]" data-name="Name">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-start relative shrink-0">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-center tracking-[0.28px] w-[376px]">
        <p className="leading-[1.5]">Add clients or leads to your contact list to keep all their details in one place. You’ll be able to track conversations, invoices, and bookings.</p>
      </div>
    </div>
  );
}

function Email1() {
  return (
    <div className="box-border content-stretch flex gap-2.5 items-center justify-start px-3 py-2 relative shrink-0 w-[424px]" data-name="Email">
      <Frame13 />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Add a contact</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-9 items-center justify-start relative shrink-0" data-name="Button">
      <BaseButton1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Name1 />
      <Email1 />
      <Button1 />
    </div>
  );
}

function ContactsListItem() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex h-[302px] items-center justify-center mb-[-1px] px-0 py-3 relative shrink-0 w-[1244px]" data-name="Contacts List item">
      <div aria-hidden="true" className="absolute border border-[#ccd7e6] border-solid inset-0 pointer-events-none" />
      <Frame17 />
    </div>
  );
}

function Table() {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start pb-px pt-0 px-0 relative shrink-0 w-full" data-name="table">
      <Frame12029 />
      <ContactsListItem />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-4 items-start justify-start relative size-full">
      <ContactHeader />
      <Table />
    </div>
  );
}