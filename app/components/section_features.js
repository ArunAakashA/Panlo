"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFeatures() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cont1 = section.querySelector(".cont-1");
    const cont2 = section.querySelector(".cont-2");
    const cont3 = section.querySelector(".cont-3");
    const cont4 = section.querySelector(".cont-4");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom center",
        scrub: 1.6,
      },
    });

    tl.fromTo(
      cont1,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
    );


    tl.fromTo(
      [cont2, cont3, cont4],
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 1,
        stagger: 0.2,
      },
      ">-0.3"
    );



    tl.to(cont4, { opacity: 1, duration: 0.3 });

    gsap.ticker.lagSmoothing(1000, 16);
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="origin-center bg-bg-primary text-white pt-0 md:pt-15 py-15 md:py-20 px-4 will-change-transform"
    >
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ROW 1 */}
        <div className="cont-1 bg-bg-tertiary rounded-2xl p-8 pr-0 lg:p-10 lg:pr-0 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-8 lg:gap-10 items-center opacity-0 translate-y-20">
          <div className="space-y-5 text-left pr-8 lg:pr-0">
            <h2 className="text-4xl lg:text-[56px] font-bold leading-tight">
              Less mess. <span className="text-secondary">More magic</span>
            </h2>
            <p className="text-gray-400/90 font-medium text-base leading-relaxed">
              Creative chaos is real. Feedback scattered across emails, chats, screenshots
              which kills momentum. Panlo corrals the mess — projects, reviews, dashboards,
              and insights, all elegantly in one place.
            </p>
            <p className="text-gray-400/90 font-medium text-base leading-relaxed">
              Panlo is built for marketing teams across brands and agencies alike. One platform
              that keeps creators, managers, and clients perfectly in sync.
            </p>
          </div>

          <div className="relative w-full h-auto">
            <Image
              src="/images/less-mess-more-magic.webp"
              alt="Analytics chart"
              width={1000}
              height={600}
              className="w-full object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT SIDE CONTAINER */}
          <div className="cont-2 bg-bg-tertiary rounded-2xl pt-8 pl-8 space-y-6 opacity-0 translate-y-20">
            <div className="pb-2 text-left pr-8">
              <h3 className="text-xl font-bold text-secondary">
                Project Management, Minus<br className="hidden lg:block" /> the Mayhem
              </h3>
              <p className="text-gray-400/70 mt-2 font-medium">
                Multiple accounts & role permissions made simple.
              </p>
            </div>

            <div className="relative w-full h-auto lg:mt-20">
              <Image
                src="/images/project-management.webp"
                alt="Project management"
                width={1000}
                height={600}
                className="w-full object-cover rounded-b-2xl"
              />
            </div>
          </div>

          {/* RIGHT SIDE CONTAINER */}
          <div className="space-y-10">
            {/* Top Container */}
            <div className="cont-3 bg-bg-tertiary rounded-2xl pl-8 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-center text-left opacity-0 translate-y-20">
              <div className="pr-8 pt-8 lg:pt-0">
                <h3 className="text-xl font-bold text-secondary">
                  Admin Powers, Simplified
                </h3>
                <p className="text-gray-400/70 mt-2 font-medium">
                  Assign, revoke, control - without the headache.
                </p>
              </div>

              <div className="relative w-full h-auto">
                <Image
                  src="/images/admin-powers.webp"
                  alt="Admin controls"
                  width={1000}
                  height={600}
                  className="w-full object-cover rounded-r-2xl"
                />
              </div>
            </div>

            {/* Bottom Container */}
            <div className="cont-4 bg-bg-tertiary rounded-2xl pl-8 pr-0 pb-0 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 items-center text-left opacity-0 translate-y-20">
              <div className="pr-8 pt-8 lg:pt-0">
                <h3 className="text-xl font-bold text-secondary">
                  Template Treasure Trove
                </h3>
                <p className="text-gray-400/70 mt-2 font-medium">
                  Social posts, videos, websites. Ready to roll.
                </p>
              </div>

              <div className="relative w-full h-auto">
                <Image
                  src="/images/template-treasure-trove.webp"
                  alt="Templates gallery"
                  width={1000}
                  height={600}
                  className="w-full object-cover rounded-r-2xl"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
