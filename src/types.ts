export type ProjectCategory = 'all' | 'web' | 'concepts' | 'graphics' | 'tech_support';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  tags: string[];
  description: string;
  image: string;
  featured?: boolean;
  role: string;
  year: string;
  stats?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  hasInteractiveDemo?: boolean;
  demoType?: 'cbt' | 'waste' | 'graphics' | 'jamb';
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    deliverables: string[];
    technologies: string[];
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'work' | 'education' | 'independent';
  bullets: string[];
  keyHighlights?: string[];
}

export interface SkillCategory {
  title: string;
  discipline: string;
  summary: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}
