import fs from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Header } from "@/components/Header";
import { StatusBar } from "@/components/StatusBar";
import { Footer } from "@/components/Footer";
import { profile, siteMeta } from "@/content/profile";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: profile.summary,
  alternates: { canonical: `${siteMeta.url}/about` },
};

async function getAboutContent() {
  const filePath = path.join(process.cwd(), "content", "about.mdx");
  return fs.readFile(filePath, "utf-8");
}

export default async function AboutPage() {
  const source = await getAboutContent();

  return (
    <>
      <StatusBar />
      <Header />
      <main className="container-page py-20 md:py-28">
        <p className="eyebrow hero-line mb-5">Long-Form</p>
        <h1
          className="hero-line mb-12 font-display text-4xl font-medium tracking-[-0.03em] text-ink md:text-6xl"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          About {profile.name}
        </h1>
        <article
          className="hero-line max-w-2xl space-y-5 text-base leading-relaxed text-ink-muted md:text-lg [&_h2]:mb-3 [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:tracking-tight [&_h2]:text-ink [&_strong]:font-medium [&_strong]:text-ink"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <MDXRemote source={source} />
        </article>
      </main>
      <Footer />
    </>
  );
}
