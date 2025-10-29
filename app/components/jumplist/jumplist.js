"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./jumplist.css";

import SectionHowItWorks_1 from "../ComponentCustomJSON/section_how_it_works_1";
import SectionHowItWorks_2 from "../ComponentCustomJSON/section_how_it_works_2";
import SectionHowItWorks_3 from "../ComponentCustomJSON/section_how_it_works_3";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const JumplistNode = ({ nodeID, children }) => (
  <div id={nodeID} className="jumplist-node m-0 p-0">
    {children}
  </div>
);

export default function Jumplist({ json }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const computeHeader = () => {
      const hdr = document.querySelector("header#global-header") || document.querySelector("header");
      const h = hdr ? Math.round(hdr.getBoundingClientRect().height) : 0;
      setTopOffset(h);
      document.documentElement.style.setProperty("--jumplist-top-offset", `${h}px`);
      ScrollTrigger.refresh();
    };

    computeHeader();
    window.addEventListener("resize", computeHeader);
    const t = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.removeEventListener("resize", computeHeader);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `top top+=${topOffset + 0}`,
        end: "bottom bottom-=120px",
        pin: headingRef.current,
        pinSpacing: false,
        onToggle: (self) => {
          headingRef.current.classList.toggle("is-visible", self.isActive);
        },
        onUpdate: (self) => setProgress(parseFloat(self.progress.toFixed(2))),
      });

      return () => {
        st.kill();
      };
    });

    return () => mm.revert();
  }, [topOffset]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    gsap.to(window, {
      duration: 0.9,
      ease: "power3.inOut",
      scrollTo: { y: el, offsetY: topOffset + 12 },
    });
  };

  return (
    <div ref={sectionRef} className="jumplist-section">
      <div ref={headingRef} id="jumplist-pin-spacer" className="jumplist-header lg-block">
        <div className="jumplist-inner">
          <div className="jumplist-tabs gap-60">
            {json.tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(`node-${i}`)}
                className={`jumplist-tab ${progress * 3 >= i ? "active" : ""}`}
                aria-label={`Jump to ${tab.title}`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          <div
            className="jumplist-underline"
            style={{ width: `${Math.max(6, progress * 100)}%` }}
            aria-hidden="true"
          />
        </div>
      </div>

      {json.tabs.map((tab, index) => {
        const id = `node-${index}`;
        switch (tab.componentType) {
          case "create-upload":
            return (
              <JumplistNode key={id} nodeID={id}>
                <SectionHowItWorks_1 />
              </JumplistNode>
            );
          case "review-collaborate":
            return (
              <JumplistNode key={id} nodeID={id}>
                <SectionHowItWorks_2 />
              </JumplistNode>
            );
          case "sync-strategize":
            return (
              <JumplistNode key={id} nodeID={id}>
                <SectionHowItWorks_3 />
              </JumplistNode>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
