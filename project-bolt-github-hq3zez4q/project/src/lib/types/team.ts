import type { HeroStats } from '../types';

export enum ViewMode {
  SINGLE = 'single',
}

export interface HeroConfig {
  id: string;
  rarity: number;
  level: number;
  stars: number;
  metrics: HeroStats;
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