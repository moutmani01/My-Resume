import { profile } from "@/content/profile";
import { LocalClock } from "./LocalClock";

export function StatusBar() {
  return (
    <div className="border-b border-line bg-surface/80">
      <div className="container-page flex flex-wrap items-center gap-x-8 gap-y-1.5 py-2.5 font-mono text-[11px] tracking-wide text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="node-dot" aria-hidden />
          <span className="text-ink-faint">STATUS</span>
          <span className="text-signal-green">AVAILABLE FOR OPPORTUNITIES</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-ink-faint">UPTIME</span>
          <span className="text-ink">{profile.yearsExperience}+ YRS</span>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <span className="text-ink-faint">REGION</span>
          <span className="text-ink">MA / WORLDWIDE</span>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <span className="text-ink-faint">STACK</span>
          <span className="text-ink">AZURE · AWS · K8S</span>
        </div>
        <div className="hidden items-center gap-2 lg:ml-auto lg:flex">
          <span className="text-ink-faint">LOCAL</span>
          <LocalClock />
        </div>
      </div>
    </div>
  );
}
