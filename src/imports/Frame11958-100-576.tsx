import svgPaths from "./svg-s8d9t2s1bt";

function X() {
  return (
    <div className="absolute left-5 size-6 top-5" data-name="x">
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

function TextContainer() {
  return (
    <div
      className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Blocked day</p>
      </div>
    </div>
  );
}

function CoreInputLabel() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0"
      data-name=".Core - Input Label"
    >
      <TextContainer />
    </div>
  );
}

function CoreHelperText() {
  return (
    <div
      className="box-border content-stretch flex gap-2 items-center justify-start p-0 shrink-0"
      data-name=".Core - Helper Text"
    />
  );
}

function TextContainer1() {
  return (
    <div
      className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0"
      data-name="Text Container"
    >
      <CoreInputLabel />
      <CoreHelperText />
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
      <TextContainer1 />
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

function Frame138() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-3 items-start justify-start left-5 p-0 top-16">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#000000] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">Blocked day</p>
      </div>
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[14px] tracking-[0.28px] w-[314px]">
        <p className="adjustLetterSpacing block leading-[1.5]">{`This day is blocked so you will not show when a couple searches. `}</p>
      </div>
      <Checkbox />
    </div>
  );
}

export default function Frame11958() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <X />
      <Frame138 />
    </div>
  );
}