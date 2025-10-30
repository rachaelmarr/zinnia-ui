import React from 'react';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}

export function FormField({ label, children, required = false }: FormFieldProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-[440px]">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex gap-2 items-center justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex gap-0.5 items-start justify-start p-0 relative shrink-0">
            <div className="font-['Literata:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#47567b] text-[14px] text-nowrap tracking-[0.28px]">
              <p className="adjustLetterSpacing block leading-[1.5] whitespace-pre">{label}</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextInput({ value, onChange, placeholder }: TextInputProps) {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-full px-3 bg-transparent border border-[#8c97ac] rounded-lg font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px] focus:outline-none focus:ring-2 focus:ring-[#47567b]"
      />
    </div>
  );
}

interface SelectInputProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  chevronPath?: string;
}

export function SelectInput({ value, onChange, options, chevronPath }: SelectInputProps) {
  return (
    <div className="bg-[#ffffff] h-9 relative rounded-lg shrink-0 w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full px-3 bg-transparent border border-[#8c97ac] rounded-lg font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px] focus:outline-none focus:ring-2 focus:ring-[#47567b] appearance-none"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      {chevronPath && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <svg className="size-5" fill="none" viewBox="0 0 20 20">
            <path d={chevronPath} fill="var(--fill-0, #47567B)" stroke="var(--stroke-0, #667593)" />
          </svg>
        </div>
      )}
    </div>
  );
}

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  height?: string;
}

export function TextArea({ value, onChange, placeholder, height = "271px" }: TextAreaProps) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className={`[grid-area:1_/_1] bg-[#ffffff] ml-0 mt-[29px] relative rounded-lg w-[440px]`} style={{ height }}>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-full p-3 bg-transparent border border-[#8c97ac] rounded-lg font-['Montserrat:Regular',_sans-serif] font-normal text-[#47567b] text-[14px] tracking-[0.28px] resize-none focus:outline-none focus:ring-2 focus:ring-[#47567b]"
        />
      </div>
    </div>
  );
}