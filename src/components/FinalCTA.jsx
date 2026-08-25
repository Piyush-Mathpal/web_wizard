import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const FinalCTA = ({ onOpenRegister }) => {
  return (
    <section className="relative py-28 md:py-36 bg-[#030712] overflow-hidden">
      {/* Concentric Cyber Ambient Lighting Energy Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-cyan-500/10 animate-ring-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-magenta-500/15 animate-ring-reverse pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-purple-500/20 animate-pulse-glow pointer-events-none" />

      {/* Core Glowing Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-pink-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-space font-bold tracking-[0.2em] uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
          <Sparkles size={14} className="animate-spin" style={{ animationDuration: '6s' }} />
          <span>JOIN THE FESTIVAL</span>
        </div>

        {/* Heading */}
        <h2 className="font-tech text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase leading-tight glow-cyan">
          READY TO TURN YOUR IDEA INTO <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-magenta-500 bg-clip-text text-transparent">INNOVATION?</span>
        </h2>

        {/* Supporting text */}
        <p className="mt-6 max-w-xl text-base sm:text-xl text-gray-300 font-space font-medium leading-relaxed">
          Your challenge starts here. Enter NIRVAN ’26.
        </p>

        {/* Massive Glowing Neon Portal CTA Button */}
        <div className="mt-12 relative group">
          {/* Animated concentric ring aura behind button */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-magenta-500 rounded-full blur-xl opacity-60 group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-pulse-glow" />

          <button
            onClick={() => {
              audioEngine.playPortal();
              onOpenRegister();
            }}
            onMouseEnter={() => audioEngine.playHover()}
            className="relative flex items-center justify-center gap-4 px-10 sm:px-14 py-5 sm:py-6 rounded-full bg-[#080e1e] border-2 border-cyan-400/80 text-white font-tech text-lg sm:text-2xl font-black tracking-widest uppercase transition-all duration-300 group-hover:scale-110 group-hover:border-white shadow-[0_0_40px_rgba(0,240,255,0.5)] active:scale-95"
          >
            <span>REGISTER NOW</span>
            <ArrowRight size={24} className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Registration counter hint */}
        <p className="mt-8 text-xs font-space text-gray-400 tracking-wider">
          Limited slots available for Hackathon & CTF teams • Free Fest Pass Access
        </p>
      </div>
    </section>
  );
};
