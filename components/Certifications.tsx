import { certifications } from "@/content/certifications";
import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";
import { InView } from "./InView";

export function Certifications() {
  return (
    <section id="certifications" className="container-page py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <SectionHeading
          eyebrow="Verified Credentials"
          title="Certifications"
          description="Issued by Microsoft, IBM, Red Hat, VMware, and the Linux Professional Institute."
        />
        <a
          href={profile.credly}
          target="_blank"
          rel="noreferrer"
          className="btn btn-ghost mb-12 md:mb-14"
        >
          View badges on Credly
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M3 9l6-6M4.5 3H9v4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <InView>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <li
              key={c.id}
              data-reveal
              style={{ "--i": i % 6 } as React.CSSProperties}
              className="flex flex-col justify-between rounded-lg border border-line bg-surface p-5"
            >
              <div>
                <p className="mb-2.5 font-mono text-[11px] uppercase tracking-wider text-signal-amber">
                  {c.category}
                </p>
                <p className="text-base font-medium leading-snug text-ink">{c.name}</p>
              </div>
              <p className="mt-4 font-mono text-xs text-ink-faint">{c.issuer}</p>
            </li>
          ))}
        </ul>
      </InView>
    </section>
  );
}
