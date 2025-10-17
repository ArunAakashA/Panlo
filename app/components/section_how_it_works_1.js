"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function SectionHowItWorks_1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({ ease: "none" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current.querySelector(".glowline-svg"),
          scrub: true,
          start: "top center",
          end: "bottom center",
        },
      });

      tl.from(sectionRef.current.querySelector(".theLine"), { drawSVG: 0 }, 0)
        .to(sectionRef.current.querySelector(".glow-ball"), { duration: 0.01, autoAlpha: 1 }, 0)
        .to(
          sectionRef.current.querySelector(".glow-ball"),
          {
            motionPath: {
              path: sectionRef.current.querySelector(".theLine"),
              align: sectionRef.current.querySelector(".theLine"),
              alignOrigin: [0.5, 0.5],
            },
          },
          0
        );

      gsap.fromTo(
        sectionRef.current.querySelector(".content-section"),
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current.querySelector(".content-section"),
            start: "top 85%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-bg-primary min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG Line + Glowing Ball */}
      <div className="absolute top-0 flex justify-center">
        <svg
          className="glowline-svg w-[200px] h-[600px] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 600"
        >
          <path
            className="theLine"
            d="M 100 0 L 100 500"
            fill="none"
            stroke="#0AB5A9"
            strokeWidth="3px"
            strokeLinecap="round"
          />
          <circle className="glow-ball" r="10" cx="100" cy="0"></circle>
        </svg>
      </div>
      {/* Fade mask overlay for top line fade effect */}
      <div className="absolute top-0 h-[200px] w-full bg-gradient-to-b from-bg-primary via-bg-primary/80 to-transparent pointer-events-none z-20"></div>


      {/* Section Content */}
      <div className="content-section relative z-10 mt-[550px] flex flex-col items-center text-center space-y-4 w-full max-w-[900px] px-6">
        <h2 className="text-4xl font-bold text-white">Create & Upload</h2>
        <p className="text-gray-300 text-lg">Add assets or link a live site.</p>

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

      <style jsx>{`
        .theLine {
          filter: drop-shadow(0 0 20px #0ab5a9) drop-shadow(0 0 40px #0ab5a9);
        }

        .glow-ball {
          fill: #061016;
          stroke: #0ab5a9;
          stroke-width: 4px;
          visibility: hidden;
          filter: drop-shadow(0 0 25px #0ab5a9);
        }
      `}</style>
    </section>
  );
}
