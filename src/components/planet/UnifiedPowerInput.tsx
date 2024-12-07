import React from 'react';
import { Zap, Users } from 'lucide-react';
import { useCalculatorStore } from '../../store/calculatorStore';
import { useTeamStore } from '../../store/teamStore';
import { formatNumber } from '../../lib/formatting';

export function UnifiedPowerInput() {
  const currentPower = useCalculatorStore((state) => state.currentPower);
  const setCurrentPower = useCalculatorStore((state) => state.setCurrentPower);
  
  const heroes = useTeamStore((state) => state.heroes);
  const teamPower = heroes
    .filter((hero): hero is NonNullable<typeof hero> => hero !== null)
    .reduce((sum, hero) => sum + hero.metrics.currentPower, 0);

  const handleTeamPowerClick = () => {
    setCurrentPower(teamPower);
  };

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Zap className="w-5 h-5" />
        <h3 className="font-semibold">Power Analysis</h3>
      </div>

      <div className="space-y-4">
        {teamPower > 0 && (
          <div className="flex items-center justify-between p-3 bg-galaxy-800/50 rounded-lg border border-galaxy-700/30">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-galaxy-300" />
              <span className="text-sm text-galaxy-300">Your Team Power</span>
            </div>
            <button
              onClick={handleTeamPowerClick}
              className="text-galaxy-100 hover:text-white font-medium transition-colors"
            >
              {formatNumber(teamPower)} →
            </button>
          </div>
        )}

        <div>
          <label htmlFor="power-input" className="block text-sm text-galaxy-400 mb-2">
            Enter Power Level
          </label>
          <input
            id="power-input"
            type="number"
            value={currentPower || ''}
            onChange={(e) => setCurrentPower(Number(e.target.value))}
            className="w-full bg-galaxy-800 border border-galaxy-700 rounded-lg px-4 py-3 text-galaxy-100 text-lg focus:outline-none focus:border-galaxy-500 transition-colors"
            placeholder="Enter power level to analyze"
          />
          <p className="mt-2 text-sm text-galaxy-400">
            Enter any power level to analyze planet requirements
          </p>
        </div>
      </div>
    </div>
  );
}