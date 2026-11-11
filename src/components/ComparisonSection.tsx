import React from 'react';
import { ExternalLink, Check, ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ComparisonSection: React.FC = () => {
  const improvements = [
    {
      feature: 'Design Language & Aesthetic',
      v1: 'Foundational portfolio layout with basic CSS',
      v2: 'Monochromatic architectural discipline (white, black & red accent), clean typography, zero-pill metadata',
    },
    {
      feature: 'Interactivity & Live Proof',
      v1: 'Static project list without interactive demonstrations',
      v2: 'Working interactive CBT exam simulator, civic waste dispatcher, JAMB helper, and design lightbox',
    },
    {
      feature: 'Mobile-First Responsiveness',
      v1: 'Basic view scaling across mobile devices',
      v2: 'Sub-15% sticky header cap, touch-friendly 44px targets, fluid type clamping, and zero-overflow layout',
    },
    {
      feature: 'CV & Professional Credentials',
      v1: 'Text summary of skills',
      v2: 'Integrated embedded official PDF viewer, one-click offline download, and structured experience timeline',
    },
  ];

  return (
    <section className="py-20 md:py-28 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Boosted Typography */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block rounded-full" />
            <span>ITERATIVE GROWTH & ENGINEERING STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
            The Evolution: Portfolio V1 to V2
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Comparing the foundational personal portfolio with this modern, responsive, and interactive experience.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="mt-14 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-neutral-500 px-6 sm:px-8 py-4">
            <div className="md:col-span-3">Dimension</div>
            <div className="md:col-span-4">Original Version (V1)</div>
            <div className="md:col-span-5 text-red-600 font-extrabold">Upgraded Platform (V2)</div>
          </div>

          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {improvements.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 p-6 sm:p-8 text-sm sm:text-base items-center">
                <div className="md:col-span-3 font-bold text-neutral-900 dark:text-white">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-neutral-500 line-through decoration-neutral-400">
                  {item.v1}
                </div>
                <div className="md:col-span-5 font-semibold text-neutral-950 dark:text-neutral-100 flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <span>{item.v2}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Links Footer */}
          <div className="p-6 sm:p-8 bg-neutral-100/70 dark:bg-neutral-900/70 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-neutral-500 font-medium">Compare with original deployment:</span>
              <a
                href={PERSONAL_INFO.currentPortfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-neutral-900 dark:text-white hover:text-red-600 flex items-center gap-1.5 underline font-bold"
              >
                <span>my-web-portfolio-silk.vercel.app</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <a
              href={PERSONAL_INFO.githubRepoUrl}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-neutral-950 dark:bg-white dark:text-neutral-950 hover:bg-neutral-800 rounded-full transition-all duration-300 shadow-sm"
            >
              Inspect Source on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
