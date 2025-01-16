import { Metadata } from "next";
import AboutPage from "./page";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `About Us | ${companyName}`,
    description: `${companyName} is a recruitment company specializing in connecting highly skilled talent in actuarial, banking, and engineering industries.`,
    openGraph: {
        title: `About Us | ${companyName}`,
        description: `${companyName} connects highly skilled professionals with top opportunities in actuarial, banking, and engineering sectors.`,
        url: `https://${domain}/about-us`
    }
};

export default function Layout() {

    return (
        <AboutPage />
    )
}