import { skillGroups } from "@/content/skills";

const items = skillGroups.flatMap((group) => group.items);

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 whitespace-nowrap">
          {item}
          <span className="h-1 w-1 rounded-full bg-signal-green" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

/** A slow ticker of the tools named in the skills section. */
export function Marquee() {
  return (
    <div className="marquee border-b border-line bg-surface/40 py-5 font-display text-xl text-ink-muted md:text-2xl">
      <Row />
      <Row hidden />
    </div>
  );
}
