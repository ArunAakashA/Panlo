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

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      const row1 = section.querySelector(".row-1");
      const row2 = section.querySelector(".row-2");

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: row1,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.6,
        },
      });

      tl1
        .fromTo(
          imgLeft,
          { opacity: 0, x: -120, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, ease: "power3.out" },
          0 
        )
        .fromTo(
          textBlocks[0],
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, ease: "power3.out" },
          0 
        );

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: row2,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.6,
        },
      });

      tl2
        .fromTo(
          imgRight,
          { opacity: 0, x: 120, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, ease: "power3.out" },
          0
        )
        .fromTo(
          textBlocks[1],
          { opacity: 0, y: 80, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, ease: "power3.out" },
          0
        );
    });

    mm.add("(min-width: 768px)", () => {
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

      textBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 100, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 85%",
              end: "bottom center",
              scrub: 1.6,
            },
          }
        );
      });
    });

    gsap.ticker.lagSmoothing(1000, 16);

    return () => mm.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="bg-bg-tertiary text-white pb-5 py-15 md:py-20 px-4 will-change-transform overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        <h2 className="text-4xl lg:text-[56px] font-bold leading-tight text-center opacity-90">
          <span className="text-secondary">Insights</span> That<span className="line-break"> Work Harder</span>
        </h2>

        {/* ROW 1 */}
        <div className="row-1 grid md:grid-cols-[1.5fr_1fr] md:gap-10 gap-5 items-center">
          <div className="img-left relative w-full h-auto opacity-0">
            <Image
              src="/images/AI-Marketing-Intelligence-Img.webp"
              alt="Mascot and chat illustration"
              width={1000}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <div className="text-block space-y-4 opacity-0">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white text-center md:text-left">
              AI Marketing Intelligence
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed text-center md:text-left">
              Past performance decoded into actionable next steps.
            </p>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="row-2 lg:pl-20 pl-0 grid md:grid-cols-[1fr_1.5fr] md:gap-10 gap-5 items-center">
          <div className="img-right relative w-full h-auto opacity-0 order-1 md:order-2">
            <Image
              src="/images/Dashboard.webp"
              alt="Dashboard preview"
              width={1000}
              height={800}
              className="w-full h-auto rounded-xl border object-cover"
            />
          </div>

          <div className="text-block space-y-4 opacity-0 order-2 md:order-1">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white text-center md:text-left">
              One Dashboard to Rule<br /> Them All
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed text-center md:text-left">
              Compare iterations like a design time traveler.
            </p>
          </div>
        </div>



      </div>
    </section>
  );
}
