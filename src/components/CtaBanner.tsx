import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onNavigate?: (page: string) => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Rounded Container with Red Wave Accents (Exact Reference Pattern) */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 lg:p-16 border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          
          {/* Red Abstract Gradient Waves (Reduced density) */}
          <div className="absolute -left-12 -top-12 w-64 h-64 bg-red-600/22 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-6 bottom-0 w-36 h-24 bg-red-600 rounded-tr-full opacity-25 pointer-events-none" />
          <div className="absolute -right-12 -bottom-12 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -right-6 top-0 w-36 h-24 bg-red-600 rounded-bl-full opacity-25 pointer-events-none" />

          {/* Left Text Block with Boosted Typography */}
          <div className="relative z-10 space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-red-500">
                LET'S TALK
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Got a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal">
              I'm always open to new opportunities, freelance collaborations, and exciting digital projects. Let's create something amazing together!
            </p>
          </div>

          {/* Right Red Pill Button (Softer shadow) */}
          <div className="relative z-10 shrink-0 self-start md:self-auto">
            <button
              onClick={() => onNavigate ? onNavigate('contact') : (window.location.hash = 'contact')}
              className="inline-flex items-center gap-3 px-9 py-4.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all duration-300 shadow-xl shadow-red-600/25 hover:shadow-red-600/35 group hover:scale-[1.03] cursor-pointer"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
