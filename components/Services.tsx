import { services, engagements, engagementTerms } from "@/content/services";
import { profile } from "@/content/profile";
import { SectionHeading } from "./SectionHeading";
import { InView } from "./InView";

export function Services() {
  return (
    <section id="services" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="For Businesses"
        title="How I Can Help"
        description="Five things I build and run for clients, each backed by work shown on this page."
      />

      <InView>
        <ul className="border-t border-line">
          {services.map((service, i) => (
            <li
              key={service.name}
              data-reveal
              style={{ "--i": i } as React.CSSProperties}
              className="grid gap-x-10 gap-y-2 border-b border-line py-6 transition-colors duration-200 hover:bg-surface/60 md:grid-cols-[1fr_1.2fr] md:px-3"
            >
              <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                {service.name}
              </h3>
              <div>
                <p className="text-base leading-relaxed text-ink-muted">
                  {service.outcome}
                </p>
                <a
                  href={service.proof.href}
                  className="group mt-2 inline-flex items-center gap-2 font-mono text-xs text-signal-blue transition-colors hover:text-signal-green"
                >
                  <span className="text-ink-faint">Proof</span>
                  {service.proof.label}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                    className="transition-transform duration-200 ease-out group-hover:translate-x-0.5"
                  >
                    <path
                      d="M2 7h10m0 0L8 3m4 4L8 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </InView>

      <div className="mt-16 grid gap-x-12 gap-y-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-signal-green">
            Ways to work together
          </h3>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {engagements.map((e) => (
              <div key={e.name}>
                <dt className="text-base font-medium text-ink">{e.name}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {e.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="self-start rounded-xl border border-line bg-surface p-6">
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal-green">
            Contracting
          </h3>
          <p className="text-sm leading-relaxed text-ink">{engagementTerms.location}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.businessEntities.map((entity) => (
              <li
                key={entity.label}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {entity.region} — {entity.label}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            Contract through whichever entity suits your procurement process.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {engagementTerms.bookingUrl && (
              <a
                href={engagementTerms.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Book a call
              </a>
            )}
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`}
              className={engagementTerms.bookingUrl ? "btn btn-ghost" : "btn btn-primary"}
            >
              Email me about a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
