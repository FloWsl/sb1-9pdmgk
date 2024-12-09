import { create } from 'zustand';
import type { ConstellationData } from '../data/constellations';
import type { StarAnalysis } from '../lib/types/star';
import { analyzeStarRequirements } from '../lib/calculations/star';
import { useTeamStore } from './teamStore';
import { useCalculatorStore } from './calculatorStore';

interface StarStore {
  selectedConstellation: ConstellationData | null;
  starAnalysis: StarAnalysis | null;
  selectConstellation: (constellation: ConstellationData) => void;
  updateAnalysis: () => void;
}

export const useStarStore = create<StarStore>((set, get) => ({
  selectedConstellation: null,
  starAnalysis: null,

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

    const analysis = analyzeStarRequirements(
      totalPower,
      selectedConstellation
    );
    
    set({ starAnalysis: analysis });
  },
}));

// Subscribe to both team and calculator changes
useTeamStore.subscribe(
  (state) => state.heroes,
  () => useStarStore.getState().updateAnalysis()
);

useCalculatorStore.subscribe(
  (state) => state.currentPower,
  () => useStarStore.getState().updateAnalysis()
);