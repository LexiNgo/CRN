import React from 'react';
import { Section } from '../components/Section';
import { BookOpen, Heart, Users, Zap, Mic2, Moon, Globe, Map } from 'lucide-react';
import { Reveal } from '../components/motion/Reveal';
import { Stagger } from '../components/motion/Stagger';

const activities = [
  {
    title: "Enseignement et Prière",
    description: "Des temps profonds d'étude biblique pour enraciner la foi, accompagnés de moments intenses de prière pour l'édification spirituelle.",
    icon: BookOpen
  },
  {
    title: "Évangélisation",
    description: "Actions locales, sorties dans les rues de Nantes et partage de l'Évangile pour toucher les cœurs perdus.",
    icon: Map
  },
  {
    title: "Formation des Disciples",
    description: "Des programmes structurés pour aider chaque croyant à grandir, mûrir et devenir un leader dans sa sphère d'influence.",
    icon: Users
  },
  {
    title: "Activation des Dons",
    description: "Enseignements pratiques et ateliers pour découvrir, activer et développer les dons spirituels déposés par Dieu.",
    icon: Zap
  },
  {
    title: "Conférences de Réveil",
    description: "Grands rassemblements ponctuels avec des orateurs invités pour raviver la flamme et approfondir la foi.",
    icon: Mic2
  },
  {
    title: "Veillées de Prière",
    description: "Des nuits consacrées à l'intercession, au combat spirituel et à la recherche de la face de Dieu.",
    icon: Moon
  },
  {
    title: "Croisades d'Évangélisation",
    description: "Événements publics ouverts à tous pour proclamer le salut en Jésus-Christ à grande échelle.",
    icon: Heart
  },
  {
    title: "Voyages Missionnaires",
    description: "Missions nationales et internationales pour soutenir d'autres églises et apporter l'aide humanitaire et spirituelle.",
    icon: Globe
  }
];

export const Activities: React.FC = () => {
  return (
    <div className="pt-20">
       <Section background="black" className="pb-12">
        <Reveal className="mx-auto max-w-4xl text-center" distance={12}>
          <h1 className="text-5xl font-display font-bold mb-6">Nos Activités & Ministères</h1>
          <p className="text-xl text-gray-400">
            Au CRN, nous sommes en action. Découvrez comment nous servons Dieu et comment vous pouvez vous impliquer.
          </p>
        </Reveal>
      </Section>

      <Section background="dark">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className="ui-card group bg-brand-black p-8 border-b-4 border-transparent hover:border-brand-orange transition-all duration-300 shadow-lg"
            >
              <div className="mb-6 inline-block p-4 bg-brand-dark rounded-full group-hover:bg-brand-orange group-hover:text-white transition-colors text-brand-orange">
                <activity.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">{activity.title}</h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                {activity.description}
              </p>
            </div>
          ))}
        </Stagger>
      </Section>
    </div>
  );
};
