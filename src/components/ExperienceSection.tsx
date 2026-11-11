import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, FileText } from 'lucide-react';

interface ExperienceSectionProps {
  onOpenCv: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenCv }) => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Boosted Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              <span className="w-2.5 h-2.5 bg-red-600 inline-block rounded-full" />
              <span>CAREER TRAJECTORY & EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
              Hands-on experience delivering visual and technical impact.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              Real organizational leadership with NIFES Light Media, independent front-end web projects, and community university advisory.
            </p>
          </div>

          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border-2 border-neutral-300 dark:border-neutral-700 hover:border-red-600 dark:hover:border-red-500 rounded-full transition-all duration-300 whitespace-nowrap self-start md:self-auto shadow-xs hover:scale-[1.02]"
          >
            <FileText className="w-4 h-4 text-red-600" />
            <span>View Full CV Document</span>
          </button>
        </div>

        {/* Experience Timeline */}
        <div className="mt-14 space-y-10 max-w-4xl">
          {EXPERIENCES.map((item) => {
            return (
              <div
                key={item.id}
                className="relative pl-8 sm:pl-10 border-l-2 border-neutral-200 dark:border-neutral-800 space-y-3.5 group hover:border-red-600 transition-colors"
              >
                {/* Node Square */}
                <div className="absolute -left-[6px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-400 dark:bg-neutral-600 group-hover:bg-red-600 group-hover:scale-125 transition-all" />

                {/* Role and Period Header (Larger Font) */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold text-red-600 dark:text-red-400 tabular-nums">
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Organization & Location */}
                <div className="flex items-center gap-2.5 text-sm sm:text-base font-semibold text-neutral-600 dark:text-neutral-400">
                  <span className="text-neutral-900 dark:text-neutral-200">
                    {item.organization}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5 font-normal text-xs sm:text-sm">
                    <MapPin className="w-3.5 h-3.5 text-red-600" />
                    <span>{item.location}</span>
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0 mt-2 group-hover:bg-red-600 transition-colors" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Key Highlights */}
                {item.keyHighlights && (
                  <div className="pt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                    {item.keyHighlights.map((hl, i) => (
                      <span key={i} className="font-mono text-xs font-semibold text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-3 py-1 rounded-full shadow-2xs">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
