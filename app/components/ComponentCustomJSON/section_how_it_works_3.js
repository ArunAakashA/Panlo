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
    const svg = section.querySelector(".glowline-svg");
    const line = section.querySelector(".theLine");
    const ball = section.querySelector(".glow-ball");

    // Initial setup (no flicker)
    gsap.set(line, { drawSVG: "0%" });
    gsap.set(ball, { opacity: 1, scale: 1 });

    // Ball moves and draws line behind it
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    tl.to(ball, {
      motionPath: {
        path: line,
        align: line,
        alignOrigin: [0.5, 0.5],
      },
      ease: "none",
      duration: 1,
      onUpdate: function () {
        const progress = this.progress() * 100;
        gsap.set(line, { drawSVG: `0% ${progress}%` });
      },
    });

    // Gentle glowing pulse for the ball
    gsap.to(ball, {
      scale: 1.25,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20"
    >
      {/* SVG Line + Glowing Ball */}
      <div className="absolute top-0 flex justify-center">
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
          <circle className="glow-ball" r="10" cx="100" cy="0"></circle>
        </svg>
      </div>

      {/* Fade mask overlay */}
      <div className="absolute top-0 h-[150px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      {/* Section Content */}
      <div className="relative z-10 mt-[300px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-[40px] font-bold text-white">Sync & Strategize</h2>
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

      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 20px #0ab5a9) drop-shadow(0 0 40px #0ab5a9);
          will-change: stroke-dashoffset;
        }

        .glow-ball {
          fill: #061016;
          stroke: #0ab5a9;
          stroke-width: 4px;
          opacity: 1;
          filter: drop-shadow(0 0 30px #0ab5a9) drop-shadow(0 0 60px #0ab5a9);
          transform-origin: center;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Decorative Stars */}
      <DecorStar position="top-140 right-30" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="top-283 left-75" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
