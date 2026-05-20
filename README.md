// ═══════════════════════════════════════
//  PORTFOLIO DATA STORE
//  Edit here OR use Admin Panel
// ═══════════════════════════════════════

const DEFAULT_DATA = {
  profile: {
    name: "Chandru Govindaraj",
    title: "ECE Engineer · IoT Builder · Innovator",
    bio: "Final-year Electronics & Communication Engineering student at United Institute of Technology, Coimbatore — building smart embedded systems, IoT solutions & creative tech.",
    email: "thekingmakerchandru@gmail.com",
    phone: "9345988466",
    linkedin: "chandru-govindaraj-843799256",
    blog: "https://chandrugembeddedprojects.blogspot.com",
    location: "Dharmapuri, Tamil Nadu",
    address: "2/181, Gundalapatti (village), Hale Dharmapuri (post), Dharmapuri – 636701"
  },

  skills: [
    { id:1, icon:"🐍", name:"Python",           level:"Basic",        pct:35 },
    { id:2, icon:"💻", name:"C Programming",    level:"Basic",        pct:40 },
    { id:3, icon:"🔌", name:"Embedded Systems", level:"Pursuing",     pct:58 },
    { id:4, icon:"📡", name:"IoT Systems",      level:"Intermediate", pct:62 },
    { id:5, icon:"🧠", name:"CNN / AI Basics",  level:"Exposure",     pct:30 },
    { id:6, icon:"🎨", name:"Design & Creativity",level:"Passionate", pct:78 },
    { id:7, icon:"📣", name:"Communication",    level:"Strong",       pct:82 },
    { id:8, icon:"🚀", name:"Product Thinking", level:"Strong",       pct:72 },
    { id:9, icon:"⚡", name:"Circuit Design",   level:"Intermediate", pct:55 },
    { id:10,icon:"📊", name:"Marketing",        level:"Interested",   pct:60 }
  ],

  projects: [
    {
      id:1,
      emoji:"👶",
      bg:"linear-gradient(135deg,#0f1a2e,#0a1520)",
      tag:"Final Year Project · 2026",
      title:"Smart Baby Incubator",
      desc:"IoT-powered neonatal incubator with real-time monitoring of temperature, humidity & SpO₂ — designed for rural healthcare. Sends alerts to doctors remotely.",
      link:"https://chandrugembeddedprojects.blogspot.com/2026/05/smart-baby-incubator-monitoring-and.html",
      github:""
    },
    {
      id:2,
      emoji:"❤️",
      bg:"linear-gradient(135deg,#1e0a0a,#180808)",
      tag:"Mini Project · 2025",
      title:"Portable IoT ECG Monitor",
      desc:"Cloud-connected portable ECG system that captures heart data, transmits it remotely, and enables real-time diagnosis by physicians from anywhere.",
      link:"https://chandrugembeddedprojects.blogspot.com/2026/03/portable-iot-based-ecg-monitoring.html",
      github:""
    },
    {
      id:3,
      emoji:"☀️",
      bg:"linear-gradient(135deg,#1a1500,#120f00)",
      tag:"Mini Project · 2025",
      title:"Solar Charger Circuit",
      desc:"Renewable energy harvesting circuit built from scratch — demonstrates solar charging, efficient charge management and battery protection systems.",
      link:"https://chandrugembeddedprojects.blogspot.com/2026/03/solar-charger-with-basic-electronics.html",
      github:""
    },
    {
      id:4,
      emoji:"🌱",
      bg:"linear-gradient(135deg,#081a08,#051205)",
      tag:"Conference Paper · ICEICST 2025",
      title:"Smart Irrigation via CNN",
      desc:"Presented at an international conference — CNN-based smart irrigation that uses computer vision to detect crop health and auto-optimize water usage.",
      link:"",
      github:""
    }
  ],

  certifications: [
    { id:1, icon:"📜", name:"NPTEL – Soft Skills & Personality Development",  body:"National Programme on Technology Enhanced Learning (IITs)", year:"2023" },
    { id:2, icon:"🤖", name:"NPTEL – Automation in Manufacturing",             body:"National Programme on Technology Enhanced Learning (IITs)", year:"2025" },
    { id:3, icon:"🌍", name:"International Conference – ICEICST 2025",        body:"Paper: Smart Irrigation System Using CNN",                  year:"2025" },
    { id:4, icon:"🏭", name:"Twin Booster Panel Assembly Training",           body:"Spares Factory Company — Industrial Training",             year:"2024" },
    { id:5, icon:"💡", name:"Entrepreneurship Development Program",           body:"Student Entrepreneur Workshop",                           year:"2024" }
  ]
};

// ─── Persistence helpers ───
function getData() {
  try {
    const s = localStorage.getItem("cg_portfolio");
    return s ? JSON.parse(s) : DEFAULT_DATA;
  } catch(e) { return DEFAULT_DATA; }
}
function saveData(d) {
  try { localStorage.setItem("cg_portfolio", JSON.stringify(d)); } catch(e){}
}
function resetData() {
  localStorage.removeItem("cg_portfolio");
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

// Expose globally
window.PD = getData();
