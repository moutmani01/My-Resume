import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-line">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_100%,black,transparent)]" />
      <div className="aurora -bottom-72 left-[15%] h-[40rem] w-[52rem] text-signal-green/15" />

      <div className="container-page relative py-20 md:py-28">
        <p className="eyebrow mb-5">Get In Touch</p>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-ink md:text-6xl">
          Open to enterprise AI, cloud, and DevSecOps architecture roles.
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="btn btn-primary normal-case tracking-normal"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <a href="/resume.pdf" download className="btn btn-ghost">
            Download résumé
          </a>
          <a href="/cv-fr.pdf" download className="btn btn-ghost">
            CV en français
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-ink-muted">
          {profile.phones.map((p) => (
            <a
              key={p}
              href={`tel:${p.replace(/\s/g, "")}`}
              className="transition-colors hover:text-ink"
            >
              {p}
            </a>
          ))}
          <span>{profile.location}</span>
        </div>

        <p className="mt-16 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
