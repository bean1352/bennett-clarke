import type { MetadataRoute } from 'next';
// import routes from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;
    // Include the base URL
    const baseUrl = [
        {
            url: `https://${domain}`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 1,
        },
        {
            url: `https://${domain}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const, 
            priority: 0.8,
        },
        {
            url: `https://${domain}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `https://${domain}/cookie-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `https://${domain}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
        {
            url: `https://${domain}/terms`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
    ];
    // return [...baseUrl, ...links];
    return baseUrl;
}