import svgPaths from "./svg-x2q3irg1gd";

function Shell() {
  return <div className="absolute bg-[#ffffff] h-[976px] left-0 overflow-clip rounded-xl top-0 w-[1440px]" data-name="Shell" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Create invoice</p>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[115.109px] relative shrink-0 w-[301px]">
      <div className="absolute bottom-0 left-[-0.15%] right-[-0.15%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303 116">
          <g id="Group 7">
            <circle cx="151.5" cy="57.5546" fill="var(--fill-0, #E4FBF3)" id="Ellipse 1" r="57.5546" />
            <path d={svgPaths.p2e664548} id="Vector" stroke="var(--stroke-0, #5EB9B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.903029" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-center justify-start leading-[0] relative shrink-0 text-[#47567b] w-[667px]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[20px] text-center w-[551px]">
        <p className="leading-[1.5]">Use a template</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal min-w-full relative shrink-0 text-[14px] tracking-[0.28px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          <span>{`Select a saved template to auto-fill services, pricing, and terms—quick and consistent invoicing in just a few clicks. `}</span>
          <span>{`Need a new template? `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Create One Now</span>
        </p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Select template</p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div className="content-stretch flex gap-2 items-center justify-start relative shrink-0 w-full" data-name=".Core - Input Label">
      <TextContainer />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="basis-0 content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="Text Container">
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Photography package</p>
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

function BaseInputField() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-full" data-name=".Base - Input Field">
      <CoreInputLabel />
      <CoreInputField />
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

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Select template</p>
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

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0">
      <Button />
    </div>
  );
}

function UseATemplate() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start px-0 py-[35px] relative rounded-lg shrink-0 w-full" data-name="Use a template">
      <Group7 />
      <Frame6 />
      <Dropdown />
      <Frame8 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <div className="font-['Literata:SemiBold_Italic',_sans-serif] font-semibold italic leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">or</p>
      </div>
    </div>
  );
}

function Frame12040() {
  return (
    <div className="[grid-area:1_/_1] bg-[#ffffff] box-border content-stretch flex gap-2.5 items-center justify-start ml-[289px] mt-0 px-3 py-0 relative">
      <Frame5 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[30px] relative w-[670px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-0.25px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 670 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" strokeWidth="0.25" x2="670" y1="0.875" y2="0.875" />
          </svg>
        </div>
      </div>
      <Frame12040 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-1 items-start justify-center leading-[0] relative shrink-0 text-[#47567b] w-[493px]">
      <div className="font-['Literata:Regular',_sans-serif] relative shrink-0 text-[20px] text-center text-nowrap">
        <p className="leading-[1.5] whitespace-pre">Create a new invoice</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] relative shrink-0 text-[14px] tracking-[0.28px] w-[483px]">
        <p className="leading-[1.5]">Customize every detail from the ground up—perfect for unique services or special requests.</p>
      </div>
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Start from scratch</p>
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

function UploadYourOwn() {
  return (
    <div className="box-border content-stretch flex gap-5 items-center justify-start px-0 py-5 relative rounded-[9px] shrink-0 w-full" data-name="Upload your own">
      <Frame9 />
      <Button1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-3 items-start justify-start top-[95px] translate-x-[-50%] w-[671px]" style={{ left: "calc(50% + 0.5px)" }}>
      <Frame3 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#47567b] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">Choose a saved template for quick invoicing or customize a new one from scratch.</p>
      </div>
      <UseATemplate />
      <Group6 />
      <UploadYourOwn />
    </div>
  );
}

function X() {
  return (
    <div className="absolute left-[1384px] size-8 top-8" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="x">
          <path d="M8 8L24 24M8 24L24 8L8 24Z" id="Vector" stroke="var(--stroke-0, #47567B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="relative size-full" data-name="Contacts">
      <Shell />
      <Frame7 />
      <X />
    </div>
  );
}