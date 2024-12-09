import React from 'react';
import { Plus, Trash2, Edit, TrendingUp, Coins, Gem } from 'lucide-react';
import { ViewMode, HeroConfig } from '../../lib/types/team';
import { RARITY_NAMES } from '../../lib/constants';
import { formatNumber, formatEfficiency } from '../../lib/formatting';

interface HeroGridProps {
  heroes: Array<HeroConfig | null>;
  viewMode: ViewMode;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
  onRemove: (index: number) => void;
}

export function HeroGrid({
  heroes,
  selectedIndex,
  onSelect,
  onRemove,
}: HeroGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
      {heroes.map((hero, index) => (
        <div
          key={index}
          className={`relative rounded-xl transition-all ${
            selectedIndex === index
              ? 'ring-2 ring-galaxy-100 shadow-lg'
              : 'hover:shadow-md'
          }`}
        >
          {hero ? (
            <div className={`${
              hero.rarity === 2
                ? 'bg-yellow-500/10 border border-yellow-600/50'
                : hero.rarity === 1
                ? 'bg-purple-500/10 border border-purple-600/50'
                : 'bg-blue-500/10 border border-blue-500/50'
            } backdrop-blur-sm p-6 rounded-xl`}>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className={`${
                        hero.rarity === 2
                          ? 'text-yellow-400/80'
                          : hero.rarity === 1
                          ? 'text-purple-400/80'
                          : 'text-blue-400/80'
                      } font-medium`}>
                      {RARITY_NAMES[hero.rarity]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelect(index)}
                      className="p-2 rounded-lg text-galaxy-300 hover:bg-galaxy-800/50 transition-all"
                      title="Edit hero"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onRemove(index)}
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
                    <div className="text-sm text-galaxy-400">Resources Spent</div>
                    <div className="grid-flow-row gap-2 text-galaxy-100">
                      <div className="flex items-center gap-1">
                        <Coins className="w-3 h-3 text-yellow-400" />
                        <span className="text-sm">{formatNumber(hero.metrics.totalGoldSpent)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gem className="w-3 h-3 text-green-400" />
                        <span className="text-sm">{formatNumber(hero.metrics.totalGemsSpent)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div>
                      <span className="text-galaxy-400">Level</span>
                      <div className="text-galaxy-100 font-medium">
                        {hero.level}
                      </div>
                    </div>
                    <div>
                      <span className="text-galaxy-400">Stars</span>
                      <div className="text-galaxy-100 font-medium">
                        ⭐ {hero.stars}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <button
              className="w-full h-full min-h-[200px] flex items-center justify-center bg-galaxy-900/30 border border-dashed border-galaxy-700/50 rounded-xl text-galaxy-300 hover:bg-galaxy-800/50 hover:border-galaxy-600/50 transition-all"
              onClick={() => onSelect(index)}
            >
              <Plus className="w-6 h-6" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
