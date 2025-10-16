"use client";

export default function SectionVideo() {
  return (
    <section className="bg-bg-primary text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden rounded-2xl border border-[#16323C]">
          <video
            className="w-full h-auto object-cover block"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/video-overlay.webp"
          >
            <source src="/videos/dashboard-showcase.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
