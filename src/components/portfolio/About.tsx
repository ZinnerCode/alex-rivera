import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          About
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-snug sm:text-4xl">
          A software engineer who turns complex engineering problems into reliable,
          well-architected software.
        </h2>
      </Reveal>
      <div className="mt-8 grid gap-6 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
        <Reveal delay={120}>
          <p>
            Over the past 15+ years I've helped global engineering organizations
            solve complex business and technical challenges through software,
            automation and system integration. My work has always been driven by
            one goal: building reliable solutions that create real value.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p>
            Today I'm applying that same engineering mindset to modern software
            product development, combining cross-platform technologies, cloud
            platforms and artificial intelligence to build scalable applications
            ready for the next generation of digital products.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
