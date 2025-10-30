import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  containerClassName?: string;
}

export function Input({ 
  label, 
  error, 
  required = false,
  optional = false,
  className = '', 
  containerClassName = '',
  ...props 
}: InputProps) {
  const baseClasses = 'w-full h-9 px-3 py-2 bg-white border border-[#8c97ac] rounded-lg font-normal text-[14px] tracking-[0.28px] text-[#667593] placeholder:text-[#667593] focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:border-transparent transition-colors';
  const errorClasses = error ? 'border-red-300 focus:ring-red-500' : '';
  
  return (
    <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
      {label && (
        <div className="flex flex-row gap-2 items-center">
          <label 
            className="font-medium text-[#47567b] text-[14px] tracking-[0.28px]"
            style={{ fontFamily: 'Literata, serif' }}
          >
            {label}
          </label>
          {required && (
            <span className="font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
              (required)
            </span>
          )}
          {optional && (
            <span className="font-medium text-[#47567b] text-[14px] tracking-[0.28px]">
              (optional)
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <input 
          className={`${baseClasses} ${errorClasses} ${className}`}
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          {...props}
        />
      </div>
      {error && (
        <p className="font-normal text-[12px] text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
          {error}
        </p>
      )}
    </div>
  );
}

