import { SiReact, SiVite, SiTailwindcss, SiFramer } from 'react-icons/si'

const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

const builtWith = [
  { Icon: SiReact,       label: 'React',         color: '#61dafb' },
  { Icon: SiVite,        label: 'Vite',           color: '#646cff' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS',   color: '#38bdf8' },
  { Icon: SiFramer,      label: 'Framer Motion',  color: '#0055ff' },
]

export default function Footer() {
  return (
    <footer className="relative bg-canvas-950 text-neutral-400 px-6">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Top section — tagline + CTA */}
      <div className="max-w-5xl mx-auto py-16 flex flex-col items-center text-center gap-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-emerald-400">
          Open to opportunities
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Let's build something great.
        </h2>
        <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
          Have a role, project, or idea in mind? Drop me a line and let's talk.
        </p>
        <a
          href="mailto:prashant2009kr@gmail.com"
          className="group inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold text-white hover:text-emerald-400 transition-colors duration-200"
        >
          prashant2009kr@gmail.com
          <span className="text-emerald-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
        </a>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-800/60" />

      {/* Built with */}
      <div className="max-w-5xl mx-auto py-5 flex items-center justify-center gap-1.5 text-xs text-neutral-600">
        <span>Built with</span>
        {builtWith.map(({ Icon, label, color }) => (
          <div key={label} className="relative group/tip mx-1">
            <Icon size={14} style={{ color }} className="opacity-60 hover:opacity-100 transition-opacity duration-150" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-white text-[10px] font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover/tip:opacity-100 -translate-y-1 group-hover/tip:translate-y-0 transition-all duration-150">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom strip — brand + nav + copyright */}
      <div className="max-w-5xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white font-bold text-lg tracking-tight font-display">
          Prashant<span className="text-emerald-400">.</span>
        </p>

        <nav className="flex flex-wrap justify-center gap-5 text-sm">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-emerald-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Prashant Kumar
        </p>
      </div>

    </footer>
  );
}