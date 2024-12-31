import React from 'react';
import { Play } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/95 py-8 px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Play className="text-blue-500" size={32} />
            <span className="text-blue-500 text-3xl font-bold">ALURAFLIX</span>
          </div>
          <p className="text-gray-400 text-center">
            Desarrollado durante el Challenge React de Alura Latam
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              Términos de uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Política de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;