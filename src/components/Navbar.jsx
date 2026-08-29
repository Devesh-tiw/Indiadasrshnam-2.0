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
    <header className="h-16 border-b border-white/20 bg-white/5 backdrop-blur-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] px-4 md:px-6 flex items-center justify-between z-50 sticky top-0 transition-colors">
      {/* Brand Identity with Luxury Vector Logo */}
      <div 
        className="flex items-center gap-3 cursor-pointer select-none group"
        onClick={() => window.location.reload()}
      >
        <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-white/40 to-white/10 p-[1px] shadow-lg shadow-black/20 group-hover:scale-105 transition-all duration-300">
          <div className="w-full h-full bg-white/10 backdrop-blur-xl rounded-[14px] flex items-center justify-center overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 100 100" className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-500 inline-block" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="glassGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#E0E7FF" />
                  <stop offset="100%" stopColor="#A5B4FC" />
                </linearGradient>
                <linearGradient id="auraGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#C7D2FE" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* Radiant Sun Rays / Lotus Base */}
              <circle cx="50" cy="50" r="42" stroke="url(#glassGrad)" strokeWidth="2.5" strokeDasharray="4 4" opacity="0.8" />
              <circle cx="50" cy="50" r="34" fill="url(#auraGrad)" opacity="0.2" />
              {/* Stylized Golden Temple Shikhara & Trishul Peak */}
              <path d="M50 16L64 48H36L50 16Z" fill="url(#glassGrad)" />
              <path d="M50 10V18M46 14H54" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
              {/* Sacred Mountain Base */}
              <path d="M22 72L42 46L54 58L68 40L80 72H22Z" fill="url(#glassGrad)" opacity="0.9" />
              {/* Inner Sacred Center Glow */}
              <circle cx="50" cy="56" r="5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-lg tracking-tight text-white drop-shadow-md">
              Bharat<span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-200 bg-clip-text text-transparent drop-shadow-sm">Darshnam</span>
            </span>
            <span className="text-[9px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20 shadow-sm backdrop-blur-md">
              2.0
            </span>
          </div>
          <p className="text-[11px] text-white/70 font-medium hidden sm:block">
            Cultural, Spiritual & Alpine Discovery
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
            placeholder="Search Kedarnath, Manali, Hampi..."
            className="w-full h-10 pl-10 pr-4 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)] text-sm text-white placeholder-white/60 focus:outline-none focus:bg-white/20 focus:border-white/40 focus:ring-4 focus:ring-white/10 transition-all"
          />
        </div>

        {/* Dropdown Results */}
        {isOpenDropdown && filteredResults.length > 0 && (
          <div className="absolute top-12 left-0 right-0 bg-black/40 backdrop-blur-[60px] border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
            {filteredResults.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectSite(item.id);
                  setIsOpenDropdown(false);
                  setSearchQuery('');
                }}
                className="px-4 py-3 flex items-center justify-between hover:bg-white/10 cursor-pointer border-b border-white/10 last:border-none transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-white/60">{item.state} • {item.eraLabel}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/90">Explore ↗</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenAiPlanner}
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 text-white font-bold text-xs shadow-[0_8px_30px_rgba(0,0,0,0.12)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] hover:bg-white/30 hover:scale-105 active:scale-95 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Yatra Planner</span>
        </button>

        <button
          onClick={onOpenCircuits}
          className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 text-white text-xs font-semibold transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
        >
          <Route className="w-3.5 h-3.5 text-white" />
          <span className="hidden md:inline">Circuits</span>
        </button>

        <button
          onClick={onOpenWishlist}
          className="relative p-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
          title="Saved Places"
        >
          <Bookmark className="w-4 h-4 text-white" />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white/90 text-[10px] font-bold text-black flex items-center justify-center shadow-lg">
              {wishlistCount}
            </span>
          )}
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 hover:bg-white/20 hover:border-white/30 text-white transition-all shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-white" /> : <Moon className="w-4 h-4 text-white" />}
        </button>
      </div>

    </header>
  );
}
