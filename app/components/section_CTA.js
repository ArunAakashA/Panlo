"use client";

import Link from "next/link";
import Image from "next/image";

export default function SectionCTA() {
  return (
    <section className="bg-bg-primary text-white py-5 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div style={{
          borderImageSource: "linear-gradient(270deg, #77F1FF 0%, #0AB5A9 100%)",
        }} className="bg-gradient-to-r from-secondary to-primary border-1 rounded-[24px] overflow-hidden grid md:grid-cols-[1fr_2fr] items-center p-10 pt-0 pr-0 pb-0 gap-6">

          {/* === LEFT SIDE CONTENT === */}
          <div className="space-y-6 pt-8 md:pb-10">
            <h2 className="text-4xl md:text-[50px] font-bold leading-tight text-black">
              Where creativity<br />meets clarity.
            </h2>

            <Link
              href="#book" // you can change this target as needed
              className="group relative inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#071a20] text-[#071a20] font-medium overflow-hidden transition-all duration-300"
            >
              <span className="flex items-center justify-center gap-2">
                {/* Text */}
                <span className="text-base font-semibold transition-transform duration-300 translate-x-4 group-hover:-translate-x-0">
                  Book a Demo
                </span>

                {/* Arrow – slides in from right */}
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

          {/* === RIGHT SIDE IMAGE === */}
          <div className="flex justify-end relative w-full h-auto md:mt-40 lg:mt-0">
            <Image
              src="/images/dashboard-preview.webp"
              alt="Dashboard preview"
              width={1000}
              height={600}
              className="w-full md:w-[90%] object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
