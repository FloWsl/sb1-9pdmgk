import type { PowerStats } from '../power/types';

export interface ResourceStats {
  totalGoldSpent: number;
  totalGemsSpent: number;
  nextLevelCost: number | null;
  nextLevelGems: number | null;
}

export interface HeroStats extends PowerStats, ResourceStats {
  powerPerGold: number;
  powerPerGem: number;
}