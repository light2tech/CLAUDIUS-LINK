import React, { useState } from 'react';
import { X, CheckCircle, Smartphone, BookOpen, AlertTriangle, HelpCircle } from 'lucide-react';

interface JambAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JambAssistantModal: React.FC<JambAssistantModalProps> = ({ isOpen, onClose }) => {
  const [selectedCourse, setSelectedCourse] = useState('cs');
  const [ninInput, setNinInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    ninReady: true,
    emailReady: true,
    olevelReady: false,
    passportReady: false,
  });

  if (!isOpen) return null;

  const courses = {
    cs: {
      name: 'Computer Science',
      faculty: 'Faculty of Science / Computing',
      jambSubjects: ['Use of English (Compulsory)', 'Mathematics', 'Physics', 'Chemistry or Biology'],
      olevelRequirements: 'Minimum of 5 credits in English Language, Mathematics, Physics, Chemistry, and any other science subject.',
    },
    med: {
      name: 'Medicine & Surgery / Nursing',
      faculty: 'College of Health Sciences',
      jambSubjects: ['Use of English (Compulsory)', 'Biology', 'Chemistry', 'Physics'],
      olevelRequirements: 'Minimum of 5 credits in English, Mathematics, Biology, Chemistry, and Physics in one sitting.',
    },
    law: {
      name: 'Law (Civil / Common Law)',
      faculty: 'Faculty of Law',
      jambSubjects: ['Use of English (Compulsory)', 'Literature in English', 'Government / History', 'Any other Arts or Social Science subject'],
      olevelRequirements: 'Minimum of 5 credits including English Language, Literature in English, and Mathematics.',
    },
    eng: {
      name: 'Civil / Electrical Engineering',
      faculty: 'Faculty of Engineering',
      jambSubjects: ['Use of English (Compulsory)', 'Mathematics', 'Physics', 'Chemistry'],
      olevelRequirements: '5 credit passes in English Language, Mathematics, Physics, Chemistry, and Further Maths/Technical Drawing.',
    },
  };

  const handleGenerateProfileCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (ninInput.length !== 11) return;
    const randomCode = `${Math.floor(1000000000 + Math.random() * 9000000000)}`;
    setGeneratedCode(randomCode);
  };

  const toggleCheck = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCourse = courses[selectedCourse as keyof typeof courses];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                Campus Online Registration & JAMB Assistant
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Interactive Advisory Tool based on Claudius Light’s Technical Support Workflow
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Section 1: Subject Combination Checker */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-red-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                1. JAMB UTME Subject Combination Checker
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {Object.entries(courses).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCourse(key)}
                  className={`px-3 py-2 text-xs font-semibold text-left border transition-colors ${
                    selectedCourse === key
                      ? 'border-red-600 bg-red-50/40 dark:bg-red-950/20 text-neutral-950 dark:text-white'
                      : 'border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  {data.name.split('/')[0]}
                </button>
              ))}
            </div>

            <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-neutral-950 dark:text-white">{activeCourse.name}</span>
                <span className="text-neutral-500 font-mono">{activeCourse.faculty}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  Required UTME Subjects (4 total):
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-neutral-600 dark:text-neutral-400">
                  {activeCourse.jambSubjects.map((sub, i) => (
                    <li key={i}>{sub}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 text-neutral-500">
                <strong>O’Level Benchmark:</strong> {activeCourse.olevelRequirements}
              </div>
            </div>
          </div>

          {/* Section 2: Profile Code Simulator */}
          <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-red-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                2. JAMB Profile Code Simulator (SMS 55019 / 66019)
              </h3>
            </div>

            <form onSubmit={handleGenerateProfileCode} className="space-y-2">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Test the SMS syntax format candidates use before visiting an accredited CBT center:
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  maxLength={11}
                  placeholder="Enter 11-digit National ID (NIN) e.g. 12345678901"
                  value={ninInput}
                  onChange={(e) => setNinInput(e.target.value.replace(/\D/g, ''))}
                  className="flex-1 px-3 py-2 text-xs font-mono bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600"
                />
                <button
                  type="submit"
                  disabled={ninInput.length !== 11}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  Simulate Profile Code
                </button>
              </div>
            </form>

            {generatedCode && (
              <div className="p-3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs space-y-1">
                <span className="text-[11px] font-mono text-neutral-500 uppercase">
                  Simulated SMS Return from 55019:
                </span>
                <p className="font-mono font-bold text-neutral-950 dark:text-white">
                  "Your 10-Character Profile Code is: <span className="text-red-600">{generatedCode}</span>. Present this code at any accredited CBT registration center."
                </p>
              </div>
            )}
          </div>

          {/* Section 3: Readiness Checklist */}
          <div className="space-y-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
              3. Student Registration Readiness Checklist
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { id: 'ninReady', label: '11-digit NIN verified with NIMC' },
                { id: 'emailReady', label: 'Active personal Gmail address' },
                { id: 'olevelReady', label: 'WAEC / NECO / NABTEB result slip uploaded' },
                { id: 'passportReady', label: 'White-background passport photograph (200kb max)' },
              ].map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className="flex items-center gap-2 p-2.5 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-left hover:border-neutral-400"
                >
                  <div className={`w-4 h-4 border flex items-center justify-center ${
                    checklist[item.id] ? 'bg-red-600 border-red-600 text-white' : 'border-neutral-400'
                  }`}>
                    {checklist[item.id] && <CheckCircle className="w-3 h-3" />}
                  </div>
                  <span className={`text-xs ${checklist[item.id] ? 'text-neutral-900 dark:text-white font-medium' : 'text-neutral-500'}`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500">
          <span>Campus Tech & Academic Support Tool</span>
          <button
            onClick={onClose}
            className="hover:text-neutral-950 dark:hover:text-white uppercase font-semibold text-[11px]"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
