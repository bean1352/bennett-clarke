import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Users, Calculator, Code2, Banknote, BarChart2, Shield, Handshake, Building, Heart } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Let's create a roadmap to your success"
        description="We are passionate about what we do and dedicated to connecting top talent with leading companies."
      />

      <Separator className="my-12" />

      {/* Sectors Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Areas of expertise</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our expertise in talent solutions helps businesses grow with the right people.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Accounting & Finance</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <BarChart2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Actuarial</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Banknote className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Banking & Financial Services</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Information Technology & Digital</CardTitle>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Risk & Compliance</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Partnership Image Section */}
      <section>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row text-center md:text-left gap-12 items-center">
            {/* Text Content */}
            <div className="w-full md:w-7/12 max-w-xl">
              <h2 className="text-3xl font-bold mb-6">Building Successful Partnerships</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We believe in creating lasting relationships that drive success for both businesses and professionals. Our approach is built on trust, expertise, and a deep understanding of your needs.
              </p>
              <div className="flex flex-col space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Dedicated to exceptional customer relationships</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Partnering with industry leaders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">Long-term relationship focused</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-5/12 mt-8 md:mt-0">
              <div className="relative rounded-xl shadow-xl overflow-hidden">
                <ImageWithSkeleton
                  src="/shaking-hands.jpg"
                  alt="Professional handshake representing successful business partnership"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Services Section */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Connecting exceptional talent with outstanding opportunities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader className="space-y-4">
                <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center group-hover:bg-muted/80 transition-colors duration-300">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Executive Search</CardTitle>
                <CardDescription>
                  Find top-tier leadership talent for your organisation with our comprehensive executive search solutions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="space-y-4">
                <div className="rounded-full bg-muted w-16 h-16 flex items-center justify-center group-hover:bg-muted/80 transition-colors duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Permanent Recruitment</CardTitle>
                <CardDescription>
                  Build your team with qualified permanent professionals through our targeted recruitment services.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <CTASection
        title="Let's chat"
        description="Whether you are a company looking to hire top talent or a professional seeking a new challenge, we'd love to chat."
        linkText="Contact Us"
        linkHref="/contact"
      />
    </>
  );
}