"use client";

import Image from "next/image";
import Link from "next/link";
import FloatButtons from "../components/FloatButtons";

export default function CatalogsPage() {
  const items = [
    {
      title: "Sprays & Gels Catalog",
      cover: "/assets/catalog-spray-cover.jpg.jpeg",
      pdf: "/catalogs/gels.sprays.pdf",
      desc: "Full range of oral sprays and gels.",
    },
    {
      title: "Capsules, Tablets & Lozenges",
      cover: "/assets/catalog-tablet-cover.jpg.jpeg",
      pdf: "/catalogs/capsuls.tablets.lozenges.pdf",
      desc: "Capsules, tablets and lozenges assortment.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-blue-50 to-emerald-50 py-12 px-4">
      {/* دکمه‌های شناور Home + Contact */}
      <FloatButtons />

      <section className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-emerald-700 text-center">Our Catalogs</h1>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Browse and download the latest LifePower product catalogs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-2xl bg-white border shadow-sm hover:shadow-md transition"
            >
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={c.cover}
                  alt={c.title}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 50vw, 100vw"
                  priority={false}
                />
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{c.title}</h2>
                <p className="text-gray-600 mt-1 mb-4">{c.desc}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={c.pdf}
                    target="_blank"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500 transition"
                  >
                    View PDF
                  </Link>
                  <Link
                    href={c.pdf}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}