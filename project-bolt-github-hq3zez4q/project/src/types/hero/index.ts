import type { HeroStats } from '../calculator';

export interface HeroConfig {
  id: string;
  rarity: number;
  level: number;
  stars: number;
  metrics: HeroStats;
}

export type Rarity = 0 | 1 | 2;
export type Level = number;
export type Stars = number;

export interface HeroParams {
  rarity: Rarity;
  level: Level;
  stars: Stars;
}