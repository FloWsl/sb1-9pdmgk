import type { ResultState } from '../lib/types';

export const STATUS_THRESHOLDS = {
  SUCCESS: 95,
  WARNING: 50,
  DANGER: 0
} as const;

export function calculateStatusLevel(
  currentPower: number,
  requiredPower: number
): ResultState {
  const percentage = (currentPower / requiredPower) * 100;
  
  if (percentage >= STATUS_THRESHOLDS.SUCCESS) {
    return {
      status: 'success',
      message: 'Ready to clear!',
      percentage,
      nextGoal: null
    };
  }
  
  if (percentage >= STATUS_THRESHOLDS.WARNING) {
    return {
      status: 'warning',
      message: 'Getting close!',
      percentage,
      nextGoal: requiredPower
    };
  }
  
  return {
    status: 'danger',
    message: 'More power needed',
    percentage,
    nextGoal: requiredPower
  };
}