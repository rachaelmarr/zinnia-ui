import svgPaths from "./svg-j4b4jnqjp9";

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
    <div className="absolute bg-neutral-50 bottom-0.5 box-border content-stretch flex flex-col gap-3 items-end justify-start overflow-clip px-[100px] py-8 right-[0.5px] shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)] w-[1440px]">
      <Frame9 />
    </div>
  );
}

function Group142() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-[#47567b]">
      <div className="[grid-area:1_/_1] font-['Literata:SemiBold',_sans-serif] font-semibold ml-[220px] mt-0 relative text-[24px] text-center translate-x-[-50%] w-[440px]">
        <p className="block leading-[1.5]">Add your venue service</p>
      </div>
      <div className="[grid-area:1_/_1] font-['Montserrat:Regular',_sans-serif] font-normal ml-0 mt-11 relative text-[14px] tracking-[0.28px] w-[440px]">
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Ceremony + Reception</p>
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
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Day of the week</p>
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

function BaseInputField1() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel1 />
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

function InputContainer() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox />
    </div>
  );
}

function TextContainer3() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Sunday</p>
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
      <TextContainer3 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel2 />
    </div>
  );
}

function BaseCheckbox() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer />
      <TextContainer4 />
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

function InputContainer1() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox1 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Monday</p>
      </div>
    </div>
  );
}

function CoreInputLabel3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer5 />
    </div>
  );
}

function TextContainer6() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel3 />
    </div>
  );
}

function BaseCheckbox1() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer1 />
      <TextContainer6 />
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

function InputContainer2() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox2 />
    </div>
  );
}

function TextContainer7() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Tuesday</p>
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
      <TextContainer7 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel4 />
    </div>
  );
}

function BaseCheckbox2() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer2 />
      <TextContainer8 />
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

function InputContainer3() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox3 />
    </div>
  );
}

function TextContainer9() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Wednesday</p>
      </div>
    </div>
  );
}

function CoreInputLabel5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer9 />
    </div>
  );
}

function TextContainer10() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel5 />
    </div>
  );
}

function BaseCheckbox3() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer3 />
      <TextContainer10 />
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

function Frame150() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Checkbox />
      <Checkbox1 />
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

function InputContainer4() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox4 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Thursday</p>
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
      <TextContainer11 />
    </div>
  );
}

function TextContainer12() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel6 />
    </div>
  );
}

function BaseCheckbox4() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer4 />
      <TextContainer12 />
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

function InputContainer5() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox5 />
    </div>
  );
}

function TextContainer13() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Friday</p>
      </div>
    </div>
  );
}

function CoreInputLabel7() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer13 />
    </div>
  );
}

function TextContainer14() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel7 />
    </div>
  );
}

function BaseCheckbox5() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer5 />
      <TextContainer14 />
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

function InputContainer6() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox6 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Saturday</p>
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
      <TextContainer15 />
    </div>
  );
}

function TextContainer16() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel8 />
    </div>
  );
}

function BaseCheckbox6() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer6 />
      <TextContainer16 />
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

function Frame151() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <Checkbox4 />
      <Checkbox5 />
      <Checkbox6 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="box-border content-stretch flex gap-8 items-start justify-start p-0 relative shrink-0">
      <Frame150 />
      <Frame151 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0">
      <TextInput1 />
      <Frame152 />
    </div>
  );
}

function TextContainer17() {
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

function CoreInputLabel9() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[406.268px]"
      data-name=".Core - Input Label"
    >
      <TextContainer17 />
    </div>
  );
}

function TextContainer18() {
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
        <TextContainer18 />
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
      <CoreInputLabel9 />
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

function TextContainer19() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{`How many hours is your venue available for? `}</p>
      </div>
    </div>
  );
}

function CoreInputLabel10() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer19 />
    </div>
  );
}

function TextContainer20() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">5 hours</p>
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
          <TextContainer20 />
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

function BaseInputField2() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel10 />
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

function TextContainer21() {
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

function CoreInputLabel11() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full"
      data-name=".Core - Input Label"
    >
      <TextContainer21 />
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

function TextContainer22() {
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
          <TextContainer22 />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-lg"
      />
    </div>
  );
}

function CoreHelperText() {
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

function BaseInputField3() {
  return (
    <div
      className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full"
      data-name=".Base - Input Field"
    >
      <CoreInputLabel11 />
      <CoreInputField3 />
      <CoreHelperText />
    </div>
  );
}

function TextInput3() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]"
      data-name="Text Input"
    >
      <BaseInputField3 />
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

function CheckboxBox7() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check />
    </div>
  );
}

function InputContainer7() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox7 />
    </div>
  );
}

function TextContainer23() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Groom Room</p>
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
      <TextContainer23 />
    </div>
  );
}

function TextContainer24() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel12 />
    </div>
  );
}

function BaseCheckbox7() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer7 />
      <TextContainer24 />
    </div>
  );
}

function Checkbox7() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox7 />
    </div>
  );
}

function Group139() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox7 />
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

function CheckboxBox8() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check1 />
    </div>
  );
}

function InputContainer8() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox8 />
    </div>
  );
}

function TextContainer25() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Chairs</p>
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
      <TextContainer25 />
    </div>
  );
}

function TextContainer26() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel13 />
    </div>
  );
}

function BaseCheckbox8() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer8 />
      <TextContainer26 />
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

function Group140() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Checkbox8 />
    </div>
  );
}

function Frame115() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0">
      <Group139 />
      <Group140 />
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

function InputContainer9() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox9 />
    </div>
  );
}

function TextContainer27() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Bridal Suite</p>
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
      <TextContainer27 />
    </div>
  );
}

function TextContainer28() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel14 />
    </div>
  );
}

function BaseCheckbox9() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer9 />
      <TextContainer28 />
    </div>
  );
}

function Checkbox9() {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex h-[19.385px] items-start justify-start ml-0 mt-0 p-0 relative"
      data-name="Checkbox"
    >
      <BaseCheckbox9 />
    </div>
  );
}

function Group141() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Checkbox9 />
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

function CheckboxBox10() {
  return (
    <div
      className="bg-[#2f7685] box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4"
      data-name=".Checkbox Box"
    >
      <Check2 />
    </div>
  );
}

function InputContainer10() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0"
      data-name="Input Container"
    >
      <CheckboxBox10 />
    </div>
  );
}

function TextContainer29() {
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
      <TextContainer29 />
    </div>
  );
}

function TextContainer30() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel15 />
    </div>
  );
}

function BaseCheckbox10() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0"
      data-name=".Base - Checkbox"
    >
      <InputContainer10 />
      <TextContainer30 />
    </div>
  );
}

function Checkbox10() {
  return (
    <div
      className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0"
      data-name="Checkbox"
    >
      <BaseCheckbox10 />
    </div>
  );
}

function TextContainer32() {
  return (
    <div
      className="basis-0 box-border content-stretch flex gap-0.5 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667593] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Other included services</p>
      </div>
    </div>
  );
}

function CoreInputField4() {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full" data-name=".Core - Input Field">
      <div className="flex flex-row items-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex gap-2 h-9 items-center justify-start p-[12px] relative w-full">
          <TextContainer32 />
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
      <CoreInputField4 />
    </div>
  );
}

function TextInput4() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[238px]"
      data-name="Text Input"
    >
      <BaseInputField4 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex gap-2 items-center justify-start ml-0 mt-0 p-0 relative w-[166px]">
      <TextInput4 />
    </div>
  );
}

function Group138() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame138 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
      <Checkbox10 />
      <Group138 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0">
      <Group141 />
      <Frame141 />
    </div>
  );
}

function Frame142() {
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
      <Frame142 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 h-[137px] items-start justify-start p-0 relative shrink-0 w-[440px]">
      <Frame11918 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-0 relative shrink-0 w-[440px]">
      <TextInput />
      <Frame153 />
      <Frame116 />
      <TextInput2 />
      <TextInput3 />
      <Frame118 />
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
      <Group142 />
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

export default function ListingAndServicesStepOneVenue() {
  return (
    <div
      className="bg-[#ffffff] overflow-clip relative rounded-xl size-full"
      data-name="Listing and services -- Step one (venue)"
    >
      <Frame11 />
      <Frame121 />
      <X />
      <div
        className="absolute font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] text-[#000000] text-[14px] text-nowrap top-[821px] tracking-[0.28px]"
        style={{ left: "calc(25% + 88px)" }}
      >
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] adjustLetterSpacing block decoration-solid leading-[1.5] whitespace-pre">
          &nbsp;
        </p>
      </div>
      <Timeline />
    </div>
  );
}