import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]     = useState(false)

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          PK<span className="text-purple-600 dark:text-purple-400">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {link.label}
                {/* Underline animation on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side — theme toggle + mobile menu button */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Resume Button — desktop only */}
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-200"
          >
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
        <ul className="bg-white/95 dark:bg-gray-950/95 backdrop-blur-md px-6 pb-6 pt-2 flex flex-col gap-4 border-b border-gray-200/50 dark:border-gray-800/50">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar