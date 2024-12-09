import type { ConstellationData } from '../../data/constellations';

export interface StarAnalysis {
  requiredPowerFor100: number;
  powerToNextConstellation: number;
  goldPerStar: number;
  expectedGoldGain: number;
  returnPercentage: number;
  isOptimalForFarming: boolean;
  progressToNextConstellation: number;
  status: 'success' | 'warning' | 'danger';
  message: string;
}

export interface StarState {
  selectedConstellation: ConstellationData | null;
  starAnalysis: StarAnalysis | null;
}