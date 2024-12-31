import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-black/95 py-3 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      {/* Logo */}
      <Link to="/" className="text-blue-500 text-xl font-bold flex items-center gap-2 sm:text-2xl">
        <Play className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6" />
        ALURAFLIX
      </Link>
      {/* Navigation */}
      <div className="flex gap-2 sm:gap-4">
        <Link
          to="/"
          className="px-3 py-1 rounded text-sm bg-transparent text-white border border-white hover:bg-white/10 transition sm:px-4 sm:py-2 sm:text-base"
        >
          HOME
        </Link>
        <Link
          to="/nuevo-video"
          className="px-3 py-1 rounded text-sm bg-blue-500 text-white hover:bg-blue-600 transition sm:px-4 sm:py-2 sm:text-base"
        >
          NUEVO VIDEO
        </Link>
      </div>
    </header>
  );
};

export default Header;
