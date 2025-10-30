import svgPaths from "./svg-z2ii8qmo0x";

function BaseButton() {
  return (
    <div
      className="basis-0 bg-[#667493] grow min-h-px min-w-px relative rounded-3xl shrink-0"
      data-name=".Base - Button"
    >
      <div className="flex flex-row justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 items-start justify-center px-3 py-2 relative w-full">
          <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[14px] text-neutral-50 text-nowrap tracking-[0.28px]">
            <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Next</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="box-border content-stretch flex h-[37px] items-center justify-start p-0 relative shrink-0 w-[164px]"
      data-name="Button"
    >
      <BaseButton />
    </div>
  );
}

function Frame9() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start p-0 relative shrink-0">
      <Button />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-neutral-50 bottom-0 box-border content-stretch flex flex-col gap-3 items-end justify-start overflow-clip px-[100px] py-8 right-[0.5px] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
      <Frame9 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b]">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] text-center w-[439px]">
        <p className="block leading-[1.5]">Add your photography service</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-[439px]">
        <p className="leading-[1.5]">
          <span className="font-['Montserrat:Regular',_sans-serif] font-normal">{`This is your specific service that you offer. These will show under your listing. You can always add more services later. `}</span>
          <span className="adjustLetterSpacing">All fields are required.</span>
        </p>
      </div>
    </div>
  );
}

function Camera() {
  return (
    <div
      className="absolute left-1/2 size-[60px] translate-x-[-50%] translate-y-[-50%]"
      data-name="camera"
      style={{ top: "calc(50% - 23px)" }}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="camera">
          <path
            d={svgPaths.p3e629780}
            id="Vector"
            stroke="var(--stroke-0, #47567B)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p307dbb00}
            id="Vector_2"
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

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Add a photo</p>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function Button1() {
  return (
    <div
      className="absolute box-border content-stretch flex h-9 items-center justify-center left-[157px] p-0 top-[167px]"
      data-name="Button"
    >
      <BaseButton1 />
    </div>
  );
}

function PhotoOne() {
  return (
    <div className="bg-[#ccd7e6] h-[316px] overflow-clip relative shrink-0 w-[440px]" data-name="Photo one">
      <Camera />
      <Button1 />
    </div>
  );
}

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Service Name</p>
      </div>
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
    </div>
  );
}

function TextContainer1() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Wedding photography</p>
      </div>
    </div>
  );
}

function CoreInputField() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer1 />
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
      <CoreInputLabel />
      <CoreInputField />
    </div>
  );
}

function TextInput() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField />
    </div>
  );
}

function TextContainer2() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Type</p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer2 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Wedding day</p>
      </div>
    </div>
  );
}

function ChevronDownFill() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField1() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer3 />
          <ChevronDownFill />
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
      <CoreInputLabel1 />
      <CoreInputField1 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">How many hours does this include?</p>
      </div>
    </div>
  );
}

function CoreInputLabel2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer4 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5</p>
      </div>
    </div>
  );
}

function ChevronDownFill1() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer5 />
          <ChevronDownFill1 />
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
      <CoreInputLabel2 />
      <CoreInputField2 />
    </div>
  );
}

function TextInput2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField2 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Description</p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[406.268px]"
      data-name=".Core - Input Label"
    >
      <TextContainer6 />
    </div>
  );
}

function TextContainer7() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] tracking-[0.28px] w-[416px]">
        <p className="adjustLetterSpacing block leading-[1.5]">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor. lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Mauris aliquam ultrices tempor.
        </p>
      </div>
    </div>
  );
}

function CoreInputField3() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-[271px] ml-0 mt-[29px] relative rounded-lg w-[440px]"
      data-name=".Core - Input Field"
    >
      <div className="box-border content-stretch flex gap-2 h-[271px] items-start justify-start overflow-clip p-[12px] relative w-[440px]">
        <TextContainer7 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function Group113() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <CoreInputLabel3 />
      <CoreInputField3 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Group113 />
    </div>
  );
}

function RadioButtonInput() {
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

function InputContainer() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <RadioButtonInput />
    </div>
  );
}

function TextContainer8() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Mobile Business</p>
      </div>
    </div>
  );
}

function CoreInputLabel4() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer8 />
    </div>
  );
}

function CoreHelperText() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-[433px]"
      data-name=".Core - Helper Text"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[0px] tracking-[0.28px] w-[433px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre-wrap">
          <span>{`You’ll primarily travel for this service. Travel radius is calculated from your business address. Not the right address? `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">{`Update now. `}</span>
          <span className="adjustLetterSpacing text-[#2e7684]"> </span>
        </p>
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel4 />
      <CoreHelperText />
    </div>
  );
}

function BaseRadioButton() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Radio Button"
    >
      <InputContainer />
      <TextContainer9 />
    </div>
  );
}

function RadioButton() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0 w-[345px]"
      data-name="Radio Button"
    >
      <BaseRadioButton />
    </div>
  );
}

function TextContainer10() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">How far are you willing to travel?</p>
      </div>
    </div>
  );
}

function CoreInputLabel5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer10 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">50 miles</p>
      </div>
    </div>
  );
}

function ChevronDownFill2() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField4() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer11 />
          <ChevronDownFill2 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel5 />
      <CoreInputField4 />
    </div>
  );
}

function TextInput3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[417px]"
      data-name="Text Input"
    >
      <BaseInputField3 />
    </div>
  );
}

function Frame11993() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-end justify-start p-0 relative shrink-0 w-[443px]">
      <TextInput3 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0">
      <RadioButton />
      <Frame11993 />
    </div>
  );
}

function RadioButtonInput1() {
  return (
    <div className="bg-[#ffffff] relative rounded-3xl shrink-0 size-4" data-name=".Radio Button Input">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl"
      />
    </div>
  );
}

function InputContainer1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <RadioButtonInput1 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Physical location</p>
      </div>
    </div>
  );
}

function CoreInputLabel6() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer12 />
    </div>
  );
}

function CoreHelperText1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Helper Text"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">You have a set space for this service</p>
      </div>
    </div>
  );
}

function TextContainer13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel6 />
      <CoreHelperText1 />
    </div>
  );
}

function BaseRadioButton1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Radio Button"
    >
      <InputContainer1 />
      <TextContainer13 />
    </div>
  );
}

function RadioButton1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Radio Button"
    >
      <BaseRadioButton1 />
    </div>
  );
}

function Where() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0"
      data-name="Where"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Where does this service take place?</p>
      </div>
      <Frame132 />
      <RadioButton1 />
    </div>
  );
}

function TextContainer14() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Price, excluding taxes and fees</p>
      </div>
    </div>
  );
}

function CoreInputLabel7() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer14 />
    </div>
  );
}

function CurrencyDollarFill5() {
  return (
    <div className="relative shrink-0 size-5" data-name="currency-dollar-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="currency-dollar-fill">
          <g id="Vector">
            <mask fill="white" id="path-1-inside-1_69_12818">
              <path d={svgPaths.p13b8e070} />
            </mask>
            <path d={svgPaths.p13b8e070} fill="var(--fill-0, #47567B)" />
            <path d={svgPaths.p1bf49a00} fill="var(--stroke-0, #667593)" mask="url(#path-1-inside-1_69_12818)" />
          </g>
          <path
            clipRule="evenodd"
            d={svgPaths.p1ea4e00}
            fill="var(--fill-0, #47567B)"
            fillRule="evenodd"
            id="Vector_2"
          />
        </g>
      </svg>
    </div>
  );
}

function TextContainer15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">300</p>
      </div>
    </div>
  );
}

function CoreInputField5() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <CurrencyDollarFill5 />
          <TextContainer15 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function CoreHelperText2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Helper Text"
    >
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[0px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] text-[14px] whitespace-pre">
          <span>
            {`Zinnia takes a 5% booking fee. To learn more check out `}
            <br aria-hidden="true" />
          </span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] adjustLetterSpacing decoration-solid font-['Montserrat:Regular',_sans-serif] font-normal text-[#2e7684] tracking-[0.28px] underline">{`how Zinnia works.  `}</span>
        </p>
      </div>
    </div>
  );
}

function BaseInputField4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel7 />
      <CoreInputField5 />
      <CoreHelperText2 />
    </div>
  );
}

function TextInput4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField4 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">What’s included?</p>
      </div>
    </div>
  );
}

function CheckboxBox() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox />
    </div>
  );
}

function TextContainer16() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Ceremony</p>
      </div>
    </div>
  );
}

function CoreInputLabel8() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer16 />
    </div>
  );
}

function TextContainer17() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel8 />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer2 />
      <TextContainer17 />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox />
    </div>
  );
}

function CheckboxBox1() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer3() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox1 />
    </div>
  );
}

function TextContainer18() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Reception</p>
      </div>
    </div>
  );
}

function CoreInputLabel9() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer18 />
    </div>
  );
}

function TextContainer19() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel9 />
    </div>
  );
}

function BaseCheckbox1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer3 />
      <TextContainer19 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox1 />
    </div>
  );
}

function Frame113() {
  return (
    <div className="box-border content-stretch flex gap-[59px] items-start justify-start p-0 relative shrink-0">
      <Checkbox />
      <Checkbox1 />
    </div>
  );
}

function CheckboxBox2() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer4() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox2 />
    </div>
  );
}

function TextContainer20() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Bridal portraits</p>
      </div>
    </div>
  );
}

function CoreInputLabel10() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer20 />
    </div>
  );
}

function TextContainer21() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel10 />
    </div>
  );
}

function BaseCheckbox2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer4 />
      <TextContainer21 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox2 />
    </div>
  );
}

function CheckboxBox3() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer5() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox3 />
    </div>
  );
}

function TextContainer22() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">First look</p>
      </div>
    </div>
  );
}

function CoreInputLabel11() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer22 />
    </div>
  );
}

function TextContainer23() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel11 />
    </div>
  );
}

function BaseCheckbox3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer5 />
      <TextContainer23 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox3 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start p-0 relative shrink-0">
      <Checkbox2 />
      <Checkbox3 />
    </div>
  );
}

function CheckboxBox4() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer6() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox4 />
    </div>
  );
}

function TextContainer24() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Other</p>
      </div>
    </div>
  );
}

function CoreInputLabel12() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer24 />
    </div>
  );
}

function TextContainer25() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel12 />
    </div>
  );
}

function BaseCheckbox4() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer6 />
      <TextContainer25 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox4 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start p-0 relative shrink-0">
      <Checkbox4 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Frame113 />
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Frame11918() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[290px]">
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">What’s delivered</p>
      </div>
    </div>
  );
}

function CheckboxBox5() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer7() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox5 />
    </div>
  );
}

function TextContainer26() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Online gallery</p>
      </div>
    </div>
  );
}

function CoreInputLabel13() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer26 />
    </div>
  );
}

function TextContainer27() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel13 />
    </div>
  );
}

function BaseCheckbox5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer7 />
      <TextContainer27 />
    </div>
  );
}

function Checkbox5() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox5 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-3 items-start justify-start ml-0 mt-0 p-0 relative">
      <Checkbox5 />
    </div>
  );
}

function CheckboxBox6() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer8() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox6 />
    </div>
  );
}

function TextContainer28() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Photo album</p>
      </div>
    </div>
  );
}

function CoreInputLabel14() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer28 />
    </div>
  );
}

function TextContainer29() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel14 />
    </div>
  );
}

function BaseCheckbox6() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer8 />
      <TextContainer29 />
    </div>
  );
}

function Checkbox6() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox6 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-6 items-start justify-start ml-0 mt-[33px] p-0 relative">
      <Checkbox6 />
    </div>
  );
}

function CheckboxBox7() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer9() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox7 />
    </div>
  );
}

function TextContainer30() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Same day prints</p>
      </div>
    </div>
  );
}

function CoreInputLabel15() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer30 />
    </div>
  );
}

function TextContainer31() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel15 />
    </div>
  );
}

function BaseCheckbox7() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer9 />
      <TextContainer31 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox7 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-6 items-start justify-start ml-0 mt-[66px] p-0 relative">
      <Checkbox7 />
    </div>
  );
}

function Group130() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Frame120 />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function CheckboxBox8() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer10() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox8 />
    </div>
  );
}

function TextContainer32() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Unedited photos</p>
      </div>
    </div>
  );
}

function CoreInputLabel16() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer32 />
    </div>
  );
}

function TextContainer33() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel16 />
    </div>
  );
}

function BaseCheckbox8() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer10 />
      <TextContainer33 />
    </div>
  );
}

function Checkbox8() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox8 />
    </div>
  );
}

function CheckboxBox9() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer11() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox9 />
    </div>
  );
}

function TextContainer34() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Highlight film</p>
      </div>
    </div>
  );
}

function CoreInputLabel17() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer34 />
    </div>
  );
}

function TextContainer35() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel17 />
    </div>
  );
}

function BaseCheckbox9() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer11 />
      <TextContainer35 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-[33px] p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox9 />
    </div>
  );
}

function CheckboxBox10() {
  return (
    <div className="bg-[#ffffff] relative rounded shrink-0 size-4" data-name=".Checkbox Box">
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded"
      />
    </div>
  );
}

function InputContainer12() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox10 />
    </div>
  );
}

function TextContainer36() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Other</p>
      </div>
    </div>
  );
}

function CoreInputLabel18() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer36 />
    </div>
  );
}

function TextContainer37() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel18 />
    </div>
  );
}

function BaseCheckbox10() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer12 />
      <TextContainer37 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-[66px] p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox10 />
    </div>
  );
}

function Group129() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox8 />
      <Checkbox9 />
      <Checkbox10 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="box-border content-stretch flex gap-3 items-start justify-start leading-[0] p-0 relative shrink-0">
      <Group130 />
      <Group129 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Frame119 />
      <Frame123 />
    </div>
  );
}

function Frame125() {
  return <div className="h-[119px] shrink-0 w-[141px]" />;
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex gap-5 items-start justify-start p-0 relative shrink-0">
      <Frame124 />
      <Frame125 />
    </div>
  );
}

function Frame127() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame11918 />
      <Frame126 />
    </div>
  );
}

function TextContainer38() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">When will photos be delivered?</p>
      </div>
    </div>
  );
}

function CoreInputLabel19() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer38 />
    </div>
  );
}

function TextContainer39() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">30 days</p>
      </div>
    </div>
  );
}

function ChevronDownFill3() {
  return (
    <div className="relative shrink-0 size-5" data-name="chevron-down-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chevron-down-fill">
          <path d={svgPaths.p38d3d340} fill="var(--fill-0, #47567B)" id="Vector" stroke="var(--stroke-0, #667593)" />
        </g>
      </svg>
    </div>
  );
}

function CoreInputField6() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer39 />
          <ChevronDownFill3 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField5() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel19 />
      <CoreInputField6 />
    </div>
  );
}

function TextInput5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField5 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <PhotoOne />
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Frame116 />
      <Where />
      <TextInput4 />
      <Frame127 />
      <TextInput5 />
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame128 />
    </div>
  );
}

function Frame130() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 top-[200px] translate-x-[-50%] w-[464px]"
      style={{ left: "calc(54.167% - 48px)" }}
    >
      <Frame142 />
      <Frame129 />
    </div>
  );
}

function X() {
  return (
    <div className="absolute size-6 top-6" data-name="x" style={{ left: "calc(91.667% + 72px)" }}>
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

function Layer2() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #CCD7E6)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #CCD7E6)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #CCD7E6)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #CCD7E6)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer1() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer2 />
      <Layer1 />
    </div>
  );
}

function TimelineStepDefault() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1. Create Listing</p>
      </div>
    </div>
  );
}

function TimelineStep() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault />
    </div>
  );
}

function Layer3() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, #667593)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, #667593)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, #667593)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, #667593)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer4() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo1() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer3 />
      <Layer4 />
    </div>
  );
}

function TimelineStepDefault1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo1 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="2">
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">Add Services</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault1 />
    </div>
  );
}

function Layer5() {
  return (
    <div className="absolute bottom-[18.63%] left-[39.88%] right-[38.05%] top-0" data-name="Layer_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 39">
        <g id="Layer_2">
          <path d={svgPaths.p3ed46880} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3b39e600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2ea1a80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2aef6b00} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Layer6() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[4.03%]" data-name="Layer_1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 45">
        <g id="Layer_1">
          <path d={svgPaths.p3d8f0780} fill="var(--fill-0, #47567B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TimelineIllo2() {
  return (
    <div className="h-[46.726px] relative shrink-0 w-[154.84px]" data-name="Timeline Illo">
      <Layer5 />
      <Layer6 />
    </div>
  );
}

function TimelineStepDefault2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0"
      data-name="Timeline Step/Default"
    >
      <TimelineIllo2 />
      <div className="flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-center text-nowrap tracking-[0.28px] uppercase">
        <ol className="list-decimal" start="3">
          <li className="ms-[21px]">
            <span className="adjustLetterSpacing leading-[1.5]">Confirm</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

function TimelineStep2() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Timeline Step"
    >
      <TimelineStepDefault2 />
    </div>
  );
}

function Timeline() {
  return (
    <div
      className="absolute box-border content-stretch flex h-[100px] items-start justify-start p-0 top-[60px] translate-x-[-50%]"
      data-name="Timeline"
      style={{ left: "calc(50% + 0.26px)" }}
    >
      <TimelineStep />
      <TimelineStep1 />
      <TimelineStep2 />
    </div>
  );
}

export default function ListingAndServicesStepTwoPhotographer() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-xl size-full"
      data-name="Listing and services -- Step two (photographer)"
    >
      <Frame11 />
      <Frame130 />
      <X />
      <Timeline />
    </div>
  );
}