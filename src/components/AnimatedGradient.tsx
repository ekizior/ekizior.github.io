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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  )
} 