import { projects } from "@/content/projects";
import { SectionHeading } from "./SectionHeading";
import { InView } from "./InView";
import { Spotlight } from "./Spotlight";
import { cx } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Case Studies"
        title="Selected Projects"
        description="Platform-building work chosen for measurable, repeatable outcomes rather than scope alone."
      />

      <InView className="grid gap-5 md:grid-cols-2" rootMargin="0px 0px -8% 0px">
        {projects.map((p, i) => {
          const featured = i === 0;
          return (
            <Spotlight
              key={p.id}
              className={cx("p-6 md:p-8", featured && "md:col-span-2")}
              style={{ "--i": Math.min(i, 4) } as React.CSSProperties}
            >
              <div
                data-reveal
                className={cx(
                  "relative flex h-full flex-col",
                  featured && "md:grid md:grid-cols-[1.1fr_0.9fr] md:gap-x-12",
                )}
              >
                <div>
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-mono text-xs text-signal-blue">{p.org}</p>
                    <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {p.period}
                    </span>
                  </div>
                  <h3
                    className={cx(
                      "mt-3 font-display font-medium tracking-tight text-ink",
                      featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl",
                    )}
                  >
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">
                    {p.description}
                  </p>

                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {p.metrics.map((m) => (
                      <div key={m.label} className="max-w-[11rem]">
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="font-display text-3xl font-medium tabular-nums tracking-tight text-signal-green">
                          {m.value}
                        </dd>
                        <dd className="mt-1 text-xs leading-snug text-ink-faint">
                          {m.label}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div
                  className={cx(
                    "flex flex-1 flex-col",
                    featured ? "mt-6 md:mt-0" : "mt-6",
                  )}
                >
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                    Approach
                  </p>
                  <ul className="space-y-2">
                    {p.approach.map((a) => (
                      <li
                        key={a}
                        className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-green"
                          aria-hidden
                        />
                        {a}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {p.stack.map((s) => (
                      <li key={s} className="chip">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Spotlight>
          );
        })}
      </InView>
    </section>
  );
}
