"use client";

import { useEffect, useState } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Africa/Casablanca",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/** Current time in Casablanca, so visitors can judge working-hours overlap. */
export function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums text-ink">{time ?? "--:--"} CASABLANCA</span>;
}
