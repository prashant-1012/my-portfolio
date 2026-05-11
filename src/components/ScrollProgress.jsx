import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-none relative"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 6px 1px rgba(52,211,153,0.8), 0 0 20px 2px rgba(52,211,153,0.4), 0 0 40px 4px rgba(6,182,212,0.2)',
        }}
      >
        {progress > 0 && progress < 100 && (
          <span
            className="absolute -right-6 top-1 text-[9px] font-medium font-display tabular-nums leading-none text-emerald-400 select-none"
            style={{ textShadow: '0 0 8px rgba(52,211,153,0.8)' }}
          >
            {Math.round(progress)}%
          </span>
        )}
      </div>
    </div>
  )
}

export default ScrollProgress
