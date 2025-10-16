"use client";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center">
      

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-24">
        {/* Hero Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight bg-gradient-to-r from-[#0AB5A9] to-[#77F1FF] bg-clip-text text-transparent">
          Your Marketing Workflow
          <br />
          Simplified
        </h1>

        {/* Subtitle */}
        <p className="mt-6 mx-auto text-slate-300 text-lg md:text-xl leading-relaxed px-4 md:px-10 lg:px-60">
          From PDFs to video to live websites, Panlo lets you manage, review, and sync
          everything in one place - powered by AI-driven insights and collaboration tools.
        </p>
        
        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#book"
            className="px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-secondary to-primary shadow-lg hover:opacity-90 transition"
          >
            Book a Demo
          </Link>

          <Link
            href="#watch"
            className="px-8 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition"
          >
            Watch the Video
          </Link>
        </div>
      </div>

      {/* Decorative star */}
      <Image
        src="/decor-star.svg"
        alt="Decorative star"
        width={24}
        height={24}
        className="pointer-events-none absolute left-6 top-1/3 opacity-80"
      />
    </section>
  );
}
