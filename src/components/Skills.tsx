'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code, Globe, Database, Server, BookOpen, Users, Zap, Shield, ChevronLeft, ChevronRight } from 'lucide-react'

const skillCards = [
  {
    id: 1,
    title: 'Teaching & Leadership',
    icon: Users,
    description: 'Led 40+ member teaching team for 800+ students. 96.7% positive feedback.',
    experience: '3+ years',
    color: 'blue',
    details: ['Head TA for CS61B', 'Outstanding GSI Award', 'Curriculum Development']
  },
  {
    id: 2,
    title: 'Software Engineering',
    icon: Code,
    description: 'Full-stack development with focus on scalable, secure applications.',
    experience: '4+ years',
    color: 'green',
    details: ['Java, Python, Go', 'React, Node.js', 'Microservices Architecture']
  },
  {
    id: 3,
    title: 'Security & AI',
    icon: Shield,
    description: 'Experience with modern security practices and AI technologies',
    experience: '2+ years',
    color: 'purple',
    details: ['Application Security', 'AI Integration']
  },
  {
    id: 4,
    title: 'Project Management',
    icon: Zap,
    description: 'Led cross-functional teams and delivered complex technical projects.',
    experience: '3+ years',
    color: 'orange',
    details: ['Agile Development', 'Team Leadership', 'Technical Planning']
  },
  {
    id: 5,
    title: 'Research & Innovation',
    icon: BookOpen,
    description: 'MRI reconstruction research and academic contributions.',
    experience: '1+ year',
    color: 'indigo',
    details: ['U-Net Models', 'Medical Imaging', 'Research Publications']
  },
  {
    id: 6,
    title: 'Web Technologies',
    icon: Globe,
    description: 'Modern web development with focus on user experience.',
    experience: '3+ years',
    color: 'teal',
    details: ['React/Next.js', 'TypeScript', 'Responsive Design']
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCard, setActiveCard] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextCard = () => {
    setDirection(1)
    setActiveCard((prev) => (prev + 1) % skillCards.length)
  }

  const prevCard = () => {
    setDirection(-1)
    setActiveCard((prev) => (prev - 1 + skillCards.length) % skillCards.length)
  }

  const goToCard = (index: number) => {
    setDirection(index > activeCard ? 1 : -1)
    setActiveCard(index)
  }

  // Simplified animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  }

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    }),
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              I believe in learning through doing and teaching. My expertise comes from real projects, 
              meaningful collaborations, and the privilege of helping others grow.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Animated Skill Cards */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-96 flex items-center justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeCard}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute w-full max-w-sm"
                    style={{
                      willChange: 'transform, opacity',
                    }}
                  >
                    {(() => {
                      const card = skillCards[activeCard]
                      const Icon = card.icon
                      
                      return (
                        <div className={`bg-white rounded-2xl p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-200 ${
                          card.color === 'blue' ? 'border-blue-200' :
                          card.color === 'green' ? 'border-green-200' :
                          card.color === 'purple' ? 'border-purple-200' :
                          card.color === 'orange' ? 'border-orange-200' :
                          card.color === 'indigo' ? 'border-indigo-200' :
                          'border-teal-200'
                        }`}>
                          <div className="flex items-center space-x-4 mb-6">
                            <div className={`p-3 rounded-xl ${
                              card.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                              card.color === 'green' ? 'bg-green-100 text-green-600' :
                              card.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                              card.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                              card.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                              'bg-teal-100 text-teal-600'
                            }`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                              <p className="text-sm text-gray-500">{card.experience}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {card.description}
                          </p>
                          
                          <div className="space-y-2">
                            {card.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  card.color === 'blue' ? 'bg-blue-500' :
                                  card.color === 'green' ? 'bg-green-500' :
                                  card.color === 'purple' ? 'bg-purple-500' :
                                  card.color === 'orange' ? 'bg-orange-500' :
                                  card.color === 'indigo' ? 'bg-indigo-500' :
                                  'bg-teal-500'
                                }`} />
                                <span className="text-sm text-gray-600">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <motion.button
                  onClick={prevCard}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </motion.button>
                
                {/* Card Counter */}
                <div className="text-sm text-gray-600 font-medium">
                  {activeCard + 1} of {skillCards.length}
                </div>
                
                <motion.button
                  onClick={nextCard}
                  className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center space-x-2 mt-4">
                {skillCards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === activeCard 
                        ? 'bg-primary-500 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Key Achievements */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700">96.7% positive student feedback</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700">Led 40+ member teaching team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700">Outstanding GSI Award (Top 10%)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-gray-700">3.93 GPA at UC Berkeley</span>
                  </div>
                </div>
              </div>

              {/* Learning Philosophy */}
              <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Learning Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  I believe that teaching is one of the best ways to learn. I&apos;ve grown the most when helping others succeed, and I strive to create environments where curiosity and kindness are valued. Every project and every classroom has taught me something new, and I&apos;m grateful for the chance to keep learning with others.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 