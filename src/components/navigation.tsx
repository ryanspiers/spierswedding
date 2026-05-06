"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Our Day", href: "#schedule" },
  { label: "Venue", href: "#venue" },
  { label: "Details", href: "#details" },
  { label: "FAQs", href: "#faqs" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fffbf5]">
      <div className="px-6 flex items-center justify-between h-[72px]">
        {/* Logo — replace src with your SVG when ready */}
        <Link href="/" className="relative w-8 h-8">
          <Image
            src="/logo.svg"
            alt="L&R"
            width={32}
            height={32}
            className="object-contain"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-navy hover:text-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/rsvp"
            className="text-sm tracking-wide bg-navy text-white px-5 py-2 rounded-md hover:bg-navy/90 transition-colors"
          >
            RSVP
          </Link>
        </div>

        {/* Mobile hamburger menu */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-[18px] h-[2px] bg-navy transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-navy transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-navy transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-peach border-t border-navy/10 animate-fade-in">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-navy hover:text-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/rsvp"
              onClick={() => setMenuOpen(false)}
              className="text-base text-center bg-navy text-white px-5 py-3 rounded-md hover:bg-navy/90 transition-colors mt-2"
            >
              RSVP
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
