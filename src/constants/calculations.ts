export const POWER_FORMULA = {
  a: 2.1826, // Numerator constant
  b: 1.27, // Level adjustment
  c: 0.9809, // Base multiplier
  starIncrease: 0.09, // 9% per star
} as const;

export const COST_FORMULA = {
  base: 149.97,
  exponent: 0.7501
} as const;

export const GEM_FORMULA = {
  base: 50,
  exponent: 0.50
} as const;