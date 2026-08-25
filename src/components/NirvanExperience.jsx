import React from 'react';
import { FESTIVAL_CONFIG } from '../config/eventConfig';
import { Zap, Trophy, Users, Clock } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const NirvanExperience = () => {
  const statIcons = [Users, Trophy, Zap, Clock];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#050914]/80">
      {/* Animated Horizontal Cyber Glow Line Divider */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_15px_#00f0ff]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-space font-semibold tracking-widest uppercase mb-4">
            <span>THE NIRVAN EXPERIENCE</span>
          </div>

          <h2 className="font-tech text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight glow-purple">
            ONE FEST. <span className="bg-gradient-to-r from-cyan-400 to-magenta-500 bg-clip-text text-transparent">COUNTLESS EXPERIENCES.</span>
          </h2>

          <p className="mt-4 text-gray-300 font-space text-sm sm:text-base leading-relaxed">
            From intense coding battles to cybersecurity challenges, gaming arenas and clue-driven adventures — <strong className="text-cyan-400 font-semibold">NIRVAN ’26</strong> brings technology and competition together under one roof.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVAL_CONFIG.stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                onMouseEnter={() => audioEngine.playHover()}
                className="group relative p-6 rounded-2xl bg-[#0a0f1d]/80 backdrop-blur-xl border border-cyan-500/15 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 box-glow-cyan"
              >
                {/* Neon Icon badge */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>

                <div className="font-tech text-3xl sm:text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>

                <div className="mt-1 font-space text-sm font-bold text-gray-200 uppercase tracking-wider">
                  {stat.label}
                </div>

                <div className="mt-1 text-xs text-gray-400 font-space">
                  {stat.sub}
                </div>

                {/* Cyber Corner Glow */}
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-tl-full pointer-events-none group-hover:bg-cyan-500/15 transition-colors" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Bottom Horizontal Divider */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </section>
  );
};
