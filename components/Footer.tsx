import React from 'react';
import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { CRN_CONTACT, CRN_SOCIALS } from '../lib/site/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-3xl font-display font-bold text-white">CRN<span className="text-brand-orange">.</span></h3>
            <p className="text-gray-400 leading-relaxed">
              Centre de Réveil pour les Nations.<br/>
              Une communauté passionnée pour Jésus-Christ, consacrée au réveil spirituel et à l'évangélisation.
            </p>
            <div className="flex space-x-4">
              <a
                href={CRN_SOCIALS.facebook}
                aria-label="Facebook CRN"
                className="ui-interactive rounded-full bg-white/5 p-2 hover:bg-brand-orange focus-visible:ring-offset-brand-black"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={CRN_SOCIALS.instagram}
                aria-label="Instagram CRN"
                target="_blank"
                rel="noreferrer"
                className="ui-interactive rounded-full bg-white/5 p-2 hover:bg-brand-orange focus-visible:ring-offset-brand-black"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={CRN_SOCIALS.youtube}
                aria-label="YouTube CRN"
                className="ui-interactive rounded-full bg-white/5 p-2 hover:bg-brand-orange focus-visible:ring-offset-brand-black"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              <li><NavLink to="/about" className="ui-link rounded-sm text-gray-400 hover:text-brand-orange focus-visible:ring-offset-brand-black">Qui sommes-nous ?</NavLink></li>
              <li><NavLink to="/activities" className="ui-link rounded-sm text-gray-400 hover:text-brand-orange focus-visible:ring-offset-brand-black">Nos Activités</NavLink></li>
              <li><NavLink to="/join" className="ui-link rounded-sm text-gray-400 hover:text-brand-orange focus-visible:ring-offset-brand-black">Nous rendre visite</NavLink></li>
              <li><NavLink to="/support" className="ui-link rounded-sm text-gray-400 hover:text-brand-orange focus-visible:ring-offset-brand-black">Faire un don</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-display font-bold text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                <span>{CRN_CONTACT.address.line1},<br/>{CRN_CONTACT.address.line2}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>{CRN_CONTACT.email}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span>{CRN_CONTACT.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Centre de Réveil pour les Nations (CRN). Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
