export type Product = {
  slug: string;
  name: string;
  category: string;
  status: "In development" | "Pilot" | "Live";
  tagline: string;
  overview: string;
  problem: string;
  /** Only add features that Havantra has confirmed. */
  features: { title: string; body: string }[];
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "havantra-emr",
    name: "Havantra EMR",
    category: "Healthcare",
    status: "In development",
    tagline: "Electronic medical records technology for the healthcare sector.",
    overview:
      "Havantra EMR is our electronic medical records platform for healthcare providers. It is the first product in the Havantra technology portfolio and is currently in development.",
    problem:
      "Many healthcare providers still run on paper files and disconnected tools. Records are hard to retrieve, difficult to share between departments, and impossible to analyse. That slows down care, increases administrative load, and makes it hard for a practice to grow without adding staff.",
    features: [
      {
        title: "Feature detail pending",
        body: "Confirmed capability details will be published here as the product moves through development.",
      },
    ],
    benefits: [
      "Records that are retrievable rather than filed away",
      "Less administrative time per patient interaction",
      "A structured foundation for reporting and oversight",
    ],
  },
];
