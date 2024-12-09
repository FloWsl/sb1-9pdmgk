import React from 'react';
import { Link, useMatchRoute } from '@tanstack/react-router';
import { Calculator, Users } from 'lucide-react';

export function Navigation() {
  const matchRoute = useMatchRoute();
  const isTeamRoute = matchRoute({ to: '/team' });
  const isHeroRoute = matchRoute({ to: '/' });

  return (
    <nav className="fixed top-0 left-0 right-0 h-15 bg-galaxy-900/95 backdrop-blur-sm border-b border-galaxy-700/50 z-50">
      <div className="max-w-4xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <img
              src="https://res.cloudinary.com/archeillustree/image/upload/c_crop,w_750,h_750,ar_1:1/v1733072618/GotchiStats3_logo_500.webp"
              alt="Gotchi Stats Logo"
              className="w-8 h-8"
            />
            <span className="text-white font-bold text-lg">Gotchi Stats</span>
          </div>

          <div className="flex gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isHeroRoute
                  ? 'bg-button-gradient text-white shadow-button'
                  : 'text-galaxy-300 hover:bg-galaxy-800/50'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Hero</span>
            </Link>

            <Link
              to="/team"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                isTeamRoute
                  ? 'bg-button-gradient text-white shadow-button'
                  : 'text-galaxy-300 hover:bg-galaxy-800/50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Team</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}