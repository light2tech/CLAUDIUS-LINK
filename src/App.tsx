import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ContactPage } from './pages/ContactPage';

// Modals & Interactive Sandboxes
import { InteractiveCbtModal } from './components/InteractiveCbtModal';
import { SmartWasteModal } from './components/SmartWasteModal';
import { GraphicDesignLightboxModal } from './components/GraphicDesignLightboxModal';
import { JambAssistantModal } from './components/JambAssistantModal';
import { CvViewerModal } from './components/CvViewerModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { Project } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('claudius_portfolio_theme');
      if (stored) return stored === 'dark';
      return false; // Default to clean light mode matching the reference landing page
    }
    return false;
  });

  // Multi-page navigation state
  const [currentPage, setCurrentPage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'portfolio', 'experience', 'contact'];
      if (validPages.includes(hash)) return hash;
    }
    return 'home';
  });

  // Modal triggers
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isCbtOpen, setIsCbtOpen] = useState(false);
  const [isWasteOpen, setIsWasteOpen] = useState(false);
  const [isGraphicsOpen, setIsGraphicsOpen] = useState(false);
  const [isJambOpen, setIsJambOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const isAnyModalOpen = isCvOpen || isCbtOpen || isWasteOpen || isGraphicsOpen || isJambOpen || selectedProject !== null;

  // Prevent background scroll when modal is active
  useEffect(() => {
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAnyModalOpen]);

  // Sync theme with dark class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('claudius_portfolio_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('claudius_portfolio_theme', 'light');
    }
  }, [darkMode]);

  // Synchronize hash changes (browser back/forward & anchor links)
  useEffect(() => {
    const syncPageFromHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'services', 'portfolio', 'experience', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      } else if (!hash) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', syncPageFromHash);
    return () => window.removeEventListener('hashchange', syncPageFromHash);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTriggerDemo = (type: string) => {
    switch (type) {
      case 'cbt':
        setIsCbtOpen(true);
        break;
      case 'waste':
        setIsWasteOpen(true);
        break;
      case 'graphics':
        setIsGraphicsOpen(true);
        break;
      case 'jamb':
        setIsJambOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCv={() => setIsCvOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Multi-Page Body Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onOpenCv={() => setIsCvOpen(true)}
            onSelectProject={(project) => setSelectedProject(project)}
            onTriggerDemo={handleTriggerDemo}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenCv={() => setIsCvOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onTriggerDemo={handleTriggerDemo}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(project) => setSelectedProject(project)}
            onTriggerDemo={handleTriggerDemo}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'experience' && (
          <ExperiencePage
            onOpenCv={() => setIsCvOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Interactive Sandboxes & Modal Overlays (Available Globally Across All Pages) */}
      <InteractiveCbtModal
        isOpen={isCbtOpen}
        onClose={() => setIsCbtOpen(false)}
      />

      <SmartWasteModal
        isOpen={isWasteOpen}
        onClose={() => setIsWasteOpen(false)}
      />

      <GraphicDesignLightboxModal
        isOpen={isGraphicsOpen}
        onClose={() => setIsGraphicsOpen(false)}
      />

      <JambAssistantModal
        isOpen={isJambOpen}
        onClose={() => setIsJambOpen(false)}
      />

      <CvViewerModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onTriggerDemo={handleTriggerDemo}
      />
    </div>
  );
}
