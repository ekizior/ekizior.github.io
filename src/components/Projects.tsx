'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Github, ExternalLink, Code, Shield, GitBranch } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Secure File Sharing System',
    description: 'Designed a secure encryption scheme that allows users to securely store and share files in the presence of attackers who can maliciously modify and read stored data.',
    technologies: ['Go', 'Encryption', 'Security', 'Testing'],
    period: 'Aug 2023 - Dec 2023',
    github: 'https://github.com/ekizior/secure-file-sharing',
    live: null,
    icon: Shield,
    color: 'green'
  },
  {
    id: 2,
    title: 'Pokémon Mystery Dungeon',
    description: 'Developed a dungeon-crawler with a custom application GUI where the player navigates randomly generated 2D worlds while fighting off enemies.',
    technologies: ['Java', 'GUI', 'Game Development', 'OOP'],
    period: 'Jan 2024 - May 2024',
    github: 'https://github.com/ekizior/pokemon-dungeon',
    live: null,
    icon: Code,
    color: 'blue'
  },
  {
    id: 3,
    title: 'Git Version Control Replica',
    description: 'Created a local version control system to track file modifications over time, with support for branching histories and commit management.',
    technologies: ['Java', 'Version Control', 'File Systems', 'Data Structures'],
    period: 'Jan 2024 - May 2024',
    github: 'https://github.com/ekizior/git-replica',
    live: null,
    icon: GitBranch,
    color: 'purple'
  },
  {
    id: 4,
    title: 'Mail Merger Software',
    description: 'Developed custom software to automate the tutor-family placement process and tutor email pipeline, saving 20+ board hours per semester.',
    technologies: ['Software Development', 'Automation', 'Email Systems'],
    period: 'Aug 2023 - Present',
    github: null,
    live: null,
    icon: Code,
    color: 'orange'
  }
]

export function Projects() {
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
    <section id="projects" ref={ref} className="py-20 bg-gray-50/50 backdrop-blur-sm">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        project.color === 'green' ? 'bg-green-100 text-green-600' :
                        project.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        project.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {project.period}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live</span>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 