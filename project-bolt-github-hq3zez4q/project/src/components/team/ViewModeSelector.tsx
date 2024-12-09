import React from 'react';
import { Users, User, UserSquare2, Users2 } from 'lucide-react';
import { ViewMode } from '../../lib/types/team';

interface ViewModeSelectorProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  heroCount: number;
}

export function ViewModeSelector({
  currentMode,
  onModeChange,
  heroCount,
}: ViewModeSelectorProps) {
  return (
    <div className="flex gap-2 p-2 bg-galaxy-900/30 rounded-lg backdrop-blur-sm">
      <button
        onClick={() => onModeChange(ViewMode.SINGLE)}
        className={`p-2 rounded-lg transition-all ${
          currentMode === ViewMode.SINGLE
            ? 'bg-button-gradient text-white shadow-button'
            : 'text-galaxy-300 hover:bg-galaxy-800/50'
        }`}
        disabled={heroCount === 0}
      >
        <User className="w-5 h-5" />
      </button>
    </div>
  );
}
