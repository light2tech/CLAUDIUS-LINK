import React from 'react';
import { Hero } from '../components/Hero';
import { SkillsBarSection } from '../components/SkillsBarSection';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { CtaBanner } from '../components/CtaBanner';
import { Project } from '../types';
import { ArrowRight, Code, Palette, Radio, GraduationCap, CheckCircle2 } from 'lucide-react';

interface HomePageProps {
  onOpenCv: () => void;
  onSelectProject: (project: Project) => void;
  onTriggerDemo: (type: string) => void;
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenCv,
  onSelectProject,
  onTriggerDemo,
  onNavigate,
}) => {
  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      {/* 1. Hero Section */}
      <Hero onOpenCv={onOpenCv} onNavigate={onNavigate} />

      {/* 2. My Skills Bar Section */}
      <SkillsBarSection onOpenCv={onOpenCv} onNavigate={onNavigate} />

      {/* 3. About Me Section */}
      <AboutSection onOpenCv={onOpenCv} onNavigate={onNavigate} />

      {/* Quick Services Preview Strip */}
      <section className="py-16 bg-neutral-100/70 dark:bg-neutral-900/40 border-y border-neutral-200/80 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                WHAT I OFFER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white mt-1">
                Comprehensive Digital & Visual Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700 uppercase tracking-wider self-start md:self-auto group"
            >
              <span>Explore All Services & Pricing Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Web Design & Front-End',
                desc: 'Responsive, mobile-first websites structured with clean HTML5, CSS3, and interactive JavaScript.',
                icon: Code,
              },
              {
                title: 'Graphic & Print Design',
                desc: 'Eye-catching event flyers, stage banners, logos, wedding stationery, and social media assets.',
                icon: Palette,
              },
              {
                title: 'Live Streaming & Media',
                desc: 'Facebook Live multi-camera audio/video broadcast management for fellowship and conferences.',
                icon: Radio,
              },
              {
                title: 'Academic IT Support',
                desc: 'JAMB profile code generation, admission portal verification, and student online troubleshooting.',
                icon: GraduationCap,
              },
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  onClick={() => onNavigate('services')}
                  className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-xs hover:shadow-xl hover:border-red-600/50 dark:hover:border-red-500/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-red-600">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <ProjectsSection
        onSelectProject={onSelectProject}
        onTriggerDemo={onTriggerDemo}
        onNavigate={onNavigate}
      />

      {/* 5. Got a Project in Mind? CTA Banner */}
      <CtaBanner onNavigate={onNavigate} />
    </div>
  );
};
