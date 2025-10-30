import { useState } from "react";
import svgPaths from "../../imports/svg-t5gx6l8zpy";
import Stepper from "./Stepper";
import CreateListingStepper from "./CreateListingStepper";

interface DescriptionProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onNext?: (description: string) => void;
  initialData?: string;
}

export default function Description({ onNavigate, onBack, onNext, initialData }: DescriptionProps) {
  const [description, setDescription] = useState(initialData || '');

  // Validation function
  const isDescriptionValid = () => {
    // Check if description is filled
    return description && description.trim() !== '';
  };

  const handleNext = () => {
    // Only proceed if validation passes
    if (!isDescriptionValid()) {
      console.log('Validation failed - description is empty');
      return;
    }
    
    if (onNext) {
      onNext(description);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="bg-neutral-100 relative size-full min-h-screen">
      {/* Header */}
      <div
        className="absolute bg-[#ffffff] box-border content-stretch flex flex-row h-[76px] items-center justify-between left-0 px-4 py-5 top-0 w-[375px]"
        data-name="Header"
      >
        <div className="absolute border-[#ccd7e6] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
        <div className="h-6 relative shrink-0 w-[143px]" data-name="Logo">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 143 24"
          >
            <g clipPath="url(#clip0_17_2292)" id="Logo">
              <path
                d={svgPaths.p33702600}
                fill="var(--fill-0, #47567B)"
                id="Zinnia"
              />
            </g>
            <defs>
              <clipPath id="clip0_17_2292">
                <rect fill="white" height="24" width="143" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="relative shrink-0 size-[39px]" data-name="user-circle">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 39 39"
          >
            <g id="user-circle">
              <path
                d={svgPaths.p221cbb00}
                id="Vector"
                stroke="var(--stroke-0, #47567B)"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Stepper Section */}
      <div className="w-full flex justify-center pt-4 pb-8">
        <CreateListingStepper stepNumber={2} />
      </div>

      {/* Main Content */}
      <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start px-6 pb-32 w-full">
        {/* Title and Description */}
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] w-full max-w-[335px]">
        <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] text-center text-nowrap">
          <p className="block leading-[1.5] whitespace-pre">Description</p>
        </div>
        <div
          className="font-['Montserrat:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[14px] text-left tracking-[0.28px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[1.5]">
            This is your chance to sell yourself. We recommend you mention how long you've been doing weddings and what you love about what you do.
          </p>
        </div>
      </div>

        {/* Text Area */}
        <div className="w-full max-w-[315px]">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#ffffff] h-[271px] w-[315px] rounded-lg border border-[#8c97ac] p-[12px] resize-none focus:outline-none focus:border-[#47567b] font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] leading-[1.5] tracking-[0.28px]"
            placeholder="Write your description here"
          />
        </div>
        </div>
      </div>

      {/* Background */}
      <div className="absolute bg-neutral-50 h-[120px] left-0 top-[714px] w-[375px]" />

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 w-full bg-neutral-50 px-[100px] py-8 shadow-[0px_2px_4px_-1px_rgba(0,0,0,0.06),0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <div className="flex gap-3 items-start justify-end">
          <button
            onClick={handleBack}
            className="flex items-center justify-center h-9 px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-[#47567b] tracking-[0.28px] leading-[1.5] hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isDescriptionValid()}
            className={`flex items-center justify-center h-[37px] w-[164px] px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.5] transition-colors ${isDescriptionValid() ? 'bg-[#667493] hover:bg-[#5a6884] cursor-pointer' : 'bg-[#8c97ac] cursor-not-allowed opacity-50'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}