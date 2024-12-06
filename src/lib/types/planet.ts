import type { ConstellationData } from '../../data/constellations';

export interface PlanetCalculation {
  requiredPowerFor100: number;
  powerToNextConstellation: number;
  expectedReturns: number;
  returnPercentage: number;
  isOptimalForFarming: boolean;
  progressToNextConstellation: number;
}

export interface PlanetState {
  selectedConstellation: ConstellationData | null;
  planetCalculations: PlanetCalculation | null;
}