import { RARITY_BASE_POWER, POWER_FORMULA, SYSTEM_LIMITS } from './constants';
import { validateInputs } from './validation';
import { calculateNextLevelCost, calculateTotalGoldSpent } from './costs';
import { calculateLevelGemCost, calculateTotalGemsSpent } from './gems';
import type { HeroParams, StrengthStats, HeroStats } from './types';

export function calculateStarBonus(stars: number, rarity: number): number {
    const starBonuses = {
        0: 2.5, // Rare
        1: 3.0, // Epic
        2: 3.5  // Legendary
    };
    
    return (stars - 1) * starBonuses[rarity];
}

export function calculateStrength({ rarity, level, stars }: HeroParams): StrengthStats {
    validateInputs({ rarity, level, stars });
    
    let baseStrength = RARITY_BASE_POWER[rarity] + calculateStarBonus(stars, rarity);
    let currentPower = baseStrength * Math.pow(level, 2);
    
    let nextLevelPower = null;
    let increasePercent = null;
    
    if (level < SYSTEM_LIMITS.maxLevel) {
        nextLevelPower = Math.round(baseStrength * Math.pow(level + 1, 2));
        increasePercent = ((nextLevelPower - currentPower) / currentPower) * 100;
    }
    
    return {
        currentPower: Math.round(currentPower),
        nextLevelPower,
        increase: nextLevelPower ? nextLevelPower - currentPower : null,
        increasePercent: increasePercent ? Math.round(increasePercent * 100) / 100 : null
    };
}

export function calculateHeroStats({
  rarity,
  level,
  stars,
}: HeroParams): HeroStats {
  const strengthStats = calculateStrength({ rarity, level, stars });
  const nextLevelCost = level < SYSTEM_LIMITS.maxLevel ? calculateNextLevelCost(level) : null;
  const nextLevelGems = level < SYSTEM_LIMITS.maxLevel ? calculateLevelGemCost(level) : null;
  const totalGoldSpent = calculateTotalGoldSpent(level);
  const totalGemsSpent = calculateTotalGemsSpent(level);

  return {
    ...strengthStats,
    nextLevelCost,
    nextLevelGems,
    totalGoldSpent,
    totalGemsSpent,
    powerPerGold: strengthStats.currentPower / totalGoldSpent,
    powerPerGem: strengthStats.currentPower / totalGemsSpent,
  };
}