import { Building2, Code2, Brain } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  {
    title: "Enterprise Engineering",
    summary:
      "Large-scale software and automation systems for global engineering organizations.",
    tags: ["Software Architecture", "Automation", "Systems Integration", "Aerospace", "Manufacturing"],
    icon: Building2,
  },
  {
    title: "Software Product Development",
    summary:
      "Building scalable software solutions by combining enterprise engineering expertise with modern cross-platform development.",
    tags: ["Flutter", "Dart", "Mobile", "Web", "Desktop"],
    icon: Code2,
  },
  {
    title: "AI & Modern Solutions",
    summary:
      "AI-powered features and cloud automation for modern product experiences.",
    tags: ["Generative AI", "Computer Vision", "OCR", "Cloud Services"],
    icon: Brain,
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Experience"
        title="A track record of building real systems"
        description="A focus on impact, architecture and the problems solved — not a list of duties."
      />

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} delay={i * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-b from-card/90 to-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-300 group-hover:bg-primary/25" />
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl font-semibold text-primary">
                  {item.title}
                </h3>

                <div className="mt-4 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent" />

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground transition-colors duration-300 hover:border-primary/25 hover:text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}



