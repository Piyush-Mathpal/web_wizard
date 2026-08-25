import React from 'react';
import { MARQUEE_ITEMS } from '../config/eventConfig';

export const EventMarquee = () => {
  // Duplicate array for seamless infinite loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative py-6 bg-[#040813] border-y border-cyan-500/20 overflow-hidden select-none">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="font-tech text-sm sm:text-base font-bold tracking-[0.2em] text-gray-300 hover:text-cyan-400 transition-colors glow-cyan">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-magenta-500 shadow-[0_0_8px_#00f0ff]" />
          </div>
        ))}
      </div>
    </div>
  );
};
