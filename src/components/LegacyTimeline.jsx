import React, { useState, useEffect, useRef } from 'react';
import { LEGACY_TIMELINE_EVENTS } from '../config/legacyData';
import { TimelineEventCard } from './TimelineEventCard';

export const LegacyTimeline = ({ onOpenRegister, onSelectEvent }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height;
      const currentScroll = windowHeight - rect.top;
      
      const progress = Math.max(0, Math.min(1, currentScroll / (totalHeight + windowHeight / 2)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative py-12 bg-[#030712] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Central Vertical Energy Timeline Track */}
        <div className="relative">
          
          {/* Main Background Circuit Line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full pointer-events-none" />

          {/* Animated Scroll Progress Glowing Energy Beam Line */}
          <div
            className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-magenta-500 rounded-full shadow-[0_0_20px_#00f0ff] transition-all duration-300 pointer-events-none"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          {/* Timeline Events Loop */}
          <div className="space-y-16 sm:space-y-24">
            {LEGACY_TIMELINE_EVENTS.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Glowing Node Dot in Center */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                      event.isDestinationNode
                        ? 'bg-cyan-400 border-4 border-[#030712] shadow-[0_0_30px_#00f0ff] scale-125'
                        : event.isLatest
                        ? 'bg-purple-500 border-4 border-[#030712] shadow-[0_0_25px_#a855f7] scale-110'
                        : 'bg-[#090f20] border-2 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${event.isDestinationNode ? 'bg-black animate-ping' : 'bg-cyan-300'}`} />
                    </div>
                  </div>

                  {/* Desktop Left Column (Index 0, 2, 4...) */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 md:pr-12 ${isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {isEven && (
                      <TimelineEventCard
                        event={event}
                        index={idx}
                        onExploreClick={(ev) => {
                          if (ev.isDestinationNode) {
                            onOpenRegister();
                          } else {
                            onSelectEvent(ev);
                          }
                        }}
                      />
                    )}
                  </div>

                  {/* Desktop Right Column (Index 1, 3...) */}
                  <div className={`w-full md:w-1/2 pl-12 ${!isEven ? 'block' : 'hidden md:block opacity-0 pointer-events-none'}`}>
                    {!isEven && (
                      <TimelineEventCard
                        event={event}
                        index={idx}
                        onExploreClick={(ev) => {
                          if (ev.isDestinationNode) {
                            onOpenRegister();
                          } else {
                            onSelectEvent(ev);
                          }
                        }}
                      />
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
