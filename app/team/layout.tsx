import { Metadata } from "next";
import Team from "./page";

const domain = process.env.DOMAIN;

export const metadata: Metadata = {
  title: 'Meet our Team | Arthur Edwards Recruitment',
  description: 'Discover the talented professionals at Arthur Edwards. Learn more about our team and how we work together to deliver exceptional results.',
  openGraph: {
    title: 'Meet our Team | Arthur Edwards',
    description: 'Discover the talented professionals at Arthur Edwards. Learn more about our team and how we work together to deliver exceptional results.',
    url: `https://${domain}/team`,
    type: 'website',
    images: [
      {
        url: `https://${domain}/logo.png`, // Replace with the correct image path
        width: 40,
        height: 40,
        alt: 'Arthur Edwards Team',
      },
    ],
  },
};

export default function Layout(){
    return (
      <Team />
    );
}