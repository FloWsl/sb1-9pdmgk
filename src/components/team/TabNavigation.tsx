import React from 'react';
import { Users, Calculator, Map } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  teamSize: number;
}

export function TabNavigation({ activeTab, onTabChange, teamSize }: TabNavigationProps) {
  return (
    <div className="flex gap-2 bg-galaxy-900/30 p-2 rounded-lg backdrop-blur-sm mb-8">
      <button
        onClick={() => onTabChange('composition')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          activeTab === 'composition'
            ? 'bg-button-gradient text-white shadow-button'
            : 'text-galaxy-300 hover:bg-galaxy-800/50'
        }`}
      >
        <Users className="w-5 h-5" />
        <span>Team ({teamSize}/9)</span>
      </button>

      <button
        onClick={() => onTabChange('statistics')}
        disabled={teamSize === 0}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          teamSize === 0
            ? 'bg-galaxy-800/30 text-galaxy-600 cursor-not-allowed'
            : activeTab === 'statistics'
            ? 'bg-button-gradient text-white shadow-button'
            : 'text-galaxy-300 hover:bg-galaxy-800/50'
        }`}
      >
        <Calculator className="w-5 h-5" />
        <span>Statistics</span>
      </button>

      <button
        onClick={() => onTabChange('planets')}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          activeTab === 'planets'
            ? 'bg-button-gradient text-white shadow-button'
            : 'text-galaxy-300 hover:bg-galaxy-800/50'
        }`}
      >
        <Map className="w-5 h-5" />
        <span>Planets</span>
      </button>
    </div>
  );
}