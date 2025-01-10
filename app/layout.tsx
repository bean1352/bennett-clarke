import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import CookieConsent from "@/components/cookie-consent";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"
import type { Viewport } from 'next'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google'

export const viewport: Viewport = {
  themeColor: 'black',
  initialScale: 1,
  width: 'device-width'
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
  title: "Arthur Edwards Recruitment",
  description: "Arthur Edwards specialises in high-skill recruitment, connecting top talent with leading organisations worldwide.",
  keywords: [
    "Arthur Edwards",
    "high-skill recruitment",
    "executive search",
    "talent acquisition",
    "professional recruitment",
    "job placement",
    "career opportunities",
  ],
  abstract: "Arthur Edwards Recruitment: Your trusted partner for high-skill recruitment. Connecting top talent with leading organisations worldwide.",
  openGraph: {
    title: "Arthur Edwards | High-Skill Recruitment",
    description: "Arthur Edwards connects top-tier talent with global organisations, providing expert recruitment services tailored to your needs.",
    url: `https://${domain}`,
    type: "website",
    images: [
      {
        url: `https://${domain}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Arthur Edwards Recruitment",
      },
    ],
    siteName: "Arthur Edwards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur Edwards | High-Skill Recruitment",
    description: "Arthur Edwards connects top-tier talent with global organisations, providing expert recruitment services tailored to your needs.",
    images: [`https://${domain}/logo.png`],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  themeColor: "#ffffff",
  alternates: {
    canonical: `https://${domain}`,
    languages: {
      "en-US": `https://${domain}/en`
    },
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      new URL('/icon.png', `https://${domain}`),
      { url: '/icon.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-touch-icon-precomposed.png',
      },
    ],
  },
  manifest: `${domain}/site.webmanifest`, // Update with your manifest file path if used
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CookieConsent />
          <header className="border-b">
            <MainNav />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Toaster />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || 'G-8678B4LPXP'} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

