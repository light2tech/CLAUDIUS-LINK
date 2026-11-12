import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Play, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onTriggerDemo?: (type: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onTriggerDemo }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-2xl sm:rounded-3xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                Case Study · {project.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <span>{project.role}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-8">
          
          {/* Hero Media & Summary Split */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 aspect-[4/3] bg-neutral-950 flex items-center justify-center shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2"
              />
            </div>

            <div className="md:col-span-5 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-red-600 font-bold">
                  Executive Brief
                </span>
                <p className="text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.stats && (
                <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl space-y-2">
                  {project.stats.map((s, idx) => (
                    <div key={idx} className="flex justify-between text-xs sm:text-sm">
                      <span className="text-neutral-500 font-medium">{s.label}:</span>
                      <span className="font-bold text-neutral-900 dark:text-neutral-100">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2.5 pt-1">
                {project.hasInteractiveDemo && project.demoType && onTriggerDemo && (
                  <button
                    onClick={() => {
                      onClose();
                      onTriggerDemo(project.demoType!);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{project.demoType === 'graphics' ? 'Open Gallery (6 Works)' : 'Launch Live Prototype'}</span>
                  </button>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 border border-neutral-300 dark:border-neutral-700"
                  >
                    <span>View V1 Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 border border-neutral-300 dark:border-neutral-700"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Problem, Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm">
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-neutral-400 dark:bg-neutral-600 inline-block" />
                <span>The Challenge & Context</span>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-xs sm:text-sm">
                {project.caseStudy.challenge}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600 inline-block" />
                <span>Engineered Solution</span>
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-xs sm:text-sm">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Deliverables & Key Outcomes */}
          <div className="space-y-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              Key Deliverables & Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.caseStudy.deliverables.map((d, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-700 dark:text-neutral-300 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Tools & Technologies Utilized:
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-700 dark:text-neutral-300 font-mono">
              {project.caseStudy.technologies.map((tech, idx) => (
                <span key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-none inline-block" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>Case Study Portfolio System</span>
          <button
            onClick={onClose}
            className="hover:text-neutral-950 dark:hover:text-white uppercase font-semibold text-[11px]"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
