import { notFound } from "next/navigation";
import { products } from "../products";

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const { title, image, category, bullets = [] } = product;

  // ✅ جمله واتساپ به صورت خودکار بر اساس نام محصول ساخته می‌شود
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in buying ${title}. Could you please give me more details?`
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <a href="/products" className="text-emerald-700 hover:underline">
        ← Back to products
      </a>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10 border rounded-2xl bg-white p-8 shadow-sm">
        {/* بخش عکس */}
        <div className="flex justify-center items-center bg-emerald-50/50 rounded-xl p-4">
          <img
            src={image}
            alt={title}
            className="object-contain w-[95%] h-auto md:w-[100%] rounded-lg"
          />
        </div>

        {/* بخش توضیحات */}
        <div className="flex flex-col justify-center">
          <span className="text-sm uppercase tracking-wide text-emerald-600 font-medium">
            {category}
          </span>
          <h1 className="text-2xl font-semibold mt-2 mb-4 text-gray-900">
            {title}
          </h1>

          {bullets.length > 0 && (
            <ul className="list-disc ml-5 text-gray-700 space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}

          {/* توضیح اضافی */}
          <div className="bg-emerald-50 p-4 rounded-lg text-gray-700 leading-relaxed mb-6">
            <p>
              Our {title} is made with high-quality ingredients to support your
              overall wellness. It’s designed for daily use and provides
              effective nutrient absorption for best results.
            </p>
            <p className="mt-3 text-emerald-700 font-medium">
              Made in Germany 🇩🇪 – Trusted European quality.
            </p>
          </div>

          {/* دکمه واتساپ */}
          <a
            href={`https://wa.me/971506680585?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.87 11.87 0 001.64 6L0 24l6.24-1.64A11.87 11.87 0 0012 24c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.4l-.36-.21-3.7.97.99-3.6-.24-.37A9.92 9.92 0 012.1 12c0-5.45 4.45-9.9 9.9-9.9 2.65 0 5.14 1.03 7.01 2.9A9.82 9.82 0 0122 12c0 5.45-4.45 10-10 10zm5.43-7.4c-.3-.15-1.78-.88-2.06-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.89-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.48 1.08 2.9 1.24 3.1.15.2 2.12 3.25 5.15 4.56.72.31 1.28.5 1.72.65.72.23 1.37.2 1.88.12.57-.08 1.78-.73 2.03-1.44.25-.7.25-1.3.17-1.44-.07-.13-.27-.2-.57-.35z" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}