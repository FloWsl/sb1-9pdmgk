export const RARITY_BASE_POWER = {
  0: 27.5, // Rare
  1: 34, // Epic
  2: 41.25, // Legendary
} as const;

export const SYSTEM_LIMITS = {
  maxLevel: 200,
  maxStars: 15,
  maxRarity: 2,
} as const;

export const RARITY_NAMES = {
  0: 'Rare',
  1: 'Epic',
  2: 'Legendary',
} as const;