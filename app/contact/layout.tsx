import { Metadata } from "next";
import Contact from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
  'Contact Us',
  `${companyName} is dedicated to connecting talent with opportunity. Reach out to us for expert recruitment services tailored to meet your unique needs. Whether you're looking to grow your team with exceptional talent or seeking your next career opportunity, we're here to help every step of the way. Our team is ready to assist you with personalized solutions, ensuring a seamless recruitment experience. Contact us today and let us help you achieve your goals.`
);

export default function Layout() {
  return (
    <Contact />
  )
}