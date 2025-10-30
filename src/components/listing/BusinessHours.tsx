import { useState } from "react";
import svgPaths from "../../imports/svg-pu5zbwnjc4";
import Stepper from "./Stepper";
import CreateListingStepper from "./CreateListingStepper";

interface BusinessHoursProps {
  onNavigate?: (view: string) => void;
  onBack?: () => void;
  onNext?: (businessHours: Array<{ name: string; enabled: boolean; startTime: string; endTime: string; }>) => void;
  initialData?: Array<{ name: string; enabled: boolean; startTime: string; endTime: string; }>;
}

interface BusinessHour {
  name: string;
  enabled: boolean;
  startTime: string;
  endTime: string;
}

export default function BusinessHours({ onNavigate, onBack, onNext, initialData }: BusinessHoursProps) {
  const [businessHours, setBusinessHours] = useState<BusinessHour[]>(
    initialData || [
      { name: 'Sunday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Monday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Tuesday', enabled: false, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Wednesday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Thursday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Friday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' },
      { name: 'Saturday', enabled: true, startTime: '9:00 AM', endTime: '5:00 PM' }
    ]
  );

  const handleToggleDay = (index: number) => {
    const newHours = [...businessHours];
    newHours[index].enabled = !newHours[index].enabled;
    setBusinessHours(newHours);
  };

  const handleTimeChange = (index: number, field: 'startTime' | 'endTime', value: string) => {
    const newHours = [...businessHours];
    newHours[index][field] = value;
    setBusinessHours(newHours);
  };

  // Validation function
  const isBusinessHoursValid = () => {
    // Check if at least one day is enabled
    return businessHours.some(hour => hour.enabled);
  };

  const handleNext = () => {
    // Only proceed if validation passes
    if (!isBusinessHoursValid()) {
      console.log('Validation failed - no business hours enabled');
      return;
    }
    
    if (onNext) {
      onNext(businessHours);
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="bg-neutral-100 relative size-full min-h-screen pb-16">
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
          <p className="block leading-[1.5] whitespace-pre">Business hours</p>
        </div>
        <div
          className="font-['Montserrat:Medium',_sans-serif] font-medium min-w-full relative shrink-0 text-[14px] text-left tracking-[0.28px]"
          style={{ width: "min-content" }}
        >
          <p className="block leading-[1.5]">
            These are the recurring business hours that you are available. We'll
            allow couples to book you during this time.
          </p>
        </div>
      </div>

        {/* Business Hours List */}
        <div className="w-full max-w-[335px] space-y-2">
        {businessHours.map((hour, index) => (
          <div key={hour.name} className="flex items-center gap-2 py-4">
            {/* Checkbox - Larger touch target for mobile */}
            <div
              onClick={() => handleToggleDay(index)}
              className="cursor-pointer p-2 -m-2 flex-shrink-0" // Add padding for larger touch area
            >
              <div
                className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                  hour.enabled
                    ? 'bg-[#47567b] border-[#47567b]'
                    : 'bg-white border-[#8c97ac]'
                }`}
              >
                {hour.enabled && (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d={svgPaths.p8f1dd80}
                      stroke="#FAFAFA"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                )}
              </div>
            </div>

            {/* Day Name - Wider container for 20px text */}
            <div className="w-[110px] flex-shrink-0">
              <p className="font-['Literata:SemiBold',_sans-serif] font-semibold text-[20px] text-[#47567b] leading-tight">
                {hour.name}
              </p>
            </div>

            {/* Time Inputs - Compact layout for mobile */}
            {hour.enabled && (
              <div className="flex items-center gap-1 flex-1 min-w-0">
                <select
                  value={hour.startTime}
                  onChange={(e) => handleTimeChange(index, 'startTime', e.target.value)}
                  className="bg-white border border-[#8c97ac] rounded-lg px-3 py-3 text-[14px] font-['Montserrat:Regular',_sans-serif] text-[#47567b] w-[80px] flex-shrink-0"
                >
                  <option value="8:00 AM">8:00 AM</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                </select>

                <span className="text-[12px] font-['Montserrat:Regular',_sans-serif] text-[#47567b] flex-shrink-0 px-1">
                  to
                </span>

                <select
                  value={hour.endTime}
                  onChange={(e) => handleTimeChange(index, 'endTime', e.target.value)}
                  className="bg-white border border-[#8c97ac] rounded-lg px-3 py-3 text-[14px] font-['Montserrat:Regular',_sans-serif] text-[#47567b] w-[80px] flex-shrink-0"
                >
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                </select>
              </div>
            )}
          </div>
        ))}
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
            disabled={!isBusinessHoursValid()}
            className={`flex items-center justify-center h-[37px] w-[164px] px-3 py-2 rounded-3xl font-['Montserrat'] font-medium text-[14px] text-white tracking-[0.28px] leading-[1.5] transition-colors ${isBusinessHoursValid() ? 'bg-[#667493] hover:bg-[#5a6884] cursor-pointer' : 'bg-[#8c97ac] cursor-not-allowed opacity-50'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}