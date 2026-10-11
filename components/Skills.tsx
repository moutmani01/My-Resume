import { skillGroups, languages } from "@/content/skills";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="container-page py-20 md:py-28">
      <SectionHeading eyebrow="Technical Matrix" title="Core Competencies" />

      <dl className="border-t border-line">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="grid gap-x-8 gap-y-3 border-b border-line py-5 md:grid-cols-[15rem_1fr]"
          >
            <dt className="font-mono text-xs uppercase leading-7 tracking-wider text-signal-green">
              {group.category}
            </dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-surface px-3 py-1 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
        <div className="grid gap-x-8 gap-y-3 border-b border-line py-5 md:grid-cols-[15rem_1fr]">
          <dt className="font-mono text-xs uppercase leading-7 tracking-wider text-signal-blue">
            Spoken Languages
          </dt>
          <dd>
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {languages.map((l) => (
                <li key={l.name}>
                  <p className="text-sm font-medium text-ink">{l.name}</p>
                  <p className="font-mono text-xs text-ink-faint">{l.level}</p>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </section>
  );
}
