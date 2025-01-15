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
    url: `https://${domain}/contact`,
    type: "website",
    images: [
      {
        url: `https://${domain}/contact`, 
        width: 40,
        height: 40,
        alt: `Contact ${companyName}`,
      },
    ],
    siteName: `${companyName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${companyName}`,
    description: `Get in touch with ${companyName} for expert recruitment services. We’re here to help connect talent with opportunity.`,
    images: [`https://${domain}/logo.png`], 
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://${domain}/contact`
  },
};

export default function Layout(){
    return (
        <Contact />
    )
}