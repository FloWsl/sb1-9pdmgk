import React from 'react';
import { Plus, Trash2, Edit, TrendingUp } from 'lucide-react';
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
            <div className="bg-galaxy-900/50 backdrop-blur-sm p-6 rounded-xl border border-galaxy-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${
                      hero.rarity === 2 ? 'bg-yellow-400' :
                      hero.rarity === 1 ? 'bg-purple-400' :
                      'bg-blue-400'
                    }`} />
                    <span className="text-galaxy-300 font-medium">
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
                    <div className="text-sm text-galaxy-400">Gold Spent</div>
                    <div className="text-xl font-bold text-galaxy-100">
                      {formatNumber(hero.metrics.totalGoldSpent)}
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
                  <div className="flex items-center gap-1 text-galaxy-300">
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-medium">
                      {formatEfficiency(hero.metrics.powerPerGold)}
                    </span>
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
