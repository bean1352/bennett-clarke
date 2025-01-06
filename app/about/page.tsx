import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Briefcase,
  Building2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
    <div>
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center max-w-3xl md:justify-start md:items-start md:text-start flex-col text-center">
            <h1 className="text-5xl font-bold mb-6">Connecting Talent with Opportunity</h1>
            <p className="text-xl mb-8">We are on a mission to revolutionize the recruitment industry through innovation and human-centered solutions.</p>
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50"/>

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

      <Separator className="my-12 opacity-50"/>

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

      <Separator className="my-12 opacity-50"/>

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

      <Separator className="my-12 opacity-50"/>

      {/* CTA Section */}
      <section className="px-4 pb-12 md:px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-lg">
            Join thousands of companies who trust us with their recruitment needs.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors">
              Contact Us
            </a>
            <a href="/employers" className="inline-flex items-center justify-center rounded-md border px-8 py-3 text-sm font-medium shadow transition-colors">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;