import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Route, Bookmark, Sun, Moon, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function Navbar({
  theme,
  toggleTheme,
  onOpenAiPlanner,
  onOpenCircuits,
  onOpenWishlist,
  wishlistCount,
  onSelectSite
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const filteredResults = searchQuery.trim() === '' ? [] : DESTINATIONS.filter(d => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  ).slice(0, 6);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpenDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-16 border-b border-white/10 dark:border-white/10 light:border-black/10 bg-[#0f121a]/90 backdrop-blur-xl px-4 md:px-6 flex items-center justify-between z-50 sticky top-0 transition-colors">
      
      {/* Brand Identity */}
      <div 
        className="flex items-center gap-3 cursor-pointer select-none group"
        onClick={() => window.location.reload()}
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
          <Compass className="w-5 h-5 animate-spin-slow" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight text-white dark:text-white">
              Bharat<span className="text-amber-400">Darshnam</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              2.0
            </span>
          </div>
          <p className="text-[11px] text-slate-400 hidden sm:block">
            India's Cultural & Mountain Discovery Engine
          </p>
        </div>
      </div>

      {/* Auto-suggest Search */}
      <div className="relative flex-1 max-w-md mx-4" ref={dropdownRef}>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsOpenDropdown(true);
            }}
            onFocus={() => setIsOpenDropdown(true)}
            placeholder="Search Kedarnath, Manali, Hampi, Chola..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-slate-900/80 border border-white/10 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/80 focus:ring-2 focus:ring-amber-400/20 transition-all shadow-inner"
          />
        </div>

        {/* Dropdown Results */}
        {isOpenDropdown && filteredResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 bg-[#161a26] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-150">
            {filteredResults.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectSite(item.id);
                  setIsOpenDropdown(false);
                  setSearchQuery('');
                }}
                className="px-4 py-3 flex items-center justify-between hover:bg-slate-800/60 cursor-pointer border-b border-white/5 last:border-none transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.state} • {item.eraLabel}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-amber-400">Explore ↗</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenAiPlanner}
          className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 hover:opacity-95 hover:scale-102 active:scale-98 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Yatra Planner</span>
        </button>

        <button
          onClick={onOpenCircuits}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-amber-400/50 text-slate-200 text-xs font-semibold transition-all hover:bg-slate-800"
        >
          <Route className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden md:inline">Circuits</span>
        </button>

        <button
          onClick={onOpenWishlist}
          className="relative p-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-amber-400/50 text-slate-200 transition-all hover:bg-slate-800"
          title="Saved Places"
        >
          <Bookmark className="w-4 h-4 text-amber-400" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-orange-500 text-[10px] font-bold text-white flex items-center justify-center shadow-sm">
              {wishlistCount}
            </span>
          )}
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-amber-400/50 text-slate-200 transition-all hover:bg-slate-800"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
        </button>
      </div>

    </header>
  );
}
