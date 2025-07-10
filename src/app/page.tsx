import { motion } from 'framer-motion'
import { MouseTrail } from '@/components/MouseTrail'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import { WaveBackground } from '@/components/WaveBackground'
import { AnimatedGradient } from '@/components/AnimatedGradient'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <AnimatedGradient />
      <WaveBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Content */}
      <div className="relative z-10">
        <MouseTrail />
        
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>
        
        {/* About Section */}
        <About />
        
        {/* Experience Section */}
        <Experience />
        
        {/* Education Section */}
        <Education />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  )
} 