import React from 'react';
import { Calendar, MapPin, Sparkles, Trophy, ArrowRight, Zap, Flame } from 'lucide-react';
import { AnimatedStatCounter } from './AnimatedStatCounter';
import { audioEngine } from '../utils/audioEngine';

export const TimelineEventCard = ({ event, index, isMobile, onExploreClick }) => {
  const isEven = index % 2 === 0;

  // Visual styling depending on whether it's Graph-E-Thon 3.0 or NIRVAN '26 Destination
  const isLatest = event.isLatest;
  const isDestination = event.isDestinationNode;

  const getBorderColor = () => {
    if (isDestination) return 'border-cyan-400 box-glow-cyan-lg shadow-[0_0_50px_rgba(0,240,255,0.4)]';
    if (isLatest) return 'border-purple-400/80 shadow-[0_0_35px_rgba(168,85,247,0.35)]';
    if (event.accentColor === 'cyan') return 'border-cyan-500/30 hover:border-cyan-400';
    if (event.accentColor === 'purple') return 'border-purple-500/30 hover:border-purple-400';
    return 'border-pink-500/30 hover:border-pink-400';
  };

  return (
    <div
      onMouseEnter={() => audioEngine.playHover()}
      className={`group relative p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
        isDestination
          ? 'bg-gradient-to-br from-[#0c1630] via-[#101b3b] to-[#181136] border-2'
          : isLatest
          ? 'bg-gradient-to-br from-[#0a1024] to-[#130f2b] border'
          : 'bg-[#0a0f1d]/85 border'
      } ${getBorderColor()}`}
    >
      {/* Background Ambient Glow Shader */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Cyber Brackets */}
      <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />
      <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cyan-400/40 group-hover:border-cyan-400 transition-colors" />

      {/* Top Header Badge Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        {/* Special Status Badge */}
        {isDestination ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-space text-[11px] font-extrabold tracking-widest uppercase animate-pulse-glow">
            <Sparkles size={13} className="text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>{event.statusBadge}</span>
          </span>
        ) : isLatest ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400 text-purple-300 font-space text-[11px] font-extrabold tracking-widest uppercase">
            <Flame size={13} className="text-pink-400" />
            <span>{event.specialLabel}</span>
          </span>
        ) : (
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-space text-[11px] font-semibold tracking-wider">
            {event.type}
          </span>
        )}

        {/* Event Number Identifier */}
        <span className="font-tech text-3xl font-black tracking-widest text-cyan-500/30 group-hover:text-cyan-400 group-hover:scale-110 transition-all">
          #{event.number}
        </span>
      </div>

      {/* Date & Location Line */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-space text-cyan-400 mb-3 font-semibold">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} className="text-cyan-400" />
          <span>{event.date}</span>
        </div>
        {event.location && (
          <div className="flex items-center gap-1.5 text-gray-300">
            <MapPin size={14} className="text-pink-400" />
            <span>{event.location}</span>
          </div>
        )}
      </div>

      {/* Event Title */}
      <h3 className={`font-tech font-black uppercase tracking-tight text-white ${
        isDestination ? 'text-3xl sm:text-4xl text-cyan-300 glow-cyan' : isLatest ? 'text-2xl sm:text-3xl text-purple-200' : 'text-xl sm:text-2xl'
      }`}>
        {event.title}
      </h3>

      {/* Subtitle / Tagline */}
      {event.tagline && (
        <p className="mt-1 font-space text-sm font-bold text-cyan-400 uppercase tracking-widest glow-cyan">
          “{event.tagline}”
        </p>
      )}

      {/* Main Description */}
      <p className="mt-3 font-space text-xs sm:text-sm text-gray-300 leading-relaxed">
        {event.description}
      </p>

      {/* Key Highlight Banner if present */}
      {event.highlight && (
        <div className="mt-4 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 font-space text-xs font-bold text-cyan-300 tracking-wider uppercase flex items-center gap-2">
          <Zap size={14} className="text-cyan-400 shrink-0" />
          <span>{event.highlight}</span>
        </div>
      )}

      {/* SPECIAL GRAPH-E-THON 3.0 ANIMATED COUNTER STATS */}
      {isLatest && event.stats && (
        <div className="mt-6 pt-5 border-t border-purple-500/30 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {event.stats.map((st) => (
            <div key={st.label} className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/30 text-center">
              <div className="font-tech text-2xl sm:text-3xl font-black text-cyan-400">
                <AnimatedStatCounter targetValue={st.value} />
              </div>
              <div className="mt-1 text-[10px] font-space font-bold tracking-widest text-purple-300 uppercase">
                {st.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Technology / Domain Tags */}
      {event.tags && (
        <div className="mt-5 flex flex-wrap gap-2">
          {event.tags.map((tg) => (
            <span
              key={tg}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-space text-gray-300 group-hover:border-cyan-500/40 transition-colors"
            >
              #{tg}
            </span>
          ))}
        </div>
      )}

      {/* Explore / Action Interaction */}
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-[11px] font-space text-gray-400">
          GRAPHIC ERA MILESTONE
        </span>
        <button
          onClick={() => {
            audioEngine.playClick();
            onExploreClick(event);
          }}
          className="flex items-center gap-2 font-tech text-xs font-bold text-cyan-400 group-hover:text-white transition-colors"
        >
          <span>{isDestination ? 'ENTER FEST' : 'EXPLORE'}</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
