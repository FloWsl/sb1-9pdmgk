import React from 'react';
import { Edit, Trash2, Coins, Gem } from 'lucide-react';
import { RARITY_NAMES } from '../../constants/game';
import { formatNumber } from '../../utils/formatting';
import type { HeroConfig } from '../../types/hero';

interface HeroCardProps {
  hero: HeroConfig;
  onEdit: () => void;
  onRemove: () => void;
}

export function HeroCard({ hero, onEdit, onRemove }: HeroCardProps) {
  const getRarityStyles = (rarity: number) => {
    switch (rarity) {
      case 2:
        return 'bg-yellow-500/10 border-yellow-600/50';
      case 1:
        return 'bg-purple-500/10 border-purple-600/50';
      default:
        return 'bg-blue-500/10 border-blue-500/50';
    }
  };

  return (
    <div className={`${getRarityStyles(hero.rarity)} backdrop-blur-sm p-6 rounded-xl`}>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={`${
            hero.rarity === 2 ? 'text-yellow-400/80' :
            hero.rarity === 1 ? 'text-purple-400/80' :
            'text-blue-400/80'
          } font-medium`}>
            {RARITY_NAMES[hero.rarity]}
          </span>
          
          <div className="flex items-center gap-2">
            <button
              onClick={onEdit}
              className="p-2 rounded-lg text-galaxy-300 hover:bg-galaxy-800/50 transition-all"
              title="Edit hero"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={onRemove}
              className="p-2 rounded-lg text-red-400 hover:bg-red-500/10 transition-all"
              title="Remove hero"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-galaxy-400">Power</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatNumber(hero.metrics.currentPower)}
            </div>
          </div>

          <div>
            <div className="text-sm text-galaxy-400">Resources</div>
            <div className="grid-flow-row gap-2 text-galaxy-100">
              <div className="flex items-center gap-1">
                <Coins className="w-3 h-3 text-yellow-400" />
                <span className="text-sm">
                  {formatNumber(hero.metrics.totalGoldSpent)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Gem className="w-3 h-3 text-green-400" />
                <span className="text-sm">
                  {formatNumber(hero.metrics.totalGemsSpent)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-galaxy-400">Level</span>
              <div className="text-galaxy-100 font-medium">{hero.level}</div>
            </div>
            <div>
              <span className="text-galaxy-400">Stars</span>
              <div className="text-galaxy-100 font-medium">⭐ {hero.stars}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}