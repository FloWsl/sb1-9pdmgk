import React from 'react';
import { Star, Crown } from 'lucide-react';
import { LevelInput } from './LevelInput';
import { RARITY_NAMES, SYSTEM_LIMITS } from '../lib/constants';
import type { Rarity, Stars, Level } from '../lib/types';

interface HeroFormProps {
  rarity: Rarity;
  stars: Stars;
  level: Level;
  onChange: (values: { rarity?: Rarity; stars?: Stars; level?: Level }) => void;
}

export function HeroForm({ rarity, stars, level, onChange }: HeroFormProps) {
  return (
    <div className="bg-container-gradient backdrop-blur-sm rounded-xl p-6 border border-galaxy-700 shadow-neon">
      {/* Change to flex container with column/row responsive layout */}
      <div className="flex flex-col space-y-6">
        {/* Rarity Section */}
        <div>
          <label className="block text-sm font-medium text-galaxy-50 mb-2">
            Rarity
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((r) => (
              <button
                key={r}
                onClick={() => onChange({ rarity: r as Rarity })}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-full border transition-all duration-200 ${
                  rarity === r
                    ? 'bg-button-gradient border-galaxy-100 text-galaxy-50 shadow-button'
                    : 'bg-container-gradient border-galaxy-700 text-galaxy-200 hover:bg-galaxy-800/50'
                }`}
              >
                <Crown
                  className={`w-4 h-4 ${
                    rarity === r ? 'text-galaxy-400' : 'text-galaxy-200'
                  }`}
                />
                <span className="text-sm font-medium">
                  {RARITY_NAMES[r as Rarity]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stars Section */}
        <div>
          <label className="block text-sm font-medium text-galaxy-50 mb-2">
            Stars
          </label>
          <div className="grid grid-cols-5 gap-2">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((s) => (
              <button
                key={s}
                onClick={() => onChange({ stars: s as Stars })}
                className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg border transition-all duration-200 ${
                  stars === s
                    ? 'bg-button-gradient border-galaxy-100 text-galaxy-50 shadow-button'
                    : 'bg-container-gradient border-galaxy-700 text-galaxy-200 hover:bg-galaxy-800/50'
                }`}
              >
                <Star
                  className={`w-4 h-4 ${
                    stars === s ? 'text-galaxy-400' : 'text-galaxy-200'
                  }`}
                  fill={stars === s ? 'currentColor' : 'none'}
                />
                <span className="text-sm font-medium">{s}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Level Input Section */}
        <div>
          <LevelInput
            level={level}
            onChange={(newLevel) => onChange({ level: newLevel })}
          />
        </div>
      </div>
    </div>
  );
}
