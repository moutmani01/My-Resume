import { profile } from "@/content/profile";

const metrics = [
  { label: "STATUS", value: "AVAILABLE FOR OPPORTUNITIES", tone: "green" as const },
  { label: "UPTIME", value: `${profile.yearsExperience}+ YRS` },
  { label: "REGION", value: "FR / MA" },
  { label: "STACK", value: "AZURE · AWS · K8S" },
];

export function StatusBar() {
  return (
    <div className="border-b border-base-border bg-base-surface/80 backdrop-blur">
      <div className="container-page flex flex-wrap items-center gap-x-8 gap-y-2 py-2.5 font-mono text-[11px] tracking-wide text-ink-muted">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-2">
            {m.tone === "green" && <span className="node-dot" aria-hidden />}
            <span className="text-ink-faint">{m.label}</span>
            <span className={m.tone === "green" ? "text-signal-green" : "text-ink"}>
              {m.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
