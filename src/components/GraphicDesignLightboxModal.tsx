import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Layers, Sparkles, Download, Check, Eye, Maximize2 } from 'lucide-react';

interface GraphicDesignLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GraphicDesignLightboxModal: React.FC<GraphicDesignLightboxModalProps> = ({ isOpen, onClose }) => {
  const [activeItem, setActiveItem] = useState(0);
  const [filter, setFilter] = useState<string>('all');

  if (!isOpen) return null;

  const galleryItems = [
    {
      id: 'nifes-movement',
      title: 'Spread the Gospel — Social Media Movement Campaign',
      category: 'fellowship',
      categoryLabel: 'Fellowship Outreach',
      organization: 'NIFES TSU Jalingo Media Ministry',
      dimensions: '4:5 High-Res Digital Social Poster',
      tools: 'Canva Pro, 3D Icon Compositing, Typographic Hierarchy',
      objective: 'High-energy social media publicity flyer uniting Facebook, YouTube, TikTok, and WhatsApp channels with high-contrast typography, encouraging students to actively subscribe and engage.',
      highlights: ['Dynamic 3D Social Media Badges', 'Bold High-Contrast Gradient Typography', 'Official NIFES Fellowship Insignia'],
      previewImage: '/assets/aistudio/Follow__Subscribe__Engage__Spread_the_Gospel_f99e98b3.png',
    },
    {
      id: 'firm-services',
      title: 'Firm Hand Shake — Multi-Collateral Design Showcase',
      category: 'branding',
      categoryLabel: 'Branding & Commercial',
      organization: 'Firm Hand Shake Design Studio · Claudius Light',
      dimensions: 'A4 / Multi-Device Marketing Presentation',
      tools: 'Canva Pro, Multi-Asset Mockup Composition, Layout Grid',
      objective: 'Comprehensive commercial flyer showcasing logo identity, social media creatives, print stationery, wedding designs, and client collateral.',
      highlights: ['Multi-Asset Device Mockup Flatlay', 'Direct Phone & Email Integration (+234 7041159686)', 'Clear Service Icon Badges'],
      previewImage: '/assets/aistudio/Firm_Hand_Shake_Services_a93a2857.jpg',
    },
    {
      id: 'firm-web-design',
      title: 'Firm Handshake — Web Design Services Commercial Flyer',
      category: 'commercial',
      categoryLabel: 'Client Services',
      organization: 'Firm Handshake Digital Services',
      dimensions: 'A4 / Portrait Marketing Poster',
      tools: 'Canva Pro, Laptop UI Mockup, Corporate Layout',
      objective: 'Commercial flyer articulating website design services including e-commerce platforms, landing pages, redesigns, and responsive mobile architecture.',
      highlights: ['Realistic Laptop Display Mockup', 'Structured Service Bullet Breakdown', 'Prominent WhatsApp Call-To-Action'],
      previewImage: '/assets/aistudio/Firm_Handshake_Web_Design_5d7bbe67.png',
    },
    {
      id: 'nifes-prayer',
      title: 'NIFES TSU Jalingo — Prayer Meeting Thursday Flyer',
      category: 'fellowship',
      categoryLabel: 'Fellowship Outreach',
      organization: 'Nigeria Fellowship of Evangelical Students (TSU Jalingo)',
      dimensions: '1:1 Square (Instagram & WhatsApp Status)',
      tools: 'Canva Pro, Atmospheric Lighting, Minimalist Framing',
      objective: 'Reverent, focused weekly prayer gathering announcement for Adonai Chapel of Transformation at Taraba State University.',
      highlights: ['Moody Atmospheric Photo Treatment', 'Clean Minimalist Inner Box Frame', 'Official Fellowship Branding & Date Placement'],
      previewImage: '/assets/aistudio/Green_and_White_Church_Event_Instagram_Post_b3985e08.png',
    },
    {
      id: 'revelation-birthday',
      title: 'Revelation Philip — Modern Editorial Birthday Flyer',
      category: 'editorial',
      categoryLabel: 'Editorial & Celebrations',
      organization: 'Independent Client Commission',
      dimensions: '4:5 Vertical Editorial Poster',
      tools: 'Canva Pro, Layer Masking, Cursive & Sans Pairing',
      objective: 'Contemporary celebratory portrait flyer utilizing behind-subject typography, electric blue neon script, and clean date counter badge.',
      highlights: ['Behind-Subject Big Text Masking', 'Electric Blue Cursive Script Accent', 'High-Contrast Subject Silhouette'],
      previewImage: '/assets/aistudio/Revelation_Philip_birthday_flyer_367e69e2.png',
    },
    {
      id: 'firm-logo',
      title: 'FIRM Handshake — Community & Fellowship Emblem',
      category: 'branding',
      categoryLabel: 'Logo & Brand Identity',
      organization: 'Firm Handshake Community',
      dimensions: '1:1 Vector Emblem on Dark Canvas',
      tools: 'Vector Geometry, Canva Pro, High-Contrast Palette',
      objective: 'Emblematic logo design symbolizing mutual trust, team unity, and community connection with a dual-tone handshake encircled by people silhouettes.',
      highlights: ['High-Contrast Lime Green & Pure White', 'Scalable Minimalist Geometry', 'Strong Bold Typographic Base'],
      previewImage: '/assets/aistudio/FIRM_Handshake_Community_Logo_d0b79794.png',
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === filter);

  // Ensure active index is within bounds of filtered items
  const current = filteredItems[activeItem] || filteredItems[0] || galleryItems[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-neutral-950/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-3xl flex flex-col max-h-[94vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="w-3 h-3 bg-red-600 rounded-full" />
            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-neutral-950 dark:text-white uppercase tracking-wider">
                Graphic Design & Visuals Showcase
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                Real Client Works, NIFES TSU Jalingo Collateral & Brand Identities
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-neutral-950 dark:hover:text-white rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills Bar */}
        <div className="px-6 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center gap-2 overflow-x-auto shrink-0 text-xs sm:text-sm">
          {[
            { id: 'all', label: `All Works (${galleryItems.length})` },
            { id: 'fellowship', label: 'Fellowship & Church' },
            { id: 'branding', label: 'Brand & Logos' },
            { id: 'commercial', label: 'Client Flyers' },
            { id: 'editorial', label: 'Celebrations' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setActiveItem(0);
              }}
              className={`px-3.5 py-1.5 rounded-full font-bold transition-all whitespace-nowrap ${
                filter === cat.id
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Content Area: Split Image Preview & Details */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1">
          
          {/* Left Column: High-Res Image Display */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[4/5] sm:aspect-square flex items-center justify-center group shadow-xl">
              <img
                src={current.previewImage}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-center justify-between text-white text-xs font-semibold">
                <span className="font-mono bg-red-600/90 px-2 py-0.5 rounded-md">
                  {current.categoryLabel}
                </span>
                <span className="text-neutral-300">
                  {current.dimensions}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip for 1-Click Fast Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
              {filteredItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(idx)}
                  className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    (filteredItems[activeItem]?.id === item.id)
                      ? 'border-red-600 scale-105 shadow-md shadow-red-600/30'
                      : 'border-neutral-200 dark:border-neutral-800 opacity-60 hover:opacity-100'
                  }`}
                  title={item.title}
                >
                  <img
                    src={item.previewImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Design Specs & Context */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-500 font-extrabold">
                {current.organization}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-950 dark:text-white mt-1 leading-snug">
                {current.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              {current.objective}
            </p>

            {/* Specs Table */}
            <div className="border-t border-b border-neutral-200/80 dark:border-neutral-800 py-3.5 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Design Tools:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-100">{current.tools}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Format:</span>
                <span className="font-bold text-neutral-950 dark:text-neutral-100">{current.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-medium">Designer:</span>
                <span className="font-bold text-red-600">Claudius Light</span>
              </div>
            </div>

            {/* Design Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Key Design Standards:
              </span>
              <div className="space-y-1.5">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Trigger */}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => {
                  onClose();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-full transition-all shadow-lg shadow-red-600/30 hover:shadow-red-600/50"
              >
                <span>Commission Flyer or Logo Design</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span className="font-mono">
            {activeItem + 1} of {filteredItems.length} Featured Works
          </span>
          <button
            onClick={onClose}
            className="hover:text-neutral-950 dark:hover:text-white uppercase font-bold text-xs"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
