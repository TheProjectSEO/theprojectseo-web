'use client'

/**
 * Hero Animation Component
 *
 * Beautiful animated background for the hero section featuring:
 * - Floating gradient orbs in brand colors
 * - Smooth, continuous animations
 * - Subtle particle effects
 * - Optimized for performance
 */

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-paper to-accent/5" />

      {/* Large Orb - Terracotta */}
      <div
        className="absolute -top-24 -right-24 size-[500px] rounded-full blur-3xl animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(209, 104, 71, 0.25) 0%, rgba(209, 104, 71, 0.15) 40%, rgba(209, 104, 71, 0.05) 70%, transparent 100%)',
          animationDelay: '0s',
          animationDuration: '20s',
        }}
      />

      {/* Medium Orb - Accent Soft */}
      <div
        className="absolute top-1/3 -left-32 size-[400px] rounded-full blur-3xl animate-float-reverse"
        style={{
          background: 'radial-gradient(circle, rgba(196, 90, 60, 0.2) 0%, rgba(196, 90, 60, 0.12) 40%, rgba(196, 90, 60, 0.05) 70%, transparent 100%)',
          animationDelay: '2s',
          animationDuration: '25s',
        }}
      />

      {/* Small Orb - Accent */}
      <div
        className="absolute bottom-1/4 right-1/4 size-80 rounded-full blur-3xl animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(209, 104, 71, 0.3) 0%, rgba(209, 104, 71, 0.15) 40%, rgba(209, 104, 71, 0.05) 70%, transparent 100%)',
          animationDelay: '4s',
          animationDuration: '18s',
        }}
      />

      {/* Rising Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute size-1 rounded-full bg-accent/30 animate-rise"
            style={{
              left: `${(i * 5) % 100}%`,
              bottom: '-10%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${12 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Accent Dots Pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => {
          // Use index-based deterministic values to avoid hydration mismatch
          const seed = (i * 2654435761) % 2147483648 // Simple hash function
          const left = (seed % 10000) / 100
          const top = ((seed * 7919) % 10000) / 100
          const delay = ((seed * 3571) % 3000) / 1000
          const duration = 3 + ((seed * 2459) % 2000) / 1000

          return (
            <div
              key={`dot-${i}`}
              className="absolute size-1 rounded-full bg-accent/20 animate-pulse"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          )
        })}
      </div>

      {/* Grid Pattern Overlay (subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(209, 104, 71, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(209, 104, 71, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Lines (representing data flow) */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D16847" stopOpacity="0" />
            <stop offset="50%" stopColor="#D16847" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D16847" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Animated Line 1 */}
        <path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-draw-line"
        />

        {/* Animated Line 2 */}
        <path
          d="M0,200 Q250,250 500,200 T1000,200"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          className="animate-draw-line"
          style={{ animationDelay: '1s' }}
        />

        {/* Animated Line 3 */}
        <path
          d="M0,300 Q300,250 600,300 T1200,300"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-draw-line"
          style={{ animationDelay: '2s' }}
        />
      </svg>

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(250, 250, 249, 0.4) 100%)',
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          66% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }

        @keyframes draw-line {
          0% {
            stroke-dasharray: 0 1000;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            stroke-dasharray: 1000 1000;
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 1000 1000;
            opacity: 0;
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-float-reverse {
          animation: float-reverse linear infinite;
        }

        .animate-rise {
          animation: rise linear infinite;
        }

        .animate-draw-line {
          animation: draw-line 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
