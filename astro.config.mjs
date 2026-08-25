import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import AutoImport from "astro-auto-import";
import { defineConfig, fontProviders } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sharp from "sharp";
import config from "./src/config/config.json";

// Brand fonts (must match the --font-* variables in src/styles/theme.css)
const fontsConfig = [
  {
    name: "Heebo",
    cssVariable: "--font-primary",
    provider: fontProviders.google(),
    weights: [400, 600],
    display: "swap",
    fallbacks: ["sans-serif"],
  },
  {
    name: "Signika",
    cssVariable: "--font-secondary",
    provider: fontProviders.google(),
    weights: [500, 700],
    display: "swap",
    fallbacks: ["sans-serif"],
  },
];

// https://astro.build/config
export default defineConfig({
  site: config.site.base_url ? config.site.base_url : "http://examplesite.com",
  base: config.site.base_path ? config.site.base_path : "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: { service: sharp() },
  vite: { plugins: [tailwindcss()] },
  fonts: fontsConfig,

  integrations: [
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Accordion.astro",
        "@/shortcodes/Youtube.astro",
      ],
    }),
    mdx(),
  ],

  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
    }),
    shikiConfig: { theme: "one-dark-pro", wrap: true },
  },
});
