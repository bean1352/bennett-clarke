import type { MetadataRoute } from 'next';
import routes from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = process.env.NEXT_PUBLIC_DOMAIN;

    // Collect all the links from the routes
    const links = Object.values(routes).flatMap((section) =>
        section.links.map((link) => ({
            url: `https://${domain}${link.href}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const, // Ensure the value matches the required type
            priority: 0.8,
        }))
    );

    // Include the base URL
    const baseUrl = [
        {
            url: `https://${domain}`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const, // Ensure the value matches the required type
            priority: 1,
        },
    ];

    return [...baseUrl, ...links];
}