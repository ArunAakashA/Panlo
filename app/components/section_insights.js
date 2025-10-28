"use client";

import Image from "next/image";

export default function SectionInsights() {
  return (
    <section className="bg-bg-tertiary text-white py-15 md:py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* === MAIN HEADING === */}
        <h2 className="text-4xl lg:text-[56px] font-bold leading-tight text-center">
          <span className="text-secondary">Insights</span> That Work Harder
        </h2>

        {/* === ROW 1 === */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
          {/* LEFT SIDE (Mascot + Chat Image) */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/AI-Marketing-Intelligence-Img.webp"
              alt="Mascot and chat illustration"
              width={1000}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* RIGHT SIDE (Text Content) */}
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white">
              AI Marketing Intelligence
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed">
              Past performance decoded into actionable next steps.
            </p>
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="lg:pl-20 pl-0 grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
          {/* LEFT SIDE (Text Content) */}
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-[32px] font-bold text-white">
              One Dashboard to Rule<br /> Them All
            </h3>
            <p className="font-medium text-gray-400 leading-relaxed">
              Compare iterations like a design time traveler.
            </p>
          </div>

          {/* RIGHT SIDE (Dashboard Image) */}
          <div className="relative w-full h-auto">
            <Image
              src="/images/Dashboard.webp"
              alt="Dashboard preview"
              width={1000}
              height={800}
              className="w-full h-auto rounded-xl border border-[#16323C] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
