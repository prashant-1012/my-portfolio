import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Ring trails the dot with spring physics
  const ringX = useSpring(mouseX, { stiffness: 220, damping: 22, mass: 0.4 })
  const ringY = useSpring(mouseY, { stiffness: 220, damping: 22, mass: 0.4 })

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    // Event delegation — check if the hovered element is interactive
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"], label, select, input, textarea')) {
        setHovering(true)
      }
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"], label, select, input, textarea')) {
        setHovering(false)
      }
    }

    const onDown = () => setClicking(true)
    const onUp   = () => setClicking(false)

    window.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseout',   onOut)
    window.addEventListener('mousedown',  onDown)
    window.addEventListener('mouseup',    onUp)

    return () => {
      window.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseout',   onOut)
      window.removeEventListener('mousedown',  onDown)
      window.removeEventListener('mouseup',    onUp)
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-violet-500 pointer-events-none z-[99999]"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale:           clicking ? 0.7  : hovering ? 1.65 : 1,
          backgroundColor: hovering ? 'rgba(139,92,246,0.12)' : 'rgba(0,0,0,0)',
          borderColor:     hovering ? 'rgb(167,139,250)'       : 'rgb(139,92,246)',
          opacity:         clicking ? 0.6  : 1,
        }}
        transition={{ duration: 0.14, ease: 'easeOut' }}
      />

      {/* Center dot — exact mouse position */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-violet-500 pointer-events-none z-[99999]"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          scale:   hovering ? 0   : clicking ? 2.5 : 1,
          opacity: hovering ? 0   : 1,
        }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </>
  )
}

export default CustomCursor
