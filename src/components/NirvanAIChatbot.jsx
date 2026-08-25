import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const NirvanAIChatbot = ({ onOpenRegister, onSelectEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Greetings! I am NIRVAN AI, your intelligent guide for NIRVAN ’26 at Graphic Era Hill University. Ask me about event rules, schedules, past highlights, venues, registration, or talk about anything!',
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickPrompts = [
    'When is Hackathon?',
    'What is the prize pool?',
    'What are the CTF rules?',
    'Show Past Highlights',
    'Is registration free?',
    'Where is GEHU venue?',
  ];

  // Local fallback response generator if Vercel API endpoint is not set or offline
  const generateFallbackResponse = (userQuery) => {
    const query = userQuery.toLowerCase().trim();

    if (query.includes('fee') || query.includes('cost') || query.includes('free') || query.includes('price')) {
      return 'All events at NIRVAN ’26 have **FREE (₹0) Entry Fee** for all registered undergraduate and postgraduate college students!';
    }

    if (query.includes('prize') || query.includes('reward') || query.includes('cash')) {
      return `The total prize pool for **NIRVAN ’26** is **₹5,00,000+** in Cash Prizes, Cloud Credits, and Swag Kits across 6 major event arenas!
• **Hackathon**: ₹1,50,000
• **Capture The Flag**: ₹1,00,000
• **Web-A-Thon**: ₹80,000
• **E-Sports**: ₹75,000
• **Treasure Hunt**: ₹50,000
• **Workshops**: Certificates & Resource Kits`;
    }

    if (query.includes('date') || query.includes('when') || query.includes('location') || query.includes('venue') || query.includes('where')) {
      return `**NIRVAN ’26** will take place on **12 & 13 OCTOBER 2026** at the **Graphic Era Hill University (GEHU) Campus, Dehradun**!
• Main Arena: GEHU Main Auditorium
• Hackathon: CS Block Auditorium & Labs
• CTF: Cyber Lab 401
• Web-A-Thon: Web Lab 302
• E-Sports: Indoor Esports Dome
• Treasure Hunt: Campus Outdoor Quadrangle`;
    }

    if (query.includes('past') || query.includes('highlight') || query.includes('history') || query.includes('legacy') || query.includes('graph-e-thon')) {
      return `Here are verified past technology highlights at Graphic Era:
1. **Graph-E-Thon 3.0 (2-5 April 2026)**: 72-Hour SDG National Hackathon with **931 Teams** and **4,087 Participants**!
2. **Hackathon 2025 (6-7 March 2025)**: 24-Hour sprint by Tech Geeks Club at GEHU Haldwani with **200+ Students**.
3. **NIRVANA Tech Fest 2024 (6-7 Dec 2024)**: Campus-wide Treasure Hunt & Science Exhibition at GEHU Haldwani.
4. **Graph-E-Thon 2.0 (26 May 2024)**: National Hackathon with **80+ Teams** from 40+ Universities!`;
    }

    if (query.includes('hackathon')) {
      return `**NIRVAN ’26 HACKATHON**
• **Date & Time**: 12 - 13 Oct 2026, 09:00 AM IST
• **Format**: 24-Hour Non-stop Sprint
• **Team Size**: 2 - 4 Members
• **Prize Pool**: ₹1,50,000
• **Fee**: FREE (₹0)
• **Tracks**: AI & Agentic Systems, Web3, Smart Healthcare, Open Innovation`;
    }

    if (query.includes('ctf') || query.includes('flag') || query.includes('cyber')) {
      return `**CAPTURE THE FLAG (CTF)**
• **Date & Time**: 12 Oct 2026, 10:00 AM IST
• **Format**: 8-Hour Jeopardy CTF
• **Categories**: Web Exploitation, Reverse Engineering, Cryptography, Binary Exploitation
• **Prize Pool**: ₹1,00,000
• **Rules**: Attacking CTF infrastructure or sharing flags leads to immediate ban.`;
    }

    if (query.includes('webathon') || query.includes('web-a-thon') || query.includes('web design') || query.includes('frontend')) {
      return `**WEB-A-THON**
• **Date & Time**: 12 Oct 2026, 11:00 AM - 05:00 PM IST
• **Format**: 6-Hour Frontend Design Challenge
• **Team Size**: 1 - 3 Members
• **Prize Pool**: ₹80,000
• **Rules**: Layouts must be responsive; vanilla HTML/CSS/JS or React/Tailwind allowed.`;
    }

    if (query.includes('schedule') || query.includes('timings') || query.includes('program')) {
      return `**Tentative Schedule Highlights**:
• **Day 1 (12 Oct)**: Grand Inauguration (09:00 AM), Hackathon Kickoff (11:00 AM), Web-A-Thon (11:30 AM), CTF (12:00 PM), Esports Qualifiers (02:00 PM).
• **Day 2 (13 Oct)**: Hackathon Code Freeze & Finale Pitch (11:00 AM), AI Masterclass Workshop (10:00 AM), Treasure Hunt (01:00 PM), Esports Grand Finals (02:00 PM), Prize Ceremony (05:30 PM).`;
    }

    if (query.includes('eligibility') || query.includes('rule') || query.includes('who can')) {
      return `**Eligibility & Fest Rules**:
• Open to all enrolled Undergraduate & Postgraduate students from recognized institutions.
• Valid College Student Photo ID required at campus entry.
• Registration is completely FREE for all events.`;
    }

    if (query.includes('register') || query.includes('pass') || query.includes('sign up')) {
      return `You can generate your official **NIRVAN ’26 VIP Digital Fest Pass** right now! Click the **REGISTER NOW** button in the navbar or on the homepage.`;
    }

    if (query.includes('hello') || query.includes('hi') || query.includes('hey') || query.includes('who are you')) {
      return `Hello! I am NIRVAN AI, your assistant for NIRVAN ’26 at GEHU Dehradun. Feel free to ask me anything about the tech fest, events, schedules, or general talk!`;
    }

    return `Information for this query is currently **TBA (To Be Announced)**. Stay tuned as official announcements and detailed schedules are released by Graphic Era Hill University!`;
  };

  const handleSendMessage = async (textToSend = null) => {
    const text = textToSend || inputMessage;
    if (!text.trim() || loading) return;

    audioEngine.playClick();

    const userMsg = { sender: 'user', text };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setLoading(true);

    const apiUrl = import.meta.env.VITE_CHATBOT_API_URL || '/api/chat';

    try {
      // Try fetching response from Vercel API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.reply) {
          audioEngine.playHover();
          setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
          setLoading(false);
          return;
        }
      }
    } catch {
      // Fallback silently if Vercel API is not configured or offline
    }

    // Fallback response engine
    setTimeout(() => {
      audioEngine.playHover();
      const botResponseText = generateFallbackResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: botResponseText }]);
      setLoading(false);
    }, 300);
  };

  return (
    <>
      {/* Floating Chatbot Trigger Button */}
      <button
        onClick={() => {
          audioEngine.playPortal();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={() => audioEngine.playHover()}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 border-2 border-cyan-300 text-white shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-110 active:scale-95 transition-all group"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-400 text-[9px] font-bold text-black items-center justify-center">
            AI
          </span>
        </span>
        <Bot size={28} className="group-hover:rotate-12 transition-transform" />
      </button>

      {/* Sci-Fi Glassmorphic Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[540px] max-h-[82vh] bg-[#080e1e]/95 backdrop-blur-2xl border-2 border-cyan-500/40 rounded-3xl shadow-[0_0_50px_rgba(0,240,255,0.35)] flex flex-col overflow-hidden animate-fadeIn font-space">
          
          {/* Window Header */}
          <div className="p-4 bg-gradient-to-r from-[#0c1630] to-[#161233] border-b border-cyan-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 box-glow-cyan">
                <Bot size={22} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-tech text-base font-bold text-white">NIRVAN AI</h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                    {loading ? 'THINKING...' : 'ONLINE'}
                  </span>
                </div>
                <p className="text-[10px] text-gray-400">GEHU Fest & General Assistant</p>
              </div>
            </div>

            <button
              onClick={() => {
                audioEngine.playClick();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 font-space text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-cyan-500/20 border border-cyan-400 text-white rounded-br-none shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                      : 'bg-[#10172e] border border-cyan-500/20 text-gray-200 rounded-bl-none'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="p-3 rounded-2xl bg-[#10172e] border border-cyan-500/20 text-cyan-400 text-xs animate-pulse">
                  NIRVAN AI is thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestion Chips */}
          <div className="px-4 py-2 border-t border-white/10 flex gap-2 overflow-x-auto no-scrollbar">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSendMessage(prompt)}
                className="px-2.5 py-1 rounded-full bg-white/5 border border-cyan-500/20 text-[10px] text-gray-300 hover:text-cyan-300 hover:border-cyan-400 whitespace-nowrap transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-[#050a16] border-t border-cyan-500/30 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask NIRVAN AI anything (Fest or General)..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-gray-900/90 border border-cyan-500/20 text-white text-xs focus:outline-none focus:border-cyan-400 transition-all"
            />
            <button
              type="submit"
              disabled={loading}
              className="p-2.5 rounded-xl bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all shrink-0 box-glow-cyan disabled:opacity-50"
            >
              <Send size={16} />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
