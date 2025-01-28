"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, InstagramIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";


const Footer = () => {
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
      setYear(new Date().getFullYear());
    }, []);

  return (
    <footer className="border-t bg-card text-muted-foreground text-xs">
      <div className="container px-4 py-4 mx-auto">
        <div className="grid grid-cols-1 gap-6 text-center sm:text-left">
          {/* Social Links */}
          <div className="flex justify-center">
            <div>
              <h3 className="text-sm font-medium mb-3">Connect With Us</h3>
              <div className="flex justify-center space-x-4">
                <Link
                  href={process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary"
                    aria-label="LinkedIn button"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </Button>
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || ''}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary"
                    aria-label="Instagram button"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center space-y-2 sm:space-y-0">
          <p className="text-xs">
            © {year} Bennett Clarke Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/terms"
              aria-label="Navigate to Terms of Service"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              aria-label="Navigate to Privacy Policy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/cookie-policy"
              aria-label="Navigate to Cookie Policy"
              className="hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;