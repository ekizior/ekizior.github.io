'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Github, ExternalLink, Code, Shield, GitBranch, Gamepad2, Cpu, Database, Lock, FileText, Brain, Zap, Star, Car, Volume2, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

const featuredProjects = [
  {
    id: 1,
    title: 'Gravitas',
    description: 'An original game developed with Unity. See if you can solve all of the levels!',
    technologies: ['Unity', 'C#', 'Game Development'],
    period: '2024',
    github: null,
    live: 'https://huanger2.itch.io/gravitas',
    icon: Gamepad2,
    color: 'purple',
    featured: true,
    image: '/assets/gravitas.png'
  },
  {
    id: 2,
    title: "Rocky's Mystery Dungeon",
    description: 'A recreation of Pokemon Mystery Dungeon. Navigate randomly generated 2D worlds while fighting enemies.',
    technologies: ['Java', 'Artificial Intelligence', 'Game Development'],
    period: '2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'green',
    featured: true,
    image: '/assets/corgi.png'
  },
  {
    id: 3,
    title: 'Semiconductor Device Microfabrication',
    description: 'Carried out a four-mask process in Berkeley\'s Microfabrication laboratory to fabricate functional semiconductor devices, simple IC circuits, and surface microstructures on a Silicon wafer.',
    technologies: ['MOSFETs', 'MEMS', 'Microfabrication', 'Semiconductor Physics'],
    period: '2024',
    github: null,
    live: null,
    icon: Cpu,
    color: 'blue',
    featured: true,
    image: '/assets/chip.JPG'
  }
]

const projects = [
  {
    id: 4,
    title: 'Secure File Sharing System',
    description: 'Designed a secure encryption scheme that allows users to securely store and share files on the system in the presence of attackers who can maliciously modify and read the contents of stored data.',
    technologies: ['Go', 'Encryption', 'Security', 'Testing'],
    period: 'Aug 2023 - Dec 2023',
    github: null,
    live: null,
    icon: Shield,
    color: 'green'
  },
  {
    id: 5,
    title: 'Gitlet',
    description: 'Developed a Git-like local version control system. Supports essential Git features such as branching and merging.',
    technologies: ['Java', 'Git', 'Version Control', 'File Systems'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: GitBranch,
    color: 'purple'
  },
  {
    id: 6,
    title: '2048',
    description: 'Recreated the sliding-tile game 2048!',
    technologies: ['Java', 'Game Development', 'GUI'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'blue'
  },
  {
    id: 7,
    title: 'Pacman',
    description: 'Implemented Pacman using various Artificial Intelligence/Machine Learning techniques such as minimax, expectimax, value iteration, Q-learning, and a neural network to simulate player decision-making.',
    technologies: ['Python', 'Artificial Intelligence', 'Machine Learning', 'Game AI'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'yellow'
  },
  {
    id: 8,
    title: 'Scheme Interpreter',
    description: 'Developed an interpreter for a subset of the Scheme language.',
    technologies: ['Python', 'Scheme', 'Compilers', 'Functional Programming'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Code,
    color: 'indigo'
  },
  {
    id: 9,
    title: 'Wordnet',
    description: 'A browser-based tool for exploring the history of word usage in English texts. Inspired by the Google NGram Viewer.',
    technologies: ['Java', 'NLP', 'Web Development', 'Data Visualization'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Brain,
    color: 'pink'
  },
  {
    id: 10,
    title: 'CPU',
    description: 'Simulated a functional CPU that supports the RISC-V instruction set.',
    technologies: ['Logism', 'RISC-V', 'Computer Architecture', 'Digital Design'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Cpu,
    color: 'red'
  },
  {
    id: 11,
    title: 'Voice-Controlled Car',
    description: 'Converts analog input to digital, then uses PCA and k-means clustering to classify speech patterns and control the car.',
    technologies: ['Arduino', 'Jupyter', 'Machine Learning', 'Signal Processing'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Car,
    color: 'orange'
  },
  {
    id: 12,
    title: 'FPGA RISC-V Processor',
    description: 'Designed a three-stage RISC-V processor system using FPGA design tools.',
    technologies: ['Verilog', 'FPGA', 'RISC-V', 'Digital Design'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Zap,
    color: 'cyan'
  },
  {
    id: 13,
    title: 'Resistive Touch Sensor',
    description: 'Used a MOSFET and an LED Diode in a resistive network to create a sensor that emits light upon touch.',
    technologies: ['LTSpice', 'MOSFET', 'Hardware Design', 'Sensors'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Zap,
    color: 'amber'
  },
  {
    id: 14,
    title: 'Ants',
    description: 'Recreated Plants vs. Zombies.',
    technologies: ['Python', 'Game Development', 'AI'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'lime'
  },
  {
    id: 15,
    title: 'Ataxx',
    description: 'Recreated the board game Ataxx. Used artificial intelligence techniques such as minimax to simulate player decisions.',
    technologies: ['Java', 'Artificial Intelligence', 'Board Games', 'Minimax'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'emerald'
  },
  {
    id: 16,
    title: 'Cats',
    description: 'Developed a simple program that measures typing speed and corrects the spelling of a user as they type.',
    technologies: ['Python', 'NLP', 'User Interface', 'Text Processing'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: FileText,
    color: 'rose'
  },
  {
    id: 17,
    title: 'Deque',
    description: 'Implemented the Deque abstract data type in two ways, once using a Linked List and once using resizing Array.',
    technologies: ['Java', 'Data Structures', 'Algorithms', 'Linked Lists'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Database,
    color: 'violet'
  },
  {
    id: 18,
    title: 'Enigma',
    description: 'Developed a program to simulate the Enigma machine cipher device from WWII.',
    technologies: ['Java', 'Cryptography', 'Historical Computing', 'Algorithms'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Lock,
    color: 'slate'
  },
  {
    id: 19,
    title: 'Snek',
    description: 'Recreated the popular computer game Snake.',
    technologies: ['C', 'Game Development', 'Console Applications'],
    period: 'Jan 2024 - May 2024',
    github: null,
    live: null,
    icon: Gamepad2,
    color: 'teal'
  },
  {
    id: 20,
    title: 'Mail Merger Software',
    description: 'Developed custom software to automate the tutor-family placement process and tutor email pipeline, saving 20+ board hours per semester.',
    technologies: ['Software Development', 'Automation', 'Email Systems'],
    period: 'Aug 2023 - Present',
    github: 'https://github.com/TMC-Berkeley/mail-merger',
    live: null,
    icon: FileText,
    color: 'indigo'
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAllProjects, setShowAllProjects] = useState(false)

  const handleShowMore = () => {
    setShowAllProjects(!showAllProjects)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const expandVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    }
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
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                Featured Projects
              </h3>
              <p className="text-gray-600">These are the ones I had the most fun working on!</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {featuredProjects.map((project) => {
                const Icon = project.icon
                return (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-200"
                    whileHover={{ y: -5 }}
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="mb-4 relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain bg-gray-50"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          project.color === 'green' ? 'bg-green-100 text-green-600' :
                          project.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          project.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                          project.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                          project.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                          project.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                          project.color === 'red' ? 'bg-red-100 text-red-600' :
                          project.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                          project.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                          project.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                          project.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                          project.color === 'slate' ? 'bg-slate-100 text-slate-600' :
                          project.color === 'lime' ? 'bg-lime-100 text-lime-600' :
                          project.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                          project.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                          project.color === 'violet' ? 'bg-violet-100 text-violet-600' :
                          'bg-gray-100 text-gray-600'
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
                          <span className="text-sm font-medium">Play</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Show More Button */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.button
              onClick={handleShowMore}
              className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{showAllProjects ? 'Hide All Projects' : `Show ${projects.length} More Projects`}</span>
              {showAllProjects ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </motion.button>
          </motion.div>

          {/* All Other Projects - Hidden by Default */}
          <AnimatePresence>
            {showAllProjects && (
              <motion.div
                variants={expandVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden"
              >
                <div className="text-center mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">All Projects</h3>
                  <p className="text-gray-600">A comprehensive collection of my technical work</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {projects.map((project, index) => {
                    const Icon = project.icon
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-lg ${
                              project.color === 'green' ? 'bg-green-100 text-green-600' :
                              project.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                              project.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                              project.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                              project.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                              project.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                              project.color === 'red' ? 'bg-red-100 text-red-600' :
                              project.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                              project.color === 'teal' ? 'bg-teal-100 text-teal-600' :
                              project.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                              project.color === 'cyan' ? 'bg-cyan-100 text-cyan-600' :
                              project.color === 'slate' ? 'bg-slate-100 text-slate-600' :
                              project.color === 'lime' ? 'bg-lime-100 text-lime-600' :
                              project.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' :
                              project.color === 'rose' ? 'bg-rose-100 text-rose-600' :
                              project.color === 'violet' ? 'bg-violet-100 text-violet-600' :
                              'bg-gray-100 text-gray-600'
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
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
} 