import React from 'react';
import { Zap } from 'lucide-react';
import { formatNumber } from '../lib/formatting';
import type { CalculatorState } from '../lib/types';

interface PowerDisplayProps {
  stats: CalculatorState;
}

export function PowerDisplay({ stats }: PowerDisplayProps) {
  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Zap className="w-5 h-5" />
        <h3 className="font-semibold">Power Stats</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-sm text-galaxy-400">Current Power</div>
          <div className="text-2xl font-bold text-galaxy-100">
            {formatNumber(stats.currentPower)}
          </div>
        </div>

        {stats.nextLevelPower && (
          <div>
            <div className="text-sm text-galaxy-400">Next Level</div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-semibold text-galaxy-100">
                {formatNumber(stats.nextLevelPower)}
              </span>
              {stats.increase && (
                <span className="text-sm px-2 py-1 rounded-full bg-galaxy-800 text-galaxy-100">
                  +{formatNumber(stats.increase)}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}