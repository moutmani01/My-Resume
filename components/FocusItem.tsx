"use client";

import { useEffect, useRef, useState } from "react";

/** A list item that is at full strength only while it crosses mid-viewport. */
export function FocusItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [focused, setFocused] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry && setFocused(entry.isIntersecting),
      { rootMargin: "-30% 0px -30% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} className={className} data-focus={focused}>
      {children}
    </li>
  );
}
