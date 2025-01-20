import { Metadata } from "next";
import Careers from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Find Jobs',
    `Explore exciting career opportunities with ${companyName}. Discover the perfect job for you with our expert recruitment services.`
);

export default function Layout(){
    return (
        <Careers />
    )
}