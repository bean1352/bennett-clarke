import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Briefcase, Users, Trophy, Calculator, LineChart, Code2, Building2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroSection
        title="Find Your Next Star Employee"
        description="We connect top talent with leading companies. Our expertise in recruitment helps businesses grow with the right people."
      />

      {/* Stats Section */}
      <section>
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
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Sectors Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Sectors We Serve</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized recruitment expertise across key industries, delivering talented professionals to leading organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Calculator className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Actuarial</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Expert placement of actuarial professionals across insurance and consulting firms.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <LineChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Finance and Risk</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Connecting financial experts with opportunities in risk management and analysis.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Code2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Software Engineering and IT</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Placing top tech talent in innovative software and IT positions.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-none">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Banking</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                <p>Supporting financial institutions with expert banking professionals.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Services Section */}
      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Executive Search</CardTitle>
                <CardDescription>Find top-tier leadership talent for your organization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>C-Level Recruitment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>Director Positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Professional Staffing</CardTitle>
                <CardDescription>Build your team with qualified professionals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>Technical Roles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>Management Positions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Specialized Solutions</CardTitle>
                <CardDescription>Custom recruitment strategies for unique needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>Project-Based Hiring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-green-500" />
                    <span>Industry Specialists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50" />

      {/* Salary Insights Section */}
      <section className="py-12">
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
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View Salary Data
                </Link>
              </CardContent>
            </Card>
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
}