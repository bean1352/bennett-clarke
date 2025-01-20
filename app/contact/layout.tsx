import { Metadata } from "next";
import Contact from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Contact Us',
    `Get in touch with ${companyName} for expert recruitment services. We’re here to help connect talent with opportunity.`
);

export default function Layout() {
  return (
    <Contact />
  )
}