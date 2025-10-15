export type Product = {
  slug: string;
  title: string;
  image: string;
  category: string;
  description?: string;
  bullets?: string[];
};

export const products: Product[] = [
    {
    slug: "collagen-marin-powdr",
    title: "Marinox COLLAGEN MARIN – powdr",
    image: "/assets/collagen-marin.jpg.jpeg",
    category: "Collagen",
    bullets: ["Marine collagen for skin vitality", "Enhances hydration and glow"],
  },
  {
    slug: "hemp-sleep-oral-spray",
    title: "Marinox Hemp SLEEP – Oral Spray",
    image: "/assets/sleep-spray.jpg.jpeg",
    category: "Oral Spray",
    bullets: ["Promotes relaxation", "Supports better sleep"],
  },
  {
    slug: "vitamin-b12-oral-spray",
    title: "Marinox Vitamin B12 – Oral Spray",
    image: "/assets/b12-spray.jpg.jpeg",
    category: "Oral Spray",
    bullets: ["Boosts energy levels", "Supports nervous system health"],
  },
  {
    slug: "hangover-oral-spray",
    title: "Marinox hangOVER – Oral Spray",
    image: "/assets/hangover-spray.jpg.jpeg",
    category: "Oral Spray",
    bullets: ["Rehydrates body", "Supports liver function"],
  },
  {
    slug: "vitamins-b-oral-spray",
    title: "Marinox Vitamins B – Oral Spray",
    image: "/assets/vitamin-b-spray.jpg.jpeg",
    category: "Oral Spray",
    bullets: ["Helps metabolism", "Reduces tiredness and fatigue"],
  },
  {
    slug: "biotin-oral-spray",
    title: "Marinox Biotin – Oral Spray",
    image: "/assets/biotin-spray.jpg.jpeg",
    category: "Oral Spray",
    bullets: ["Supports hair growth", "Improves skin & nails"],
  },
  {
    slug: "calcium-multivitamin-oral-gel",
    title: "Marinox Calcium MULTIVITAMIN – Oral Gel",
    image: "/assets/calcium-multivitamin-gel.jpg.jpeg",
    category: "Oral Gel",
    bullets: ["Supports strong bones", "Fortified with vitamins"],
  },
  {
    slug: "magnesium-oral-gel",
    title: "Marinox Magnesium – Oral Gel",
    image: "/assets/magnesium-gel.jpg.jpeg",
    category: "Oral Gel",
    bullets: ["Reduces cramps", "Supports muscle function"],
  },
  {
    slug: "vitamin-c-oral-gel",
    title: "Marinox Vitamin C – Oral Gel",
    image: "/assets/vitamin-c-gel.jpg.jpeg",
    category: "Oral Gel",
    bullets: ["Supports immune system", "Powerful antioxidant"],
  },
  {
    slug: "beauty-collagen-oral-gel",
    title: "Marinox Beauty COLLAGEN – Oral Gel",
    image: "/assets/beauty-collagen-gel.jpg.jpeg",
    category: "Oral Gel",
    bullets: ["Supports skin elasticity", "Contains hyaluronic acid"],
  },
];