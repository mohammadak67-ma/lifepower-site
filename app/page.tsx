"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FloatButtons from "./components/FloatButtons";

export default function HomePage() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref as any,
    offset: ["start start", "end end"],
  });

  // محو شدن آرام ویدیو هنگام اسکرول
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.1]);

  // کلاس مشترک دکمه‌ها (Open Catalog مثل View Products)
  const btn =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 " +
    "font-semibold text-white bg-emerald-600 hover:bg-emerald-500 " +
    "active:scale-[0.98] shadow-[0_10px_30px_rgba(16,185,129,0.35)] " +
    "ring-1 ring-emerald-300/40 transition";

  return (
    <main ref={ref as any} className="h-[400vh] snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      {/* ---------- 🎬 HERO VIDEO ---------- */}
      <section className="relative h-screen snap-start overflow-hidden">
        <motion.video
          src="/teaser.mp4"          // ✅ فقط یک پسوند
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: heroOpacity }}
        />
        {/* فیلتر تیره لطیف و گرادیان برای خوانایی */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        {/* تیتر بدون باکس – کمی کوچک‌تر */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-md">
            Welcome to LifePower
          </h1>
          <p className="mt-3 text-white/85 text-base md:text-lg drop-shadow">
            High-quality energy &amp; wellness supplements.
          </p>
        </div>
      </section>

      {/* ---------- 🧴 PRODUCTS ---------- */}
      <motion.section
        id="products"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-screen snap-start overflow-hidden text-white"
      >
        {/* بک‌گراند تمام‌صفحه */}
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/product-bg.png" alt="products background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 drop-shadow">Our Products</h2>
            <p className="mb-8 text-lg text-white/90 drop-shadow">
              Discover our range of high-quality oral supplements designed for your wellness.
            </p>
            <Link href="/products" className={btn}>
              View Products
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ---------- 📘 CATALOG ---------- */}
      <motion.section
        id="catalog"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-screen snap-start overflow-hidden text-white"
      >
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/catalog-bg.png" alt="catalog background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4 drop-shadow">Our Catalog</h2>
            <p className="mb-8 text-lg text-white/90 drop-shadow">
              Browse our full catalog of oral sprays, gels, and collagen supplements.
            </p>
            {/* همان استایل دکمه‌ی Products */}
            <Link href="/catalogs" className={btn}>
              Open Catalog
            </Link>
          </div>
        </div>
      </motion.section>

      {/* ---------- 📞 CONTACT ---------- */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.35 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-screen snap-start overflow-hidden text-white"
      >
        <div className="absolute inset-0 -z-10">
          <Image src="/assets/contact-bg.png" alt="contact background" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/35" />

        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="w-full max-w-md rounded-2xl bg-white/10 p-8 text-center backdrop-blur-md shadow-xl ring-1 ring-white/20">
            <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
            <p className="text-white/90">
              Get in touch with our team directly via WhatsApp or Email.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://wa.me/971506680585?text=Hello%20LifePower%20Team!%20I'd%20like%20to%20know%20more%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className={btn}
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@lifepowertrading.com"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3
                           font-semibold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98]
                           shadow-[0_10px_30px_rgba(37,99,235,0.35)] ring-1 ring-blue-300/40 transition"
              >
                Send Email
              </a>
            </div>

            <p className="text-sm opacity-80 mt-6">
              info@lifepowertrading.com <br /> +971 50 668 0585
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}