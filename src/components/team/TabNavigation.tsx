import React from 'react';
import { Users, Calculator, Map, AlertCircle } from 'lucide-react';

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
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
          activeTab === 'statistics'
            ? 'bg-button-gradient text-white shadow-button'
            : 'text-galaxy-300 hover:bg-galaxy-800/50'
        }`}
      >
        <Calculator className="w-5 h-5" />
        <span>Statistics</span>
        {teamSize === 0 && (
          <div className="relative group">
            <AlertCircle className="w-4 h-4 text-yellow-400" />
            <div className="absolute left-1/2 bottom-full mb-2 -translate-x-1/2 w-48 p-2 bg-galaxy-800 text-xs text-galaxy-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Add heroes to your team to see statistics
            </div>
          </div>
        )}
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