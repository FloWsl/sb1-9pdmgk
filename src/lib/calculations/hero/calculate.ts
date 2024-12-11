import { PowerParams } from '../power/types';
import { calculatePowerStats } from '../power/calculate';
import { calculateNextLevelCost, calculateTotalGoldSpent } from '../resources/gold';
import { calculateLevelGemCost, calculateTotalGemsSpent } from '../resources/gems';
import { SYSTEM_LIMITS } from '../power/constants';
import type { HeroStats } from './types';

export function calculateHeroStats(params: PowerParams): HeroStats {
  const powerStats = calculatePowerStats(params);
  const { level } = params;

  const nextLevelCost = level < SYSTEM_LIMITS.maxLevel ? calculateNextLevelCost(level) : null;
  const nextLevelGems = level < SYSTEM_LIMITS.maxLevel ? calculateLevelGemCost(level) : null;
  const totalGoldSpent = calculateTotalGoldSpent(level);
  const totalGemsSpent = calculateTotalGemsSpent(level);

  return {
    ...powerStats,
    nextLevelCost,
    nextLevelGems,
    totalGoldSpent,
    totalGemsSpent,
    powerPerGold: powerStats.currentPower / totalGoldSpent,
    powerPerGem: powerStats.currentPower / totalGemsSpent,
  };
}