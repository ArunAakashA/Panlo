"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <header className="fixed w-full top-0 z-50 md:bg-bg-primary/80 md:backdrop-blur-md md:border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between mobile-bg">
        {/* === Logo === */}
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

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-10 text-slate-300 md:pl-40">
          <Link href="#features" className="text-lg hover:text-white transition">
            Features
          </Link>
          <Link href="#how" className="text-lg hover:text-white transition">
            How it Works
          </Link>
          <Link href="#testimonials" className="text-lg hover:text-white transition">
            Testimonials
          </Link>
        </nav>

        {/* === Desktop CTAs === */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#book"
            className="inline-block px-5 py-2.5 rounded-full text-base font-semibold text-black bg-gradient-to-r from-secondary to-primary shadow-md hover:opacity-90 transition"
          >
            Book a Demo
          </Link>
          <Link
            href="#login"
            className="inline-block px-5 py-2 rounded-full text-base font-semibold border border-secondary text-secondary hover:bg-primary/10 transition"
          >
            Login
          </Link>
        </div>

        {/* === Mobile Menu Toggle === */}
        <button
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-200 z-50"
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

      {/* === Mobile Menu === */}
      <div
        ref={menuRef}
        className={`md:hidden mobile-bg bg-bg-primary border-t border-white/10 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 text-slate-200">
          <Link
            href="#features"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#how"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            How it Works
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="hover:text-white"
          >
            Testimonials
          </Link>
          <Link
            href="#book"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-block text-xs weight-semibold px-5 py-2 rounded-full text-black bg-gradient-to-r from-primary to-secondary text-center"
          >
            Book a Demo
          </Link>
          <Link
            href="#login"
            onClick={() => setIsOpen(false)}
            className="inline-block px-5 py-2 text-xs weight-semibold rounded-full font-medium border border-secondary text-secondary text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
