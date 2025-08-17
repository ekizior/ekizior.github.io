'use client'

export function AnimatedGradient() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Minimal static gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)',
        }}
      />
      
      <div 
        className="absolute inset-0 opacity-8"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.08) 0%, transparent 50%)',
        }}
      />
    </div>
  )
} 