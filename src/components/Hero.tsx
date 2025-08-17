'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center container-custom relative">
      <motion.div
        className="text-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          <span className="text-white drop-shadow-lg" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
            Erik Kizior
          </span>
        </motion.h1>
        
        <motion.p
          className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-sm"
          variants={itemVariants}
        >
          Software Engineer & Developer
        </motion.p>
        
        <motion.div
          className="flex justify-center space-x-4 mb-12"
          variants={itemVariants}
        >
          <SocialLink href="https://github.com/ekizior" icon={Github} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/erikkizior/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:kiziorerik@gmail.com" icon={Mail} label="Email" />
        </motion.div>
        
        <motion.div
          className="flex justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={scrollToAbout}
            className="btn-primary flex items-center space-x-2 backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

function SocialLink({ href, icon: Icon, label }: {
  href: string
  icon: any
  label: string
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-200 shadow-lg"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label={label}
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.a>
  )
} 