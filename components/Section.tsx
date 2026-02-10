import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'black' | 'dark' | 'white' | 'orange';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'black' 
}) => {
  const bgColors = {
    black: 'bg-brand-black text-white',
    dark: 'bg-brand-dark text-white',
    white: 'bg-brand-white text-brand-black',
    orange: 'bg-brand-orange text-white'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[background]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {children}
      </div>
    </section>
  );
};