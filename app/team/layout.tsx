import { Metadata } from "next";
import Team from "./page";

const domain = process.env.DOMAIN;
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = {
  title: `Meet our Team | ${companyName}`,
  description: `Discover the talented professionals at ${companyName}. Learn more about our team and how we work together to deliver exceptional results.`,
  openGraph: {
    title: `Meet our Team | ${companyName}`,
    description: `Discover the talented professionals at ${companyName}. Learn more about our team and how we work together to deliver exceptional results.`,
    url: `https://${domain}/team`,
    type: 'website',
    images: [
      {
        url: `https://${domain}/logo.png`, // Replace with the correct image path
        width: 40,
        height: 40,
        alt: `${companyName}`,
      },
    ],
  },
};

export default function Layout(){
    return (
      <Team />
    );
}