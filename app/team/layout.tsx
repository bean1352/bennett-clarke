import { Metadata } from "next";
import Team from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Meet our Team',
    `Discover the talented professionals at ${companyName}. Learn more about our team and how we work together to deliver exceptional results.`
);

export default function Layout(){
    return (
      <Team />
    );
}