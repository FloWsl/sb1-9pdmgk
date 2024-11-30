import React from 'react';
import { Coins } from 'lucide-react';
import { formatNumber } from '../lib/formatting';
import type { CalculatorState } from '../lib/types';

interface CostDisplayProps {
  stats: CalculatorState;
}

export function CostDisplay({ stats }: CostDisplayProps) {
  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Coins className="w-5 h-5" />
        <h3 className="font-semibold">Cost Analysis</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-sm text-galaxy-400">Total Cost</div>
          <div className="text-2xl font-bold text-galaxy-100">
            {formatNumber(stats.totalGoldSpent)}
          </div>
        </div>

        {stats.nextLevelCost && (
          <div>
            <div className="text-sm text-galaxy-400">Next Level Cost</div>
            <div className="text-xl font-semibold text-galaxy-100">
              {formatNumber(stats.nextLevelCost)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}