import React from 'react';
import { ChevronDown, ChevronUp, Clock, Coins } from 'lucide-react';
import { useCalculatorStore } from '../../store/calculatorStore';
import { formatNumber } from '../../lib/formatting';

export function AdvancedDetailsCollapsible() {
  const { showAdvancedFeatures, toggleAdvancedFeatures, selectedPlanet } = useCalculatorStore();

  if (!selectedPlanet) return null;

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl border border-galaxy-700/50 shadow-neon overflow-hidden">
      <button
        onClick={toggleAdvancedFeatures}
        className="w-full p-6 flex items-center justify-between text-galaxy-300 hover:text-galaxy-100 transition-colors"
      >
        <span className="font-semibold">Advanced Details</span>
        {showAdvancedFeatures ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {showAdvancedFeatures && (
        <div className="px-6 pb-6 space-y-4 border-t border-galaxy-700/50">
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div>
              <div className="flex items-center gap-2 text-galaxy-400 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Time Required</span>
              </div>
              <div className="text-galaxy-100">
                {Math.floor(selectedPlanet.timeSeconds / 60)} minutes
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-galaxy-400 mb-2">
                <Coins className="w-4 h-4" />
                <span className="text-sm">Gold Value</span>
              </div>
              <div className="text-galaxy-100">
                {formatNumber(selectedPlanet.totalGoldValue)}
              </div>
            </div>
          </div>

          <div className="text-sm text-galaxy-400">
            <div className="mb-2">Additional Information:</div>
            <ul className="list-disc list-inside space-y-1 text-galaxy-300">
              <li>Challenges: {selectedPlanet.challenges}</li>
              <li>Average Power per Challenge: {formatNumber(selectedPlanet.avgPower)}</li>
              <li>Total Power Required: {formatNumber(selectedPlanet.totalPower)}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}