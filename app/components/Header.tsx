"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/gnss-interference", label: "GNSS Interference" },
  { href: "/team", label: "Team" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy-700/50 bg-navy-950/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-navy-800">
            <svg
              className="h-5 w-5 text-cyan-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-wide text-white">
            MIRAAS<span className="text-cyan-400"> Space</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "border-b-2 border-cyan-400 pb-0.5 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="mailto:info@miraastech.com"
            className="rounded-full border border-cyan-400 px-5 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-navy-950"
          >
            info@miraastech.com
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-navy-800 md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-5 w-5 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-navy-700/50 bg-navy-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-navy-800 text-white"
                    : "text-gray-400 hover:bg-navy-800 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:info@miraastech.com"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full border border-cyan-400 px-5 py-2 text-center text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-navy-950"
            >
              info@miraastech.com
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
