'use client'

import { useEffect, useState } from 'react'

export function PerformanceMonitor() {
  const [fps, setFps] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development mode
    if (process.env.NODE_ENV !== 'development') return

    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    // Start FPS monitoring
    animationId = requestAnimationFrame(measureFPS)

    // Show monitor after 2 seconds
    const timer = setTimeout(() => setIsVisible(true), 2000)

    return () => {
      cancelAnimationFrame(animationId)
      clearTimeout(timer)
    }
  }, [])

  if (!isVisible || process.env.NODE_ENV !== 'development') return null

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-3 rounded-lg text-sm font-mono z-50">
      <div className="flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${fps >= 55 ? 'bg-green-400' : fps >= 30 ? 'bg-yellow-400' : 'bg-red-400'}`} />
        <span>FPS: {fps}</span>
      </div>
      <div className="text-xs text-gray-300 mt-1">
        {fps >= 55 ? 'Excellent' : fps >= 30 ? 'Good' : 'Poor'} performance
      </div>
    </div>
  )
}
