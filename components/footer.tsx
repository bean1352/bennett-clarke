import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {

  const {
    NEXT_PUBLIC_SOCIAL_LINKEDIN,
    NEXT_PUBLIC_SOCIAL_TWITTER,
    NEXT_PUBLIC_SOCIAL_FACEBOOK,
    NEXT_PUBLIC_SOCIAL_INSTAGRAM
  } = process.env;

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-6 md:py-8 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* For Job Seekers */}
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="text-base font-semibold tracking-tight">For Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/jobs/search"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Search Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Create Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Career Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/salary"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Salary Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="text-base font-semibold tracking-tight">For Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/employer/post-job"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Post a Job
                </Link>
              </li>
              <li>
                <Link
                  href="/employer/talent-search"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Browse Talent
                </Link>
              </li>
              <li>
                <Link
                  href="/employer/pricing"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/employer/resources"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Employer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="text-base font-semibold tracking-tight">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="text-base font-semibold tracking-tight">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start space-x-3 text-primary">
              <a href={NEXT_PUBLIC_SOCIAL_LINKEDIN} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <LinkedinIcon className="h-6 w-6" />
                </Button>
              </a>
              <a href={NEXT_PUBLIC_SOCIAL_TWITTER} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <TwitterIcon className="h-6 w-6" />
                </Button>
              </a>
              <a href={NEXT_PUBLIC_SOCIAL_FACEBOOK} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <FacebookIcon className="h-6 w-6" />
                </Button>
              </a>
              <a href={NEXT_PUBLIC_SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <InstagramIcon className="h-6 w-6" />
                </Button>
              </a>
            </div>

            <div className="pt-1">
              <Button className="w-full text-xs md:text-sm">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Bar */}
        <div className="text-center space-y-2 md:space-y-0 md:flex md:justify-between md:items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Arthur Edwards. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;