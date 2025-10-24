"use client";
import Link from "next/link";
import DecorStar from "./decor_star";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center">
      <div className="relative z-10 container mx-auto px-6 pt-36 pb-14">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold leading-tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          Your Marketing Workflow
          <br />
          Simplified
        </h1>

        {/* Subtitle */}
        <p className="mt-6 mx-auto text-slate-300 text-base md:text-base font-medium leading-relaxed px-4 md:px-10 lg:px-60">
          From PDFs to video to live websites, Panlo lets you manage, review, and sync
          everything in one place - powered by AI-driven insights and collaboration tools.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#book"
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-primary to-secondary shadow-lg overflow-hidden transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="font-semibold transition-transform duration-300 translate-x-4 group-hover:-translate-x-0">
                Book a Demo
              </span>

              {/* Arrow — slides in from right */}
              <span className="inline-block overflow-hidden w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>

          <Link
            href="#watch"
            className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full border border-primary text-secondary overflow-hidden transition-all duration-300"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="font-semibold transition-transform duration-300 translate-x-4 group-hover:-translate-x-0">
                Watch the Video
              </span>

              {/* Arrow — slides in from right */}
              <span className="inline-block overflow-hidden w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>

      {/* Stars (desktop only) */}
      <DecorStar
        position="top-120 right-65"
        size={40}
        delay={0.8}
        glow={false}
        float={false}
      />
      <DecorStar
        position="bottom-60 left-20"
        size={40}
        delay={1.4}
        glow={false}
        float={false}
      />
    </section>
  );
}
