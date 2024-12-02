import { RARITY_BASE_POWER, POWER_FORMULA, SYSTEM_LIMITS } from './constants';
import { validateInputs } from './validation';
import { calculateNextLevelCost, calculateTotalGoldSpent } from './costs';
import type { HeroParams, StrengthStats, HeroStats } from './types';

export function calculateLevelMultiplier(targetLevel: number): number {
    const { a, b, c } = POWER_FORMULA;
    return (a / (targetLevel - b)) + c;
}

export function calculateStarMultiplier(stars: number): number {
    return 1 + ((stars - 1) * POWER_FORMULA.starIncrease);
}

export function calculateStrength({ rarity, level, stars }: HeroParams): StrengthStats {
    validateInputs({ rarity, level, stars });
    
    let currentPower = RARITY_BASE_POWER[rarity];
    
    // Calculate power progression up to current level
    for (let i = 2; i <= level; i++) {
        currentPower *= calculateLevelMultiplier(i);
    }
    
    // Apply star multiplier
    currentPower = Math.round(currentPower * calculateStarMultiplier(stars));
    
    // Calculate next level if not at max
    let nextLevelPower = null;
    let increasePercent = null;
    
    if (level < SYSTEM_LIMITS.maxLevel) {
        nextLevelPower = Math.round(
            currentPower * calculateLevelMultiplier(level + 1)
        );
        increasePercent = ((nextLevelPower - currentPower) / currentPower) * 100;
    }
    
    return {
        currentPower,
        nextLevelPower,
        increase: nextLevelPower ? nextLevelPower - currentPower : null,
        increasePercent: increasePercent ? Math.round(increasePercent * 100) / 100 : null
    };
}

export function calculateHeroStats({ rarity, level, stars }: HeroParams): HeroStats {
    const strengthStats = calculateStrength({ rarity, level, stars });
    const nextLevelCost = level < SYSTEM_LIMITS.maxLevel ? 
        calculateNextLevelCost(level) : null;
    const totalGoldSpent = calculateTotalGoldSpent(level);
    
    return {
        ...strengthStats,
        nextLevelCost,
        totalGoldSpent,
        powerPerGold: strengthStats.currentPower / totalGoldSpent
    };
}