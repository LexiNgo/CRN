import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Flame } from 'lucide-react';
import { NavItem } from '../types';

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/95 backdrop-blur-sm border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-brand-orange rounded-full group-hover:scale-110 transition-transform">
            <Flame className="w-6 h-6 text-white" fill="white" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter text-white">
            CRN<span className="text-brand-orange">.</span>
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-bold uppercase tracking-widest hover:text-brand-orange transition-colors ${isActive ? 'text-brand-orange border-b-2 border-brand-orange pb-1' : 'text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-brand-black z-40 transform transition-transform duration-300 lg:hidden pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center space-y-8 p-8">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `text-2xl font-display font-bold uppercase ${isActive ? 'text-brand-orange' : 'text-white'}`
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