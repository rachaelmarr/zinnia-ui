import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}: ButtonProps) {
  const baseClasses = 'font-medium transition-colors rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#2f7685] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#667493] hover:bg-[#5a6280] text-white shadow-sm',
    secondary: 'bg-[#2f7685] hover:bg-[#265a66] text-white shadow-sm',
    outline: 'border border-[#8c97ac] text-[#667593] hover:bg-gray-50 bg-white',
    ghost: 'text-[#667593] hover:bg-gray-50',
    link: 'text-[#2e7684] hover:underline p-0 h-auto bg-transparent'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm h-8',
    md: 'px-3 py-2 text-[14px] h-9',
    lg: 'px-6 py-3 text-lg h-12'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button 
      className={classes} 
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      {...props}
    >
      {children}
    </button>
  );
}

