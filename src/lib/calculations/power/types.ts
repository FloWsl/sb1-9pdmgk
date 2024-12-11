export type Rarity = 0 | 1 | 2;
export type Level = number;
export type Stars = number;

export interface PowerParams {
  rarity: Rarity;
  level: Level;
  stars: Stars;
}

export interface PowerStats {
  currentPower: number;
  nextLevelPower: number | null;
  increase: number | null;
  increasePercent: number | null;
}