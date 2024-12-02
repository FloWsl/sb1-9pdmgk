import React from 'react';
import { Sigma, TrendingUp, Coins, BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { TeamMetrics } from '../../lib/types/team';
import { formatNumber, formatEfficiency } from '../../lib/formatting';

interface TeamMetricsPanelProps {
  metrics: TeamMetrics;
}

export function TeamMetricsPanel({ metrics }: TeamMetricsPanelProps) {
  const efficiency = metrics.totalPower / metrics.totalGoldSpent;
  const averageEfficiency = metrics.averagePower / (metrics.totalGoldSpent / metrics.heroCount);
  const isEfficient = efficiency > averageEfficiency;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <h3 className="font-semibold">Total Gold</h3>
        </div>
        <div className="text-2xl font-bold text-galaxy-100">
          {formatNumber(metrics.totalGoldSpent)}
        </div>
        <div className="mt-2 text-sm text-galaxy-400">
          Per Hero: {formatNumber(metrics.totalGoldSpent / metrics.heroCount)}
        </div>
      </div>

      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300 mb-4">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold">Team Efficiency</h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-galaxy-100">
            {formatEfficiency(efficiency)}
          </span>
          <span className={`flex items-center text-sm ${isEfficient ? 'text-green-400' : 'text-red-400'}`}>
            {isEfficient ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
            {formatEfficiency(Math.abs(efficiency - averageEfficiency))}
          </span>
        </div>
        <div className="mt-2 text-sm text-galaxy-400">
          Power per Gold Ratio
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