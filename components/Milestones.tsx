import { milestones } from "@/content/milestones";
import { SectionHeading } from "./SectionHeading";
import { cx } from "@/lib/utils";

const typeStyles: Record<string, { label: string; color: string }> = {
  role: { label: "ROLE", color: "text-signal-blue border-signal-blue/40" },
  education: { label: "EDU", color: "text-signal-amber border-signal-amber/40" },
  achievement: { label: "METRIC", color: "text-signal-green border-signal-green/40" },
  certification: { label: "CERT", color: "text-ink border-ink-faint/40" },
};

export function Milestones() {
  const sorted = [...milestones].sort((a, b) => a.sortKey - b.sortKey);

  return (
    <section id="milestones" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Changelog"
        title="Career Milestones"
        description="Roles, degrees, certifications, and measurable results, in the order they happened."
      />

      <ol className="border-t border-line">
        {sorted.map((m) => {
          const style = typeStyles[m.type] ?? typeStyles.role;
          return (
            <li
              key={m.id}
              className="grid gap-x-6 gap-y-2 border-b border-line py-4 transition-colors duration-200 hover:bg-surface/60 sm:grid-cols-[7.5rem_4.5rem_1fr] sm:items-baseline sm:px-3"
            >
              <span className="font-mono text-xs tabular-nums text-ink-faint">
                {m.date}
              </span>
              <span
                className={cx(
                  "w-fit rounded border px-2 py-0.5 font-mono text-[10px] tracking-wider",
                  style?.color,
                )}
              >
                {style?.label}
              </span>
              <div>
                <p className="text-base font-medium text-ink">{m.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                  {m.detail}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
