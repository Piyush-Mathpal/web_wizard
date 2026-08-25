import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { FESTIVAL_CONFIG } from '../config/eventConfig';
import { audioEngine } from '../utils/audioEngine';

export const Navbar = ({ onOpenRegister, currentView = 'home', onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (currentView === 'home') {
        const sections = ['hero', 'about', 'events', 'schedule', 'gallery', 'contact'];
        const scrollPosition = window.scrollY + 200;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  const toggleSound = () => {
    const isEnabled = audioEngine.toggleSound();
    setSoundEnabled(isEnabled);
  };

  const navLinks = [
    { name: 'Home', id: 'home', href: '#hero' },
    { name: 'About', id: 'about', href: '#about' },
    { name: 'Events (Timeline)', id: 'events', href: '#events' },
    { name: 'Schedule', id: 'schedule', href: '#schedule' },
    { name: 'Gallery', id: 'gallery', href: '#gallery' },
    { name: 'Contact', id: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e, link) => {
    e.preventDefault();
    audioEngine.playClick();
    setMobileMenuOpen(false);

    if (link.id === 'events') {
      if (onNavigate) onNavigate('events');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.id === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home' && onNavigate) {
        onNavigate('home');
        setTimeout(() => {
          const targetId = link.href.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const targetId = link.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-xl border-b border-cyan-500/20 py-3 shadow-[0_4px_30px_rgba(0,240,255,0.15)]'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand / Logo */}
        <button
          onClick={(e) => handleNavClick(e, navLinks[0])}
          className="group flex items-center gap-3 cursor-pointer text-left"
          onMouseEnter={() => audioEngine.playHover()}
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1px] box-glow-cyan">
            <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center">
              <span className="font-tech text-cyan-400 font-bold text-lg group-hover:scale-110 transition-transform">
                N
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-tech text-xl font-black tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                NIRVAN <span className="text-cyan-400 font-normal">’26</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                GEHU
              </span>
            </div>
            <p className="text-[10px] text-gray-400 tracking-wider font-space hidden sm:block">
              GRAPHIC ERA HILL UNIVERSITY
            </p>
          </div>
        </button>

        {/* Center: Nav links for Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#0b0f19]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-500/15">
          {navLinks.map((link) => {
            const isEventsTab = link.id === 'events';
            const isHomeTab = link.id === 'home';
            
            const isActive =
              currentView === 'events'
                ? isEventsTab
                : isHomeTab
                ? activeSection === 'hero' || activeSection === 'home'
                : activeSection === link.id;

            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                onMouseEnter={() => audioEngine.playHover()}
                className={`relative px-4 py-1.5 text-xs font-space tracking-wide rounded-full transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-400 font-semibold bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Audio SFX Toggle + Register CTA */}
        <div className="flex items-center gap-3">
          {/* SFX Audio Toggle Button */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => audioEngine.playHover()}
            title={soundEnabled ? 'Mute Audio Effects' : 'Enable Audio Effects'}
            className="p-2 rounded-lg bg-gray-900/80 border border-cyan-500/20 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Register Button */}
          <button
            onClick={() => {
              audioEngine.playPortal();
              onOpenRegister();
            }}
            onMouseEnter={() => audioEngine.playHover()}
            className="relative group overflow-hidden rounded-lg p-[1px] font-space text-xs font-bold tracking-wider text-white shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 animate-pulse-glow" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-[7px] bg-[#080d1a] group-hover:bg-opacity-80 transition-all">
              <Sparkles size={14} className="text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>REGISTER NOW</span>
              <ChevronRight size={14} className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => {
              audioEngine.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-gray-900 border border-cyan-500/20 text-gray-300 hover:text-cyan-400"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#080d1a]/95 backdrop-blur-2xl border-b border-cyan-500/20 py-6 px-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className="flex items-center justify-between py-3 px-4 rounded-lg bg-white/5 border border-cyan-500/10 text-gray-200 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all font-space"
              >
                <span>{link.name}</span>
                <ChevronRight size={16} className="text-cyan-500/50" />
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="mt-4 w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-tech font-bold text-center tracking-wider box-glow-cyan"
            >
              REGISTER NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
