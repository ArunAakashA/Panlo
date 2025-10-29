"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SectionReview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".card-1, .card-2, .card-3");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 100, scale: 0.8 }, 
      {
        opacity: 1,
        y: 0,
        scale: 1, 
        ease: "power3.out",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top 80%", 
          end: "top 40%",   
          scrub: 1.5,         
        },
      }
    );

  }, []);

  return (
    <section
      ref={sectionRef}
      className="origin-center bg-bg-tertiary text-white py-15 md:py-20 mb-0 px-4 will-change-transform"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        <h2 className="text-4xl lg:text-[56px] font-bold leading-tight text-center opacity-90">
          <span className="text-secondary">Review</span> Without <span className="line-break">the Runaround</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="card-1 bg-bg-fourth rounded-2xl p-8 pr-0 pb-0 space-y-4 text-left md:text-center opacity-0 translate-y-20">
            <h3 className="text-[24px] font-bold pr-8">Files, Meet Flow</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              PDFs, images, videos, all in one <br /> space.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-files.webp"
                alt="Files dashboard preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card-2 bg-bg-fourth rounded-2xl p-8 pr-0 pb-0 space-y-4 text-left md:text-center opacity-0 translate-y-20">
            <h3 className="text-[24px] font-bold pr-8">Review & Collaborate</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              Real-time feedback, <br />version histories, team clarity.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-collaborate.webp"
                alt="Review and collaboration screen"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card-3 bg-bg-fourth rounded-2xl p-8 pr-0 pb-0 space-y-4 text-left md:text-center opacity-0 translate-y-20">
            <h3 className="text-[24px] font-bold pr-8">Versions on Demand</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              Compare iterations like a design <br />time traveler.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-versions.webp"
                alt="Version comparison UI"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
