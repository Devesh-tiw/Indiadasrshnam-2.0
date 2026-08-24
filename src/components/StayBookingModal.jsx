import React from 'react';
import { X, Hotel, Star, MapPin, Check, ExternalLink, ArrowRight } from 'lucide-react';

export default function StayBookingModal({ site, onClose }) {
  if (!site) return null;

  const staysList = site.stays || [
    { name: `OYO Premium Stay near ${site.title}`, type: "OYO Premium", distance: "1.2 km", rating: 4.8, price: 1899, amenities: ["Geyser", "AC", "Temple View", "Free WiFi"] },
    { name: `OYO Townhouse Heritage Suites`, type: "OYO Townhouse", distance: "2.4 km", rating: 4.7, price: 2350, amenities: ["Restaurant", "Power Backup", "AC"] }
  ];

  const oyoQuery = encodeURIComponent(`${site.title} ${site.state}`);
  const mmtUrl = `https://www.makemytrip.com/hotels/hotel-listing/?searchText=${oyoQuery}`;
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${oyoQuery}`;
  const redBusUrl = `https://www.redbus.in/bus-tickets/search?toCity=${encodeURIComponent(site.state)}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121624] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">
                Verified Stays & Hotels
              </h3>
              <p className="text-xs text-slate-400">
                Near <span className="text-amber-400 font-semibold">{site.title}</span>, {site.state}
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
        <div className="p-5 overflow-y-auto space-y-4">
          
          <div className="text-xs text-slate-300">
            Handpicked OYO rooms, townhouses, and heritage stays located within direct proximity of {site.title}:
          </div>

          {/* Stays Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {staysList.map((stay, idx) => {
              const oyoDeepLink = `https://www.oyorooms.com/search?location=${oyoQuery}&latitude=${site.lat}&longitude=${site.lng}&utm_source=indiadarshnam`;

              return (
                <div
                  key={idx}
                  className="bg-slate-900/90 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-orange-500/50 transition-all hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30">
                        {stay.type}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-amber-300">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{stay.rating}</span>
                      </div>
                    </div>

                    <h4 className="font-bold text-sm text-white mb-1">{stay.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{stay.distance} away</span>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {stay.amenities && stay.amenities.map(am => (
                        <span key={am} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 flex items-center gap-1">
                          <Check className="w-2.5 h-2.5 text-emerald-400" />
                          {am}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-base font-extrabold text-emerald-400">₹{stay.price}</span>
                      <span className="text-[10px] text-slate-400"> / night</span>
                    </div>

                    <a
                      href={oyoDeepLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs font-bold flex items-center gap-1.5 hover:opacity-95 shadow-md shadow-orange-500/20 transition-transform active:scale-95"
                    >
                      <span>Book on OYO</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Travel Aggregator Comparison */}
          <div className="mt-4 p-4 rounded-2xl bg-slate-900/60 border border-white/10 space-y-2">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Compare or Book Multi-Modal Transit:
            </h5>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 border border-white/10 transition-colors"
              >
                <span>Booking.com</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={mmtUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 border border-white/10 transition-colors"
              >
                <span>MakeMyTrip</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <a
                href={redBusUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 border border-white/10 transition-colors"
              >
                <span>🚌 RedBus Pilgrim Buses</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
