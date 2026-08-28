import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { products } from "@/content/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Havantra" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — ${product.category} software | Havantra`;
    return {
      meta: [
        { title },
        { name: "description", content: product.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: product.tagline },
        { property: "og:type", content: "product" },
      ],
    };
  },
  notFoundComponent: ProductNotFound,
  component: ProductPage,
});

function ProductNotFound() {
  return (
    <Section bordered={false}>
      <p className="eyebrow">Not found</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">This product doesn't exist</h1>
      <Button asChild variant="line" size="hv" className="mt-8">
        <Link to="/products">Back to products</Link>
      </Button>
    </Section>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <header className="relative overflow-hidden border-b border-hairline">
        <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
        <div className="container-hv relative py-20 md:py-28">
          <Link to="/products" className="eyebrow link-underline">
            ← Products
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="eyebrow">{product.category}</span>
            <span className="border border-signal/40 px-2 py-0.5 text-[0.6875rem] tracking-wide text-signal">
              {product.status}
            </span>
          </div>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.04] font-semibold md:text-7xl">
            {product.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{product.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="signal" size="hv">
              <Link to="/contact" hash="talk">
                Request a demo
              </Link>
            </Button>
            <Button asChild variant="line" size="hv">
              <Link to="/contact">Talk to the product team</Link>
            </Button>
          </div>
        </div>
      </header>

      <Section bordered={false}>
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{product.overview}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">The problem</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{product.problem}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold">Features</h2>
              <div className="mt-6 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
                {product.features.map((f) => (
                  <div key={f.title} className="bg-background p-6">
                    <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <p className="eyebrow">Benefits</p>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="border-t border-hairline pt-3 text-sm text-muted-foreground">
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 border border-hairline bg-surface p-6">
              <p className="text-sm text-muted-foreground">
                Pricing and availability for {product.name} have not been announced. Register interest
                and we'll be in touch as the product progresses.
              </p>
              <Button asChild variant="signal" size="hvSm" className="mt-5 w-full">
                <Link to="/contact">Register interest</Link>
              </Button>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
