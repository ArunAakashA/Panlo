"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  return (
    <header className="fixed w-full top-0 z-50 md:bg-[#030F18]/80 md:backdrop-blur-md md:border-b border-[#16323C]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* === Logo === */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Panlo Logo"
            width={100}
            height={32}
            className="h-7 md:h-8 w-auto"
            priority
          />
        </Link>

        {/* === Desktop Navigation === */}
        <nav className="hidden md:flex items-center gap-10 text-slate-300 md:pl-40">
          <Link href="#features" className="text-sm hover:text-white transition">
            Features
          </Link>
          <Link href="#how" className="text-sm hover:text-white transition">
            How it Works
          </Link>
          <Link href="#testimonials" className="text-sm hover:text-white transition">
            Testimonials
          </Link>
        </nav>

        {/* === Desktop CTAs === */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#book"
            className="inline-block px-5 py-2 rounded-full font-medium text-black bg-gradient-to-r from-secondary to-primary shadow-md hover:opacity-90 transition"
          >
            Book a Demo
          </Link>
          <Link
            href="#login"
            className="inline-block px-5 py-2 rounded-full font-medium border border-secondary text-secondary hover:bg-primary/10 transition"
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
        className={`md:hidden bg-[#030F18] border-t border-[#16323C] transition-all duration-300 ease-in-out ${
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
            className="mt-3 inline-block px-5 py-2 rounded-full font-medium text-[#030F18] bg-gradient-to-r from-[#0AB5A9] to-[#77F1FF] text-center"
          >
            Book a Demo
          </Link>
          <Link
            href="#login"
            onClick={() => setIsOpen(false)}
            className="inline-block px-5 py-2 rounded-full font-medium border border-[#0AB5A9] text-[#77F1FF] text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
