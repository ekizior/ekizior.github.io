import { motion } from 'framer-motion'
import { MouseTrail } from '@/components/MouseTrail'
import { Hero } from '@/components/Hero'
import { WaveBackground } from '@/components/WaveBackground'
import { AnimatedGradient } from '@/components/AnimatedGradient'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <AnimatedGradient />
      <WaveBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <MouseTrail />
        <Hero />
      </div>
    </main>
  )
} 