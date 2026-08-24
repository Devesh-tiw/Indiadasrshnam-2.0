import React, { useState, useEffect } from 'react';
import { X, Volume2, Play, Pause, Square, Sparkles, Sliders } from 'lucide-react';

export default function AudioGuideModal({ site, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rate, setRate] = useState(1.0);

  if (!site) return null;

  const narrationScript = `Welcome to ${site.title} in the scenic state of ${site.state}. ${site.desc} Historical and scriptural records trace its sacred antiquity back to ${site.eraLabel}. ${site.history || ''} Regular darshan hours are: ${site.darshanTimings || 'open sunrise to sunset'}. Verified OYO and boutique hotel options are available within 5 kilometers of the sanctum.`;

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlay = () => {
    if (!window.speechSynthesis) {
      alert("Speech synthesis is not supported on this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(narrationScript);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-[#121624] border border-white/15 rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-white">
                1-Minute Audio Story
              </h3>
              <p className="text-xs text-slate-400">
                Narrated History & Sacred Lore
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              handleStop();
              onClose();
            }}
            className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 flex flex-col items-center text-center space-y-5">
          
          {/* Animated Waveform Visualizer */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-3xl shadow-xl shadow-orange-500/30 relative">
            <span>🕉️</span>
            {isPlaying && (
              <span className="absolute inset-0 rounded-full border-2 border-amber-400 animate-ping opacity-60" />
            )}
          </div>

          <div>
            <h4 className="font-extrabold text-lg text-white">{site.title}</h4>
            <p className="text-xs text-amber-400 font-semibold">{site.state} • {site.eraLabel}</p>
          </div>

          {/* Script Card */}
          <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed text-left max-h-36 overflow-y-auto">
            {narrationScript}
          </div>

          {/* Speed Selector */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Sliders className="w-3.5 h-3.5" />
            <span>Speed:</span>
            {[0.8, 1.0, 1.2].map(s => (
              <button
                key={s}
                onClick={() => {
                  setRate(s);
                  if (isPlaying) {
                    handleStop();
                  }
                }}
                className={`px-2 py-0.5 rounded-md border text-[11px] font-bold ${
                  rate === s
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : 'bg-slate-800 text-slate-400 border-white/10 hover:text-white'
                }`}
              >
                {s}x
              </button>
            ))}
          </div>

          {/* Player Controls */}
          <div className="flex items-center gap-3 w-full pt-2">
            {!isPlaying ? (
              <button
                onClick={handlePlay}
                className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Play Voice Narrative</span>
              </button>
            ) : (
              <button
                onClick={handleStop}
                className="flex-1 py-3 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 font-extrabold text-xs hover:bg-red-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Square className="w-4 h-4 fill-current" />
                <span>Stop Narration</span>
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
