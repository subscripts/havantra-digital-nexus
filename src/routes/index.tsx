import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Newsletter } from "@/components/site/Newsletter";
import { pillars, industries } from "@/content/pillars";
import { products } from "@/content/products";
import { caseStudies } from "@/content/work";
import { posts } from "@/content/insights";
import { site } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Havantra — Build. Grow. Scale." },
      { name: "description", content: site.summary },
      { property: "og:title", content: "Havantra — Build. Grow. Scale." },
      { property: "og:description", content: site.summary },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-70" />
        <div
          aria-hidden
          className="absolute -top-40 right-0 h-[32rem] w-[32rem] rounded-full bg-signal/10 blur-[120px]"
        />
        <div className="container-hv relative py-24 md:py-40">
          <p className="eyebrow rise">{site.descriptor}</p>
          <h1 className="rise mt-6 max-w-5xl text-balance text-5xl leading-[0.98] font-semibold md:text-8xl">
            Build. Grow. <span className="text-signal">Scale.</span>
          </h1>
          <p
            className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.summary}
          </p>
          <div className="rise mt-12 flex flex-wrap gap-3" style={{ animationDelay: "160ms" }}>
            <Button asChild variant="signal" size="hv">
              <Link to="/contact">
                Start a Project <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="line" size="hv">
              <Link to="/solutions">Explore solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="pillars">
        <SectionHeading
          eyebrow="What we do"
          title="Three pillars, in sequence."
          lead="Foundations first, then demand, then the systems that let a business handle what it attracted."
        />
        <div className="mt-14 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="bg-background p-8 md:p-10">
              <p className="eyebrow">{p.index}</p>
              <h3 className="mt-6 font-display text-3xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-signal">{p.lead}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <ul className="mt-7 space-y-2">
                {p.services.map((s) => (
                  <li key={s} className="border-t border-hairline pt-2 text-sm text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="products">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Products"
            title="We build our own technology too."
            lead="Havantra develops products alongside client work — starting in healthcare."
          />
          <Button asChild variant="quiet" size="hvSm">
            <Link to="/products">All products →</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group block h-full border border-hairline bg-surface p-8 transition-colors hover:border-signal/50 md:p-10"
              >
                <div className="flex items-center gap-3">
                  <span className="eyebrow">{p.category}</span>
                  <span className="border border-signal/40 px-2 py-0.5 text-[0.6875rem] tracking-wide text-signal">
                    {p.status}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-muted-foreground">{p.tagline}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-signal">
                  View product <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Selected work" title="Outcomes, not portfolios." />
          <Button asChild variant="quiet" size="hvSm">
            <Link to="/work">All work →</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80} className="bg-background">
              <Link to="/work/$slug" params={{ slug: c.slug }} className="group block p-8 md:p-10">
                <span className="eyebrow">
                  {c.industry} · {c.year}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold group-hover:text-signal">
                  {c.client}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{c.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="industries">
        <SectionHeading eyebrow="Industries" title="Where we work." />
        <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 50} className="bg-background p-7">
              <h3 className="font-display text-lg font-semibold">{ind.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ind.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="insights">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights" title="Thinking, written down." />
          <Button asChild variant="quiet" size="hvSm">
            <Link to="/insights">All insights →</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {posts.slice(0, 2).map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <Link
                to="/insights/$slug"
                params={{ slug: p.slug }}
                className="group block border-t border-hairline pt-6"
              >
                <span className="eyebrow">
                  {p.category} · {p.readingTime}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold group-hover:text-signal">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="cta" className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-balance font-display text-4xl font-semibold md:text-6xl">
              Let's build something that compounds.
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="signal" size="hv">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="line" size="hv">
                <Link to="/contact" hash="talk">
                  Talk to Havantra
                </Link>
              </Button>
            </div>
          </div>
          <Newsletter />
        </div>
      </Section>
    </>
  );
}
