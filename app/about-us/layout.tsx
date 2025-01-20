import { Metadata } from "next";
import AboutPage from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'About Us',
    `${companyName} is a premier recruitment consultancy specializing in connecting exceptional talent with leading organizations across actuarial, banking, and engineering sectors. With years of industry expertise and a deep understanding of market dynamics, we pride ourselves on delivering personalized recruitment solutions that drive organizational success. Our dedicated team of consultants combines industry knowledge, extensive networks, and a thorough evaluation process to ensure precise matches between skilled professionals and career-defining opportunities. At ${companyName}, we're committed to fostering long-term partnerships and maintaining the highest standards of professional recruitment services.`
);

export default function Layout() {

    return (
        <AboutPage />
    )
}

