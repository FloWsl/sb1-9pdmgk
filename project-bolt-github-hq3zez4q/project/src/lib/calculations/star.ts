import type { ConstellationData } from '../../data/constellations';
import type { StarAnalysis } from '../types/star';
import { STATUS_THRESHOLDS } from '../../utils/statusIndicators';

export function analyzeStarRequirements(
  power: number,
  constellation: ConstellationData
): StarAnalysis {
  const requiredPowerFor100 = constellation.avgPower * 100;
  const powerToNextConstellation = constellation.totalPower * 50;
  
  const returnPercentage = Math.min(
    (power / requiredPowerFor100) * 100,
    100
  );
  
  const goldPerStar = constellation.avgGoldValue;
  const expectedGoldGain = (returnPercentage / 100) * goldPerStar;
  const progressToNextConstellation = (power / powerToNextConstellation) * 100;
  
  // Determine status and message
  let status: 'success' | 'warning' | 'danger';
  let message: string;
  
  if (returnPercentage >= STATUS_THRESHOLDS.SUCCESS) {
    status = 'success';
    message = 'Ready to farm efficiently!';
  } else if (returnPercentage >= STATUS_THRESHOLDS.WARNING) {
    status = 'warning';
    message = 'Farming possible but not optimal';
  } else {
    status = 'danger';
    message = 'Power level too low for efficient farming';
  }
  
  return {
    requiredPowerFor100,
    powerToNextConstellation,
    goldPerStar,
    expectedGoldGain,
    returnPercentage,
    isOptimalForFarming: returnPercentage >= 95,
    progressToNextConstellation,
    status,
    message
  };
}