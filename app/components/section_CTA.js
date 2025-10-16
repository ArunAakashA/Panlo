"use client";

import Image from "next/image";

export default function SectionCTA() {
  return (
    <section className="bg-bg-primary text-white py-5 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl overflow-hidden grid md:grid-cols-[1fr_2fr] items-center p-10 pt-0 pr-0 pb-0 gap-6">
          
          {/* === LEFT SIDE CONTENT === */}
          <div className="space-y-6 pt-8 md:pb-10">
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#071a20]">
              Where creativity<br />meets clarity.
            </h2>
            <button className="mt-4 border border-[#071a20] text-[#071a20] font-medium px-6 py-3 rounded-full hover:bg-[#071a20] hover:text-white transition-all duration-300">
              Book a Demo
            </button>
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
