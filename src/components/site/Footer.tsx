import { Link } from "@tanstack/react-router";
import { site } from "@/content/site";
import { Newsletter } from "./Newsletter";
import { Wordmark } from "./Wordmark";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" as const },
      { label: "Work", to: "/work" as const },
      { label: "Careers", to: "/careers" as const },
      { label: "Contact", to: "/contact" as const },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Digital", to: "/solutions" as const, hash: "digital" },
      { label: "Marketing", to: "/solutions" as const, hash: "marketing" },
      { label: "Technology", to: "/solutions" as const, hash: "technology" },
    ],
  },
  {
    title: "Products",
    links: [{ label: "Havantra EMR", to: "/products/$slug" as const, params: { slug: "havantra-emr" } }],
  },
  {
    title: "Insights",
    links: [
      { label: "Blog", to: "/insights" as const },
      { label: "Resources", to: "/insights/resources" as const },
      { label: "News", to: "/insights" as const, search: { category: "News" } },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-hv py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Wordmark />
            <p className="mt-6 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Build. Grow. Scale.
            </p>
            <p className="eyebrow mt-3">{site.descriptor}</p>
            <div className="mt-10 max-w-md">
              <p className="font-display text-lg font-semibold">Stay ahead.</p>
              <Newsletter compact />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="eyebrow mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map(({ label, ...linkProps }) => (
                    <li key={label}>
                      <Link
                        {...(linkProps as never)}
                        className="link-underline text-sm text-muted-foreground hover:text-foreground"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Havantra. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {site.social.map((s) => (
              <li key={s.label}>
                {s.href ? (
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-xs text-muted-foreground hover:text-foreground"
                  >
                    {s.label}
                  </a>
                ) : (
                  <span
                    className="text-xs text-muted-foreground/50"
                    title="Link to be configured in admin settings"
                  >
                    {s.label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
