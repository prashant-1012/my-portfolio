import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/prashant-1012" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaSquareXTwitter, label: "Twitter", href: "https://twitter.com" },
];

const inputBase =
  "w-full bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-xl px-4 py-3 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:focus:ring-violet-400 transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    setSubmitted(true);
  };

  return (

    <section
      id="contact"
      className="py-28 px-6 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-violet-500 dark:text-violet-400 font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or just want to say hello? My inbox is always
            open. I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">
                  Email
                </p>
                <a
                  href="mailto:hello@yourportfolio.com"
                  className="text-neutral-800 dark:text-neutral-200 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors text-sm"
                >
                  prashant2009kr@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-1">
                  Location
                </p>
                <p className="text-neutral-800 dark:text-neutral-200 font-medium text-sm">
                  Pune, Maharashtra — Open to Remote & On-site Roles
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
                Find me on
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (

                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 dark:hover:border-violet-500 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center text-violet-600 dark:text-violet-400">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs text-violet-500 dark:text-violet-400 underline hover:opacity-80 transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputBase}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-2 uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className={`${inputBase} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-200 active:scale-95"
                >
                  Send Message <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}