# hablemospython.dev

Este es el código del sitio web de la comunidad "Python en Español". Ahí
encontrarás consejos para quienes empiezan, cursos y libros recomendados,
preguntas frecuentes, las normas de la comunidad y enlaces a nuestros grupos en
Discord y Telegram, entre otras cosas.

## Cómo está hecho

El sitio usa [Astro](https://astro.build/) y [Tailwind CSS](https://tailwindcss.com/),
y parte de la plantilla [Astroplate](https://github.com/zeon-studio/astroplate).
Es un sitio estático: no hay backend ni base de datos. Todo el contenido son
archivos Markdown o MDX dentro de `src/content/`.

### Dónde está cada cosa

- `src/content/pages/`: las páginas del sitio (Principiantes, FAQ, Código de
  conducta y demás). Cada archivo se publica en `/<nombre>/` gracias a
  `src/pages/[regular].astro`.
- `src/content/blog/`: el blog y los episodios del podcast *Bit a bit*. Los
  episodios se distinguen por la categoría `podcast` y se publican en
  `/blog/<nombre>/`.
- `src/content/authors/` y `src/content/homepage/`: los autores y el contenido
  de la portada.
- `src/pages/`: las rutas que no son solo Markdown, como la portada,
  `/otras-comunidades/`, los listados del blog, las categorías, los tags y los
  autores. Aquí también está `search.json.ts`, que genera el índice del
  buscador.
- `src/config/`: la configuración del sitio. `config.json` tiene los datos
  generales, `menu.json` el menú y `social.json` las redes sociales. Los
  colores y las fuentes están en `src/styles/theme.css`.
- `src/lib/data/communities.ts`: la lista de comunidades de Discord, Telegram y
  WhatsApp que se muestra en `/otras-comunidades/`.
- `astro.config.mjs`: además de la configuración de Astro, aquí están las
  redirecciones desde las direcciones antiguas del sitio (`/faq.html`,
  `/cursosylibros.html`, etc.).

## Cómo contribuir

No hace falta saber programar para aportar. Estas son las formas más comunes:

- **Corregir o mejorar una página:** edita el archivo correspondiente en
  `src/content/pages/`.
- **Agregar una página nueva:** crea un archivo Markdown en
  `src/content/pages/` con los campos `title`, `description` y `draft` al
  inicio. Si quieres que aparezca en el menú o en el pie de página, agrégala
  también a `src/config/menu.json`.
- **Publicar un artículo o un episodio del podcast:** agrega un archivo en
  `src/content/blog/`. Para un episodio usa `categories: ["podcast"]`.
- **Agregar o actualizar una comunidad:** edita `src/lib/data/communities.ts`.

Algunos detalles útiles al escribir contenido:

- Las preguntas de la FAQ usan el componente `<Accordion>`. Cada una tiene un
  enlace propio a partir de su título (por ejemplo `/faq/#cómo-instalo-python`),
  así que puedes compartir una pregunta ya abierta. Si quieres una dirección más
  corta, agrega un `id`: `<Accordion id="uv" title="...">`.
- Para insertar un video de YouTube usa `<Youtube id="..." title="..." />`.
- Los enlaces internos terminan en `/` (por ejemplo `/faq/`), igual que las
  direcciones del sitio publicado.

## Trabajar en local

Necesitas [Node.js](https://nodejs.org/) y [pnpm](https://pnpm.io/). Instala las
dependencias con:

```bash
pnpm install
```

Estos son los comandos que más vas a usar:

```bash
pnpm dev       # servidor local con recarga automática
pnpm build     # genera el sitio en dist/
pnpm preview   # sirve lo que quedó en dist/ para revisarlo antes de publicar
pnpm check     # revisa los tipos de Astro y TypeScript
pnpm format    # da formato al código con Prettier
```

## Publicación

El sitio se publica en GitHub Pages con el workflow
`.github/workflows/deploy-to-github-pages.yml`. Se ejecuta solo cada vez que se
hace push o se fusiona un cambio en `main`, así que no hay que hacer nada más
para ver tus cambios en línea.

El dominio es `hablemospython.dev`. Para que funcione, en la configuración de
GitHub Pages el dominio personalizado está puesto en `hablemospython.dev`, el
registro `www` apunta a GitHub y el apex tiene los cuatro registros A de
GitHub Pages. GitHub se encarga de redirigir `www` al dominio sin `www` y de
renovar el certificado HTTPS.
