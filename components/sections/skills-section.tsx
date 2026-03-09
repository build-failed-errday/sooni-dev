import { Smartphone, Code2, Globe, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mobile, languages, frameworks, databases } from "@/data/skill-items";

const groups = [
  {
    icon: Smartphone,
    label: "Mobile",
    items: mobile,
  },
  {
    icon: Code2,
    label: "Languages",
    items: languages,
  },
  {
    icon: Globe,
    label: "Web / Backend",
    items: frameworks,
  },
  {
    icon: Database,
    label: "Database",
    items: databases,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Skills</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {groups.map(({ icon: Icon, label, items }) => (
            <div key={label}>
              <div className="flex items-center gap-2 mb-3">
                <Icon size={16} className="text-[var(--cat)]" />
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge
                    key={String(item.skillName)}
                    variant="secondary"
                  >
                    {String(item.skillName)}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
