import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCv: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenCv,
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'experience', name: 'Experience' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 dark:border-neutral-800/80 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-6">
        
        {/* Left: Brand Monogram & Name (Navigates to Home) */}
        <button 
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3.5 shrink-0 group py-1 text-left"
        >
          {/* Stylized Monogram Badge CL */}
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-black text-base flex items-center justify-center tracking-tighter shadow-md group-hover:scale-105 group-hover:shadow-red-600/20 transition-all duration-300">
            <span className="text-red-600 dark:text-red-600 text-lg">C</span>
            <span>L</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
              Claudius <span className="text-red-600">Light</span>
            </span>
            <span className="text-xs sm:text-[13px] font-semibold text-neutral-500 dark:text-neutral-400 tracking-wide">
              Web & Graphic Designer
            </span>
          </div>
        </button>

        {/* Center: Multi-Page Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-base lg:text-[17px] font-semibold text-neutral-700 dark:text-neutral-300">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative py-2 transition-colors hover:text-red-600 dark:hover:text-red-500 font-medium ${
                  isActive ? 'text-red-600 dark:text-red-500 font-bold' : ''
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-1 bg-red-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Download CV Pill Button + Dark Mode Toggle */}
        <div className="flex items-center gap-3.5 shrink-0">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors border border-neutral-200 dark:border-neutral-800"
          >
            {darkMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-neutral-800" />}
          </button>

          <button
            onClick={onOpenCv}
            className="hidden sm:inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold tracking-wide text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all shadow-md hover:shadow-lg hover:shadow-red-600/30 whitespace-nowrap group hover:scale-[1.02]"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2.5 text-neutral-700 dark:text-neutral-300 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 px-5 pt-4 pb-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2.5 text-base font-semibold rounded-xl transition-colors text-left ${
                  currentPage === link.id
                    ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold'
                    : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800">
            <button
              onClick={() => {
                onOpenCv();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-full shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download CV (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
