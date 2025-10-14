export default function SectionInsights() {
  return (
    <section className="bg-[#071a20] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* === MAIN HEADING === */}
        <h2 className="text-5xl font-semibold leading-tight text-center">
          <span className="text-[#0AB5A9]">Insights</span> That Work Harder
        </h2>

        {/* === ROW 1 === */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
          {/* LEFT SIDE (Mascot + Chat Image) */}
          <div>
            <img
              src="/images/AI-Marketing-Intelligence-Img.webp"
              alt="Mascot and chat illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT SIDE (Text Content) */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              AI Marketing Intelligence
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Past performance decoded into actionable next steps.
            </p>
          </div>
        </div>

        {/* === ROW 2 === */}
        <div className="pl-20 grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
          {/* LEFT SIDE (Text Content) */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              One Dashboard to Rule Them All
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Compare iterations like a design time traveler.
            </p>
          </div>

          {/* RIGHT SIDE (Dashboard Image) */}
          <div>
            <img
              src="/images/Dashboard.webp"
              alt="Dashboard preview"
              className="w-full h-auto rounded-xl border border-[#16323C] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
