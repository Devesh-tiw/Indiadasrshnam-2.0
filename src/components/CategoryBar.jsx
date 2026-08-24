import React from 'react';
import { CATEGORIES } from '../data/destinations';
import { Route } from 'lucide-react';

export default function CategoryBar({
  selectedCategory,
  onSelectCategory,
  onOpenCircuits,
  categoryCounts
}) {
  return (
    <nav className="h-12 bg-[#121622] border-b border-white/10 px-4 md:px-6 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none z-40">
      
      {/* Category Pills */}
      <div className="flex items-center gap-2">
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-amber-500/15 border border-amber-400 text-amber-300 shadow-sm shadow-amber-500/10'
                  : 'bg-slate-900/60 border border-white/10 text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Circuits Shortcut */}
      <button
        onClick={onOpenCircuits}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 hover:border-orange-400 text-orange-300 text-xs font-bold whitespace-nowrap transition-all cursor-pointer hover:bg-orange-500/20"
      >
        <Route className="w-3.5 h-3.5 text-orange-400" />
        <span>5 Grand Yatra Circuits</span>
      </button>

    </nav>
  );
}
