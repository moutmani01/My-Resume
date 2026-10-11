import { profile } from "@/content/profile";
import { HeroTopology } from "./HeroTopology";

const line = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_0%,black,transparent)]" />
      <div className="aurora -right-48 -top-64 h-[44rem] w-[44rem] text-signal-green/20" />
      <div className="aurora -left-64 top-24 h-[40rem] w-[40rem] text-signal-blue/20" />

      <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <p className="eyebrow hero-line mb-6 flex items-start gap-2.5" style={line(0)}>
            <span className="node-dot mt-1" />
            <span>SYSTEM ONLINE — {profile.location.toUpperCase()}</span>
          </p>
          <h1
            className="hero-line font-display text-5xl font-medium leading-[1.02] tracking-[-0.035em] text-ink sm:text-6xl md:text-7xl xl:text-[5.5rem]"
            style={line(1)}
          >
            {profile.name}
          </h1>
          <p
            className="hero-line mt-5 max-w-2xl font-mono text-sm uppercase leading-relaxed tracking-[0.14em] text-signal-blue md:text-lg"
            style={line(2)}
          >
            {profile.role}
          </p>
          <p
            className="hero-line mt-6 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl"
            style={line(3)}
          >
            {profile.tagline}
          </p>

          <div
            className="hero-line mt-9 flex flex-wrap items-center gap-3"
            style={line(4)}
          >
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="/resume.pdf" download className="btn btn-ghost">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2v8m0 0L4.5 6.5M8 10l3.5-3.5M2.5 13.5h11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Download résumé
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              GitHub
            </a>
          </div>

          <ul className="hero-line mt-9 flex max-w-2xl flex-wrap gap-2" style={line(5)}>
            {profile.focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <HeroTopology />
        </div>
      </div>
    </section>
  );
}
