"use client";

export function HeroAnimation() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-paper" />
      <div
        className="absolute inset-0 opacity-[0.48]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,23,21,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(16,23,21,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />

      <style jsx>{`
        .hero-orbit {
          position: absolute;
          border: 1px solid rgba(73, 103, 122, 0.24);
          border-radius: 999px;
        }

        .hero-orbit-one {
          width: min(62vw, 920px);
          height: min(62vw, 920px);
          right: -23vw;
          top: -28vw;
          box-shadow:
            0 0 0 6vw rgba(122, 38, 58, 0.025),
            0 0 0 12vw rgba(73, 103, 122, 0.022);
          animation: orbit-breathe 12s ease-in-out infinite;
        }

        .hero-orbit-two {
          width: 340px;
          height: 340px;
          left: -190px;
          bottom: -150px;
          border-color: rgba(122, 38, 58, 0.16);
          animation: orbit-breathe 15s ease-in-out -4s infinite reverse;
        }

        @keyframes orbit-breathe {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(4deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-orbit {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
