export default function SectionVideo() {
  return (
    <section className="bg-[#071a20] text-white">
      <div className="max-w-7xl mx-auto">
        {/* === VIDEO WRAPPER === */}

          {/* Video element */}
          <video
            className="w-full h-auto rounded-2xl object-cover relative z-10"
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
    </section>
  );
}
