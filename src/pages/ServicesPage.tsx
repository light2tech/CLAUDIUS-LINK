import React, { useState } from 'react';
import { Code, Palette, Radio, GraduationCap, ArrowRight, CheckCircle2, Calculator, MessageSquare, Mail, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onTriggerDemo: (type: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onTriggerDemo }) => {
  const [selectedService, setSelectedService] = useState('web');
  const [urgency, setUrgency] = useState('standard');
  const [needsLogo, setNeedsLogo] = useState(false);
  const [needsMobileResponsive, setNeedsMobileResponsive] = useState(true);

  const services = [
    {
      id: 'web',
      title: 'Web Design & Front-End Development',
      badge: 'Core Service',
      summary: 'Crafting responsive, high-performance web pages structured with semantic HTML5, modern CSS3/Tailwind, and interactive JavaScript.',
      icon: Code,
      deliverables: [
        'Mobile-first responsive design adapted for smartphones, tablets, and desktops',
        'Clean semantic HTML5 structure with SEO and accessibility foundations',
        'Interactive JavaScript components (timers, forms, calculators, modals)',
        'Deployment to modern web hosting platforms (Vercel, GitHub Pages, Netlify)',
        'Cross-browser compatibility testing and speed optimization',
      ],
      idealFor: 'Small businesses, personal portfolios, educational concepts, and campus organizations.',
      demoTrigger: 'cbt',
      demoLabel: 'Test Web Simulator (Puls Nigeria)',
    },
    {
      id: 'graphics',
      title: 'Graphic Design & Visual Brand Collateral',
      badge: 'High Demand',
      summary: 'Creating high-impact event flyers, conference banners, formal certificates, and brand emblems with Canva Pro and design tools.',
      icon: Palette,
      deliverables: [
        'Event posters & church fellowship conference flyers (WhatsApp Status & Instagram format)',
        'Large-format roll-up stage banners (3ft × 7ft) in print-ready CMYK',
        'Official certificates of achievement and leadership recognition',
        'Brand identities, modern logos (such as Firm Handshake), and social kits',
        'High-resolution PNG, JPG, and print-certified PDF deliverables',
      ],
      idealFor: 'Fellowship ministries, church conferences, events, weddings, and local brand promotions.',
      demoTrigger: 'graphics',
      demoLabel: 'View Graphic Design Gallery (6 Works)',
    },
    {
      id: 'media',
      title: 'Digital Media & Live Streaming Production',
      badge: 'Fellowship Media',
      summary: 'Managing end-to-end digital publicity campaigns and live streaming broadcasts on Facebook Live for university fellowships and conferences.',
      icon: Radio,
      deliverables: [
        'Facebook Live setup, audio verification, and video broadcast monitoring',
        'Lower-third stream overlays, event slides, and scripture title cards',
        'Digital publicity campaigns and social content calendar planning',
        'Real-time livestream moderation and audience question handling',
      ],
      idealFor: 'Campus fellowships (NIFES), weekly church services, seminars, and live webinars.',
    },
    {
      id: 'tech_support',
      title: 'Academic IT Support & Student Portals',
      badge: 'Community Advisory',
      summary: 'Providing empathetic, hands-on guidance for prospective and current university students navigating online admissions, JAMB, and portals.',
      icon: GraduationCap,
      deliverables: [
        'JAMB UTME profile code generation assistance (SMS 55019 / 66019)',
        'O’Level WAEC/NECO result upload checking on the official JAMB CAPS portal',
        'Taraba State University applicant portal navigation and fee invoice generation',
        'Subject combination verification for science, arts, and social science faculties',
        'Biometric registration center advisory and error diagnostics',
      ],
      idealFor: 'University aspirants, secondary school leavers, and first-time online portal users.',
      demoTrigger: 'jamb',
      demoLabel: 'Launch JAMB Assistant Guide',
    },
  ];

  // Quick estimator calculation
  const getEstimatedTimeline = () => {
    if (selectedService === 'graphics') {
      return urgency === 'express' ? '24 Hours' : '2 - 3 Days';
    }
    if (selectedService === 'web') {
      return urgency === 'express' ? '3 - 5 Days' : '1 - 2 Weeks';
    }
    if (selectedService === 'tech_support') {
      return 'Same Day Assistance';
    }
    return urgency === 'express' ? '48 Hours' : '3 - 5 Days';
  };

  const activeServiceObj = services.find((s) => s.id === selectedService) || services[0];

  const handleLaunchQuote = () => {
    const briefText = `Hello Claudius Light,\n\nI would like to inquire about: ${activeServiceObj.title}\nTimeline Needed: ${getEstimatedTimeline()}\nUrgency: ${urgency}\n\nPlease share your availability and quote.`;
    const encoded = encodeURIComponent(briefText);
    window.location.href = `${PERSONAL_INFO.whatsappUrl}?text=${encoded}`;
  };

  return (
    <div className="py-12 sm:py-16 md:py-20 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span>HOME / SERVICES & CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Specialized services tailored for digital impact.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            From responsive front-end websites and high-impact conference graphics to live streaming broadcasting and student portal advisory.
          </p>
        </div>

        {/* 4 Main Services Detailed Grid */}
        <div className="space-y-12">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={service.id}
                className={`p-8 sm:p-12 bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Left/Main Column: Content */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-500 font-bold">
                        {service.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white leading-snug">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.summary}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      Standard Deliverables:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal for */}
                  <div className="pt-2 text-xs text-neutral-500 font-medium">
                    <strong className="text-neutral-900 dark:text-neutral-200">Recommended For:</strong> {service.idealFor}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-md shadow-red-600/30"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {service.demoTrigger && (
                      <button
                        onClick={() => onTriggerDemo(service.demoTrigger!)}
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 rounded-full transition-all border border-neutral-300 dark:border-neutral-700"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-red-600" />
                        <span>{service.demoLabel}</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Visual Box / Context Preview */}
                <div className="lg:col-span-5 p-7 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-4">
                  <div className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                    Service Standards
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm font-bold text-neutral-900 dark:text-white">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span>Fast Turnaround & Rapid Updates</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-neutral-900 dark:text-white">
                      <ShieldCheck className="w-4 h-4 text-red-600" />
                      <span>Quality & Revision Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-bold text-neutral-900 dark:text-white">
                      <MessageSquare className="w-4 h-4 text-red-600" />
                      <span>Direct WhatsApp & Call Communication</span>
                    </div>
                  </div>
                  <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 rounded-xl text-xs text-red-700 dark:text-red-300 font-medium">
                    Led personally by Claudius Light with attention to detail and clean brand fidelity.
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Scope & Quote Estimator */}
        <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-3xl space-y-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">
              INSTANT ESTIMATOR
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Plan Your Project & Get an Instant WhatsApp Quote
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl">
              Select your required service and urgency to calculate the typical turnaround timeline and initiate a direct project discussion with Claudius Light.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
            
            {/* Options */}
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                  Select Required Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 text-left rounded-xl border text-xs font-bold transition-all ${
                        selectedService === s.id
                          ? 'border-red-600 bg-red-600/20 text-white shadow-xs'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {s.title.split('&')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                  Project Urgency & Delivery Pace
                </label>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`flex-1 p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      urgency === 'standard'
                        ? 'border-red-600 bg-red-600/20 text-white'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    Standard Pace
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('express')}
                    className={`flex-1 p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      urgency === 'express'
                        ? 'border-red-600 bg-red-600/20 text-white'
                        : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                    }`}
                  >
                    ⚡ Fast / Urgent (24-48h)
                  </button>
                </div>
              </div>
            </div>

            {/* Quote Summary Box */}
            <div className="p-7 bg-neutral-900 border border-neutral-800 rounded-2xl space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>Estimated Turnaround</span>
                <span className="text-red-500 font-bold uppercase">{urgency}</span>
              </div>
              <div className="text-3xl font-black text-white font-mono">
                {getEstimatedTimeline()}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Project inquiries are evaluated quickly. You will receive transparent pricing and direct timeline confirmation.
              </p>
              <button
                onClick={handleLaunchQuote}
                className="w-full py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-xl shadow-red-600/40 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Brief via WhatsApp (+234 7041159686)</span>
              </button>
            </div>

          </div>
        </div>

        {/* 4-Step Process Section */}
        <div className="space-y-8 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white">
              How We Work Together
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery & Brief',
                desc: 'We discuss your goals, audience, event details, or web specifications.',
              },
              {
                step: '02',
                title: 'Concepts & Design',
                desc: 'I produce the initial visual direction, wireframes, or prototype.',
              },
              {
                step: '03',
                title: 'Review & Polish',
                desc: 'We fine-tune typography, colors, and layout until you are 100% satisfied.',
              },
              {
                step: '04',
                title: 'Final Delivery & Launch',
                desc: 'Deliver print-ready files, live deployment, or verified portal documentation.',
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl space-y-3"
              >
                <div className="text-2xl font-black text-red-600 font-mono">
                  {p.step}
                </div>
                <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
