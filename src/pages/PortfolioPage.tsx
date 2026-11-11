import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ComparisonSection } from '../components/ComparisonSection';
import { Play, ArrowRight, ExternalLink, Github, Eye, Sparkles, Image as ImageIcon } from 'lucide-react';

interface PortfolioPageProps {
  onSelectProject: (project: Project) => void;
  onTriggerDemo: (type: string) => void;
  onNavigate: (page: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onTriggerDemo,
  onNavigate,
}) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'concepts', label: 'CBT & Civic Tech' },
    { id: 'graphics', label: 'Graphic Design' },
    { id: 'tech_support', label: 'Academic & IT Support' },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const realFlyers = [
    {
      title: 'Spread the Gospel — Movement Flyer',
      org: 'NIFES TSU Jalingo',
      src: '/assets/aistudio/Follow__Subscribe__Engage__Spread_the_Gospel_f99e98b3.png',
    },
    {
      title: 'Firm Hand Shake — Design Services Showcase',
      org: 'Firm Hand Shake Studio',
      src: '/assets/aistudio/Firm_Hand_Shake_Services_a93a2857.jpg',
    },
    {
      title: 'Firm Handshake — Web Design Flyer',
      org: 'Digital Services',
      src: '/assets/aistudio/Firm_Handshake_Web_Design_5d7bbe67.png',
    },
    {
      title: 'Prayer Meeting Thursday Flyer',
      org: 'NIFES TSU Jalingo',
      src: '/assets/aistudio/Green_and_White_Church_Event_Instagram_Post_b3985e08.png',
    },
    {
      title: 'Revelation Philip Birthday Flyer',
      org: 'Editorial Portrait',
      src: '/assets/aistudio/Revelation_Philip_birthday_flyer_367e69e2.png',
    },
    {
      title: 'FIRM Handshake — Community Logo',
      org: 'Brand Identity',
      src: '/assets/aistudio/FIRM_Handshake_Community_Logo_d0b79794.png',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 animate-in fade-in duration-300 space-y-16 sm:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span>HOME / PORTFOLIO & WORKS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Curated projects, interactive prototypes & visual campaigns.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Explore functional CBT exam simulators, civic waste management systems, university registration helpers, and live graphic design collateral created by Claudius Light.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  filter === cat.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono font-bold text-neutral-500">
            Showing {filteredProjects.length} Selected Projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project, idx) => {
            const isWide = idx === 0 || (idx === 1 && filteredProjects.length <= 2);
            return (
              <div
                key={project.id}
                className={`bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:border-red-600/50 dark:hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group ${
                  isWide ? 'lg:col-span-8' : 'lg:col-span-4'
                }`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/35 transition-colors" />

                  {project.hasInteractiveDemo && (
                    <button
                      onClick={() => onTriggerDemo(project.demoType!)}
                      className="absolute top-3.5 left-3.5 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-red-600/40 hover:bg-red-700 transition-colors"
                    >
                      <Play className="w-3 h-3 fill-white" />
                      <span>{project.demoType === 'graphics' ? 'Open Gallery (6 Works)' : 'Live Interactive Demo'}</span>
                    </button>
                  )}

                  <div className="absolute top-3.5 right-3.5 bg-black/70 backdrop-blur-xs text-white text-xs font-mono font-bold px-2.5 py-1 rounded-md">
                    {project.year}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400">
                      <span>{project.role}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono text-red-600 dark:text-red-400 font-bold">{project.tags[0]}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights if wide */}
                  {isWide && project.stats && (
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                      {project.stats.map((s, i) => (
                        <div key={i}>
                          <div className="text-xs text-neutral-400 font-medium">{s.label}</div>
                          <div className="text-sm font-bold font-mono text-neutral-900 dark:text-white truncate">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-950 dark:text-white hover:text-red-600 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.hasInteractiveDemo && (
                        <button
                          onClick={() => onTriggerDemo(project.demoType!)}
                          className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30 flex items-center gap-1.5"
                        >
                          <Play className="w-3 h-3 fill-white" />
                          <span>Launch</span>
                        </button>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                          title="View Live Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                          title="GitHub Source"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Real Graphic Design Flyers Showcase Strip */}
      <section className="bg-neutral-100/70 dark:bg-neutral-900/40 py-16 sm:py-20 border-y border-neutral-200/80 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
                VISUAL IDENTITY & PRINT FLYERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white">
                Live Graphic Design Showcase (6 Real Works)
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-xl">
                Click any flyer to open the interactive high-resolution lightbox with design specifications, dimensions, and tools used.
              </p>
            </div>

            <button
              onClick={() => onTriggerDemo('graphics')}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30 self-start md:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>Open Lightbox Gallery</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {realFlyers.map((flyer, idx) => (
              <div
                key={idx}
                onClick={() => onTriggerDemo('graphics')}
                className="group cursor-pointer bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xs hover:shadow-xl hover:border-red-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] bg-neutral-950 overflow-hidden flex items-center justify-center">
                  <img
                    src={flyer.src}
                    alt={flyer.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      View
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="text-xs font-bold text-neutral-950 dark:text-white truncate">
                    {flyer.title}
                  </div>
                  <div className="text-[11px] text-neutral-400 truncate">
                    {flyer.org}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio V1 vs V2 Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ComparisonSection />
      </div>
    </div>
  );
};
