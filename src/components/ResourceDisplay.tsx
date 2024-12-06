import React from 'react';
import { Coins, Gem } from 'lucide-react';
import { formatNumber } from '../lib/formatting';
import type { ResourceStats } from '../lib/types';

interface ResourceDisplayProps {
  stats: ResourceStats;
}

export function ResourceDisplay({ stats }: ResourceDisplayProps) {
  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="grid grid-cols-2 gap-6">
        {/* Gold Section */}
        <div>
          <div className="flex items-center gap-2 text-galaxy-300 mb-4">
            <Coins className="w-5 h-5" />
            <h3 className="font-semibold">Gold Cost</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-galaxy-400">Total Spent</div>
              <div className="text-2xl font-bold text-galaxy-100">
                {formatNumber(stats.totalGoldSpent)}
              </div>
            </div>

            {stats.nextLevelCost && (
              <div>
                <div className="text-sm text-galaxy-400">Next Level</div>
                <div className="text-xl font-semibold text-galaxy-100">
                  {formatNumber(stats.nextLevelCost)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gems Section */}
        <div>
          <div className="flex items-center gap-2 text-galaxy-300 mb-4">
            <Gem className="w-5 h-5" />
            <h3 className="font-semibold">Green Gems</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="text-sm text-galaxy-400">Total Spent</div>
              <div className="text-2xl font-bold text-galaxy-100">
                {formatNumber(stats.totalGemsSpent)}
              </div>
            </div>

            {stats.nextLevelGems && (
              <div>
                <div className="text-sm text-galaxy-400">Next Level</div>
                <div className="text-xl font-semibold text-galaxy-100">
                  {formatNumber(stats.nextLevelGems)}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}