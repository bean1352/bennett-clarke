import { Metadata } from "next";
import Testimonials from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Testimonials',
    `Discover what leading organizations and talented professionals say about their experience with ${companyName}. Our collection of testimonials showcases successful partnerships across actuarial, banking, engineering, and technology sectors. From seamless recruitment processes to long-term career placements, our clients share their stories of finding exceptional talent and advancing their professional journeys. These firsthand accounts demonstrate our commitment to understanding unique organizational needs, our thorough candidate evaluation process, and our ability to create lasting professional matches. Whether you're an employer seeking top talent or a professional looking for your next career move, these testimonials offer valuable insights into how ${companyName} delivers outstanding recruitment solutions that exceed expectations.`
);

export default function Layout() {

    return (
        <Testimonials />
    )
}