import { create } from 'zustand';
import type { ConstellationData } from '../data/constellations';
import type { PlanetAnalysis } from '../lib/types/planet';
import { analyzePlanetRequirements } from '../lib/calculations/planet';
import { useTeamStore } from './teamStore';
import { useCalculatorStore } from './calculatorStore';

interface PlanetStore {
  selectedConstellation: ConstellationData | null;
  planetAnalysis: PlanetAnalysis | null;
  selectConstellation: (constellation: ConstellationData) => void;
  updateAnalysis: () => void;
}

export const usePlanetStore = create<PlanetStore>((set, get) => ({
  selectedConstellation: null,
  planetAnalysis: null,

  selectConstellation: (constellation) => {
    set({ selectedConstellation: constellation });
    get().updateAnalysis();
  },

  updateAnalysis: () => {
    const { selectedConstellation } = get();
    if (!selectedConstellation) return;

    // Get power from either team or individual calculator
    const teamPower = useTeamStore.getState().heroes
      .filter((hero): hero is NonNullable<typeof hero> => hero !== null)
      .reduce((sum, hero) => sum + hero.metrics.currentPower, 0);
    
    const individualPower = useCalculatorStore.getState().currentPower;
    
    const totalPower = teamPower || individualPower;

    const analysis = analyzePlanetRequirements(
      totalPower,
      selectedConstellation
    );
    
    set({ planetAnalysis: analysis });
  },
}));

// Subscribe to both team and calculator changes
useTeamStore.subscribe(
  (state) => state.heroes,
  () => usePlanetStore.getState().updateAnalysis()
);

useCalculatorStore.subscribe(
  (state) => state.currentPower,
  () => usePlanetStore.getState().updateAnalysis()
);