import { InView } from "./InView";

export function TopologyDivider({ label }: { label?: string }) {
  return (
    <InView className="container-page">
      <div className="flex items-center gap-3 py-2" aria-hidden>
        <span className="node-dot" />
        <div className="divider-line h-px flex-1 bg-gradient-to-r from-signal-green/50 via-line to-transparent" />
        {label && (
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-faint">
            {label}
          </span>
        )}
        <div className="h-px w-8 bg-line" />
      </div>
    </InView>
  );
}
