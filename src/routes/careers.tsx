import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { jobs, values } from "@/content/careers";
import { site } from "@/content/site";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Havantra — Build, Grow, Scale With Us" },
      {
        name: "description",
        content:
          "Join Havantra. Open roles across engineering, design, marketing, strategy, product and operations, plus how to make a speculative application.",
      },
      { property: "og:title", content: "Careers at Havantra" },
      {
        property: "og:description",
        content: "Open roles and speculative applications at Havantra.",
      },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build things that are actually used."
        lead="We're a small team doing client work and product work side by side. Roles are posted here as they open."
      />

      <Section>
        <SectionHeading eyebrow="Culture" title="What it's like to work here." />
        <div className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 50} className="bg-background p-7">
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="roles">
        <SectionHeading eyebrow="Open roles" title="Current openings." />
        {jobs.length === 0 ? (
          <div className="mt-10 border border-hairline bg-surface p-8 md:p-10">
            <p className="text-lg">There are no open roles right now.</p>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              We still read speculative applications. Send a short note about what you do and what
              you'd want to work on to{" "}
              <a href={`mailto:${site.email}`} className="link-underline text-signal">
                {site.email}
              </a>
              .
            </p>
            <Button asChild variant="signal" size="hv" className="mt-8">
              <Link to="/contact">Send an application</Link>
            </Button>
          </div>
        ) : (
          <ul className="mt-10 space-y-px border border-hairline bg-hairline">
            {jobs.map((job) => (
              <li key={job.slug} className="bg-background p-7">
                <p className="eyebrow">
                  {job.department} · {job.type} · {job.location}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">{job.title}</h3>
                <p className="mt-2 max-w-2xl text-muted-foreground">{job.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
