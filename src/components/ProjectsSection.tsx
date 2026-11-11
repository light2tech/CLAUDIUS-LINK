import React, { useState } from 'react';
import { ArrowRight, Play, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onTriggerDemo: (type: string) => void;
  onNavigate?: (page: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject, onTriggerDemo, onNavigate }) => {
  const [filter, setFilter] = useState<ProjectCategory>('all');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'concepts', label: 'CBT & Civic Tech' },
    { id: 'web', label: 'Web Development' },
    { id: 'graphics', label: 'Graphic Design' },
  ];

  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === filter);

  const handleCardClick = (project: Project) => {
    if (project.hasInteractiveDemo && project.demoType) {
      onTriggerDemo(project.demoType);
    } else {
      onSelectProject(project);
    }
  };

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-neutral-50/80 dark:bg-neutral-900/50 border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header: Exact Reference Pattern with Boosted Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-widest uppercase text-red-600 dark:text-red-500">
              MY PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
              A collection of my recent work, showcasing my skills in web design, CBT platforms, visual design, and creative problem solving.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* Filter buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-xs sm:text-sm shadow-xs overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-4 py-2 rounded-full font-bold transition-all whitespace-nowrap ${
                    filter === cat.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => onNavigate ? onNavigate('portfolio') : setFilter('all')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-600 hover:text-red-700 uppercase tracking-wider whitespace-nowrap py-2 cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4-Column Card Grid (Matching Reference Image with Richer Typography) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => handleCardClick(project)}
              className="group cursor-pointer bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 shadow-sm hover:shadow-2xl hover:border-red-600/60 dark:hover:border-red-500/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview in Rounded Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-neutral-950/15 group-hover:bg-neutral-950/35 transition-colors" />

                {project.hasInteractiveDemo && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md shadow-red-600/40">
                    <Play className="w-3 h-3 fill-white" />
                    <span>Run Demo</span>
                  </div>
                )}
              </div>

              {/* Title & Subtitle + Circular Red Arrow Button */}
              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="min-w-0 space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 dark:text-white group-hover:text-red-600 transition-colors truncate">
                    {project.title.split('—')[0].trim()}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 truncate font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Circular Arrow Button (Matches Reference) */}
                <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white text-neutral-500 dark:text-neutral-400 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 shadow-xs">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
