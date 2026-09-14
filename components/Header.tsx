"use client";

import { useState } from "react";
import { profile } from "@/content/profile";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#milestones", label: "Milestones" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-base-border bg-base/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="/" className="font-display text-sm font-medium tracking-tight text-ink">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-7 font-mono text-xs uppercase tracking-wider text-ink-muted md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-signal-green">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded border border-base-border px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-signal-green hover:text-signal-green md:inline-block"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="rounded border border-base-border p-2 text-ink md:hidden"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path
                  d="M4 4L14 14M14 4L4 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M2 5H16M2 9H16M2 13H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <ul className="flex flex-col gap-1 border-t border-base-border px-6 py-4 font-mono text-xs uppercase tracking-wider text-ink-muted md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 transition-colors hover:text-signal-green"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setMenuOpen(false)}
              className="block py-2 transition-colors hover:text-signal-green"
            >
              Email Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
