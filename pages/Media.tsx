import React from 'react';
import { Section } from '../components/Section';
import { PlayCircle, Mic, FileText, Lock } from 'lucide-react';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export const Media: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      <Section background="dark" className="flex-grow flex items-center justify-center text-center">
        <div className="max-w-3xl">
          <div className="mb-8 flex justify-center space-x-4 opacity-50">
            <PlayCircle className="w-12 h-12 text-brand-orange" />
            <Mic className="w-12 h-12 text-white" />
            <FileText className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white">Bientôt Disponible</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10">
            Notre plateforme de ressources (Enseignements, Audio, Vidéos, Replays) est en cours de développement.
          </p>
          <div className="p-6 bg-brand-black/50 border border-white/10 rounded-lg inline-block mb-10">
            <Lock className="w-6 h-6 text-brand-orange mx-auto mb-2" />
            <p className="text-sm text-gray-500">Zone en construction</p>
          </div>
          <div>
            <Button onClick={() => navigate('/')}>
              Retour à l'accueil
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};