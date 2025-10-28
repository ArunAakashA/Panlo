"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DecorStar from "./decor_star";

gsap.registerPlugin(ScrollTrigger);

export default function SectionVideo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Smoother fade + upward motion tied to scroll
    gsap.fromTo(
      section,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%",   // starts earlier for smoother entry
          end: "top 10%",     // finishes slower for softer fade
          scrub: 1.5,         // 1.5 adds inertia-like smoothing
        },
      }
    );

    // Global GSAP smoothing (prevents jitter)
    gsap.ticker.lagSmoothing(1000, 16);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg-primary text-white pt-15 md:pt-20 px-4 lg:px-0 opacity-0 translate-y-20 will-change-transform transition-transform duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto">
        <div className="video-br relative w-full overflow-hidden rounded-2xl p-[6px] bg-gradient-to-r from-primary via-primary to-primary shadow-[0_0_64px_-1px_#0AB5A940]">
          <div className="rounded-xl overflow-hidden bg-primary">
            <video
              className="w-full h-auto object-cover block"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/video-overlay.webp"
            >
              <source src="/videos/dashboard-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Decorative stars */}
      <DecorStar
        position="top-300 right-10"
        size={40}
        delay={0.8}
        glow={false}
        float={false}
      />
      <DecorStar
        position="top-375 left-80"
        size={40}
        delay={1.4}
        glow={false}
        float={false}
      />
    </section>
  );
}
