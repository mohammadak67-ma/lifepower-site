"use client";
import Link from "next/link";
import { FaHome, FaPhone } from "react-icons/fa";

function GlowButton({
  href,
  label,
  children,
  gradient,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  gradient: string; // eg: "from-emerald-500 via-emerald-400 to-teal-500"
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative inline-flex"
      scroll={true}
    >
      {/* هاله‌ی نور (Glow) */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-full
          blur-xl opacity-0 group-hover:opacity-100
          transition duration-500 ease-out
        "
        // رنگ هاله مطابق گرادیان دکمه
        style={{ background: "radial-gradient(40% 40% at 50% 50%, rgba(16,185,129,.45), transparent 60%)" }}
      />
      {/* خود دکمه */}
      <span
        className={`
          relative rounded-full p-4 text-white ring-1 ring-white/20
          shadow-[0_10px_30px_rgba(0,0,0,.25)]
          bg-gradient-to-br ${gradient}
          transition-transform duration-300 ease-out
          hover:scale-110 active:scale-95
        `}
      >
        {children}
      </span>
    </Link>
  );
}

export default function FloatButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <GlowButton
        href="/"
        label="Go to Home"
        gradient="from-emerald-600 via-emerald-500 to-teal-500"
      >
        <FaHome size={18} />
      </GlowButton>

      <GlowButton
        href="#contact"
        label="Go to Contact section"
        gradient="from-blue-600 via-sky-500 to-cyan-500"
      >
        <FaPhone size={18} />
      </GlowButton>
    </div>
  );
}