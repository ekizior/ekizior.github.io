'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Users, Code } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'Software Development Engineer Intern',
    company: 'Amazon',
    period: 'Jun 2025 - Present',
    location: 'Boston, MA',
    description: 'Building and deploying software solutions as part of the CPSS ProdSec team, with a focus on security and reliability. Collaborating with a diverse team of engineers and learning from their expertise every day.',
    skills: ['AI/ML', 'Security', 'Python', 'Microservices'],
    icon: Code,
    type: 'professional'
  },
  {
    id: 2,
    title: 'Head Undergraduate Student Instructor & Instructor',
    company: 'UC Berkeley, CS61B',
    period: 'Aug 2024 - Jun 2025',
    location: 'Berkeley, CA',
    description: 'Led a teaching team for CS61B (Data Structures), supporting over 800 students and mentoring junior staff. Developed curriculum, internal tools, and resources to help students succeed.',
    skills: ['Teaching', 'Leadership', 'Java', 'Project Management'],
    icon: Users,
    type: 'teaching'
  },
  {
    id: 3,
    title: 'Tutor Enrichment Director',
    company: 'The Music Connection',
    period: 'Aug 2023 - Present',
    location: 'Berkeley, CA',
    description: 'Helped facilitate over 1,250 hours of free music education for K-12 students in partnership with local school districts. Designed and led workshops for tutors, focusing on pedagogy and music theory.',
    skills: ['Software Development', 'Leadership', 'Community Service'],
    icon: Users,
    type: 'leadership'
  },
  {
    id: 4,
    title: 'Research Assistant',
    company: 'UC Berkeley, Chunlei Lab',
    period: 'Jul 2024 - Present',
    location: 'Berkeley, CA',
    description: 'Working on MRI reconstruction research, applying deep learning to improve medical imaging. Collaborating with faculty and students to explore new ideas and approaches.',
    skills: ['Research', 'AI/ML', 'MATLAB', 'Medical Imaging'],
    icon: GraduationCap,
    type: 'research'
  }
]

export function Experience() {
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
    <section id="experience" ref={ref} className="py-20 bg-gray-50/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500" />

            <div className="space-y-12">
              {experiences.map((experience, index) => {
                const Icon = experience.icon
                return (
                  <motion.div
                    key={experience.id}
                    variants={itemVariants}
                    className="relative flex items-start"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-white border-4 border-primary-500 rounded-full shadow-lg z-10" />

                    {/* Content Card */}
                    <motion.div
                      className="ml-16 flex-1 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            experience.type === 'professional' ? 'bg-blue-100 text-blue-600' :
                            experience.type === 'teaching' ? 'bg-green-100 text-green-600' :
                            experience.type === 'leadership' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">
                              {experience.title}
                            </h3>
                            <p className="text-primary-600 font-medium">
                              {experience.company}
                            </p>
                          </div>
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <div>{experience.period}</div>
                          <div>{experience.location}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 