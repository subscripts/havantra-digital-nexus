import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { caseStudies } from "@/content/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study unavailable — Havantra" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const title = `${study.client} — ${study.title} | Havantra`;
    return {
      meta: [
        { title },
        { name: "description", content: study.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: study.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: WorkNotFound,
  component: CaseStudyPage,
});

function WorkNotFound() {
  return (
    <Section bordered={false}>
      <p className="eyebrow">Not found</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">This case study doesn't exist</h1>
      <Button asChild variant="line" size="hv" className="mt-8">
        <Link to="/work">Back to all work</Link>
      </Button>
    </Section>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData();

  return (
    <>
      <header className="border-b border-hairline">
        <div className="container-hv py-20 md:py-28">
          <Link to="/work" className="eyebrow link-underline">
            ← Work
          </Link>
          <p className="eyebrow mt-8">
            {study.industry} · {study.year}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.04] font-semibold md:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{study.summary}</p>
          <dl className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-3">
            <div className="bg-background p-6">
              <dt className="eyebrow">Client</dt>
              <dd className="mt-2 text-sm">{study.client}</dd>
            </div>
            <div className="bg-background p-6">
              <dt className="eyebrow">Timeline</dt>
              <dd className="mt-2 text-sm">{study.timeline}</dd>
            </div>
            <div className="bg-background p-6">
              <dt className="eyebrow">Industry</dt>
              <dd className="mt-2 text-sm">{study.industry}</dd>
            </div>
          </dl>
        </div>
      </header>

      <Section bordered={false}>
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {[
              { t: "The challenge", b: study.challenge },
              { t: "Our approach", b: study.approach },
              { t: "The solution", b: study.solution },
            ].map((block) => (
              <div key={block.t}>
                <h2 className="font-display text-2xl font-semibold">{block.t}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{block.b}</p>
              </div>
            ))}

            <div>
              <h2 className="font-display text-2xl font-semibold">Results</h2>
              {study.results.length ? (
                <ul className="mt-4 space-y-3">
                  {study.results.map((r) => (
                    <li key={r} className="border-t border-hairline pt-3 text-muted-foreground">
                      {r}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-muted-foreground">
                  Verified results for this project have not been published yet.
                </p>
              )}
            </div>
          </div>

          <aside className="space-y-10">
            <div>
              <p className="eyebrow">Services</p>
              <ul className="mt-4 space-y-2">
                {study.services.map((s) => (
                  <li key={s} className="border-t border-hairline pt-2 text-sm text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Technology</p>
              <ul className="mt-4 space-y-2">
                {study.technologies.map((t) => (
                  <li key={t} className="border-t border-hairline pt-2 text-sm text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild variant="signal" size="hv" className="w-full">
              <Link to="/contact">Start a similar project</Link>
            </Button>
          </aside>
        </div>
      </Section>
    </>
  );
}
