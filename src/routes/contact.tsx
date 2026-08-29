import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Section";
import { site, whatsappLink } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Havantra — Start a Project" },
      {
        name: "description",
        content:
          "Tell Havantra about your project. Enquiries for digital, marketing, technology work, product demos, partnerships and careers.",
      },
      { property: "og:title", content: "Contact Havantra — Start a Project" },
      {
        property: "og:description",
        content: "Start a project or talk to the Havantra team.",
      },
    ],
  }),
  component: ContactPage,
});

const budgets = ["Not sure yet", "Under $5k", "$5k–$15k", "$15k–$50k", "$50k+"];
const services = ["Digital", "Marketing", "Technology", "Product / EMR", "Careers", "Other"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Not yet persisted — connect the leads table once the backend is enabled.
    setSent(true);
    toast.success("Thanks — your enquiry has been recorded locally.", {
      description: "Connect the backend to deliver enquiries to the Havantra inbox.",
    });
  }

  const field =
    "h-12 w-full border border-input bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-signal";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're trying to change."
        lead="Share a little context and we'll come back with a considered response, not a template."
      />

      <Section id="talk">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Project enquiry" title="Start a project." />
            {sent ? (
              <div className="mt-10 border border-signal/40 bg-surface p-8">
                <p className="font-display text-2xl font-semibold">Enquiry received.</p>
                <p className="mt-3 text-muted-foreground">
                  We'll respond to the address you provided. For anything urgent, email{" "}
                  <a href={`mailto:${site.email}`} className="link-underline text-signal">
                    {site.email}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="eyebrow mb-2 block">
                    Full name
                  </label>
                  <input id="name" name="name" required className={field} placeholder="Your name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="email" className="eyebrow mb-2 block">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={field}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="company" className="eyebrow mb-2 block">
                    Company
                  </label>
                  <input id="company" name="company" className={field} placeholder="Company name" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="eyebrow mb-2 block">
                    Phone (optional)
                  </label>
                  <input id="phone" name="phone" className={field} placeholder="+000 000 0000" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="service" className="eyebrow mb-2 block">
                    What do you need?
                  </label>
                  <select id="service" name="service" className={field} defaultValue={services[0]}>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-background">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="budget" className="eyebrow mb-2 block">
                    Budget range
                  </label>
                  <select id="budget" name="budget" className={field} defaultValue={budgets[0]}>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="bg-background">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="eyebrow mb-2 block">
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border border-input bg-transparent p-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-signal"
                    placeholder="What's the situation, and what would a good outcome look like?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" variant="signal" size="hv">
                    Send enquiry
                  </Button>
                </div>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="border border-hairline bg-surface p-7">
              <p className="eyebrow">Direct</p>
              <a
                href={`mailto:${site.email}`}
                className="link-underline mt-3 block font-display text-xl font-semibold"
              >
                {site.email}
              </a>
              <p className="mt-4 text-sm text-muted-foreground">
                Phone number and office address to be supplied by Havantra.
              </p>
            </div>
            <div className="border border-hairline p-7">
              <p className="eyebrow">WhatsApp</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {site.whatsappNumber
                  ? "Message us directly for a quick conversation."
                  : "WhatsApp number not configured yet."}
              </p>
              <Button asChild variant="line" size="hvSm" className="mt-5">
                <a href={whatsappLink()}>Chat on WhatsApp</a>
              </Button>
            </div>
            <div className="border border-hairline p-7">
              <p className="eyebrow">Response time</p>
              <p className="mt-3 text-sm text-muted-foreground">
                We aim to reply to every enquiry within two working days.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
