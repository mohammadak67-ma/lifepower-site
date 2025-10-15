"use client";

import { useState } from "react";
import ProductCard from "../components/productcard";
import { products } from "./products";
import FloatButtons from "../components/FloatButtons"; // ✅ دکمه‌های شناور

const categories = ["All", "Oral Spray", "Oral Gel", "Collagen"] as const;
type Category = (typeof categories)[number];

export default function ProductsPage() {
  const [cat, setCat] = useState<Category>("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <main className="relative max-w-6xl mx-auto px-4 py-10">
      {/* ✅ دکمه‌های شناور */}
      <FloatButtons />

      {/* تیتر */}
      <h1 className="text-4xl font-bold text-emerald-700 text-center">Our Products</h1>
      <p className="text-center text-gray-600 mt-2 mb-8">
        High-quality food supplements for everyday health — simple, safe, and effective.
      </p>

      {/* فیلتر دسته‌بندی */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-4 py-2 rounded-full border transition
              ${cat === c
                ? "bg-emerald-600 text-white border-emerald-600"
                : "bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50"}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* گرید محصولات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.slug} slug={p.slug} title={p.title} image={p.image} />
        ))}
      </div>
    </main>
  );
}