import { experience } from "@/content/experience";
import { SectionHeading } from "./SectionHeading";
import { cx } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Deployment Log"
        title="Professional Experience"
        description="A chronological record of roles, responsibilities, and the platforms shipped along the way."
      />

      <ol className="relative space-y-16 border-l border-line pl-7 md:pl-10">
        <span className="spine-fill" aria-hidden />
        {experience.map((role) => (
          <li key={role.id} className="relative">
            <span
              className={cx(
                "absolute top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-canvas",
                "-left-7 md:-left-10",
                role.current ? "bg-signal-green" : "bg-ink-faint",
              )}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                {role.title}
              </h3>
              <span className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                {role.start} → {role.end}
              </span>
            </div>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <span className="font-medium text-signal-blue">{role.company}</span>
              <span className="font-mono text-xs text-ink-faint">{role.location}</span>
              {role.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-signal-green/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-signal-green">
                  <span className="node-dot h-1.5 w-1.5" aria-hidden />
                  Current
                </span>
              )}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted">
              {role.summary}
            </p>

            <dl className="mt-6 border-t border-line">
              {role.highlights.map((h) => (
                <div
                  key={h.label}
                  className="grid gap-x-8 gap-y-1.5 border-b border-line py-4 md:grid-cols-[15rem_1fr]"
                >
                  <dt className="font-mono text-xs uppercase leading-relaxed tracking-wider text-signal-green">
                    {h.label}
                  </dt>
                  <dd className="max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {h.detail}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {role.stack.map((s) => (
                <li key={s} className="chip">
                  {s}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
