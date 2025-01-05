import Careers from "./page";

const domain = process.env.DOMAIN || "arthuredwards.com";

export const metadata = {
    title: "Careers | Arthur Edwards",
    description: "Explore exciting career opportunities with Arthur Edwards. Discover the perfect job for you with our expert recruitment services.",
    openGraph: {
      title: "Careers | Arthur Edwards",
      description: "Browse our job catalog and find your next opportunity. Arthur Edwards connects top talent with leading organizations.",
      url: `https://${domain}/careers`,
      type: "website",
      images: [
        {
          url: `https://${domain}/careers`, 
          width: 40,
          height: 40,
          alt: "Careers at Arthur Edwards",
        },
      ],
      siteName: "Arthur Edwards",
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers | Arthur Edwards",
      description: "Discover career opportunities with Arthur Edwards. Let us help you find your next role and connect with top organizations.",
      images: [`https://${domain}/logo.png`], 
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://${domain}/careers`,
      languages: {
        "en-US": `https://${domain}/en/careers`
      },
    },
  };
  

export default function Layout(){
    return (
        <Careers />
    )
}