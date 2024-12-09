import React from 'react';
import { Calculator } from 'lucide-react';
import { HeroForm } from '../components/HeroForm';
import { PowerDisplay } from '../components/PowerDisplay';
import { ResourceDisplay } from '../components/ResourceDisplay';
import { useCalculatorStore } from '../store/calculatorStore';

export function IndividualCalculator() {
  const { rarity, stars, level, ...stats } = useCalculatorStore();
  const setValues = useCalculatorStore((state) => state.setValues);

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Hero Calculator
          </h1>
          <div className="flex items-center gap-2 text-galaxy-300">
            <Calculator className="w-5 h-5" />
            <span className="text-lg">Individual Hero Analysis</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
          <div>
            <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
              <h2 className="text-xl font-bold text-galaxy-400 mb-6">Hero Details</h2>
              <HeroForm
                rarity={rarity}
                stars={stars}
                level={level}
                onChange={setValues}
              />
            </div>
          </div>

          <div className="space-y-6">
            <PowerDisplay stats={stats} />
            <ResourceDisplay stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}