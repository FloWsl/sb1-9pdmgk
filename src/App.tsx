import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { HeroForm } from './components/HeroForm';
import { PowerDisplay } from './components/PowerDisplay';
import { CostDisplay } from './components/CostDisplay';
import { calculateHeroStats } from './lib/calculations';
import { SYSTEM_LIMITS } from './lib/constants';
import type { CalculatorState, Rarity, Stars, Level } from './lib/types';

export default function App() {
  const initialStats = calculateHeroStats({ rarity: 0, level: 1, stars: 1 });
  
  const [state, setState] = useState<CalculatorState>({
    rarity: 0,
    stars: 1,
    level: 1,
    ...initialStats,
    isMaxLevel: false,
    previousPowerPerGold: 0
  });

  const handleChange = (values: { rarity?: Rarity; stars?: Stars; level?: Level }) => {
    const newState = {
      ...state,
      ...values
    };

    const stats = calculateHeroStats({
      rarity: newState.rarity,
      level: newState.level,
      stars: newState.stars
    });
    
    setState({
      ...newState,
      ...stats,
      isMaxLevel: newState.level >= SYSTEM_LIMITS.maxLevel,
      previousPowerPerGold: state.powerPerGold
    });
  };

  return (
    <div className="min-h-screen bg-galaxy-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-galaxy-900 via-galaxy-950 to-galaxy-950">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Calculator className="w-8 h-8 text-galaxy-300" />
          <h1 className="text-3xl font-bold text-white">Hero Calculator</h1>
        </div>

        <HeroForm
          rarity={state.rarity}
          stars={state.stars}
          level={state.level}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <PowerDisplay stats={state} />
          <CostDisplay stats={state} />
        </div>
      </div>
    </div>
  );
}