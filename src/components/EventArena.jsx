import React, { useState } from 'react';
import { EVENTS_DATA } from '../config/eventConfig';
import { Terminal, Layout, ShieldAlert, Compass, Gamepad2, Lightbulb, ArrowRight, X, Sparkles, Trophy, Users, Clock, CheckCircle2 } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

const iconMap = {
  Terminal,
  Layout,
  ShieldAlert,
  Compass,
  Gamepad2,
  Lightbulb,
};

export const EventArena = ({ onOpenRegister }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    audioEngine.playClick();
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    audioEngine.playClick();
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-magenta-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-space font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} />
            <span>COMPETITION ARENA</span>
          </div>

          <h2 className="font-tech text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none glow-cyan">
            EVENT <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent">ARENA</span>
          </h2>

          <p className="mt-4 font-space text-base sm:text-lg text-gray-300">
            Choose your challenge. Make your mark.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EVENTS_DATA.map((event) => {
            const Icon = iconMap[event.icon] || Terminal;

            // Border & Glow styling by accentColor
            const accentBorder =
              event.accentColor === 'cyan'
                ? 'border-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,240,255,0.35)]'
                : event.accentColor === 'magenta'
                ? 'border-magenta-500/25 hover:border-pink-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]'
                : 'border-purple-500/25 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]';

            const badgeBg =
              event.accentColor === 'cyan'
                ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                : event.accentColor === 'magenta'
                ? 'bg-pink-500/10 text-pink-400 border-pink-500/30'
                : 'bg-purple-500/10 text-purple-400 border-purple-500/30';

            const iconGradient =
              event.accentColor === 'cyan'
                ? 'from-cyan-500/20 to-blue-600/20 text-cyan-400 border-cyan-500/40'
                : event.accentColor === 'magenta'
                ? 'from-pink-500/20 to-purple-600/20 text-pink-400 border-pink-500/40'
                : 'from-purple-500/20 to-indigo-600/20 text-purple-400 border-purple-500/40';

            return (
              <div
                key={event.id}
                onClick={() => handleCardClick(event)}
                onMouseEnter={() => audioEngine.playHover()}
                className={`group relative flex flex-col justify-between p-7 rounded-2xl bg-[#090e1c]/80 backdrop-blur-xl border ${accentBorder} transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
              >
                {/* Ambient Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Top Row: Icon & Category Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconGradient} border flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                      <Icon size={28} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-space font-semibold tracking-wider border ${badgeBg}`}>
                      {event.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-tech text-2xl font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-space text-xs text-gray-400 tracking-widest uppercase mt-0.5">
                    {event.tagline}
                  </p>

                  {/* Description */}
                  <p className="mt-4 font-space text-sm text-gray-300 leading-relaxed">
                    {event.shortDesc}
                  </p>
                </div>

                {/* Card Footer Interaction */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-space text-gray-400 group-hover:text-gray-200 transition-colors font-medium">
                    {event.duration}
                  </span>

                  <button className="flex items-center gap-2 text-xs font-tech font-bold text-cyan-400 group-hover:text-white transition-colors">
                    <span>EXPLORE</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Futuristic Corner Tech Bracket Accent */}
                <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/80 transition-colors" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for In-Depth Event Details */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090f20] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.3)] overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400">
                {React.createElement(iconMap[selectedEvent.icon] || Terminal, { size: 24 })}
              </div>
              <div>
                <h3 className="font-tech text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                  {selectedEvent.title}
                </h3>
                <p className="font-space text-xs text-cyan-400 uppercase tracking-widest">
                  {selectedEvent.tagline}
                </p>
              </div>
            </div>

            {/* Full Description */}
            <p className="font-space text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {selectedEvent.fullDesc}
            </p>

            {/* Quick Spec Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-gray-900/80 border border-cyan-500/20 flex items-center gap-3">
                <Trophy size={18} className="text-yellow-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-space text-gray-400 uppercase">Prize Pool</div>
                  <div className="text-xs font-bold text-white">{selectedEvent.prizes}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-900/80 border border-cyan-500/20 flex items-center gap-3">
                <Users size={18} className="text-cyan-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-space text-gray-400 uppercase">Team Size</div>
                  <div className="text-xs font-bold text-white">{selectedEvent.teamSize}</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-900/80 border border-cyan-500/20 flex items-center gap-3">
                <Clock size={18} className="text-pink-400 shrink-0" />
                <div>
                  <div className="text-[10px] font-space text-gray-400 uppercase">Duration</div>
                  <div className="text-xs font-bold text-white">{selectedEvent.duration}</div>
                </div>
              </div>
            </div>

            {/* Event Tracks / Domains */}
            {selectedEvent.tracks && (
              <div className="mb-6">
                <h4 className="font-space text-xs font-bold text-gray-300 uppercase tracking-widest mb-3">
                  EVENT TRACKS & DOMAINS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedEvent.tracks.map((track) => (
                    <div key={track} className="flex items-center gap-2 text-xs font-space text-gray-300 bg-white/5 p-2 rounded-lg border border-white/10">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{track}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Register CTA Action in Modal */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2.5 rounded-xl text-xs font-space text-gray-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleCloseModal();
                  onOpenRegister(selectedEvent.id);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-tech text-xs font-bold tracking-wider box-glow-cyan hover:scale-105 transition-all"
              >
                REGISTER FOR {selectedEvent.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
