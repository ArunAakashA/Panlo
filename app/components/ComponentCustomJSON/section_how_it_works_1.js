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

    gsap.set(line, { drawSVG: "0% 0%" });
    gsap.set(ball, { opacity: 1, scale: 1 });
    gsap.set(outerGlow, { opacity: 0.9, scale: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 150%",
        end: "bottom center",
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

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="how-it-works relative bg-bg-primary flex flex-col items-center justify-start overflow-hidden min-h-[60vh] lg:min-h-screen md:justify-center mt-[0px] sm:mt-[-30px] lg:mt-[-40px] pt-10 sm:pt-16"
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
            className="theLine stroke-secondary stroke-[6px] rounded-[9999px] vector-effect-non-scaling-stroke shape-rendering-geometricPrecision drop-glow"
            d="M 100 0 L 100 150"
            fill="none"
            strokeLinecap="round"
          />

          <circle
            className="outer-glow opacity-80"
            r="24"
            cx="100"
            cy="5"
            stroke="url(#circular-gradient)"
            strokeWidth="8"
            fill="#0AB5A933"
            filter="url(#circular-glow)"
          />


          <circle
            className="glow-ball"
            r="10"
            cx="100"
            cy="5"
            style={{
              fill: "var(--color-black)",
              stroke: "var(--color-secondary)",
              strokeWidth: "6px",
              filter:
                "drop-shadow(0 0 25px var(--color-secondary)) drop-shadow(0 0 40px var(--color-secondary))",
              transformOrigin: "center",
              willChange: "transform, opacity",
            }}
          />
        </svg>
      </div>

      <div className="absolute top-0 h-[100px] lg:h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-10"></div>

      <div
        ref={contentRef}
        className="origin-center relative z-10 mt-[160px] sm:mt-[120px] md:mt-[150px] lg:mt-[180px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6"
      >
        <h2 className="text-2xl lg:text-[40px] font-bold text-white">Create & Upload</h2>
        <p className="text-gray-300 text-base font-medium">Add assets or link a live site.</p>

        <div className="w-full mt-[-20px] md:mt-[-40px] rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/images/create&upload.webp"
            alt="Create & Upload"
            width={900}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <DecorStar position="top-0 right-80" size={40} delay={0.8} glow={false} float={false} />
      <DecorStar position="bottom-140 left-20" size={40} delay={1.4} glow={false} float={false} />
    </section>
  );
}
