// components/ui/Card.tsx
import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string; // className es opcional
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};