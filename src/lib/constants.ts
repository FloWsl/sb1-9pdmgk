export const RARITY_BASE_POWER = {
  0: 28, // Rare
  1: 34, // Epic
  2: 41, // Legendary
} as const;

export const SYSTEM_LIMITS = {
  maxLevel: 50,
  maxStars: 15,
  maxRarity: 2,
} as const;

export const POWER_FORMULA = {
  a: 2.1826, // Numerator constant
  b: 1.27, // Level adjustment
  c: 0.9809, // Base multiplier
  starIncrease: 0.9, // 9% per star
} as const;

export const RARITY_NAMES = {
  0: 'Rare',
  1: 'Epic',
  2: 'Legendary',
} as const;
