export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: "Business" | "Marketing" | "Technology" | "Design" | "AI" | "News";
  type: "Blog" | "Resource" | "News";
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  body: string[];
};

export const categories = ["Business", "Marketing", "Technology", "Design", "AI", "News"] as const;

/** CMS placeholder posts — replace with database records. */
export const posts: Post[] = [
  {
    slug: "build-grow-scale",
    title: "Build, grow, scale: a sequence, not a menu",
    subtitle: "Why the order a business tackles digital work in matters more than the individual tactics.",
    category: "Business",
    type: "Blog",
    author: "Havantra",
    date: "2026-01-15",
    readingTime: "5 min read",
    tags: ["strategy", "digital", "growth"],
    excerpt:
      "Most businesses buy digital work out of order — advertising before foundations, tools before process. The sequence is the strategy.",
    body: [
      "Businesses rarely fail at digital because they picked the wrong tactic. They fail because they run the tactics in the wrong order.",
      "Advertising into a weak foundation is expensive. Traffic arrives at a site that cannot explain the business, cannot be trusted at a glance, and offers no obvious next step. The spend produces clicks and very little else.",
      "Build comes first because it is what everything else compounds on: a clear position, a credible presence, and the systems underneath. Grow comes second, once there is somewhere worth sending attention. Scale comes third, when the volume of work has outgrown the way the business currently handles it.",
      "The sequence is not rigid — plenty of businesses have partial foundations and can move faster. But skipping a stage entirely is what usually produces the sense that 'digital doesn't work for us'.",
    ],
  },
  {
    slug: "technology-that-earns-its-place",
    title: "Technology that earns its place",
    subtitle: "A simple test before a business commits to new software.",
    category: "Technology",
    type: "Blog",
    author: "Havantra",
    date: "2026-02-02",
    readingTime: "4 min read",
    tags: ["software", "automation", "operations"],
    excerpt:
      "New software should remove work, not relocate it. A short test for deciding whether a tool is worth adopting.",
    body: [
      "Every new tool has a cost that isn't on the invoice: the time to learn it, the time to maintain it, and the work of keeping it in sync with everything else.",
      "The test we apply is simple. Name the specific task the tool removes. If nobody can name it — if the answer is 'better visibility' or 'more modern' — the tool is being adopted for its category, not its effect.",
      "Automation follows the same rule. Automating a broken process makes the breakage faster. Fix the sequence first, then remove the manual steps that remain.",
    ],
  },
];

export type Resource = {
  slug: string;
  title: string;
  kind: "Guide" | "Report" | "Template" | "Research";
  summary: string;
};

export const resources: Resource[] = [
  {
    slug: "digital-foundations-checklist",
    title: "Digital foundations checklist",
    kind: "Guide",
    summary: "The structural questions to answer before investing in acquisition.",
  },
  {
    slug: "project-brief-template",
    title: "Project brief template",
    kind: "Template",
    summary: "A short brief format for scoping digital and technology work.",
  },
];
