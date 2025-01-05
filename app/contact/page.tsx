"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(1000, "Message must not exceed 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-primary py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-8">Get in Touch</h1>
            <p className="text-2xl mb-8">
              We&apos;re here to help with your recruitment needs. Reach out to our team
              and let&apos;s start a conversation about your future.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="text-center p-8 bg-secondary rounded-lg">
              <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p className="text-lg text-muted-foreground">info@company.com</p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-lg">
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
              <p className="text-lg text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-lg">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Visit Us</h3>
              <p className="text-lg text-muted-foreground">
                123 Business Street
                <br />
                City, State 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-secondary p-12 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your full name"
                            className="h-12 text-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="your@email.com"
                            className="h-12 text-lg"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your phone number"
                          className="h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is this regarding?"
                          className="h-12 text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us more about your needs..."
                          className="min-h-[200px] text-lg resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full text-lg h-16">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary text-primary py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto">
            Whether you&apos;re looking to hire or seeking new opportunities, we&apos;re here
            to help you succeed.
          </p>
          <Button size="lg" variant="secondary" className="text-lg h-16 px-12">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}