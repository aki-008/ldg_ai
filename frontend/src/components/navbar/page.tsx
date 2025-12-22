'use client';

import Link from "next/link";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/legal-logo.svg" alt="Legal Logo" className="h-10 w-10 drop-shadow-lg" />
          <span className="text-2xl font-extrabold tracking-widest text-white uppercase">LDG</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-base">
          <Link
            href="#how-it-works"
            className="text-white hover:text-black hover:bg-white px-4 py-2 rounded transition font-semibold"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="text-white hover:text-black hover:bg-white px-4 py-2 rounded transition font-semibold"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-white hover:text-black hover:bg-white px-4 py-2 rounded transition font-semibold"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:block text-white hover:text-black hover:bg-white px-4 py-2 rounded transition font-semibold"
          >
            Login
          </Link>
          <Link
            href="/generate"
            className="rounded-lg bg-white text-black px-6 py-2 font-bold border-2 border-white hover:bg-black hover:text-white hover:border-white transition shadow-md"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
}
