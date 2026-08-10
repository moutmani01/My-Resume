import { skillGroups, languages } from "@/content/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Technical Matrix" title="Core Competencies" />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
          {skillGroups.map((group) => (
            <div key={group.category} className="rounded-md border border-base-border p-4">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-signal-green">
                {group.category}
              </p>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-ink-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-md border border-base-border p-4">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wider text-signal-blue">
            Languages
          </p>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="flex items-baseline justify-between gap-3">
                <span className="text-sm text-ink">{l.name}</span>
                <span className="text-right font-mono text-[11px] text-ink-faint">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
