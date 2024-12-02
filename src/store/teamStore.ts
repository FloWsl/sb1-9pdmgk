import { create } from 'zustand';
import type { HeroConfig } from '../lib/types/team';

interface TeamState {
  heroes: (HeroConfig | null)[];
  selectedHeroIndex: number | null;
  isEditing: boolean;
  addHero: (hero: HeroConfig) => void;
  removeHero: (index: number) => void;
  selectHero: (index: number | null) => void;
  setEditing: (isEditing: boolean) => void;
  updateHero: (index: number, hero: HeroConfig) => void;
}

export const useTeamStore = create<TeamState>((set) => ({
  heroes: Array(9).fill(null),
  selectedHeroIndex: null,
  isEditing: false,

  addHero: (hero) =>
    set((state) => {
      const index = state.heroes.findIndex((h) => h === null);
      if (index === -1) return state;

      const newHeroes = [...state.heroes];
      newHeroes[index] = hero;

      return {
        heroes: newHeroes,
        selectedHeroIndex: null,
        isEditing: false,
      };
    }),

  removeHero: (index) =>
    set((state) => {
      const newHeroes = [...state.heroes];
      newHeroes[index] = null;

      return {
        heroes: newHeroes,
        selectedHeroIndex: null,
        isEditing: false,
      };
    }),

  selectHero: (index) =>
    set({
      selectedHeroIndex: index,
      isEditing: index !== null,
    }),

  setEditing: (isEditing) =>
    set({
      isEditing,
    }),

  updateHero: (index, hero) =>
    set((state) => {
      const newHeroes = [...state.heroes];
      newHeroes[index] = hero;

      return {
        heroes: newHeroes,
        selectedHeroIndex: null,
        isEditing: false,
      };
    }),
}));