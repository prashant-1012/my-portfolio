import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star, Globe, Database, Monitor, Layers, Calendar, BarChart2, Scissors } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
  SiReact, SiRedux, SiReactrouter, SiTailwindcss, SiFramer,
  SiRadixui, SiPwa, SiVite, SiTypescript, SiAxios, SiFirebase,
  SiReacthookform, SiNextdotjs,
} from 'react-icons/si'
import { projects } from '../constants/data'

/* Tag → { Icon, color } — partial match so "React 19", "React.js", "React 18" all hit */
const TAG_ICON_MAP = [
  { match: /^next\.?js/i,          Icon: SiNextdotjs,     color: '#ffffff' },
  { match: /^react router/i,       Icon: SiReactrouter,   color: '#ca4245' },
  { match: /^react hook form/i,    Icon: SiReacthookform, color: '#ec4899' },
  { match: /^react/i,              Icon: SiReact,          color: '#61dafb' },
  { match: /^redux/i,              Icon: SiRedux,          color: '#764abc' },
  { match: /^rtk query/i,          Icon: SiRedux,          color: '#764abc' },
  { match: /^tailwind/i,           Icon: SiTailwindcss,    color: '#38bdf8' },
  { match: /^framer/i,             Icon: SiFramer,         color: '#0055ff' },
  { match: /^radix/i,              Icon: SiRadixui,        color: '#a1a1aa' },
  { match: /^pwa/i,                Icon: SiPwa,            color: '#5a0fc8' },
  { match: /^vite/i,               Icon: SiVite,           color: '#646cff' },
  { match: /^typescript/i,         Icon: SiTypescript,     color: '#3178c6' },
  { match: /^axios/i,              Icon: SiAxios,          color: '#5a29e4' },
  { match: /^firebase/i,           Icon: SiFirebase,       color: '#ffca28' },
  { match: /^rest api/i,           Icon: Globe,            color: '#34d399' },
  { match: /^tanstack/i,           Icon: Layers,           color: '#f59e0b' },
  { match: /^recharts/i,           Icon: BarChart2,        color: '#8b5cf6' },
  { match: /^date-fns/i,           Icon: Calendar,         color: '#06b6d4' },
  { match: /^localstorage/i,       Icon: Database,         color: '#a3a3a3' },
  { match: /^responsive/i,         Icon: Monitor,          color: '#a3a3a3' },
  { match: /^state management/i,   Icon: Layers,           color: '#a3a3a3' },
  { match: /^code splitting/i,     Icon: Scissors,         color: '#a3a3a3' },
]

const getTagIcon = (tag) => TAG_ICON_MAP.find(({ match }) => match.test(tag))

/* Filter definitions — each has a label, icon, and tag-match regex */
const FILTERS = [
  { id: 'all',        label: 'All',         Icon: null,          match: null },
  { id: 'react',      label: 'React',       Icon: SiReact,       match: /react/i,      color: '#61dafb' },
  { id: 'typescript', label: 'TypeScript',  Icon: SiTypescript,  match: /typescript/i, color: '#3178c6' },
  { id: 'redux',      label: 'Redux',       Icon: SiRedux,       match: /redux/i,      color: '#764abc' },
  { id: 'firebase',   label: 'Firebase',    Icon: SiFirebase,    match: /firebase/i,   color: '#ffca28' },
  { id: 'framer',     label: 'Framer',      Icon: SiFramer,      match: /framer/i,     color: '#0055ff' },
  { id: 'pwa',        label: 'PWA',         Icon: SiPwa,         match: /pwa/i,        color: '#5a0fc8' },
]

const projectMatchesFilter = (project, filterId) => {
  if (filterId === 'all') return true
  const filter = FILTERS.find(f => f.id === filterId)
  return filter?.match ? project.tags.some(t => filter.match.test(t)) : true
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

/* Blinking terminal-cursor "In Dev" badge */
const WipBadge = () => (
  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-amber-500/30 text-amber-400 text-[11px] font-mono font-medium">
    <span className="animate-pulse">▋</span>
    In Dev
  </span>
)

const ProjectCard = ({ project, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const ordinal = String(index + 1).padStart(2, '0')
  const isWip = project.github === '#' && project.live === '#'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.1}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
    >
      {/* Skeleton */}
      {!imgLoaded && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
      )}

      {/* Full-bleed image */}
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Permanent dark gradient — content always readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/10" />

      {/* Faded ordinal watermark */}
      <span className="absolute top-3 right-4 font-display font-bold text-[64px] leading-none text-white/[0.07] select-none pointer-events-none">
        {ordinal}
      </span>

      {/* Top-left badges */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        {project.featured && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold">
            <Star size={10} className="fill-current" />
            Featured
          </span>
        )}
        {isWip && <WipBadge />}
      </div>

      {/* Always-visible: title + description, static — no movement */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-bold text-white leading-snug mb-1.5">
          {project.title}
        </h3>
        <p className="text-xs text-gray-300/80 leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Sliding panel — slides up over the base content on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gray-950/95 backdrop-blur-md border-t border-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-between p-4">
        {/* Title repeated inside panel */}
        <h3 className="font-display text-sm font-bold text-white leading-snug mb-2 group-hover:text-emerald-300 transition-colors duration-200 line-clamp-1">
          {project.title}
        </h3>

        {/* Tags with icons */}
        <div className="flex flex-wrap gap-1.5 flex-1 content-start overflow-hidden max-h-[44px]">
          {project.tags.slice(0, 5).map(tag => {
            const match = getTagIcon(tag)
            return (
              <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/8 text-white/70 border border-white/10">
                {match && <match.Icon size={10} style={{ color: match.color }} className="flex-shrink-0" />}
                {tag}
              </span>
            )
          })}
          {project.tags.length > 5 && (
            <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-white/8 text-white/40 border border-white/10">
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors duration-150"
          >
            <FaGithub size={13} />
            Code
          </a>
          <div className="w-px h-3 bg-white/20" />
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 text-xs font-medium text-white/60 group-hover:text-emerald-400 hover:!font-semibold hover:gap-2 transition-all duration-150"
          >
            <ExternalLink size={13} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return a.id - b.id
  })

  const filtered = sorted.filter(p => projectMatchesFilter(p, activeFilter))

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-canvas-900">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            Projects
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Things I've built
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A selection of projects that showcase my frontend skills — from scalable SaaS platforms to real-time features.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map(({ id, label, Icon, color }) => {
            const isActive = activeFilter === id
            return (
              <button
                key={id}
                onClick={() => setActiveFilter(id)}
                className={`relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                    : 'bg-white dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700/60 hover:border-emerald-300 dark:hover:border-emerald-700 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {Icon && <Icon size={12} style={{ color: isActive ? 'white' : color }} />}
                {label}
                {/* live count badge */}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  {id === 'all' ? sorted.length : sorted.filter(p => projectMatchesFilter(p, id)).length}
                </span>
              </button>
            )
          })}
        </motion.div>

        {/* Animated grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 dark:text-gray-600 py-16 text-sm">
            No projects match this filter yet.
          </p>
        )}

        {/* GitHub CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}
          className="text-center mt-16"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-5 text-sm">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/prashant-1012"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 dark:bg-white/5 text-white dark:text-gray-200 font-semibold text-sm border border-gray-700 dark:border-white/10 hover:border-emerald-500/60 dark:hover:border-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ boxShadow: '0 0 0 0 rgba(52,211,153,0)' }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 24px rgba(52,211,153,0.2), 0 0 48px rgba(52,211,153,0.08)' }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 0 0 rgba(52,211,153,0)' }}
          >
            <FaGithub size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            View all projects on GitHub
            <ExternalLink size={14} className="text-gray-500 dark:text-gray-500 group-hover:text-emerald-400 transition-colors duration-200" />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
