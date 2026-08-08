import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className={cn(
            "flex items-center gap-2 rounded-full px-4 py-2 font-display text-sm font-semibold tracking-tight transition-all",
            scrolled && "glass glow-ring",
          )}
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-[image:var(--gradient-accent)] text-[0.7rem] font-bold text-primary-foreground">
            A
          </span>
          <span>Alex Rivera</span>
        </a>

        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm md:flex",
            scrolled && "glass glow-ring",
          )}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-[image:var(--gradient-accent)] px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:inline-flex"
        >
          Contact
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="glass grid h-10 w-10 place-items-center rounded-full md:hidden"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <nav className="mx-6 mt-3 flex flex-col gap-1 rounded-2xl glass p-3 md:hidden">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
