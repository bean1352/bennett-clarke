import CTASection from "@/components/cta-section";
import HeroSection from "@/components/hero-section";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, Company A",
    testimonial: "Bennett Clarke Solutions helped us find the perfect candidates for our executive positions. Their service is exceptional!",
  },
  {
    name: "Jane Smith",
    title: "HR Manager, Company B",
    testimonial: "The team at Bennett Clarke Solutions is professional and efficient. We have been very satisfied with the candidates they provided.",
  },
  {
    name: "Michael Johnson",
    title: "CTO, Company C",
    testimonial: "We highly recommend Bennett Clarke Solutions for their expertise and dedication in finding top talent.",
  },
];

export default function Testimonials() {
  return (
    <>
      <HeroSection
        title="Connecting Talent with Opportunity"
        description="We are on a mission to revolutionize the recruitment industry through innovation and human-centered solutions."
      />

      <Separator className="my-12 opacity-50" />

      <section className="px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 rounded-lg shadow-md">
                <CardHeader>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.testimonial}</p>
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
