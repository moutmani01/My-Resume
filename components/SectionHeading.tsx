import { InView } from "./InView";
import { SplitText } from "./SplitText";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <InView className="mb-12 max-w-2xl md:mb-14">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-4xl font-medium tracking-[-0.03em] text-ink md:text-6xl">
        <SplitText text={title} />
      </h2>
      {description && (
        <p
          data-reveal
          style={{ "--i": 3 } as React.CSSProperties}
          className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg"
        >
          {description}
        </p>
      )}
    </InView>
  );
}
