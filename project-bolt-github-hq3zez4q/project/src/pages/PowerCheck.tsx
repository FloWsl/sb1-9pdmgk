import React from 'react';
import { Calculator } from 'lucide-react';
import { PowerInput } from '../components/power-check/PowerInput';
import { PlanetSelector } from '../components/power-check/PlanetSelector';
import { ResultDisplay } from '../components/power-check/ResultDisplay';
import { AdvancedDetailsCollapsible } from '../components/power-check/AdvancedDetailsCollapsible';

export function PowerCheck() {
  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Power Check
          </h1>
          <div className="flex items-center gap-2 text-galaxy-300">
            <Calculator className="w-5 h-5" />
            <span className="text-lg">Quick Power Calculator</span>
          </div>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <PowerInput />
          <PlanetSelector />
          <ResultDisplay />
          <AdvancedDetailsCollapsible />
        </div>
      </div>
    </div>
  );
}