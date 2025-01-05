import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, Briefcase, Users, Trophy, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Find Your Next Star Employee</h1>
            <p className="text-xl mb-8">We connect top talent with leading companies. Our expertise in recruitment helps businesses grow with the right people.</p>
            <div className="space-x-4">
              <Button size="lg" variant="secondary">Hire Talent</Button>
              <Button size="lg" variant="outline" className="hover:text-white border-white text-blue-600">Find Jobs</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600 mt-2">Successful Placements</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">200+</p>
              <p className="text-gray-600 mt-2">Partner Companies</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">98%</p>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8 text-blue-600 mb-2" />
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
                <Users className="h-8 w-8 text-blue-600 mb-2" />
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
                <Trophy className="h-8 w-8 text-blue-600 mb-2" />
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

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Whether you&apos;re looking to hire top talent or find your dream job, we&apos;re here to help.</p>
          <Button size="lg" variant="secondary" className="gap-2">
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}