import { RARITY_BASE_POWER } from '../../constants/game';
import type { HeroParams } from '../../types/hero';

export function calculateStarBonus(stars: number, rarity: number): number {
  const starBonuses = {
    0: 2.5, // Rare
    1: 3.0, // Epic
    2: 3.5  // Legendary
  };
    
  return (stars - 1) * starBonuses[rarity];
}

export function calculatePower({ rarity, level, stars }: HeroParams): number {
  const baseStrength = RARITY_BASE_POWER[rarity] + calculateStarBonus(stars, rarity);
  return Math.round(baseStrength * Math.pow(level, 2));
}