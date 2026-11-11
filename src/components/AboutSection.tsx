import React from 'react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenCv: () => void;
  onNavigate?: (page: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCv, onNavigate }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait with Floating Badge & Cursive Annotation */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-end justify-center">
              
              {/* Red Curved Accent Blob / Card Behind the Image (Reduced density) */}
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-gradient-to-br from-red-600/80 to-red-500/70 rounded-3xl -z-10 shadow-md shadow-red-600/15" />

              {/* Decorative Subtle Dot Grid */}
              <div className="hidden sm:grid absolute -top-8 -right-8 grid-cols-4 gap-2.5 opacity-40 pointer-events-none">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-red-600" />
                ))}
              </div>

              {/* Photo Container: Transparent Cutout without background box */}
              <div className="w-full h-full flex items-end justify-center rounded-3xl overflow-hidden relative">
                {/* Soft backdrop curve */}
                <div className="absolute inset-x-2 bottom-0 top-12 bg-neutral-100/80 dark:bg-neutral-900/60 rounded-3xl -z-10" />
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] select-none transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Top-Left Handwritten Script Doodle: "Creative Thinker" */}
              <div className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-xl px-4 py-2 rounded-2xl transform -rotate-6 select-none z-10">
                <div className="font-script text-3xl sm:text-4xl text-neutral-950 dark:text-white font-bold leading-tight">
                  Creative <br />
                  <span className="text-red-600">Thinker</span>
                </div>
                {/* Curved Arrow Vector pointing to photo */}
                <svg className="w-9 h-9 text-red-600 absolute -bottom-6 right-2 transform rotate-12" viewBox="0 0 40 40" fill="none">
                  <path d="M5 5 C 10 25, 20 28, 32 30 M 25 22 L 34 31 L 22 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Bottom-Left Floating Badge: "2+ Years of Experience" */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-7 sm:-left-6 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 shadow-2xl rounded-2xl p-4 sm:p-5 flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono text-neutral-950 dark:text-white leading-none">
                    2+
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mt-1">
                    Years of Experience
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio Copy & 3-Column Stats (Boosted Font Sizes) */}
          <div className="lg:col-span-7 space-y-7">
            
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-500">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
                I'm Claudius Light <br />
                <span className="text-red-600">Web & Graphic Designer</span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-200 leading-relaxed font-normal">
              I'm a passionate digital professional with 2+ years of experience in creating modern and user-friendly digital experiences. I love turning complex problems into simple, elegant designs and accessible web layouts.
            </p>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Currently studying Computer Science at Taraba State University, Jalingo, my goal is to craft meaningful digital experiences that connect users with organizations and help businesses grow. With extensive work across NIFES Light Media and independent student advisory, I bring both technical precision and visual empathy to every engagement.
            </p>

            {/* 3-Column Stats Row (Bigger, more striking) */}
            <div className="grid grid-cols-3 gap-6 pt-4 pb-4 border-y border-neutral-200/80 dark:border-neutral-800">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white font-mono tracking-tight">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
                  Years Experience
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white font-mono tracking-tight">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
                  Projects Completed
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white font-mono tracking-tight">
                  100+
                </div>
                <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-semibold">
                  Happy Clients & Students
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onNavigate ? onNavigate('contact') : (window.location.hash = 'contact')}
                className="inline-flex items-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-2xl hover:shadow-red-600/40 group hover:scale-[1.02] cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
