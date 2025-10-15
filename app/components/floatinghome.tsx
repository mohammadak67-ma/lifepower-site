"use client";

import Link from "next/link";

export default function FloatingHome() {
  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      title="Home"
    >
      <Link
        href="/"
        className="
          inline-flex items-center justify-center
          w-12 h-12 rounded-full bg-white/90 backdrop-blur
          shadow-lg ring-1 ring-black/10 hover:bg-white
          transition
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 text-emerald-700"
          fill="currentColor"
        >
          <path d="M12 3.172 2.293 12.88a1 1 0 1 0 1.414 1.414L5 13.001V20a2 2 0 0 0 2 2h3v-6h4v6h3a2 2 0 0 0 2-2v-6.999l1.293 1.293a1 1 0 0 0 1.414-1.414L12 3.172z" />
        </svg>
      </Link>
    </div>
  );
}