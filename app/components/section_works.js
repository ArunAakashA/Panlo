"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function HowItWorks() {
  const svgRef = useRef(null);
  const lineRef = useRef(null);
  const ballRef = useRef(null);
  const sectionsRef = useRef([]);

  const steps = [
    {
      title: "Create & Upload",
      subtitle: "Add assets or link a live site.",
      image: "/images/create&upload.webp",
    },
    {
      title: "Review & Collaborate",
      subtitle: "Real-time feedback, version histories, team clarity.",
      image: "/images/review&collobarate.webp",
    },
    {
      title: "Versions on Demand",
      subtitle: "Compare iterations like a design time traveler.",
      image: "/images/sync&strategize.webp",
    },
  ];

  useEffect(() => {
    const line = lineRef.current;
    const ball = ballRef.current;
    const sections = sectionsRef.current;

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    master.fromTo(
      line,
      { strokeDasharray: 4000, strokeDashoffset: 4000 },
      { strokeDashoffset: 0, ease: "none" },
      0
    );

    master.to(
      ball,
      {
        motionPath: {
          path: line,
          align: line,
          alignOrigin: [0.5, 0.5],
        },
        ease: "none",
      },
      0
    );

    gsap.fromTo(
      ball,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top 90%",
          end: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    sections.forEach((section, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 85%", 
          end: "bottom 50%",
          scrub: true,
        },
      });

      tl.to({}, { duration: 0.4 }); 

      tl.to([ball, line], {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power1.out",
      });

      tl.fromTo(
        section,
        { autoAlpha: 0, y: 100 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "<"
      );

      tl.to([ball, line], {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power1.in",
      });
    });
  }, []);

  return (
    <section className="relative bg-bg-primary text-white overflow-hidden py-32">
      {/* === Title === */}
      <div className="text-center">
        <h2 className="text-5xl font-semibold">
          How It <span className="text-secondary">Works</span>
        </h2>
      </div>

      {/* === Glowing Vertical Line + Ball === */}
      <div className="relative flex justify-center">
        <svg
          ref={svgRef}
          viewBox="0 0 200 4000"
          className="absolute left-1/2 -translate-x-1/2 w-[150px] h-[3500px] overflow-visible"
        >
          {/* Soft Background Glow Line */}
          <path
            d="M 100 0 L 100 4000"
            stroke="#0AB5A9"
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.15"
          />

          {/* Main Animated Line */}
          <path
            ref={lineRef}
            d="M 100 0 L 100 4000"
            fill="none"
            stroke="#0AB5A9"
            strokeWidth="5"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 15px #0AB5A9)" }}
          />

          {/* Glowing Ball */}
          <g ref={ballRef} className="relative z-[10] opacity-0">
            <circle
              r="25"
              cx="100"
              cy="0"
              fill="#0AB5A9"
              opacity="0.3"
              className="blur-xl"
            />
            <circle
              r="12"
              cx="100"
              cy="0"
              fill="#071a20"
              stroke="#0AB5A9"
              strokeWidth="4"
              className="drop-shadow-[0_0_25px_#0AB5A9]"
            />
          </g>
        </svg>
      </div>

      {/* === Steps === */}
      <div className="relative z-20 mt-[300px] flex flex-col items-center space-y-[100vh]">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="max-w-6xl mx-auto text-center px-4 opacity-0"
          >
            <h3 className="text-3xl md:text-4xl font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-gray-400 mb-10">{step.subtitle}</p>
            <div className="rounded-2xl overflow-hidden border border-[#16323C]">
              <Image
                src={step.image}
                alt={step.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
