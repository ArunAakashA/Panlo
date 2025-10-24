"use client";

import Image from "next/image";

export default function SectionReview() {
  return (
    <section className="bg-bg-tertiary text-white py-20 mb-0 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* === HEADING === */}
        <h2 className="text-[56px] font-bold leading-tight text-center">
          <span className="text-secondary">Review</span> Without the Runaround
        </h2>

        {/* === 3-COLUMN GRID === */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* === CARD 1 === */}
          <div className="bg-bg-fourth rounded-lg p-8 pr-0 pb-0 space-y-4 text-center">
            <h3 className="text-[24px] font-bold pr-8">Files, Meet Flow</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              PDFs, images, videos, all in one<br /> space.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-files.webp"
                alt="Files dashboard preview"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
          </div>

          {/* === CARD 2 === */}
          <div className="bg-bg-fourth rounded-lg p-8 pr-0 pb-0 space-y-4 text-center">
            <h3 className="text-[24px] font-bold pr-8">Review & Collaborate</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              Real-time feedback, <br />version histories, team clarity.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-collaborate.webp"
                alt="Review and collaboration screen"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* === CARD 3 === */}
          <div className="bg-bg-fourth rounded-lg p-8 pr-0 pb-0 space-y-4 text-center">
            <h3 className="text-[24px] font-bold pr-8">Versions on Demand</h3>
            <p className="font-medium text-gray-400 leading-relaxed pr-8">
              Compare iterations like a design <br />time traveler.
            </p>
            <div className="mt-6 relative w-full h-auto">
              <Image
                src="/images/review-versions.webp"
                alt="Version comparison UI"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
