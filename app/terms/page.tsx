import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { generatePageMetadata } from "@/components/generate-page-metadata";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

export const metadata: Metadata = generatePageMetadata(
    'Terms of Service',
    `Terms of service and conditions for using ${companyName}`
);

const TermsPage = () => {
    const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
    const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;

    return (
        <div className="min-h-screen flex justify-center">
            <div className="container max-w-3xl py-6 md:py-10 px-4">
                <div className="space-y-6 flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Terms of Service</h1>
                    </div>

                    <Separator className="w-full" />

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">1. Agreement to Terms</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            By accessing or using our recruitment platform, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">2. User Accounts</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account.
                        </p>
                        <ul className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <li>You must be at least 18 years old to create an account</li>
                            <li>You may not use another person&apos;s account without permission</li>
                            <li>You must notify us immediately of any security breaches</li>
                            <li>You may not use our services for any illegal purposes</li>
                        </ul>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">3. Job Postings and Applications</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Employers are responsible for ensuring their job postings are accurate and comply with all applicable laws. Job seekers must ensure their applications and credentials are truthful and accurate.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">4. Privacy Policy</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Your use of our service is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            The service and its original content, features, and functionality are owned by Your Recruitment Site and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">6. Termination</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">7. Limitation of Liability</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            In no event shall Your Recruitment Site, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">8. Changes to Terms</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days&apos; notice prior to any new terms taking effect.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">9. Contact Us</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            If you have any questions about these Terms, please contact us at:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>E-mail: {email}</p>
                            <p>Phone: {phone}</p>
                        </div>
                    </section>

                    <Separator className="w-full" />

                    <footer className="text-sm text-muted-foreground max-w-2xl">
                        <p>
                            By using {companyName}, you acknowledge that you have read these Terms of Service and agree to be bound by them.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;