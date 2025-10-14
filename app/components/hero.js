// components/Hero.js
export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-teal-300">
          Your Marketing Workflow
          <br />
          Simplified
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-slate-300">
          From PDFs to video to live websites, Panlo lets you manage, review and sync everything in one place along with AI powered Dashboard.
        </p>
        
        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#book"
            className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 shadow-lg"
          >
            Book a Demo
          </a>

          <a
            href="#watch"
            className="px-6 py-3 rounded-full border border-slate-600 text-slate-200"
          >
            Watch the Video
          </a>
        </div>
      </div>

      {/* Decorative star or SVG (optional). Place absolute elements here if you exported them from Figma. */}
      <img src="/decor-star.svg" alt="" className="pointer-events-none absolute left-4 top-1/3 w-6 opacity-80" />
    </section>
  )
}
