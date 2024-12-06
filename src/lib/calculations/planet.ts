import type { ConstellationData } from '../../data/constellations';
import type { PlanetCalculation } from '../types/planet';

export function calculatePlanetReturns(
  teamPower: number,
  constellation: ConstellationData
): PlanetCalculation {
  const requiredPowerFor100 = constellation.avgPower * 100;
  const powerToNextConstellation = constellation.totalPower * 50;
  
  const returnPercentage = Math.min(
    (teamPower / requiredPowerFor100) * 100,
    100
  );
  
  const goldPerPlanet = 
    constellation.avgGoldValue;

  const expectedGoldGain =
  returnPercentage*goldPerPlanet ;
  
  return {
    requiredPowerFor100,
    expectedGoldGain,
    powerToNextConstellation,
    goldPerPlanet,
    returnPercentage,
    isOptimalForFarming: returnPercentage >= 95,
    progressToNextConstellation: 
      (teamPower / powerToNextConstellation) * 100
  };
}