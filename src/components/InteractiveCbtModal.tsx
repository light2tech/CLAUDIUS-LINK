import React, { useState, useEffect } from 'react';
import { X, Clock, Award, RotateCcw, CheckCircle, AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { MOCK_CBT_QUESTIONS } from '../data/portfolioData';

interface InteractiveCbtModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InteractiveCbtModal: React.FC<InteractiveCbtModalProps> = ({ isOpen, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

  useEffect(() => {
    if (isOpen && (submitted || timeLeft <= 0)) {
      handleReset();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, submitted]);

  if (!isOpen) return null;

  const currentQ = MOCK_CBT_QUESTIONS[currentIdx];

  const handleSelectOption = (key: string) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: key,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIdx(0);
    setSubmitted(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Calculate score
  let score = 0;
  MOCK_CBT_QUESTIONS.forEach((q) => {
    if (selectedAnswers[q.id] === q.correctAnswer) {
      score += 1;
    }
  });
  const percentage = Math.round((score / MOCK_CBT_QUESTIONS.length) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl rounded-2xl sm:rounded-3xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                Puls Nigeria — Interactive CBT Simulator
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Functional Prototype Demo · Concept by Claudius Light
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-mono text-xs font-semibold tabular-nums">
              <Clock className="w-3.5 h-3.5 text-red-600" />
              <span>{formatTime(timeLeft)}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!submitted ? (
            <>
              {/* Question Navigation Indicators */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800 text-xs">
                <span className="font-semibold text-neutral-600 dark:text-neutral-400">
                  Question <span className="font-mono text-red-600 text-sm font-bold">{currentIdx + 1}</span> of {MOCK_CBT_QUESTIONS.length}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 font-medium">
                  {currentQ.subject}
                </span>
              </div>

              {/* Question Stem */}
              <div className="bg-neutral-50 dark:bg-neutral-950 p-5 border border-neutral-200 dark:border-neutral-800">
                <p className="text-base sm:text-lg font-medium text-neutral-900 dark:text-neutral-100 leading-relaxed">
                  {currentQ.question}
                </p>
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedAnswers[currentQ.id] === opt.key;
                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(opt.key)}
                      className={`w-full text-left p-4 flex items-center gap-4 border transition-all text-sm font-medium ${
                        isSelected
                          ? 'border-red-600 bg-red-50/50 dark:bg-red-950/20 text-neutral-950 dark:text-white shadow-sm'
                          : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600'
                      }`}
                    >
                      <span className={`w-7 h-7 flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                        isSelected
                          ? 'bg-red-600 text-white'
                          : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
                      }`}>
                        {opt.key}
                      </span>
                      <span className="flex-1">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Question Stepper */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  onClick={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="flex gap-2">
                  {MOCK_CBT_QUESTIONS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-8 h-8 text-xs font-mono font-bold transition-all ${
                        currentIdx === idx
                          ? 'bg-red-600 text-white'
                          : selectedAnswers[MOCK_CBT_QUESTIONS[idx].id]
                          ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-950'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                {currentIdx < MOCK_CBT_QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx((prev) => Math.min(MOCK_CBT_QUESTIONS.length - 1, prev + 1))}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 flex items-center gap-1"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setSubmitted(true)}
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Submit Exam</span>
                  </button>
                )}
              </div>
            </>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="text-center p-8 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 space-y-3">
                <Award className="w-12 h-12 mx-auto text-red-600" />
                <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white">
                  Exam Simulation Finished!
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                  You scored <span className="font-bold font-mono text-red-600">{score}</span> out of {MOCK_CBT_QUESTIONS.length} ({percentage}%)
                </p>
                <div className="text-xs uppercase tracking-wider font-mono text-neutral-500">
                  {percentage >= 60 ? 'Status: Passed with Proficiency' : 'Status: Needs Revision'}
                </div>
              </div>

              {/* Review Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Question Review & Explanations:
                </h4>
                {MOCK_CBT_QUESTIONS.map((q, idx) => {
                  const userAnswer = selectedAnswers[q.id];
                  const isCorrect = userAnswer === q.correctAnswer;
                  return (
                    <div
                      key={q.id}
                      className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 space-y-2 text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                          {idx + 1}. {q.question}
                        </span>
                        {isCorrect ? (
                          <span className="text-xs font-mono text-emerald-600 flex items-center gap-1 font-semibold">
                            <CheckCircle className="w-3.5 h-3.5" /> Correct
                          </span>
                        ) : (
                          <span className="text-xs font-mono text-red-600 flex items-center gap-1 font-semibold">
                            <AlertCircle className="w-3.5 h-3.5" /> Incorrect
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 space-y-1">
                        <div>
                          Your answer: <strong className="font-mono">{userAnswer || 'None selected'}</strong> · Correct answer: <strong className="font-mono text-emerald-600">{q.correctAnswer}</strong>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 italic">
                          {q.explanation}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reset action */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-white"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Retake Simulator</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span>Concept: Puls Nigeria CBT Platform</span>
          <button
            onClick={onClose}
            className="hover:text-neutral-950 dark:hover:text-white uppercase font-semibold text-[11px]"
          >
            Close Sandbox
          </button>
        </div>

      </div>
    </div>
  );
};
