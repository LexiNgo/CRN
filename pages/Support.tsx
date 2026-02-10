import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { CreditCard, Heart, CheckCircle } from 'lucide-react';

export const Support: React.FC = () => {
  return (
    <div className="pt-20">
      <Section background="black" className="text-center">
        <h1 className="text-5xl font-display font-bold mb-6">Soutenir CRN</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie. » (2 Corinthiens 9:7)
        </p>
      </Section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold text-brand-black mb-6">Pourquoi donner ?</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En soutenant CRN, vous contribuez directement à l’avancement de l’Évangile, à la formation des croyants et à l’impact missionnaire. Votre générosité permet de soutenir les projets, les missions et l’œuvre que Dieu nous confie.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-brand-orange w-5 h-5" /> Financement des activités d'évangélisation
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-brand-orange w-5 h-5" /> Soutien aux missions humanitaires
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <CheckCircle className="text-brand-orange w-5 h-5" /> Entretien et développement de l'église
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg border border-gray-200 shadow-xl">
             <div className="text-center mb-8">
               <Heart className="w-12 h-12 text-brand-orange mx-auto mb-4" />
               <h3 className="text-2xl font-bold text-brand-black">Faire un don</h3>
             </div>
             
             <div className="space-y-6">
               <div className="bg-white p-6 rounded shadow-sm border-l-4 border-brand-orange">
                 <h4 className="font-bold text-brand-dark mb-2 flex items-center gap-2"><CreditCard className="w-4 h-4"/> Virement Bancaire</h4>
                 <p className="text-sm text-gray-500 mb-1">Code IBAN / RIB</p>
                 <p className="font-mono text-lg font-bold text-brand-black break-all">10278 36184 0001468210 59</p>
               </div>

               <div className="bg-white p-6 rounded shadow-sm border-l-4 border-blue-600">
                 <h4 className="font-bold text-brand-dark mb-2">PayPal</h4>
                 <p className="text-sm text-gray-500 mb-2">Envoyez vos dons à :</p>
                 <p className="font-bold text-lg mb-4">eglisecrn44@gmail.com</p>
                 <Button fullWidth onClick={() => window.open('https://paypal.com', '_blank')}>
                   Donner via PayPal
                 </Button>
               </div>
             </div>
             
             <p className="text-center text-xs text-gray-400 mt-6">
               HelloAsso et paiement par carte bancaire bientôt disponibles.
             </p>
          </div>
        </div>
      </Section>
    </div>
  );
};