import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { MapPin, Clock, Video, Mail, Phone, Calendar } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';
import { CRN_CONTACT } from '../lib/site/contact';

export const JoinUs: React.FC = () => {
  return (
    <div className="pt-20">
      <Section background="black" className="text-center">
        <Reveal className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-display font-bold mb-6">Nous Rejoindre</h1>
          <p className="text-xl text-gray-400">Venez tel que vous êtes.</p>
        </Reveal>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Column */}
          <Stagger className="space-y-10">
            {/* Address */}
            <div className="flex gap-6">
              <div className="bg-brand-orange p-4 h-fit">
                <MapPin className="text-white w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-black mb-2">Notre Adresse</h3>
                <p className="text-gray-600 text-lg">
                  {CRN_CONTACT.address.line1},<br/>
                  {CRN_CONTACT.address.line2}
                </p>
                <a 
                  href={CRN_CONTACT.googleMapsSearchUrl}
                  target="_blank" 
                  rel="noreferrer"
                  className="ui-link mt-2 inline-block rounded-sm font-bold text-brand-orange focus-visible:ring-offset-brand-white"
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
                  <p className="text-2xl font-mono">{CRN_CONTACT.zoom.meetingId}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">Code Secret</p>
                  <p className="text-2xl font-mono">{CRN_CONTACT.zoom.passcode}</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="pt-6">
               <h3 className="text-2xl font-display font-bold text-brand-black mb-4">Contactez-nous</h3>
               <div className="space-y-3 text-lg text-gray-700">
                 <p className="flex items-center gap-3"><Phone className="text-brand-orange w-5 h-5"/> {CRN_CONTACT.phone}</p>
                 <p className="flex items-center gap-3"><Mail className="text-brand-orange w-5 h-5"/> {CRN_CONTACT.email}</p>
               </div>
               <Button className="mt-6">Envoyer un message</Button>
            </div>

          </Stagger>

          {/* Map Column */}
          <Reveal className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden relative shadow-inner" direction="left">
             <iframe 
               width="100%" 
               height="100%" 
               style={{ border: 0, minHeight: '500px' }} 
               loading="lazy" 
               allowFullScreen 
               src={CRN_CONTACT.googleMapsEmbedUrl}
               title="CRN Location"
             ></iframe>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};
