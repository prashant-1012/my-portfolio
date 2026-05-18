import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, Check, Loader2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const EJS_SERVICE  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EJS_KEY      = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socialLinks = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/prashant-1012" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: FaSquareXTwitter, label: "Twitter", href: "https://twitter.com" },
];

/* Floating label input */
const FloatField = ({ label, name, type = "text", value, onChange, required, textarea, rows }) => {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0
  const sharedClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/40 transition-all duration-200 resize-none"

  return (
    <div className="relative">
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 ${
          lifted
            ? 'top-2 text-[10px] font-semibold tracking-widest uppercase text-emerald-400'
            : 'top-1/2 -translate-y-1/2 text-sm text-neutral-500'
        }`}
        style={textarea && !lifted ? { top: '1rem', transform: 'none' } : {}}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={rows}
          required={required}
          className={sharedClass}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          required={required}
          className={sharedClass}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs.send(
      EJS_SERVICE,
      EJS_TEMPLATE,
      { name: form.name, email: form.email, message: form.message, title: 'Portfolio Enquiry', time: new Date().toLocaleString() },
      EJS_KEY
    )
    .then(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setForm({ name: "", email: "", message: "" });
      }, 3000);
    })
    .catch(() => {
      setStatus("idle");
    });
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Radial glow — sits behind the form */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 70% 60%, rgba(52,211,153,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 30% at 30% 40%, rgba(6,182,212,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind or just want to say hello? My inbox is always
            open. I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Contact cards */}
          <div className="space-y-3">
            {/* Email */}
            <a
              href="mailto:prashant2009kr@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">Email</p>
                <p className="text-sm font-medium text-neutral-200 truncate">prashant2009kr@gmail.com</p>
              </div>
              <ArrowUpRight size={15} className="text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">Location</p>
                <p className="text-sm font-medium text-neutral-200">Pune, Maharashtra</p>
                <p className="text-xs text-neutral-500 mt-0.5">Open to Remote & On-site</p>
              </div>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/prashant-1012"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 shrink-0">
                <FaGithub size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">GitHub</p>
                <p className="text-sm font-medium text-neutral-200">prashant-1012</p>
              </div>
              <ArrowUpRight size={15} className="text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.07] hover:border-emerald-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <FaLinkedin size={18} />
              </div>
              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-neutral-200">Prashant Kumar</p>
              </div>
              <ArrowUpRight size={15} className="text-neutral-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          </div>

          {/* Right — Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <FloatField label="Name" name="name" value={form.name} onChange={handleChange} required />
              <FloatField label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
              <FloatField label="Message" name="message" value={form.message} onChange={handleChange} required textarea rows={5} />

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full flex items-center justify-center gap-2 text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-300 active:scale-95 disabled:cursor-not-allowed
                  ${status === "success"
                    ? "bg-emerald-500/20 border border-emerald-500/40 text-emerald-400"
                    : "bg-emerald-500 hover:bg-emerald-400 text-white"
                  }`}
              >
                {status === "idle" && <><Send size={15} /> Send Message</>}
                {status === "loading" && <><Loader2 size={15} className="animate-spin" /> Sending…</>}
                {status === "success" && (
                  <>
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 animate-[scale-in_0.3s_ease-out]">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </span>
                    Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}