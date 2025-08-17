import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { WaveBackground } from '@/components/WaveBackground'
import { AnimatedGradient } from '@/components/AnimatedGradient'
import { PerformanceMonitor } from '@/components/PerformanceMonitor'
import { Suspense, lazy } from 'react'

// Lazy load heavy components for better performance
const LazyWaveBackground = lazy(() => import('@/components/WaveBackground').then(module => ({ default: module.WaveBackground })))
const LazyAnimatedGradient = lazy(() => import('@/components/AnimatedGradient').then(module => ({ default: module.AnimatedGradient })))

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Background Effects - Lazy loaded */}
      <Suspense fallback={null}>
        <div className="fixed inset-0 z-0">
          <LazyWaveBackground />
          <LazyAnimatedGradient />
        </div>
      </Suspense>
      
      {/* Content */}
      <div className="relative z-10">
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

      {/* Performance Monitor - Development Only */}
      <PerformanceMonitor />
    </main>
  )
} 