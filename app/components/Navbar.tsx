"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // تغییر استایل هنگام اسکرول
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // قفل اسکرول بادی وقتی منوی موبایل باز است
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  // بستن منو بعد از کلیک روی لینک
  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">
        {/* لوگو / نام برند */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight text-emerald-700 hover:text-emerald-600"
          onClick={closeMenu}
        >
          LifePower
        </Link>

        {/* لینک‌های دسکتاپ */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/" className="hover:text-emerald-600 transition" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/products" className="hover:text-emerald-600 transition" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/catalogs" className="hover:text-emerald-600 transition" onClick={closeMenu}>
            Catalogs
          </Link>
          <Link href="/#contact" className="hover:text-emerald-600 transition" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        {/* دکمه تماس (همیشه دیده شود در دسکتاپ) */}
        <a
          href="https://wa.me/971506680585?text=Hello%20LifePower%20Team!"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-500 transition text-sm font-semibold shadow-md"
        >
          <FaPhoneAlt />
          Contact Us
        </a>

        {/* دکمه همبرگری موبایل */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-emerald-700"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <FaBars />
        </button>
      </div>

      {/* لایه تیره پشت منوی موبایل */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* منوی موبایل (کشویی از راست) */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 h-full w-72 max-w-[80%] bg-white shadow-xl md:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="font-bold text-emerald-700 text-lg">Menu</span>
          <button
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 text-gray-700"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex flex-col p-4 text-gray-800">
          <Link href="/" className="py-3 px-2 rounded hover:bg-emerald-50" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/products" className="py-3 px-2 rounded hover:bg-emerald-50" onClick={closeMenu}>
            Products
          </Link>
          <Link href="/catalogs" className="py-3 px-2 rounded hover:bg-emerald-50" onClick={closeMenu}>
            Catalogs
          </Link>
          <Link href="/#contact" className="py-3 px-2 rounded hover:bg-emerald-50" onClick={closeMenu}>
            Contact
          </Link>

          <a
            href="https://wa.me/971506680585?text=Hello%20LifePower%20Team!"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-500 transition text-sm font-semibold"
            onClick={closeMenu}
          >
            <FaPhoneAlt />
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}