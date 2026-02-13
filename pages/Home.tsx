import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flame, Users, Globe } from 'lucide-react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';
import imageFeu from '../assets/feu.webp';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <img
          src={imageFeu}
          alt=""
          aria-hidden
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 z-0 h-full w-full scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10"></div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <Reveal className="mb-6 flex justify-center" delay={0.08}>
            <div className="bg-brand-orange/20 border border-brand-orange/50 p-3 rounded-full backdrop-blur-sm">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-sm px-4">Bienvenue au CRN</span>
            </div>
          </Reveal>
          
          <Reveal as="header" className="mb-8" delay={0.16}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight">
            UNE GÉNÉRATION<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-lightOrange">EN FEU</span> POUR DIEU
            </h1>
          </Reveal>

          <Reveal delay={0.24} distance={0}>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light">
            « Réveiller, Équiper et Envoyer » — Actes 1:8
            </p>
          </Reveal>

          <Reveal className="flex flex-col md:flex-row gap-4 justify-center" delay={0.32}>
            <Button onClick={() => navigate('/join')}>
              Nous rejoindre au culte
            </Button>
            <Button variant="outline" onClick={() => navigate('/about')}>
              Découvrir la vision
            </Button>
          </Reveal>
        </div>
      </div>

      {/* Intro Section */}
      <Section background="black" className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
             <h2 className="text-brand-orange font-bold uppercase tracking-widest mb-4">Qui sommes-nous ?</h2>
             <h3 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
               Plus qu'une église,<br/>une famille.
             </h3>
             <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-4 border-brand-orange pl-6">
               Le Centre de Réveil pour les Nations est une communauté passionnée pour Jésus-Christ, consacrée au réveil spirituel, à la formation des croyants et à l'évangélisation. Nous avons à cœur de voir chaque personne rencontrer Dieu, grandir dans sa foi et devenir un témoin authentique de l'Évangile.
             </p>
             <Button variant="white" onClick={() => navigate('/about')}>
               En savoir plus
             </Button>
            </div>
          </Reveal>
          <Reveal className="relative" delay={0.08}>
             <img 
               src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=800&auto=format&fit=crop"
               alt="Assemblée en prière" 
               loading="lazy"
               decoding="async"
               className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute -bottom-6 -left-6 bg-brand-dark p-8 border-t-4 border-brand-orange max-w-xs shadow-xl hidden md:block">
               <p className="font-display font-bold text-xl mb-2">Dimanche 14h00</p>
               <p className="text-gray-400">Culte de célébration & Adoration</p>
             </div>
          </Reveal>
        </div>
      </Section>

      {/* Visionaries Teaser */}
      <Section background="dark">
        <Reveal className="text-center max-w-4xl mx-auto mb-16" distance={12}>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Un Leadership Inspiré</h2>
          <p className="text-gray-400 text-lg">
            Conduits par les pasteurs Christian et Nelly Nana, nous croyons que l'Église est appelée à être une lumière pour les nations à travers la puissance du Saint-Esprit.
          </p>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.1}>
           {[
             { title: 'Réveiller', icon: Flame, text: 'Allumer la flamme de la foi dans les cœurs.' },
             { title: 'Équiper', icon: Users, text: 'Former des disciples solides et matures.' },
             { title: 'Envoyer', icon: Globe, text: 'Impacter le monde avec l\'Évangile.' }
           ].map((item, idx) => (
             <div
               key={idx}
               className="ui-card bg-brand-black p-8 border border-white/5 hover:border-brand-orange/50 transition-colors"
             >
               <item.icon className="w-12 h-12 text-brand-orange mb-6" />
               <h3 className="text-2xl font-bold font-display mb-4">{item.title}</h3>
               <p className="text-gray-400">{item.text}</p>
             </div>
           ))}
        </Stagger>
      </Section>

      {/* CTA Final */}
      <Section background="orange" className="text-center">
        <Reveal className="mx-auto max-w-3xl" distance={12}>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Prêt à nous rencontrer ?</h2>
          <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
            Peu importe votre parcours, vous avez une place parmi nous. Venez vivre une expérience transformatrice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" onClick={() => navigate('/join')}>
              Nous contacter
            </Button>
          </div>
        </Reveal>
      </Section>
    </div>
  );
};
