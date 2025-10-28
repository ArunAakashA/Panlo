"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import DecorStar from "../decor_star";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function SectionHowItWorks_3() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const svg = section.querySelector(".glowline-svg");
      const line = section.querySelector(".theLine");
      const ball = section.querySelector(".glow-ball");
      const outerGlow = section.querySelector(".outer-glow");

      // Initial setup (no flicker)
      gsap.set(line, { drawSVG: "0% 0%" });
      gsap.set([ball, outerGlow], { opacity: 1, scale: 1 });

      // Scroll animation (smooth scrub)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      });

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

      // Smooth scroll improvements
      gsap.ticker.lagSmoothing(1000, 16);
      ScrollTrigger.normalizeScroll(true);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20"
    >
      {/* SVG Line + Glowing Ball + Outer Halo */}
      <div className="absolute top-0 flex justify-center will-change-transform">
        <svg
          className="glowline-svg w-[200px] h-[150px] lg:h-[250px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
        >
          <defs>
            {/* Soft circular glow filter */}
            <filter id="circular-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Circular gradient for glow ring */}
            {/* <radialGradient id="outer-glow-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="30%" stopColor="#77F1FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#77F1FF" stopOpacity="0" />
            </radialGradient> */}
          </defs>

          {/* Vertical glowing line */}
          <path
            className="theLine"
            d="M 100 0 L 100 150"
            fill="none"
            stroke="#77F1FF"
            strokeWidth="6px"
            strokeLinecap="round"
          />

          {/* Outer glow ring */}
          <circle
            className="outer-glow"
            r="24"
            cx="100"
            cy="0"
            stroke="url(#outer-glow-gradient)"
            strokeWidth="8"
            fill="#0AB5A933"
            filter="url(#circular-glow)"
          />

          {/* Core glow ball */}
          <circle
            className="glow-ball"
            r="10"
            cx="100"
            cy="0"
          />
        </svg>
      </div>

      {/* Top Fade Mask */}
      <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      {/* Section Content */}
      <div className="relative z-10 mt-[100px] lg:mt-[240px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">Sync & Strategize</h2>
        <p className="text-gray-300 text-base font-medium">
          Insights + approvals aligned. Ready to ship.
        </p>

        <div className="w-full mt-6 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/sync&strategize.webp"
            alt="Sync & Strategize"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Component Scoped Styles */}
      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 18px #77F1FF) drop-shadow(0 0 36px #77F1FF);
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
          will-change: stroke-dashoffset;
        }

        .glow-ball {
          fill: #061016;
          stroke: #77F1FF;
          stroke-width: 6px;
          opacity: 1;
          filter: drop-shadow(0 0 30px #77F1FF) drop-shadow(0 0 60px #77F1FF);
          transform-origin: center;
          will-change: transform;
        }
      `}</style>

      {/* Decorative Stars */}
      <DecorStar position="top-60 right-30" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="top-200 left-75" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
