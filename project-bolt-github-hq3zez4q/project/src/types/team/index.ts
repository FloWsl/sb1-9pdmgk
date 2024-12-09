import type { HeroConfig } from '../hero';

export enum ViewMode {
  SINGLE = 'single',
}

export interface TeamMetrics {
  totalPower: number;
  totalGoldSpent: number;
  totalGemsSpent: number;
  averagePower: number;
  averagePowerPerGold: number;
  averagePowerPerGem: number;
  minPower: number;
  maxPower: number;
  heroCount: number;
  powerDistribution: {
    median: number;
    standardDeviation: number;
  };
}