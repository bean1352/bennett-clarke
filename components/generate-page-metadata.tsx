import { Metadata } from "next";

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export function generatePageMetadata(title: string, description: string): Metadata {
    return {
        title,
        description,
        openGraph: {
            description,
            url: `https://${domain}`,
            type: "website",
            images: [
              {
                url: `https://${domain}/logo.png`,
                width: 1200,
                height: 630,
                alt: `${companyName}`,
              },
            ],
            siteName: `${companyName}`,
        },
        twitter: {
            description,
            images: [`https://${domain}/logo.png`]
        }
    };
}