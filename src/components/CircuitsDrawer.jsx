import React from 'react';
import { X, Route, MapPin, Clock, ArrowRight, Check } from 'lucide-react';
import { CIRCUITS } from '../data/destinations';

export default function CircuitsDrawer({
  isOpen,
  onClose,
  activeCircuit,
  onSelectCircuit
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#111522] border-l border-white/10 shadow-2xl flex flex-col animate-in slide-in-from-right duration-250">
          
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/70">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Route className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-base text-white">
                  Grand Yatra & Mountain Circuits
                </h3>
                <p className="text-xs text-slate-400">
                  Pre-mapped multi-day driving itineraries
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

          {/* Circuits List */}
          <div className="p-4 overflow-y-auto space-y-3 flex-1">
            {CIRCUITS.map(c => {
              const isActive = activeCircuit && activeCircuit.id === c.id;

              return (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectCircuit(isActive ? null : c);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500/10 border-amber-400 shadow-lg shadow-amber-500/10'
                      : 'bg-slate-900/80 border-white/10 hover:border-white/20 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {c.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {c.duration}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-white mb-1.5">{c.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">{c.description}</p>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold">
                    <span className="text-emerald-400">🛣️ {c.distance}</span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <span>{isActive ? 'Active on Map' : 'View Path on Map'}</span>
                      {isActive ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
