import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useCalculatorStore } from '../../store/calculatorStore';
import { calculateStatusLevel } from '../../utils/statusIndicators';
import { formatNumber } from '../../lib/formatting';

export function ResultDisplay() {
  const { currentPower, selectedPlanet } = useCalculatorStore();

  if (!selectedPlanet) {
    return (
      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300">
          <TrendingUp className="w-5 h-5" />
          <h3 className="font-semibold">Select a planet to see results</h3>
        </div>
      </div>
    );
  }

  const result = calculateStatusLevel(currentPower, selectedPlanet.powerRequired50);
  const StatusIcon = result.status === 'success' ? CheckCircle : 
                    result.status === 'warning' ? AlertTriangle : XCircle;

  return (
    <div className={`bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border shadow-neon
      ${result.status === 'success' ? 'border-green-500/50' :
        result.status === 'warning' ? 'border-yellow-500/50' : 'border-red-500/50'}`}>
      <div className="flex items-center gap-3 mb-4">
        <StatusIcon className={`w-6 h-6
          ${result.status === 'success' ? 'text-green-400' :
            result.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`} />
        <h3 className="font-semibold text-galaxy-100">{result.message}</h3>
      </div>

      <div className="space-y-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-sm text-galaxy-400">Completion Rate</div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-galaxy-100">
                {result.percentage.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-galaxy-800">
            <div
              style={{ width: `${Math.min(result.percentage, 100)}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                ${result.status === 'success' ? 'bg-green-500' :
                  result.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
            />
          </div>
        </div>

        {result.nextGoal && (
          <div className="text-sm text-galaxy-400">
            Next goal: <span className="text-galaxy-100">{formatNumber(result.nextGoal)}</span>
          </div>
        )}
      </div>
    </div>
  );
}