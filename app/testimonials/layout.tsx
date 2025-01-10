import { Metadata } from "next";
import Testimonials from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `Testimonials | ${companyName}`,
    description: `Read testimonials from our satisfied clients who have successfully found top talent through ${companyName} Recruitment.`,
    openGraph: {
        title: `Testimonials | ${companyName}`,
        description: `Read testimonials from our satisfied clients who have successfully found top talent through ${companyName} Recruitment.`,
        url: `https://${domain}/testimonials`,
        type: "website",
        images: [
            {
                url: `https://${domain}/logo.png`,
                width: 1200,
                height: 630,
                alt: `${companyName} Recruitment`,
            },
        ],
        siteName: `${companyName} Recruitment`,
    },
};


export default function Layout() {

    return (
        <Testimonials />
    )
}