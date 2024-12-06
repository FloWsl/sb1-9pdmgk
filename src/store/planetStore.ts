import { create } from 'zustand';
import type { ConstellationData } from '../data/constellations';
import type { PlanetCalculation } from '../lib/types/planet';
import { calculatePlanetReturns } from '../lib/calculations/planet';
import { useTeamStore } from './teamStore';

interface PlanetStore {
  selectedConstellation: ConstellationData | null;
  planetCalculations: PlanetCalculation | null;
  selectConstellation: (constellation: ConstellationData) => void;
  calculateReturns: () => void;
}

export const usePlanetStore = create<PlanetStore>((set, get) => ({
  selectedConstellation: null,
  planetCalculations: null,

  selectConstellation: (constellation) => {
    set({ selectedConstellation: constellation });
    get().calculateReturns();
  },

  calculateReturns: () => {
    const { selectedConstellation } = get();
    if (!selectedConstellation) return;

    const activeHeroes = useTeamStore.getState().heroes.filter(
      (hero): hero is NonNullable<typeof hero> => hero !== null
    );
    
    const teamPower = activeHeroes.reduce(
      (sum, hero) => sum + hero.metrics.currentPower,
      0
    );

    const calculations = calculatePlanetReturns(
      teamPower,
      selectedConstellation
    );
    
    set({ planetCalculations: calculations });
  },
}));

// Subscribe to team changes to recalculate returns
useTeamStore.subscribe(
  (state) => state.heroes,
  () => usePlanetStore.getState().calculateReturns()
);