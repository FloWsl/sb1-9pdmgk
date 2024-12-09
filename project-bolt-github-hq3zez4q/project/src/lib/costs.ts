import { SYSTEM_LIMITS } from './constants';

const COST_FORMULA = {
    base: 149.97,
    exponent: 0.7501
} as const;

export function calculateNextLevelCost(level: number): number {
    return Math.round(COST_FORMULA.base * Math.pow(level, COST_FORMULA.exponent));
}

export function calculateTotalGoldSpent(level: number): number {
    let total = 0;
    for (let i = 1; i < level; i++) {
        total += calculateNextLevelCost(i);
    }
    return Math.round(total);
}