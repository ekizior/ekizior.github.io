'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Server } from 'lucide-react'

const skillCategories = [
  {
    id: 1,
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'Go', level: 85 },
      { name: 'C/C++', level: 80 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'MATLAB', level: 75 }
    ],
    color: 'blue'
  },
  {
    id: 2,
    title: 'Web Technologies',
    icon: Globe,
    skills: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Angular', level: 70 }
    ],
    color: 'green'
  },
  {
    id: 3,
    title: 'Database & DevOps',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'Git/GitHub', level: 90 }
    ],
    color: 'purple'
  },
  {
    id: 4,
    title: 'Specialized Skills',
    icon: Server,
    skills: [
      { name: 'AI/ML', level: 85 },
      { name: 'Security', level: 80 },
      { name: 'Teaching', level: 95 },
      { name: 'Leadership', level: 90 },
      { name: 'Project Management', level: 85 }
    ],
    color: 'orange'
  }
]

export function Skills() {
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
              A comprehensive toolkit of technical skills and soft skills developed through education, 
              teaching, and real-world projects.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills Categories */}
            <motion.div variants={itemVariants} className="space-y-8">
              {skillCategories.map((category) => {
                const Icon = category.icon
                return (
                  <div key={category.id} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className={`p-2 rounded-lg ${
                        category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        category.color === 'green' ? 'bg-green-100 text-green-600' :
                        category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">
                              {skill.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${
                                category.color === 'blue' ? 'bg-blue-500' :
                                category.color === 'green' ? 'bg-green-500' :
                                category.color === 'purple' ? 'bg-purple-500' :
                                'bg-orange-500'
                              }`}
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </motion.div>

            {/* Personal Touch & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Personal Touch - Dog Photo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur-lg transform -rotate-2" />
                <div className="relative bg-white rounded-2xl p-6 shadow-xl">
                  <img
                    src="/assets/dog.jpg"
                    alt="My dog"
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <p className="text-gray-600 italic text-center">
                    &quot;Even my coding buddy approves of my skills! 🐕💻&quot;
                  </p>
                </div>
              </div>

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
                  &quot;I believe the best way to master a skill is to teach it. Through my experience 
                  leading large-scale educational initiatives, I&apos;ve developed a deep understanding 
                  of both technical concepts and how to communicate them effectively.&quot;
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 