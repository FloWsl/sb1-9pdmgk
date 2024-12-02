import React from 'react';
import { Calculator } from 'lucide-react';
import { HeroForm } from '../components/HeroForm';
import { PowerDisplay } from '../components/PowerDisplay';
import { CostDisplay } from '../components/CostDisplay';
import { useCalculatorStore } from '../store/calculatorStore';

export function IndividualCalculator() {
  const { rarity, stars, level, ...stats } = useCalculatorStore();
  const setValues = useCalculatorStore((state) => state.setValues);

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Individual Calculator
          </h1>
          <div className="flex items-center gap-2 text-galaxy-300">
            <Calculator className="w-5 h-5" />
            <span className="text-lg">Hero Calculator</span>
          </div>
        </div>

        <HeroForm
          rarity={rarity}
          stars={stars}
          level={level}
          onChange={setValues}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <PowerDisplay stats={stats} />
          <CostDisplay stats={stats} />
        </div>
      </div>
    </div>
  );
}