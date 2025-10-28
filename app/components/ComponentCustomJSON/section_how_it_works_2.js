"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import DecorStar from "../decor_star";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function SectionHowItWorks_1() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const svg = section.querySelector(".glowline-svg");
    const line = section.querySelector(".theLine");
    const ball = section.querySelector(".glow-ball");
    const outerGlow = section.querySelector(".outer-glow");

    // Initial setup
    gsap.set(line, { drawSVG: "0% 0%" });
    gsap.set(ball, { opacity: 1, scale: 1 });
    gsap.set(outerGlow, { opacity: 1, scale: 1 });

    // Scroll-triggered line + ball animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    });

    // Move both ball and glow along the path
    tl.to([ball, outerGlow], {
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      duration: 2,
      onUpdate: () => {
        const progress = tl.progress() * 100;
        gsap.set(line, { drawSVG: `0% ${progress}%` });
      },
    });

    gsap.fromTo(
      contentRef.current,
      { opacity: 0.02, y: 120, scale: 0.8 }, 
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 150%",   
          end: "top 30%",   
          scrub: 1.6,        
        },
      }
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      glowPulse.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG Glow Line + Ball */}
      <div className="absolute top-0 flex justify-center will-change-transform">
        <svg
          className="glowline-svg w-[200px] h-[150px] lg:h-[250px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
        >
          <defs>
            {/* Soft glow filter for halo */}
            <filter id="circular-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

          </defs>

          {/* Glowing vertical line */}
          <path
            className="theLine"
            d="M 100 0 L 100 150"
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="6px"
            strokeLinecap="round"
          />

          {/* Circular glow ring */}
          <circle
            className="outer-glow"
            r="24"
            cx="100"
            cy="5"
            stroke="url(#outer-glow-gradient)"
            strokeWidth="8"
            fill="#0AB5A933"
            filter="url(#circular-glow)"
          />

          {/* Center glowing ball */}
          <circle className="glow-ball" r="10" cx="100" cy="5" />
        </svg>
      </div>

      {/* Top Fade Gradient */}
      <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      {/* Content Section */}
      <div ref={contentRef} className="origin-center relative z-10 mt-[50px] lg:mt-[240px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">Review & Collaborate</h2>
        <p className="text-gray-300 text-base font-medium">
          Real-time feedback, version histories, team clarity.
        </p>

        <div className="w-full mt-6 rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/images/review&collobarate.webp"
            alt="Review & Collaborate"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Scoped CSS */}
      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 16px var(--color-secondary)) drop-shadow(0 0 36px var(--color-secondary));
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
          will-change: stroke-dashoffset;
        }

        .glow-ball {
          fill: var(--color-black);
          stroke: var(--color-secondary);
          stroke-width: 6px;
          opacity: 1;
          filter: drop-shadow(0 0 25px var(--color-secondary)) drop-shadow(0 0 40px var(--color-secondary));
          transform-origin: center;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Decorative Stars */}
      <DecorStar position="top-0 right-80" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="bottom-130 left-80" size={40} delay={1.4} glow={false} float={false} />
      <DecorStar position="bottom-50 left-20" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
