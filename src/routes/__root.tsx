import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="container-hv flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">Error 404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold md:text-7xl">Page not found</h1>
      <p className="mt-5 max-w-lg text-muted-foreground">
        The page you're looking for doesn't exist or has moved. Try the main sections below.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/"
          className="inline-flex h-12 items-center bg-signal px-6 text-sm font-medium text-signal-foreground"
        >
          Go home
        </Link>
        <Link
          to="/solutions"
          className="inline-flex h-12 items-center border border-border px-6 text-sm font-medium"
        >
          Solutions
        </Link>
        <Link
          to="/contact"
          className="inline-flex h-12 items-center border border-border px-6 text-sm font-medium"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="container-hv flex min-h-[70vh] flex-col justify-center py-24">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">This page didn't load</h1>
      <p className="mt-5 max-w-lg text-muted-foreground">
        An unexpected error occurred. You can retry, or head back to the homepage.
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="inline-flex h-12 cursor-pointer items-center bg-signal px-6 text-sm font-medium text-signal-foreground"
        >
          Try again
        </button>
        <a
          href="/"
          className="inline-flex h-12 items-center border border-border px-6 text-sm font-medium"
        >
          Go home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Havantra — Build. Grow. Scale." },
      {
        name: "description",
        content:
          "Havantra is a digital, marketing and technology company helping businesses build foundations, grow demand and scale with software.",
      },
      { name: "author", content: "Havantra" },
      { property: "og:site_name", content: "Havantra" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500&family=IBM+Plex+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-signal focus:px-4 focus:py-2 focus:text-signal-foreground"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}
