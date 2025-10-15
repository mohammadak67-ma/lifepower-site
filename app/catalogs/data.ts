export type Catalog = {
  slug: string;
  title: string;
  cover: string;  // تصویر کاور در public/assets
  file: string;   // فایل PDF در public/catalogs
  description?: string;
};

export const catalogs: Catalog[] = [
  {
    slug: "gels-sprays",
    title: "Marinox Gels & Sprays",
    cover: "/assets/catalog-spray-cover.jpg.jpeg",
    file: "/catalogs/gels.sprays.pdf",
    description: "All Marinox oral gels & sprays in one catalog."
  },
  {
    slug: "capsules-tablets-lozenges",
    title: "Capsules • Tablets • Lozenges",
    cover: "/assets/catalog-tablet-cover.jpg.jpeg",
    file: "/catalogs/capsuls.tablets.lozenges.pdf",
    description: "Capsules, tablets, and lozenges product catalog."
  }
];