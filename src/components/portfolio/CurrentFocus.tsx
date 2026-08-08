import { Smartphone, Database, Sparkles, Cloud } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    icon: Smartphone,
    title: "Flutter",
    sub: "Cross-platform Apps",
    desc: "Shipping refined mobile, web and desktop apps from a single Dart codebase.",
  },
  {
    icon: Database,
    title: "Supabase",
    sub: "Backend & Database",
    desc: "Auth, realtime data and edge logic backing modern product experiences.",
  },
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    sub: "LLMs · Vision",
    desc: "Generative AI, OCR and computer vision woven into useful, reliable features.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    sub: "Automation",
    desc: "Scalable, automated infrastructure on Cloudflare and modern cloud platforms.",
  },
];

export function CurrentFocus() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Current focus"
        title="Currently building"
        description="Where my engineering experience is evolving — the tools and ideas I'm actively shipping with."
      />

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 70}>
            <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:glow-ring">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-300 group-hover:bg-primary/25" />
              <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-[image:var(--gradient-accent)] group-hover:text-primary-foreground">
                <it.icon size={20} />
              </div>
              <h3 className="font-display text-base font-semibold">{it.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">{it.sub}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
