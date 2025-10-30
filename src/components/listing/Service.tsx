import { useState } from "react";
import svgPaths from "../../imports/svg-47l9r8gyvt";
import Stepper from "./Stepper";
import CreateListingStepper from "./CreateListingStepper";

interface ServiceProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onNext?: (serviceData: any) => void;
  initialData?: any;
}

export default function Service({ onNavigate, onBack, onNext, initialData }: ServiceProps) {
  const [serviceData, setServiceData] = useState({
    serviceName: initialData?.serviceName || 'Wedding photography',
    type: initialData?.type || 'Wedding day',
    hours: initialData?.hours || '5',
    description: initialData?.description || 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam ultrices tempor.',
    price: initialData?.price || '300',
    ...initialData
  });

  const handleInputChange = (field: string, value: string) => {
    setServiceData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Validation function
  const isServiceValid = () => {
    // Check if required fields are filled
    return serviceData.serviceName && serviceData.serviceName.trim() !== '' &&
           serviceData.type && serviceData.type.trim() !== '' &&
           serviceData.hours && serviceData.hours.trim() !== '' &&
           serviceData.price && serviceData.price.trim() !== '';
  };

  const handleNext = () => {
    // Only proceed if validation passes
    if (!isServiceValid()) {
      console.log('Validation failed - missing required service fields');
      return;
    }
    
    if (onNext) {
      onNext(serviceData);
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

      {/* Scrollable Content Container */}
      <div className="flex-1 overflow-y-auto pb-32">
        {/* Title and Description */}
        <div className="px-[23px] pt-[64px] pb-8">
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#47567b] text-left w-full">
            <div className="flex flex-col font-['Literata:SemiBold',_sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full">
              <p className="block leading-[1.5]">Add your photography service</p>
            </div>
            <div className="font-['Montserrat:Medium',_sans-serif] font-medium relative shrink-0 text-[14px] tracking-[0.28px] w-full">
              <p className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[1.5]">
                <span>This is your specific service that you offer. These will show under your listing. You can always add more services later. </span>
                <span className="font-['Montserrat:SemiBold',_sans-serif] font-semibold">All fields are required.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Photo Upload Area */}
        <div className="px-[23px] pb-8">
          <div
            className="bg-[#ccd7e6] h-[316px] overflow-clip relative shrink-0 w-full rounded"
            data-name="Photo one"
          >
            <div
              className="absolute size-[60px] translate-x-[-50%] translate-y-[-50%]"
              data-name="camera"
              style={{ top: "calc(50% - 23px)", left: "calc(50% + 0.5px)" }}
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 60 60"
              >
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
            <div
              className="absolute box-border content-stretch flex flex-row h-9 items-center justify-center left-[110px] p-0 top-[167px] cursor-pointer"
              data-name="Button"
            >
              <div className="relative rounded-3xl shrink-0 hover:bg-gray-100 transition-colors" data-name=".Base - Button">
                <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start overflow-clip px-3 py-2 relative">
                  <div className="font-['Montserrat:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-left text-nowrap tracking-[0.28px]">
                    <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">
                      Add a photo
                    </p>
                  </div>
                </div>
                <div className="absolute border border-[#8c97ac] border-solid inset-0 pointer-events-none rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="px-[23px] pb-8 space-y-6">
          {/* Service Name */}
          <div className="space-y-2">
            <label className="font-['Literata:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] tracking-[0.28px] block">
              Service Name
            </label>
            <input
              type="text"
              value={serviceData.serviceName}
              onChange={(e) => handleInputChange('serviceName', e.target.value)}
              className="bg-[#ffffff] h-9 w-full rounded-lg border border-[#8c97ac] px-3 font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] focus:outline-none focus:border-[#47567b]"
            />
          </div>

          {/* Type */}
          <div className="space-y-2">
            <label className="font-['Literata:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] tracking-[0.28px] block">
              Type
            </label>
            <select
              value={serviceData.type}
              onChange={(e) => handleInputChange('type', e.target.value)}
              className="bg-[#ffffff] h-9 w-full rounded-lg border border-[#8c97ac] px-3 font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] focus:outline-none focus:border-[#47567b]"
            >
              <option value="Wedding day">Wedding day</option>
              <option value="Engagement">Engagement</option>
              <option value="Portrait">Portrait</option>
            </select>
          </div>

          {/* Hours */}
          <div className="space-y-2">
            <label className="font-['Literata:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] tracking-[0.28px] block">
              How many hours does this include?
            </label>
            <select
              value={serviceData.hours}
              onChange={(e) => handleInputChange('hours', e.target.value)}
              className="bg-[#ffffff] h-9 w-full rounded-lg border border-[#8c97ac] px-3 font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] focus:outline-none focus:border-[#47567b]"
            >
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="font-['Literata:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] tracking-[0.28px] block">
              Description
            </label>
            <textarea
              value={serviceData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows={4}
              className="bg-[#ffffff] w-full rounded-lg border border-[#8c97ac] p-3 font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] focus:outline-none focus:border-[#47567b] resize-none"
              placeholder="Describe your service in detail..."
            />
          </div>

          {/* Price */}
          <div className="space-y-2">
            <label className="font-['Literata:Medium',_sans-serif] font-medium text-[14px] text-[#47567b] tracking-[0.28px] block">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#47567b] font-['Montserrat:Regular',_sans-serif] text-[14px]">$</span>
              <input
                type="number"
                value={serviceData.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
                className="bg-[#ffffff] h-9 w-full rounded-lg border border-[#8c97ac] pl-8 pr-3 font-['Montserrat:Regular',_sans-serif] text-[14px] text-[#47567b] focus:outline-none focus:border-[#47567b]"
                placeholder="300"
              />
            </div>
          </div>
        </div>
      </div>

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
            disabled={!isServiceValid()}
            className={`flex items-center justify-center h-[37px] w-[164px] px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.5] transition-colors ${isServiceValid() ? 'bg-[#667493] hover:bg-[#5a6884] cursor-pointer' : 'bg-[#8c97ac] cursor-not-allowed opacity-50'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}