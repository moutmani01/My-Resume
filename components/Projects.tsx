import { projects } from "@/content/projects";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Case Studies"
        title="Selected Projects"
        description="Platform-building work chosen for measurable, repeatable outcomes rather than scope alone."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="flex flex-col rounded-lg border border-base-border bg-base-surface p-6 transition-colors hover:border-signal-blue/50"
          >
            <div className="mb-1 flex items-center justify-between gap-4">
              <h3 className="font-display text-lg font-medium text-ink">{p.name}</h3>
              <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                {p.period}
              </span>
            </div>
            <p className="mb-4 font-mono text-xs text-signal-blue">{p.org}</p>
            <p className="mb-4 text-sm leading-relaxed text-ink-muted">{p.description}</p>

            <div className="mb-4">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
                Approach
              </p>
              <ul className="space-y-1.5">
                {p.approach.map((a) => (
                  <li key={a} className="flex gap-2 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-green" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4 mt-auto grid grid-cols-2 gap-3 border-t border-base-border pt-4 sm:grid-cols-3">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-display text-xl font-medium text-signal-green">{m.value}</p>
                  <p className="text-[11px] leading-tight text-ink-faint">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-base-border px-2 py-0.5 font-mono text-[10px] text-ink-faint"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
