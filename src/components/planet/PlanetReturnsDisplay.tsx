import React from 'react';
import { Coins, Zap, TrendingUp, Timer } from 'lucide-react';
import { usePlanetStore } from '../../store/planetStore';
import { formatNumber } from '../../lib/formatting';

export function PlanetReturnsDisplay() {
  const { planetCalculations, selectedConstellation } = usePlanetStore();

  if (!planetCalculations || !selectedConstellation) return null;

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 text-galaxy-300 mb-4">
            <Zap className="w-5 h-5" />
            <h3 className="font-semibold">Power Requirements</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-galaxy-400">Clear a Planet</div>
              <div className="text-xl font-bold text-galaxy-100">
                {formatNumber(planetCalculations.requiredPowerFor100)}
              </div>
            </div>

            <div>
              <div className="text-sm text-galaxy-400">
                Open next Constellation
              </div>
              <div className="text-xl font-bold text-galaxy-100">
                {formatNumber(planetCalculations.powerToNextConstellation)}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-galaxy-300 mb-4">
            <Coins className="w-5 h-5" />
            <h3 className="font-semibold">
              Returns with Current Configuration
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-galaxy-400">
                Total Gold per Planet
              </div>
              <div className="text-xl font-bold text-galaxy-100">
                {formatNumber(planetCalculations.goldPerPlanet)}
              </div>
            </div>

            <div>
              <div className="text-sm text-galaxy-400">Expected earning</div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-galaxy-100">
                  {planetCalculations.expectedGoldGain.toFixed(1)}
                </span>
                {planetCalculations.isOptimalForFarming && (
                  <span className="text-sm text-green-400">Optimal</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="flex items-center gap-2 text-galaxy-300 mb-4">
            <TrendingUp className="w-5 h-5" />
            <h3 className="font-semibold">Constellation Progress</h3>
          </div>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div className="text-xs text-galaxy-400">
                Progress to Next Constellation
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-galaxy-100">
                  {planetCalculations.progressToNextConstellation.toFixed(1)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 text-xs flex rounded bg-galaxy-800">
              <div
                style={{
                  width: `${Math.min(
                    planetCalculations.progressToNextConstellation,
                    100
                  )}%`,
                }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-button-gradient"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
