"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { 
  Menu, 
  Home,
  Search,
  UserCircle,
  BookOpen,
  DollarSign,
  Briefcase,
  Users,
  Building2,
  BookMarked,
  Building,
  Contact,
  NewspaperIcon,
  Shield,
} from "lucide-react"
import Link from "next/link"
import { Suspense, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import Image from 'next/image'
import { Skeleton } from "./ui/skeleton"

// Navigation routes configuration
const routes = {
  jobSeekers: {
    title: "For Job Seekers",
    icon: Users,
    links: [
      { href: "/jobs/search", label: "Search Jobs", icon: Search },
      { href: "/profile", label: "Create Profile", icon: UserCircle },
      { href: "/resources", label: "Career Resources", icon: BookOpen },
      { href: "/salary", label: "Salary Guide", icon: DollarSign },
    ]
  },
  employers: {
    title: "For Employers",
    icon: Building2,
    links: [
      { href: "/employer/post-job", label: "Post a Job", icon: Briefcase },
      { href: "/employer/talent-search", label: "Browse Talent", icon: Users },
      { href: "/employer/pricing", label: "Pricing Plans", icon: DollarSign },
      { href: "/employer/resources", label: "Employer Resources", icon: BookMarked },
    ]
  },
  company: {
    title: "Company",
    icon: Building,
    links: [
      { href: "/about", label: "About Us", icon: Building },
      { href: "/contact", label: "Contact", icon: Contact },
      { href: "/blog", label: "Blog", icon: NewspaperIcon },
      { href: "/privacy", label: "Privacy Policy", icon: Shield },
    ]
  }
}

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const LogoImage = () => (
  <Image
    src="/logo.png"
    alt="Arthur Edwards"
    className="object-cover"
    width={40}
    height={40}
  />
)

const LogoSkeleton = () => (
  <div className="flex items-center align-middle gap-2">
    <Skeleton className="h-10 w-10 rounded-full" />
    <Skeleton className="h-8 w-32" />
  </div>
)

const Logo = () => (
  <div className="flex items-center align-middle gap-4">
    <Suspense fallback={<LogoSkeleton />}>
      <LogoImage />
      <Link href="/" className="text-2xl font-light text-primary">
        Arthur Edwards
      </Link>
    </Suspense>
  </div>
)

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false)

  const MobileLink = ({ href, children, className = "", icon: Icon }: MobileLinkProps) => (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 rounded-md hover:bg-secondary active:bg-secondary/80 transition-colors ${className}`}
      onClick={() => setIsOpen(false)}
    >
      {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      <span>{children}</span>
    </Link>
  )

  return (
    <div className="shadow-sm relative z-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 xs:grid-cols-2 justify-between items-center px-4 py-4">
          {/* Logo */}
          <div className="flex items-center align-middle gap-2">
            <Logo />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden absolute top-1 right-1">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent>
                <SheetTitle>Menu</SheetTitle>
                <nav className="flex flex-col gap-6 mt-8">
                  <MobileLink href="/" icon={Home} className="bg-secondary/50">
                    Home
                  </MobileLink>

                  {Object.entries(routes).map(([key, section]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex items-center gap-2 px-2 font-medium text-primary">
                        {section.icon && <section.icon className="h-4 w-4" />}
                        <span>{section.title}</span>
                      </div>
                      <div className="flex flex-col gap-1 pl-2">
                        {section.links.map((link) => (
                          <MobileLink 
                            key={link.href} 
                            href={link.href} 
                            icon={link.icon}
                            className="ml-4 border-l-2 border-muted hover:border-primary"
                          >
                            {link.label}
                          </MobileLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block relative z-50 justify-self-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {Object.entries(routes).map(([key, section]) => (
                <NavigationMenuItem key={key}>
                  <NavigationMenuTrigger>
                    {section.icon && <section.icon className="h-4 w-4 mr-2" />}
                    {section.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="row-span-3">
                          <h4 className="text-sm font-medium leading-none mb-2 text-primary">
                            {section.title}
                          </h4>
                          <p className="text-sm leading-snug text-muted-foreground">
                            Explore our {section.title.toLowerCase()} resources and services.
                          </p>
                        </div>
                        {section.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group block space-y-1 rounded-md p-3 hover:bg-secondary"
                          >
                            <div className="font-medium text-primary flex items-center gap-2">
                              {link.icon && <link.icon className="h-4 w-4" />}
                              {link.label}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Explore {link.label.toLowerCase()}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:block justify-self-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav