import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Mail, MapPin } from 'lucide-react'
import { personalInfo } from '../constants/data'
import { FaGithub } from 'react-icons/fa'
import MeshGradient from './MeshGradient'

// Animation variants — reusable config objects for Framer Motion
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' }
  })
}

// Magnetic pull — button drifts slightly toward the cursor on hover
const MagneticButton = ({ children }) => {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({
      x: (e.clientX - (rect.left + rect.width  / 2)) * 0.3,
      y: (e.clientY - (rect.top  + rect.height / 2)) * 0.3,
    })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={pos}
      transition={{ type: 'spring', stiffness: 300, damping: 18, mass: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const ROLES = [
  'Software Engineer',
  'Frontend Developer',
  'React Specialist',
  'Scalable UI Developer',
  // 'Web Performance Nerd',
]

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const badgeRef = useRef(null)
  const [orbitDotStyle, setOrbitDotStyle] = useState(null)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex(i => (i + 1) % ROLES.length)
    }, 2800)
    return () => clearInterval(id)
  }, [])

  // Measure badge pill and compute orbit path after mount
  useEffect(() => {
    const el = badgeRef.current
    if (!el) return
    const { width: w, height: h } = el.getBoundingClientRect()
    const r = h / 2
    // Clockwise pill path starting at top-left curve end
    const path = `path('M ${r} 0 L ${w - r} 0 A ${r} ${r} 0 0 1 ${w - r} ${h} L ${r} ${h} A ${r} ${r} 0 0 1 ${r} 0 Z')`
    setOrbitDotStyle({
      position: 'absolute',
      top: 0, left: 0,
      width: '5px', height: '5px',
      marginLeft: '-2.5px', marginTop: '-2.5px',
      borderRadius: '50%',
      background: '#34d399',
      offsetPath: path,
      offsetDistance: '0%',
      animation: 'orbit-dot 2.5s linear infinite',
      boxShadow: '0 0 6px 2px rgba(52,211,153,0.95), 0 0 14px 4px rgba(52,211,153,0.5), 0 0 24px 6px rgba(6,182,212,0.3)',
      pointerEvents: 'none',
      zIndex: 10,
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >

      {/* Animated mesh gradient background */}
      <MeshGradient />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Available badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="inline-flex mb-8"
        >
          {/* Glowing pill with orbiting dot border */}
          <div
            ref={badgeRef}
            className="relative p-[1px] rounded-full inline-flex overflow-visible"
            style={{ boxShadow: '0 0 18px rgba(52,211,153,0.15), 0 0 40px rgba(52,211,153,0.08)' }}
          >
            {/* Thin static border so pill has visible edge */}
            <div className="absolute -inset-[1px] rounded-full border border-emerald-500/20 dark:border-emerald-400/15" />

            {/* Orbiting glow dot */}
            {orbitDotStyle && <span style={orbitDotStyle} />}

            {/* Pill content */}
            <div className="relative rounded-full px-4 py-1.5 flex items-center gap-2 bg-white/90 dark:bg-canvas-950/90 backdrop-blur-sm text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
              Available for opportunities
            </div>
          </div>
        </motion.div>

        {/* Name — massive display heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display font-bold tracking-[-0.04em] text-gray-900 dark:text-white mb-3 leading-none"
          style={{ fontSize: 'clamp(60px, 10vw, 120px)' }}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role — thin label line with word rotation */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="mb-6 h-10 flex items-center justify-center overflow-hidden gap-2"
        >
          <span className="text-lg sm:text-xl font-light text-gray-400 dark:text-gray-500 tracking-wide">
            —
          </span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="text-lg sm:text-xl font-light tracking-wide bg-gradient-to-r from-emerald-500 to-cyan-400 dark:from-emerald-400 dark:to-cyan-300 bg-clip-text text-transparent"
            >
              {ROLES[roleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="text-lg sm:text-xl font-light text-gray-400 dark:text-gray-500 tracking-wide">
            —
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Meta info — location */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex items-center justify-center gap-2 text-sm text-gray-400 dark:text-gray-500 mb-10"
        >
          <MapPin size={14} />
          <span>{personalInfo.location}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* Primary CTA — gradient border + magnetic */}
          <MagneticButton>
            <div className="relative p-[1.5px] rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-400 w-full sm:w-auto active:scale-95 transition-transform duration-100">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors duration-200"
              >
                View My Work
              </a>
            </div>
          </MagneticButton>

          {/* Secondary CTA — ghost with glow on hover + magnetic */}
          <MagneticButton>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl
                border border-gray-300 dark:border-gray-700
                text-gray-700 dark:text-gray-300 font-semibold text-sm
                hover:border-emerald-500/60 dark:hover:border-emerald-500/50
                hover:text-emerald-600 dark:hover:text-emerald-400
                transition-all duration-200 active:scale-95
                hover:shadow-[0_0_24px_rgba(52,211,153,0.18),0_0_48px_rgba(52,211,153,0.08)]"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </MagneticButton>
        </motion.div>

        {/* Social links + scroll indicator — grouped so arrow stays centered under icons */}
        <div className="flex flex-col items-center gap-6">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex items-center justify-center gap-3"
        >
          {/* GitHub */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-0 hover:gap-2 px-3 py-2 rounded-full
              border border-gray-200 dark:border-gray-700/60
              hover:border-emerald-500/40 dark:hover:border-emerald-500/30
              text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400
              transition-all duration-300 ease-out"
          >
            <FaGithub size={16} className="shrink-0" />
            <span
              className="overflow-hidden whitespace-nowrap text-sm font-medium"
              style={{ maxWidth: 0, transition: 'max-width 300ms ease, opacity 300ms ease', opacity: 0 }}
              ref={el => {
                if (!el) return
                el.closest('a').addEventListener('mouseenter', () => { el.style.maxWidth = '80px'; el.style.opacity = '1' })
                el.closest('a').addEventListener('mouseleave', () => { el.style.maxWidth = '0px'; el.style.opacity = '0' })
              }}
            >
              GitHub
            </span>
          </a>

          <div className="w-px h-4 bg-gray-200 dark:bg-gray-700/50" />

          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-0 hover:gap-2 px-3 py-2 rounded-full
              border border-gray-200 dark:border-gray-700/60
              hover:border-emerald-500/40 dark:hover:border-emerald-500/30
              text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400
              transition-all duration-300 ease-out"
          >
            <Mail size={16} className="shrink-0" />
            <span
              className="overflow-hidden whitespace-nowrap text-sm font-medium"
              style={{ maxWidth: 0, transition: 'max-width 300ms ease, opacity 300ms ease', opacity: 0 }}
              ref={el => {
                if (!el) return
                el.closest('a').addEventListener('mouseenter', () => { el.style.maxWidth = '60px'; el.style.opacity = '1' })
                el.closest('a').addEventListener('mouseleave', () => { el.style.maxWidth = '0px'; el.style.opacity = '0' })
              }}
            >
              Email
            </span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>

        </div> {/* end social+scroll group */}

      </div>

    </section>
  )
}

export default Hero