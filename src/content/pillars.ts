export type Pillar = {
  id: "build" | "grow" | "scale";
  index: string;
  title: string;
  lead: string;
  body: string;
  services: string[];
};

export const pillars: Pillar[] = [
  {
    id: "build",
    index: "01",
    title: "Build",
    lead: "Digital foundations.",
    body: "We help businesses establish the foundation they need to compete digitally — from identity and presence to the systems behind them.",
    services: [
      "Website development",
      "Web applications",
      "Brand identity",
      "Digital experiences",
      "Digital presence",
      "Business systems",
    ],
  },
  {
    id: "grow",
    index: "02",
    title: "Grow",
    lead: "Marketing and customer acquisition.",
    body: "We help businesses attract attention, customers and opportunities through strategy-led campaigns and consistent execution.",
    services: [
      "Paid advertising",
      "Digital marketing",
      "Campaign strategy",
      "Social media marketing",
      "Content creation",
      "Lead generation",
      "Growth campaigns",
    ],
  },
  {
    id: "scale",
    index: "03",
    title: "Scale",
    lead: "Technology and systems.",
    body: "We help businesses use technology and better systems to operate more efficiently and handle growth without friction.",
    services: [
      "Software development",
      "Automation",
      "Business tools",
      "Data and analytics",
      "SaaS solutions",
      "Custom technology",
      "Digital infrastructure",
    ],
  },
];

export const solutionGroups = [
  {
    id: "digital",
    title: "Digital",
    summary: "The foundation: how a business shows up, works and feels online.",
    items: [
      {
        title: "Websites",
        body: "Marketing sites, corporate sites and landing systems built for speed, clarity and search.",
      },
      {
        title: "Web applications",
        body: "Portals, dashboards and internal tools designed around real workflows.",
      },
      {
        title: "Branding",
        body: "Identity, messaging and visual systems that hold up across every touchpoint.",
      },
      {
        title: "Digital experiences",
        body: "Product launches, interactive experiences and content-led destinations.",
      },
      {
        title: "Digital systems",
        body: "Content architecture, design systems and the structure behind a growing digital presence.",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    summary: "Reaching the right people, consistently, with measurable intent.",
    items: [
      { title: "Advertising", body: "Paid search, social and display campaigns built around business outcomes." },
      { title: "Social media", body: "Channel strategy, content calendars and community-facing execution." },
      { title: "Content", body: "Editorial, video and creative assets aligned to how customers actually buy." },
      { title: "Campaigns", body: "End-to-end campaign strategy, creative direction and performance tracking." },
      { title: "Lead generation", body: "Funnels, capture systems and qualification flows that feed sales." },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    summary: "Software and systems that let a business operate at a larger size.",
    items: [
      { title: "Software", body: "Custom applications and platforms built for specific operational problems." },
      { title: "Automation", body: "Removing repetitive manual work from operations, sales and reporting." },
      { title: "SaaS", body: "Product thinking, architecture and delivery for subscription software." },
      { title: "Business tools", body: "Internal tooling, admin systems and integrations across existing stacks." },
      { title: "Custom technology", body: "Sector-specific technology, from data platforms to industry systems." },
    ],
  },
];

export const industries = [
  { title: "Healthcare", body: "Clinical and patient-facing systems, including our EMR work." },
  { title: "Retail", body: "Commerce presence, acquisition and operational tooling." },
  { title: "Professional Services", body: "Credibility-led digital presence and client systems." },
  { title: "Education", body: "Enrolment journeys, portals and learning-adjacent platforms." },
  { title: "Real Estate", body: "Listing experiences, lead capture and sales enablement." },
  { title: "Hospitality", body: "Booking journeys, brand experience and demand generation." },
  { title: "Startups & Technology", body: "Product design, build velocity and go-to-market." },
];
