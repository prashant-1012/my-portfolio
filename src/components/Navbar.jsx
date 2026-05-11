import { useState, useEffect, useRef, useCallback } from 'react'
import { Moon, Sun, Menu, X, Download } from 'lucide-react'
import useTheme from '../hooks/useTheme'
import resumePdf from '../assets/Prashant_Kumar_Resume.pdf'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Sliding underline
  const linkRefs = useRef({})
  const [underline, setUnderline] = useState({ left: 0, width: 0, opacity: 0 })

  const moveUnderlineTo = useCallback((id) => {
    const el = linkRefs.current[id]
    if (!el) return
    const { offsetLeft, offsetWidth } = el
    setUnderline({ left: offsetLeft, width: offsetWidth, opacity: 1 })
  }, [])

  const resetUnderlineToActive = useCallback(() => {
    if (activeSection) moveUnderlineTo(activeSection)
    else setUnderline(u => ({ ...u, opacity: 0 }))
  }, [activeSection, moveUnderlineTo])

  // Keep underline on active section when nothing is hovered
  useEffect(() => { resetUnderlineToActive() }, [resetUnderlineToActive])

  // Add glass effect after scrolling 20px
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.slice(1))
    const observers = []

    // Use a map to track latest intersection ratio per section
    const ratios = {}

    const pickActive = () => {
      // If near the bottom of the page, force last section active
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10
      if (atBottom) { setActiveSection(sectionIds[sectionIds.length - 1]); return }
      const top = Object.entries(ratios).sort((a, b) => b[1] - a[1])[0]
      if (top && top[1] > 0) setActiveSection(top[0])
    }

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { ratios[id] = entry.intersectionRatio; pickActive() },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      )
      obs.observe(el)
      observers.push(obs)
    })

    window.addEventListener('scroll', pickActive, { passive: true })
    return () => {
      observers.forEach(o => o.disconnect())
      window.removeEventListener('scroll', pickActive)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/80 dark:bg-canvas-950/90 backdrop-blur-md shadow-sm border-b border-white/5 dark:border-white/5'
          : 'bg-transparent'
        }`}
    >
      {/* Top highlight line — hardware glass effect */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-white/10 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />

      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-0.5 select-none"
          aria-label="Prashant Kumar — home"
        >
          <span className="font-display text-2xl font-bold tracking-tighter text-gray-900 dark:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.7)]">
            PK
          </span>
          <span className="font-display text-2xl font-bold text-emerald-500 dark:text-emerald-400 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]">
            .
          </span>
        </a>

        {/* Desktop Links */}
        <div
          className="hidden md:flex items-center gap-8 relative"
          onMouseLeave={resetUnderlineToActive}
        >
          {navLinks.map(link => {
            const id = link.href.slice(1)
            const isActive = activeSection === id
            return (
              <a
                key={link.label}
                href={link.href}
                ref={el => { linkRefs.current[id] = el }}
                onMouseEnter={() => moveUnderlineTo(id)}
                className={`text-sm font-medium transition-colors duration-150
                  ${isActive
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {link.label}
              </a>
            )
          })}

          {/* Sliding underline indicator */}
          <span
            className="absolute -bottom-1 h-0.5 bg-emerald-500 dark:bg-emerald-400 rounded-full pointer-events-none"
            style={{
              left:    underline.left,
              width:   underline.width,
              opacity: underline.opacity,
              transition: 'left 200ms ease, width 200ms ease, opacity 150ms ease',
            }}
          />
        </div>

        {/* Right side — theme toggle + mobile menu button */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative inline-flex items-center w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700/50 border border-transparent dark:border-gray-700 transition-colors duration-300 focus:outline-none"
          >
            <span className="sr-only">Toggle theme</span>
            
            {/* Sun Icon (Light Mode) */}
            <span className="absolute left-1.5 flex items-center justify-center text-amber-500 pointer-events-none">
              <Sun size={14} />
            </span>
            
            {/* Moon Icon (Dark Mode) */}
            <span className="absolute right-1.5 flex items-center justify-center text-indigo-400 pointer-events-none">
              <Moon size={14} />
            </span>
            
            {/* Sliding Thumb */}
            <span
              className={`relative z-10 block h-5 w-5 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-800 transform transition-transform duration-300 ease-in-out ${
                isDark ? 'translate-x-8' : 'translate-x-1'
              }`}
            />
          </button>

          {/* Resume Button — desktop only */}
          <a
            href={resumePdf}
            download="Prashant_Kumar_Resume.pdf"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
              relative overflow-hidden
              border border-emerald-500/60 dark:border-emerald-400/50
              text-emerald-600 dark:text-emerald-400
              hover:border-emerald-400 dark:hover:border-emerald-300
              hover:text-emerald-500 dark:hover:text-emerald-300
              transition-colors duration-200
              group"
          >
            {/* shimmer sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent group-hover:[animation:shimmer_600ms_ease_forwards]"
            />
            <Download size={16} />
            Resume
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="bg-white/95 dark:bg-canvas-950/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-b border-gray-200/50 dark:border-gray-800/50">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors py-1
                    ${isActive
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href={resumePdf}
              download="Prashant_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                relative overflow-hidden
                border border-emerald-500/60 dark:border-emerald-400/50
                text-emerald-600 dark:text-emerald-400
                transition-colors duration-200
                group"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent group-hover:[animation:shimmer_600ms_ease_forwards]" />
              <Download size={16} />
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar