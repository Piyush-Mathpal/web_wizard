import React from 'react';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const LegacyTransition = ({ onOpenRegister }) => {
  return (
    <section className="relative py-24 md:py-32 bg-[#02050f] overflow-hidden text-center">
      {/* Energy Beam Line Connecting Timeline to Climax */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent shadow-[0_0_20px_#00f0ff]" />

      {/* Background Ambient Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-pink-500/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Concentric Cyber Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-cyan-500/10 animate-ring-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/15 animate-ring-reverse pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Energy Arrow */}
        <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-400 text-cyan-400 box-glow-cyan animate-bounce">
          <ChevronDown size={24} />
        </div>

        {/* Transition Heading */}
        <h2 className="font-tech text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight glow-cyan">
          THE JOURNEY <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-magenta-500 bg-clip-text text-transparent">LEADS HERE.</span>
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 max-w-xl text-base sm:text-xl text-gray-300 font-space font-medium leading-relaxed">
          From hackathons and technical challenges to a new generation of ideas.
        </p>

        {/* Big NIRVAN '26 Callout Card */}
        <div className="mt-10 p-8 rounded-3xl bg-gradient-to-br from-[#0a1226] via-[#0f1733] to-[#181136] border-2 border-cyan-400 shadow-[0_0_50px_rgba(0,240,255,0.35)] w-full max-w-2xl">
          <span className="text-xs font-space font-bold tracking-[0.3em] text-cyan-400 uppercase">
            GRAPHIC ERA HILL UNIVERSITY • 12 OCTOBER 2026
          </span>
          <h3 className="mt-2 font-tech text-4xl sm:text-6xl font-black text-white tracking-widest glow-cyan">
            NIRVAN ’26
          </h3>
          <p className="mt-2 font-space text-lg font-bold text-gray-200 uppercase tracking-widest glow-purple">
            WHERE IDEAS BECOME INNOVATION
          </p>
        </div>

        {/* Final CTA Header & Button */}
        <div className="mt-16 w-full">
          <h3 className="font-tech text-2xl sm:text-4xl font-extrabold text-white tracking-tight uppercase mb-8">
            READY TO BECOME PART OF THE <span className="text-cyan-400">NEXT CHAPTER?</span>
          </h3>

          <div className="relative inline-block group">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse-glow" />

            <button
              onClick={() => {
                audioEngine.playPortal();
                onOpenRegister();
              }}
              onMouseEnter={() => audioEngine.playHover()}
              className="relative flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#080e1e] border-2 border-cyan-400 text-white font-tech text-base sm:text-xl font-black tracking-widest uppercase transition-all duration-300 group-hover:scale-105 shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              <span>REGISTER FOR NIRVAN ’26</span>
              <ArrowRight size={20} className="text-cyan-400 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
