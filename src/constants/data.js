import planniumImg from "../assets/Plannium.png";
import crmImg from "../assets/CRM.png";

export const personalInfo = {
  name: "Prashant Kumar",
  role: "Frontend Developer (React.js)",
  tagline: "Building scalable SaaS products with clean, performant UI.",
  email: "prashant2009kr@gmail.com",
  phone: "7972052896",
  location: "Baner, Pune – 411046",
  github: "https://github.com/prashant-1012",
  available: true,
}

export const skills = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["React.js", "Redux Toolkit", "React Router", "React Table"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS Modules"] },
  { category: "API & State", items: ["REST APIs", "Axios", "createAsyncThunk", "Redux"] },
  { category: "Real-time", items: ["WebSockets", "Socket.io"] },
  { category: "Tools", items: ["Git", "GitHub", "Jira", "Postman", "Figma", "Vite"] },
]

export const projects = [
  {
    id: 1,
    title: "Mini CRM Analytics Dashboard",
    description: "Feature-based CRM dashboard built with React and Redux Toolkit. Supports lead management, dynamic data tables, and KPI analytics with persistent state using local storage. Designed with scalable architecture separating UI, logic, and API layers.",
    tags: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST APIs",
      "React Hook Form",
      "TanStack Table",
      "Axios",
      "Recharts"
    ],
    // image: "/src/assets/CRM.png",
    image: crmImg,
    github: "#",
    live: "https://mini-crm-dashboard-one.vercel.app/",
  },
  {
    id: 2,
    title: "Plannium – Smart Daily Task Planner",
    description: "A modern task planner with multi-day view, real-time add/edit/delete, completion tracking, and localStorage persistence. Features responsive UI, dark mode, search, and animated interactions.",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "date-fns", "localStorage", "Vite", "Responsive Design", "State Management"],
    // image: "/src/assets/Plannium.png",
    image: planniumImg,
    github: "#",
    live: "https://plannium.vercel.app/",
  },
  {
    id: 3,
    "title": "Real-time Chat Module (Under Development)",
    "description": "Building a real-time chat system with Socket.io for seamless communication between CRM users, featuring secure authentication and scalable backend architecture.",
    "tags": [
      "React.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "Jest",
      "React Testing Library",
      "Socket.io",
      "WebSockets",
      "REST API",
      "JWT Auth"
    ],
    image: "https://placehold.co/600x400/06b6d4/ffffff?text=Chat+Module",
    github: "#",
    live: "#",
  },
]

export const experience = [
  {
    id: 1,
    role: "Software Developer (Frontend)",
    company: "DigitalBuzz LLP",
    period: "Feb 2025 – Present",
    type: "Full-time",
    points: [
      "Leading frontend development of a multi-role SaaS CRM platform",
      "Architected a shared component library of 30+ UI elements, reducing code duplication by ~40%",
      "Improved rendering performance by ~30% using useMemo, useCallback, and React.memo",
      "Building a real-time in-app chat module using WebSockets (Socket.io)",
    ],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "DigitalBuzz LLP",
    period: "July 2023 – Feb 2025",
    type: "Full-time",
    points: [
      "Independently developed 5+ feature modules for the SaaS CRM",
      "Built a configurable data table system adopted across 8+ modules platform-wide",
      "Integrated 20+ REST APIs using Redux Toolkit's createAsyncThunk",
      "Designed and delivered campaign analytics dashboards",
    ],
  },
  {
    id: 3,
    role: "Junior Frontend Developer",
    company: "DigitalBuzz LLP",
    period: "Jan 2022 – July 2023",
    type: "Full-time",
    points: [
      "Built 15+ reusable UI components using React and Tailwind CSS",
      "Implemented end-to-end client onboarding flow with OTP-based verification",
      "Integrated REST APIs for leads, campaigns, and payment workflows",
      "Collaborated in a 5-person agile team using Git, Jira, and Postman",
    ],
  },
]