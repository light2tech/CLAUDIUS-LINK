import React from 'react';
import { ArrowRight, Code, Palette, Cpu, Radio } from 'lucide-react';

interface SkillsBarSectionProps {
  onOpenCv: () => void;
  onNavigate?: (page: string) => void;
}

export const SkillsBarSection: React.FC<SkillsBarSectionProps> = ({ onOpenCv, onNavigate }) => {
  const skillCards = [
    {
      id: 'html-css',
      title: 'HTML & CSS',
      subtitle: 'Web Development & UI',
      percentage: '90%',
      icon: Code,
      badgeColor: 'bg-red-50 dark:bg-red-950/40 text-red-600',
    },
    {
      id: 'canva',
      title: 'Canva Pro',
      subtitle: 'Graphic & Print Design',
      percentage: '95%',
      icon: Palette,
      badgeColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white',
    },
    {
      id: 'js',
      title: 'JavaScript',
      subtitle: 'Interactivity & Logic',
      percentage: '85%',
      icon: Cpu,
      badgeColor: 'bg-red-50 dark:bg-red-950/40 text-red-600',
    },
    {
      id: 'media',
      title: 'Digital Media & IT',
      subtitle: 'Live Streaming & Portals',
      percentage: '90%',
      icon: Radio,
      badgeColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-24 bg-neutral-50/80 dark:bg-neutral-900/50 border-y border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description (Boosted Font Sizes) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-500">
              MY SKILLS
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
              Design & Code Skills That Bring Ideas to Life
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              I use modern web technologies, Canva, and creative thinking to build user-friendly, responsive, and visually stunning digital products.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate ? onNavigate('services') : (window.location.hash = 'services')}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-red-600 hover:text-white border-2 border-red-600 hover:bg-red-600 rounded-full transition-all duration-300 shadow-sm hover:shadow-red-600/25 group hover:scale-[1.02] cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Skill Cards with Progress Bars (Enlarged and Polished) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {skillCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-red-600/60 dark:hover:border-red-500/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between space-y-5 group"
                >
                  {/* Top: Icon in rounded square */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl ${card.badgeColor} group-hover:scale-105 transition-transform duration-300 shadow-xs`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Middle: Title & Subtitle (Larger Typography) */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Bottom: Red Progress Bar Line + Percentage */}
                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono font-bold mb-1.5 text-neutral-600 dark:text-neutral-400">
                      <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-sans font-semibold">Proficiency</span>
                      <span className="text-neutral-950 dark:text-white">{card.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-1000 group-hover:bg-red-500"
                        style={{ width: card.percentage }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
