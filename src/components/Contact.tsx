'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

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
              I&apos;m always interested in new opportunities, collaborations, or just a friendly chat about technology and education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Me</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  I&apos;m currently based in the Bay Area and always open to discussing new opportunities, 
                  collaborations, or interesting projects. Feel free to reach out!
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <motion.a
                  href="mailto:erik@example.com"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-sm text-gray-600">erik@example.com</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ekizior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">LinkedIn</div>
                    <div className="text-sm text-gray-600">linkedin.com/in/ekizior</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/ekizior"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-gray-100 text-gray-600 rounded-lg">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">GitHub</div>
                    <div className="text-sm text-gray-600">github.com/ekizior</div>
                  </div>
                </motion.a>
              </div>

              {/* Location */}
              <div className="p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-lg">
                <h4 className="font-bold text-gray-800 mb-2">Location</h4>
                <p className="text-gray-600">Bay Area, California</p>
                <p className="text-sm text-gray-500 mt-1">Available for remote opportunities</p>
              </div>

              {/* Personal Touch - Dog Photo */}
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl opacity-20 blur-lg transform rotate-2" />
                <div className="relative bg-white rounded-xl p-4 shadow-lg">
                  <img
                    src="/assets/dog.jpg"
                    alt="My dog"
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                  <p className="text-sm text-gray-600 text-center">
                    &quot;My coding buddy says hi! 🐕✨&quot;
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 