"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionInsights() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const imgLeft = section.querySelector(".img-left");
    const imgRight = section.querySelector(".img-right");
    const textBlocks = section.querySelectorAll(".text-block");

    // === IMAGE 1: Left → Right ===
    gsap.fromTo(
      imgLeft,
      { opacity: 0, x: -150, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgLeft,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.6,
        },
      }
    );

    // === IMAGE 2: Right → Left ===
    gsap.fromTo(
      imgRight,
      { opacity: 0, x: 150, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imgRight,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.6,
        },
      }
    );

    // === TEXT (Both): Bottom → Up + Fade ===
    gsap.fromTo(
      textBlocks,
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom center",
          scrub: 2,
        },
      }
    );

    gsap.ticker.lagSmoothing(1000, 16);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg-tertiary text-white py-15 md:py-20 px-4 will-change-transform"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* === MAIN HEADING === */}
        <h2 className="text-4xl lg:text-[56px] font-bold leading-tight text-center opacity-90">
          <span className="text-secondary">Insights</span> That Work Harder
        </h2>

        {/* === ROW 1 === */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
          {/* LEFT SIDE (Mascot + Chat Image) */}
          <div className="img-left relative w-full h-auto opacity-0 translate-x-[-50px]">
            <Image
              src="/images/AI-Marketing-Intelligence-Img.webp"
              alt="Mascot and chat illustration"
              width={1000}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* RIGHT SIDE (Text Content) */}
          <div className="text-block space-y-4 opacity-0 translate-y-10">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white">
              AI Marketing Intelligence
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed">
              Past performance decoded into actionable next steps.
            </p>
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="lg:pl-20 pl-0 grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
          {/* LEFT SIDE (Text Content) */}
          <div className="text-block space-y-4 opacity-0 translate-y-10">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white">
              One Dashboard to Rule<br /> Them All
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed">
              Compare iterations like a design time traveler.
            </p>
          </div>

          {/* RIGHT SIDE (Dashboard Image) */}
          <div className="img-right relative w-full h-auto opacity-0 translate-x-[50px]">
            <Image
              src="/images/Dashboard.webp"
              alt="Dashboard preview"
              width={1000}
              height={800}
              className="w-full h-auto rounded-xl border object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
