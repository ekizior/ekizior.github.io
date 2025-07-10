'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function MouseTrail() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isSmallScreen = window.innerWidth < 768
      setIsMobile(isTouchDevice || isSmallScreen)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Only add mouse event listeners if not on mobile
    if (!isMobile) {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
        setIsVisible(true)
      }

      const handleMouseLeave = () => {
        setIsVisible(false)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('mouseleave', handleMouseLeave)
        window.removeEventListener('resize', checkMobile)
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  // Don't render anything on mobile devices
  if (isMobile) {
    return null
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
    >
      <div className="w-3 h-3 bg-white rounded-full shadow-lg border-2 border-primary-500 backdrop-blur-sm" />
      <motion.div
        className="absolute inset-0 w-3 h-3 bg-primary-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0.4, 0.8],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
} 