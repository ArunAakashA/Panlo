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
    gsap.set(outerGlow, { opacity: 0.9, scale: 1 });

    // Create timeline and scrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    });

    // Line + ball + glow move animation
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

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
      glowPulse.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works mt-8 relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG Glow Line + Ball */}
      <div className="absolute top-0 flex justify-center will-change-transform">
        <svg
          className="glowline-svg w-[200px] h-[150px] lg:h-[250px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
        >
          <defs>
            {/* Create circular soft glow filter */}
            <filter id="circular-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Circular radial gradient for outer ring */}
            {/* <radialGradient id="circular-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="50%" stopColor="#77F1FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#77F1FF" stopOpacity="0" />
            </radialGradient> */}
          </defs>

          {/* Vertical path line */}
          <path
            className="theLine"
            d="M 100 0 L 100 150"
            fill="none"
            stroke="#77F1FF"
            strokeWidth="6px"
            strokeLinecap="round"
          />

          {/* Outer glow ring (circular gradient) */}
          <circle
            className="outer-glow"
            r="24"
            cx="100"
            cy="5"
            stroke="url(#circular-gradient)"
            strokeWidth="8"
            fill="#0AB5A933"
            filter="url(#circular-glow)"
            opacity="0.8"
          />

          {/* Inner ball */}
          <circle
            className="glow-ball"
            r="10"
            cx="100"
            cy="5"
          />
        </svg>
      </div>

      {/* Top fade gradient (for visual depth) */}
      <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      {/* Content Section */}
      <div className="relative z-10 mt-[50px] lg:mt-[240px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">Create & Upload</h2>
        <p className="text-gray-300 text-base font-medium">
          Add assets or link a live site.
        </p>

        <div className="w-full mt-6 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/create&upload.webp"
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
          filter: drop-shadow(0 0 16px #77F1FF) drop-shadow(0 0 36px #77F1FF);
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
          will-change: stroke-dashoffset;
        }

        .glow-ball {
          fill: #061016;
          stroke: #77F1FF;
          stroke-width: 6px;
          opacity: 1;
          filter: drop-shadow(0 0 25px #77F1FF) drop-shadow(0 0 40px #77F1FF);
          transform-origin: center;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Decorative stars */}
      <DecorStar position="top-0 right-80" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="bottom-140 left-30" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
