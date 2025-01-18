import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import routes from "@/lib/routes";

const typedRoutes: Routes = routes;

interface RouteLink {
  href: string;
  label: string;
  icon: React.ComponentType;
}

interface RouteSection {
  title: string;
  icon: React.ComponentType;
  links: RouteLink[];
}

interface Routes {
  [key: string]: RouteSection;
}

const Footer = () => {
  const itemCount = Object.keys(routes).length + 1;

  const {
    NEXT_PUBLIC_SOCIAL_LINKEDIN,
    NEXT_PUBLIC_SOCIAL_TWITTER,
    NEXT_PUBLIC_SOCIAL_FACEBOOK,
    NEXT_PUBLIC_SOCIAL_INSTAGRAM
  } = process.env;

  return (
    <footer className="border-t bg-card">
      <div className="container px-4 py-6 md:py-8 mx-auto">
        <div className={`grid grid-cols-2 md:grid-cols-${itemCount} gap-6 md:gap-8`}>
          {Object.keys(routes).map((key) => {
            const section = typedRoutes[key as keyof Routes];
            return (
              <div key={key} className="space-y-2.5 text-center sm:text-left">
                <h3 className="text-base font-semibold tracking-tight">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link: RouteLink) => (
                    <li key={link.href}>
                      <Link
                        aria-label={link.label}
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-xs md:text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* Connect */}
          <div className="space-y-2.5 text-center sm:text-left">
            <h3 className="text-base font-semibold tracking-tight">Connect With Us</h3>
            <div className="flex justify-center sm:justify-start space-x-3 text-primary">
              <Link
                href={NEXT_PUBLIC_SOCIAL_LINKEDIN!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </Button>
              </Link>
              <Link
                href={NEXT_PUBLIC_SOCIAL_TWITTER!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Twitter page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <TwitterIcon className="h-6 w-6" />
                </Button>
              </Link>
              <Link
                href={NEXT_PUBLIC_SOCIAL_FACEBOOK!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <FacebookIcon className="h-6 w-6" />
                </Button>
              </Link>
              <Link
                href={NEXT_PUBLIC_SOCIAL_INSTAGRAM!}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram page"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10"
                  aria-hidden="true"
                >
                  <InstagramIcon className="h-6 w-6" />
                </Button>
              </Link>
            </div>

            <div className="pt-1">
              <Link href="/newsletter">
                <Button className="w-full text-xs md:text-sm">
                  Subscribe to Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom Bar */}
        <div className="text-center space-y-2 md:space-y-0 md:flex md:justify-between md:items-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Bennett Clarke Solutions. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/terms" className="hover:text-primary transition-colors" aria-label="Terms of Service">
              Terms
            </Link>
            <Link href="/privacy-policy" className="hover:text-primary transition-colors" aria-label="Privacy Policy">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-primary transition-colors" aria-label="Cookie Policy">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;