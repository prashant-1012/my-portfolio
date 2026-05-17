import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ArrowRight, GraduationCap } from 'lucide-react'
import { experience } from '../constants/data'

/* Wraps numbers/percentages like ~30%, 5+, 20+ in an accent span */
const highlightNumbers = (text) => {
  const parts = text.split(/(~?\d+[\+%x]?(?:\s*(?:more|less))?)/g)
  return parts.map((part, i) =>
    /^~?\d+[\+%x]?/.test(part)
      ? <strong key={i} className="text-emerald-500 dark:text-emerald-400 font-bold">{part}</strong>
      : part
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

const ExperienceCard = ({ item, index }) => {
  const isFirst = index === 0

  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index * 0.15}
      className="relative flex gap-6 md:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        {/* Dot — glowing ring */}
        <div className="relative z-10 shrink-0 flex items-center justify-center w-10 h-10">
          {/* Ping ring — current role only */}
          {isFirst && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping" />
          )}
          <div className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300
            ${isFirst
              ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_12px_rgba(52,211,153,0.5)]'
              : 'bg-white dark:bg-canvas-900 border-gray-300 dark:border-gray-600 shadow-[0_0_8px_rgba(52,211,153,0.15)]'
            }`}
          >
            <Briefcase
              size={16}
              className={isFirst ? 'text-emerald-400' : 'text-gray-400 dark:text-gray-500'}
            />
          </div>
        </div>

        {/* Glowing vertical track */}
        {index !== experience.length - 1 && (
          <div className="w-px flex-1 mt-2 min-h-[2rem]"
            style={{ background: 'linear-gradient(to bottom, rgba(52,211,153,0.4), rgba(52,211,153,0.05) 80%, transparent)', boxShadow: '0 0 6px rgba(52,211,153,0.2)' }}
          />
        )}
      </div>

      {/* Card */}
      <div className={`flex-1 pb-12 ${index === experience.length - 1 ? 'pb-0' : ''}`}>
        <div className={`group p-6 rounded-2xl bg-white dark:bg-gray-800/50 transition-all duration-300
          ${isFirst
            ? 'border border-emerald-500/40 shadow-[0_0_0_1px_rgba(52,211,153,0.15),0_0_24px_rgba(52,211,153,0.12)] hover:shadow-[0_0_0_1px_rgba(52,211,153,0.3),0_0_32px_rgba(52,211,153,0.2)]'
            : 'border border-gray-100 dark:border-gray-700/50 shadow-glow-sm hover:shadow-glow hover:border-emerald-200 dark:hover:border-emerald-800/60'
          }`}
        >

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
            <div>
              {/* Role */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                {item.role}
              </h3>

              {/* Company */}
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin size={13} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block text-sm font-semibold text-emerald-600 dark:text-emerald-400 group/company"
                >
                  {item.company}
                  <span className="absolute left-0 -bottom-px h-px w-full bg-emerald-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover/company:scale-x-100" />
                </a>
              </div>
            </div>

            {/* Period + type badge */}
            <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Calendar size={13} />
                <span>{item.period}</span>
              </div>
              {isFirst ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide font-mono">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                  </span>
                  LIVE
                </span>
              ) : (
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-700">
                  {item.type}
                </span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-100 dark:bg-gray-700/50 mb-4" />

          {/* Bullet points */}
          <ul className="space-y-3">
            {item.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 group/bullet">
                <ArrowRight
                  size={14}
                  className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5 group-hover/bullet:translate-x-0.5 transition-transform duration-150"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {highlightNumbers(point)}
                </span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-white dark:bg-canvas-950"
    >
      <div className="max-w-4xl mx-auto">

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
            Experience
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            My journey so far
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            4+ years of continuous growth — from junior to leading frontend delivery of a full SaaS platform.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {experience.map((item, i) => (
            <ExperienceCard
              key={item.id}
              item={item}
              index={i}
            />
          ))}
        </div>

        {/* Education */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mt-20"
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <GraduationCap size={18} className="text-emerald-500 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400">Education</p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Academic Background</h3>
            </div>
            {/* connecting line to cards */}
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/30 to-transparent ml-2" />
          </div>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Track line — desktop only */}
            <div className="hidden sm:block absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { degree: 'M.E. Environmental Engineering', school: 'Pune University',      year: '2016–2018', index: 0 },
                { degree: 'B.Tech Civil Engineering',       school: 'Bharati Vidyapeeth',   year: '2011–2015', index: 1 },
                { degree: 'Diploma in Network Security',    school: 'Bharati Vidyapeeth',   year: '2012–2015', index: 2 },
              ].map((edu) => (
                <div key={edu.degree} className="relative flex flex-col">
                  {/* Node dot on track */}
                  <div className="hidden sm:flex items-center mb-5">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-canvas-900 border-2 border-emerald-500/50 shadow-[0_0_8px_rgba(52,211,153,0.2)] flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-800/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.08)] transition-all duration-300">
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug mb-2">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{edu.school}</p>
                    <span className="inline-block px-2.5 py-1 text-[11px] font-semibold rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/40">
                      {edu.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience