import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/Section";
import { Newsletter } from "@/components/site/Newsletter";
import { posts } from "@/content/insights";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
    return { post, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable — Havantra" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    const title = `${post.title} | Havantra Insights`;
    return {
      meta: [
        { title },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: post.author },
            publisher: { "@type": "Organization", name: "Havantra" },
          }),
        },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <Section bordered={false}>
      <p className="eyebrow">Not found</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">This article doesn't exist</h1>
      <Button asChild variant="line" size="hv" className="mt-8">
        <Link to="/insights">Back to insights</Link>
      </Button>
    </Section>
  );
}

function PostPage() {
  const { post, related } = Route.useLoaderData();

  return (
    <>
      <header className="border-b border-hairline">
        <div className="container-hv py-20 md:py-28">
          <Link to="/insights" className="eyebrow link-underline">
            ← Insights
          </Link>
          <p className="eyebrow mt-8">
            {post.category} · {post.readingTime}
          </p>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl leading-[1.05] font-semibold md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{post.subtitle}</p>
          <p className="mt-8 text-sm text-muted-foreground">
            {post.author} ·{" "}
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-GB", { dateStyle: "long" })}
            </time>
          </p>
        </div>
      </header>

      <Section bordered={false}>
        <article className="max-w-2xl space-y-6">
          {post.body.map((para) => (
            <p key={para.slice(0, 32)} className="text-lg leading-relaxed text-muted-foreground">
              {para}
            </p>
          ))}
          <ul className="flex flex-wrap gap-2 pt-6">
            {post.tags.map((t) => (
              <li key={t} className="border border-hairline px-2 py-1 text-xs text-muted-foreground">
                #{t}
              </li>
            ))}
          </ul>
        </article>
      </Section>

      {related.length ? (
        <Section>
          <p className="eyebrow">Read next</p>
          <div className="mt-8 grid gap-px border border-hairline bg-hairline sm:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/insights/$slug"
                params={{ slug: r.slug }}
                className="group bg-background p-7"
              >
                <span className="eyebrow">{r.category}</span>
                <h2 className="mt-3 font-display text-xl font-semibold group-hover:text-signal">
                  {r.title}
                </h2>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="bg-surface">
        <Newsletter />
      </Section>
    </>
  );
}
