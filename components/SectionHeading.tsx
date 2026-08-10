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
    <div className="mb-10 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-2xl font-medium text-ink md:text-3xl">{title}</h2>
      {description && <p className="mt-3 text-sm leading-relaxed text-ink-muted">{description}</p>}
    </div>
  );
}
