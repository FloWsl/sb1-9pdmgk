import type { ConstellationData } from '../../data/constellations';

// ... existing types ...

export interface ResultState {
  status: 'success' | 'warning' | 'danger';
  message: string;
  percentage: number;
  nextGoal: number | null;
}

export interface SimplifiedCalculatorState {
  currentPower: number;
  selectedPlanet: ConstellationData | null;
  showAdvancedFeatures: boolean;
  setCurrentPower: (power: number) => void;
  setSelectedPlanet: (planet: ConstellationData | null) => void;
  toggleAdvancedFeatures: () => void;
}