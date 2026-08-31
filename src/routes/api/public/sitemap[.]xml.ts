import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/content/insights";
import { caseStudies } from "@/content/work";
import { products } from "@/content/products";

const staticPaths = [
  "/",
  "/solutions",
  "/work",
  "/products",
  "/insights",
  "/insights/resources",
  "/about",
  "/careers",
  "/contact",
];

export const Route = createFileRoute("/api/public/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const urls = [
          ...staticPaths,
          ...caseStudies.map((c) => `/work/${c.slug}`),
          ...products.map((p) => `/products/${p.slug}`),
          ...posts.map((p) => `/insights/${p.slug}`),
        ];
        const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
          .map((u) => `  <url><loc>${origin}${u}</loc></url>`)
          .join("\n")}\n</urlset>`;
        return new Response(body, {
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
