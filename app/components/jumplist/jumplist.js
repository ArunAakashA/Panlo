"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./jumplist.css";

import SectionHowItWorks_1 from "../ComponentCustomJSON/section_how_it_works_1";
import SectionHowItWorks_2 from "../ComponentCustomJSON/section_how_it_works_2";
import SectionHowItWorks_3 from "../ComponentCustomJSON/section_how_it_works_3";

gsap.registerPlugin(ScrollTrigger);

// Safe version of useLayoutEffect
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useEffect : () => {};

const JumplistNode = ({ nodeID, children }) => <div id={nodeID}>{children}</div>;

export default function Jumplist({ json }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=60px top",
          end: "bottom bottom",
          scrub: true,
          onEnter: () => gsap.to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }),
          onLeaveBack: () => gsap.to(headingRef.current, { autoAlpha: 0, y: -40, duration: 0.3 }),
          onLeave: () => gsap.to(headingRef.current, { autoAlpha: 0, y: -40, duration: 0.3 }),
          onEnterBack: () => gsap.to(headingRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }),
        },
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top+=60px",
        end: "bottom bottom-=120px",
        pin: headingRef.current,
        pinSpacing: false,
        onUpdate: (self) => setProgress(parseFloat(self.progress.toFixed(2))),
      });

      return () => {
        tl.scrollTrigger?.kill();
        mm.revert();
      };
    });

    return () => mm.revert();
  }, []);

  // smooth scrollToSection unchanged
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    gsap.to(window, {
      scrollTo: { y: target, offsetY: 80 },
      duration: 1.2,
      ease: "power3.inOut",
    });
  };

  return (
    <div ref={sectionRef} className="relative container mx-auto overflow-x-hidden">
      <div
        ref={headingRef}
        id="jumplist-pin-spacer"
        className="z-20 hidden md:block w-screen !left-0 bg-bg-primary border-b border-primary/30 overflow-x-hidden sticky top-0 opacity-0 -translate-y-10 pointer-events-none"
      >
        <div className="flex justify-center gap-60 pt-7 pb-4 relative">
          {json.tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(`node-${index}`)}
              className={`cursor-pointer font-semibold transition-colors duration-300 ${
                progress * 3 >= index
                  ? "text-white"
                  : "text-gray-400"
              }`}
            >
              {tab.title}
            </button>
          ))}

          <div
            className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-500 ease-in-out"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>

      {json.tabs.map((tab, index) => {
        const Wrapper = ({ children }) => (
          <JumplistNode nodeID={`node-${index}`}>{children}</JumplistNode>
        );

        switch (tab.componentType) {
          case "create-upload":
            return <Wrapper key={index}><SectionHowItWorks_1 /></Wrapper>;
          case "review-collaborate":
            return <Wrapper key={index}><SectionHowItWorks_2 /></Wrapper>;
          case "sync-strategize":
            return <Wrapper key={index}><SectionHowItWorks_3/></Wrapper>;
          default:
            return null;
        }
      })}
    </div>
  );
}
