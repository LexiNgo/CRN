import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Clock, Video, Mail, Phone, Calendar } from 'lucide-react';

export const JoinUs: React.FC = () => {
  return (
    <div className="pt-20">
      <Section background="black" className="text-center">
        <h1 className="text-5xl font-display font-bold mb-6">Nous Rejoindre</h1>
        <p className="text-xl text-gray-400">Venez tel que vous êtes.</p>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <div className="space-y-10">
            
            {/* Address */}
            <div className="flex gap-6">
              <div className="bg-brand-orange p-4 h-fit">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-black mb-2">Notre Adresse</h3>
                <p className="text-gray-600 text-lg">
                  8 rue de Hambourg,<br/>
                  44000 Nantes, France
                </p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=12+Boulevard+de+Sarrebrück+44000+Nantes" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block mt-2 text-brand-orange font-bold hover:underline"
                >
                  Itinéraire Google Maps &rarr;
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-6">
              <div className="bg-brand-black p-4 h-fit">
                <Clock className="text-white w-8 h-8" />
              </div>
              <div className="w-full">
                <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Nos Horaires</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-bold flex items-center gap-2"><Calendar className="w-4 h-4" /> Dimanche</span>
                    <span className="text-brand-orange font-bold">14h00 - Culte</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                    <span className="font-bold flex items-center gap-2"><Video className="w-4 h-4" /> Mercredi</span>
                    <span className="text-brand-orange font-bold">19h00 - Étude (Zoom)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Zoom */}
            <div className="bg-brand-dark p-8 text-white rounded-lg border-l-4 border-brand-orange">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Video className="text-brand-orange" /> Rejoignez-nous en ligne
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">ID Réunion</p>
                  <p className="text-2xl font-mono">349 846 0474</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Code Secret</p>
                  <p className="text-2xl font-mono">2025</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-6">
               <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Contactez-nous</h3>
               <div className="space-y-3 text-lg text-gray-700">
                 <p className="flex items-center gap-3"><Phone className="text-brand-orange w-5 h-5"/> 06 72 56 75 87</p>
                 <p className="flex items-center gap-3"><Mail className="text-brand-orange w-5 h-5"/> eglisecrn44@gmail.com</p>
               </div>
               <Button className="mt-6">Envoyer un message</Button>
            </div>

          </div>

          {/* Map Column */}
          <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0, minHeight: '500px' }} 
               loading="lazy" 
               allowFullScreen 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.846548234825!2d-1.5367!3d47.2185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDEzJzA2LjYiTiAxwrAzMicyMi4xIlc!5e0!3m2!1sen!2sfr!4v1625680000000!5m2!1sen!2sfr"
               title="CRN Location"
             ></iframe>
          </div>
        </div>
      </Section>
    </div>
  );
};