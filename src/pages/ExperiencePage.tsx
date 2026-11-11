import React, { useState } from 'react';
import { EXPERIENCES, PERSONAL_INFO } from '../data/portfolioData';
import { SkillsSection } from '../components/SkillsSection';
import { FileText, Download, MapPin, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

interface ExperiencePageProps {
  onOpenCv: () => void;
  onNavigate: (page: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = ({ onOpenCv, onNavigate }) => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredExperiences = filterType === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter((item) => {
        if (filterType === 'work') return item.type === 'work';
        if (filterType === 'education') return item.type === 'education';
        if (filterType === 'independent') return item.type === 'independent';
        return true;
      });

  return (
    <div className="py-12 sm:py-16 md:py-20 animate-in fade-in duration-300 space-y-16 sm:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              <span>HOME / CAREER & EXPERIENCE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Proven track record in design, web & student support.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              A comprehensive chronology of roles at NIFES Light Media, independent front-end engineering, student portal guidance, and ongoing computer science studies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Milestone Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { id: 'all', label: 'All Milestones' },
            { id: 'work', label: 'Media & Front-End Roles' },
            { id: 'independent', label: 'Student Advisory Practice' },
            { id: 'education', label: 'Academic Qualifications' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterType(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                filterType === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8 max-w-4xl">
          {filteredExperiences.map((item) => {
            const isEducation = item.type === 'education';
            return (
              <div
                key={item.id}
                className="relative pl-8 sm:pl-10 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-4 group hover:border-red-600 transition-colors"
              >
                {/* Node Square */}
                <div className="absolute -left-[6px] top-2.5 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-red-600 group-hover:scale-125 transition-all" />

                <div className="p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl space-y-4 shadow-xs hover:shadow-xl transition-all">
                  
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors">
                        {item.role}
                      </h2>
                      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 mt-1">
                        <span className="text-neutral-900 dark:text-white">{item.organization}</span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1 font-normal text-xs sm:text-sm">
                          <MapPin className="w-3.5 h-3.5 text-red-600" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm font-mono font-bold text-red-600 dark:text-red-400 px-3 py-1 bg-red-50 dark:bg-red-950/40 rounded-full self-start">
                      {item.period}
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2">
                    {item.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-red-600 shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Highlights */}
                  {item.keyHighlights && (
                    <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-2 text-xs font-mono">
                      {item.keyHighlights.map((hl, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg font-semibold"
                        >
                          ✓ {hl}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Skills Matrix Detail Section */}
      <SkillsSection />
    </div>
  );
};
