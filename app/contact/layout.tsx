import Contact from "./page";

const domain = process.env.DOMAIN || "arthuredwards.com";

export const metadata = {
  title: "Contact Us | Arthur Edwards",
  description: "Get in touch with Arthur Edwards for expert recruitment services. We’re here to help connect talent with opportunity.",
  openGraph: {
    title: "Contact Us | Arthur Edwards",
    description: "Reach out to Arthur Edwards for professional recruitment solutions. Let’s connect and build a brighter future together.",
    url: `https://${domain}/contact`,
    type: "website",
    images: [
      {
        url: `https://${domain}/contact`, 
        width: 40,
        height: 40,
        alt: "Contact Arthur Edwards",
      },
    ],
    siteName: "Arthur Edwards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Arthur Edwards",
    description: "Get in touch with Arthur Edwards for expert recruitment services. We’re here to help connect talent with opportunity.",
    images: [`https://${domain}/logo.png`], 
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `https://${domain}/contact`,
    languages: {
      "en-US": `https://${domain}/en/contact`
    },
  },
};

export default function Layout(){
    return (
        <Contact />
    )
}