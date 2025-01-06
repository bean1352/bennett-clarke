import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Briefcase, Users, Trophy, ArrowRight, Calculator, LineChart, Code2, Building2 } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center max-w-3xl md:justify-start md:items-start md:text-start flex-col text-center">
            <h1 className="text-5xl font-bold mb-6">Find Your Next Star Employee</h1>
            <p className="text-xl mb-8">We connect top talent with leading companies. Our expertise in recruitment helps businesses grow with the right people.</p>
            <div className="space-x-4">
              <Button size="lg" className="!bg-primary !text-primary-foreground hover:!bg-primary/70">Hire Talent</Button>
              <Button size="lg" className="!bg-primary !text-primary-foreground hover:!bg-primary/70">Find Jobs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold">500+</p>
              <p className="text-muted-foreground mt-2">Successful Placements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">200+</p>
              <p className="text-muted-foreground mt-2">Partner Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-muted-foreground mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-12 opacity-50"/>

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

      <Separator className="my-12 opacity-50"/>

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

      <Separator className="my-12 opacity-50"/>

      {/* CTA Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Whether you&apos;re looking to hire top talent or find your dream job, we&apos;re here to help.</p>
          <Button size="lg" variant="secondary" className="gap-2">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
    
  );
}