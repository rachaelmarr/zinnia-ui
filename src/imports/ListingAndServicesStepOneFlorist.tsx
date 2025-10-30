import svgPaths from "./svg-2m13agmwn2";

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
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[24px] text-center w-[440px]">
        <p className="block leading-[1.5]">Add your florist service</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal relative shrink-0 text-[14px] tracking-[0.28px] w-[440px]">
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Petite soiree</p>
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Description</p>
      </div>
    </div>
  );
}

function CoreInputLabel1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[406.268px]"
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

function CoreInputField1() {
  return (
    <div
      className="[grid-area:1_/_1] bg-[#ffffff] h-[271px] ml-0 mt-[29px] relative rounded-lg w-[440px]"
      data-name=".Core - Input Field"
    >
      <div className="box-border content-stretch flex gap-2 h-[271px] items-start justify-start overflow-clip p-[12px] relative w-[440px]">
        <TextContainer3 />
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
      <CoreInputLabel1 />
      <CoreInputField1 />
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

function TextContainer4() {
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

function CoreInputLabel2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer4 />
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

function TextContainer5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel2 />
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
      <TextContainer5 />
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

function TextContainer6() {
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

function CoreInputLabel3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
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
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">50 miles</p>
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

function CoreInputField2() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer7 />
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
      <CoreInputLabel3 />
      <CoreInputField2 />
    </div>
  );
}

function TextInput1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[417px]"
      data-name="Text Input"
    >
      <BaseInputField1 />
    </div>
  );
}

function Frame11993() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2.5 items-end justify-start p-0 relative shrink-0 w-[443px]">
      <TextInput1 />
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

function TextContainer8() {
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

function TextContainer9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel4 />
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
      <TextContainer9 />
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

function TextContainer10() {
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

function CurrencyDollarFill3() {
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

function TextContainer11() {
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

function CoreInputField3() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <CurrencyDollarFill3 />
          <TextContainer11 />
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

function BaseInputField2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel5 />
      <CoreInputField3 />
      <CoreHelperText2 />
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

function Frame114() {
  return (
    <div className="box-border content-stretch flex gap-3 items-center justify-start p-0 relative shrink-0">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">What’s included?</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
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

function CheckboxBox() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check />
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

function TextContainer12() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Bridal Bouquet</p>
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

function TextContainer13() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel6 />
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
      <TextContainer13 />
    </div>
  );
}

function Checkbox() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox />
    </div>
  );
}

function MinusCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function TextContainer15() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function CoreInputField4() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
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

function BaseInputField3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField4 />
    </div>
  );
}

function TextInput3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[45px]"
      data-name="Text Input"
    >
      <BaseInputField3 />
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function Frame138() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
      <MinusCircle />
      <TextInput3 />
      <PlusCircle />
    </div>
  );
}

function Group138() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[29px] place-items-start relative">
      <Frame138 />
    </div>
  );
}

function Group139() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox />
      <Group138 />
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
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

function CheckboxBox1() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check1 />
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

function TextContainer16() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Bridesmaids Bouquet</p>
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

function BaseCheckbox1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer3 />
      <TextContainer17 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox1 />
    </div>
  );
}

function MinusCircle1() {
  return (
    <div className="relative shrink-0 size-6" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function TextContainer19() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function CoreInputField5() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer19 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField4() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField5 />
    </div>
  );
}

function TextInput4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[45px]"
      data-name="Text Input"
    >
      <BaseInputField4 />
    </div>
  );
}

function PlusCircle1() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function Frame139() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
      <MinusCircle1 />
      <TextInput4 />
      <PlusCircle1 />
    </div>
  );
}

function Group142() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[29px] place-items-start relative">
      <Frame139 />
    </div>
  );
}

function Group140() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox1 />
      <Group142 />
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
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

function CheckboxBox2() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check2 />
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Coursages</p>
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
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox2 />
    </div>
  );
}

function MinusCircle2() {
  return (
    <div className="relative shrink-0 size-6" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function TextContainer23() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function CoreInputField6() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer23 />
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
      <CoreInputField6 />
    </div>
  );
}

function TextInput5() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[45px]"
      data-name="Text Input"
    >
      <BaseInputField5 />
    </div>
  );
}

function PlusCircle2() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function Frame140() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
      <MinusCircle2 />
      <TextInput5 />
      <PlusCircle2 />
    </div>
  );
}

function Group143() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-[29px] place-items-start relative">
      <Frame140 />
    </div>
  );
}

function Group141() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox2 />
      <Group143 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0">
      <Group139 />
      <Group140 />
      <Group141 />
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

function TextContainer24() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Flower Crown</p>
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

function BaseCheckbox3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer5 />
      <TextContainer25 />
    </div>
  );
}

function Checkbox3() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex h-[19.385px] items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox3 />
    </div>
  );
}

function Group144() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Checkbox3 />
    </div>
  );
}

function Check3() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
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

function CheckboxBox4() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check3 />
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

function TextContainer26() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Bouttonieres</p>
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

function BaseCheckbox4() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer6 />
      <TextContainer27 />
    </div>
  );
}

function Checkbox4() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox4 />
    </div>
  );
}

function MinusCircle3() {
  return (
    <div className="relative shrink-0 size-6" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function TextContainer29() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function CoreInputField7() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer29 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField6() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField7 />
    </div>
  );
}

function TextInput6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[45px]"
      data-name="Text Input"
    >
      <BaseInputField6 />
    </div>
  );
}

function PlusCircle3() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function Frame143() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
      <MinusCircle3 />
      <TextInput6 />
      <PlusCircle3 />
    </div>
  );
}

function Group145() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[29px] place-items-start relative">
      <Frame143 />
    </div>
  );
}

function Group146() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Checkbox4 />
      <Group145 />
    </div>
  );
}

function Check4() {
  return (
    <div className="relative shrink-0 size-3.5" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path
            d={svgPaths.p8f1dd80}
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

function CheckboxBox5() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check4 />
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

function TextContainer30() {
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

function BaseCheckbox5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer7 />
      <TextContainer31 />
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

function TextContainer33() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Title of offering</p>
      </div>
    </div>
  );
}

function CoreInputField8() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer33 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField7() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField8 />
    </div>
  );
}

function TextInput7() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[238px]"
      data-name="Text Input"
    >
      <BaseInputField7 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[166px]">
      <TextInput7 />
    </div>
  );
}

function Group147() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame144 />
    </div>
  );
}

function MinusCircle4() {
  return (
    <div className="relative shrink-0 size-6" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function TextContainer35() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function CoreInputField9() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer35 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField8() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputField9 />
    </div>
  );
}

function TextInput8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[45px]"
      data-name="Text Input"
    >
      <BaseInputField8 />
    </div>
  );
}

function PlusCircle4() {
  return (
    <div className="relative shrink-0 size-6" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="minus-circle">
          <path
            d={svgPaths.p63d8880}
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

function Frame145() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative">
      <MinusCircle4 />
      <TextInput8 />
      <PlusCircle4 />
    </div>
  );
}

function Group148() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame145 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Checkbox5 />
      <Group147 />
      <Group148 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0">
      <Group144 />
      <Group146 />
      <Frame141 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="box-border content-stretch flex gap-6 items-start justify-start p-0 relative shrink-0 w-[465px]">
      <Frame115 />
      <Frame117 />
    </div>
  );
}

function Frame11918() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame114 />
      <Frame146 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame11918 />
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`What types of flowers does this include? `}</p>
      </div>
    </div>
  );
}

function CoreInputLabel18() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer36 />
    </div>
  );
}

function TextContainer37() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          Add the flowers you use for this service
        </p>
      </div>
    </div>
  );
}

function CoreInputField10() {
  return (
    <div className="bg-[#ffffff] h-[60px] relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-[60px] items-start justify-start p-[12px] relative w-full">
          <TextContainer37 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function BaseInputField9() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel18 />
      <CoreInputField10 />
    </div>
  );
}

function TextInput9() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField9 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <TextInput />
      <Frame116 />
      <Where />
      <TextInput2 />
      <Frame118 />
      <TextInput9 />
    </div>
  );
}

function Frame120() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame119 />
    </div>
  );
}

function Frame121() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 top-[200px] translate-x-[-50%] w-[464px]"
      style={{ left: "calc(54.167% - 48px)" }}
    >
      <Frame142 />
      <PhotoOne />
      <Frame120 />
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

export default function ListingAndServicesStepOneFlorist() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-xl size-full"
      data-name="Listing and services -- Step one (florist)"
    >
      <Frame11 />
      <Frame121 />
      <X />
      <Timeline />
    </div>
  );
}