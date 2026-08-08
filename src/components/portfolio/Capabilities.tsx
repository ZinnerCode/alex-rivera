import {
  Cog,
  Boxes,
  Brain,
  Smartphone,
  Layers,
  GitMerge,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const capabilities = [
  {
    icon: Cog,
    title: "Engineering Automation",
    desc: "Designing and implementing solutions that automate complex engineering processes end to end.",
  },
  {
    icon: Boxes,
    title: "CAD Development",
    desc: "Building advanced tooling and customizations with Siemens NX and NXOpen.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Integrating LLMs, OCR, computer vision and intelligent assistants into real workflows.",
  },
  {
    icon: Smartphone,
    title: "Cross-platform Applications",
    desc: "Crafting modern, polished applications with Flutter across mobile, web and desktop.",
  },
  {
    icon: Layers,
    title: "Software Architecture",
    desc: "Designing scalable, maintainable architectures that hold up as systems grow.",
  },
  {
    icon: GitMerge,
    title: "Process Optimization",
    desc: "Automating and refining business processes to remove friction and unlock speed.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="How I solve problems"
        title="Engineering capabilities, not just a tech list"
        description="The kinds of complex problems I'm equipped to solve — each backed by years of hands-on engineering."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 70}>
            <article className="group relative h-full overflow-hidden rounded-2xl bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-300 group-hover:bg-primary/25" />
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground">
                <c.icon size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
