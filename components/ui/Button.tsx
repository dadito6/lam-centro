// components/ui/button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ className, size, children, ...props }) => {
  let sizeClasses = '';

  switch (size) {
    case 'sm':
      sizeClasses = 'px-2 py-1 text-sm';
      break;
    case 'lg':
      sizeClasses = 'px-4 py-2 text-lg';
      break;
    default:
      sizeClasses = 'px-3 py-2 text-md';
  }

  return (
    <button
      className={`bg-blue-600 text-white rounded hover:bg-blue-700 transition ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
























