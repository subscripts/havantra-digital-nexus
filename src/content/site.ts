/**
 * Central site configuration. These values are placeholders that Havantra
 * should replace (later editable from the admin dashboard / CMS).
 */
export const site = {
  name: "Havantra",
  tagline: "Build. Grow. Scale.",
  descriptor: "Digital • Marketing • Technology",
  summary:
    "Havantra helps businesses build stronger digital foundations, reach more customers, and use technology to grow and scale.",
  // TODO: replace with the real Havantra contact details.
  email: "hello@havantra.com",
  whatsappNumber: "", // e.g. "2348000000000" — configurable from admin settings
  social: [
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "Instagram", href: "" },
  ],
} as const;

export const whatsappLink = (message = "Hello Havantra, I'd like to talk about a project.") =>
  site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
    : "/contact";

export const nav = [
  { label: "Solutions", to: "/solutions" },
  { label: "Work", to: "/work" },
  { label: "Products", to: "/products" },
  { label: "Insights", to: "/insights" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
] as const;
