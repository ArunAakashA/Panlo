// components/Header.js
export default function Header() {
  return (
    <header className="py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.svg" alt="Panlo" className="h-8" />
        </div>

        {/* Nav - hidden on small screens */}
        <nav className="hidden md:flex items-center gap-8 text-slate-200">
          <a href="#features" className="text-sm hover:underline">Features</a>
          <a href="#how" className="text-sm hover:underline">How it Works</a>
          <a href="#testimonials" className="text-sm hover:underline">Testimonials</a>
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#book"
            className="inline-block px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-900 shadow-md"
          >
            Book a Demo
          </a>
          <a
            href="#login"
            className="inline-block px-4 py-2 rounded-full border border-slate-600 text-slate-200"
          >
            Login
          </a>
        </div>

        {/* mobile menu placeholder */}
        <button className="md:hidden" aria-label="Open menu">
          <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
