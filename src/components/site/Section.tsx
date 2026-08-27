import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Section({
  children,
  className,
  id,
  bordered = true,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28", bordered && "border-t border-hairline", className)}
    >
      <div className="container-hv">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl leading-[1.08] font-semibold md:text-5xl">{title}</h2>
      {lead ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-hairline">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div className="container-hv relative py-20 md:py-32">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="rise mt-5 max-w-4xl text-balance text-4xl leading-[1.02] font-semibold md:text-7xl">
          {title}
        </h1>
        {lead ? (
          <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        ) : null}
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </header>
  );
}
