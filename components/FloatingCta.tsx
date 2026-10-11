"use client";

import { useEffect, useState } from "react";

/** A contact pill that follows the reader between the hero and the footer. */
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;
    const seen = { hero: true, contact: false };
    const update = () => setVisible(!seen.hero && !seen.contact);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) seen.hero = entry.isIntersecting;
        if (entry.target === contact) seen.contact = entry.isIntersecting;
      }
      update();
    });
    observer.observe(hero);
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href="#contact"
      data-visible={visible}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className="floating-cta group"
    >
      Let's talk
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas text-signal-green">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
        >
          <path
            d="M2 7h10m0 0L8 3m4 4L8 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
