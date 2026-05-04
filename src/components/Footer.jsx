const navLinks = ["About", "Projects", "Skills", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 px-6 border-t border-neutral-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <p className="text-white font-bold text-lg tracking-tight">
            Prashant<span className="text-violet-400">.</span>
          </p>
          <p className="text-xs mt-1 text-neutral-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-violet-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}