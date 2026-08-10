export function TopologyDivider({ label }: { label?: string }) {
  return (
    <div className="container-page" aria-hidden>
      <div className="flex items-center gap-3 py-2">
        <span className="node-dot" />
        <div className="h-px flex-1 bg-gradient-to-r from-base-border via-base-border to-transparent" />
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-faint">
            {label}
          </span>
        )}
        <div className="h-px w-8 bg-base-border" />
      </div>
    </div>
  );
}
