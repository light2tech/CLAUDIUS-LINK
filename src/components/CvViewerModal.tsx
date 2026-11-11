import React, { useState } from 'react';
import { X, Download, FileText, Check, Copy, ExternalLink, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CvViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvViewerModal: React.FC<CvViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopySummary = () => {
    const text = `
${PERSONAL_INFO.fullName}
${PERSONAL_INFO.preferredTitle} | ${PERSONAL_INFO.secondaryTitle}
Nigeria | Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}
Portfolio: ${PERSONAL_INFO.currentPortfolioUrl} | GitHub: ${PERSONAL_INFO.githubUrl}

PROFESSIONAL PROFILE:
${PERSONAL_INFO.bio}

EDUCATION:
- Taraba State University, Jalingo, Nigeria (B.Sc Computer Science - In Progress)
- Government Day Secondary School, Magami (SSCE)
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-neutral-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col h-[92vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                {PERSONAL_INFO.fullName} — Professional CV
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Official Curriculum Vitae & Career Credentials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download="Claudius_Ngenge_Professional_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={handleCopySummary}
              className="p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white border border-neutral-200 dark:border-neutral-800"
              title="Copy text summary"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split between embedded PDF and summary details */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left: Interactive Embedded PDF Viewer */}
          <div className="lg:col-span-8 h-full bg-neutral-200 dark:bg-neutral-950 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
            <div className="px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
              <span>Document: pdf_Claudius_Ngenge_Professional_CV.pdf</span>
              <a
                href={PERSONAL_INFO.cvPdfPath}
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-600 flex items-center gap-1"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="flex-1 w-full h-full relative">
              <iframe
                src={`${PERSONAL_INFO.cvPdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
                title="Claudius Ngenge CV Document"
                className="w-full h-full border-none"
              />
            </div>
          </div>

          {/* Right: Quick Verification Snapshot */}
          <div className="hidden lg:block lg:col-span-4 p-6 overflow-y-auto space-y-6 bg-white dark:bg-neutral-900 text-xs">
            
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-red-600 font-semibold">
                Direct Contact
              </span>
              <h3 className="text-base font-bold text-neutral-950 dark:text-white mt-1">
                {PERSONAL_INFO.fullName}
              </h3>
              <p className="text-neutral-500 mt-0.5">
                {PERSONAL_INFO.location}
              </p>
              <div className="mt-3 space-y-1 font-mono text-neutral-700 dark:text-neutral-300">
                <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-red-600 underline">{PERSONAL_INFO.email}</a></div>
                <div>Phone: <a href={`tel:${PERSONAL_INFO.phone}`} className="text-neutral-900 dark:text-white">{PERSONAL_INFO.phoneDisplay}</a></div>
                <div>WhatsApp: <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="text-red-600 underline">Chat on WhatsApp</a></div>
              </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Core Strengths
              </span>
              <ul className="space-y-1 text-neutral-600 dark:text-neutral-300">
                <li>• Creative problem-solving & clean page structure</li>
                <li>• Front-end styling with HTML, CSS & modern JavaScript</li>
                <li>• Visual communication & banner design with Canva Pro</li>
                <li>• Facebook Live streaming & digital outreach operations</li>
                <li>• High attention to detail & swift willingness to learn</li>
              </ul>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                Academic Background
              </span>
              <div className="space-y-2">
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white">Taraba State University, Jalingo</div>
                  <div className="text-neutral-500">B.Sc Computer Science (Currently Studying)</div>
                </div>
                <div>
                  <div className="font-bold text-neutral-900 dark:text-white">GDSS Magami, Taraba State</div>
                  <div className="text-neutral-500">Senior Secondary School Certificate (SSCE)</div>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
              <a
                href={PERSONAL_INFO.cvPdfPath}
                download="Claudius_Ngenge_Professional_CV.pdf"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Offline PDF</span>
              </a>
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-2.5 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>Attachment Source: /public/assets/aistudio/pdf_Claudius_Ngenge_Professional_CV_cbb7617b.pdf</span>
          <button
            onClick={onClose}
            className="hover:text-neutral-950 dark:hover:text-white uppercase font-semibold text-[11px]"
          >
            Close Document
          </button>
        </div>

      </div>
    </div>
  );
};
