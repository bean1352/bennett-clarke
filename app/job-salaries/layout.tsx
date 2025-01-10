import { Metadata } from "next";
import AverageJobSalaries from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `Job Salaries | ${companyName}`,
    description: `Explore detailed salary statistics for various job categories over time. Use our interactive charts to analyze trends and make informed career decisions. Stay updated with the latest salary data in your field.`,
    openGraph: {
        title: `Job Salaries | ${companyName}`,
        description: `Explore salary statistics and trends for different job categories with ${companyName}. Make informed decisions using our interactive charts.`,
        url: `https://${domain}/job-salaries`,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `https://${domain}/job-salaries`,
                width: 1200,
                height: 630,
                alt: `Job Salaries at ${companyName}`,
            },
        ],
        siteName: `${companyName}`,
    },
    twitter: {
        card: "summary_large_image",
        title: `Job Salaries | ${companyName}`,
        description: `Get the latest job salary data and trends with ${companyName}. Analyze salaries and make informed career choices.`,
        images: [`https://${domain}/logo.png`],
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://${domain}/job-salaries`
    },
};


export default function Layout() {
    return (
        <AverageJobSalaries />
    )
}