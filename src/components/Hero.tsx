import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, MessageSquare, ArrowDown, Check, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCv: () => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Typewriter effect on the name "Claudius Light"
  const fullName = 'Claudius Light';
  const [displayedName, setDisplayedName] = useState('');
  const [isDeletingName, setIsDeletingName] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      if (!isDeletingName) {
        if (displayedName.length < fullName.length) {
          setDisplayedName(fullName.slice(0, displayedName.length + 1));
        } else {
          // Pause for 5.5s once fully typed so name remains prominent
          timer = setTimeout(() => {
            setIsDeletingName(true);
          }, 5500);
          return;
        }
      } else {
        if (displayedName.length > 0) {
          setDisplayedName(fullName.slice(0, displayedName.length - 1));
        } else {
          // Pause briefly after deleting before typing again
          setIsDeletingName(false);
          timer = setTimeout(() => {}, 450);
          return;
        }
      }
    };

    const speed = isDeletingName ? 45 : 100;
    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayedName, isDeletingName]);

  // Split into "Claudius " (black/white) and "Light" (red accent)
  const firstPart = displayedName.length <= 9 ? displayedName : displayedName.slice(0, 9);
  const secondPart = displayedName.length > 9 ? displayedName.slice(9) : '';

  // Typewriter effect on the role: "Web & Graphic Designer" and key disciplines
  const roles = [
    'Web & Graphic Designer',
    'Front-End Web Developer',
    'Graphic & Print Designer',
    'Digital Media Specialist',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];

    const handleRoleTyping = () => {
      if (!isDeletingRole) {
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
        } else {
          // Pause for 3.2s once role is fully typed
          timer = setTimeout(() => {
            setIsDeletingRole(true);
          }, 3200);
          return;
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          // Move to next role
          setIsDeletingRole(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          timer = setTimeout(() => {}, 400);
          return;
        }
      }
    };

    const speed = isDeletingRole ? 35 : 80;
    timer = setTimeout(handleRoleTyping, speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeletingRole, roleIndex]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section id="home" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-600/5 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typographic Details */}
          <div className="lg:col-span-6 space-y-7 z-10">
            
            {/* Greeting Tag & Location Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-900/40">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span>HELLO, I'M</span>
              </span>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Taraba State, Nigeria</span>
              </div>
            </div>

            {/* Main Heading: Claudius Light with Typewriter Feature */}
            <div className="space-y-2">
              <h1
                aria-label="Claudius Light"
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.08] min-h-[1.12em] flex items-baseline flex-wrap"
              >
                <span>{firstPart}</span>
                {secondPart && <span className="text-red-600">{secondPart}</span>}
                <span
                  className="inline-block w-1.5 sm:w-2 lg:w-2.5 h-[0.78em] bg-red-600 ml-1.5 translate-y-[2px] animate-pulse rounded-2xs"
                  aria-hidden="true"
                />
              </h1>
              <h2
                aria-label="Web & Graphic Designer"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-800 dark:text-neutral-200 tracking-tight min-h-[1.25em] flex items-baseline flex-wrap"
              >
                <span>{displayedRole}</span>
                <span
                  className="inline-block w-1 sm:w-1.5 h-[0.78em] bg-red-600 ml-1.5 translate-y-[1px] animate-pulse rounded-2xs"
                  aria-hidden="true"
                />
              </h2>
            </div>

            {/* Enhanced Lead Paragraph (Larger Font Size for high legibility) */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl font-normal">
              I'm a creative digital professional based in Nigeria, passionate about crafting intuitive web layouts, impactful visual communications, and student-focused platforms that make a real impact.
            </p>

            {/* Action Buttons (More prominent, generous size) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate ? onNavigate('portfolio') : (window.location.hash = 'portfolio')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 group hover:scale-[1.02] cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate ? onNavigate('contact') : (window.location.hash = 'contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 hover:border-red-600 dark:hover:border-red-500 rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] cursor-pointer"
              >
                <span>Hire Me</span>
                <Mail className="w-4 h-4 text-red-600" />
              </button>
            </div>

            {/* Social Icons Row + Direct Email Copy */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xs"
                  title="GitHub @light2tech"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>

                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-neutral-300 dark:border-neutral-700 flex items-center justify-center hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-xs"
                  title="WhatsApp Chat"
                >
                  <MessageSquare className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* One-click email copy pill with toast feedback */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all text-neutral-700 dark:text-neutral-300"
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="font-mono text-emerald-600 font-bold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-red-600" />
                    <span className="font-mono">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Graphic with Red Angular Polygon (Matches Reference) */}
          <div className="lg:col-span-6 relative flex justify-center items-end min-h-[500px] sm:min-h-[580px] lg:min-h-[620px]">
            
            {/* The Graphic Composition Container */}
            <div className="relative w-full max-w-md sm:max-w-lg flex items-end justify-center">
              
              {/* Soft Light-Grey/Dark Curved Backdrop */}
              <div className="absolute right-0 top-10 bottom-0 w-4/5 rounded-t-[120px] rounded-b-3xl bg-neutral-100/80 dark:bg-neutral-900/70 -z-20 pointer-events-none" />

              {/* Red Angled Geometric Polygon / Shield (Reduced density for softer, elegant balance) */}
              <div 
                className="absolute right-0 top-14 bottom-4 w-3/5 bg-gradient-to-br from-red-600/75 via-red-500/70 to-red-600/65 rounded-3xl transform skew-y-3 shadow-xl shadow-red-600/15 -z-10 backdrop-blur-xs"
                style={{
                  clipPath: 'polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              />

              {/* Soft Red Ambient Radial Glow (Lighter density) */}
              <div className="absolute top-10 right-4 w-40 h-40 bg-red-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* The Transparent Cutout Image of Claudius with Natural Drop Shadow */}
              <div className="relative z-0 flex items-end justify-center w-full">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-auto h-[460px] sm:h-[540px] lg:h-[580px] max-w-full object-contain object-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)] select-none transition-transform duration-500 hover:scale-[1.015]"
                />
              </div>


              {/* Floating Polish Badge 2 (Bottom Right): Experience */}
              <div className="absolute bottom-6 -right-2 sm:-right-4 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-xl px-4 py-2.5 rounded-2xl flex items-center gap-3 z-20 select-none animate-in fade-in slide-in-from-right duration-700">
                <div className="w-8 h-8 rounded-xl bg-red-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-red-600/30">
                  2+
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-950 dark:text-white leading-tight">
                    Years Experience
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium">
                    NIFES & Freelance
                  </div>
                </div>
              </div>

            </div>

            {/* Vertical Scroll Down Indicator on Far Right */}
            <div className="hidden xl:flex absolute -right-14 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase select-none">
              <span className="[writing-mode:vertical-lr]">Scroll Down</span>
              <div className="w-[1px] h-10 bg-neutral-300 dark:bg-neutral-700" />
              <ArrowDown className="w-4 h-4 text-red-600 animate-bounce" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
