import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-base-border">
      <div className="absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="container-page relative py-20 md:py-28">
        <div className="animate-fade-up">
          <p className="eyebrow mb-5 flex items-center gap-2">
            <span className="node-dot" />
            SYSTEM ONLINE — {profile.location.toUpperCase()}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm uppercase tracking-[0.15em] text-signal-blue md:text-base">
            {profile.role}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-base-border bg-base-surface px-3 py-1 font-mono text-[11px] text-ink-muted"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded bg-signal-green px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-base transition-opacity hover:opacity-90"
            >
              View Experience
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-base-border px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal-blue hover:text-signal-blue"
            >
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
