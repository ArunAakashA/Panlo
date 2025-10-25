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
    const svg = section.querySelector(".glowline-svg");
    const line = section.querySelector(".theLine");
    const ball = section.querySelector(".glow-ball");

    // Prevent flicker on start
    gsap.set(line, { drawSVG: "0%" });
    gsap.set(ball, { opacity: 1, scale: 1 });

    // --- ✅ Custom throttle function ---
    const throttle = (fn, delay) => {
      let last = 0;
      return (...args) => {
        const now = Date.now();
        if (now - last >= delay) {
          last = now;
          fn(...args);
        }
      };
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    let lastProgress = -1;
    const throttledUpdate = throttle(() => {
      const progress = Math.round(tl.progress() * 100);
      if (progress !== lastProgress) {
        gsap.set(line, { drawSVG: `0% ${progress}%` });
        lastProgress = progress;
      }
    }, 25); // Throttle every 25ms

    // Ball motion
    tl.to(
      ball,
      {
        motionPath: {
          path: line,
          align: line,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        duration: 2,
        onUpdate: throttledUpdate,
      },
      0
    );

    // Subtle glowing pulse
    gsap.to(ball, {
      scale: 1.1,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // ✅ Only clean up this section's GSAP instance
    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Glowing Line + Ball */}
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
          <circle className="glow-ball" r="10" cx="100" cy="5"></circle>
        </svg>
      </div>

      {/* Fade overlay */}
      <div className="absolute top-0 h-[150px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-20"></div>

      {/* Content */}
      <div className="content-section relative z-10 mt-[300px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-[40px] font-bold text-white">Create & Upload</h2>
        <p className="text-gray-300 text-base font-medium">
          Add assets or link a live site.
        </p>

        <div className="w-full mt-6 rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/images/create&upload.webp"
            alt="Create & Upload"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Scoped styles */}
      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 20px #0ab5a9) drop-shadow(0 0 40px #0ab5a9);
          will-change: stroke-dashoffset;
          vector-effect: non-scaling-stroke;
          shape-rendering: geometricPrecision;
        }

        .glow-ball {
          fill: #061016;
          stroke: #0ab5a9;
          stroke-width: 4px;
          opacity: 0;
          filter: drop-shadow(0 0 25px #0ab5a9);
          transform-origin: center;
          will-change: transform, opacity;
        }

        .glowline-svg {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform, opacity;
        }
      `}</style>

      {/* Decorative stars */}
      <DecorStar position="top-0 right-80" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="bottom-140 left-30" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
