# hablemospython.dev 🐍

Sitio web de introducción a la comunidad "Python en Español".  Encontrarás
consejos y recursos de nuestras comunidades en Telegram, y Discord.

## Implementación

El sitio está construido con [Astro](https://astro.build/) y
[Tailwind CSS](https://tailwindcss.com/), a partir de la plantilla
[Astroplate](https://github.com/zeon-studio/astroplate). Es un sitio
estático: no hay backend, todo el contenido vive como archivos Markdown/MDX
dentro de `src/content/`.

### Estructura principal

- `src/content/pages/` — las páginas del sitio (Principiantes, FAQ, Código de
  conducta, etc.), servidas en `/<slug>` mediante `src/pages/[regular].astro`.
- `src/content/blog/` — el blog y los episodios del podcast *Bit a bit*
  (diferenciados por la categoría `podcast`), servidos en `/blog/<slug>`.
- `src/content/authors/`, `src/content/homepage/` — autores y el contenido
  de la portada.
- `src/pages/` — rutas de Astro que no son puramente Markdown (portada,
  `/otras-comunidades`, listados de blog/categorías/tags/autores, etc.).
- `src/config/` — configuración del sitio: `config.json` (metadatos, SEO),
  `menu.json` (navegación), `social.json` (redes sociales), y estilos/tema en
  `src/styles/theme.css`.
- `src/lib/data/communities.ts` — el listado de comunidades (Discord,
  Telegram, WhatsApp) que se muestra en `/otras-comunidades`.

### ¿Cómo contribuir?

- Los cambios a las páginas existentes van directamente en los archivos de
  `src/content/pages/`.
- Para agregar una nueva página, crea un nuevo archivo Markdown en
  `src/content/pages/` con el frontmatter `title`/`description`/`draft`, y
  agrégala a `src/config/menu.json` si debe aparecer en el menú superior o en
  el pie de página.
- Para un nuevo artículo del blog o episodio del podcast, agrega un archivo en
  `src/content/blog/` (usa `categories: ["podcast"]` para episodios del
  podcast).
- Para agregar o modificar comunidades, edita
  `src/lib/data/communities.ts`.

## Configuración

### Dependencias

Este proyecto usa [pnpm](https://pnpm.io/). Instala las dependencias con:

```bash
pnpm install
```

### Desarrollo

```bash
pnpm dev
```

### Generar el sitio

```bash
pnpm build
```

El resultado queda en `dist/`. `pnpm preview` sirve ese resultado
localmente para revisarlo antes de publicar.

## Despliegue

El sitio se publica en GitHub Pages mediante el workflow
`.github/workflows/deploy-to-github-pages.yml`, que se ejecuta
automáticamente en cada push a `main`.
