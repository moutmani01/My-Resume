import { profile } from "@/content/profile";

const navItems = [
  { href: "/about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#milestones", label: "Milestones" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-base-border bg-base/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-sm font-medium tracking-tight text-ink">
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
        <a
          href={`mailto:${profile.email}`}
          className="rounded border border-base-border px-3 py-1.5 font-mono text-xs text-ink transition-colors hover:border-signal-green hover:text-signal-green"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
