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
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const svg = section.querySelector(".glowline-svg");
      const line = section.querySelector(".theLine");
      const ball = section.querySelector(".glow-ball");
      const outerGlow = section.querySelector(".outer-glow");

      gsap.set(line, { drawSVG: "0% 0%" });
      gsap.set([ball, outerGlow], { opacity: 1, scale: 1 });

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

      gsap.ticker.lagSmoothing(1000, 16);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works relative bg-bg-primary flex flex-col items-center justify-start overflow-hidden min-h-[60vh] lg:min-h-screen md:justify-center mt-[0px] sm:mt-[-30px] lg:mt-[-40px] pt-10 sm:pt-16 pb-5"
    >
      <div className="absolute top-0 flex justify-center will-change-transform">
        <svg
          className="glowline-svg w-[200px] h-[150px] lg:h-[250px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
        >
          <defs>
            <filter id="circular-glow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            className="theLine"
            d="M 100 0 L 100 150"
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="6px"
            strokeLinecap="round"
            style={{
              filter:
                "drop-shadow(0 0 18px var(--color-secondary)) drop-shadow(0 0 36px var(--color-secondary))",
              vectorEffect: "non-scaling-stroke",
              shapeRendering: "geometricPrecision",
              willChange: "stroke-dashoffset",
            }}
          />

          <circle
            className="outer-glow opacity-80"
            r="24"
            cx="100"
            cy="0"
            stroke="url(#outer-glow-gradient)"
            strokeWidth="8"
            fill="#0AB5A933"
            filter="url(#circular-glow)"
          />

          <circle
            className="glow-ball"
            r="10"
            cx="100"
            cy="0"
            style={{
              fill: "var(--color-black)",
              stroke: "var(--color-secondary)",
              strokeWidth: "6px",
              filter:
                "drop-shadow(0 0 30px var(--color-secondary)) drop-shadow(0 0 60px var(--color-secondary))",
              transformOrigin: "center",
              willChange: "transform",
            }}
          />
        </svg>
      </div>

      <div className="absolute top-0 h-[100px] lg:h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      <div
        ref={contentRef}
        className="origin-center relative z-10 mt-[160px] sm:mt-[120px] md:mt-[150px] lg:mt-[180px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6"
      >
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">
          Sync & Strategize
        </h2>
        <p className="text-gray-300 text-base font-medium">
          Insights + approvals aligned. Ready to ship.
        </p>

        <div className="w-full mt-6 rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/images/sync&strategize.webp"
            alt="Sync & Strategize"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <DecorStar position="top-60 right-30" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="top-200 left-75" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
