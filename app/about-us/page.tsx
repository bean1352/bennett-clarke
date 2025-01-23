"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { Award, ShieldCheck, Lightbulb, Users } from 'lucide-react';
import ImageWithSkeleton from "@/components/image-with-skeleton";

const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;
const founderName = 'Alex Bruhns';

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every interaction and placement we make.",
    icon: <Award className="h-8 w-8 text-primary" />,
  },
  {
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our dealings.",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
  },
  {
    title: "Innovation",
    description: "We embrace new technologies and methods to deliver innovative talent solutions.",
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
  },
  {
    title: "Collaboration",
    description: "We believe in the power of working together to achieve great results.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

const AboutPage = () => {
  return (
    <>
      <HeroSection
        title="Connecting talent with opportunity"
        description="We are on a mission to revolutionise the recruitment industry through innovation and human-centered solutions."
      />

      <Separator className="my-12" />

      <section className="px-4 md:px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left relative border-l-4 border-primary pl-6 before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-4 before:h-[4px] before:bg-primary after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-4 after:h-[4px] after:bg-primary">
            <div className="flex justify-center">
              <Badge variant="default" className="text-lg px-4 py-1">
                Our Story
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-6 text-center">
              {founderName}
            </h2>
            <p className="text-lg text-muted-foreground mt-6">
              Our founder, Alex, combined his actuarial expertise with a passion for connecting people to bring a unique perspective to the world of recruitment. He recognised the need for a more tailored approach, one that would truly understand the needs of both candidates and clients. This passion for innovation led Alex to found Bennett Clarke Solutions, with the mission of transforming careers and empowering businesses.
            </p>
          </div>
          <ImageWithSkeleton
              src="/alex-bruhns-ai.png"
              alt={`${founderName}, Founder of ${companyName}`}
              width={500}
              height={500}
            />
        </div>
      </section>

      <Separator className="my-12" />

      {/* Mission Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="relative border-l-4 border-primary pl-6 before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-4 before:h-[4px] before:bg-primary after:content-[''] after:absolute after:left-[-4px] after:bottom-0 after:w-4 after:h-[4px] after:bg-primary">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge variant="default" className="text-lg px-4 py-1">
                  Our Mission
                </Badge>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Transforming Careers, Empowering Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe in creating meaningful connections between talented professionals and forward-thinking companies. Our approach combines expert knowledge with a personal touch to deliver exceptional talent solutions that drives business success and career growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Values Section */}
      <section className="px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="default" className="text-lg px-4 py-1">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold mt-4">What drives us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 ">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <CTASection
        title="Let’s chat"
        description="Whether you are a company looking to hire top talent or a professional seeking a new challenge, we’d love to chat."
        linkText="Contact Us"
        linkHref="/contact"
      />
    </>
  );
};

export default AboutPage;