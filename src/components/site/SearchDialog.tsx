import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { posts, resources } from "@/content/insights";
import { caseStudies } from "@/content/work";
import { products } from "@/content/products";
import { nav } from "@/content/site";

type Hit = { group: string; title: string; sub?: string; to: string };

function buildIndex(): Hit[] {
  return [
    ...posts.map((p) => ({ group: "Insights", title: p.title, sub: p.excerpt, to: `/insights/${p.slug}` })),
    ...resources.map((r) => ({ group: "Resources", title: r.title, sub: r.summary, to: "/insights/resources" })),
    ...caseStudies.map((c) => ({ group: "Work", title: `${c.client} — ${c.title}`, sub: c.summary, to: `/work/${c.slug}` })),
    ...products.map((p) => ({ group: "Products", title: p.name, sub: p.tagline, to: `/products/${p.slug}` })),
    ...nav.map((n) => ({ group: "Pages", title: n.label, to: n.to })),
    { group: "Pages", title: "Start a Project", to: "/contact" },
  ];
}

export function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const index = useMemo(buildIndex, []);
  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return index.slice(0, 6);
    return index
      .filter((h) => `${h.title} ${h.sub ?? ""} ${h.group}`.toLowerCase().includes(term))
      .slice(0, 12);
  }, [q, index]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        aria-label="Search Havantra"
        className="inline-flex h-9 w-9 cursor-pointer items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
      >
        <Search className="size-4" aria-hidden />
      </DialogTrigger>
      <DialogContent className="max-w-xl gap-0 rounded-none border-border bg-surface p-0">
        <DialogTitle className="sr-only">Search Havantra</DialogTitle>
        <div className="border-b border-hairline p-4">
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search insights, work, products, pages…"
            aria-label="Search query"
            className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
          />
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="p-4 text-sm text-muted-foreground">No results for “{q}”.</li>
          ) : (
            results.map((hit) => (
              <li key={`${hit.group}-${hit.title}`}>
                <Link
                  to={hit.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 transition-colors hover:bg-surface-2"
                >
                  <span className="eyebrow">{hit.group}</span>
                  <span className="mt-1 block text-sm font-medium">{hit.title}</span>
                  {hit.sub ? (
                    <span className="mt-1 line-clamp-1 block text-xs text-muted-foreground">{hit.sub}</span>
                  ) : null}
                </Link>
              </li>
            ))
          )}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
