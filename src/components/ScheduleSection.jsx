import React, { useState } from 'react';
import { SCHEDULE_DATA, EVENTS_DATA } from '../config/eventConfig';
import { Calendar, Clock, MapPin, Sparkles, ArrowRight, Filter } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const ScheduleSection = ({ onSelectEvent }) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const currentScheduleDay = SCHEDULE_DATA[activeDayIndex];

  const categories = ['All', ...new Set(currentScheduleDay.items.map((it) => it.category))];

  const filteredItems = selectedCategory === 'All'
    ? currentScheduleDay.items
    : currentScheduleDay.items.filter((it) => it.category === selectedCategory);

  const handleExploreScheduleEvent = (item) => {
    audioEngine.playClick();
    const matchedEvent = EVENTS_DATA.find((ev) => ev.id === item.eventId) || EVENTS_DATA[0];
    onSelectEvent(matchedEvent);
  };

  return (
    <section id="schedule" className="relative py-24 bg-[#050a17] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-space font-bold tracking-widest uppercase mb-3">
            <Sparkles size={14} />
            <span>FESTIVAL TIMELINE</span>
          </div>

          <h2 className="font-tech text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none glow-cyan">
            NIRVAN ’26 <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent">SCHEDULE</span>
          </h2>

          {/* Tentative Schedule Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-space font-semibold tracking-wider">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>{currentScheduleDay.badge}</span>
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {SCHEDULE_DATA.map((schDay, idx) => (
            <button
              key={schDay.day}
              onClick={() => {
                audioEngine.playClick();
                setActiveDayIndex(idx);
                setSelectedCategory('All');
              }}
              className={`px-6 py-3 rounded-2xl font-space text-xs font-bold tracking-wider transition-all flex items-center gap-3 ${
                activeDayIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Calendar size={16} />
              <span>{schDay.day} — {schDay.date}</span>
            </button>
          ))}
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-space text-gray-400 flex items-center gap-1 mr-2">
            <Filter size={12} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                audioEngine.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3 py-1 rounded-xl text-xs font-space transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold'
                  : 'bg-white/5 text-gray-400 hover:text-gray-200 border border-transparent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onMouseEnter={() => audioEngine.playHover()}
              className="group p-5 sm:p-6 rounded-2xl bg-[#090f20]/80 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4">
                {/* Time Badge */}
                <div className="px-3.5 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-space text-xs font-bold tracking-wider shrink-0 flex items-center gap-1.5">
                  <Clock size={14} className="text-cyan-400" />
                  <span>{item.time}</span>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-space font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-gray-400 font-space flex items-center gap-1">
                      <MapPin size={12} className="text-pink-400" />
                      {item.venue}
                    </span>
                  </div>

                  <h4 className="font-tech text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                </div>
              </div>

              {/* Action: Explore Details */}
              <button
                onClick={() => handleExploreScheduleEvent(item)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-white/5 border border-cyan-500/20 text-cyan-400 font-tech text-xs font-bold tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all flex items-center justify-center gap-2 shrink-0"
              >
                <span>EXPLORE</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
