import { useEffect, useRef } from "react";

/**
 * "Manto digital" — an ordered field of small dots arranged in parallel
 * horizontal wave lines (a "digital particle wave field").
 *
 * No flow fields, no random paths, no glowing blobs. Each row is a calm
 * sine wave; rows are stacked with perspective so they read as a tilted
 * cloth/ocean of points. The whole field drifts almost imperceptibly from
 * left to right. Colors stay blue/platinum with a faint iridescent green.
 *
 * Renders its own dark overlay (darker at the top) so hero text stays
 * legible. Sits behind content via absolute inset-0 + pointer-events-none.
 */
export function DigitalMantle({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // hue 0 -> deep blue, 0.55 -> platinum, 1 -> faint iridescent green
    const colorFor = (hue: number, alpha: number) => {
      let r: number, g: number, b: number;
      if (hue < 0.55) {
        const k = hue / 0.55;
        r = 120 + k * (215 - 120);
        g = 165 + k * (228 - 165);
        b = 240 - k * (240 - 232);
      } else {
        const k = (hue - 0.55) / 0.45;
        r = 205 - k * (205 - 130);
        g = 218 + k * (228 - 218);
        b = 222 - k * (222 - 175);
      }
      return `rgba(${r | 0},${g | 0},${b | 0},${alpha.toFixed(3)})`;
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    let raf = 0;
    let time = 0;

    const ROWS = 18; // parallel wave lines (layers of depth)

    const step = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";

      // The field lives in the middle/lower part of the hero, kept above the fold.
      const fieldTop = height * 0.36;
      const fieldBottom = height * 0.94;

      for (let r = 0; r < ROWS; r++) {
        const rowT = r / (ROWS - 1); // 0 back/top -> 1 front/bottom

        // gentle perspective: rows spread fairly evenly, a touch denser at the back
        const persp = Math.pow(rowT, 1.1);
        const y0 = fieldTop + (fieldBottom - fieldTop) * persp;

        // nearer rows: bigger dots, tighter spacing, brighter
        const dotSize = 1.1 + rowT * 1.7;
        const spacing = 14 + rowT * 12;
        const depthAlpha = 0.42 + rowT * 0.85;

        // wave parameters per row (parallel, ordered, horizontal)
        const amp = 6 + rowT * 16;
        const waveLen = 320 + rowT * 220;
        const phase = time + r * 0.16; // small offset per row keeps waves parallel



        for (let x = -spacing; x <= width + spacing; x += spacing) {
          // gentle left-to-right drift of the dot positions
          const sx = x + (time * (12 + rowT * 26)) % spacing;
          const wave = Math.sin(sx / waveLen * Math.PI * 2 + phase) * amp;
          const py = y0 + wave;
          if (py < 0 || py > height) continue;

          // hue: mostly blue/platinum, faint green sprinkled deterministically
          const hueNoise = Math.sin(sx * 0.013 + r * 1.7) * 0.5 + 0.5;
          const isGreen = ((Math.floor(sx / spacing) + r) % 11) === 0;
          const hue = isGreen ? 0.7 : hueNoise * 0.5;

          // brighter at wave crests for a subtle living surface
          const crest = 0.6 + 0.4 * (Math.sin(sx / waveLen * Math.PI * 2 + phase) * 0.5 + 0.5);
          const alpha = depthAlpha * crest * (isGreen ? 0.5 : 1);

          ctx.fillStyle = colorFor(hue, alpha);
          ctx.beginPath();
          ctx.arc(sx, py, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!reduceMotion) {
        time += 0.0016; // almost imperceptible motion
        raf = requestAnimationFrame(step);
      }
    };

    step();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="h-full w-full" />
      {/* Dark overlay: darker at the top for legibility, lets the field breathe lower */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,oklch(0.16_0.04_255_/_0.88)_22%,oklch(0.18_0.04_255_/_0.18)_55%,oklch(0.18_0.04_255_/_0.28)_100%)]" />
    </div>
  );
}
