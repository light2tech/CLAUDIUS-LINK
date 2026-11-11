import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIdx];

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Boosted Typography */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block rounded-full" />
            <span>TECHNICAL & CREATIVE DISCIPLINES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
            Core competencies engineered for real-world application.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A versatile blend of front-end web development, visual brand collateral, live streaming production, and student academic technical support.
          </p>
        </div>

        {/* Discipline Navigation Tabs (Functional interactive tabs) */}
        <div className="mt-12 border-b border-neutral-200 dark:border-neutral-800 flex overflow-x-auto gap-6 sm:gap-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`pb-4 text-sm sm:text-base font-bold uppercase tracking-wider whitespace-nowrap transition-all border-b-2 -mb-[2px] ${
                activeCategoryIdx === idx
                  ? 'border-red-600 text-red-600 dark:text-red-500 font-extrabold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Discipline Details */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Summary Box */}
          <div className="lg:col-span-4 p-7 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl space-y-5 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
              Discipline Scope
            </span>
            <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white">
              {activeCategory.title}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {activeCategory.summary}
            </p>
            <div className="pt-3 border-t border-neutral-200/80 dark:border-neutral-800 text-xs sm:text-sm font-mono text-red-600 dark:text-red-500 font-bold">
              Taraba State University · Jalingo Practice
            </div>
          </div>

          {/* Detailed Skill Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl space-y-2.5 hover:border-red-600/50 dark:hover:border-red-500/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between text-sm sm:text-base">
                  <h4 className="font-bold text-neutral-950 dark:text-white">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider px-2 py-0.5 bg-red-50 dark:bg-red-950/40 rounded-md">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
