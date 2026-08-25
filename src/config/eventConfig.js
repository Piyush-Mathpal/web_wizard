// NIRVAN '26 Central Festival Configuration & Comprehensive Event Database

export const FESTIVAL_CONFIG = {
  name: "NIRVAN ’26",
  tagline: "Where Ideas Become Innovation",
  subtitle: "GRAPHIC ERA HILL UNIVERSITY • ANNUAL TECHNICAL FEST",
  description: "Two days of technology, competition, creativity and collaboration — where ideas transform into experiences.",
  university: "Graphic Era Hill University",
  campusLocation: "GEHU CAMPUS, DEHRADUN",
  dateDisplay: "12 OCTOBER 2026",
  targetCountdownDate: "2026-10-12T09:00:00+05:30",
  durationDays: 2,
  stats: [
    { label: "Participants", value: "2,500+", sub: "From 60+ Institutions" },
    { label: "Prize Pool", value: "₹5,00,000+", sub: "Cash & Swag Rewards" },
    { label: "Event Arenas", value: "6 Major", sub: "Tech & Creative Arenas" },
    { label: "Duration", value: "48 Hours", sub: "Non-stop Innovation" }
  ]
};

export const EVENTS_DATA = [
  {
    id: "hackathon",
    title: "HACKATHON",
    tagline: "Innovation Challenge",
    icon: "Terminal",
    accentColor: "cyan",
    badge: "24-Hour Sprint",
    date: "12 - 13 OCTOBER 2026",
    time: "09:00 AM IST Onwards",
    venue: "CS Block, GEHU Main Auditorium",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to all enrolled Undergraduate & Postgraduate students from recognized universities/colleges. Valid Student ID required.",
    shortDesc: "Build. Code. Collaborate. Solve real-world problems under intense pressure.",
    fullDesc: "The flagship innovation challenge of NIRVAN '26. Teams of developers, AI architects, and UI engineers race against time to build hardware or software prototypes addressing pressing real-world issues.",
    prizes: "₹1,50,000 Cash Prize Pool + Incubation Support + Cloud Credits",
    teamSize: "2 - 4 Members per team",
    duration: "24 Hours Non-stop",
    tracks: ["AI & Agentic Systems", "Web3 & Decentralized Tech", "Smart Healthcare & EdTech", "Open Innovation"],
    stages: [
      { name: "Stage 1: Registration & Problem Selection", desc: "Teams register, select an official problem statement, and submit their initial architectural deck." },
      { name: "Stage 2: 24-Hour Build & Mentorship", desc: "Non-stop hackathon sprint with 2 rounds of industry mentor evaluations and checkpoint reviews." },
      { name: "Stage 3: Grand Finale Pitch", desc: "Top finalist teams demonstrate live working prototypes on stage to expert judges." }
    ],
    rules: [
      "All code must be written during the 24-hour hackathon timeframe.",
      "Pre-existing open-source libraries and APIs are permitted; pre-written core application code is prohibited.",
      "Teams must maintain ethical standards; plagiarism leads to immediate disqualification.",
      "Judges' decisions regarding technical execution, innovation, and impact are final."
    ],
    pastHighlights: [
      {
        title: "GRAPH-E-THON 3.0",
        date: "2–5 APRIL 2026",
        location: "Graphic Era University, Dehradun",
        desc: "A 72-hour national-level hackathon focused on solving challenges connected to the UN Sustainable Development Goals.",
        stats: "931 Teams • 4,087 Participants • 100 Finalist Teams • 72 Hours"
      },
      {
        title: "HACKATHON 2025",
        date: "6–7 MARCH 2025",
        location: "GEHU Haldwani (Tech Geeks Club)",
        desc: "A 24-hour hackathon bringing students together to tackle challenges in AI, Blockchain, and Cybersecurity.",
        stats: "200+ Students • 24 Hours • Tech Geeks Club"
      },
      {
        title: "GRAPH-E-THON 2.0",
        date: "26 MAY 2024",
        location: "Graphic Era Hill University",
        desc: "72-hour national hackathon challenge fostering rapid software prototyping.",
        stats: "80+ Teams • 40+ Universities"
      }
    ]
  },
  {
    id: "webathon",
    title: "WEB-A-THON",
    tagline: "Frontend & Web Design",
    icon: "Layout",
    accentColor: "purple",
    badge: "Creative Design",
    date: "12 OCTOBER 2026",
    time: "11:00 AM - 05:00 PM IST",
    venue: "Web Development Lab 302",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to individual web developers and frontend teams (1-3 members).",
    shortDesc: "Turn ideas into immersive digital experiences through frontend creativity and development.",
    fullDesc: "Craft stunning visual interfaces, smooth micro-interactions, and high-performance web applications. Show off your design system, CSS mastery, and frontend engineering skills.",
    prizes: "₹80,000 Cash Prize Pool + Frontend Pro Subscriptions",
    teamSize: "1 - 3 Members",
    duration: "6 Hours",
    tracks: ["Futuristic UI/UX", "3D WebGL Experiences", "Performance & Micro-Interactions"],
    stages: [
      { name: "Stage 1: Live Briefing", desc: "Design brief and UI theme constraints released at the venue." },
      { name: "Stage 2: Design & Code Sprint", desc: "6 hours to conceptualize, design, and code a responsive web application." },
      { name: "Stage 3: UX Showcase", desc: "Live walkthrough of design systems, animations, and responsive layouts." }
    ],
    rules: [
      "Vanilla HTML/CSS/JS or modern frontend frameworks (React, Vite, Tailwind) are allowed.",
      "Templates are prohibited; layout design must be crafted during the competition window.",
      "Responsiveness on Mobile, Tablet, and Desktop is mandatory."
    ],
    pastHighlights: [
      {
        title: "Graphic Era Frontend Showcase 2025",
        date: "NOVEMBER 2025",
        location: "GEHU Dehradun",
        desc: "Frontend design battle focused on web accessibility and micro-interactions.",
        stats: "150+ Designers • 45 Web Apps Created"
      },
      {
        title: "Past Edition Milestone",
        date: "TBA",
        location: "Graphic Era Campus",
        desc: "Additional historical archive details for Web-A-Thon past iterations are TBA.",
        stats: "Official Records TBA"
      }
    ]
  },
  {
    id: "ctf",
    title: "CAPTURE THE FLAG",
    tagline: "Cybersecurity Battle",
    icon: "ShieldAlert",
    accentColor: "magenta",
    badge: "Jeopardy CTF",
    date: "12 OCTOBER 2026",
    time: "10:00 AM IST Onwards",
    venue: "Cyber Proving Grounds, Lab 401",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to all students interested in Ethical Hacking & Security Research.",
    shortDesc: "Test your cybersecurity skills through challenges in cryptography, web security and reverse engineering.",
    fullDesc: "Enter the cyber proving grounds. Solve complex security puzzles, analyze memory dumps, break cryptographic ciphers, and exploit vulnerabilities to claim points on the live scoreboard.",
    prizes: "₹1,00,000 Cash Prize Pool + Security Vouchers",
    teamSize: "1 - 3 Members",
    duration: "8 Hours",
    tracks: ["Web Exploitation", "Reverse Engineering", "Cryptography & Forensics", "Binary Exploitation"],
    stages: [
      { name: "Stage 1: Flag Grid Launch", desc: "Scoreboard unlocks Jeopardy-style challenge categories." },
      { name: "Stage 2: Live Exploitation", desc: "Real-time scoreboard tracking as teams submit captured flag strings." }
    ],
    rules: [
      "Attacking CTF infrastructure or opponent machines results in instant ban.",
      "Sharing flags between competing teams is strictly prohibited.",
      "Writeups required for top 3 teams to claim prize allocation."
    ],
    pastHighlights: [
      {
        title: "Cyber Proving Grounds 2025",
        date: "OCTOBER 2025",
        location: "GEHU Dehradun",
        desc: "8-hour Jeopardy CTF with cryptography, reverse engineering, and web security categories.",
        stats: "120+ Security Researchers • 300+ Flags Captured"
      },
      {
        title: "Past CTF Edition",
        date: "TBA",
        location: "Graphic Era Campus",
        desc: "Historical records for earlier CTF chapters are TBA.",
        stats: "Details TBA"
      }
    ]
  },
  {
    id: "treasure-hunt",
    title: "TREASURE HUNT",
    tagline: "Clue-Driven Tech Quest",
    icon: "Compass",
    accentColor: "cyan",
    badge: "Campus-Wide",
    date: "13 OCTOBER 2026",
    time: "01:00 PM - 05:00 PM IST",
    venue: "Campus Outdoor Grounds & Quadrangle",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to all fest attendees registered in teams of 2 to 4.",
    shortDesc: "Follow encrypted clues, solve logic puzzles and race against time to uncover the ultimate digital treasure.",
    fullDesc: "A high-octane campus-wide quest combining physical checkpoints with AR/QR decryption challenges, algorithmic riddles, and mystery clues test your problem-solving speed.",
    prizes: "₹50,000 Cash Prize Pool + Mystery Tech Box",
    teamSize: "2 - 4 Members",
    duration: "4 Hours",
    tracks: ["Logic & Cryptic Riddles", "Campus Checkpoints", "AR Cipher Quests"],
    stages: [
      { name: "Stage 1: Cipher Drop", desc: "First encrypted coordinate puzzle delivered via NIRVAN Web App." },
      { name: "Stage 2: Checkpoint Sprint", desc: "Teams decode location hints and verify at physical physical/QR nodes." },
      { name: "Stage 3: The Vault", desc: "Final puzzle solved at the central arena to unlock the treasure." }
    ],
    rules: [
      "All physical clues must remain at checkpoints for subsequent teams.",
      "Use of external assistance or unauthorized campus vehicles is disallowed.",
      "Speed and correct clue decryption determine ranking."
    ],
    pastHighlights: [
      {
        title: "NIRVANA TECH FEST 2024",
        date: "6–7 DECEMBER 2024",
        location: "GEHU Haldwani",
        desc: "NIRVANA Tech Fest featured multiple technical experiences including Treasure Hunt, Hackathon, Science Exhibition and Research Presentation.",
        stats: "Campus-wide Quest • Science Exhibition • Research Track"
      }
    ]
  },
  {
    id: "esports",
    title: "E-SPORTS",
    tagline: "Gaming Arena",
    icon: "Gamepad2",
    accentColor: "purple",
    badge: "Tournament",
    date: "12 - 13 OCTOBER 2026",
    time: "10:00 AM IST Onwards",
    venue: "Esports Arena, Indoor Auditorium",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to all college esports teams. Valid player accounts required.",
    shortDesc: "Compete in high-stakes tactical esports battles in Valorant, BGMI, and Rocket League.",
    fullDesc: "Step into the NIRVAN Arena. Battle top collegiate esports teams in a multi-stage knock-out tournament hosted on live spectator screens with professional shoutcasting.",
    prizes: "₹75,000 Cash Prize Pool + Gaming Accessories",
    teamSize: "4 - 5 Members",
    duration: "2 Days",
    tracks: ["Valorant 5v5", "BGMI Squads", "Tekken / Rocket League 1v1"],
    stages: [
      { name: "Stage 1: Qualifiers", desc: "Knockout round matches across custom tournament rooms." },
      { name: "Stage 2: Semi-Finals & Grand Finals", desc: "Live-streamed main stage matches with spectator commentary." }
    ],
    rules: [
      "Standard competitive esports tournament rulebooks apply.",
      "Third-party cheats or exploits result in instant team permanent ban.",
      "Players must use registered game accounts."
    ],
    pastHighlights: [
      {
        title: "Collegiate Gaming Cup 2025",
        date: "DECEMBER 2025",
        location: "GEHU Dehradun",
        desc: "Inter-college gaming championship featuring Valorant and BGMI squad knockouts.",
        stats: "64 Squads • Live Spectator Broadcast"
      },
      {
        title: "Past Edition Tournament",
        date: "TBA",
        location: "GEHU Campus",
        desc: "Earlier historical tournament logs are TBA.",
        stats: "Official Logs TBA"
      }
    ]
  },
  {
    id: "workshops",
    title: "WORKSHOPS",
    tagline: "Masterclasses & AI",
    icon: "Lightbulb",
    accentColor: "magenta",
    badge: "Hands-on Learning",
    date: "13 OCTOBER 2026",
    time: "10:00 AM - 01:00 PM IST",
    venue: "Seminar Hall 1, Academic Block",
    fee: "FREE (₹0 Entry Fee)",
    eligibility: "Open to all registered NIRVAN '26 attendees.",
    shortDesc: "Learn directly from industry leaders in AI, Cloud Computing, Agentic Workflows, and System Architecture.",
    fullDesc: "Hands-on interactive tech sessions led by veteran software engineers and AI researchers. Gain practical experience building LLM pipelines, WebGL shaders, and scalable microservices.",
    prizes: "Certificates of Excellence + Exclusive AI Resource Kits",
    teamSize: "Individual Entry",
    duration: "3-Hour Intensive Sessions",
    tracks: ["Building AI Agents", "Modern Web Architecture", "Ethical Hacking & Pentesting"],
    stages: [
      { name: "Session 1: Live Coding & Architecture", desc: "Interactive presentation and code setup." },
      { name: "Session 2: Hands-on Lab Project", desc: "Attendees build a practical mini-project under mentor guidance." }
    ],
    rules: [
      "Laptops recommended for hands-on code exercises.",
      "Attendance certificate issued upon session completion."
    ],
    pastHighlights: [
      {
        title: "AI Agent Workflows Workshop 2025",
        date: "OCTOBER 2025",
        location: "GEHU Dehradun",
        desc: "Hands-on masterclass on building LLM agents and web application integration.",
        stats: "300+ Attendees • Hands-on Lab"
      },
      {
        title: "Past Masterclasses",
        date: "TBA",
        location: "Graphic Era Campus",
        desc: "Additional historical workshop records are TBA.",
        stats: "Records TBA"
      }
    ]
  }
];

export const SCHEDULE_DATA = [
  {
    day: "Day 1",
    date: "12 OCTOBER 2026",
    badge: "TENTATIVE SCHEDULE",
    items: [
      { time: "09:00 AM - 10:30 AM", title: "NIRVAN ’26 Grand Inauguration", venue: "Main Auditorium", eventId: "hackathon", category: "Ceremony" },
      { time: "10:30 AM - 11:30 AM", title: "Keynote Address: Future of AI & Innovation", venue: "Main Auditorium", eventId: "workshops", category: "Keynote" },
      { time: "11:00 AM IST", title: "HACKATHON 24-Hour Sprint Kickoff", venue: "CS Block Auditorium", eventId: "hackathon", category: "Hackathon" },
      { time: "11:30 AM - 05:30 PM", title: "WEB-A-THON Design Sprint", venue: "Web Development Lab 302", eventId: "webathon", category: "Design" },
      { time: "12:00 PM - 08:00 PM", title: "CAPTURE THE FLAG Jeopardy Arena", venue: "Cyber Lab 401", eventId: "ctf", category: "Cybersecurity" },
      { time: "02:00 PM - 07:00 PM", title: "E-SPORTS Valorant & BGMI Qualifiers", venue: "Esports Arena", eventId: "esports", category: "Gaming" }
    ]
  },
  {
    day: "Day 2",
    date: "13 OCTOBER 2026",
    badge: "TENTATIVE SCHEDULE",
    items: [
      { time: "09:00 AM IST", title: "HACKATHON 24-Hour Code Freeze & Mentorship Review", venue: "CS Block Auditorium", eventId: "hackathon", category: "Hackathon" },
      { time: "10:00 AM - 01:00 PM", title: "AI & Modern Web Masterclass Workshop", venue: "Seminar Hall 1", eventId: "workshops", category: "Workshop" },
      { time: "11:00 AM - 02:00 PM", title: "HACKATHON Grand Finale Pitching to Judges", venue: "Main Auditorium Stage", eventId: "hackathon", category: "Hackathon" },
      { time: "01:00 PM - 05:00 PM", title: "TREASURE HUNT Campus-Wide Quest", venue: "Quadrangle & Campus Grounds", eventId: "treasure-hunt", category: "Quest" },
      { time: "02:00 PM - 05:00 PM", title: "E-SPORTS Grand Finals & Live Stream", venue: "Esports Arena Stage", eventId: "esports", category: "Gaming" },
      { time: "05:30 PM - 07:30 PM", title: "Prize Distribution & Closing Ceremony", venue: "Main Auditorium", eventId: "hackathon", category: "Ceremony" }
    ]
  }
];

export const MARQUEE_ITEMS = [
  "HACKATHON",
  "WEB-A-THON",
  "CAPTURE THE FLAG",
  "E-SPORTS",
  "TREASURE HUNT",
  "WORKSHOPS",
  "GRAPHIC ERA HILL UNIVERSITY",
  "₹5,00,000+ PRIZES",
  "12 OCTOBER 2026"
];

export const FOOTER_CONFIG = {
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Events", href: "#events" },
    { label: "Schedule", href: "#schedule" },
    { label: "Gallery", href: "#gallery" }
  ],
  socials: [
    { platform: "Instagram", handle: "@nirvan.gehu", url: "#" },
    { platform: "Twitter", handle: "@nirvan_gehu", url: "#" },
    { platform: "LinkedIn", handle: "NIRVAN GEHU Fest", url: "#" },
    { platform: "Discord", handle: "NIRVAN '26 Server", url: "#" }
  ],
  contact: {
    email: "nirvan2026@gehu.ac.in",
    phone: "+91 98765 43210",
    address: "Graphic Era Hill University, Society Area, Clement Town, Dehradun, Uttarakhand 248002"
  }
};
