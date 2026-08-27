import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

/**
 * Newsletter signup. Currently client-side only — connect to the
 * subscribers table once the backend is enabled.
 */
export function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  return (
    <div className={compact ? "" : "max-w-xl"}>
      {!compact ? (
        <>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Stay ahead.</h2>
          <p className="mt-4 text-muted-foreground">
            Receive Havantra insights on business, marketing, technology, digital growth and new
            products.
          </p>
        </>
      ) : null}
      {done ? (
        <p role="status" className="mt-6 text-sm text-signal">
          Thanks — you're on the list.
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <label htmlFor={compact ? "nl-email-footer" : "nl-email"} className="sr-only">
            Email address
          </label>
          <input
            id={compact ? "nl-email-footer" : "nl-email"}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="h-12 min-w-0 flex-1 border border-input bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-signal"
          />
          <Button type="submit" variant="signal" size="hv">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}
