import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const host = 'https://www.lifepowertrading.com';
  return {
    rules: [
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}