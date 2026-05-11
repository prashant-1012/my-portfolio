import { motion } from 'framer-motion'
import {
  Code2, Layers, Paintbrush, GitMerge,
  Radio, Wrench, Terminal
} from 'lucide-react'
import { skills } from '../constants/data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

// Map each category to an icon and accent color
const categoryConfig = {
  'Languages':       { icon: Code2,      color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
  'Frameworks':      { icon: Layers,     color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
  'Styling':         { icon: Paintbrush, color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
  'API & State':     { icon: GitMerge,   color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
  'Real-time':       { icon: Radio,      color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
  'Tools':           { icon: Wrench,     color: 'text-violet-600 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-950/50' },
}

// Single neutral pill style across all categories — editorial, not rainbow
const pillClass = 'bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-white/10'

const SkillCard = ({ category, items, index }) => {
  const config = categoryConfig[category] || {
    icon: Terminal,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/50',
  }

  const Icon = config.icon

  return (

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.08}
      className="group p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-lg hover:border-violet-200 dark:hover:border-violet-800/60 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl ${config.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={20} className={config.color} />
      </div>

      {/* Category title */}
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
        {category}
      </h3>

      {/* Skill pills */}
      <div className="flex flex-wrap gap-2">
        {items.map(skill => (
          <span
            key={skill}
            className={`px-3 py-1 text-xs font-medium rounded-full border ${pillClass} transition-all duration-200`}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>

  )
}

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white dark:bg-canvas-950"
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
          <span className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400">
            Skills
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            What I work with
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            A focused set of tools and technologies I use to build fast, scalable, production-ready frontends.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, i) => (
            <SkillCard
              key={skillGroup.category}
              category={skillGroup.category}
              items={skillGroup.items}
              index={i}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.5}
          className="text-center text-sm text-gray-400 dark:text-gray-600 mt-12"
        >
          Always learning · Currently exploring Next.js deeper and system design patterns
        </motion.p>

      </div>
    </section>
  )
}

export default Skills