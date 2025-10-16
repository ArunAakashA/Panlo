"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

export default function ScrollProcessTimeline() {
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
      title: "Sync & Strategize",
      subtitle: "Insights + approvals aligned. Ready to ship.",
      image: "/images/sync&strategize.webp",
    },
  ];

  useEffect(() => {
    gsap.defaults({ ease: "none" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#timeline-container",
        scrub: true,
        start: "top center",
        end: "bottom bottom",
      },
    });

    // Animate the vertical line drawing and the moving ball
    tl.to(".ball", { duration: 0.01, autoAlpha: 1 })
      .from(".theLine", { drawSVG: 0 }, 0)
      .to(
        ".ball",
        {
          motionPath: {
            path: ".theLine",
            align: ".theLine",
            alignOrigin: [0.5, 0.5],
          },
        },
        0
      );

    // Animate each step (fade in & move up)
    gsap.utils.toArray(".step").forEach((step, i) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Glow the dot when ball reaches that section
      gsap.to(`.dot-${i}`, {
        scrollTrigger: {
          trigger: step,
          start: "top center",
          toggleActions: "play none none reverse",
        },
        scale: 1.5,
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    });

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <section
      id="how"
      className="mt-40 bg-bg-primary text-white flex flex-col items-center justify-center pb-40 relative"
    >
      <div className="text-center mb-20">
        <h2 className="text-5xl font-semibold">
          How It <span className="text-secondary">Works</span>
        </h2>
      </div>

      {/* Timeline container */}
      <div
        id="timeline-container"
        className="relative flex flex-col items-center w-full max-w-[800px]"
      >
        {/* Vertical SVG line & ball */}
        <svg
          id="timeline-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 1100"
          className="absolute left-1/2 -translate-x-1/2 h-full w-[200px] overflow-visible"
        >
          <path
            className="theLine"
            d="M 100 50 L 100 1050"
            fill="none"
            strokeWidth="4px"
          />
          <circle className="ball" r="10" cx="100" cy="50" />
        </svg>

        {/* Steps + static glowing dots */}
        <div className="flex flex-col items-center gap-[300px] z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className="step flex flex-col items-center text-center space-y-4 relative"
            >
              {/* Static Dot aligned with the line */}
              <div
                className={`absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary/40 blur-sm dot-${i}`}
              ></div>

              <h2 className="text-3xl font-semibold">{step.title}</h2>
              <p className="text-sm text-gray-300">{step.subtitle}</p>
              <img
                src={step.image}
                alt={step.title}
                className="w-full rounded-xl mt-4 border border-primary/30 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .theLine {
          stroke: #0ab5a9;
          filter: drop-shadow(0 0 10px #0ab5a9);
        }
        .ball {
          fill: #0ab5a9;
          visibility: hidden;
          filter: drop-shadow(0 0 10px #0ab5a9);
        }
        [class*="dot-"] {
          transition: all 0.3s ease;
          opacity: 0.6;
        }
      `}</style>
    </section>
  );
}
