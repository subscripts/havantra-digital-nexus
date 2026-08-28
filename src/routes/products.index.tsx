import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/content/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Havantra Technology Portfolio" },
      {
        name: "description",
        content:
          "Havantra builds its own software products alongside client work, starting with Havantra EMR for the healthcare sector.",
      },
      { property: "og:title", content: "Products — Havantra Technology Portfolio" },
      {
        property: "og:description",
        content: "Software products developed in-house by Havantra, starting with healthcare.",
      },
    ],
  }),
  component: ProductsIndex,
});

function ProductsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="A technology company that ships its own software."
        lead="Havantra develops products in sectors where we understand the operational problem well enough to solve it properly."
      />

      <Section>
        <SectionHeading eyebrow="Portfolio" title="Current products." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
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
                <h2 className="mt-6 font-display text-3xl font-semibold">{p.name}</h2>
                <p className="mt-3 text-muted-foreground">{p.tagline}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm text-signal">
                  View product
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Further products will be listed here as they enter development.
        </p>
      </Section>
    </>
  );
}
