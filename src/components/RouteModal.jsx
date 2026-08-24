import React, { useState, useEffect } from 'react';
import { X, Navigation, Car, AlertCircle, ExternalLink, MapPin } from 'lucide-react';

export default function RouteModal({ destLat, destLng, destName, onClose }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [routeInfo, setRouteInfo] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const userLat = pos.coords.latitude;
        const userLng = pos.coords.longitude;

        try {
          const url = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${destLng},${destLat}?overview=false`;
          const res = await fetch(url);
          const data = await res.json();

          if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
            throw new Error('No driving route found on land.');
          }

          const distKm = (data.routes[0].distance / 1000).toFixed(1);
          const hrs = Math.floor(data.routes[0].duration / 3600);
          const mins = Math.floor((data.routes[0].duration % 3600) / 60);
          const gMaps = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destLat},${destLng}&travelmode=driving`;

          setRouteInfo({
            distance: distKm,
            hours: hrs,
            minutes: mins,
            mapsLink: gMaps
          });
          setLoading(false);
        } catch (err) {
          setError('Unable to calculate driving distance right now. Please ensure destination is reachable by road.');
          setLoading(false);
        }
      },
      (err) => {
        setError('Location permission was denied. Please allow GPS permissions to calculate distance.');
        setLoading(false);
      },
      { timeout: 10000 }
    );
  }, [destLat, destLng]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121624] border border-white/15 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">
                Road Route & Distance
              </h3>
              <p className="text-xs text-slate-400">
                To <span className="text-amber-400 font-semibold">{destName}</span>
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

        {/* Modal Body */}
        <div className="p-6 text-center space-y-4">
          
          {loading && (
            <div className="py-8 space-y-3">
              <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-xs text-slate-300">
                Requesting your GPS position & calculating OSRM driving path...
              </p>
            </div>
          )}

          {error && (
            <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2 text-left">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {routeInfo && (
            <div className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-3xl">
                🛣️
              </div>

              <div>
                <div className="text-3xl font-extrabold text-white">
                  {routeInfo.distance} <span className="text-sm font-semibold text-slate-400">km</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Estimated Driving Time: <strong className="text-amber-400">{routeInfo.hours}h {routeInfo.minutes}m</strong>
                </div>
              </div>

              <a
                href={routeInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs shadow-lg shadow-emerald-600/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Start Live Google Maps GPS Navigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <p className="text-[10px] text-slate-500">
                Live land routing calculated via Open Source Routing Machine (OSRM)
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
