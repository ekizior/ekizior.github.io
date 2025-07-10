'use client'

import { motion } from 'framer-motion'

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary animated gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Secondary animated gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 80% 80%, rgba(255, 219, 120, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(120, 255, 198, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 60%, rgba(255, 120, 198, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(255, 219, 120, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const size = i < 5 ? 'w-1 h-1' : i < 10 ? 'w-2 h-2' : 'w-3 h-3'
          const opacity = i < 5 ? 'opacity-10' : i < 10 ? 'opacity-15' : 'opacity-20'
          const color = i % 3 === 0 ? 'bg-primary-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-blue-400'
          
          return (
            <motion.div
              key={i}
              className={`absolute ${size} ${color} rounded-full ${opacity}`}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * -200 + 100, 0],
                scale: [1, 1.2 + Math.random() * 0.8, 1],
              }}
              transition={{
                duration: 15 + Math.random() * 20,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
              style={{
                left: `${10 + (i * 6) % 80}%`,
                top: `${20 + (i * 7) % 60}%`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
} 