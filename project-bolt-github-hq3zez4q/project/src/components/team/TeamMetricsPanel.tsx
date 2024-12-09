import React from 'react';
import { Sigma, TrendingUp, Coins, Gem, BarChart3 } from 'lucide-react';
import { TeamMetrics } from '../../lib/types/team';
import { formatNumber, formatEfficiency } from '../../lib/formatting';

interface TeamMetricsPanelProps {
  metrics: TeamMetrics;
}

export function TeamMetricsPanel({ metrics }: TeamMetricsPanelProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-4">
          <Sigma className="w-5 h-5" />
          <h3 className="font-semibold">Total Power</h3>
        </div>
        <div className="text-2xl font-bold text-galaxy-100">
          {formatNumber(metrics.totalPower)}
        </div>
        <div className="mt-2 text-sm text-galaxy-400">
          Average: {formatNumber(metrics.averagePower)}
        </div>
      </div>

      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-4">
          <Coins className="w-5 h-5" />
          <h3 className="font-semibold">Resources Spent</h3>
        </div>
        <div className="space-y-2">
          <div>
            <div className="text-sm text-galaxy-400">Total Gold</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatNumber(metrics.totalGoldSpent)}
            </div>
          </div>
          <div>
            <div className="text-sm text-galaxy-400">Total Gems</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatNumber(metrics.totalGemsSpent)}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-4">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold">Efficiency</h3>
        </div>
        <div className="space-y-2">
          <div>
            <div className="text-sm text-galaxy-400">Power per Gold</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatEfficiency(metrics.averagePowerPerGold)}
            </div>
          </div>
          <div>
            <div className="text-sm text-galaxy-400">Power per Gem</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatEfficiency(metrics.averagePowerPerGem)}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-4">
          <BarChart3 className="w-5 h-5" />
          <h3 className="font-semibold">Power Range</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-galaxy-400">Lowest</span>
            <span className="text-galaxy-100">
              {formatNumber(metrics.minPower)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-galaxy-400">Highest</span>
            <span className="text-galaxy-100">
              {formatNumber(metrics.maxPower)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-galaxy-400">Spread</span>
            <span className="text-galaxy-100">
              {formatNumber(metrics.maxPower - metrics.minPower)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
