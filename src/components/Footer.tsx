import React from 'react';
import { ArrowUp, Github, Globe, Mail, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page;
    }
  };

  return (
    <footer className="border-t border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400 py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Zone: Reference Footer Architecture with Boosted Typography */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-neutral-100 dark:border-neutral-900">
          
          {/* Left: Brand Monogram & Name */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 text-left group"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black text-sm flex items-center justify-center tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              <span className="text-red-600 dark:text-red-600 text-base">C</span>
              <span>L</span>
            </div>
            <div>
              <div className="text-base font-extrabold text-neutral-950 dark:text-white leading-tight">
                Claudius <span className="text-red-600">Light</span>
              </div>
              <div className="text-xs sm:text-sm text-neutral-500 font-semibold">
                Web & Graphic Designer
              </div>
            </div>
          </button>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                  currentPage === link.id ? 'text-red-600 dark:text-red-500 font-bold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-3.5">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-2xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.currentPortfolioUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-2xs"
              title="Portfolio Live"
            >
              <Globe className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-2xs"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-2xs"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 ml-2 shadow-2xs"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Zone: Copyright & Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-500 font-medium">
          <div>
            © {new Date().getFullYear()} Claudius Light. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-semibold">
            <span>Designed with</span>
            <span className="text-red-600">❤️</span>
            <span>for a better web.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
