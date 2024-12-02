import React from 'react';
import { Users, Plus } from 'lucide-react';
import { HeroForm } from '../components/HeroForm';
import { TeamMetricsPanel } from '../components/team/TeamMetricsPanel';
import { HeroGrid } from '../components/team/HeroGrid';
import { useCalculatorStore } from '../store/calculatorStore';
import { useTeamStore } from '../store/teamStore';
import { calculateTeamMetrics } from '../lib/calculations/team';

export function TeamCalculator() {
  const { rarity, stars, level, ...stats } = useCalculatorStore();
  const setValues = useCalculatorStore((state) => state.setValues);
  const reset = useCalculatorStore((state) => state.reset);
  
  const { 
    heroes, 
    isEditing, 
    selectedHeroIndex, 
    addHero, 
    updateHero, 
    removeHero,
    selectHero 
  } = useTeamStore();
  
  const activeHeroes = heroes.filter((hero): hero is NonNullable<typeof hero> => hero !== null);
  const teamMetrics = activeHeroes.length > 0 ? calculateTeamMetrics(activeHeroes) : null;
  
  const handleAddToTeam = () => {
    const hero = {
      id: `hero-${Date.now()}`,
      rarity,
      level,
      stars,
      metrics: stats,
    };

    if (isEditing && selectedHeroIndex !== null) {
      updateHero(selectedHeroIndex, hero);
    } else {
      addHero(hero);
    }
    
    reset();
  };

  const handleHeroSelect = (index: number) => {
    const hero = heroes[index];
    if (hero) {
      setValues({
        rarity: hero.rarity,
        level: hero.level,
        stars: hero.stars,
      });
      selectHero(index);
    }
  };

  const isTeamFull = activeHeroes.length >= 9;

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-white text-center mb-2">
            Team Calculator
          </h1>
          <div className="flex items-center gap-2 text-galaxy-300">
            <Users className="w-5 h-5" />
            <span className="text-lg">Build Your Team</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <HeroForm
              rarity={rarity}
              stars={stars}
              level={level}
              onChange={setValues}
            />

            <button
              onClick={handleAddToTeam}
              disabled={isTeamFull && !isEditing}
              className={`w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition-all ${
                isTeamFull && !isEditing
                  ? 'bg-galaxy-800 text-galaxy-400 cursor-not-allowed'
                  : 'bg-button-gradient text-white hover:shadow-lg shadow-button'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>{isEditing ? 'Update Hero' : 'Add to Team'}</span>
            </button>
          </div>

          {teamMetrics && (
            <div className="lg:col-span-1">
              <TeamMetricsPanel metrics={teamMetrics} />
            </div>
          )}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-galaxy-400 mb-6">Your Team</h2>
          <HeroGrid
            heroes={heroes}
            viewMode="SINGLE"
            selectedIndex={selectedHeroIndex}
            onSelect={handleHeroSelect}
            onRemove={removeHero}
          />
        </div>
      </div>
    </div>
  );
}