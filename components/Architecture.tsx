import type { ArchLayer } from "@/content/projects";
import { InView } from "./InView";

/** A project's high-level flow, drawn as stacked layers from top to bottom. */
export function Architecture({ layers }: { layers: ArchLayer[] }) {
  return (
    <InView once={false} rootMargin="0px" className="arch">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-faint">
        Architecture
      </p>
      <ol>
        {layers.map((layer, i) => (
          <li key={layer.label}>
            {i > 0 && (
              <span className="arch-link" data-flow={layer.flow} aria-hidden>
                <span
                  className="arch-pulse"
                  style={{ "--i": i } as React.CSSProperties}
                />
              </span>
            )}
            <div className="arch-layer">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-signal-green">
                {layer.label}
              </p>
              <ul className="flex flex-wrap gap-1.5">
                {layer.nodes.map((node) => (
                  <li key={node} className="arch-node">
                    {node}
                  </li>
                ))}
              </ul>
              {layer.note && (
                <p className="mt-2.5 text-xs leading-relaxed text-ink-muted">
                  {layer.note}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </InView>
  );
}
