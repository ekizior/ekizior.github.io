'use client'

export function WaveBackground() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.05) 0%, rgba(196, 181, 253, 0.05) 100%)',
      }}
    />
  )
} 