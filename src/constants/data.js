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
    title: "SaaS CRM Platform",
    description: "End-to-end CRM system with role-based access for sales, marketing, and admin teams. Features include lead management, campaign dashboards, and reporting.",
    tags: ["React.js", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
    image: "https://placehold.co/600x400/6366f1/ffffff?text=SaaS+CRM",
    github: "#",
    live: "https://mini-crm-dashboard-one.vercel.app/",
  },
  {
    id: 2,
    title: "Reusable Data Table System",
    description: "Configurable, scalable data table built on React Table — supports filtering, sorting, and pagination. Adopted across 8+ CRM modules.",
    tags: ["React Table", "React.js", "Tailwind CSS"],
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Data+Table",
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Real-time Chat Module",
    description: "In-progress real-time messaging feature using WebSockets (Socket.io) enabling live communication between CRM platform users.",
    tags: ["Socket.io", "WebSockets", "React.js"],
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