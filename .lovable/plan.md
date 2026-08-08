# Portafolio Premium — Software Engineer

Una marca personal, no un currículum. Estética dark, minimalista y premium inspirada en Vercel / Linear / Raycast / Stripe. Todo pensado para replicarse luego en Flutter Web (componentes simples: Container, Card, Stack, Row, Column, Grid, AnimatedContainer, MouseRegion).

## Recorrido visual del visitante

El sitio responde, en orden, las 5 preguntas clave:

```
1. ¿Quién es?        -> HERO + ABOUT
2. ¿Qué resuelve?    -> HOW I SOLVE PROBLEMS
3. ¿Qué ha construido? -> FEATURED PROJECTS + CURRENT FOCUS
4. ¿Qué experiencia? -> EXPERIENCE (timeline)
5. ¿Qué domina?      -> TECH STACK
6. Llamada a la acción -> CONTACT
```

Por qué este flujo genera mejor primera impresión: un reclutador/cliente decide en segundos. Primero ve **identidad y nivel** (hero potente, sin foto, con composición tecnológica que comunica ingeniería). Luego entiende **el tipo de problemas** que resuelves antes de ver proyectos — eso reposiciona la lectura: los proyectos se interpretan como prueba de capacidad, no como lista de trabajos. La experiencia llega cuando ya hay confianza, y el stack cierra como respaldo, no como protagonista.

## Arquitectura por sección

**1. Hero (pantalla completa)**
- Izquierda: nombre, roles (Software Engineer · Engineering Automation · Flutter Development), frase "Building intelligent software for engineering, automation and modern cross-platform applications.", botones *View Projects* y *Contact*.
- Derecha: composición abstracta tech (laptop + smartphone con app Flutter + código + UI + glow). Imagen generada, sin foto personal.
- Animación: fade-in + slide-up escalonado, gradiente animado sutil de fondo, mouse glow.

**2. About** — máximo 2 párrafos. Experiencia + pasión por resolver problemas + evolución hacia Flutter. Honesto y breve.

**3. How I Solve Problems** — grid de 6 tarjetas (capacidades, no tecnologías): Engineering Automation, CAD Development, Artificial Intelligence, Cross-platform Applications, Software Architecture, Process Optimization. Cada una: icono, título, descripción breve, hover elegante con glow.

**4. Featured Projects** — sección principal. Tarjetas grandes tipo catálogo premium: imagen, título, descripción, chips de tecnologías, botones Demo / GitHub / Case Study.

**5. Current Focus ("Currently Building")** — tarjetas de evolución: Flutter (Cross-platform Apps), Supabase (Backend & DB), AI (LLMs/Vision), Cloud Architecture.

**6. Experience** — timeline vertical elegante. Cada hito como tarjeta moderna: rol, impacto, proyectos, tecnologías. Visual, no lista de bullets de CV.

**7. Tech Stack** — agrupado por categoría (Programming, Mobile, Backend, Cloud, Engineering, AI). Pocos chips, bien organizados.

**8. Contact** — limpio: GitHub, LinkedIn, Email, WhatsApp, CV.

## Sistema de diseño (tokens en src/styles.css)

```
background      #08111F
card            #111827
primary accent  #4F8CFF
secondary accent#06B6D4
text            #FFFFFF
text secondary  #B8C2D8
```
- Tipografía moderna (Space Grotesk para títulos, Inter para cuerpo) vía `<link>` en __root.
- Tokens oklch, gradientes discretos (primary→secondary), glass ligero, sombras suaves, glow de acento.
- Variantes de Button (hero/outline glass) usando tokens — sin colores hardcodeados.

## Animaciones (elegantes, no exageradas)
Fade-in, slide-up al entrar en viewport (IntersectionObserver), hover scale/glow, mouse glow en hero y cards, gradiente animado sutil. Todo reproducible en Flutter.

## Plan técnico
- `src/styles.css`: design system completo (tokens, glass, glow, gradiente animado, utilidades de animación).
- `src/routes/__root.tsx`: fonts via `<link>`, meta SEO.
- `src/routes/index.tsx`: una sola página de scroll con navegación sticky con anclas a secciones (es un portafolio de scroll, hash anchors apropiados aquí) + head SEO.
- Componentes en `src/components/portfolio/`: `Navbar`, `Hero`, `About`, `Capabilities`, `Projects`, `CurrentFocus`, `Experience`, `TechStack`, `Contact`, `Footer`, y un hook `useReveal` para animaciones on-scroll.
- Imágenes generadas: composición hero tech + 3 imágenes de proyectos destacados (placeholders premium coherentes con la paleta).
- `public/robots.txt` + `src/routes/sitemap[.]xml.ts`.

Contenido: usaré textos placeholder realistas y coherentes (nombre, proyectos, experiencia) que podrás editar fácilmente. Los enlaces de contacto quedarán como marcadores para que los completes.

Tras tu aprobación, construyo el sitio completo siguiendo esta arquitectura.