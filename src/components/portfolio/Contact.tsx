import { Github, Linkedin, Mail, MessageCircle, Download } from "lucide-react";
import { Reveal } from "./Reveal";

const channels = [
  { icon: Github, label: "GitHub", href: "https://github.com/ZinnerCode" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:info.zinnercode@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "#" },
  { icon: Download, label: "CV", href: "#" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute -left-1/4 top-[-40%] h-[40vh] w-[40vh] rounded-full bg-primary/20 blur-[100px]" />
          <div className="pointer-events-none absolute -right-1/4 bottom-[-40%] h-[40vh] w-[40vh] rounded-full bg-accent/20 blur-[100px]" />

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
            Let's build something solid
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Open to engineering roles, product collaborations and ambitious ideas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:glow-ring"
              >
                <c.icon size={16} /> {c.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
