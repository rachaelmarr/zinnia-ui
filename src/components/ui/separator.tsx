import React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function Separator({ 
  orientation = 'horizontal', 
  className = '', 
  ...props 
}: SeparatorProps) {
  const baseClasses = orientation === 'horizontal' 
    ? 'w-full h-px bg-gray-200' 
    : 'h-full w-px bg-gray-200';
  
  return (
    <div 
      className={`${baseClasses} ${className}`}
      {...props}
    />
  );
}

