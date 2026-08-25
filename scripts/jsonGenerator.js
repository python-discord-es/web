import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const JSON_FOLDER = "./.json";

// Each content collection maps to a different URL prefix (see
// src/pages/blog/, src/pages/[regular].astro) and a human label used as the
// search-results group heading.
const COLLECTIONS = [
  { folder: "src/content/blog", urlPrefix: "blog", group: "Blog" },
  { folder: "src/content/pages", urlPrefix: "", group: "Páginas" },
];

// read every *.md/*.mdx file directly inside `folder` (collections here are
// flat, no nested subfolders) into { group, slug, frontmatter, content }
const getData = ({ folder, urlPrefix, group }) => {
  if (!fs.existsSync(folder)) return [];

  return fs
    .readdirSync(folder)
    .filter(
      (filename) =>
        !filename.startsWith("-") &&
        (filename.endsWith(".md") || filename.endsWith(".mdx")),
    )
    .map((filename) => {
      const filepath = path.join(folder, filename);
      const file = fs.readFileSync(filepath, "utf-8");
      const { data, content } = matter(file);
      const basename = filename.replace(/\.[^/.]+$/, "");
      const slug = data.slug || (urlPrefix ? `${urlPrefix}/${basename}` : basename);

      return { group, slug, frontmatter: data, content };
    })
    .filter((page) => !page.frontmatter?.draft);
};

try {
  if (!fs.existsSync(JSON_FOLDER)) {
    fs.mkdirSync(JSON_FOLDER);
  }

  const allPages = COLLECTIONS.flatMap(getData);

  fs.writeFileSync(`${JSON_FOLDER}/posts.json`, JSON.stringify(allPages));
  // search.json currently mirrors posts.json 1:1, kept as a separate file
  // since the search UI and the posts feed are conceptually different consumers
  fs.writeFileSync(`${JSON_FOLDER}/search.json`, JSON.stringify(allPages));
} catch (err) {
  console.error(err);
}
