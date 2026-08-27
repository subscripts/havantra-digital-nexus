import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { nav } from "@/content/site";
import { SearchDialog } from "./SearchDialog";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-hairline bg-background/90 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container-hv flex h-16 items-center justify-between gap-6 md:h-20">
        <Link to="/" aria-label="Havantra home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <SearchDialog />
          <Button asChild variant="line" size="hvSm" className="hidden md:inline-flex">
            <Link to="/contact" hash="talk">
              Talk to Havantra
            </Link>
          </Button>
          <Button asChild variant="signal" size="hvSm" className="hidden sm:inline-flex">
            <Link to="/contact">Start a Project</Link>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center lg:hidden"
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-hv flex flex-col py-4">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="rise flex items-baseline justify-between border-b border-hairline py-5 font-display text-2xl"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {item.label}
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3 pb-16">
              <Button asChild variant="signal" size="hv">
                <Link to="/contact">Start a Project</Link>
              </Button>
              <Button asChild variant="line" size="hv">
                <Link to="/contact" hash="talk">
                  Talk to Havantra
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
