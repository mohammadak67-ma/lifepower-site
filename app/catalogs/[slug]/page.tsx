import { notFound } from "next/navigation";
import Link from "next/link";
import { catalogs } from "../data";

type Params = { params: { slug: string } };

export default function CatalogViewPage({ params: { slug } }: Params) {
  const cat = catalogs.find((c) => c.slug === slug);
  if (!cat) return notFound();

  const isPDF = cat.file.toLowerCase().endsWith(".pdf");

  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/catalogs" className="text-emerald-700 hover:underline">
        ← Back to catalogs
      </Link>

      <h1 className="text-3xl font-bold mt-4 text-gray-900">{cat.title}</h1>
      {cat.description && <p className="text-gray-600 mt-1">{cat.description}</p>}

      <div className="mt-6 rounded-xl overflow-hidden border">
        {isPDF ? (
          <iframe
            src={cat.file}
            className="w-full h-[80vh]"
            title={cat.title}
          />
        ) : (
          <img src={cat.file} alt={cat.title} className="w-full h-auto" />
        )}
      </div>

      <div className="mt-4 flex gap-3">
        <a
          href={cat.file}
          download
          className="px-4 py-2 rounded-full bg-emerald-600 text-white hover:bg-emerald-500"
        >
          Download
        </a>
        <a
          href={cat.file}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-gray-200 text-gray-900 hover:bg-gray-300"
        >
          Open in new tab
        </a>
      </div>
    </main>
  );
}