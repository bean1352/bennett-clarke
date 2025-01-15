import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `Cookie Policy | ${companyName}`,
    description: `Learn about how we use cookies and similar technologies on ${companyName}`,
    openGraph: {
        title: `Cookie Policy | ${companyName}`,
        description: `Discover how ${companyName} uses cookies and other technologies to enhance your experience on our website.`,
        url: `https://${domain}/cookie-policy`,
        locale: "en_US",
        type: "website",
        siteName: `${companyName}`,
    },
    twitter: {
        card: "summary_large_image",
        title: `Cookie Policy | ${companyName}`,
        description: `Learn how ${companyName} uses cookies and technologies to improve your website experience.`,
        images: [`https://${domain}/logo.png`], 
    },
    viewport: "width=device-width, initial-scale=1",
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: `https://${domain}/cookie-policy`
    },
};


const CookiesPage = () => {
    const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
    const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;

    return (
        <div className="min-h-screen flex justify-center">
            <div className="container max-w-3xl py-6 md:py-10 px-4">
                <div className="space-y-6 flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Cookie Policy</h1>
                    </div>

                    <Separator className="w-full" />

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">1. What Are Cookies?</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing site usage, and assisting with our marketing efforts.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">2. Types of Cookies We Use</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium">Essential Cookies</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium">Performance Cookies</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium">Functionality Cookies</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium">Targeting Cookies</h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">3. Specific Cookies We Use</h2>
                        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                            <p className="font-medium">Essential:</p>
                            <ul className="list-disc pl-6 text-left space-y-1">
                                <li>Session Cookie: Maintains your session while browsing</li>
                                <li>CSRF Token: Helps prevent cross-site request forgery</li>
                                <li>Authentication Cookie: Keeps you logged in</li>
                            </ul>

                            <p className="font-medium mt-4">Performance:</p>
                            <ul className="list-disc pl-6 text-left space-y-1">
                                <li>Google Analytics: Tracks website usage and performance</li>
                                <li>Load Balancing: Optimizes server response</li>
                            </ul>

                            <p className="font-medium mt-4">Functionality:</p>
                            <ul className="list-disc pl-6 text-left space-y-1">
                                <li>Language Preference: Remembers your preferred language</li>
                                <li>Theme Setting: Stores your dark/light mode preference</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">4. Managing Cookies</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">5. How to Control Cookies</h2>
                        <div className="space-y-2 text-sm leading-relaxed text-muted-foreground text-left">
                            <p>You can control cookies through your browser settings:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Chrome: Settings → Privacy and Security → Cookies</li>
                                <li>Firefox: Options → Privacy & Security → Cookies</li>
                                <li>Safari: Preferences → Privacy → Cookies</li>
                                <li>Edge: Settings → Privacy & Security → Cookies</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">6. Third-Party Cookies</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We use services from third parties that may set cookies on your device. We do not have control over these cookies. These third parties include analytics providers, advertising networks, and social media platforms.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">7. Updates to This Policy</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to periodically review this page for the latest information on our cookie practices.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">8. Contact Us</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            If you have questions about our use of cookies, please contact us at:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-1">
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                        </div>
                    </section>

                    <Separator className="w-full" />

                    <footer className="text-sm text-muted-foreground max-w-2xl">
                        <p>
                            By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default CookiesPage;