"use client";

export default function SectionVideo() {
  return (
    <section className="bg-bg-primary text-white pt-30 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-xl p-[6px] bg-gradient-to-r from-primary via-primary to-primary shadow-[0_0_64px_-1px_#0AB5A940]">
          <div className="rounded-xl overflow-hidden bg-primary">
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
      </div>
    </section>
  );
}
