import { Metadata } from "next";
import AboutPage from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'About Us',
    `${companyName} is a recruitment company specializing in connecting highly skilled talent in actuarial, banking, and engineering industries.`
);

export default function Layout() {

    return (
        <AboutPage />
    )
}

