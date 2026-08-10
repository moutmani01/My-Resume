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

      <div className="space-y-3">
        {sorted.map((m) => {
          const style = typeStyles[m.type] ?? typeStyles.role;
          return (
            <div
              key={m.id}
              className="flex flex-col gap-2 border-b border-base-border/70 py-3 sm:flex-row sm:items-baseline sm:gap-6"
            >
              <span className="w-24 shrink-0 font-mono text-xs text-ink-faint">{m.date}</span>
              <span
                className={cx(
                  "w-fit shrink-0 rounded border px-2 py-0.5 font-mono text-[10px] tracking-wider",
                  style?.color,
                )}
              >
                {style?.label}
              </span>
              <div>
                <p className="text-sm font-medium text-ink">{m.title}</p>
                <p className="text-sm text-ink-muted">{m.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
