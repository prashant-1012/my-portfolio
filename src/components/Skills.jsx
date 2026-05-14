import { motion } from 'framer-motion'
import {
  SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiReact, SiRedux, SiReactrouter, SiRadixui,
  SiTailwindcss,
  SiAxios, SiFirebase,
  SiSocketdotio,
  SiGit, SiGithub, SiJira, SiPostman, SiFigma, SiVite,
} from 'react-icons/si'
import { Code2, Layers, Paintbrush, GitMerge, Radio, Wrench, Zap, ArrowRight, Wifi, Globe } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

/* ─── Languages cell ────────────────────────────────────────────────────── */
const LanguagesCell = () => {
  const tokens = [
    { label: 'JavaScript',  Icon: SiJavascript, color: '#f7df1e' },
    { label: 'TypeScript',  Icon: SiTypescript, color: '#3178c6' },
    { label: 'HTML5',       Icon: SiHtml5,      color: '#e34f26' },
    { label: 'CSS3',        Icon: SiCss,       color: '#1572b6' },
  ]
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.05}
      className="col-span-1 sm:col-span-2 row-span-1 p-6 rounded-2xl bg-canvas-900 dark:bg-canvas-950 border border-gray-800/60 overflow-hidden relative group">
      {/* faint watermark */}
      <span className="absolute -right-4 -top-6 text-[120px] font-bold font-display text-white/[0.03] select-none pointer-events-none leading-none">&lt;/&gt;</span>

      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
          <Code2 size={15} className="text-blue-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Languages</span>
      </div>

      {/* code-block style */}
      <div className="font-mono text-sm space-y-2 bg-black/30 rounded-xl p-4 border border-white/5">
        <p className="text-gray-500"><span className="text-blue-400">const</span> <span className="text-emerald-400">stack</span> <span className="text-gray-500">= {'{'}</span></p>
        {tokens.map(({ label, Icon, color }) => (
          <p key={label} className="flex items-center gap-2 pl-4">
            <Icon size={13} style={{ color }} className="flex-shrink-0" />
            <span className="text-gray-300">{label}</span>
          </p>
        ))}
        <p className="text-gray-500">{'}'}</p>
      </div>
    </motion.div>
  )
}

/* ─── Frameworks cell ───────────────────────────────────────────────────── */
const FrameworksCell = () => {
  const items = [
    { label: 'React',         Icon: SiReact,       color: '#61dafb' },
    { label: 'Redux Toolkit', Icon: SiRedux,       color: '#764abc' },
    { label: 'React Router',  Icon: SiReactrouter, color: '#ca4245' },
    { label: 'Radix UI',      Icon: SiRadixui,     color: '#ffffff' },
    { label: 'React Table',   Icon: Layers,        color: '#34d399' },
  ]
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.1}
      className="col-span-1 sm:col-span-2 row-span-1 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 relative overflow-hidden group">
      <span className="absolute -right-4 -top-6 text-[120px] font-bold font-display text-emerald-500/[0.04] select-none pointer-events-none leading-none">F</span>

      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
          <Layers size={15} className="text-emerald-500" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">Frameworks</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {items.map(({ label, Icon, color }) => (
          <div key={label}
            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/8 hover:border-gray-200 dark:hover:border-white/15 transition-colors duration-200">
            <Icon size={16} style={{ color }} className="flex-shrink-0" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300 truncate">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Styling cell ──────────────────────────────────────────────────────── */
const StylingCell = () => {
  const items = [
    { label: 'Tailwind CSS',          Icon: SiTailwindcss, color: '#38bdf8' },
    { label: 'CSS Modules',           Icon: SiCss,        color: '#1572b6' },
    { label: 'CSS Custom Properties', Icon: Paintbrush,    color: '#ec4899' },
  ]
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.15}
      className="col-span-1 row-span-1 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 overflow-hidden relative group">
      <span className="absolute -right-2 -top-4 text-[100px] font-bold font-display text-pink-500/[0.05] select-none pointer-events-none leading-none">S</span>

      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
          <Paintbrush size={15} className="text-pink-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">Styling</span>
      </div>

      {/* gradient swatch */}
      <div className="h-2 w-full rounded-full mb-5" style={{ background: 'linear-gradient(to right, #38bdf8, #1572b6, #ec4899)' }} />

      <div className="space-y-2">
        {items.map(({ label, Icon, color }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={13} style={{ color }} className="flex-shrink-0" />
            <span className="text-xs text-gray-600 dark:text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── API & State cell ──────────────────────────────────────────────────── */
const ApiStateCell = () => {
  const items = ['REST APIs', 'RTK Query', 'Axios', 'createAsyncThunk', 'Redux']
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
      className="col-span-1 sm:col-span-2 row-span-1 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 relative overflow-hidden group">
      <span className="absolute -right-4 -top-6 text-[120px] font-bold font-display text-violet-500/[0.04] select-none pointer-events-none leading-none">A</span>

      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
          <GitMerge size={15} className="text-violet-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">API & State</span>
      </div>

      <div className="space-y-2 border-l-2 border-violet-500/30 pl-4">
        {items.map((item) => (
          <div key={item} className="flex items-center justify-between group/item">
            <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/item:text-violet-500 dark:group-hover/item:text-violet-400 transition-colors duration-150">{item}</span>
            <ArrowRight size={13} className="text-gray-300 dark:text-gray-600 group-hover/item:text-violet-400 group-hover/item:translate-x-0.5 transition-all duration-150" />
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Real-time cell ────────────────────────────────────────────────────── */
const RealtimeCell = () => {
  const items = [
    { label: 'WebSockets',        Icon: Wifi,         color: '#06b6d4' },
    { label: 'Socket.io',         Icon: SiSocketdotio,color: '#010101' },
    { label: 'Firebase Firestore',Icon: SiFirebase,   color: '#ffca28' },
    { label: 'Firebase Auth',     Icon: SiFirebase,   color: '#ffca28' },
  ]
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.25}
      className="col-span-1 row-span-1 p-6 rounded-2xl bg-canvas-900 dark:bg-canvas-950 border border-gray-800/60 relative overflow-hidden group">
      <span className="absolute -right-2 -top-4 text-[100px] font-bold font-display text-cyan-500/[0.05] select-none pointer-events-none leading-none">R</span>

      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center">
          <Radio size={15} className="text-cyan-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Real-time</span>
      </div>

      <div className="space-y-3">
        {items.map(({ label, Icon, color }) => (
          <div key={label} className="flex items-center gap-3">
            {/* pulsing live dot */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: color }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: color }} />
            </span>
            <Icon size={13} style={{ color }} className="flex-shrink-0" />
            <span className="text-xs text-gray-400">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Tools cell (full-width) ───────────────────────────────────────────── */
const ToolsCell = () => {
  const items = [
    { label: 'Git',     Icon: SiGit,     color: '#f05032' },
    { label: 'GitHub',  Icon: SiGithub,  color: '#ffffff' },
    { label: 'Jira',    Icon: SiJira,    color: '#0052cc' },
    { label: 'Postman', Icon: SiPostman, color: '#ff6c37' },
    { label: 'Figma',   Icon: SiFigma,   color: '#f24e1e' },
    { label: 'Vite',    Icon: SiVite,    color: '#646cff' },
    { label: 'PWA',     Icon: Zap,       color: '#8b5cf6' },
  ]
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
      className="col-span-1 sm:col-span-2 lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 relative overflow-hidden">

      <div className="flex items-center gap-2 mb-5">
        <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
          <Wrench size={15} className="text-amber-400" />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">Tools</span>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map(({ label, Icon, color }) => (
          <div key={label}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-amber-300 dark:hover:border-amber-500/40 hover:shadow-sm transition-all duration-200 group/tool">
            <Icon size={15} style={{ color }} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Main section ──────────────────────────────────────────────────────── */
const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-canvas-950">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">
            Skills
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            What I work with
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A focused set of tools and technologies I use to build fast, scalable, production-ready frontends.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          <LanguagesCell />
          <FrameworksCell />
          <StylingCell />
          <ApiStateCell />
          <RealtimeCell />
          <ToolsCell />
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
          className="text-center text-sm text-gray-400 dark:text-gray-600 mt-12"
        >
          Always learning · Currently exploring Next.js deeper and system design patterns
        </motion.p>

      </div>
    </section>
  )
}

export default Skills
