import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin as LinkedIn, Mail, Phone, Users } from "lucide-react";
import Image from 'next/image';

export default function Team() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-24">
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

      {/* Team Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Expert Recruiters</h2>
            <p className="text-gray-600">
              With decades of combined experience, our team brings deep industry
              knowledge and a passionate commitment to matching the right talent
              with the right opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            <Card>
              <CardHeader>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src='/alex-bruhns.jpg' alt='Alex Bruhns' className="w-full h-full object-cover" width={128} height={128}/>
                </div>
                <CardTitle className="text-center">Alex Bruhns</CardTitle>
                <p className="text-center text-blue-600 font-medium">
                  CEO & Founder
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  15+ years of executive recruitment experience specializing in
                  tech industry placements.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <LinkedIn className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src='/jarrod-bruhns.jpg' alt='Jarrod Bruhns' className="w-full h-full object-cover" width={128} height={128}/>
                </div>
                <CardTitle className="text-center">Jarrod Bruhns</CardTitle>
                <p className="text-center text-blue-600 font-medium">
                  Senior Recruiter
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Specialized in technical recruitment with a focus on software
                  development roles.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <LinkedIn className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Phone className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src='/jenna-sykes.jpg' alt='Jenna Sykes' className="w-full h-full object-cover" width={128} height={128}/>
                </div>
                <CardTitle className="text-center">Jenna Sykes</CardTitle>
                <p className="text-center text-blue-600 font-medium">
                  HR Specialist
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Expert in talent acquisition and employee relations with 8 years
                  of experience.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button variant="ghost" size="icon">
                    <LinkedIn className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Work With Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our experienced recruiters help you find the perfect candidate or
            your next career opportunity.
          </p>
          <Button size="lg" variant="secondary">
            Contact Us Today
          </Button>
        </div>
      </section>
    </main>
  );
}