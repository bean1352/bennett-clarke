"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Upload } from "lucide-react";
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
import { Separator } from "@/components/ui/separator";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import HeroSection from "@/components/hero-section";
import { sendGTMEvent } from '@next/third-parties/google';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  "application/pdf", // PDF
  "application/msword", // DOC
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // DOCX
  "image/png", // PNG
  "image/jpeg", // JPG, JPEG
  "application/vnd.ms-excel", // XLS
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // XLSX
];

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
  files: z
    .array(z.any())
    .max(3, "Maximum 3 files allowed")
    .optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const { toast } = useToast()

  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api/recaptcha", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      files: [],
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    if (files.length + selectedFiles.length > 3) {
      form.setError("files", { message: "Maximum 3 files allowed" });
      return;
    }

    const validFiles = selectedFiles.filter(file => {
      if (file.size > MAX_FILE_SIZE) {
        form.setError("files", { message: "File size must be less than 5MB" });
        return false;
      }
      if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
        form.setError("files", { message: "Only PDF and Word documents allowed" });
        return false;
      }
      return true;
    });

    setFiles([...files, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    sendGTMEvent({ event: 'contactButtonClicked', value: data });

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "files" && value) {
        formData.append(key, value.toString());
      }
    });

    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch("/api/contact/send-contact-email", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to send message");

      form.reset();
      setFiles([]);

      toast({
        description: "Message sent successfully!",
      })
    } catch (error) {
      console.error(error);

      toast({
        description: "Failed to send the message. Please try again.",
      })
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <HeroSection
        title="Get in Touch"
        description="We&apos;re here to help with your recruitment needs. Reach out to our team and let&apos;s start a conversation about your future."
      />

      <Separator className="my-12 opacity-50" />

      {/* Contact Information */}
      <section>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            <div className="text-center p-8 bg-secondary rounded-lg">
              <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
              <p className="text-lg text-muted-foreground">{email}</p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-lg">
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Call Us</h3>
              <p className="text-lg text-muted-foreground">{phone}</p>
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

      <Separator className="my-12 opacity-50" />

      {/* Contact Form */}
      <section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 p-12 rounded-xl"
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

                <div className="space-y-4">
                  <FormLabel className="text-lg">Attachments (Optional)</FormLabel>
                  <div className="flex items-center gap-4">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => document.getElementById("file-upload")?.click()}
                      className="h-12"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Files
                    </Button>
                    <Input
                      id="file-upload"
                      type="file"
                      className="hidden"
                      accept={ACCEPTED_FILE_TYPES.join(",")}
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  {files.length > 0 && (
                    <div className="space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-secondary p-2 rounded"
                        >
                          <span className="truncate">{file.name}</span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFile(index)}
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                  <FormMessage />
                </div>

                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  ref={recaptchaRef}
                  onChange={handleChange}
                  onExpired={handleExpired}
                  className=""
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-16"
                  disabled={isSubmitting || !isVerified}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}