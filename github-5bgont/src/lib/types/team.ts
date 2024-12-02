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
  averagePower: number;
  minPower: number;
  maxPower: number;
  heroCount: number;
  powerDistribution: {
    median: number;
    standardDeviation: number;
  };
}

export interface ComparisonMetrics {
  powerDiff: number;
  powerDiffPercent: number;
  costEfficiencyRatio: number;
  upgradeCostDiff: number;
}

export interface TeamState {
  heroes: Array<HeroConfig | null>;
  selectedHeroIndex: number | null;
  viewMode: ViewMode;
}