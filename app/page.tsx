import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopologyDivider } from "@/components/TopologyDivider";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Milestones } from "@/components/Milestones";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { FloatingCta } from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <StatusBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <TopologyDivider label="experience.log" />
        <ExperienceTimeline />
        <TopologyDivider label="projects.json" />
        <Projects />
        <TopologyDivider label="services.catalog" />
        <Services />
        <TopologyDivider label="skills.matrix" />
        <Skills />
        <TopologyDivider label="milestones.timeline" />
        <Milestones />
        <TopologyDivider label="certifications.verified" />
        <Certifications />
      </main>
      <Footer />
      <FloatingCta />
    </>
  );
}
