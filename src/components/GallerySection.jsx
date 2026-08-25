import React, { useState } from 'react';
import { Camera, X, Maximize2, Sparkles, Tag } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Graph-E-Thon National Hackathon Arena",
      category: "Hackathons",
      image: "/gallery/hackathon.jpg",
      caption: "Over 80+ teams coding through the night in the Graph-E-Thon innovation challenge at GEHU Campus.",
      tag: "Hackathon 2026"
    },
    {
      id: 2,
      title: "Web-A-Thon UI/UX Design Battle",
      category: "Web-A-Thon",
      image: "/gallery/webathon.jpg",
      caption: "Frontend developers and visual designers building futuristic responsive web applications.",
      tag: "Web Design"
    },
    {
      id: 3,
      title: "Capture The Flag Cybersecurity Proving Grounds",
      category: "CTF & Cyber",
      image: "/gallery/ctf.jpg",
      caption: "Ethical hackers and security researchers analyzing binary matrix challenges in the Jeopardy CTF arena.",
      tag: "Jeopardy CTF"
    },
    {
      id: 4,
      title: "NIRVAN Esports Arena Championship Stage",
      category: "E-Sports",
      image: "/gallery/esports.jpg",
      caption: "Collegiate esports teams competing in high-stakes tactical battles live on spectator LED screens.",
      tag: "Valorant & BGMI"
    },
    {
      id: 5,
      title: "AI & Masterclasses Workshop Hall",
      category: "Workshops",
      image: "/gallery/webathon.jpg",
      caption: "Students participating in hands-on AI agent workflows and modern system architecture workshops.",
      tag: "AI Workshop"
    },
    {
      id: 6,
      title: "Grand Prize Ceremony & Light Showcase",
      category: "Ceremonies",
      image: "/gallery/hackathon.jpg",
      caption: "Trophy presentation and celebratory confetti burst during the NIRVAN festival finale.",
      tag: "Prize Ceremony"
    }
  ];

  const categories = ['All', 'Hackathons', 'Web-A-Thon', 'CTF & Cyber', 'E-Sports', 'Workshops', 'Ceremonies'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handleImageClick = (item) => {
    audioEngine.playClick();
    setLightboxImage(item);
  };

  return (
    <section id="gallery" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-space font-bold tracking-widest uppercase mb-3">
            <Camera size={14} />
            <span>VISUAL ARCHIVE</span>
          </div>

          <h2 className="font-tech text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-none glow-cyan">
            NIRVAN <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-magenta-500 bg-clip-text text-transparent">GALLERY</span>
          </h2>

          <p className="mt-4 font-space text-base sm:text-lg text-gray-300">
            Moments of innovation, competition, intensity and celebration at Graphic Era.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                audioEngine.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-space font-bold tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_20px_rgba(0,240,255,0.35)] scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleImageClick(item)}
              onMouseEnter={() => audioEngine.playHover()}
              className="group relative rounded-2xl overflow-hidden bg-[#090f20] border border-cyan-500/20 hover:border-cyan-400/80 transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Top Tag Badge */}
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-space font-bold bg-[#030712]/80 backdrop-blur-md text-cyan-400 border border-cyan-500/40">
                  <Tag size={10} />
                  {item.tag}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>

              {/* Content Overlay */}
              <div className="p-5 relative z-10">
                <span className="text-[10px] font-space font-semibold text-purple-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h4 className="font-tech text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs font-space text-gray-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-[#080e1e] border-2 border-cyan-400 rounded-3xl p-4 sm:p-6 shadow-[0_0_60px_rgba(0,240,255,0.4)] overflow-hidden">
            {/* Close button */}
            <button
              onClick={() => {
                audioEngine.playClick();
                setLightboxImage(null);
              }}
              className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all z-20"
            >
              <X size={22} />
            </button>

            {/* Lightbox Image */}
            <div className="relative rounded-2xl overflow-hidden max-h-[65vh] flex items-center justify-center bg-black mb-4">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="font-space">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400">
                  {lightboxImage.category}
                </span>
                <span className="text-xs text-gray-400">{lightboxImage.tag}</span>
              </div>
              <h3 className="font-tech text-xl sm:text-2xl font-bold text-white">
                {lightboxImage.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
