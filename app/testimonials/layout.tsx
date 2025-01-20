import { Metadata } from "next";
import Testimonials from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Testimonials',
    `Read testimonials from our satisfied clients who have successfully found top talent through ${companyName} Recruitment.`
);

export default function Layout() {

    return (
        <Testimonials />
    )
}