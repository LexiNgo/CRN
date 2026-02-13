import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  type,
  ...props 
}) => {
  const baseStyles =
    "ui-interactive inline-flex items-center justify-center gap-2 px-8 py-3 rounded-none border-2 font-display font-bold tracking-wide hover:-translate-y-1 focus-visible:ring-offset-brand-black";
  
  const variants = {
    primary:
      "border-brand-orange bg-brand-orange text-white hover:border-white hover:bg-white hover:text-brand-black active:border-brand-lightOrange active:bg-brand-lightOrange",
    outline:
      "border-white bg-transparent text-white hover:bg-white hover:text-brand-black active:bg-gray-100",
    white:
      "border-white bg-white text-brand-black hover:border-brand-orange hover:bg-brand-orange hover:text-white active:bg-brand-lightOrange"
  };

  return (
    <button 
      type={type ?? 'button'}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
