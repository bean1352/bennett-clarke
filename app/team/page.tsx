import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { TeamMemberCard } from "@/components/team-member-card";
import { Users } from "lucide-react";

export default function Team() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-secondary text-primary py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Meet Our Team</h1>
                        <p className="text-xl mb-8">
                            Our experienced recruitment professionals are dedicated to connecting
                            great talent with amazing opportunities.
                        </p>
                    </div>
                </div>
            </section>

            <HeroSection
                title="Meet Our Team"
                description="Our experienced recruitment professionals are dedicated to connecting great talent with amazing opportunities."
            />

            {/* Team Introduction */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h2 className="text-3xl font-bold mb-4">Expert Recruiters</h2>
                        <p className="text-muted-foreground">
                            With decades of combined experience, our team brings deep industry
                            knowledge and a passionate commitment to matching the right talent
                            with the right opportunities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="pb-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member Cards */}
                        <TeamMemberCard
                            name="Alex Bruhns"
                            title="CEO & Founder"
                            description="15+ years of executive recruitment experience specializing in tech industry placements."
                            imageSrc="/alex-bruhns.jpg"
                            linkedInUrl="https://www.linkedin.com/in/alex-bruhns-38972920a/"
                            contactInfo={{
                                type: "email",
                                value: "alex@company.com"
                            }}
                        />

                        <TeamMemberCard
                            name="Jarrod Bruhns"
                            title="Senior Recruiter"
                            description="Specialized in technical recruitment with a focus on software development roles."
                            imageSrc="/jarrod-bruhns.jpg"
                            linkedInUrl="https://www.linkedin.com/in/jarrod-bruhns-19696b217/"
                            contactInfo={{
                                type: "phone",
                                value: "+1234567890"
                            }}
                        />

                        <TeamMemberCard
                            name="Jenna Sykes"
                            title="HR Specialist"
                            description="Expert in talent acquisition and employee relations with 8 years of experience."
                            imageSrc="/jenna-sykes.jpg"
                            linkedInUrl="https://www.linkedin.com/in/jenna-sykes-62b7661a2/"
                            contactInfo={{
                                type: "email",
                                value: "jenna@company.com"
                            }}
                        />
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Transform Your Hiring Process?"
                description="Join thousands of companies who trust us with their recruitment needs."
                linkText="Contact Us"
                linkHref="/contact"
            />
        </>
    );
}