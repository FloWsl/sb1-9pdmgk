import { RARITY_BASE_POWER, SYSTEM_LIMITS } from './constants';
import type { PowerParams, PowerStats } from './types';

export function calculateBasePower({ rarity, level, stars }: PowerParams): number {
  const basePower = RARITY_BASE_POWER[rarity];
  return Math.round(basePower * Math.pow(level, 2) * stars);
}

export function calculatePowerStats({ rarity, level, stars }: PowerParams): PowerStats {
  const currentPower = calculateBasePower({ rarity, level, stars });
  
  if (level >= SYSTEM_LIMITS.maxLevel) {
    return {
      currentPower,
      nextLevelPower: null,
      increase: null,
      increasePercent: null
    };
  }

  const nextLevelPower = calculateBasePower({ rarity, level: level + 1, stars });
  const increase = nextLevelPower - currentPower;
  const increasePercent = (increase / currentPower) * 100;

  return {
    currentPower,
    nextLevelPower,
    increase,
    increasePercent: Math.round(increasePercent * 100) / 100
  };
}