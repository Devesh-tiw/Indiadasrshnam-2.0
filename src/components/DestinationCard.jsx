import React from 'react';
import { MapPin, Star, Volume2, Navigation, Hotel, Bookmark, ArrowUpRight, Mountain, Calendar } from 'lucide-react';
import { CATEGORIES } from '../data/destinations';

export default function DestinationCard({
  site,
  isSelected,
  onSelect,
  onOpenStays,
  onOpenAudio,
  onOpenRoute,
  isSaved,
  onToggleSave
}) {
  const categoryInfo = CATEGORIES.find(c => c.id === site.category) || CATEGORIES[0];
  const minStayPrice = site.stays && site.stays.length > 0 ? site.stays[0].price : 1499;

  return (
    <div
      onClick={() => onSelect(site.id)}
      className={`group relative bg-slate-900/90 border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'border-amber-400 shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/30'
          : 'border-white/10 hover:border-amber-400/40 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5'
      }`}
    >
      {/* Card Image Banner */}
      <div className="relative h-40 w-full overflow-hidden bg-slate-950">
        <img
          src={site.image}
          alt={site.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?w=800&auto=format&fit=crop&q=80";
          }}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span 
            className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full backdrop-blur-md border shadow-md flex items-center gap-1"
            style={{ 
              backgroundColor: `${categoryInfo.color}25`, 
              color: categoryInfo.color,
              borderColor: `${categoryInfo.color}50` 
            }}
          >
            <span>{categoryInfo.icon}</span>
            <span>{categoryInfo.label}</span>
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(site.id);
            }}
            className={`pointer-events-auto p-2 rounded-full backdrop-blur-md border transition-all ${
              isSaved 
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md' 
                : 'bg-black/40 text-white border-white/20 hover:bg-black/60'
            }`}
            title={isSaved ? 'Remove from Saved' : 'Save to Trip Wishlist'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Rating & Location overlay */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-xs text-white font-medium">
          <div className="flex items-center gap-1 drop-shadow-md">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>{site.state}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 font-bold text-amber-300">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{site.rating}</span>
            <span className="text-[10px] text-slate-400 font-normal">({site.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-extrabold text-base text-white group-hover:text-amber-400 transition-colors line-clamp-1">
            {site.title}
          </h3>
          <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-1">
            <span className="flex items-center gap-1">
              <Mountain className="w-3 h-3 text-slate-400" />
              {site.altitude}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-400" />
              {site.bestTime}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {site.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {site.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-800 border border-white/5 text-slate-400">
              #{tag}
            </span>
          ))}
        </div>

        {/* Stay CTA & Quick Action Tools */}
        <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenStays(site.id);
            }}
            className="flex-1 flex items-center justify-between px-3 py-2 rounded-xl bg-orange-500/15 border border-orange-500/30 hover:border-orange-400 text-orange-300 font-bold text-xs transition-all hover:bg-orange-500/25 cursor-pointer"
          >
            <div className="flex items-center gap-1.5">
              <Hotel className="w-3.5 h-3.5 text-orange-400" />
              <span>Stays from ₹{minStayPrice}</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAudio(site.id);
            }}
            className="p-2 rounded-xl bg-slate-800/80 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-400 transition-all"
            title="Listen to 1-Min Audio Story"
          >
            <Volume2 className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenRoute(site.lat, site.lng, site.title);
            }}
            className="p-2 rounded-xl bg-slate-800/80 border border-white/10 hover:border-amber-400/40 text-slate-300 hover:text-amber-400 transition-all"
            title="Get Road Distance & Driving Route"
          >
            <Navigation className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}
