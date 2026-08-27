export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  services: string[];
  technologies: string[];
  timeline: string;
  /** Results are intentionally empty until Havantra supplies verified numbers. */
  results: string[];
  images: { src: string; alt: string }[];
};

/**
 * CMS placeholder data. Replace with database-backed records once the
 * admin dashboard is connected — the shape above is the content contract.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "mcfads-global-links",
    client: "McFads Global Links",
    title: "A credible digital front door for a solar and energy business",
    industry: "Energy",
    year: "2026",
    summary:
      "Turning an offline-led solar and energy business into one that can be evaluated, trusted and contacted online.",
    challenge:
      "McFads Global Links operates in a market where buyers compare providers carefully before spending. Enquiries depended on referrals and direct conversations, and there was no digital surface where a prospective customer could understand the company's capability, verify legitimacy, or start a conversation on their own terms.",
    approach:
      "We started with the buying decision rather than the page layout: what an energy buyer needs to see, in what order, before they are willing to make contact. That shaped the information architecture, the messaging hierarchy and the way services and capability are presented.",
    solution:
      "A structured company website with clear service positioning, capability sections, and enquiry paths placed where intent is highest. The build prioritises fast loading on mobile connections, accessible markup, and a content structure the team can extend as the offering grows.",
    services: ["Digital strategy", "Website development", "Content structure", "Search foundations"],
    technologies: ["Responsive web build", "Performance optimisation", "SEO foundations"],
    timeline: "Placeholder — to be supplied",
    results: [],
    images: [],
  },
];
