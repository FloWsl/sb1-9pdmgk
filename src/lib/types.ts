export type Rarity = 0 | 1 | 2;
export type Level = number;
export type Stars = number;

export interface HeroParams {
    rarity: Rarity;
    level: Level;
    stars: Stars;
}

export interface StrengthStats {
    currentPower: number;
    nextLevelPower: number | null;
    increase: number | null;
    increasePercent: number | null;
}

export interface HeroStats extends StrengthStats {
    nextLevelCost: number | null;
    totalGoldSpent: number;
    powerPerGold: number;
}

export interface CalculatorState extends HeroStats {
    rarity: Rarity;
    stars: Stars;
    level: Level;
    isMaxLevel: boolean;
    previousPowerPerGold: number;
}