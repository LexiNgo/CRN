import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import logoCrn from '../assets/logo_crn.png';

const navItems: NavItem[] = [
  { label: 'Accueil', path: '/' },
  { label: 'À propos', path: '/about' },
  { label: 'Activités', path: '/activities' },
  { label: 'Nous rejoindre', path: '/join' },
  { label: 'Galerie', path: '/gallery' },
  { label: 'Soutenir', path: '/support' },
  { label: 'Médias', path: '/media' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-brand-black/95 py-4 backdrop-blur-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="ui-interactive flex items-center gap-2 rounded-sm group" aria-label="Accueil CRN">
          <img 
            src={logoCrn}
            alt="Logo CRN" 
            className="h-24 w-auto object-contain transition-transform duration-300 invert brightness-0"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `ui-interactive rounded-sm text-sm font-bold uppercase tracking-widest hover:text-brand-orange focus-visible:ring-offset-brand-black ${
                  isActive ? 'border-b-2 border-brand-orange pb-1 text-brand-orange' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="ui-interactive rounded-sm p-2 text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 bg-brand-black pt-24 transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `ui-interactive rounded-sm px-2 text-2xl font-display font-bold uppercase ${
                  isActive ? 'text-brand-orange' : 'text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
