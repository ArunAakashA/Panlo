"use client";

import Image from "next/image";

const logos = [
  "/logos/admiral.png",
  "/logos/beardo.png",
  "/logos/brigade.png",
  "/logos/kula.png",
  "/logos/playo.png",
  "/logos/rapido.png",
  "/logos/reliance.png",
  "/logos/sg.png",
  "/logos/vistrain.png",
];

export default function LogoMarquee() {
  return (
    <section className="relative py-8 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 sm:w-32 md:w-40 bg-gradient-to-r from-bg-primary via-bg-primary/90 to-transparent pointer-events-none z-20" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 sm:w-32 md:w-40 bg-gradient-to-l from-bg-primary via-bg-primary/90 to-transparent pointer-events-none z-20" />

        {/* Scrolling logos */}
        <div className="overflow-hidden">
          <div className="marquee flex items-center gap-10 whitespace-nowrap will-change-transform">
            {logos.concat(logos).map((src, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={src}
                  alt={`logo-${i}`}
                  width={140}
                  height={60}
                  className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300 select-none"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Keyframes for smooth continuous scroll */
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Default speed (desktop) */
        .marquee {
          animation: marquee 25s linear infinite;
        }

        /* Faster on iPad and tablets */
        @media (max-width: 1024px) {
          .marquee {
            animation-duration: 18s;
          }
        }

        /* Even faster on mobile */
        @media (max-width: 768px) {
          .marquee {
            animation-duration: 12s;
          }
        }

      `}</style>
    </section>
  );
}
