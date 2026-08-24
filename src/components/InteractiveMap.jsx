import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CATEGORIES } from '../data/destinations';
import { Sparkles, Maximize2, Map as MapIcon } from 'lucide-react';

export default function InteractiveMap({
  destinations,
  selectedSiteId,
  onSelectSite,
  activeCircuit,
  onOpenStays,
  onOpenAudio,
  onOpenRoute,
  onOpenAiPlanner
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersGroupRef = useRef(null);
  const polylineRef = useRef(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [22.9734, 78.6569], // Central India
        zoom: 5,
        minZoom: 4,
        maxZoom: 17,
        zoomControl: false
      });

      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // CartoDB Voyager High-Res Dark/Modern Tiles
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
      }).addTo(map);

      markersGroupRef.current = L.layerGroup().addTo(map);
      mapInstanceRef.current = map;
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update Markers
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !markersGroupRef.current) return;

    markersGroupRef.current.clearLayers();

    destinations.forEach(site => {
      const cat = CATEGORIES.find(c => c.id === site.category) || CATEGORIES[0];
      const isSelected = site.id === selectedSiteId;

      const customHtml = `
        <div style="
          width: ${isSelected ? '44px' : '36px'};
          height: ${isSelected ? '44px' : '36px'};
          border-radius: 50%;
          background: #0f121a;
          border: 2.5px solid ${cat.color};
          box-shadow: 0 0 ${isSelected ? '20px' : '10px'} ${cat.color}80;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${isSelected ? '20px' : '16px'};
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: ${isSelected ? 'scale(1.15)' : 'scale(1)'};
        ">
          ${cat.icon}
        </div>
      `;

      const icon = L.divIcon({
        className: 'custom-pin-icon',
        html: customHtml,
        iconSize: [isSelected ? 44 : 36, isSelected ? 44 : 36],
        iconAnchor: [isSelected ? 22 : 18, isSelected ? 22 : 18],
        popupAnchor: [0, -20]
      });

      const marker = L.marker([site.lat, site.lng], { icon }).addTo(markersGroupRef.current);

      // Bind rich popup
      const minPrice = site.stays && site.stays.length > 0 ? site.stays[0].price : 1499;
      
      const popupHtml = `
        <div style="padding: 14px; font-family: system-ui, sans-serif; background:#111522; color:#fff; border-radius:16px; width:280px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <span style="font-size:10px; font-weight:800; text-transform:uppercase; color:${cat.color};">${site.state} • ${site.eraLabel}</span>
            <span style="font-size:11px; font-weight:700; color:#fbbf24;">★ ${site.rating}</span>
          </div>
          <div style="font-size:15px; font-weight:800; color:#fff; margin-bottom:6px;">${site.title}</div>
          <div style="font-size:11px; color:#94a3b8; line-height:1.4; margin-bottom:10px;">${site.desc}</div>
          
          <div style="display:grid; grid-template-columns:1fr; gap:6px;">
            <button id="popup-stay-${site.id}" style="
              background: linear-gradient(135deg, #ea580c, #f59e0b);
              color: #000;
              border: none;
              font-weight: 800;
              font-size: 11px;
              padding: 8px 12px;
              border-radius: 8px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
            ">
              🏨 View Verified Stays (from ₹${minPrice}) ↗
            </button>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
              <button id="popup-audio-${site.id}" style="background:#1e2436; color:#fff; border:1px solid rgba(255,255,255,0.1); font-size:10px; font-weight:700; padding:6px; border-radius:6px; cursor:pointer;">
                🎧 Audio Guide
              </button>
              <button id="popup-route-${site.id}" style="background:#1e2436; color:#fff; border:1px solid rgba(255,255,255,0.1); font-size:10px; font-weight:700; padding:6px; border-radius:6px; cursor:pointer;">
                🚗 Drive Route
              </button>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupHtml, {
        maxWidth: 320,
        className: 'custom-modern-popup'
      });

      marker.on('popupopen', () => {
        const btnStay = document.getElementById(`popup-stay-${site.id}`);
        const btnAudio = document.getElementById(`popup-audio-${site.id}`);
        const btnRoute = document.getElementById(`popup-route-${site.id}`);

        if (btnStay) btnStay.onclick = () => onOpenStays(site.id);
        if (btnAudio) btnAudio.onclick = () => onOpenAudio(site.id);
        if (btnRoute) btnRoute.onclick = () => onOpenRoute(site.lat, site.lng, site.title);
      });

      marker.on('click', () => {
        onSelectSite(site.id);
      });
    });
  }, [destinations, selectedSiteId]);

  // Handle Pan to selected site
  useEffect(() => {
    if (!selectedSiteId || !mapInstanceRef.current) return;
    const site = destinations.find(s => s.id === selectedSiteId);
    if (site) {
      mapInstanceRef.current.flyTo([site.lat, site.lng], 12, { animate: true, duration: 1.2 });
    }
  }, [selectedSiteId]);

  // Handle Circuit Polyline Rendering
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (polylineRef.current) {
      map.removeLayer(polylineRef.current);
      polylineRef.current = null;
    }

    if (activeCircuit && activeCircuit.polyline) {
      polylineRef.current = L.polyline(activeCircuit.polyline, {
        color: '#F59E0B',
        weight: 4,
        opacity: 0.9,
        dashArray: '10, 10'
      }).addTo(map);

      map.fitBounds(polylineRef.current.getBounds(), { padding: [50, 50] });
    }
  }, [activeCircuit]);

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo([22.9734, 78.6569], 5, { duration: 1.2 });
    }
  };

  return (
    <div className="relative w-full h-full bg-[#0b0e14] overflow-hidden">
      <div ref={mapContainerRef} className="w-full h-full z-0" />

      {/* Floating Map Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
        <button
          onClick={handleRecenter}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-white/15 text-white hover:text-amber-400 hover:border-amber-400/50 shadow-xl backdrop-blur-md transition-all cursor-pointer"
          title="Recenter India Map"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        <button
          onClick={onOpenAiPlanner}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs shadow-xl shadow-amber-500/25 hover:scale-102 transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Plan Trip Route</span>
        </button>
      </div>

      {/* Active Circuit Floating Banner */}
      {activeCircuit && (
        <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-md z-20 bg-slate-900/95 border border-amber-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300">
              Active Circuit: {activeCircuit.badge}
            </span>
            <span className="text-xs font-bold text-slate-400">⏱️ {activeCircuit.duration}</span>
          </div>
          <h4 className="font-extrabold text-sm text-white mb-1">{activeCircuit.title}</h4>
          <p className="text-xs text-slate-300 line-clamp-2">{activeCircuit.description}</p>
          <div className="flex items-center justify-between text-xs font-bold pt-2 mt-2 border-t border-white/10">
            <span className="text-emerald-400">🛣️ Total Route: {activeCircuit.distance}</span>
          </div>
        </div>
      )}

    </div>
  );
}
