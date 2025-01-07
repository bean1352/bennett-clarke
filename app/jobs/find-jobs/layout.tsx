import Careers from "./page";

const domain = process.env.DOMAIN

export const metadata = {
    title: "Find Jobs | Arthur Edwards",
    description: "Explore exciting career opportunities with Arthur Edwards. Discover the perfect job for you with our expert recruitment services.",
    openGraph: {
      title: "Find Jobs | Arthur Edwards",
      description: "Browse our job catalog and find your next opportunity. Arthur Edwards connects top talent with leading organizations.",
      url: `https://${domain}/jobs/find-jobs`,
      icons: [`https://${domain}/logo.png`],
      locale: "en_US",
      type: "website",
      images: [
        {
          url: `https://${domain}/jobs/find-jobs`, 
          width: 40,
          height: 40,
          alt: "Find Jobs at Arthur Edwards",
        },
      ],
      siteName: "Arthur Edwards",
    },
    twitter: {
      card: "summary_large_image",
      title: "Find Jobs | Arthur Edwards",
      description: "Discover career opportunities with Arthur Edwards. Let us help you find your next role and connect with top organizations.",
      images: [`https://${domain}/logo.png`], 
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://${domain}/jobs/find-jobs`
    },
  };
  

export default function Layout(){
    return (
        <Careers />
    )
}