import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import { posts, categories } from "@/content/insights";
import { cn } from "@/lib/utils";

type Search = { category?: string };

export const Route = createFileRoute("/insights/")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Insights — Business, Marketing & Technology | Havantra" },
      {
        name: "description",
        content:
          "Articles and thinking from Havantra on business, marketing, technology, design and AI — written for people making decisions.",
      },
      { property: "og:title", content: "Insights — Business, Marketing & Technology | Havantra" },
      {
        property: "og:description",
        content: "Havantra's thinking on business, marketing, technology, design and AI.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const search = Route.useSearch();
  const [active, setActive] = useState<string>(search.category ?? "All");
  const list = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Ideas that hold up outside a pitch deck."
        lead="Practical thinking on how businesses build, grow and scale with digital and technology."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter insights by category">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={active === c}
              className={cn(
                "cursor-pointer border px-4 py-2 text-sm transition-colors",
                active === c
                  ? "border-signal text-signal"
                  : "border-hairline text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
          <Link
            to="/insights/resources"
            className="border border-hairline px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Resources →
          </Link>
        </div>

        {list.length === 0 ? (
          <p className="mt-16 text-muted-foreground">Nothing published in this category yet.</p>
        ) : (
          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal as="article" key={p.slug} delay={i * 60} className="bg-background">
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="group flex h-full flex-col p-7"
                >
                  <span className="eyebrow">
                    {p.category} · {p.readingTime}
                  </span>
                  <h2 className="mt-4 font-display text-xl font-semibold group-hover:text-signal">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-6 text-xs text-muted-foreground">
                    {p.author} · {new Date(p.date).toLocaleDateString("en-GB", { dateStyle: "medium" })}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <Section className="bg-surface">
        <Newsletter />
      </Section>
    </>
  );
}
