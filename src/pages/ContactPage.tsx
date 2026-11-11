import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ExternalLink, MapPin, ChevronDown, ChevronUp, Clock, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design Project',
    timeline: 'Standard (3-5 days)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio Brief] ${formData.service} from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Client Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nDesired Timeline: ${formData.timeline}\n\nProject Scope & Details:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const faqs = [
    {
      q: 'How quickly can you deliver a graphic design flyer or banner?',
      a: 'For urgent church announcements, birthday flyers, or social media posters, turnaround can be as fast as 24 to 48 hours. Larger multi-format conference campaigns (roll-up banners, certificates, and social kits) typically take 3 to 5 days.',
    },
    {
      q: 'What technologies do you use for web design projects?',
      a: 'I specialize in clean HTML5 semantic markup, modern CSS3 with Tailwind CSS for high performance, and modern JavaScript (ES6+) for interactive logic and state management. I deploy fast, accessible, mobile-first websites on platforms like Vercel and GitHub.',
    },
    {
      q: 'How does your academic IT & JAMB assistance work?',
      a: 'I provide step-by-step guidance for JAMB UTME candidates—generating profile codes via SMS (55019/66019), reviewing correct subject combinations for your chosen course, checking O’Level uploads on the JAMB CAPS portal, and troubleshooting registration center errors.',
    },
    {
      q: 'Are you available for remote freelance collaborations?',
      a: 'Yes! While I am based in Jalingo, Taraba State, I regularly collaborate with clients, fellowship branches, and teams across Nigeria and internationally via WhatsApp, email, and Google Meet.',
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 animate-in fade-in duration-300 space-y-16 sm:space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span>HOME / GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
            Let’s start something impactful together.
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
            Have a project in mind, need a conference flyer, want to build a website, or need student portal support? Reach out directly to Claudius Light.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl space-y-6 shadow-sm">
              <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                Direct Channels
              </h2>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold mb-0.5">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-bold text-neutral-950 dark:text-white hover:text-red-600 font-mono transition-colors text-base"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold mb-0.5">
                      Phone & WhatsApp Call
                    </span>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="font-bold text-neutral-950 dark:text-white font-mono hover:text-red-600 transition-colors text-base"
                      >
                        {PERSONAL_INFO.phoneDisplay}
                      </a>
                      <button
                        onClick={handleCopyPhone}
                        className="text-xs text-neutral-500 hover:text-neutral-950 dark:hover:text-white font-mono underline font-medium"
                      >
                        {copiedPhone ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <div className="mt-2">
                      <a
                        href={PERSONAL_INFO.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-red-600 hover:text-red-700 font-bold hover:underline"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Chat directly on WhatsApp (+234 7041159686)</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Operating Base */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold mb-0.5">
                      Location & Community
                    </span>
                    <span className="font-bold text-neutral-950 dark:text-white text-base">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-neutral-500 block text-xs sm:text-sm mt-0.5">
                      Taraba State University Campus, Jalingo
                    </span>
                  </div>
                </div>
              </div>

              {/* Working Hours & Availability */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2 font-bold text-neutral-800 dark:text-neutral-200">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>Availability: Monday – Saturday (8:00 AM – 9:00 PM WAT)</span>
                </div>
                <p>
                  Urgent fellowship and exam registration inquiries are typically responded to within 1 hour.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl space-y-6 shadow-sm">
              <h2 className="text-lg font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                Send a Project Brief to Claudius Light
              </h2>

              {submitted ? (
                <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-950/50 text-red-600 rounded-full mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                    Mail Client Triggered
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    Your email client should launch with the pre-filled brief. You can also chat directly with Claudius Light on WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-red-600 uppercase font-bold underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Samuel Ade"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. samuel@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                        Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      >
                        <option value="Web Design / Front-End Development">Web Design / Front-End Development</option>
                        <option value="Event Flyer / Church Conference Banner">Event Flyer / Church Conference Banner</option>
                        <option value="Brand Identity / Logo Design">Brand Identity / Logo Design</option>
                        <option value="Digital Media / Facebook Live Streaming">Digital Media / Facebook Live Streaming</option>
                        <option value="JAMB / University Portal Registration">JAMB / University Portal Registration</option>
                        <option value="General Collaboration / Freelance">General Collaboration / Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      >
                        <option value="Urgent (24 - 48 Hours)">⚡ Urgent (24 - 48 Hours)</option>
                        <option value="Standard (3 - 5 Days)">Standard (3 - 5 Days)</option>
                        <option value="Flexible (1 - 2 Weeks)">Flexible (1 - 2 Weeks)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                      Project Details or Requirements
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe the event, website concept, or assistance needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-2.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Claudius Light</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions */}
        <div className="space-y-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
              FREQUENT QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 dark:text-white">
              Got Questions? Answers Ahead.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-6 space-y-3 cursor-pointer hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4 font-bold text-base text-neutral-950 dark:text-white">
                    <span>{faq.q}</span>
                    <span className="text-red-600 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </div>
                  {isOpen && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
