import React, { useState } from 'react';
import { X, Sparkles, Calendar, DollarSign, MapPin, CheckCircle2, Download, Copy, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AiPlannerModal({ onClose }) {
  const [startCity, setStartCity] = useState('Delhi');
  const [focus, setFocus] = useState('chardham');
  const [days, setDays] = useState(5);
  const [budgetTier, setBudgetTier] = useState('comfort');
  const [travelerType, setTravelerType] = useState('family');
  const [isGenerated, setIsGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const getPlanDetails = () => {
    const costPerDay = budgetTier === 'budget' ? 1600 : budgetTier === 'comfort' ? 2400 : 4500;
    const totalCost = days * costPerDay;

    let focusTitle = "Uttarakhand Himalayan Char Dham Yatra";
    if (focus === 'up-quad') focusTitle = "Uttar Pradesh Sacred Maha Quad Yatra (Kashi, Ayodhya, Prayagraj, Mathura, Naimisharanya)";
    if (focus === 'all-chardham') focusTitle = "All-India Maha Char Dham 4 Corners (Badrinath, Puri, Rameswaram, Dwarka)";
    if (focus === 'buddhist') focusTitle = "Sacred Buddhist Enlightenment Circuit (Bodh Gaya, Sarnath, Nalanda)";
    if (focus === 'himachal') focusTitle = "Himachal Alpine & Valley Mountain Loop";
    if (focus === 'jyotirlinga') focusTitle = "Sacred 12 Jyotirlinga National Trail";
    if (focus === 'chola') focusTitle = "Grand Chola Dravidian Architecture Heritage";

    return {
      title: focusTitle,
      totalCost,
      dailyCost: costPerDay,
      itinerary: [
        { day: 1, title: `Departure from ${startCity} to Gateway Hub`, details: `Morning departure from ${startCity}. Check-in at OYO Partner Stay. Evening sunset walk & local Aarti ceremony.` },
        { day: 2, title: `Primary Temple Sanctum / Alpine Trek Excursion`, details: `Early 6:00 AM VIP Darshan & exploration. Scenic photography & spiritual meditation.` },
        { day: 3, title: `Scenic Mountain Roadtrip to Secondary Shrine`, details: `Drive through mountain corridors with rest stops. Check-in at pre-reserved OYO Townhouse.` },
        ...(days >= 5 ? [{ day: 4, title: `Cultural Heritage & Local Cuisine Discovery`, details: `Visit ancient rock inscriptions, local artisan bazaars, and traditional satvik dining.` }] : []),
        ...(days >= 5 ? [{ day: 5, title: `Morning Prayer & Return Journey towards ${startCity}`, details: `Concluding prayers, prasad packaging, and comfortable return journey.` }] : [])
      ]
    };
  };

  const plan = getPlanDetails();

  const handleCopy = () => {
    const text = `Plan: ${plan.title}\nDays: ${days}\nOrigin: ${startCity}\nEstimated Stay Budget: ₹${plan.totalCost}\nGenerated on BharatDarshnam 2.0`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121624] border border-white/15 rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">
                AI Pilgrimage & Mountain Itinerary Planner
              </h3>
              <p className="text-xs text-slate-400">
                Customized day-wise routes, darshan timing tips & stay budgets
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

        {/* Modal Content */}
        <div className="p-5 overflow-y-auto space-y-5">
          
          {/* Input Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Starting City / Transit Point
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={startCity}
                  onChange={(e) => setStartCity(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
                  placeholder="e.g. Delhi, Mumbai, Bengaluru"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Yatra / Mountain Circuit
              </label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="up-quad">UP Sacred Quad (Ayodhya, Kashi, Prayagraj, Mathura, Naimisharanya)</option>
                <option value="chardham">Uttarakhand Himalayan Char Dham Yatra</option>
                <option value="all-chardham">All-India 4-Corners Char Dham (Puri, Dwarka, Rameswaram, Badri)</option>
                <option value="buddhist">Buddhist Circuit (Bodh Gaya, Sarnath, Nalanda)</option>
                <option value="himachal">Himachal Mountains & Solang</option>
                <option value="jyotirlinga">12 Jyotirlinga Trail (Somnath, Mahakal, Kashi, Kedarnath)</option>
                <option value="chola">Tamil Nadu Grand Chola Temples</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Trip Duration
              </label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-10 px-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value={3}>3 Days (Weekend Express)</option>
                <option value={5}>5 Days (Standard Recommended)</option>
                <option value={8}>8 Days (Comprehensive Yatra)</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-300 uppercase tracking-wider block mb-1">
                Stay Budget Preference
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(e.target.value)}
                className="w-full h-10 px-3 rounded-xl bg-slate-900 border border-white/10 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="budget">OYO Budget (~₹1,600/night)</option>
                <option value="comfort">OYO Townhouse / Comfort (~₹2,400/night)</option>
                <option value="luxury">Luxury Heritage Villa (~₹4,500/night)</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleGenerate}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Optimized Travel Plan</span>
          </button>

          {/* Generated Result */}
          {isGenerated && (
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 space-y-4 animate-in fade-in duration-300">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-400">
                    Customized Itinerary
                  </span>
                  <h4 className="font-extrabold text-base text-white mt-1">{plan.title}</h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 flex items-center gap-1.5 border border-white/10 transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Day-by-Day Steps */}
              <div className="space-y-3">
                {plan.itinerary.map(item => (
                  <div key={item.day} className="flex gap-3 items-start">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {item.day}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">{item.title}</div>
                      <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.details}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Budget Estimation Strip */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Estimated Stay Budget ({days} Nights)</div>
                  <div className="text-base font-extrabold text-emerald-400">₹{plan.totalCost} Total</div>
                </div>

                <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Free Cancellation Available
                </span>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
