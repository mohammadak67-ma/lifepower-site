import Link from "next/link";
import { motion } from "framer-motion";

type Props = { slug: string; title: string; image: string };

export default function ProductCard({ slug, title, image }: Props) {
  return (
    <Link href={`/products/${slug}`} className="block">
      <motion.div
        className="rounded-2xl border p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
      >
        {/* قاب تصویر با کراپ پایین */}
        <div className="relative w-full aspect-[1/1] overflow-hidden rounded-xl bg-emerald-50/40">
          <img
            src={image}
            alt={title}
            /* object-cover = پرکردن قاب، object-top = تمرکز روی بالای تصویر */
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>

        <h3 className="text-lg font-semibold mt-3 text-center text-gray-800">
          {title}
        </h3>
      </motion.div>
    </Link>
  );
}