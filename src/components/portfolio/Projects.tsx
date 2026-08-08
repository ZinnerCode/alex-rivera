import { ExternalLink, Github, FileText } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import projectCad from "@/assets/project-cad.jpg";
import projectAi from "@/assets/project-ai.jpg";
import projectFlutter from "@/assets/project-flutter.jpg";

const projects = [
  {
    image: projectCad,
    title: "NX Automation Suite",
    desc: "A platform that automates repetitive CAD engineering tasks in Siemens NX, cutting design cycle time dramatically through parameter-driven generation.",
    tech: ["NXOpen", "C#", "SQL", "PLM"],
  },
  {
    image: projectAi,
    title: "Intelligent Document Engine",
    desc: "An AI assistant combining OCR, computer vision and LLMs to extract, understand and act on technical documents in real time.",
    tech: ["Python", "OpenAI", "Ollama", "LangGraph"],
  },
  {
    image: projectFlutter,
    title: "Cross-platform Field App",
    desc: "A modern Flutter application with offline-first sync, real-time data and a refined UI — running from a single codebase across mobile and web.",
    tech: ["Flutter", "Dart", "Supabase", "Cloudflare"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Featured projects"
        title="Software built to solve real problems"
        description="A selection of products and systems where engineering depth meets modern execution."
      />

      <div className="mt-16 flex flex-col gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <article className="group grid overflow-hidden rounded-3xl bg-card transition-all duration-300 hover:glow-ring lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[image:var(--gradient-accent)] opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-30" />
                <img
                  src={p.image}
                  width={1280}
                  height={800}
                  loading="lazy"
                  alt={`${p.title} interface`}
                  className="h-full min-h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
                <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
                  >
                    <ExternalLink size={15} /> Demo
                  </a>
                  <a
                    href="#"
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-secondary"
                  >
                    <Github size={15} /> GitHub
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <FileText size={15} /> Case Study
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
