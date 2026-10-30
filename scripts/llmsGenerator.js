import { parse } from "node-html-parser";
import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");

const config = JSON.parse(
  fs.readFileSync(path.join(ROOT, "src/config/config.json"), "utf8"),
);
const { llms } = config;
const siteUrl = config.site.base_url.replace(/\/$/, "");

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});
turndown.addRule("removeChrome", {
  filter: ["nav", "footer", "header", "aside"],
  replacement: () => "",
});

const pageUrl = (urlPath) => `${siteUrl}${urlPath}`.replace(/(?<=.)\/$/, "");

function listFiles(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const full = path.join(dir, entry.name);
      return entry.isDirectory() ? listFiles(full) : [full];
    });
}

function fileToUrlPath(file) {
  const urlPath = path
    .relative(DIST, file)
    .split(path.sep)
    .join("/")
    .replace(/\.html$/, "")
    .replace(/(^|\/)index$/, "");
  return "/" + urlPath;
}

function readPage(file) {
  const html = fs.readFileSync(file, "utf8");

  // Astro redirect stubs are not real pages
  if (/http-equiv="refresh"/i.test(html)) return null;

  const root = parse(html);
  const title = (
    root.querySelector("h1") ||
    root.querySelector("h2") ||
    root.querySelector("h3") ||
    root.querySelector("title")
  )?.text?.trim();
  if (!title) return null;

  const description =
    root.querySelector('meta[name="description"]')?.getAttribute("content") ||
    "";

  const main = root.querySelector("main") || root.querySelector("body");
  main
    .querySelectorAll("script, style, noscript, iframe, svg")
    .forEach((el) => el.remove());

  return {
    urlPath: fileToUrlPath(file),
    title,
    description,
    content: turndown.turndown(main.innerHTML),
  };
}

function markdownFile(page) {
  const front = [`title: "${page.title.replace(/"/g, '\\"')}"`];
  front.push(`url: "${pageUrl(page.urlPath)}"`);
  if (page.description) {
    front.push(`description: "${page.description.replace(/"/g, '\\"')}"`);
  }
  return `---\n${front.join("\n")}\n---\n\n${page.content}`;
}

function llmsTxt(pages) {
  const siteDescription = config.metadata?.meta_description || "";
  let out = `# ${config.site.title}\n\n`;
  if (siteDescription) out += `> ${siteDescription}\n\n`;
  out +=
    "This file helps language models discover the most useful content on this site.\n\n";

  const groups = {};
  for (const page of pages) {
    const group = page.urlPath.split("/").filter(Boolean)[0] || "Home";
    (groups[group] ||= []).push(page);
  }

  const names = Object.keys(groups).sort((a, b) =>
    a === "Home" ? -1 : b === "Home" ? 1 : a.localeCompare(b),
  );
  for (const name of names) {
    out += `## ${name.charAt(0).toUpperCase() + name.slice(1)}\n\n`;
    for (const page of groups[name]) {
      const link = llms.generate_individual_md
        ? `${siteUrl}${page.urlPath === "/" ? "/index" : page.urlPath}.md`
        : pageUrl(page.urlPath);
      out += `- [${page.title}](${link})`;
      out += page.description ? `: ${page.description}\n` : "\n";
    }
    out += "\n";
  }
  return out;
}

function llmsFullTxt(pages) {
  const body = pages
    .map((page) => {
      let section = `## ${page.title}\n\nURL: ${pageUrl(page.urlPath)}\n\n`;
      if (page.description) section += `${page.description}\n\n`;
      return section + page.content;
    })
    .join("\n\n---\n\n");
  return `# ${config.site.title}\n\nURL: ${siteUrl}\n\n${body}`;
}

if (!fs.existsSync(DIST)) {
  console.error("dist/ folder does not exist. Run 'astro build' first.");
  process.exit(1);
}

const pages = listFiles(DIST)
  .filter((f) => f.endsWith(".html") && !/(^|\/)404\.html$/.test(f))
  .sort()
  .map(readPage)
  .filter(Boolean)
  .sort((a, b) =>
    a.urlPath === "/"
      ? -1
      : b.urlPath === "/"
        ? 1
        : a.urlPath.localeCompare(b.urlPath),
  );

if (llms.generate_individual_md) {
  for (const page of pages) {
    const name = page.urlPath === "/" ? "index" : page.urlPath.slice(1);
    const file = path.join(DIST, `${name}.md`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, markdownFile(page), "utf8");
  }
}
if (llms.generate_llms_txt) {
  fs.writeFileSync(path.join(DIST, "llms.txt"), llmsTxt(pages), "utf8");
}
if (llms.generate_llms_full_txt) {
  fs.writeFileSync(path.join(DIST, "llms-full.txt"), llmsFullTxt(pages), "utf8");
}

console.log(`llms: processed ${pages.length} pages`);
