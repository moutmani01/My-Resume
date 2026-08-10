import { StatusBar } from "@/components/StatusBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopologyDivider } from "@/components/TopologyDivider";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Projects } from "@/components/Projects";
import { Milestones } from "@/components/Milestones";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <StatusBar />
      <Header />
      <main>
        <Hero />
        <TopologyDivider label="experience.log" />
        <ExperienceTimeline />
        <TopologyDivider label="projects.json" />
        <Projects />
        <TopologyDivider label="skills.matrix" />
        <Skills />
        <TopologyDivider label="milestones.timeline" />
        <Milestones />
        <TopologyDivider label="certifications.verified" />
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
