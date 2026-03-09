import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/sections/hero-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-xs text-muted-foreground">
          © 2025 SEOKHYEON JUNG — sooni.dev
        </div>
      </footer>
    </>
  );
}
