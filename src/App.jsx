import React, { useState, useEffect } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { NirvanExperience } from './components/NirvanExperience';
import { EventArena } from './components/EventArena';
import { ScheduleSection } from './components/ScheduleSection';
import { GallerySection } from './components/GallerySection';
import { EventMarquee } from './components/EventMarquee';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegacyPage } from './pages/LegacyPage';
import { RegistrationModal } from './components/RegistrationModal';
import { EventDetailModal } from './components/EventDetailModal';
import { NirvanAIChatbot } from './components/NirvanAIChatbot';
import { EVENTS_DATA } from './config/eventConfig';

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    return window.location.pathname.includes('/events') ? 'events' : 'home';
  });
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [selectedRegisterEventId, setSelectedRegisterEventId] = useState(null);
  const [selectedDetailEvent, setSelectedDetailEvent] = useState(null);

  const handleNavigate = (view) => {
    setCurrentView(view);
    const newPath = view === 'events' ? '/events' : '/';
    window.history.pushState({}, '', newPath);
  };

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.includes('/events')) {
        setCurrentView('events');
      } else {
        setCurrentView('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenRegister = (eventId = null) => {
    setSelectedRegisterEventId(eventId);
    setIsRegisterOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterOpen(false);
    setSelectedRegisterEventId(null);
  };

  const handleSelectEventDetail = (eventObj) => {
    if (typeof eventObj === 'string') {
      const matched = EVENTS_DATA.find((e) => e.id === eventObj) || EVENTS_DATA[0];
      setSelectedDetailEvent(matched);
    } else if (eventObj && eventObj.id) {
      const matched = EVENTS_DATA.find((e) => e.id === eventObj.id) || EVENTS_DATA[0];
      setSelectedDetailEvent(matched);
    } else {
      setSelectedDetailEvent(EVENTS_DATA[0]);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Dynamic Cosmic WebGL Particles & Mouse Spotlight */}
      <ParticleBackground />

      {/* Main Content Wrapper */}
      <div className="relative z-10">
        {/* Floating Navbar */}
        <Navbar
          currentView={currentView}
          onNavigate={handleNavigate}
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* View Switcher */}
        {currentView === 'events' ? (
          <LegacyPage
            onOpenRegister={() => handleOpenRegister()}
            onSelectEvent={handleSelectEventDetail}
          />
        ) : (
          <>
            {/* Hero Section */}
            <HeroSection onOpenRegister={() => handleOpenRegister()} />

            {/* The Nirvan Experience Section */}
            <NirvanExperience />

            {/* Interactive Event Arena */}
            <EventArena onOpenRegister={(eventId) => handleOpenRegister(eventId)} />

            {/* Functional Festival Schedule Section */}
            <ScheduleSection onSelectEvent={handleSelectEventDetail} />

            {/* Visual Archive Gallery Section */}
            <GallerySection />

            {/* Infinite Cyber Event Marquee */}
            <EventMarquee />

            {/* Final Registration Climax CTA */}
            <FinalCTA onOpenRegister={() => handleOpenRegister()} />

            {/* Minimal Footer */}
            <Footer />
          </>
        )}
      </div>

      {/* Floating NIRVAN AI Chatbot */}
      <NirvanAIChatbot
        onOpenRegister={handleOpenRegister}
        onSelectEvent={handleSelectEventDetail}
      />

      {/* Event Detail & Past Highlights Modal */}
      {selectedDetailEvent && (
        <EventDetailModal
          event={selectedDetailEvent}
          onClose={() => setSelectedDetailEvent(null)}
          onRegister={(id) => handleOpenRegister(id)}
        />
      )}

      {/* Interactive Registration Modal & Digital Fest Pass Generator */}
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={handleCloseRegister}
        initialEventId={selectedRegisterEventId}
      />
    </div>
  );
}
