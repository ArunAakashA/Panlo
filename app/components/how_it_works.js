"use client";

import { JumplistNode } from "@faceless-ui/jumplist";
import { useJumplist } from "@faceless-ui/jumplist";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import typography from "components/typography";

import HomepageDatasource from "components/HomepageDatasource";
import HomepageWidgets from "components/HomepageWidgets";
import HomepageCode from "components/HomepageCode";
import HomepageDeploy from "components/HomepageDeploy";

import "./Jumplist.css";

export default function Jumplist({ json, componentHeading, assets }) {
  const jumplist = useJumplist();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [headerAdditionalSpace, setHeaderAdditionalSpace] = useState(54);

  const jumpListScrollToIndex = ({ index, id }) => {
    jumplist.scrollToID(id);
  };

  // Pin the section heading on scroll
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px)",
      () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top top+=${headerAdditionalSpace + 66}px`,
          end: "bottom bottom-=120px",
          pin: headingRef.current,
          pinSpacing: false,
          onEnter: () => (headingRef.current.style.visibility = "visible"),
          onLeaveBack: () => (headingRef.current.style.visibility = "hidden"),
          onUpdate: (self) => setProgress(parseFloat(self.progress.toFixed(2))),
        });
      },
      sectionRef
    );

    return () => mm.revert();
  }, [headerAdditionalSpace]);

  // Observe header visibility and adjust spacing dynamically
  useEffect(() => {
    const target = document.querySelector(
      "header#global-header div.dark.relative.z-40.transition-transform.duration-300.ease-out"
    );

    if (!target) return;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.target instanceof HTMLElement &&
          mutation.attributeName === "class"
        ) {
          if (mutation.target.classList.contains("hidden")) {
            setHeaderAdditionalSpace(0);
          } else {
            setHeaderAdditionalSpace(54);
          }
        }
      });
    });

    observer.observe(target, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative container mx-auto overflow-x-hidden">
      {/* Sticky Tab Header */}
      <div
        ref={headingRef}
        id="jumplist-pin-spacer"
        style={{ visibility: "hidden" }}
        className="z-20 hidden md:block w-screen !left-0 bg-primary-dark-900 overflow-x-hidden"
      >
        <div className="flex flex-row justify-evenly gap-4 border-b-2 border-primary-neutral-200/40 relative">
          {json.tabs.map((tab, index) => (
            <div
              key={`tab-${index}`}
              onClick={() => jumpListScrollToIndex({ index, id: `node-${index}` })}
              className={clsx(
                typography.label,
                "cursor-pointer rounded-md py-xs font-display text-sm font-bold text-primary-dark-100 transition-colors duration-300 hover:text-primary-light-500",
                (progress * 100) / 25 >= index &&
                  "text-primary-light-500 delay-150"
              )}
            >
              {tab.title}
            </div>
          ))}

          {/* Progress underline */}
          <div
            className="absolute left-0 top-0 h-full border-b-2 border-primary-light-500 transition-transform duration-300 ease-in-out will-change-transform"
            style={{
              width: `calc(100% * ${progress})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section Components */}
      {json?.tabs.map((tab, index) => {
        const { refAssetId, refHeadingComponent, componentType } = tab;
        const asset = assets?.find((a) => a?.sys.id === refAssetId);
        const heading = componentHeading?.find(
          (h) => h?.sys.id === refHeadingComponent
        );

        const Wrapper = ({ children }) => (
          <div key={`node-${index}`}>
            <JumplistNode nodeID={`node-${index}`}>{children}</JumplistNode>
          </div>
        );

        switch (componentType) {
          case "homepage-datasources":
            return (
              <Wrapper key={index}>
                <HomepageDatasource componentHeading={heading} assets={assets} />
              </Wrapper>
            );
          case "homepage-widgets":
            return (
              <Wrapper key={index}>
                <HomepageWidgets componentHeading={heading} assets={assets} />
              </Wrapper>
            );
          case "homepage-code":
            return (
              <Wrapper key={index}>
                <HomepageCode componentHeading={heading} assets={assets} />
              </Wrapper>
            );
          case "homepage-deploy":
            return (
              <Wrapper key={index}>
                <HomepageDeploy componentHeading={heading} assets={assets} />
              </Wrapper>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
