import { Metadata } from "next";
import Careers from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `Find Jobs | ${companyName} Recruitment`,
    description: `Explore exciting career opportunities with ${companyName}. Discover the perfect job for you with our expert recruitment services.`,
    openGraph: {
        title: `Find Jobs | ${companyName}`,
        description: `Browse our job catalog and find your next opportunity. ${companyName} connects top talent with leading organizations.`,
        url: `https://${domain}/jobs/find-jobs`,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `https://${domain}/jobs/find-jobs`, 
                width: 40,
                height: 40,
                alt: `Find Jobs at ${companyName}`,
            },
        ],
        siteName: `${companyName}`,
    },
    twitter: {
        card: "summary_large_image",
        title: `Find Jobs | ${companyName}`,
        description: `Discover career opportunities with ${companyName}. Let us help you find your next role and connect with top organizations.`,
        images: [`https://${domain}/logo.png`], 
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://${domain}/jobs/find-jobs`
    },
};

  

export default function Layout(){
    return (
        <Careers />
    )
}