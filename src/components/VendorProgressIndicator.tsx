import React from "react";
import step1Svg from "../assets/step1-vendorcreate-vendortype.svg";
import step2Svg from "../assets/step2-vendorcreate-yourinfo.svg";
import step3Svg from "../assets/step3-vendorcreate-subscription.svg";
import step4Svg from "../assets/step4-vendorcreate-payment.svg";
import step5Svg from "../assets/step5-vendorcreate-create account.svg";

interface VendorProgressIndicatorProps {
  currentStep: number; // 1, 2, 3, 4, or 5 (VENDOR TYPE, YOUR INFO, SUBSCRIPTION, PAYMENT, CREATE ACCOUNT)
}

export default function VendorProgressIndicator({ currentStep }: VendorProgressIndicatorProps) {
  const steps = [
    { svg: step1Svg },
    { svg: step2Svg },
    { svg: step3Svg },
    { svg: step4Svg },
    { svg: step5Svg }
  ];

  // Show only the current step's SVG
  const currentStepIndex = currentStep - 1;
  const currentStepSvg = steps[currentStepIndex]?.svg;

  console.log('VendorProgressIndicator render:', {
    currentStep,
    currentStepIndex,
    currentStepSvg,
    allSteps: steps
  });

  return (
    <div className="flex items-center justify-center">
      {currentStepSvg && (
        <div className="transition-all duration-200">
          <img 
            src={currentStepSvg}
            alt={`Step ${currentStep}`}
            className="h-24 object-contain"
            onLoad={() => console.log(`✅ Step ${currentStep} SVG loaded:`, currentStepSvg)}
            onError={(e) => {
              console.error(`❌ Step ${currentStep} SVG failed to load:`, currentStepSvg, e);
              console.log('Available steps:', steps);
            }}
          />
        </div>
      )}
      {!currentStepSvg && (
        <div className="text-red-500">
          No SVG found for step {currentStep}
        </div>
      )}
    </div>
  );
}
