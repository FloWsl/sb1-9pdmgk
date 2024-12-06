import React from 'react';
import { Map } from 'lucide-react';
import { CONSTELLATION_DATA } from '../../data/constellations';
import { usePlanetStore } from '../../store/planetStore';

export function ConstellationSelector() {
  const { selectedConstellation, selectConstellation } = usePlanetStore();

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Map className="w-5 h-5" />
        <h3 className="font-semibold">Select Constellation</h3>
      </div>
      
      <select
        value={selectedConstellation?.name || ''}
        onChange={(e) => {
          const constellation = CONSTELLATION_DATA.find(
            c => c.name === e.target.value
          );
          if (constellation) selectConstellation(constellation);
        }}
        className="w-full bg-galaxy-800 border border-galaxy-700 rounded-lg px-4 py-2 text-galaxy-100"
      >
        <option value="">Select a constellation</option>
        {CONSTELLATION_DATA.map(constellation => (
          <option key={constellation.name} value={constellation.name}>
            {constellation.order}.{constellation.name}
          </option>
        ))}
      </select>
    </div>
  );
}
