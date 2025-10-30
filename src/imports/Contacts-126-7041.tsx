import svgPaths from "./svg-de4j2925c5";
import imgScreenshot20250211At80525Pm1 from "figma:asset/d9faf21f4457be2dfec41979673dfa028f9491a4.png";
import { imgScreenshot20250211At80525Pm2 } from "./svg-t774b";

function Shell() {
  return <div className="absolute bg-[#ffffff] h-[976px] left-0 overflow-clip rounded-xl top-0 w-[1440px]" data-name="Shell" />;
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-3 items-center justify-start relative shrink-0">
      <div className="font-['Literata:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#47567b] text-[32px] text-nowrap">
        <p className="leading-[1.5] whitespace-pre">{`Who is this invoice for? `}</p>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex gap-0.5 items-start justify-start relative shrink-0" data-name="Text Container">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Search and add contact</p>
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
      <div className="flex flex-col font-['Montserrat:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">John Doe</p>
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

function UseATemplate() {
  return (
    <div className="box-border content-stretch flex flex-col gap-5 items-center justify-start px-0 py-[35px] relative rounded-lg shrink-0 w-[555px]" data-name="Use a template">
      <Dropdown />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-3 items-start justify-start relative shrink-0 w-full">
      <Frame3 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[0px] tracking-[0.32px] w-[555px]">
        <p className="leading-[1.5] text-[16px]">
          <span>{`Select a client to send this invoice to. You can also `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Literata:Medium',_sans-serif] font-medium text-[#2e7684] tracking-[0.32px] underline">{`create a new contact. `}</span>
        </p>
      </div>
      <UseATemplate />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="[grid-area:1_/_1] bg-center bg-cover bg-no-repeat h-[94px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2px] mask-size-[90px_90px] ml-[-2px] mt-[-2px] w-[101px]" data-name="Screenshot 2025-02-11 at 8.05.25 PM 1" style={{ backgroundImage: `url('${imgScreenshot20250211At80525Pm1}')`, maskImage: `url('${imgScreenshot20250211At80525Pm2}')` }} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-center relative shrink-0 w-[90px]">
      <MaskGroup />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Email</p>
      </div>
    </div>
  );
}

function Frame12038() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start justify-start relative shrink-0 w-full">
      <Frame2 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">john.doe@example.com</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Phone number</p>
      </div>
    </div>
  );
}

function Frame12036() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start justify-start relative shrink-0 w-full">
      <Frame4 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">312-555-1234</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-start justify-start relative shrink-0 w-[193px]">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[16px] tracking-[0.32px] w-full">
        <p className="leading-[1.5]">John Doe</p>
      </div>
      <Frame12038 />
      <Frame12036 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-1 items-start justify-start relative shrink-0">
      <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Address</p>
      </div>
    </div>
  );
}

function Frame12037() {
  return (
    <div className="content-stretch flex flex-col h-[93px] items-start justify-start relative shrink-0 w-[257px]">
      <Frame5 />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#667593] text-[16px] tracking-[0.32px]" style={{ width: "min-content" }}>
        <p className="leading-[1.5]">
          10607 Lockridge drive
          <br aria-hidden="true" />
          Silver Spring, MD
          <br aria-hidden="true" />
          20901
        </p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#e4fbf3] relative rounded-lg shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex gap-3 items-start justify-start p-[20px] relative w-full">
          <Frame1 />
          <Frame8 />
          <Frame12037 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-start top-[174px] translate-x-[-50%] w-[555px]" style={{ left: "calc(50% + 0.5px)" }}>
      <Frame7 />
      <Frame9 />
    </div>
  );
}

function Component9508D804Ecae43A29445Ceb71Dbde11FConverted1() {
  return (
    <div className="absolute h-[592px] left-[82px] top-[441px] w-[1393px]" data-name="9508d804-ecae-43a2-9445-ceb71dbde11f [Converted] 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1393 592">
        <g clipPath="url(#clip0_126_7947)" id="9508d804-ecae-43a2-9445-ceb71dbde11f [Converted] 1">
          <g id="Vector"></g>
          <path d={svgPaths.p177427c0} id="Vector_2" opacity="0.8" stroke="var(--stroke-0, #2F7685)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p15fc4700} id="Vector_3" opacity="0.8" stroke="var(--stroke-0, #2F7685)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2202bba0} id="Vector_4" opacity="0.8" stroke="var(--stroke-0, #2F7685)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p34ae740} id="Vector_5" opacity="0.8" stroke="var(--stroke-0, #2E7684)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p27746600} id="Vector_6" stroke="var(--stroke-0, #2E7684)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_126_7947">
            <rect fill="white" height="592" width="1393" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BaseButton() {
  return (
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
        <p className="leading-[1.5] whitespace-pre">Close</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex h-9 items-center justify-center relative shrink-0" data-name="Button">
      <BaseButton />
    </div>
  );
}

function BaseButton1() {
  return (
    <div className="relative rounded-3xl shrink-0" data-name=".Base - Button">
      <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
        <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
          <p className="leading-[1.5] whitespace-pre">Back</p>
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
    <div className="box-border content-stretch flex gap-2 items-start justify-start overflow-clip px-3 py-2 relative rounded-3xl shrink-0" data-name=".Base - Button">
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start relative shrink-0">
      <Button2 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex gap-3 items-center justify-start left-[1201px] top-4">
      <Button />
      <Button1 />
      <Frame6 />
    </div>
  );
}

function Frame12041() {
  return (
    <div className="absolute bg-neutral-100 h-[68px] left-0 overflow-clip top-[908px] w-[1440px]">
      <Frame11 />
    </div>
  );
}

function Check() {
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

function StepperDot() {
  return (
    <div className="bg-[#2f7685] content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <Check />
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Invoice type</p>
      </div>
    </div>
  );
}

function HorizontalDivider() {
  return (
    <div className="h-0 relative shrink-0 w-[60px]" data-name=".Horizontal Divider">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
          <g id=".Horizontal Divider">
            <line id="Line 3" stroke="var(--stroke-0, #8C97AC)" x2="60" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StepperDot1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot1 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#47567b] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Assign Contact</p>
      </div>
    </div>
  );
}

function Line7() {
  return (
    <div className="h-0 relative shrink-0 w-[60px]">
      <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 1">
          <g id=".Horizontal Divider">
            <line id="Line 3" stroke="var(--stroke-0, #8C97AC)" x2="60" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StepperDot2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-[44px]" />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#667593] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot2 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667593] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Additional info</p>
      </div>
    </div>
  );
}

function StepperDot3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[44px] shrink-0 size-8" data-name=".Stepper Dot">
      <div aria-hidden="true" className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-[44px]" />
      <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#667593] text-[16px] text-center text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">4</p>
      </div>
    </div>
  );
}

function Step3() {
  return (
    <div className="content-stretch flex flex-col gap-2 items-center justify-start min-w-20 relative shrink-0" data-name=".Step">
      <StepperDot3 />
      <div className="flex flex-col font-['Literata:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#667593] text-[16px] text-nowrap tracking-[0.32px]">
        <p className="leading-[1.5] whitespace-pre">Send</p>
      </div>
    </div>
  );
}

function WizardStepper() {
  return (
    <div className="absolute content-stretch flex gap-4 items-center justify-start top-[50px] translate-x-[-50%]" data-name="Wizard Stepper" style={{ left: "calc(50% + 0.5px)" }}>
      <Step />
      <HorizontalDivider />
      <Step1 />
      <Line7 />
      <Step2 />
      <Line7 />
      <Step3 />
    </div>
  );
}

export default function Contacts() {
  return (
    <div className="relative size-full" data-name="Contacts">
      <Shell />
      <X />
      <Frame10 />
      <Component9508D804Ecae43A29445Ceb71Dbde11FConverted1 />
      <Frame12041 />
      <WizardStepper />
    </div>
  );
}