'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'

export function Contact() {
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
    <section id="contact" ref={ref} className="py-20 bg-white/50 backdrop-blur-sm">
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
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              I love meeting new people and learning about their journeys. If you&apos;d like to connect, collaborate, or just chat about technology, teaching, or life, I&apos;d be happy to hear from you. Let&apos;s build something meaningful together.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Connect With Me</h3>
                <p className="text-gray-600 leading-relaxed">
                  I&apos;m always open to discussing new opportunities, 
                  collaborations, or interesting projects. Feel free to reach out through any of these channels!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <motion.a
                  href="mailto:kiziorerik@gmail.com"
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 text-lg">Email</div>
                    <div className="text-gray-600">kiziorerik@gmail.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/erikkizior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 text-lg">LinkedIn</div>
                    <div className="text-gray-600">linkedin.com/in/erikkizior</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/ekizior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-gray-100 text-gray-600 rounded-lg">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800 text-lg">GitHub</div>
                    <div className="text-gray-600">github.com/ekizior</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 