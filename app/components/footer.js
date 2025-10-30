import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-gray-400 pt-16 pb-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Panlo Logo"
                width={120}
                height={40}
                className="w-28 md:w-32 h-auto"
                priority
              />
            </Link>
          </div>

          <div className="flex gap-8 text-sm md:text-base font-medium">
            <a
              href="#features"
              className="hover:text-white transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how"
              className="hover:text-white transition-colors duration-200"
            >
              How it Works
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <p className="text-white text-base font-medium">Crafted by</p>
            <Image
              src="/panorbit-logo.svg"
              alt="Panorbit logo"
              width={112}
              height={36}
              className="w-24 md:w-28 h-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-white text-base font-medium text-center sm:text-right">
            <p>© Panlo 2025 All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href="#terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#privacy"
                className="hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
