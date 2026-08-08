import React from "react";
import ReactDOM from "react-dom/client";

import "./styles.css";

import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Projects } from "@/components/portfolio/Projects";
import { CurrentFocus } from "@/components/portfolio/CurrentFocus";
import { Experience } from "@/components/portfolio/Experience";
import { TechStack } from "@/components/portfolio/TechStack";
import { Contact } from "@/components/portfolio/Contact";

function Portfolio() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <CurrentFocus />
      <Experience />
      <TechStack />
      <Contact />

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center gap-3">
          <p>© 2026 Alex Rivera</p>

          <p className="text-foreground/90">
            Software Product Development Engineer
          </p>

          <div className="flex items-center gap-2 text-[13px] text-muted-foreground/80 transition-all duration-300 hover:opacity-80 hover:brightness-110">
            <svg
              viewBox="0 0 80 28"
              className="h-4 w-auto text-primary"
              fill="currentColor"
              aria-hidden="true"
            >
              <text
                x="6"
                y="20"
                fontSize="14"
                fontWeight="700"
                fontFamily="Space Grotesk, ui-sans-serif, system-ui, sans-serif"
              >
                {"{"}
              </text>

              <text
                x="40"
                y="20"
                textAnchor="middle"
                fontSize="14"
                fontWeight="700"
                fontFamily="Space Grotesk, ui-sans-serif, system-ui, sans-serif"
              >
                ZC
              </text>

              <text
                x="74"
                y="20"
                textAnchor="end"
                fontSize="14"
                fontWeight="700"
                fontFamily="Space Grotesk, ui-sans-serif, system-ui, sans-serif"
              >
                {"}"}
              </text>
            </svg>

            <span>Built under the ZinnerCode brand</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
);