import { ExternalLink, Globe, Smartphone, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

const typeIcon = {
  web: Globe,
  mobile: Smartphone,
  work: Briefcase,
};

const typeLabel = {
  web: "Web",
  mobile: "Mobile",
  work: "Work",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-t">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((project) => {
            const Icon = typeIcon[project.type];
            return (
              <Card key={project.id} className="border shadow-none">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-base font-semibold leading-snug">
                      {project.name}
                    </CardTitle>
                    <div className="flex items-center gap-1 shrink-0">
                      {project.current && (
                        <Badge variant="outline" className="text-xs">
                          유지보수 중
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs gap-1">
                        <Icon size={11} />
                        {typeLabel[project.type]}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {project.urls.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.urls.map((u) => (
                        <Button
                          key={u.label}
                          variant="outline"
                          size="sm"
                          asChild
                          className="text-xs h-7"
                        >
                          <a
                            href={u.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={11} />
                            {u.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
