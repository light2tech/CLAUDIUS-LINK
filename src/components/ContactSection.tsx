import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, Check, Copy, ExternalLink, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Design Project',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.service} from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Boosted Typography */}
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-500">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block rounded-full" />
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-tight">
            Let’s collaborate on your next digital or visual project.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Whether you need a responsive website, fellowship conference graphics, live streaming support, or university registration assistance, feel free to reach out.
          </p>
        </div>

        {/* 2-Column Split: Direct Channels vs Message Form */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl space-y-6 shadow-sm">
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                Contact Channels
              </h3>

              <div className="space-y-5 text-sm sm:text-base">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 shrink-0">
                    <Mail className="w-5 h-5 text-red-600" />
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
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold mb-0.5">
                      Phone & WhatsApp
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
                        <span>Chat directly on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-red-600 shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold mb-0.5">
                      Operating Base
                    </span>
                    <span className="font-bold text-neutral-950 dark:text-white text-base">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-neutral-500 block text-xs sm:text-sm mt-0.5">
                      Taraba State University Community
                    </span>
                  </div>
                </div>
              </div>

              {/* GitHub Link */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-sm font-bold text-neutral-950 dark:text-white hover:text-red-600"
                >
                  <span>Explore GitHub: @light2tech</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl space-y-6 shadow-sm">
              <h3 className="text-base font-bold uppercase tracking-wider text-neutral-950 dark:text-white">
                Send a Project Brief
              </h3>

              {submitted ? (
                <div className="p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-center space-y-4">
                  <div className="w-12 h-12 bg-red-50 dark:bg-red-950/50 text-red-600 rounded-full mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
                    Mail Client Opened
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm mx-auto leading-relaxed">
                    Your email client should launch with the pre-filled brief. You can also message Claudius Light directly via WhatsApp or email.
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
                        placeholder="e.g. John Doe"
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
                        placeholder="e.g. user@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                      Service / Scope Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all"
                    >
                      <option value="Web Design Project">Web Design / Front-End Development</option>
                      <option value="Graphic Design / Event Banner">Graphic Design / Flyers & Roll-Up Banners</option>
                      <option value="Digital Media / Facebook Live">Digital Publicity & Facebook Live Streaming</option>
                      <option value="JAMB / University Registration Assistance">JAMB / University Portal Assistance</option>
                      <option value="General Freelance / Collaboration">Other Inquiries & Collaborations</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="font-bold uppercase tracking-wider text-xs text-neutral-700 dark:text-neutral-300">
                      Project Details or Inquiry
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, timeline, or assistance required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-base bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-2.5 hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Claudius Light</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
