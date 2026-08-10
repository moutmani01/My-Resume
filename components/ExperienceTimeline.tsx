import { experience } from "@/content/experience";
import { SectionHeading } from "./SectionHeading";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Deployment Log"
        title="Professional Experience"
        description="A chronological record of roles, responsibilities, and the platforms shipped along the way."
      />

      <ol className="relative space-y-12 border-l border-base-border pl-8">
        {experience.map((role) => (
          <li key={role.id} className="relative">
            <span
              className={`absolute -left-[2.28rem] top-1.5 h-3 w-3 rounded-full border-2 border-base ${
                role.current ? "bg-signal-green" : "bg-base-border"
              }`}
              aria-hidden
            />
            <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-medium text-ink md:text-xl">
                {role.title} <span className="text-ink-muted">— {role.company}</span>
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                {role.start} → {role.end}
              </span>
            </div>
            <p className="mb-4 font-mono text-xs text-ink-faint">{role.location}</p>
            <p className="mb-5 max-w-2xl text-sm leading-relaxed text-ink-muted">{role.summary}</p>

            <div className="grid gap-4 md:grid-cols-2">
              {role.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-md border border-base-border bg-base-surface p-4"
                >
                  <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-signal-green">
                    {h.label}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-muted">{h.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {role.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-base-border px-2 py-0.5 font-mono text-[10px] text-ink-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
