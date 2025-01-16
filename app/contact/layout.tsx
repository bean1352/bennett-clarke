import { Metadata } from "next";
import Contact from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: `Contact Us | ${companyName}`,
  description: `Get in touch with ${companyName} for expert recruitment services. We’re here to help connect talent with opportunity.`,
  openGraph: {
    title: `Contact Us | ${companyName}`,
    description: `Reach out to ${companyName} for professional recruitment solutions. Let’s connect and build a brighter future together.`,
    url: `https://${domain}/contact`
  }
};

export default function Layout(){
    return (
        <Contact />
    )
}