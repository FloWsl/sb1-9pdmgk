const GEM_FORMULA = {
  base: 50,
  exponent: 0.50
} as const;

export function calculateLevelGemCost(level: number): number {
  return Math.round(GEM_FORMULA.base * Math.pow(level, GEM_FORMULA.exponent));
}

export function calculateTotalGemsSpent(level: number): number {
  let total = 0;
  for (let i = 1; i < level; i++) {
    total += calculateLevelGemCost(i);
  }
  return Math.round(total);
}