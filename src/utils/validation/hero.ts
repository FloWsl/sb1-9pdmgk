import { SYSTEM_LIMITS } from '../../constants/game';
import type { HeroParams } from '../../types/hero';

export function validateHeroInputs({ rarity, level, stars }: HeroParams): void {
  const errors: string[] = [];
    
  // Type checks
  if (!Number.isInteger(rarity)) errors.push("Rarity must be an integer");
  if (!Number.isInteger(level)) errors.push("Level must be an integer");
  if (!Number.isInteger(stars)) errors.push("Stars must be an integer");
    
  // Range checks
  if (rarity < 0 || rarity > SYSTEM_LIMITS.maxRarity) 
    errors.push(`Rarity must be between 0 and ${SYSTEM_LIMITS.maxRarity}`);
  if (level < 1 || level > SYSTEM_LIMITS.maxLevel) 
    errors.push(`Level must be between 1 and ${SYSTEM_LIMITS.maxLevel}`);
  if (stars < 1 || stars > SYSTEM_LIMITS.maxStars) 
    errors.push(`Stars must be between 1 and ${SYSTEM_LIMITS.maxStars}`);
        
  if (errors.length > 0) throw new Error(errors.join(", "));
}