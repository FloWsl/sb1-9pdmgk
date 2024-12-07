import { create } from 'zustand';
import { calculateHeroStats } from '../lib/calculations';
import type { CalculatorState, Rarity, Stars, Level } from '../lib/types';

interface CalculatorStore extends CalculatorState {
  setValues: (values: { rarity?: Rarity; stars?: Stars; level?: Level }) => void;
  reset: () => void;
  currentPower: number;
  setCurrentPower: (power: number) => void;
}

const initialStats = calculateHeroStats({ rarity: 0, level: 1, stars: 1 });

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  // Initial state
  rarity: 0,
  stars: 1,
  level: 1,
  currentPower: 0,
  ...initialStats,
  isMaxLevel: false,
  previousPowerPerGold: 0,

  // Actions
  setValues: (values) => {
    set((state) => {
      const newState = {
        ...state,
        ...values,
      };

      const stats = calculateHeroStats({
        rarity: newState.rarity,
        level: newState.level,
        stars: newState.stars,
      });

      return {
        ...newState,
        ...stats,
        isMaxLevel: newState.level >= 50,
        previousPowerPerGold: state.powerPerGold,
      };
    });
  },

  setCurrentPower: (power: number) => set({ currentPower: power }),

  reset: () => {
    set({
      rarity: 0,
      stars: 1,
      level: 1,
      currentPower: 0,
      ...initialStats,
      isMaxLevel: false,
      previousPowerPerGold: 0,
    });
  },
}));