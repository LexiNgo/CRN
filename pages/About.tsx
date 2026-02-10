import React from 'react';
import { Section } from '../components/Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import imagePasteurs from '../assets/pasteurs.webp';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section background="black" className="text-center">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">Notre Vision</h1>
        <p className="text-xl text-brand-orange font-bold uppercase tracking-widest">CRN Nantes</p>
      </Section>

      {/* Visionaries */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-display font-bold text-brand-black mb-8">Christian et Nelly Nana</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Christian et Nelly Nana sont les visionnaires du Centre de Réveil pour les Nations. Leur cœur est animé par une passion profonde pour Dieu et une vision claire : <strong>voir une génération se lever, embrasée par le feu du Saint-Esprit</strong>, formée et envoyée pour impacter les nations.
              </p>
              <p>
                Sous leur direction, CRN n’est pas simplement une église, mais une véritable communauté dédiée au réveil spirituel, à l’édification des croyants et à l’annonce de l’Évangile. Ils portent la conviction que chaque chrétien est appelé à grandir dans sa relation avec Dieu, à découvrir sa destinée et à devenir un témoin puissant de l’amour et de la vérité de Jésus-Christ.
              </p>
              <p>
                Pour Christian et Nelly Nana, Jésus-Christ est l’unique chemin vers Dieu, et l’Église est appelée à être une lumière pour les nations à travers la puissance du Saint-Esprit. Leur engagement, leurs enseignements et leur vision inspirent les croyants à marcher dans le feu du réveil et à porter l’Évangile partout où Dieu les envoie.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Placeholder for Leaders Image */}
              <img 
                src={imagePasteurs} 
                alt="Christian et Nelly Nana" 
                className="w-full h-auto object-cover rounded shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-orange text-white p-6 hidden md:block">
                <Quote className="w-8 h-8 mb-2" />
                <p className="font-bold font-display text-lg">Une génération en feu.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section background="dark" className="text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-white">Nos 4 Piliers Fondamentaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <MissionCard 
              verse="Actes 1:8" 
              title="Réveiller" 
              desc="Réveiller les cœurs et fortifier la foi par la puissance du Saint-Esprit." 
            />
            <MissionCard 
              verse="Éphésiens 4:12" 
              title="Équiper" 
              desc="Former et équiper les croyants pour l'œuvre du ministère et le service." 
            />
            <MissionCard 
              verse="Marc 16:15" 
              title="Annoncer" 
              desc="Annoncer l'Évangile avec conviction et puissance aux nations." 
            />
            <MissionCard 
              verse="Actes 2:42" 
              title="Communier" 
              desc="Cultiver la communion fraternelle, la prière et l'amour fraternel." 
            />
          </div>
        </div>
      </Section>

      {/* Faith Declaration */}
      <Section background="black">
         <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-10 text-center">Ce que nous croyons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-gray-300">
               <ul className="space-y-4 list-disc list-inside marker:text-brand-orange">
                 <li>Nous croyons que la Bible est la Parole inspirée de Dieu.</li>
                 <li>Nous croyons en un seul Dieu éternel : Père, Fils et Saint-Esprit.</li>
                 <li>Nous croyons en la divinité de Jésus-Christ, sa naissance virginale, sa mort expiatoire, sa résurrection corporelle et son ascension.</li>
                 <li>Nous croyons que le salut est un don de Dieu reçu par la foi en Jésus-Christ.</li>
               </ul>
               <ul className="space-y-4 list-disc list-inside marker:text-brand-orange">
                 <li>Nous croyons au baptême du Saint-Esprit et à l'exercice des dons spirituels.</li>
                 <li>Nous croyons en l'Église, corps de Christ, appelée à évangéliser le monde.</li>
                 <li>Nous croyons au retour personnel et imminent de Jésus-Christ.</li>
                 <li>Nous croyons à la résurrection des morts et à la vie éternelle.</li>
               </ul>
            </div>
         </div>
      </Section>
    </div>
  );
};

const MissionCard: React.FC<{ verse: string; title: string; desc: string }> = ({ verse, title, desc }) => (
  <div className="bg-brand-black p-8 border border-white/5 hover:border-brand-orange transition-all duration-300 text-left group">
    <span className="text-xs font-bold text-brand-orange tracking-widest uppercase mb-2 block">{verse}</span>
    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-orange transition-colors">{title}</h3>
    <p className="text-gray-400">{desc}</p>
  </div>
);