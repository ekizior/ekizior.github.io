'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I&apos;m a software engineer with a passion for teaching and education technology. 
                Currently interning at Amazon working on AI-powered security tools, while pursuing 
                an MS in Electrical Engineering at Stanford.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey began as a high school valedictorian with a perfect 1580 SAT score, 
                leading me to UC Berkeley where I graduated with a 3.93 GPA in EECS. Along the way, 
                I discovered my love for teaching, leading large-scale educational initiatives and 
                mentoring hundreds of students.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                When I&apos;m not coding or teaching, you&apos;ll find me playing music, hiking, or 
                contributing to my community through organizations like The Music Connection, 
                where I&apos;ve facilitated over 1,250 hours of free music education.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-600">800+</div>
                  <div className="text-sm text-gray-600">Students Taught</div>
                </div>
                <div className="text-center p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-primary-600">3.93</div>
                  <div className="text-sm text-gray-600">UC Berkeley GPA</div>
                </div>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-500 rounded-full opacity-20 blur-xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="/assets/linkedin_headshot.jpg"
                    alt="Erik Kizior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎓
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                💻
              </motion.div>
            </motion.div>
          </div>

          {/* Personal Touch - Dog Photo */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur-lg transform rotate-3" />
                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <img
                    src="/assets/dog.jpg"
                    alt="My dog"
                    className="w-full h-64 object-contain rounded-xl mb-4"
                  />
                  <p className="text-gray-600 italic">
                    &quot;When I&apos;m not coding, you&apos;ll find me with my best friend here! 🐕&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 