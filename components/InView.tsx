"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Marks its wrapper with data-inview so CSS can run reveals and pause loops.
 * `once` keeps the flag on after the first intersection (for entrances);
 * without it the flag follows visibility (for looping animations).
 */
export function InView({
  children,
  className,
  once = true,
  rootMargin = "0px 0px -12% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setInView(entry.isIntersecting);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  return (
    <div ref={ref} className={className} data-inview={inView}>
      {children}
    </div>
  );
}
