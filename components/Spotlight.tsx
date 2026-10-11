"use client";

/** A .panel whose highlight follows the cursor. Purely decorative. */
export function Spotlight({
  children,
  id,
  className,
  style,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <article
      id={id}
      className={`panel ${className ?? ""}`}
      style={style}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
      }}
    >
      {children}
    </article>
  );
}
