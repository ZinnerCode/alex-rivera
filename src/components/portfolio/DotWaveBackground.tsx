import { useEffect, useRef } from "react";

/**
 * "Manto digital" — a 3D particle terrain rendered on canvas.
 * A grid of points is displaced by layered sine waves to form soft hills,
 * then projected with perspective so it reads as a living data surface
 * (not a flat grid). Colors: deep blue base, platinum crests, subtle green.
 */
export function DotWaveBackground({ className = "" }: { className?: string }) {
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

    resize();
    window.addEventListener("resize", resize);

    // color by height: low = deep blue, mid = platinum-blue, high = subtle green
    const colorAt = (t: number): string => {
      // t in [0,1]
      if (t < 0.6) {
        const k = t / 0.6; // blue -> platinum
        const r = Math.round(60 + k * (190 - 60));
        const g = Math.round(110 + k * (205 - 110));
        const b = Math.round(220 - k * (220 - 215));
        return `${r},${g},${b}`;
      }
      const k = (t - 0.6) / 0.4; // platinum -> green tornasol
      const r = Math.round(190 - k * (190 - 120));
      const g = Math.round(205 + k * (225 - 205));
      const b = Math.round(215 - k * (215 - 165));
      return `${r},${g},${b}`;
    };

    // Terrain grid: rows recede into the distance (perspective).
    const COLS = 120;
    const ROWS = 110;

    let raf = 0;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      // camera params
      const horizon = height * 0.3; // where far rows converge
      const near = height * 1.05; // bottom (closest) row baseline

      // draw far -> near so nearer (brighter/larger) dots paint on top
      for (let r = 0; r < ROWS; r++) {
        // depth 0 (far) .. 1 (near); mild easing keeps the lower area dense
        const rd = r / (ROWS - 1);
        const depth = Math.pow(rd, 1.25);
        const rowY = horizon + (near - horizon) * depth;
        const scale = 0.3 + depth * 1.1; // closer rows wider & bigger
        const rowWidth = width * (0.6 + depth * 1.0);
        const startX = (width - rowWidth) / 2;

        for (let c = 0; c < COLS; c++) {
          const cd = c / (COLS - 1);
          const x = startX + cd * rowWidth;

          // layered organic wave height field -> soft hills & valleys
          const wx = cd * 5.0;
          const wz = rd * 8.0;
          const h =
            Math.sin(wx * 1.1 + wz * 0.9 + time) * 0.5 +
            Math.cos(wx * 0.7 - wz * 1.5 - time * 0.6) * 0.3 +
            Math.sin((wx + wz) * 1.1 + time * 0.35) * 0.2;

          // amplitude grows strongly with depth -> near rows form tall hills
          const lift = h * 26 * scale * scale * 1.6;
          const y = rowY - lift;

          if (y < horizon - 60 || y > height + 40) continue;

          const crest = (h + 1) / 2; // 0..1
          const t = Math.min(1, Math.max(0, 0.2 + crest * 0.75));
          const size = (0.8 + crest * 2.4) * scale;

          // fade with depth (far = faint) and with vertical position (top = faint)
          const depthFade = 0.5 + depth * 1.0;
          const vFade = Math.min(1, Math.max(0, (y - horizon) / (height - horizon)));
          const alpha = (0.16 + Math.pow(crest, 1.05) * 1.2) * depthFade * (0.5 + vFade * 0.5);

          if (alpha <= 0.01 || size <= 0.15) continue;

          ctx.beginPath();
          ctx.fillStyle = `rgba(${colorAt(t)},${alpha.toFixed(3)})`;
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = "source-over";

      if (!reduceMotion) {
        time += 0.01;
        raf = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
}
