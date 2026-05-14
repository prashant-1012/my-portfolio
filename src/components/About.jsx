import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Code2, Layers, Zap, Users, Clock, Braces } from 'lucide-react'
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
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: '~30% rendering improvement using memoization and code splitting.',
  },
  {
    icon: Layers,
    title: 'Full Feature Ownership',
    desc: 'End-to-end delivery from design handoff to production deployment.',
  },
  {
    icon: Users,
    title: 'Agile Team Player',
    desc: 'Experienced in sprint-based delivery with Git, Jira, and Postman.',
  },
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-gray-900 dark:text-white">Software Engineer (Frontend)</span> with
              4+ years of hands-on experience building scalable SaaS CRM platforms. I specialize in
              React, Redux Toolkit, and Tailwind CSS — focused on clean architecture and real performance gains.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently at <a href="https://www.digitalbuzzindia.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-600 dark:text-emerald-400 cursor-pointer hover:text-emerald-800 dark:hover:text-emerald-300 hover:underline underline-offset-2 transition-colors duration-200">DigitalBuzz LLP</a>,
              leading frontend delivery of a multi-role SaaS CRM — building everything from reusable component
              libraries to real-time WebSocket chat modules.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'React Router v6', 'Tailwind CSS', 'Framer Motion', 'Radix UI', 'Firebase', 'Jest', 'React Testing Library', 'Socket.io', 'WebSockets', 'REST APIs', 'PWA'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium rounded-full 
bg-emerald-50 dark:bg-emerald-950/50
text-emerald-700 dark:text-emerald-300
border border-emerald-100 dark:border-emerald-800
transform transition-all duration-300 ease-out
hover:scale-110 hover:-translate-y-0.5
hover:shadow-md hover:shadow-emerald-500/20"
                >
                  {tag}
                </span>
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
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-glow-sm"
            >
              <p className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 shadow-glow-sm hover:shadow-glow hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon size={20} className="text-emerald-600 dark:text-emerald-400" />
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