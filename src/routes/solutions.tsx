import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { pillars, solutionGroups, industries } from "@/content/pillars";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Digital, Marketing & Technology | Havantra" },
      {
        name: "description",
        content:
          "Digital foundations, marketing that acquires customers, and technology that lets a business scale. Explore Havantra's full range of solutions.",
      },
      { property: "og:title", content: "Solutions — Digital, Marketing & Technology | Havantra" },
      {
        property: "og:description",
        content: "Digital, marketing and technology solutions built around business outcomes.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Everything a business needs to build, grow and scale."
        lead="Three connected practices. Engaged individually, or as one continuous programme of work."
      />

      <Section>
        <div className="grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 80} className="bg-background p-8">
              <p className="eyebrow">{p.index}</p>
              <h2 className="mt-5 font-display text-2xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-signal">{p.lead}</p>
              <p className="mt-4 text-sm text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {solutionGroups.map((group) => (
        <Section key={group.id} id={group.id}>
          <SectionHeading eyebrow={group.title} title={group.summary} />
          <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 60} className="bg-background p-7">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section id="process">
        <SectionHeading
          eyebrow="How we work"
          title="A process built to reduce risk."
          lead="Clear stages, visible progress, and decisions made with the business rather than for it."
        />
        <ol className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-5">
          {[
            { n: "01", t: "Discover", b: "Understand the business, the buyer and the constraints." },
            { n: "02", t: "Strategy", b: "Decide the sequence and what success will be measured by." },
            { n: "03", t: "Design", b: "Structure, interface and messaging designed together." },
            { n: "04", t: "Build", b: "Engineering, content and integrations, delivered in stages." },
            { n: "05", t: "Grow", b: "Launch, measure and iterate against the agreed outcomes." },
          ].map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60} className="bg-background p-7">
              <p className="eyebrow">{s.n}</p>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="industries">
        <SectionHeading eyebrow="Industries" title="Sectors we understand." />
        <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 40} className="bg-background p-7">
              <h3 className="font-display text-lg font-semibold">{ind.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{ind.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-xl text-balance font-display text-3xl font-semibold md:text-5xl">
            Not sure which pillar you need first?
          </h2>
          <Button asChild variant="signal" size="hv">
            <Link to="/contact">Talk to Havantra</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
