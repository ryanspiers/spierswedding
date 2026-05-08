"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function RsvpDrawer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-headings");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.boundingClientRect.bottom < 0);
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 px-6 pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] bg-white border-t border-stone-200 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href="https://withjoy.com/ryan-and-leigh-sept-26/rsvp"
        tabIndex={visible ? 0 : -1}
        className="block w-full text-center bg-navy text-white py-3.5 rounded-md text-sm tracking-wide hover:bg-navy/90 transition-colors"
      >
        RSVP
      </Link>
    </div>
  );
}
