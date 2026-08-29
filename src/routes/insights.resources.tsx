import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { resources } from "@/content/insights";

export const Route = createFileRoute("/insights/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Guides, Templates & Reports | Havantra" },
      {
        name: "description",
        content:
          "Downloadable guides, templates and research from Havantra to help plan digital, marketing and technology work.",
      },
      { property: "og:title", content: "Resources — Guides, Templates & Reports | Havantra" },
      {
        property: "og:description",
        content: "Guides, templates and research from Havantra.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Tools for planning the work."
        lead="Guides, templates and research. Downloads will be enabled once files are supplied."
      />

      <Section>
        <Link to="/insights" className="eyebrow link-underline">
          ← All insights
        </Link>
        <div className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.slug} delay={i * 60} className="bg-background p-7">
              <span className="eyebrow">{r.kind}</span>
              <h2 className="mt-4 font-display text-xl font-semibold">{r.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{r.summary}</p>
              <p className="mt-6 text-xs text-muted-foreground/70">
                File pending — to be uploaded by Havantra.
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
