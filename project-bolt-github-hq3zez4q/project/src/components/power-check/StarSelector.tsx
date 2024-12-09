import React from 'react';
import { Map } from 'lucide-react';
import { useCalculatorStore } from '../../store/calculatorStore';
import { CONSTELLATION_DATA } from '../../data/constellations';

export function PlanetSelector() {
  const selectedPlanet = useCalculatorStore((state) => state.selectedPlanet);
  const setSelectedPlanet = useCalculatorStore((state) => state.setSelectedPlanet);

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Map className="w-5 h-5" />
        <h3 className="font-semibold">Select Planet</h3>
      </div>

      <select
        value={selectedPlanet?.name || ''}
        onChange={(e) => {
          const planet = CONSTELLATION_DATA.find(c => c.name === e.target.value);
          setSelectedPlanet(planet || null);
        }}
        className="w-full bg-galaxy-800 border border-galaxy-700 rounded-lg px-4 py-3 text-galaxy-100 focus:outline-none focus:border-galaxy-500 transition-colors"
      >
        <option value="">Select a planet</option>
        {CONSTELLATION_DATA.map(planet => (
          <option key={planet.name} value={planet.name}>
            {planet.order}. {planet.name}
          </option>
        ))}
      </select>
    </div>
  );
}