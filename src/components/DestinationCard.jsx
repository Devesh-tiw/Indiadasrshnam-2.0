import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div
      onClick={() => onSelect(site.id)}
      className={`group relative bg-white/10 backdrop-blur-[40px] border border-white/30 rounded-[32px] overflow-hidden transition-all duration-300 cursor-pointer shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] ${
        isSelected
          ? 'border-white/60 ring-2 ring-white/30 shadow-[0_12px_48px_rgba(255,255,255,0.15)] bg-white/20'
          : 'hover:border-white/50 hover:bg-white/20 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
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
            className={`pointer-events-auto p-2 rounded-full backdrop-blur-3xl border transition-all shadow-[0_4px_12px_rgba(0,0,0,0.2)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] ${
              isSaved 
                ? 'bg-white/40 text-white border-white/60' 
                : 'bg-black/30 text-white border-white/20 hover:bg-white/30 hover:border-white/40'
            }`}
            title={isSaved ? 'Remove from Saved' : 'Save to Trip Wishlist'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Rating & Location overlay */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
          <div className="flex items-center gap-1 drop-shadow-lg">
            <MapPin className="w-3.5 h-3.5 text-white shadow-sm" />
            <span className="font-semibold text-white tracking-wide">{site.state}</span>
          </div>
          <div className="flex items-center gap-1 bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full border border-white/20 font-bold text-white shadow-[0_4px_16px_rgba(0,0,0,0.4)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
            <Star className="w-3 h-3 fill-white text-white drop-shadow-sm" />
            <span>{site.rating}</span>
            <span className="text-[10px] text-white/70 font-normal ml-0.5">({site.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 space-y-3">
        <div>
          <h3 className="font-extrabold text-lg tracking-tight text-white group-hover:text-white/90 transition-colors line-clamp-1 drop-shadow-sm">
            {site.title}
          </h3>
          <div className="flex items-center gap-3 text-[11px] text-white/70 mt-1 font-semibold">
            <span className="flex items-center gap-1.5">
              <Mountain className="w-3.5 h-3.5 opacity-90 text-white" />
              {site.altitude}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 opacity-90 text-white" />
              {site.bestTime}
            </span>
          </div>
        </div>

        <p className="text-[13px] text-white/80 line-clamp-2 leading-relaxed drop-shadow-sm">
          {site.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {site.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] font-bold tracking-wide px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              #{tag}
            </span>
          ))}
        </div>

        {/* Stay CTA & Quick Action Tools */}
        <div className="pt-4 border-t border-white/20 flex items-center justify-between gap-3">
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenStays(site.id);
            }}
            className="flex-1 flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/20 border border-white/30 hover:border-white/50 hover:bg-white/30 text-white font-bold text-xs transition-all cursor-pointer backdrop-blur-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)]"
          >
            <div className="flex items-center gap-2 drop-shadow-md">
              <Hotel className="w-3.5 h-3.5 text-white" />
              <span>Stays from ₹{minStayPrice}</span>
            </div>
            <ArrowUpRight className="w-4 h-4 opacity-90 text-white drop-shadow-sm" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenAudio(site.id);
            }}
            className="p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 text-white transition-all backdrop-blur-[40px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
            title="Listen to 1-Min Audio Story"
          >
            <Volume2 className="w-4 h-4 drop-shadow-md" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenRoute(site.lat, site.lng, site.title);
            }}
            className="p-2.5 rounded-2xl bg-white/10 border border-white/20 hover:border-white/40 hover:bg-white/20 text-white transition-all backdrop-blur-[40px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]"
            title="Get Road Distance & Driving Route"
          >
            <Navigation className="w-4 h-4 drop-shadow-md" />
          </button>

        </div>

      </div>

    </motion.div>
  );
}
