import React, { useState, useEffect } from 'react';
import { FESTIVAL_CONFIG } from '../config/eventConfig';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(FESTIVAL_CONFIG.targetCountdownDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => String(num).padStart(2, '0');

  const timeBlocks = [
    { label: 'DAYS', value: formatNumber(timeLeft.days), color: 'text-cyan-400', border: 'border-cyan-500/30' },
    { label: 'HOURS', value: formatNumber(timeLeft.hours), color: 'text-blue-400', border: 'border-blue-500/30' },
    { label: 'MINUTES', value: formatNumber(timeLeft.minutes), color: 'text-purple-400', border: 'border-purple-500/30' },
    { label: 'SECONDS', value: formatNumber(timeLeft.seconds), color: 'text-magenta-400', border: 'border-pink-500/30' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      {/* Title */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
        <h3 className="font-space text-xs sm:text-sm font-bold tracking-[0.25em] text-cyan-400 uppercase glow-cyan">
          NIRVAN ’26 BEGINS IN
        </h3>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500" />
      </div>

      {/* Grid of 4 glowing cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
        {timeBlocks.map((block) => (
          <div
            key={block.label}
            className={`group relative flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl bg-[#0b101d]/70 backdrop-blur-xl border ${block.border} transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-1 box-glow-cyan`}
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Glowing corner tech brackets */}
            <span className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/50" />
            <span className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/50" />
            <span className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/50" />
            <span className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/50" />

            {/* Number display */}
            <span className={`font-tech text-3xl sm:text-5xl md:text-6xl font-black tracking-wider ${block.color} drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]`}>
              {block.value}
            </span>

            {/* Label */}
            <span className="mt-2 text-[10px] sm:text-xs font-space font-semibold tracking-widest text-gray-400 group-hover:text-gray-200 transition-colors">
              {block.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
