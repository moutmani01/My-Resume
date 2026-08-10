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
        <p className="eyebrow mb-4">Long-Form</p>
        <h1 className="mb-10 font-display text-3xl font-medium text-ink md:text-4xl">
          About {profile.name}
        </h1>
        <article
          className="prose-invert max-w-2xl space-y-5 text-sm leading-relaxed text-ink-muted [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-ink [&_strong]:text-ink"
        >
          <MDXRemote source={source} />
        </article>
      </main>
      <Footer />
    </>
  );
}
