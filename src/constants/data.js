import planniumImg from "../assets/Plannium.png";
import crmImg from "../assets/CRM.png";
import cognivoyaImg from "../assets/Cognivoya.PNG";
import pingoraImg from "../assets/Pingora.png";
import analytiqImg from "../assets/analytiq.png";

export const personalInfo = {
  name: "Prashant Kumar",
  role: "Software Engineer | React.js · TypeScript · SaaS Systems",
  tagline: "Building scalable SaaS products with clean, performant UI.",
  email: "prashant2009kr@gmail.com",
  phone: "7972052896",
  location: "Baner, Pune – 411046",
  github: "https://github.com/prashant-1012",
  available: true,
}

export const skills = [
  { category: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["React.js", "Next.js", "Redux Toolkit", "React Router v6", "React Table", "Radix UI"] },
  { category: "Styling", items: ["Tailwind CSS", "CSS Modules", "CSS Custom Properties"] },
  { category: "API & State", items: ["REST APIs", "RTK Query", "TanStack Query", "Axios", "createAsyncThunk", "Redux"] },
  { category: "Real-time", items: ["WebSockets", "Socket.io", "Firebase Firestore", "Firebase Auth"] },
  { category: "Tools", items: ["Git", "GitHub", "Jira", "Postman", "Figma", "Vite", "PWA"] },
]

export const projects = [
  {
    id: 5,
    title: "Analytiq – Multi-Tenant SaaS Analytics Dashboard",
    description: "Production-grade multi-tenant analytics dashboard with org-scoped data isolation, RBAC (4 roles), per-tenant branding, KPI cards with sparklines, feature usage analytics, drill-down event explorer, CSV export, user & tenant management, and 30s live polling.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "TanStack Query",
      "Recharts",
      "NextAuth.js",
      "ShadCN UI",
      "REST APIs",
      "MSW",
    ],
    image: analytiqImg,
    github: "#",
    live: "https://analytiq-dashboard.vercel.app",
    featured: true,
  },
  {
    id: 4,
    title: "Cognivoya – AI Tools Discovery Platform",
    description: "Production-grade AI tools discovery platform inspired by Futurepedia and Product Hunt. Browse 60+ curated AI tools, filter by category, search via a ⌘K command palette, bookmark favorites, and view full tool detail pages — all with smooth page transitions, skeleton loaders, and PWA support.",
    tags: [
      "React 19",
      "Redux Toolkit",
      "RTK Query",
      "React Router v6",
      "Tailwind CSS v4",
      "Framer Motion",
      "Radix UI",
      "PWA",
      "Vite 8",
      "Code Splitting",
    ],
    image: cognivoyaImg,
    github: "https://github.com/prashant-1012/cognivoya",
    live: "https://cognivoya.vercel.app",
    featured: true,
  },
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
    title: "Pingora – Real-Time Chat App",
    description: "Full-featured real-time messaging app with 1-on-1 DMs, group chats, emoji reactions, reply threads, typing indicators, read receipts, and presence indicators. Backed by Firebase Firestore for live sync, Firebase Auth for email/password login, and a fully responsive mobile UI with light/dark theming.",
    tags: [
      "React 18",
      "Redux Toolkit",
      "React Router v7",
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Tailwind CSS",
      "Radix UI",
      "Vite",
    ],
    image: pingoraImg,
    github: "https://github.com/prashant-1012/pingora-chat-app",
    live: "https://pingoralabs.vercel.app/chat",
  },
]

export const experience = [
  {
    id: 1,
    role: "Software Engineer (Frontend)",
    company: "DigitalBuzz LLP",
    companyUrl: "https://www.digitalbuzzindia.com/",
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
    companyUrl: "https://www.digitalbuzzindia.com/",
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
    companyUrl: "https://www.digitalbuzzindia.com/",
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