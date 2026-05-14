import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Code2, Layers, Zap, Users, Clock, Braces, Globe, Wifi, FileCode } from 'lucide-react'
import {
  SiReact, SiTypescript, SiRedux, SiReactrouter,
  SiTailwindcss, SiFirebase, SiJest, SiSocketdotio,
  SiPwa, SiFramer,
} from 'react-icons/si'
import { personalInfo } from '../constants/data'
import profileImg from "../assets/portfolio_img.png";

const AnimatedCounter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const stepTime = 16
    const steps = Math.ceil(duration / stepTime)
    const increment = target / steps
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

// Quick stat cards shown below the bio
const stats = [
  { label: 'Years Experience',   target: 4,  suffix: '+' },
  { label: 'Projects Delivered', target: 10, suffix: '+' },
  { label: 'APIs Integrated',    target: 50, suffix: '+' },
  { label: 'UI Components Built',target: 30, suffix: '+' },
]

// Highlights — what makes you stand out
const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Component-driven architecture with reusability and scalability in mind.',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: '~30% rendering improvement using memoization and code splitting.',
    color: '#34d399',
    bg: 'rgba(52,211,153,0.08)',
  },
  {
    icon: Layers,
    title: 'Full Feature Ownership',
    desc: 'End-to-end delivery from design handoff to production deployment.',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
  },
  {
    icon: Users,
    title: 'Agile Team Player',
    desc: 'Experienced in sprint-based delivery with Git, Jira, and Postman.',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.08)',
  },
]

const techTags = [
  { label: 'React.js',              Icon: SiReact,       color: '#61dafb', tip: '4+ yrs · Primary framework' },
  { label: 'TypeScript',            Icon: SiTypescript,  color: '#3178c6', tip: '3+ yrs · Type-safe JS' },
  { label: 'Redux Toolkit',         Icon: SiRedux,       color: '#764abc', tip: '3+ yrs · Global state' },
  { label: 'RTK Query',             Icon: SiRedux,       color: '#764abc', tip: '2+ yrs · Data fetching layer' },
  { label: 'React Router v6',       Icon: SiReactrouter, color: '#ca4245', tip: '3+ yrs · Client-side routing' },
  { label: 'Tailwind CSS',          Icon: SiTailwindcss, color: '#38bdf8', tip: '3+ yrs · Utility-first CSS' },
  { label: 'Framer Motion',         Icon: SiFramer,      color: '#0055ff', tip: '2+ yrs · Animations' },
  { label: 'Firebase',              Icon: SiFirebase,    color: '#ffca28', tip: '2+ yrs · Auth, Firestore, Storage' },
  { label: 'Jest',                  Icon: SiJest,        color: '#c21325', tip: '2+ yrs · Unit testing' },
  { label: 'Socket.io',             Icon: SiSocketdotio, color: '#010101', tip: '1+ yr · Real-time events' },
  { label: 'PWA',                   Icon: SiPwa,         color: '#5a0fc8', tip: '1+ yr · Offline-capable apps' },
  { label: 'React Testing Library', Icon: FileCode,      color: '#e33332', tip: '2+ yrs · Component testing' },
  { label: 'WebSockets',            Icon: Wifi,          color: '#34d399', tip: '1+ yr · Bi-directional comms' },
  { label: 'REST APIs',             Icon: Globe,         color: '#06b6d4', tip: '4+ yrs · HTTP integration' },
  { label: 'Radix UI',              Icon: Code2,         color: '#8b5cf6', tip: '1+ yr · Accessible primitives' },
]

const About = () => {
  return (
    
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-canvas-900"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            About Me
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            The person behind the code
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Rotating conic-gradient ring + static image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Spinning ring layer — sits behind the image */}
                <div
                  className="absolute inset-0 rounded-3xl profile-ring-spin"
                  style={{
                    background: 'conic-gradient(from 0deg, #34d399, #06b6d4, #6366f1, #34d399)',
                  }}
                />
                {/* Static image inset by ring thickness */}
                <div className="absolute inset-[3px] rounded-3xl overflow-hidden shadow-glow-lg">
                  <img
                    src={profileImg}
                    alt="Prashant Kumar"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 rounded-2xl shadow-glow border border-gray-100 dark:border-gray-700/60 overflow-hidden"
              >
                {/* Accent top stripe */}
                <div className="h-1 w-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center flex-shrink-0">
                    <Clock size={15} className="text-emerald-500 dark:text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white leading-none">4+</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium mt-0.5">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stack badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -top-5 -right-5 bg-white dark:bg-gray-900 rounded-2xl shadow-glow border border-gray-100 dark:border-gray-700/60 overflow-hidden"
              >
                <div className="h-1 w-full bg-gradient-to-r from-cyan-400 to-indigo-400" />
                <div className="flex items-center gap-3 px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 flex items-center justify-center flex-shrink-0">
                    <Braces size={15} className="text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900 dark:text-white leading-none">React</p>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium mt-0.5">Primary Stack</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right — Bio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="space-y-6"
          >
            <p className="text-2xl font-medium text-gray-900 dark:text-white leading-snug tracking-tight">
              I'm a <span className="text-emerald-500 dark:text-emerald-400">Software Engineer (Frontend)</span> with
              4+ years of hands-on experience building scalable SaaS CRM platforms.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in React, Redux Toolkit, and Tailwind CSS — focused on clean architecture and real performance gains.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently at <a href="https://www.digitalbuzzindia.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-500 dark:text-emerald-400 underline underline-offset-4 decoration-emerald-400/50 hover:decoration-emerald-400 transition-all duration-200">DigitalBuzz LLP</a>,
              leading frontend delivery of a multi-role SaaS CRM — building everything from reusable component
              libraries to real-time WebSocket chat modules.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {techTags.map(({ label, Icon, color, tip }) => (
                <div key={label} className="relative group/pill">
                  {/* Pill */}
                  <span className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full
                    bg-gray-100 dark:bg-gray-800/70
                    text-gray-700 dark:text-gray-300
                    border border-gray-200 dark:border-gray-700/60
                    transition-all duration-200 ease-out cursor-default
                    group-hover/pill:pr-4 group-hover/pill:border-gray-300 dark:group-hover/pill:border-gray-600
                    group-hover/pill:bg-white dark:group-hover/pill:bg-gray-800
                    group-hover/pill:shadow-sm"
                  >
                    <Icon size={13} style={{ color }} className="flex-shrink-0" />
                    {label}
                  </span>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5
                    bg-gray-900 dark:bg-gray-950 text-white text-xs font-medium rounded-lg
                    whitespace-nowrap pointer-events-none z-10
                    opacity-0 -translate-y-1 scale-95
                    group-hover/pill:opacity-100 group-hover/pill:translate-y-0 group-hover/pill:scale-100
                    transition-all duration-200 ease-out
                    shadow-lg border border-white/10">
                    {tip}
                    {/* Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-950" />
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          className="grid grid-cols-2 sm:grid-cols-4 mb-20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 ${i < stats.length - 1 ? 'border-r border-gray-200 dark:border-gray-700/60' : ''}`}
            >
              <p className="font-display text-6xl font-bold text-gray-900 dark:text-white leading-none tracking-tighter">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[11px] font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Highlights grid — 4 equal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 overflow-hidden transition-all duration-300"
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 8px 32px ${item.color}20`
                e.currentTarget.style.borderColor = `${item.color}40`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              {/* Top accent border */}
              <span
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
                style={{ background: item.color }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 mt-2 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.bg }}
              >
                <item.icon size={22} style={{ color: item.color }} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
   
  )
}

export default About