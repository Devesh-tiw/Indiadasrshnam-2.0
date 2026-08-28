import React, { useState, useEffect } from 'react';
import { DESTINATIONS, CATEGORIES, CIRCUITS } from './data/destinations';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import EraSlider from './components/EraSlider';
import DestinationCard from './components/DestinationCard';
import InteractiveMap from './components/InteractiveMap';
import StayBookingModal from './components/StayBookingModal';
import AiPlannerModal from './components/AiPlannerModal';
import AudioGuideModal from './components/AudioGuideModal';
import RouteModal from './components/RouteModal';
import CircuitsDrawer from './components/CircuitsDrawer';
import WishlistDrawer from './components/WishlistDrawer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bd_theme') || 'dark');
  const [category, setCategory] = useState('all');
  const [currentEra, setCurrentEra] = useState(2026);
  const [selectedSiteId, setSelectedSiteId] = useState(103); // Default Kedarnath
  const [activeCircuit, setActiveCircuit] = useState(null);
  
  const [savedSiteIds, setSavedSiteIds] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('bd_saved')) || [103, 201, 401];
    } catch {
      return [103, 201, 401];
    }
  });

  const [modal, setModal] = useState({ type: null, data: null });
  const [isCircuitsOpen, setIsCircuitsOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Sync Theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('bd_theme', theme);
  }, [theme]);

  // Sync Saved
  useEffect(() => {
    localStorage.setItem('bd_saved', JSON.stringify(savedSiteIds));
  }, [savedSiteIds]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleToggleSave = (id) => {
    setSavedSiteIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Filter Logic
  const filteredDestinations = DESTINATIONS.filter(site => {
    const matchesCat = category === 'all' || site.category === category;
    const matchesEra = site.era <= currentEra;
    return matchesCat && matchesEra;
  });

  // Calculate category counts
  const categoryCounts = CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = DESTINATIONS.filter(s => 
      (cat.id === 'all' || s.category === cat.id) && s.era <= currentEra
    ).length;
    return acc;
  }, {});

  const currentSelectedSite = DESTINATIONS.find(s => s.id === selectedSiteId);

  return (
    <div className="flex flex-col h-screen w-screen bg-[#050505] text-white overflow-hidden select-none font-sans bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[60px] z-0" />
      <div className="relative z-10 flex flex-col h-full w-full">
      {/* Top Navbar (Cleaned: NO OYO partner text on top) */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenAiPlanner={() => setModal({ type: 'ai', data: null })}
        onOpenCircuits={() => setIsCircuitsOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        wishlistCount={savedSiteIds.length}
        onSelectSite={(id) => setSelectedSiteId(id)}
      />

      {/* Category Filter Pills */}
      <CategoryBar
        selectedCategory={category}
        onSelectCategory={setCategory}
        onOpenCircuits={() => setIsCircuitsOpen(true)}
        categoryCounts={categoryCounts}
      />

      {/* Main Workspace (Feed + Map) */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">
        
        {/* Left Discover Sidebar */}
        <aside className="w-full md:w-[420px] lg:w-[460px] h-[45vh] md:h-full flex flex-col border-r border-white/20 bg-white/5 backdrop-blur-3xl shadow-[4px_0_40px_rgba(0,0,0,0.3)] z-10 shrink-0">
          
          <div className="p-3.5 pb-1 shrink-0">
            <EraSlider
              currentEra={currentEra}
              onEraChange={setCurrentEra}
              totalVisible={filteredDestinations.length}
            />
          </div>

          {/* Cards Feed */}
          <div className="flex-1 overflow-y-auto px-3.5 pb-6 space-y-3 scrollbar-thin scrollbar-thumb-slate-800">
            {filteredDestinations.length === 0 ? (
              <div className="text-center py-12 px-4 space-y-2">
                <div className="text-3xl">⏳</div>
                <h4 className="font-bold text-sm text-white">No Sites in this Era or Category</h4>
                <p className="text-xs text-zinc-400">
                  Try adjusting the timeline slider above towards 2026 CE or pick another category.
                </p>
              </div>
            ) : (
              filteredDestinations.map(site => (
                <DestinationCard
                  key={site.id}
                  site={site}
                  isSelected={site.id === selectedSiteId}
                  onSelect={setSelectedSiteId}
                  onOpenStays={(id) => setModal({ type: 'stay', data: DESTINATIONS.find(s => s.id === id) })}
                  onOpenAudio={(id) => setModal({ type: 'audio', data: DESTINATIONS.find(s => s.id === id) })}
                  onOpenRoute={(lat, lng, name) => setModal({ type: 'route', data: { lat, lng, name } })}
                  isSaved={savedSiteIds.includes(site.id)}
                  onToggleSave={handleToggleSave}
                />
              ))
            )}
          </div>

        </aside>

        {/* Right Map Viewport */}
        <section className="flex-1 h-[55vh] md:h-full relative">
          <InteractiveMap
            destinations={filteredDestinations}
            selectedSiteId={selectedSiteId}
            onSelectSite={setSelectedSiteId}
            activeCircuit={activeCircuit}
            onOpenStays={(id) => setModal({ type: 'stay', data: DESTINATIONS.find(s => s.id === id) })}
            onOpenAudio={(id) => setModal({ type: 'audio', data: DESTINATIONS.find(s => s.id === id) })}
            onOpenRoute={(lat, lng, name) => setModal({ type: 'route', data: { lat, lng, name } })}
            onOpenAiPlanner={() => setModal({ type: 'ai', data: null })}
          />
        </section>

      </main>

      {/* Modals & Drawers */}
      {modal.type === 'stay' && (
        <StayBookingModal
          site={modal.data}
          onClose={() => setModal({ type: null, data: null })}
        />
      )}

      {modal.type === 'ai' && (
        <AiPlannerModal
          onClose={() => setModal({ type: null, data: null })}
        />
      )}

      {modal.type === 'audio' && (
        <AudioGuideModal
          site={modal.data}
          onClose={() => setModal({ type: null, data: null })}
        />
      )}

      {modal.type === 'route' && (
        <RouteModal
          destLat={modal.data.lat}
          destLng={modal.data.lng}
          destName={modal.data.name}
          onClose={() => setModal({ type: null, data: null })}
        />
      )}

     <CircuitsDrawer
  isOpen={isCircuitsOpen}
  onClose={() => setIsCircuitsOpen(false)}
  activeCircuit={activeCircuit}
  onSelectCircuit={(c) => {
    setActiveCircuit(c);
  }}
/>

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        savedSiteIds={savedSiteIds}
        onRemoveSave={handleToggleSave}
        onSelectSite={(id) => {
          setSelectedSiteId(id);
          setIsWishlistOpen(false);
        }}
        onOpenStays={(id) => {
          setModal({ type: 'stay', data: DESTINATIONS.find(s => s.id === id) });
          setIsWishlistOpen(false);
        }}
      />

      </div>
    </div>
  );
}
