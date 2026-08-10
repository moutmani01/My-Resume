import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-base-border">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow mb-4">Get In Touch</p>
        <h2 className="max-w-xl font-display text-2xl font-medium text-ink md:text-4xl">
          Open to enterprise AI, cloud, and DevSecOps architecture roles.
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded bg-signal-green px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-base transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-base-border px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-signal-blue hover:text-signal-blue"
          >
            {profile.linkedinLabel}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-ink-faint">
          {profile.phones.map((p) => (
            <span key={p}>{p}</span>
          ))}
          <span>{profile.location}</span>
        </div>

        <p className="mt-16 font-mono text-[10px] uppercase tracking-wider text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
