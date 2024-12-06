import type { HeroConfig, TeamMetrics } from '../types/team';

export function calculateTeamMetrics(heroes: HeroConfig[]): TeamMetrics {
  const powers = heroes.map(hero => hero.metrics.currentPower);
  const goldSpent = heroes.map(hero => hero.metrics.totalGoldSpent);
  const gemsSpent = heroes.map(hero => hero.metrics.totalGemsSpent);
  
  const totalPower = powers.reduce((sum, power) => sum + power, 0);
  const totalGoldSpent = goldSpent.reduce((sum, gold) => sum + gold, 0);
  const totalGemsSpent = gemsSpent.reduce((sum, gems) => sum + gems, 0);
  const heroCount = heroes.length;
  
  // Sort powers for statistical calculations
  const sortedPowers = [...powers].sort((a, b) => a - b);
  
  return {
    totalPower,
    totalGoldSpent,
    totalGemsSpent,
    averagePower: totalPower / heroCount,
    averagePowerPerGold: totalPower / totalGoldSpent,
    averagePowerPerGem: totalPower / totalGemsSpent,
    minPower: Math.min(...powers),
    maxPower: Math.max(...powers),
    heroCount,
    powerDistribution: {
      median: calculateMedian(sortedPowers),
      standardDeviation: calculateStandardDeviation(powers),
    },
  };
}

function calculateMedian(sortedValues: number[]): number {
  const mid = Math.floor(sortedValues.length / 2);
  return sortedValues.length % 2 === 0
    ? (sortedValues[mid - 1] + sortedValues[mid]) / 2
    : sortedValues[mid];
}

function calculateStandardDeviation(values: number[]): number {
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  const squareDiffs = values.map(value => Math.pow(value - mean, 2));
  const variance = squareDiffs.reduce((sum, diff) => sum + diff, 0) / values.length;
  return Math.sqrt(variance);
}