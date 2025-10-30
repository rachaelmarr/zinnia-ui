import step1Svg from "../../assets/createlisting_step1.svg";
import step2Svg from "../../assets/createlisting_step2.svg";
import step3Svg from "../../assets/createlisting_step3.svg";

interface StepperProps {
  currentStep: number; // 1, 2, or 3
}


// Custom step components using your SVGs
function CustomStep1({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img 
        src={step1Svg} 
        alt="Step 1" 
        className={`w-12 h-12 ${isActive ? 'opacity-100' : 'opacity-50'}`}
      />
    </div>
  );
}

function CustomStep2({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img 
        src={step2Svg} 
        alt="Step 2" 
        className={`w-12 h-12 ${isActive ? 'opacity-100' : 'opacity-50'}`}
      />
    </div>
  );
}

function CustomStep3({ isActive }: { isActive: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <img 
        src={step3Svg} 
        alt="Step 3" 
        className={`w-12 h-12 ${isActive ? 'opacity-100' : 'opacity-50'}`}
      />
    </div>
  );
}

function Timeline({ currentStep }: { currentStep: number }) {
  return (
    <div
      className="[grid-area:1_/_1] box-border content-stretch flex flex-row h-[15px] items-start justify-start ml-0 mt-0 p-0 relative gap-4"
      data-name="Timeline"
    >
      <CustomStep1 isActive={currentStep >= 1} />
      <CustomStep2 isActive={currentStep >= 2} />
      <CustomStep3 isActive={currentStep >= 3} />
    </div>
  );
}

const stepLabels = [
  "Step 1 of 3: ADD PHOTOS",
  "Step 2 of 3: BUSINESS HOURS", 
  "Step 3 of 3: DESCRIPTION"
];

export default function Stepper({ currentStep }: StepperProps) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Timeline currentStep={currentStep} />
      <div className="[grid-area:1_/_1] flex flex-col font-['Literata:Light',_sans-serif] font-light justify-center ml-[13.3px] mt-[37.5px] relative text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px] translate-y-[-50%] uppercase">
        <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
          {stepLabels[currentStep - 1]}
        </p>
      </div>
    </div>
  );
}