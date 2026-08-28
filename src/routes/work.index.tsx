import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies } from "@/content/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Case Studies | Havantra" },
      {
        name: "description",
        content:
          "Selected Havantra projects: the challenge, the approach and what was built. Digital, marketing and technology case studies.",
      },
      { property: "og:title", content: "Work — Case Studies | Havantra" },
      {
        property: "og:description",
        content: "Selected Havantra projects across digital, marketing and technology.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const industries = useMemo(
    () => ["All", ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    [],
  );
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Projects judged by what they changed."
        lead="A growing record of client work. Results are published only once verified with the client."
      />

      <Section>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by industry">
          {industries.map((ind) => (
            <button
              key={ind}
              type="button"
              onClick={() => setFilter(ind)}
              aria-pressed={filter === ind}
              className={cn(
                "cursor-pointer border px-4 py-2 text-sm transition-colors",
                filter === ind
                  ? "border-signal text-signal"
                  : "border-hairline text-muted-foreground hover:text-foreground",
              )}
            >
              {ind}
            </button>
          ))}
        </div>

        {list.length === 0 ? (
          <p className="mt-16 text-muted-foreground">
            No case studies in this category yet. Published work will appear here.
          </p>
        ) : (
          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {list.map((c, i) => (
              <Reveal key={c.slug} delay={i * 70} className="bg-background">
                <Link to="/work/$slug" params={{ slug: c.slug }} className="group block p-8 md:p-10">
                  <span className="eyebrow">
                    {c.industry} · {c.year}
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold group-hover:text-signal">
                    {c.client}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80">{c.title}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{c.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {c.services.slice(0, 3).map((s) => (
                      <li key={s} className="border border-hairline px-2 py-1 text-xs text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
