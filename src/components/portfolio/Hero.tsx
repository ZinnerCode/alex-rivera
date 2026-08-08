import { useEffect, useRef, useState } from "react";
import heroDevices from "@/assets/hero-devices-v2.png";
import digitalMantle from "@/assets/digital-mantle.png";

const title = "Software Product Development Engineer";
const specialties = "Enterprise Software • Cross-Platform Applications • Artificial Intelligence";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" ref={glowRef} className="relative overflow-hidden">
      {/* Digital mantle: real image background ("manto digital") */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-[center_bottom]"
        style={{ backgroundImage: `url(${digitalMantle})` }}
        aria-hidden="true"
      />
      {/* Subtle dark gradient overlay for legibility (never hides the mantle) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(3,8,20,0.88) 0%, rgba(5,10,25,0.55) 50%, rgba(4,8,18,0.25) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="animate-ambient absolute -left-1/4 top-[-20%] h-[60vh] w-[60vh] rounded-full bg-primary/25 blur-[120px]" />
        <div className="animate-ambient absolute right-[-15%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-accent/20 blur-[120px]" style={{ animationDelay: "-6s" }} />
      </div>
      {/* Mouse glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 30%), oklch(0.68 0.16 258 / 0.12), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:pt-28">
        {/* Left */}
        <div
          className="reveal flex flex-col gap-7"
          style={{ opacity: mounted ? 1 : 0, transform: mounted ? "none" : "translateY(24px)" }}
        >
          <span className="glass w-fit rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Available for select projects & collaborations
          </span>

          <div className="flex flex-col gap-4">
            <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Alex Rivera</span>
            </h1>
            <div className="flex flex-col gap-2">
              <p className="font-display text-lg font-medium text-foreground sm:text-xl">
                {title}
              </p>
              <p className="font-display text-sm font-medium text-muted-foreground sm:text-base">
                {specialties}
              </p>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Building modern software under the ZinnerCode brand.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="rounded-full bg-[image:var(--gradient-accent)] px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right */}
        <div
          className="reveal relative"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(24px)",
            transitionDelay: "150ms",
          }}
        >
          {/* Transparent PNG: laptop + phone + icons, no card, no frame, no mask */}
          <div className="animate-float">
            <img
              src={heroDevices}
              width={1280}
              height={800}
              alt="Laptop and smartphone running engineering dashboards and a Flutter app, floating over a digital data field"
              className="h-full w-full object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
