"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import DecorStar from "./decor_star";

export default function SectionVideo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1.2,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="origin-center bg-bg-primary text-white pt-7 md:pt-10 pb-10 md:pb-15 px-4 lg:px-0 opacity-0 translate-y-20 will-change-transform"
    >
      <div className="max-w-7xl mx-auto">
        <div className="video-br relative w-full overflow-hidden rounded-2xl p-[6px] bg-gradient-to-r from-primary via-primary to-primary shadow-[0_0_64px_-1px_#0AB5A940]">
          <div className="rounded-2xl overflow-hidden bg-primary">
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

      <DecorStar
        position="top-120 right-20"
        size={40}
        delay={0.8}
        glow={false}
        float={false}
      />
      <DecorStar
        position="top-195 left-80"
        size={40}
        delay={1.4}
        glow={false}
        float={false}
      />
    </section>
  );
}
