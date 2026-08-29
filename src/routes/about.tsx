import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { values, timeline } from "@/content/careers";
import { pillars } from "@/content/pillars";
import { site } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Havantra — Digital, Marketing & Technology Company" },
      {
        name: "description",
        content:
          "Havantra is a digital and technology company building client work and its own software products. Our mission, values and how we operate.",
      },
      { property: "og:title", content: "About Havantra" },
      {
        property: "og:description",
        content: "A digital and technology company built to help businesses build, grow and scale.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Havantra",
          description: site.summary,
          email: site.email,
        }),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A technology company shaped around outcomes."
        lead={site.summary}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold md:text-4xl">
              Give ambitious businesses the digital and technology capability of a much larger one.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              To be a global digital and technology company known equally for the work we do for
              clients and the products we build ourselves — with healthcare technology as the first
              of those products.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we do" title="Two halves of the same company." />
        <div className="mt-12 grid gap-px border border-hairline bg-hairline md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.id} delay={i * 70} className="bg-background p-8">
              <p className="eyebrow">{p.index}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="How we make decisions." />
        <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 50} className="bg-background p-7">
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="Where we are." />
        <ol className="mt-12 space-y-px border border-hairline bg-hairline">
          {timeline.map((t) => (
            <li key={t.year} className="bg-background p-8">
              <p className="eyebrow">{t.year}</p>
              <h3 className="mt-3 font-display text-2xl font-semibold">{t.title}</h3>
              <p className="mt-3 max-w-2xl text-muted-foreground">{t.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="Team" title="The people behind Havantra." />
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Team profiles have not been published yet. This section will list leadership and key roles
          once Havantra supplies names, titles and photography.
        </p>
      </Section>

      <Section className="bg-surface">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="max-w-xl text-balance font-display text-3xl font-semibold md:text-5xl">
            Work with us, or come and build with us.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="signal" size="hv">
              <Link to="/contact">Start a Project</Link>
            </Button>
            <Button asChild variant="line" size="hv">
              <Link to="/careers">See careers</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
