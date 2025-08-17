'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, GraduationCap, Star } from 'lucide-react'

const education = [
  {
    id: 1,
    degree: 'Master of Science in Electrical Engineering',
    school: 'Stanford University',
    period: 'Sep 2025 - Jun 2027',
    location: 'Stanford, CA',
    status: 'Starting August 2025',
    gpa: null,
    icon: GraduationCap,
    color: 'blue'
  },
  {
    id: 2,
    degree: 'Bachelor of Science in EECS',
    school: 'University of California, Berkeley',
    period: 'Aug 2021 - May 2025',
    location: 'Berkeley, CA',
    status: 'Graduated Cum Laude',
    gpa: '3.93/4.00',
    icon: GraduationCap,
    color: 'green'
  },
  {
    id: 3,
    degree: 'High School Diploma',
    school: 'Clovis North High School',
    period: 'Aug 2018 - May 2021',
    location: 'Clovis, CA',
    status: 'Valedictorian',
    gpa: '4.87',
    icon: GraduationCap,
    color: 'purple'
  }
]

const awards = [
  {
    id: 1,
    title: 'Outstanding Graduate Student Instructor Award',
    issuer: 'UC Berkeley GSI Teaching & Resource Center',
    date: 'Apr 2025',
    description: 'Awarded to top ~10% of graduate instructors campuswide for excellence in teaching and inclusive pedagogy.',
    icon: Award,
    color: 'gold'
  },
  {
    id: 2,
    title: 'National Merit Scholar Finalist',
    issuer: 'National Merit Scholarship Corporation',
    date: 'Apr 2020',
    description: 'Top 1% PSAT/NMSQT score in California with comprehensive academic and leadership evaluation.',
    icon: Star,
    color: 'blue'
  },
  {
    id: 3,
    title: 'Eagle Scout',
    issuer: 'Boy Scouts of America',
    date: 'Jan 2019',
    description: 'Highest rank in Boy Scouts, demonstrating leadership, service, and character development.',
    icon: Award,
    color: 'green'
  },
  {
    id: 4,
    title: 'Boys State Delegate',
    issuer: 'American Legion',
    date: 'Jun 2020',
    description: 'Selected as a delegate to California Boys State, a competitive leadership and citizenship program for high school juniors.',
    icon: Award,
    color: 'purple'
  }
]

export function Education() {
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
    <section id="education" ref={ref} className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Education & Awards
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu) => {
                  const Icon = edu.icon
                  return (
                    <motion.div
                      key={edu.id}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${
                          edu.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          edu.color === 'green' ? 'bg-green-100 text-green-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800">
                            {edu.degree}
                          </h4>
                          <p className="text-primary-600 font-medium">
                            {edu.school}
                          </p>
                          <div className="text-sm text-gray-500 mt-1">
                            <div>{edu.period}</div>
                            <div>{edu.location}</div>
                            {edu.gpa && (
                              <div className="font-medium text-gray-700 mt-1">
                                GPA: {edu.gpa}
                              </div>
                            )}
                          </div>
                          <div className="mt-2">
                            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                Honors & Awards
              </h3>
              <div className="space-y-6">
                {awards.map((award) => {
                  const Icon = award.icon
                  return (
                    <motion.div
                      key={award.id}
                      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      whileHover={{ y: -2 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${
                          award.color === 'gold' ? 'bg-yellow-100 text-yellow-600' :
                          award.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-800">
                            {award.title}
                          </h4>
                          <p className="text-primary-600 font-medium">
                            {award.issuer}
                          </p>
                          <div className="text-sm text-gray-500 mt-1">
                            {award.date}
                          </div>
                          <p className="text-gray-700 mt-2 leading-relaxed">
                            {award.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Additional Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-600">1580</div>
                <div className="text-sm text-gray-600">SAT Score</div>
              </div>
              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-600">96.7%</div>
                <div className="text-sm text-gray-600">Positive Student Feedback</div>
              </div>
              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-600">Top 10%</div>
                <div className="text-sm text-gray-600">UC Berkeley GSIs</div>
              </div>
              <div className="text-center p-6 bg-white/50 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-600">40+</div>
                <div className="text-sm text-gray-600">Team Members Led</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 