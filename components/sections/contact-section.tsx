import { Mail, Github, Linkedin, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "huibeomjeong99@gmail.com",
    href: "mailto:huibeomjeong99@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/heebum1234",
    href: "https://github.com/heebum1234",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "SEOKHYEON JUNG",
    href: "https://www.linkedin.com/in/seokhyeon-jung-742320307/",
  },
  {
    icon: MessageCircle,
    label: "Discord",
    value: "heebum1234",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-20 border-t">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-10">Contact</h2>

        <div className="flex flex-col gap-5">
          {contacts.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-4">
              <Icon size={18} className="text-[var(--cat)] shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{label}</p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[var(--cat)] transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="text-sm">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
