import { useEffect, useRef } from 'react'
import useTheme from '../hooks/useTheme'

const ORBS = [
  { x: 0.75, y: 0.18, r: 0.38, color: [52, 211, 153] },   // emerald — top right
  { x: 0.15, y: 0.72, r: 0.32, color: [6, 182, 212] },    // cyan — bottom left
  { x: 0.55, y: 0.55, r: 0.28, color: [20, 184, 166] },   // teal — center
  { x: 0.25, y: 0.22, r: 0.22, color: [52, 211, 153] },   // emerald — top left
  { x: 0.82, y: 0.78, r: 0.25, color: [6, 182, 212] },    // cyan — bottom right
]

// Each orb drifts slowly along a unique Lissajous-style path
const SPEEDS = [
  { ax: 0.00021, ay: 0.00017, px: 0.0,  py: 1.1  },
  { ax: 0.00018, ay: 0.00023, px: 0.8,  py: 0.3  },
  { ax: 0.00014, ay: 0.00019, px: 1.6,  py: 2.0  },
  { ax: 0.00025, ay: 0.00015, px: 2.4,  py: 0.7  },
  { ax: 0.00016, ay: 0.00022, px: 3.2,  py: 1.5  },
]

// Drift amplitude — how far each orb wanders from its anchor (as fraction of canvas size)
const AMPLITUDE = 0.18

const MeshGradient = () => {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()
  const isDarkRef = useRef(isDark)

  useEffect(() => { isDarkRef.current = isDark }, [isDark])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const draw = (t) => {
      const { width: w, height: h } = canvas
      ctx.clearRect(0, 0, w, h)

      const alpha = isDarkRef.current ? 0.18 : 0.10

      ORBS.forEach((orb, i) => {
        const s = SPEEDS[i]
        // Lissajous drift offset
        const dx = Math.sin(t * s.ax + s.px) * AMPLITUDE
        const dy = Math.cos(t * s.ay + s.py) * AMPLITUDE

        const cx = (orb.x + dx) * w
        const cy = (orb.y + dy) * h
        const r  = orb.r * Math.max(w, h)

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        const [R, G, B] = orb.color
        grad.addColorStop(0,   `rgba(${R},${G},${B},${alpha})`)
        grad.addColorStop(0.5, `rgba(${R},${G},${B},${alpha * 0.4})`)
        grad.addColorStop(1,   `rgba(${R},${G},${B},0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}

export default MeshGradient
