import React from 'react';
import { X, Bookmark, Trash2, MapPin, Hotel, ArrowRight } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export default function WishlistDrawer({
  isOpen,
  onClose,
  savedSiteIds,
  onRemoveSave,
  onSelectSite,
  onOpenStays
}) {
  if (!isOpen) return null;

  const savedSites = DESTINATIONS.filter(d => savedSiteIds.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#111522] border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Bookmark className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">
                  My Saved Destinations
                </h3>
                <p className="text-xs text-slate-400">
                  {savedSites.length} sacred & mountain spots saved
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1">
            {savedSites.length === 0 ? (
              <div className="text-center py-16 px-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-white">No Saved Places Yet</h4>
                <p className="text-xs text-slate-400 max-w-xs mx-auto">
                  Click the bookmark icon on any destination card to save your favorite temples, mountain passes, and treks.
                </p>
              </div>
            ) : (
              savedSites.map(site => (
                <div
                  key={site.id}
                  className="bg-slate-900/80 border border-white/10 rounded-2xl p-3.5 flex items-center justify-between gap-3 hover:border-white/20 transition-colors"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-1"
                    onClick={() => {
                      onSelectSite(site.id);
                      onClose();
                    }}
                  >
                    <img
                      src={site.image}
                      alt={site.title}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80";
                      }}
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-white line-clamp-1">{site.title}</h4>
                      <p className="text-[11px] text-slate-400">{site.state} • ★ {site.rating}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => {
                        onOpenStays(site.id);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 transition-colors"
                      title="View Verified Stays"
                    >
                      <Hotel className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onRemoveSave(site.id)}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Remove from Saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
