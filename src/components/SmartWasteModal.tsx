import React, { useState } from 'react';
import { X, Trash2, CheckCircle2, MapPin, Calendar, Truck, Recycle, Leaf } from 'lucide-react';

interface SmartWasteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartWasteModal: React.FC<SmartWasteModalProps> = ({ isOpen, onClose }) => {
  const [wasteType, setWasteType] = useState('plastic');
  const [location, setLocation] = useState('Taraba State University - Main Campus');
  const [estimatedKg, setEstimatedKg] = useState('15');
  const [ticketId, setTicketId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `TSU-ECO-${Math.floor(1000 + Math.random() * 9000)}`;
    setTicketId(generatedId);
  };

  const handleReset = () => {
    setTicketId(null);
  };

  const wasteCategories = [
    { id: 'plastic', name: 'Plastics & PET Bottles', icon: Recycle, factor: 1.8 },
    { id: 'ewaste', name: 'Electronic / E-Waste', icon: Trash2, factor: 3.5 },
    { id: 'organic', name: 'Organic & Food Waste', icon: Leaf, factor: 0.9 },
  ];

  const currentCategory = wasteCategories.find((c) => c.id === wasteType) || wasteCategories[0];
  const carbonOffsetKg = (parseFloat(estimatedKg || '0') * currentCategory.factor).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
            <div>
              <h2 className="text-sm sm:text-base font-bold text-neutral-950 dark:text-white uppercase tracking-wider">
                Smart Waste Management System
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                Civic Tech Concept Demo · Architecture by Claudius Light
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!ticketId ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="p-4 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Concept Overview:</strong> A smart scheduling portal connecting campus departments, hostels, and residential quarters with local collection trucks to prevent overflow and promote recycling.
              </div>

              {/* Waste Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Select Recyclable Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {wasteCategories.map((cat) => {
                    const Icon = cat.icon;
                    const isSelected = wasteType === cat.id;
                    return (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() => setWasteType(cat.id)}
                        className={`p-3 text-left border flex flex-col justify-between transition-colors ${
                          isSelected
                            ? 'border-red-600 bg-red-50/40 dark:bg-red-950/20 text-neutral-950 dark:text-white'
                            : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
                        }`}
                      >
                        <Icon className={`w-5 h-5 mb-2 ${isSelected ? 'text-red-600' : 'text-neutral-500'}`} />
                        <span className="text-xs font-semibold">{cat.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Collection Point / Campus Zone
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 top-3" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600"
                  >
                    <option value="Taraba State University - Main Campus">TSU Main Campus, Jalingo</option>
                    <option value="TSU Faculty of Science & Computing">Faculty of Science & Computing Complex</option>
                    <option value="Student Hostel Block B">Male / Female Student Hostels</option>
                    <option value="Magami Residential District">Magami District, Jalingo</option>
                  </select>
                </div>
              </div>

              {/* Volume & Environmental Impact Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                    Estimated Volume (kg)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="500"
                    value={estimatedKg}
                    onChange={(e) => setEstimatedKg(e.target.value)}
                    className="w-full px-3 py-2 text-sm font-mono bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="p-3 bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500">
                    Est. CO₂ Offset
                  </span>
                  <div className="text-xl font-bold font-mono text-neutral-900 dark:text-white tabular-nums">
                    {carbonOffsetKg} <span className="text-xs font-normal">kg CO₂e avoided</span>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3 text-xs font-semibold tracking-wider uppercase text-white bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors flex items-center justify-center gap-2"
              >
                <Truck className="w-4 h-4" />
                <span>Dispatch Pickup Request</span>
              </button>
            </form>
          ) : (
            /* Ticket Confirmation */
            <div className="text-center py-6 space-y-5">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-950/40 text-red-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Pickup Dispatched Successfully!
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Collection Ticket Reference ID:
                </p>
                <div className="mt-2 text-2xl font-mono font-bold tracking-widest text-red-600">
                  {ticketId}
                </div>
              </div>

              <div className="p-4 max-w-md mx-auto bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Location:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Category:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{currentCategory.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Weight:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{estimatedKg} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Truck Assigned:</span>
                  <span className="font-mono text-emerald-600 font-semibold">Truck-04 (On En Route Route)</span>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800"
              >
                Simulate Another Request
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
          <span>Project Concept: Smart Waste Management</span>
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
