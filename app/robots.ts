import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://the-fcri-website.netlify.app'; // 🌐 replace with your domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // customize if you have those paths
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
