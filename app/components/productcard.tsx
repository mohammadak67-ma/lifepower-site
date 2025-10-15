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
        {/* قاب کوتاه برای بریدن متن‌های پایین عکس */}
        <div className="relative w-full overflow-hidden rounded-xl bg-emerald-50/40"
             style={{ height: 220 }}> {/* اگر متن هنوز دیده شد این عدد را کمتر کن: 200 یا 180 */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 10%" }} 
            /* 10% یعنی تمرکز بالاتر از مرکز. اگر متن هنوز دیده شد، عدد را منفی‌تر/بیشتر کن مثل 'center 0%' یا 'center -10%' */
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