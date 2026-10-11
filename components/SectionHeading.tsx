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
    <div className="mb-12 max-w-2xl md:mb-14">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl font-medium tracking-[-0.025em] text-ink md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
