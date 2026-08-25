import React from 'react';
import { LegacyHero } from '../components/LegacyHero';
import { LegacyTimeline } from '../components/LegacyTimeline';
import { EventMarquee } from '../components/EventMarquee';
import { LegacyTransition } from '../components/LegacyTransition';
import { Footer } from '../components/Footer';

export const LegacyPage = ({ onOpenRegister, onSelectEvent }) => {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden">
      {/* Legacy Hero Header */}
      <LegacyHero />

      {/* Main Vertical Energy Timeline */}
      <LegacyTimeline onOpenRegister={onOpenRegister} onSelectEvent={onSelectEvent} />

      {/* Event Ticker Marquee */}
      <EventMarquee />

      {/* Legacy Transition to NIRVAN '26 & Final CTA */}
      <LegacyTransition onOpenRegister={onOpenRegister} />

      {/* Footer */}
      <Footer />
    </div>
  );
};
