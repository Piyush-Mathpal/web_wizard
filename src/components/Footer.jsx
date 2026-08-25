import React from 'react';
import { FESTIVAL_CONFIG, FOOTER_CONFIG } from '../config/eventConfig';
import { ArrowUp, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const Footer = () => {
  const scrollToTop = () => {
    audioEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialIcons = [Instagram, Twitter, Linkedin, MessageSquare];

  return (
    <footer id="contact" className="relative bg-[#02050e] border-t border-cyan-500/20 text-gray-400 font-space pt-16 pb-12 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-purple-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-tech text-2xl font-black text-white">NIRVAN</span>
              <span className="font-tech text-2xl font-normal text-cyan-400">’26</span>
            </div>
            <p className="text-sm font-semibold text-cyan-300 mb-2">
              “{FESTIVAL_CONFIG.tagline}”
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              {FESTIVAL_CONFIG.university}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-tech text-xs font-bold text-white uppercase tracking-widest mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              {FOOTER_CONFIG.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onMouseEnter={() => audioEngine.playHover()}
                    onClick={() => audioEngine.playClick()}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan-500/50">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="font-tech text-xs font-bold text-white uppercase tracking-widest mb-4">
              FEST CONTACT
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-gray-300">{FOOTER_CONFIG.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-purple-400 shrink-0" />
                <a href={`mailto:${FOOTER_CONFIG.contact.email}`} className="hover:text-cyan-400 transition-colors">
                  {FOOTER_CONFIG.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-pink-400 shrink-0" />
                <a href={`tel:${FOOTER_CONFIG.contact.phone}`} className="hover:text-cyan-400 transition-colors">
                  {FOOTER_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Social Connect */}
          <div>
            <h4 className="font-tech text-xs font-bold text-white uppercase tracking-widest mb-4">
              CONNECT WITH US
            </h4>
            <div className="flex gap-3 mb-4">
              {FOOTER_CONFIG.socials.map((soc, idx) => {
                const Icon = socialIcons[idx % socialIcons.length];
                return (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    onMouseEnter={() => audioEngine.playHover()}
                    onClick={() => audioEngine.playClick()}
                    title={soc.platform}
                    className="p-2.5 rounded-xl bg-white/5 border border-cyan-500/20 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-all hover:-translate-y-1"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
            <p className="text-[11px] text-gray-400">
              Follow official channels for live updates, hackathon announcements and leaderboard releases.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-400">
            © 2026 <span className="text-white font-semibold">NIRVAN ’26</span> — Graphic Era Hill University. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => audioEngine.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
