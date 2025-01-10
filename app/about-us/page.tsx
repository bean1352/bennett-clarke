import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Briefcase,
  Building2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";

export const metadata: Metadata = {
  title: "About Us | Your Recruitment Site",
  description: "Learn more about our mission, values, and the team behind Your Recruitment Site",
};

const stats = [
  {
    value: "10K+",
    label: "Successful Placements",
    icon: Briefcase,
  },
  {
    value: "5K+",
    label: "Partner Companies",
    icon: Building2,
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: Award,
  },
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every interaction and placement we make.",
  },
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and methods to improve our service.",
  },
  {
    title: "Collaboration",
    description: "We believe in the power of working together to achieve great results.",
  },
];

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="Connecting Talent with Opportunity"
        description="We are on a mission to revolutionize the recruitment industry through innovation and human-centered solutions."
      />

      <Separator className="my-12 opacity-50" />

      {/* Stats Section */}
      <section className="px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-3xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Mission Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-block">
            <Badge variant="secondary" className="text-lg px-4 py-1">
              Our Mission
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Transforming Careers, Empowering Businesses
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe in creating meaningful connections between talented individuals and forward-thinking companies. Our approach combines cutting-edge technology with personal touch to deliver exceptional recruitment solutions.
          </p>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Values Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="text-lg px-4 py-1">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mt-4">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      <CTASection
        title="Ready to Transform Your Hiring Process?"
        description="Join thousands of companies who trust us with their recruitment needs."
        linkText="Contact Us"
        linkHref="/contact"
      />
    </>
  );
};

export default AboutPage;