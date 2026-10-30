import { getSinglePage } from "@/lib/contentParser.astro";
import { plainify } from "@/lib/utils/textConverter";
import type { APIRoute } from "astro";

// Search index consumed by src/layouts/helpers/SearchModal.astro
export const GET: APIRoute = async () => {
  const [blog, pages] = await Promise.all([
    getSinglePage("blog"),
    getSinglePage("pages"),
  ]);

  const toItem = (group: string, prefix: string) => (entry: any) => ({
    group,
    slug: prefix + entry.id,
    frontmatter: entry.data,
    content: plainify(entry.body ?? ""),
  });

  return new Response(
    JSON.stringify([
      ...blog.map(toItem("Blog", "blog/")),
      ...pages.map(toItem("Páginas", "")),
    ]),
    { headers: { "Content-Type": "application/json" } },
  );
};
