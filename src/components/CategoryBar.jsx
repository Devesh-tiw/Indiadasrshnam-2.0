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
    <nav className="h-14 bg-white/5 backdrop-blur-[60px] border-b border-white/20 px-4 md:px-6 flex items-center justify-between gap-3 overflow-x-auto scrollbar-none z-40 transition-colors shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      
      {/* Category Pills */}
      <div className="flex items-center gap-2">
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-white/20 border border-white/40 text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-2xl'
                  : 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]'
              }`}
            >
              <span className={isActive ? 'opacity-100 text-white' : 'opacity-70 text-white/50'}>{cat.icon}</span>
              <span className="drop-shadow-md">{cat.label}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors shadow-inner ${
                isActive ? 'bg-white/30 text-white border border-white/20' : 'bg-white/10 text-white/50 group-hover:bg-white/20 group-hover:text-white'
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
        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:border-white/40 text-white text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer hover:bg-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-2xl"
      >
        <Route className="w-3.5 h-3.5 text-white/90" />
        <span className="drop-shadow-md">5 Grand Yatra Circuits</span>
      </button>

    </nav>
  );
}
