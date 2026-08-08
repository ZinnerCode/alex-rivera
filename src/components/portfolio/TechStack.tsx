import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { label: "Programming", items: ["Java", "C#", "Python"] },
  { label: "Mobile", items: ["Flutter", "Dart", "Android", "iOS", "Web"] },
  { label: "Backend", items: ["SQL", "Firebase", "Supabase"] },
  { label: "Cloud", items: ["Google Cloud", "Cloudflare"] },
  { label: "Engineering", items: ["NXOpen", "Teamcenter", "CAD", "Automation"] },
  { label: "Artificial Intelligence", items: ["OpenAI", "LangGraph", "Ollama"] },
];

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Tech stack"
        title="Technologies I Build With"
        description="The technologies, platforms and tools I use to design, build and deliver software solutions."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 60}>
            <div className="h-full rounded-2xl border border-border bg-card/60 p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {g.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
