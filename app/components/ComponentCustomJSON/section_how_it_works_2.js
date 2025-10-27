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

    // Initial setup
    gsap.set(line, { drawSVG: "0% 0%" });
    gsap.set(ball, { opacity: 1, scale: 1 });

    // Create timeline and scrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Line and ball animation
    tl.to(ball, {
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

    // Subtle glow pulse
    const glowPulse = gsap.to(ball, {
      scale: 1.12,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill(); // kill this scroll trigger
      tl.kill(); // kill timeline
      glowPulse.kill(); // kill infinite pulse animation
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG Glow Line + Ball */}
      <div className="absolute top-0 flex justify-center will-change-transform">
        <svg
          className="glowline-svg w-[200px] h-[250px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 250"
        >
          <path
            className="theLine"
            d="M 100 0 L 100 250"
            fill="none"
            stroke="#0AB5A9"
            strokeWidth="3px"
            strokeLinecap="round"
          />
          <circle className="glow-ball" r="10" cx="100" cy="5" />
        </svg>
      </div>

      {/* Top Fade Gradient */}
      <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      {/* Content Section */}
      <div className="relative z-10 mt-[300px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">Review & Collaborate</h2>
        <p className="text-gray-300 text-base font-medium">
          Real-time feedback, version histories, team clarity.
        </p>

        <div className="w-full mt-6 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/review&collobarate.webp"
            alt="Review & Collaborate"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Component-scoped styles */}
      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 16px #0ab5a9) drop-shadow(0 0 36px #0ab5a9);
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
          will-change: stroke-dashoffset;
        }

        .glow-ball {
          fill: #061016;
          stroke: #0ab5a9;
          stroke-width: 4px;
          opacity: 1;
          filter: drop-shadow(0 0 25px #0ab5a9) drop-shadow(0 0 40px #0ab5a9);
          transform-origin: center;
          will-change: transform, opacity;
        }
          
      `}</style>

      {/* Decorative Stars */}
      <DecorStar position="top-120 right-95" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="bottom-130 left-80" size={40} delay={1.4} glow={false} float={false} />
      <DecorStar position="bottom-50 left-20" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
