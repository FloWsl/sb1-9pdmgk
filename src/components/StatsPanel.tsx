import React from 'react';
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Coins,
  Zap,
} from 'lucide-react';
import {
  formatNumber,
  formatEfficiency,
  formatPercentage,
  getEfficiencyChange,
} from '../lib/formatting';
import type { CalculatorState } from '../lib/types';

interface StatsPanelProps {
  stats: CalculatorState;
}

export function StatsPanel({ stats }: StatsPanelProps) {
  const efficiencyChange = getEfficiencyChange(
    stats.powerPerGold,
    stats.previousPowerPerGold
  );
  const EfficiencyArrow =
    efficiencyChange.direction === 'increase' ? ArrowUpRight : ArrowDownRight;
  const efficiencyColor =
    efficiencyChange.direction === 'increase'
      ? 'text-green-400'
      : 'text-red-400';

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-2">
          <Zap className="w-5 h-5" />
          <h3 className="font-semibold">Power Stats</h3>
        </div>
        <div className="space-y-3">
          <div>
            <div className="text-sm text-galaxy-400">Current Power</div>
            <div className="text-2xl font-bold text-galaxy-100">
              {formatNumber(stats.currentPower)}
            </div>
          </div>
          {stats.nextLevelPower && (
            <div>
              <div className="text-sm text-galaxy-400">Next Level Power</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-semibold text-galaxy-100">
                  {formatNumber(stats.nextLevelPower)}
                </span>
                {stats.increasePercent && (
                  <span className="text-sm text-green-400 flex items-center">
                    <ArrowUpRight className="w-4 h-4" />
                    {formatPercentage(stats.increasePercent)}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-2">
          <Coins className="w-5 h-5" />
          <h3 className="font-semibold">Cost Analysis</h3>
        </div>
        <div className="space-y-3">
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

      <div className="md:col-span-2 bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-2">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold">Efficiency</h3>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="text-sm text-galaxy-400">Power per Gold</div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-galaxy-100">
                {formatEfficiency(stats.powerPerGold)}
              </span>
              {efficiencyChange.direction !== 'same' && (
                <span
                  className={`text-sm flex items-center ${efficiencyColor}`}
                >
                  <EfficiencyArrow className="w-4 h-4" />
                  {formatPercentage(efficiencyChange.percentage)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
