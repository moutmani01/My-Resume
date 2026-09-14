import { certifications } from "@/content/certifications";
import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="container-page py-20 md:py-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Verified Credentials"
          title="Certifications"
          description="Issued by Microsoft, IBM, Red Hat, VMware, and the Linux Professional Institute."
        />
        <a
          href={profile.credly}
          target="_blank"
          rel="noreferrer"
          className="rounded border border-base-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal-blue hover:text-signal-blue"
        >
          View Badges on Credly ↗
        </a>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <div
            key={c.id}
            className="flex flex-col justify-between rounded-md border border-base-border bg-base-surface p-4"
          >
            <div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-signal-amber">
                {c.category}
              </p>
              <p className="text-sm font-medium leading-snug text-ink">{c.name}</p>
            </div>
            <p className="mt-3 font-mono text-xs text-ink-faint">{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
