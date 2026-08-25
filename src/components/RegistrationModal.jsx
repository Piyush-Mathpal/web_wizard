import React, { useState } from 'react';
import { X, Sparkles, Check, QrCode, User, Mail, Building, Phone, Users, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENTS_DATA, FESTIVAL_CONFIG } from '../config/eventConfig';
import { audioEngine } from '../utils/audioEngine';

export const RegistrationModal = ({ isOpen, onClose, initialEventId }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventId: initialEventId || 'hackathon',
    fullName: '',
    email: '',
    phone: '',
    college: 'Graphic Era Hill University',
    teamName: '',
    teamSize: '2 Members',
  });

  const [passData, setPassData] = useState(null);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventSelect = (id) => {
    audioEngine.playClick();
    setFormData((prev) => ({ ...prev, eventId: id }));
  };

  const handleTeamSizeSelect = (size) => {
    audioEngine.playClick();
    setFormData((prev) => ({ ...prev, teamSize: size }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    audioEngine.playPortal();

    // Trigger futuristic confetti explosion
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#3b82f6', '#a855f7', '#ec4899'],
      });
    } catch {
      // Ignore confetti errors
    }

    const passId = `NIR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const selectedEventObj = EVENTS_DATA.find((ev) => ev.id === formData.eventId);

    setPassData({
      passId,
      fullName: formData.fullName || 'Tech Pioneer',
      email: formData.email || 'developer@gehu.ac.in',
      college: formData.college || 'Graphic Era Hill University',
      eventName: selectedEventObj ? selectedEventObj.title : 'HACKATHON',
      teamName: formData.teamName || 'Team CyberVision',
      teamSize: formData.teamSize,
      date: FESTIVAL_CONFIG.dateDisplay,
    });

    setStep(2);
  };

  const handleReset = () => {
    audioEngine.playClick();
    setStep(1);
    setPassData(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#090f20] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,240,255,0.35)] my-8">
        
        {/* Close Button */}
        <button
          onClick={() => {
            audioEngine.playClick();
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all"
        >
          <X size={20} />
        </button>

        {step === 1 ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Sparkles size={20} />
              </div>
              <h3 className="font-tech text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
                NIRVAN ’26 <span className="text-cyan-400">REGISTRATION</span>
              </h3>
            </div>
            <p className="font-space text-xs sm:text-sm text-gray-400 mb-6">
              Enter your details to claim your official digital fest pass and compete in NIRVAN ’26.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 font-space">
              {/* Event Selector */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">
                  Select Competition Track
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {EVENTS_DATA.map((ev) => (
                    <button
                      type="button"
                      key={ev.id}
                      onClick={() => handleEventSelect(ev.id)}
                      className={`p-2.5 rounded-xl border text-xs font-space text-left transition-all ${
                        formData.eventId === ev.id
                          ? 'bg-cyan-500/20 border-cyan-400 text-white font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                      }`}
                    >
                      {ev.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                  Full Name / Lead Participant
                </label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-3 text-cyan-400" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Piyush Mathpal"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-3 text-purple-400" />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. piyush@gehu.ac.in"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* College & Phone in 2 cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    Institution / University
                  </label>
                  <div className="relative">
                    <Building size={16} className="absolute left-3 top-3 text-pink-400" />
                    <input
                      type="text"
                      name="college"
                      required
                      value={formData.college}
                      onChange={handleInputChange}
                      placeholder="e.g. Graphic Era Hill University"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                    Phone / WhatsApp
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3 top-3 text-cyan-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Team Name Input */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-1">
                  Team Name
                </label>
                <div className="relative">
                  <Shield size={16} className="absolute left-3 top-3 text-purple-400" />
                  <input
                    type="text"
                    name="teamName"
                    required
                    value={formData.teamName}
                    onChange={handleInputChange}
                    placeholder="e.g. Cyber Matrix"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              {/* Team Size Selector (2 or 4 Members) */}
              <div>
                <label className="block text-xs font-bold text-gray-300 uppercase mb-2">
                  Select Team Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleTeamSizeSelect('2 Members')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                      formData.teamSize === '2 Members'
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Users size={16} className="text-cyan-400" />
                    <span>2 Members</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleTeamSizeSelect('4 Members')}
                    className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold transition-all ${
                      formData.teamSize === '4 Members'
                        ? 'bg-purple-500/20 border-purple-400 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Users size={16} className="text-purple-400" />
                    <span>4 Members</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onMouseEnter={() => audioEngine.playHover()}
                className="w-full mt-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-tech text-sm font-bold tracking-wider uppercase box-glow-cyan hover:scale-[1.02] transition-all"
              >
                GENERATE FEST PASS & REGISTER
              </button>
            </form>
          </div>
        ) : (
          /* Step 2: Digital VIP Fest Pass Display */
          <div className="text-center font-space">
            <div className="inline-flex p-3 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 mb-3 animate-bounce">
              <Check size={24} />
            </div>

            <h3 className="font-tech text-2xl font-black text-white uppercase tracking-wider">
              REGISTRATION CONFIRMED!
            </h3>
            <p className="text-xs text-gray-400 mt-1 mb-6">
              Welcome to NIRVAN ’26. Your digital fest pass is generated below.
            </p>

            {/* Futuristic Digital Pass Card */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-[#0c1328] to-[#141b33] border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,240,255,0.4)] text-left overflow-hidden">
              {/* Watermark Logo */}
              <div className="absolute top-2 right-4 text-7xl font-tech font-black text-cyan-500/10 pointer-events-none">
                NIRVAN
              </div>

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-cyan-500/30 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">
                    OFFICIAL VIP FEST PASS
                  </span>
                  <h4 className="font-tech text-xl font-bold text-white">NIRVAN ’26</h4>
                  <p className="text-[10px] text-gray-400">GRAPHIC ERA HILL UNIVERSITY</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-tech font-bold text-xs">
                  {passData?.passId}
                </div>
              </div>

              {/* Pass Details */}
              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <span className="text-gray-400 block text-[10px]">PARTICIPANT</span>
                  <span className="font-bold text-white text-sm">{passData?.fullName}</span>
                </div>

                <div>
                  <span className="text-gray-400 block text-[10px]">EVENT ARENA</span>
                  <span className="font-bold text-cyan-400 text-sm">{passData?.eventName}</span>
                </div>

                <div>
                  <span className="text-gray-400 block text-[10px]">TEAM NAME</span>
                  <span className="text-gray-200">{passData?.teamName}</span>
                </div>

                <div>
                  <span className="text-gray-400 block text-[10px]">TEAM SIZE</span>
                  <span className="font-bold text-purple-300 text-sm">{passData?.teamSize}</span>
                </div>
              </div>

              {/* Pass Footer: QR Visual */}
              <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center">
                    <QrCode size={40} className="text-black" />
                  </div>
                  <div className="text-[10px] text-gray-400">
                    <div>Scan at GEHU Campus Checkpoint</div>
                    <div className="text-cyan-400 font-bold">STATUS: VERIFIED ENTRY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleReset}
                className="w-full py-3 rounded-xl bg-cyan-500 text-black font-tech text-xs font-bold tracking-wider hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                DONE & CLOSE
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
