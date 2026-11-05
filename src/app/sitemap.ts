import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://cryptoconsult.me';
  let blogEntries: MetadataRoute.Sitemap = [];

  try {
    const posts = await getBlogPosts();
    blogEntries = (posts || []).map((post: any) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8
    }));
  } catch (_) {}

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/services/securite-ledger-auto-garde`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95
    },
    {
      url: `${baseUrl}/services/consultant-defi-rendement`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95
    },
    {
      url: `${baseUrl}/services/conseil-crypto-ile-maurice`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9
    },
    ...blogEntries
  ];
}
