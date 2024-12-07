import React from 'react';
import { Zap } from 'lucide-react';
import { useCalculatorStore } from '../../store/calculatorStore';

export function PowerInput() {
  const currentPower = useCalculatorStore((state) => state.currentPower);
  const setCurrentPower = useCalculatorStore((state) => state.setCurrentPower);

  return (
    <div className="bg-galaxy-900/50 backdrop-blur-sm rounded-xl p-6 border border-galaxy-700/50 shadow-neon">
      <div className="flex items-center gap-2 text-galaxy-300 mb-4">
        <Zap className="w-5 h-5" />
        <h3 className="font-semibold">Enter Your Power</h3>
      </div>

      <input
        type="number"
        value={currentPower || ''}
        onChange={(e) => setCurrentPower(Number(e.target.value))}
        className="w-full bg-galaxy-800 border border-galaxy-700 rounded-lg px-4 py-3 text-galaxy-100 text-lg focus:outline-none focus:border-galaxy-500 transition-colors"
        placeholder="Enter your current power level"
      />
    </div>
  );
}