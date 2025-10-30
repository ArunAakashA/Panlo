"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = `#${section.getAttribute("id")}`;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it Works" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 lg:bg-bg-primary/80 lg:backdrop-blur-md border-transparent h-[75px]">

      <div className="absolute bottom-0 left-0 w-full h-[1px] lg:bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mobile-bg mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Panlo Logo"
            width={120}
            height={40}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-10 text-slate-300 lg:pl-40">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg transition ${
                activeSection === link.href
                  ? "text-white font-semibold"
                  : "hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="#book"
            className="group relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-base font-semibold text-black bg-gradient-to-r from-secondary to-primary shadow-md hover:opacity-90 transition overflow-hidden"
          >
            <span className="flex items-center gap-2">
              <span className="transition-transform duration-300 translate-x-4 group-hover:-translate-x-0">
                Book a Demo
              </span>
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

          <Link
            href="#login"
            className="group relative inline-flex items-center justify-center px-5 py-2 rounded-full text-base font-semibold border border-secondary text-secondary hover:bg-primary/10 transition overflow-hidden"
          >
            <span className="flex items-center gap-2">
              <span className="transition-transform duration-300 translate-x-4 group-hover:-translate-x-0">
                Login
              </span>
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

        {/* Mobile Toggle */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden z-50 transition-colors duration-300 ${
            isOpen
              ? "text-white rounded-full" 
              : "text-slate-200"
          }`}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        onClick={handleOverlayClick} 
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "visible opacity-100 backdrop-blur-md bg-black/50"
            : "invisible opacity-0 backdrop-blur-0"
        }`}
      >
        <div
          className={`absolute top-0 right-0 w-[80%] h-[80vh] bg-bg-primary rounded-bl-3xl shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-0" : "-translate-y-5"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/logo.svg"
                alt="Panlo Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="px-6 pt-6 flex flex-col gap-6 text-slate-200 flex-grow">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg transition ${
                  activeSection === link.href
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-6 flex flex-col gap-3">
            <Link
              href="#book"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-black font-semibold"
            >
              Book a Demo
            </Link>
            <Link
              href="#login"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full border border-secondary text-secondary font-semibold"
            >
              Login
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
