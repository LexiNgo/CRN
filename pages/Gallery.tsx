import React from 'react';
import { Section } from '../components/Section';
import { Instagram } from 'lucide-react';
import guitariste from '../assets/guitariste.webp';
import assemblee from '../assets/assemblee.webp';
import { a } from 'framer-motion/client';

export const Gallery: React.FC = () => {
  // Using placeholder images for demonstration
  const images = [
    "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    assemblee,
    "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop",
    guitariste,
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop",
  ];

  return (
    <div className="pt-20">
      <Section background="black" className="text-center">
        <h1 className="text-5xl font-display font-bold mb-6">Galerie</h1>
        <p className="text-xl text-gray-400">Revivez les moments forts de la communauté.</p>
      </Section>

      <Section background="dark">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden aspect-square bg-gray-900 cursor-pointer">
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white" className="text-center">
        <div className="flex flex-col items-center">
           <Instagram className="w-12 h-12 text-brand-black mb-4" />
           <h2 className="text-3xl font-display font-bold text-brand-black mb-4">Suivez-nous sur Instagram</h2>
           <p className="text-gray-600 mb-8">@eglise.crn pour plus de photos et d'actualités en direct.</p>
           <a 
             href="https://www.instagram.com/eglise.crn?igsh=anZma2QydzAwaHNn" 
             className="px-8 py-3 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white font-bold rounded-full hover:shadow-lg transition-shadow"
           >
             Voir le profil
           </a>
        </div>
      </Section>
    </div>
  );
};