import React from 'react';
import { History, Calendar } from 'lucide-react';

export default function EraSlider({ currentEra, onEraChange, totalVisible }) {
  const getEraLabel = (year) => {
    if (year <= -4000) return 'Satya & Treta Yuga (Puranic Era)';
    if (year <= -2500) return 'Mahabharata & Vedic Age';
    if (year <= -200) return 'Classical Antiquity';
    if (year <= 600) return 'Early Historic Dynasties';
    if (year <= 1200) return 'Early Medieval (Chola & Chalukya)';
    if (year <= 1700) return 'Late Medieval & Vijayanagara';
    if (year <= 1947) return 'Colonial & Modern Dawn';
    return 'Present Day (2026 CE)';
  };

  const presets = [
    { label: '5000 BCE', value: -5000 },
    { label: '3000 BCE', value: -3000 },
    { label: '1000 CE', value: 1000 },
    { label: 'Present', value: 2026 }
  ];

  return (
    <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-3.5 mb-3 backdrop-blur-md">
      
      {/* Top Meta */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <History className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-extrabold uppercase tracking-wide text-amber-400">
            Historical Timeline
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-800 border border-white/10 text-xs font-bold text-slate-200">
          <Calendar className="w-3 h-3 text-amber-400" />
          <span>{currentEra < 0 ? `${Math.abs(currentEra)} BCE` : `${currentEra} CE`}</span>
        </div>
      </div>

      <div className="text-xs text-slate-300 font-medium mb-3">
        {getEraLabel(currentEra)}
      </div>

      {/* Range Input */}
      <div className="relative mb-3">
        <input
          type="range"
          min="-5000"
          max="2026"
          step="50"
          value={currentEra}
          onChange={(e) => onEraChange(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400 focus:outline-none"
        />
      </div>

      {/* Presets & Count */}
      <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5">
          {presets.map(p => (
            <button
              key={p.value}
              onClick={() => onEraChange(p.value)}
              className={`px-2 py-0.5 rounded-md border text-[10px] font-semibold transition-all cursor-pointer ${
                currentEra === p.value
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold'
                  : 'bg-slate-800/80 text-slate-400 border-white/5 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <span className="text-slate-400">
          <strong className="text-amber-400 font-bold">{totalVisible}</strong> sites shown
        </span>
      </div>

    </div>
  );
}
