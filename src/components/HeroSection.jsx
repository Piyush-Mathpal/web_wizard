import React from 'react';
import { Calendar, MapPin, ArrowRight, Sparkles, Shield, Cpu, Code2 } from 'lucide-react';
import { FESTIVAL_CONFIG } from '../config/eventConfig';
import { TechOrb3D } from './TechOrb3D';
import { CountdownTimer } from './CountdownTimer';
import { audioEngine } from '../utils/audioEngine';

export const HeroSection = ({ onOpenRegister }) => {
  const handleScrollToEvents = () => {
    audioEngine.playClick();
    const el = document.getElementById('events');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background radial spotlights & ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-magenta-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-space font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)] animate-pulse-glow">
          <Sparkles size={14} className="text-cyan-400" />
          <span>{FESTIVAL_CONFIG.subtitle}</span>
        </div>

        {/* Massive Futuristic Heading */}
        <h1 className="font-tech text-6xl sm:text-8xl md:text-9xl font-black tracking-tight text-white uppercase leading-none drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
          NIRVAN <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent glow-cyan">’26</span>
        </h1>

        {/* Tagline */}
        <h2 className="mt-4 font-space text-lg sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-gray-200 uppercase glow-purple">
          {FESTIVAL_CONFIG.tagline}
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-gray-400 font-space leading-relaxed">
          {FESTIVAL_CONFIG.description}
        </p>

        {/* Event Date & Venue Badge */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-space font-semibold tracking-wider text-cyan-300">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-cyan-500/20 backdrop-blur-md">
            <Calendar size={16} className="text-cyan-400" />
            <span>{FESTIVAL_CONFIG.dateDisplay}</span>
          </div>
          <span className="hidden sm:inline text-cyan-500/40">•</span>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/80 border border-cyan-500/20 backdrop-blur-md">
            <MapPin size={16} className="text-magenta-400" />
            <span>{FESTIVAL_CONFIG.campusLocation}</span>
          </div>
        </div>

        {/* 3D WebGL Technology Orb Visual */}
        <div className="my-6">
          <TechOrb3D />
        </div>

        {/* Live Countdown Timer Component */}
        <CountdownTimer />

        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA: Explore Events */}
          <button
            onClick={handleScrollToEvents}
            onMouseEnter={() => audioEngine.playHover()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900/90 border border-cyan-500/40 text-cyan-400 font-space font-bold text-sm tracking-wider flex items-center justify-center gap-3 hover:bg-cyan-500/10 hover:border-cyan-400 hover:text-white transition-all duration-300 box-glow-cyan group"
          >
            <span>EXPLORE EVENTS</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Register Now */}
          <button
            onClick={() => {
              audioEngine.playPortal();
              onOpenRegister();
            }}
            onMouseEnter={() => audioEngine.playHover()}
            className="relative w-full sm:w-auto group overflow-hidden rounded-xl p-[2px] font-space font-bold text-sm tracking-wider text-white shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-magenta-500 animate-pulse-glow" />
            <span className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-[10px] bg-[#080d1a] group-hover:bg-opacity-80 transition-all">
              <Sparkles size={18} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>REGISTER NOW</span>
            </span>
          </button>
        </div>

        {/* Ambient Tech Floating Feature Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-gray-400 text-xs font-space">
          <div className="flex items-center gap-2">
            <Cpu size={14} className="text-cyan-400" />
            <span>24H Hackathon</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={14} className="text-magenta-400" />
            <span>Cyber CTF Arena</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 size={14} className="text-purple-400" />
            <span>Web-A-Thon</span>
          </div>
        </div>

      </div>
    </section>
  );
};
