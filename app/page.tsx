import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Users, Calculator, Code2, Banknote, BarChart2, Shield } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Let’s create a roadmap to your success"
        description="We are passionate about what we do and dedicated to connecting top talent with leading companies."
      />

      {/* Stats Section */}
      {/* <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 rounded-lg shadow-md">
              <CardHeader>
                <p className="text-4xl font-bold">500+</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-2">Successful Placements</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 rounded-lg shadow-md">
              <CardHeader>
                <p className="text-4xl font-bold">200+</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-2">Partner Companies</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 rounded-lg shadow-md">
              <CardHeader>
                <p className="text-4xl font-bold">98%</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mt-2">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <Separator className="mb-12 opacity-50" />

      {/* Sectors Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Areas of expertise</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Our expertise in talent solutions helps businesses grow with the right people.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Accounting & Finance</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <BarChart2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Actuarial</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Banknote className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Banking & Financial Services</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Information Technology & Digital</CardTitle>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
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

      <Separator className="my-12 opacity-50" />

      {/* Services Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Executive Search</CardTitle>
                <CardDescription>Find top-tier leadership talent for your organisation</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Permanent recruitment</CardTitle>
                <CardDescription>Build your team with qualified permanent professionals</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Salary Insights Section */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">South African Salary Insights</h2>
            <p className="text-muted-foreground mb-8">
              Stay informed about market trends with our comprehensive salary data across different industries in South Africa.
            </p>

            <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Industry Salary Explorer</CardTitle>
                <CardDescription className="text-lg mt-2">
                  Explore average salaries across different industries in South Africa
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link
                  href="/job-salaries"
                  className="inline-flex items-center justify-center rounded-md px-8 py-3 text-sm font-medium shadow transition-colors"
                  aria-label="View Salary Data"
                >
                  View Salary Data
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      <CTASection
        title="Let’s chat"
        description="Whether you are a company looking to hire top talent or a professional seeking a new challenge, we’d love to chat."
        linkText="Contact Us"
        linkHref="/contact"
      />
    </>
  );
}