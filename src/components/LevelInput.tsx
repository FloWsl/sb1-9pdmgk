import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { SYSTEM_LIMITS } from '../lib/constants';
import type { Level } from '../lib/types';

interface LevelInputProps {
  level: Level;
  onChange: (level: Level) => void;
}

export function LevelInput({ level, onChange }: LevelInputProps) {
  const handleIncrement = () => {
    if (level < SYSTEM_LIMITS.maxLevel) {
      onChange(level + 1);
    }
  };

  const handleDecrement = () => {
    if (level > 1) {
      onChange(level - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = Math.min(
      SYSTEM_LIMITS.maxLevel,
      Math.max(1, parseInt(e.target.value) || 1)
    );
    onChange(newLevel);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-galaxy-50 mb-2">Level</label>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDecrement}
          disabled={level <= 1}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            level <= 1
              ? 'bg-galaxy-800 border-galaxy-700 text-galaxy-600 cursor-not-allowed'
              : 'bg-container-gradient border-galaxy-700 text-galaxy-200 hover:bg-galaxy-800/50'
          }`}
        >
          <Minus className="w-4 h-4" />
        </button>

        <div className="relative flex-1">
          <input
            type="number"
            min="1"
            max={SYSTEM_LIMITS.maxLevel}
            value={level}
            onChange={handleInputChange}
            className="w-full bg-container-gradient backdrop-blur-sm rounded-lg border border-galaxy-700 px-4 py-2  text-center appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-galaxy-400 text-sm">
            / {SYSTEM_LIMITS.maxLevel}
          </div>
        </div>

        <button
          onClick={handleIncrement}
          disabled={level >= SYSTEM_LIMITS.maxLevel}
          className={`p-2 rounded-lg border transition-all duration-200 ${
            level >= SYSTEM_LIMITS.maxLevel
              ? 'bg-galaxy-800 border-galaxy-700 text-galaxy-600 cursor-not-allowed'
              : 'bg-container-gradient border-galaxy-700 text-galaxy-200 hover:bg-galaxy-800/50'
          }`}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
