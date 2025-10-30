import step1Svg from "../../assets/createlisting_step1.svg?url";
import step2Svg from "../../assets/createlisting_step2.svg?url";
import step3Svg from "../../assets/createlisting_step3.svg?url";

interface CreateListingStepperProps {
  stepNumber: 1 | 2 | 3;
  debug?: boolean;
}

export default function CreateListingStepper({ stepNumber, debug = false }: CreateListingStepperProps) {
  const getStepSvg = () => {
    switch (stepNumber) {
      case 1: return step1Svg;
      case 2: return step2Svg;
      case 3: return step3Svg;
      default: return step1Svg;
    }
  };

  const debugClasses = debug ? "bg-red-500 p-4 rounded-lg border-4 border-yellow-400" : "";

  return (
    <div className={`${debugClasses}`}>
      <div style={{ width: '220px', height: '47px', overflow: 'hidden' }}>
        <img 
          src={getStepSvg()} 
          alt={`Step ${stepNumber}`} 
          style={{ 
            width: '100%', 
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center'
          }}
          onError={(e) => {
            console.error(`Failed to load step ${stepNumber} SVG:`, getStepSvg());
          }}
          onLoad={() => {
            console.log(`Successfully loaded step ${stepNumber} SVG:`, getStepSvg());
          }}
        />
      </div>
    </div>
  );
}
