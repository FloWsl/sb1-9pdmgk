import React, { useState } from 'react';
import { Map, TrendingUp, AlertTriangle, CheckCircle, XCircle, Clock, Coins, ChevronDown, ChevronUp } from 'lucide-react';
import { usePlanetStore } from '../../store/planetStore';
import { formatNumber } from '../../lib/formatting';

export function UnifiedPlanetDisplay() {
  const [showDetails, setShowDetails] = useState(false);
  const { selectedConstellation, planetAnalysis } = usePlanetStore();

  if (!selectedConstellation || !planetAnalysis) {
    return (
      <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
        <div className="flex items-center gap-2 text-galaxy-300">
          <Map className="w-5 h-5" />
          <h3 className="font-semibold">Select a planet to see analysis</h3>
        </div>
      </div>
    );
  }

  const StatusIcon = planetAnalysis.status === 'success' ? CheckCircle : 
                    planetAnalysis.status === 'warning' ? AlertTriangle : XCircle;

  const timeInMinutes = selectedConstellation.timeSeconds / 60;
  const hours = Math.floor(timeInMinutes / 60);
  const minutes = Math.floor(timeInMinutes % 60);
  const timeDisplay = hours > 0 
    ? `${hours}h ${minutes}m`
    : `${minutes}m`;

  return (
    <div className={`bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border shadow-neon
      ${planetAnalysis.status === 'success' ? 'border-green-500/50' :
        planetAnalysis.status === 'warning' ? 'border-yellow-500/50' : 'border-red-500/50'}`}>
      <div className="flex items-center gap-3 mb-4">
        <StatusIcon className={`w-6 h-6
          ${planetAnalysis.status === 'success' ? 'text-green-400' :
            planetAnalysis.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}`} />
        <h3 className="font-semibold text-galaxy-100">{planetAnalysis.message}</h3>
      </div>

      <div className="space-y-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div className="text-sm text-galaxy-400">Completion Rate</div>
            <div className="text-right">
              <span className="text-sm font-semibold inline-block text-galaxy-100">
                {planetAnalysis.returnPercentage.toFixed(1)}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 text-xs flex rounded bg-galaxy-800">
            <div
              style={{ width: `${Math.min(planetAnalysis.returnPercentage, 100)}%` }}
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center
                ${planetAnalysis.status === 'success' ? 'bg-green-500' :
                  planetAnalysis.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-galaxy-400">Expected Gold</div>
            <div className="text-xl font-bold text-galaxy-100">
              {formatNumber(planetAnalysis.expectedGoldGain)}
            </div>
          </div>

          <div>
            <div className="text-sm text-galaxy-400">Challenge duration</div>
            <div className="text-xl font-bold text-galaxy-100">
              {timeDisplay}
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full flex items-center justify-between text-galaxy-300 hover:text-galaxy-100 transition-colors"
        >
          <span className="text-sm font-medium">Advanced Details</span>
          {showDetails ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showDetails && (
          <div className="space-y-4 pt-4 border-t border-galaxy-700/50">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-galaxy-400">Total Gold Available</div>
                <div className="text-lg font-semibold text-galaxy-100">
                  {formatNumber(selectedConstellation.totalGoldValue)}
                </div>
              </div>

              <div>
                <div className="text-sm text-galaxy-400">Challenges</div>
                <div className="text-lg font-semibold text-galaxy-100">
                  {selectedConstellation.challenges}
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm text-galaxy-400 mb-2">Progress to Next Constellation</div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-sm font-semibold text-galaxy-100">
                    {planetAnalysis.progressToNextConstellation.toFixed(1)}%
                  </span>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded bg-galaxy-800">
                  <div
                    style={{ width: `${Math.min(planetAnalysis.progressToNextConstellation, 100)}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-button-gradient"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
