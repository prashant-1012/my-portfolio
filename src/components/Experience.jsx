import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experience } from '../constants/data'

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
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                  {item.company}
                </span>
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
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2
                  size={16}
                  className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5"
                />
                <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {point}
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

        {/* Education note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mt-12 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-800/50"
        >
          <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300 mb-3 uppercase tracking-widest">
            Education
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { degree: 'M.E. Environmental Engineering', school: 'Pune University', year: '2016–2018' },
              { degree: 'B.Tech Civil Engineering',       school: 'Bharati Vidyapeeth', year: '2011–2015' },
              { degree: 'Diploma in Network Security',    school: 'Bharati Vidyapeeth', year: '2012–2015' },
            ].map(edu => (
              <div
                key={edu.degree}
                className="p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-l-4 border-emerald-100 dark:border-emerald-800/30"
              >
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1">
                  {edu.degree}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{edu.school}</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1 font-medium">{edu.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Experience