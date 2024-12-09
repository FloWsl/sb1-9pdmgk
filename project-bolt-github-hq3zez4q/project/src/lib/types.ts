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

export interface ResourceStats {
    totalGoldSpent: number;
    totalGemsSpent: number;
    nextLevelCost: number | null;
    nextLevelGems: number | null;
}

export interface HeroStats extends StrengthStats, ResourceStats {
    powerPerGold: number;
    powerPerGem: number;
}

export interface CalculatorState extends HeroStats {
    rarity: Rarity;
    stars: Stars;
    level: Level;
    isMaxLevel: boolean;
    previousPowerPerGold: number;
    previousPowerPerGem: number;
}