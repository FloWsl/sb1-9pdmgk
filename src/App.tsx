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
        <div className="flex flex-col items-center mb-12">
          <img 
            src="https://res.cloudinary.com/archeillustree/image/upload/c_crop,w_750,h_750,ar_1:1/v1733072618/GotchiStats3_logo_500.webp"
            alt="Gotchi Stats Logo"
            className="w-24 h-24 mb-4"
          />
          <h1 className="text-4xl font-bold text-white text-center mb-2">Gotchi Stats</h1>
          <div className="flex items-center gap-2 text-galaxy-300">
            <Calculator className="w-5 h-5" />
            <span className="text-lg">Hero Calculator</span>
          </div>
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

        <footer className="mt-12 text-center text-galaxy-300">
          <p>Brought to you with 💜 by <a href="https://twitter.com/Flowz" className="text-galaxy-100 hover:text-galaxy-200 transition-colors">@Flowz</a> and the kind support of <a href="https://twitter.com/VamonosPest" className="text-galaxy-100 hover:text-galaxy-200 transition-colors">@VamonosPest</a></p>
        </footer>
      </div>
    </div>
  );
}
