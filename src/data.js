/* ═══════════════════════════════════════════════════════════════
   ALL CONTENT — extracted from the reference portfolio (PERSONAL_INFO.md
   + component data). This sketchbook tells the same story, drawn by hand.
   ═══════════════════════════════════════════════════════════════ */

export const PROFILE = {
  name: 'Ballani Venkata Manoj',
  shortName: 'B V Manoj',
  roles: ['AI Engineer', 'Data Scientist', 'Full-Stack Developer'],
  email: 'bvmanoj61@gmail.com',
  github: 'https://github.com/Venkata-Manoj',
  linkedin: 'https://linkedin.com/in/venkata-manoj',
  twitter: 'https://x.com/Manoj13016367',
  instagram: 'https://instagram.com/call_me_v_m',
  location: 'Chennai, India',
  openTo: ['Hyderabad', 'Bangalore', 'Mumbai', 'Vizag', 'Remote'],
  domains: ['Education', 'Fintech', 'Healthcare'],
  resume: '/Resume_Manoj.pdf',
  bio: "I'm an AI & Data Science engineering student at SIMATS Engineering, class of 2028. I build intelligent systems — from RAG pipelines and multi-LLM agent workflows to full-stack applications deployed at scale. Every project starts with the same philosophy: production-grade quality from day one.",
}

export const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'FastAPI', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'LangChain', 'shadcn/ui'],
  },
  {
    label: 'AI / ML',
    items: ['LLMs', 'RAG Pipelines', 'FAISS', 'NLP', 'PyTorch', 'TensorFlow', 'Ollama', 'Prompt Engineering', 'Transformers', 'scikit-learn'],
  },
  {
    label: 'Tools & Platforms',
    items: ['Vercel', 'Firebase', 'Docker', 'Git', 'Prisma', 'SQLite', 'PostgreSQL', 'MongoDB', 'REST APIs', 'VS Code', 'AI Agents'],
  },
]

export const EDUCATION = [
  {
    id: 'btech',
    title: 'B.Tech CSE (AI & Data Science)',
    institution: 'SIMATS Engineering / Saveetha University',
    image: '/SIMATS.jpeg',
    marks: '9.2 CGPA',
    year: '2024 – 2028',
    note: 'the AI playground 🧠',
    description:
      "Pursuing a Bachelor's degree in Computer Science with a specialization in Artificial Intelligence & Data Science. Focused on machine learning, deep learning, and full-stack development.",
  },
  {
    id: 'intermediate',
    title: 'Class XII (MPC)',
    institution: 'SR Junior College, Vijayawada',
    image: '/SR.jpeg',
    marks: '95.6%',
    year: '2022 – 2024',
    note: 'where it all started ✏️',
    description:
      'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry. Achieved top percentile in the board examinations.',
  },
]

export const PROJECTS = [
  {
    number: '01',
    emoji: '🎬',
    name: 'videoreverse',
    description: 'Deconstruct any video into production-ready prompts for video AI models (Runway, Veo, Sora).',
    tech: ['Python', 'CLI', 'Web UI'],
    github: 'https://github.com/Venkata-Manoj/videoreverse',
    live: null,
    note: 'the movie → prompt machine',
  },
  {
    number: '02',
    emoji: '🤖',
    name: 'AI-News-Bot',
    description: 'Autonomous news intelligence with a 6-LLM fallback chain — scrapes 6 sources and delivers rich Telegram cards every 45 minutes.',
    tech: ['Python', 'Multi-LLM', 'SQLite', 'Telegram'],
    github: 'https://github.com/Venkata-Manoj/AI-News-Bot',
    live: null,
    note: '6 LLMs, zero mercy',
  },
  {
    number: '03',
    emoji: '🔬',
    name: 'WhatIF',
    description: 'AI-powered UI component analyzer — paste any React/Vue/HTML component for instant risk identification and exportable PDF reports.',
    tech: ['TypeScript', 'Next.js', 'Firebase', 'Genkit'],
    github: 'https://github.com/Venkata-Manoj/WhatIF',
    live: 'https://what-if-henna.vercel.app',
    note: 'your components, under a microscope',
  },
  {
    number: '04',
    emoji: '📄',
    name: 'Capstone-Forage',
    description: 'RAG-powered report generator — ingests PDFs, DOCX, and images to produce institution-compliant capstone reports via FAISS + Ollama.',
    tech: ['Python', 'FastAPI', 'FAISS', 'Ollama', 'Tesseract OCR'],
    github: 'https://github.com/Venkata-Manoj/Capstone-Forage',
    live: null,
    note: 'report writing, automated',
  },
  {
    number: '05',
    emoji: '🛡️',
    name: 'Resilience-Ops-Env',
    description: 'Gym-style RL environment for IT incident response — AI agents learn triage, diagnosis, and recovery across progressive difficulty levels.',
    tech: ['Python', 'RL', 'OpenAI Gym'],
    github: 'https://github.com/Venkata-Manoj/Resilience-Ops-Env',
    live: null,
    note: 'agents fighting IT fires 🔥',
  },
  {
    number: '06',
    emoji: '🕷️',
    name: 'web-crawl',
    description: 'Website Cloner — BFS crawl, asset download, link rewriting, CLI + Flask Web UI. 52 tests.',
    tech: ['Python', 'Flask', 'CLI'],
    github: 'https://github.com/Venkata-Manoj/web-crawl',
    live: null,
    note: '52 tests, 0 crashes',
  },
  {
    number: '07',
    emoji: '📊',
    name: 'data-analysis',
    description: '6 ML projects: Customer Segmentation, NLP Sentiment, House Price Prediction, Wine Quality, PM2.5 Forecasting, Topic Modeling.',
    tech: ['Python', 'Jupyter', 'ML'],
    github: 'https://github.com/Venkata-Manoj/data-analysis',
    live: null,
    note: 'six little experiments',
  },
  {
    number: '08',
    emoji: '🎓',
    name: 'IdeaForge_2k26',
    description: 'E-certificate generation platform with glassmorphism UI, username validation, and PDF generation.',
    tech: ['TypeScript', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/Venkata-Manoj/IdeaForge_2k26',
    live: 'https://ideaforge-2k26.vercel.app',
    note: 'certificates, at scale',
  },
  {
    number: '09',
    emoji: '🤟',
    name: 'Sign-Language-TTS',
    description: 'Real-time sign language recognition using PyTorch LSTM with text-to-speech output via MediaPipe and OpenCV.',
    tech: ['Python', 'PyTorch', 'LSTM', 'MediaPipe', 'TTS'],
    github: 'https://github.com/Venkata-Manoj/Sign-Language-TTS',
    live: null,
    note: 'hands that speak',
  },
]

export const CERTS = [
  { title: 'AI Fundamentals', org: 'DataCamp', date: '2026', image: '/certificates/AI_Fundamentals_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'API Fundamentals', org: 'DataCamp', date: '2026', image: '/certificates/API_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'AI Engineer — Data Science', org: 'DataCamp', date: '2026', image: '/certificates/AiE_DS_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'AI Engineer — Development', org: 'DataCamp', date: '2026', image: '/certificates/AiE_dev_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'Python Programming', org: 'Kaggle', date: '2025', image: '/certificates/B V Manoj - Python.webp', badge: '🏆', badgeColor: '#20BEFF' },
  { title: 'Season 13 Cohort', org: 'Google Developer Groups', date: '2026', image: '/certificates/B V Manoj_certificate_s13.webp', badge: '🌐', badgeColor: '#4285F4' },
  { title: 'Ultimate AI Power Weekend', org: 'Outskill', date: '2025', image: '/certificates/Certificate - B V Manoj - The Ultimate AI Power Weekend_pages-to-jpg-0001.webp', badge: '🚀', badgeColor: '#7C3AED' },
  { title: 'Embeddings Fundamentals', org: 'DataCamp', date: '2026', image: '/certificates/Embeddings_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'Large Language Models', org: 'DataCamp', date: '2026', image: '/certificates/LLM_DC.webp', badge: '🏕️', badgeColor: '#03C04A' },
  { title: 'AI Certification', org: 'NIELIT', date: '2026', image: '/certificates/NIELIT.webp', badge: '🎓', badgeColor: '#1E3A5F' },
  { title: 'RAG Bootcamp', org: 'KodeKloud', date: '2026', image: '/certificates/RAG-BootCamp-KodeKloud.webp', badge: '☁️', badgeColor: '#DC2626' },
  { title: 'Jio Course Certificate', org: 'Jio', date: '2026', image: '/certificates/course_certificate_jio.webp', badge: '📡', badgeColor: '#D81B60' },
]

export const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificates' },
  { label: 'Contact', id: 'contact' },
]
