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
        className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 transition-none"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
