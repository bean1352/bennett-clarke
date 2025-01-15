import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export const metadata: Metadata = {
    title: `Privacy Policy | ${companyName}`,
    description: `Privacy policy and data handling practices for ${companyName}`,
    openGraph: {
        title: `Privacy Policy | ${companyName}`,
        description: `Privacy policy and data handling practices for ${companyName}`,
        url: `https://${domain}/privacy-policy`,
        type: "website",
        siteName: `${companyName} Privacy Policy`,
    },
};


const PrivacyPage = () => {
    const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
    const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;

    return (
        <div className="min-h-screen flex justify-center">
            <div className="container max-w-3xl py-6 md:py-10 px-4">
                <div className="space-y-6 flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Privacy Policy</h1>
                    </div>

                    <Separator className="w-full" />

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">1. Introduction</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our recruitment platform. Please read this privacy policy carefully.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We collect information that you voluntarily provide when using our service, including:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>• Personal identification information (name, email, phone number)</p>
                            <p>• Professional information (resume, work history, skills)</p>
                            <p>• Account credentials</p>
                            <p>• Communication preferences</p>
                            <p>• Any other information you choose to provide</p>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We use the collected information for various purposes, including:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>• Facilitating job applications and recruitment processes</p>
                            <p>• Providing and maintaining our service</p>
                            <p>• Responding to your inquiries and support requests</p>
                            <p>• Sending you relevant job opportunities</p>
                            <p>• Improving our platform and user experience</p>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">4. Data Storage and Security</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">5. Cookies and Tracking</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">6. Third-Party Disclosure</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We may share your information with:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>• Employers when you apply for jobs</p>
                            <p>• Service providers who assist our operations</p>
                            <p>• Law enforcement when required by law</p>
                            <p>• Business partners with your consent</p>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">7. Your Data Rights</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            You have the right to:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>• Access your personal data</p>
                            <p>• Correct inaccurate data</p>
                            <p>• Request deletion of your data</p>
                            <p>• Object to data processing</p>
                            <p>• Request data portability</p>
                        </div>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">8. Children&apos;s Privacy</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Our service is not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">9. Changes to This Policy</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                        </p>
                    </section>

                    <section className="space-y-4 max-w-2xl">
                        <h2 className="text-xl font-semibold">10. Contact Us</h2>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            If you have questions about this Privacy Policy, please contact us at:
                        </p>
                        <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                        </div>
                    </section>

                    <Separator className="w-full" />

                    <footer className="text-sm text-muted-foreground max-w-2xl">
                        <p>
                            By using {companyName}, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;