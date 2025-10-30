import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  checkmarkPath?: string;
}

export function Checkbox({ label, checked, onChange, checkmarkPath }: CheckboxProps) {
  return (
    <div className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0">
      <div className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0">
          <div 
            className={`box-border content-stretch flex flex-col items-center justify-center overflow-clip p-0 relative rounded shrink-0 size-4 cursor-pointer ${checked ? 'bg-[#47567b]' : 'bg-[#ffffff] border border-[#8c97ac]'}`}
            onClick={() => onChange(!checked)}
          >
            {checked && checkmarkPath && (
              <svg className="relative shrink-0 size-3.5" fill="none" viewBox="0 0 14 14">
                <path
                  d={checkmarkPath}
                  stroke="#FAFAFA"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0">
              <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RadioButtonProps {
  label: string;
  selected: boolean;
  onChange: () => void;
  helperText?: string;
}

export function RadioButton({ label, selected, onChange, helperText }: RadioButtonProps) {
  return (
    <div className="box-border content-stretch flex items-start justify-start p-0 relative shrink-0">
      <div className="box-border content-stretch flex gap-2 items-start justify-start p-0 relative shrink-0">
        <div className="box-border content-stretch flex items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0">
          <div 
            className="relative shrink-0 size-4 cursor-pointer"
            onClick={onChange}
          >
            {selected ? (
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g>
                  <rect fill="var(--fill-0, #47567b)" height="16" rx="8" width="16" />
                  <circle cx="8" cy="8" fill="var(--fill-0, white)" r="3" />
                </g>
              </svg>
            ) : (
              <div className="bg-[#ffffff] relative rounded-3xl shrink-0 size-4 border border-[#8c97ac]" />
            )}
          </div>
        </div>
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
          <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0">
            <div className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0">
              <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
                <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{label}</p>
              </div>
            </div>
          </div>
          {helperText && (
            <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-[433px]">
              <div className="font-['Montserrat:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#667593] text-[14px] tracking-[0.28px] w-[433px]">
                <p className="leading-[1.5] whitespace-pre-wrap">{helperText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}