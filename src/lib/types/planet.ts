import type { ConstellationData } from '../../data/constellations';

export interface PlanetAnalysis {
  requiredPowerFor100: number;
  powerToNextConstellation: number;
  goldPerPlanet: number;
  expectedGoldGain: number;
  returnPercentage: number;
  isOptimalForFarming: boolean;
  progressToNextConstellation: number;
  status: 'success' | 'warning' | 'danger';
  message: string;
}

export interface PlanetState {
  selectedConstellation: ConstellationData | null;
  planetAnalysis: PlanetAnalysis | null;
}