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
  ...props 
}) => {
  const baseStyles = "px-8 py-3 rounded-none font-display font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-white hover:text-brand-black border-2 border-brand-orange hover:border-white",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-black",
    white: "bg-white text-brand-black hover:bg-brand-orange hover:text-white border-2 border-white hover:border-brand-orange"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};