import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Download, FileText, CheckCircle2, GraduationCap, Briefcase, Heart, Target, Lightbulb, Users } from 'lucide-react';

interface AboutPageProps {
  onOpenCv: () => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCv, onNavigate }) => {
  const values = [
    {
      title: 'Clarity Over Clutter',
      desc: 'Whether designing a church banner or a student platform, visual hierarchy and readable typography always come first.',
      icon: Target,
    },
    {
      title: 'Real Practical Problem Solving',
      desc: 'Technology is only valuable when it solves concrete human challenges—from simplifying JAMB registrations to building civic waste concepts.',
      icon: Lightbulb,
    },
    {
      title: 'Community & Faith-Driven Impact',
      desc: 'Deeply committed to empowering fellow students and fellowship ministries with high-standard digital publicity.',
      icon: Heart,
    },
    {
      title: 'Continuous Technical Evolution',
      desc: 'Currently studying Computer Science at Taraba State University, constantly upgrading from vanilla code to modern architectures.',
      icon: Users,
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Page Header / Hero Banner */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span>HOME / ABOUT CLAUDIUS LIGHT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Passionate about purposeful design, clean code, and community empowerment.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            A look into my journey as a Web Designer, Graphic Designer, and Computer Science undergraduate based in Jalingo, Taraba State, Nigeria.
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo & Highlights Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] flex items-end justify-center">
              
              {/* Red geometric angled polygon background */}
              <div 
                className="absolute right-0 top-10 bottom-0 w-4/5 bg-red-600 rounded-3xl -z-10 shadow-2xl shadow-red-600/30"
                style={{
                  clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)',
                }}
              />
              <div className="absolute inset-x-2 bottom-0 top-12 bg-neutral-100/80 dark:bg-neutral-900/60 rounded-3xl -z-20" />

              {/* The Transparent Cutout of Claudius Light */}
              <img
                src={PERSONAL_INFO.profileImage}
                alt="Claudius Light"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.3)] dark:drop-shadow-[0_20px_45px_rgba(0,0,0,0.8)] select-none"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-2xl p-4 sm:p-5 flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold shadow-md shadow-red-600/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-950 dark:text-white">
                    Taraba State University
                  </div>
                  <div className="text-xs text-neutral-500 font-medium">
                    B.Sc. Computer Science (Undergraduate)
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white">
              My Journey & Professional Story
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              My name is <strong>Claudius Light</strong> (Nsame Claudius Ngenge). For over two years, I have worked at the intersection of visual communication, front-end web design, and community digital support.
            </p>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              As a core member of <strong>NIFES Light Media</strong> at Taraba State University, Jalingo, I spearhead event graphics, weekly Sunday livestream broadcasts on Facebook Live, and publicity materials that reach thousands of student worshippers. That experience taught me how to work under tight deadlines, command visual attention, and communicate messages clearly across digital feeds.
            </p>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Concurrently, through my independent tech practice and commercial label <strong>Firm Hand Shake</strong>, I have helped over 100 students successfully navigate online JAMB registration, university admission portals, and academic document verification, turning confusing institutional systems into seamless experiences.
            </p>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-lg shadow-red-600/30 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 hover:border-red-600 rounded-full transition-all"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>

        </div>

        {/* Core Principles & Philosophy */}
        <div className="space-y-10 pt-8 border-t border-neutral-200/80 dark:border-neutral-800">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white">
              Principles That Guide My Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-7 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl space-y-3.5 shadow-xs hover:border-red-600/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                    {v.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Academic Foundation */}
        <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              EDUCATION & QUALIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Academic Background & Technical Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Currently Studying</span>
                <span className="text-red-500 font-bold">Undergraduate</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Taraba State University, Jalingo
              </h3>
              <p className="text-sm text-red-400 font-semibold">
                Bachelor of Science (B.Sc.) in Computer Science
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Core coursework in software design, algorithms, web programming, networking fundamentals, and database concepts.
              </p>
            </div>

            <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-2xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Graduated</span>
                <span className="text-emerald-400 font-bold">Certified</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Government Day Secondary School, Magami
              </h3>
              <p className="text-sm text-red-400 font-semibold">
                Senior Secondary School Certificate (SSCE)
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Completed secondary education with strong analytical and computing foundations, active in student science clubs.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
