"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { cx } from "@/lib/utils";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#experience", label: "Experience", section: "experience" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#milestones", label: "Milestones", section: "milestones" },
  { href: "/#certifications", label: "Certifications", section: "certifications" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    const sections = navItems
      .map((item) => item.section && document.getElementById(item.section))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="/"
          className="flex items-center gap-2.5 font-display text-sm font-medium tracking-tight text-ink"
        >
          <span className="node-dot" aria-hidden />
          {profile.name}
        </a>
        <ul className="hidden items-center gap-6 font-mono text-xs uppercase tracking-wider lg:flex">
          {navItems.map((item) => {
            const isActive = Boolean(item.section) && item.section === active;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cx(
                    "relative py-2 transition-colors duration-200 hover:text-ink",
                    isActive ? "text-ink" : "text-ink-muted",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={cx(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-signal-green transition-transform duration-300 ease-out",
                      isActive ? "scale-x-100" : "scale-x-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="/#contact"
            className="btn btn-ghost hidden min-h-9 px-4 lg:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink lg:hidden"
          >
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
        <ul
          id="mobile-nav"
          className="flex flex-col border-t border-line px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink-muted lg:hidden"
        >
          {[...navItems, { href: "/#contact", label: "Contact" }].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 transition-colors hover:text-signal-green"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      <span className="scroll-progress" aria-hidden />
    </header>
  );
}
