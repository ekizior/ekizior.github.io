import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { MouseTrail } from '@/components/MouseTrail'
import { WaveBackground } from '@/components/WaveBackground'
import { AnimatedGradient } from '@/components/AnimatedGradient'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <WaveBackground />
        <AnimatedGradient />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Mouse Trail */}
        <MouseTrail />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Content Sections */}
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
} 