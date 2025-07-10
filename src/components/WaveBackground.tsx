'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    let animationId: number
    const animate = () => {
      setTime(prev => prev + 0.005)
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Create smooth oscillating gradient background with blue and purple
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      
      // Smooth oscillation between blue and purple
      const phase = Math.sin(time * 0.3) * 0.5 + 0.5 // Slower, smoother oscillation
      
      // Interpolate between blue and purple
      const blueHue = 210 + (phase * 60) // 210 (blue) to 270 (purple)
      const purpleHue = 270 - (phase * 60) // 270 (purple) to 210 (blue)
      
      gradient.addColorStop(0, `hsla(${blueHue}, 70%, 95%, 0.3)`)
      gradient.addColorStop(0.5, `hsla(${purpleHue}, 70%, 90%, 0.2)`)
      gradient.addColorStop(1, `hsla(${blueHue}, 70%, 95%, 0.3)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [time])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
} 