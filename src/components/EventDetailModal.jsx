import React, { useState } from 'react';
import { X, Sparkles, Trophy, Users, Clock, Calendar, MapPin, CheckCircle2, Shield, History, Info, FileText, ArrowRight } from 'lucide-react';
import { EVENTS_DATA } from '../config/eventConfig';
import { audioEngine } from '../utils/audioEngine';

export const EventDetailModal = ({ event, onClose, onRegister }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!event) return null;

  const handleTabClick = (tab) => {
    audioEngine.playClick();
    setActiveTab(tab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#090f20] border-2 border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.35)] my-8 max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all z-10"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6 pr-10">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 shrink-0 box-glow-cyan">
            <Sparkles size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-space font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {event.badge || 'OFFICIAL EVENT'}
              </span>
              <span className="text-xs text-gray-400 font-space">{event.tagline}</span>
            </div>
            <h3 className="font-tech text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
              {event.title}
            </h3>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex gap-2 border-b border-white/10 pb-3 mb-6 font-space text-xs">
          <button
            onClick={() => handleTabClick('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeTab === 'overview'
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Info size={14} />
            <span>OVERVIEW & SPECS</span>
          </button>

          <button
            onClick={() => handleTabClick('rules')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeTab === 'rules'
                ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-bold shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <FileText size={14} />
            <span>RULES & STAGES</span>
          </button>

          <button
            onClick={() => handleTabClick('highlights')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
              activeTab === 'highlights'
                ? 'bg-purple-500/20 border border-purple-400 text-purple-300 font-bold shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <History size={14} />
            <span>PAST HIGHLIGHTS</span>
          </button>
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto pr-2 font-space space-y-6">
          
          {/* TAB 1: OVERVIEW & SPECS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <p className="text-sm text-gray-300 leading-relaxed">
                {event.fullDesc || event.shortDesc || event.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-gray-900/80 border border-cyan-500/20">
                  <div className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                    <Calendar size={12} className="text-cyan-400" />
                    <span>Date</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{event.date || '12 OCTOBER 2026'}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-900/80 border border-cyan-500/20">
                  <div className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                    <Clock size={12} className="text-pink-400" />
                    <span>Time Slot</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{event.time || '09:00 AM IST'}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-900/80 border border-cyan-500/20">
                  <div className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                    <MapPin size={12} className="text-purple-400" />
                    <span>Venue</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1">{event.venue || 'GEHU Campus'}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-gray-900/80 border border-cyan-500/20">
                  <div className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                    <Shield size={12} className="text-green-400" />
                    <span>Entry Fee</span>
                  </div>
                  <div className="text-xs font-bold text-green-400 mt-1">{event.fee || 'FREE (₹0)'}</div>
                </div>
              </div>

              {/* Secondary Spec Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-start gap-3">
                  <Trophy size={20} className="text-yellow-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-cyan-300 uppercase block">PRIZE POOL</span>
                    <span className="text-sm font-extrabold text-white">{event.prizes || '₹50,000+ Prize Pool'}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-start gap-3">
                  <Users size={20} className="text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-purple-300 uppercase block">TEAM SIZE</span>
                    <span className="text-sm font-extrabold text-white">{event.teamSize || '2 - 4 Members'}</span>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-1">
                  ELIGIBILITY CRITERIA
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {event.eligibility || 'Open to all enrolled undergraduate and postgraduate students from recognized colleges and universities. Valid student ID required.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: RULES & STAGES */}
          {activeTab === 'rules' && (
            <div className="space-y-6">
              {/* Competition Stages */}
              {event.stages && event.stages.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
                    HOW IT WORKS (STAGES)
                  </h4>
                  <div className="space-y-3">
                    {event.stages.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-white/5 border border-cyan-500/20">
                        <span className="text-xs font-bold text-cyan-300 block mb-0.5">{st.name}</span>
                        <p className="text-xs text-gray-300">{st.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Official Rules List */}
              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
                  OFFICIAL GUIDELINES & RULES
                </h4>
                {event.rules && event.rules.length > 0 ? (
                  <ul className="space-y-2">
                    {event.rules.map((rl, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 bg-white/5 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                        <span>{rl}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-gray-400">Official detailed rulebook will be briefed by event convenors at kickoff.</p>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: PAST HIGHLIGHTS */}
          {activeTab === 'highlights' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold flex items-center gap-2">
                <History size={16} className="text-purple-400 shrink-0" />
                <span>Verified Historical Milestones for {event.title}</span>
              </div>

              {event.pastHighlights && event.pastHighlights.length > 0 ? (
                <div className="space-y-3">
                  {event.pastHighlights.map((ph, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#0d1429] border border-cyan-500/20 hover:border-cyan-400/50 transition-colors">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <span className="font-tech text-base font-bold text-white">{ph.title}</span>
                        <span className="text-[11px] font-bold text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                          {ph.date}
                        </span>
                      </div>
                      <div className="text-[11px] text-gray-400 mb-2">{ph.location}</div>
                      <p className="text-xs text-gray-300 leading-relaxed mb-3">{ph.desc}</p>
                      <div className="text-[11px] font-bold text-purple-300 bg-purple-950/40 p-2 rounded-lg border border-purple-500/30">
                        ⚡ HIGHLIGHT: {ph.stats}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                  <History size={32} className="text-gray-500 mx-auto mb-2" />
                  <h5 className="font-tech text-sm text-gray-300 font-bold">PAST HIGHLIGHTS STATUS</h5>
                  <p className="text-xs text-gray-400 mt-1">
                    Official past statistics and archives for this specific track are currently <strong className="text-cyan-400">TBA (To Be Announced)</strong>. Stay tuned for updates!
                  </p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => {
              audioEngine.playClick();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white"
          >
            Close
          </button>

          <button
            onClick={() => {
              audioEngine.playPortal();
              onClose();
              onRegister(event.id);
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-tech text-xs font-bold tracking-wider box-glow-cyan hover:scale-105 transition-all"
          >
            <span>REGISTER FOR {event.title}</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
