import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <p className="text-sm font-mono text-muted-foreground mb-4 tracking-widest uppercase">
        정석현
      </p>

      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-4 text-[var(--cat)]">
        SEOKHYEON
        <br />
        JUNG
      </h1>

      <p className="text-lg sm:text-xl text-muted-foreground mb-3">
        Jr. Fullstack Developer
      </p>

      <p className="text-sm sm:text-base italic text-muted-foreground mb-10">
        &ldquo;programming is work of art&rdquo;
      </p>

      <div className="flex items-center gap-3">
        <Button variant="outline" asChild>
          <a
            href="https://github.com/heebum1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            GitHub
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="#projects">
            <ExternalLink size={16} />
            Projects
          </a>
        </Button>
      </div>
    </section>
  );
}
