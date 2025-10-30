import svgPaths from "./svg-ltqwrkj8jy";

function Logo() {
  return (
    <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 24">
        <g clipPath="url(#clip0_48_10903)" id="Logo">
          <path d={svgPaths.p24342a00} fill="var(--fill-0, #47567B)" id="Zinnia" />
        </g>
        <defs>
          <clipPath id="clip0_48_10903">
            <rect fill="white" height="24" width="143" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0">
      <Logo />
    </div>
  );
}

function LogoContainer() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Logo Container"
    >
      <Frame130 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Florists</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down">
          <path
            d={svgPaths.p7b68400}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
          <ChevronDown />
        </div>
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
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[211px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function LocationMarker1() {
  return (
    <div className="relative shrink-0 size-5" data-name="location-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="location-marker">
          <path
            d={svgPaths.p28445280}
            id="Vector"
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d={svgPaths.p365cb300}
            id="Vector_2"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Anywhere</p>
      </div>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <LocationMarker1 />
          <TextContainer3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[327px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
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
            stroke="var(--stroke-0, #667593)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex flex-row gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-left text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Any Day</p>
      </div>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <Calendar />
          <TextContainer5 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[157px]"
      data-name="Text Input"
    >
      <BaseInputField2 />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-5" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path
            d={svgPaths.p99f0820}
            id="Vector"
            stroke="var(--stroke-0, #FAFAFA)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}

function BaseButton() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <Search />
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-left text-neutral-50 text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Search</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex flex-row h-9 items-center justify-center p-0 relative shrink-0 w-[101px]"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function Search1() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-5 items-start justify-start p-0 relative shrink-0"
      data-name="Search"
    >
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Button />
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="relative shrink-0 size-6" data-name="shopping-cart">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shopping-cart">
          <path
            d={svgPaths.p62e7f00}
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
      className="box-border content-stretch flex flex-row gap-4 items-start justify-start p-0 relative shrink-0"
      data-name="Action Icons"
    >
      <ShoppingCart />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-6" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <g id="Vector">
            <path
              d={svgPaths.pd0b4000}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={svgPaths.p16a77900}
              stroke="var(--stroke-0, #47567B)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

function QuestionMarkCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="question-mark-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="question-mark-circle">
          <path
            d={svgPaths.p3a1b5100}
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

function Icons() {
  return (
    <div
      className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Icons"
    >
      <ActionIcons />
      <User />
      <QuestionMarkCircle />
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#ffffff] relative size-full" data-name="Header">
      <div
        aria-hidden="true"
        className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
      />
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between px-4 py-5 relative size-full">
          <LogoContainer />
          <Search1 />
          <Icons />
        </div>
      </div>
    </div>
  );
}