"use client";

import SectionHowItWorks_1 from "./section_how_it_works_1";
import SectionHowItWorks_2 from "./section_how_it_works_2";
import SectionHowItWorks_3 from "./section_how_it_works_3";

export default function SectionHowItWorks() {
  return (
    <section id="how" className="overflow-hidden">
      {/* Main Heading */}
      <div className="pt-30 text-center z-10">
        <h1 className="text-[56px] font-bold text-white">
          How It
          <span className="text-secondary ml-3">Works</span>
        </h1>
      </div>

      {/* All 3 GSAP Sections */}
      {/* <SectionHowItWorks_1 />
      <SectionHowItWorks_2 />
      <SectionHowItWorks_3 /> */}
      
    </section>
  );
}
