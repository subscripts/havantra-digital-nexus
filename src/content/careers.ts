export type Job = {
  slug: string;
  title: string;
  department: "Engineering" | "Design" | "Marketing" | "Strategy" | "Product" | "Operations";
  type: "Full-time" | "Contract" | "Internship";
  location: string;
  summary: string;
};

export const departments = [
  "Engineering",
  "Design",
  "Marketing",
  "Strategy",
  "Product",
  "Operations",
] as const;

/** No open roles are invented. Populate from the admin dashboard. */
export const jobs: Job[] = [];

export const values = [
  { title: "Innovation", body: "We look for the better way before defaulting to the familiar one." },
  { title: "Results", body: "Work is judged by what it changes for the business, not by how it looks in a deck." },
  { title: "Simplicity", body: "Complexity is a cost. We remove it wherever it isn't earning something." },
  { title: "Creativity", body: "Craft and originality are competitive advantages, not decoration." },
  { title: "Reliability", body: "We do what we said, in the time we said we'd do it." },
  { title: "Growth", body: "For our clients, our products, and the people who build them." },
];

export const timeline = [
  {
    year: "2026",
    title: "Havantra begins",
    body: "Havantra begins building its digital and technology ecosystem, combining client work with the development of its own products.",
  },
];
