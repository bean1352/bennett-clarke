import { Metadata } from "next";
import AboutPage from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `About Us | ${companyName}`,
    description: `${companyName} is a recruitment company specializing in connecting highly skilled talent in actuarial, banking, and engineering industries.`,
    openGraph: {
        title: `About Us | ${companyName}`,
        description: `${companyName} connects highly skilled professionals with top opportunities in actuarial, banking, and engineering sectors.`,
        url: `https://${domain}/about`,
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `https://${domain}/about`, 
                width: 1200,
                height: 630,
                alt: `About ${companyName}`,
            },
        ],
        siteName: `${companyName}`,
    },
    twitter: {
        card: "summary_large_image",
        title: `About Us | ${companyName}`,
        description: `${companyName} specializes in recruitment for actuarial, banking, and engineering industries, connecting top talent with leading organizations.`,
        images: [`https://${domain}/logo.png`], 
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://${domain}/about`
    },
};



export default function Layout() {

    return (
        <AboutPage />
    )
}