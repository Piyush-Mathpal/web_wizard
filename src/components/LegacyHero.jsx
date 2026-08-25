import React from 'react';
import { LEGACY_HERO_CONFIG } from '../config/legacyData';
import { Sparkles, Compass } from 'lucide-react';

export const LegacyHero = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Small Glowing Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-space font-bold tracking-[0.25em] uppercase mb-6 shadow-[0_0_20px_rgba(0,240,255,0.2)] animate-pulse-glow">
          <Compass size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>{LEGACY_HERO_CONFIG.label}</span>
        </div>

        {/* Hero Heading */}
        <h1 className="font-tech text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase leading-none glow-cyan">
          THE NIRVAN <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent">LEGACY</span>
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 font-space text-lg sm:text-2xl font-bold tracking-[0.15em] text-gray-200 uppercase glow-purple">
          “{LEGACY_HERO_CONFIG.subtitle}”
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-400 font-space leading-relaxed">
          {LEGACY_HERO_CONFIG.description}
        </p>

        {/* Disclaimer / Historical Context Badge */}
        <div className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-purple-500/30 text-purple-300 text-xs font-space font-semibold tracking-widest uppercase backdrop-blur-md">
          <Sparkles size={14} className="text-purple-400" />
          <span>{LEGACY_HERO_CONFIG.disclaimer}</span>
        </div>

      </div>
    </section>
  );
};
