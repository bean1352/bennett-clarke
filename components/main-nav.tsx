"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Home
} from "lucide-react"
import Link from "next/link"
import { Suspense, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import { Skeleton } from "./ui/skeleton"
import routes from "@/lib/routes"

interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

const LogoImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 816.8 651.3" width={80} height={80}>
    <polyline points="644.1 133.7 644.1 7.8 8.2 7.8 8.2 643.7 644.1 643.7 644.1 517.7" fill="none" stroke="#334f5b" strokeWidth={20} />
    <path className="dark:fill-white" d="M130.4,198.1h128.9c25.3,0,44.7,5.6,58.1,16.7,13.4,11.1,20.1,25.1,20.1,41.9s-4.7,25.9-14,35.7c-9.4,9.8-23.5,17.5-42.3,23.2,23.3,4.9,40.8,12.6,52.4,23.2,11.6,10.5,17.5,23.8,17.5,39.9s-3.3,23.1-9.9,32.6c-6.6,9.5-17.7,17.5-33.1,24.1-15.4,6.6-33,9.9-52.6,9.9h-125.1v-12.5h20.4c6.1,0,10.6-1,13.5-3,2.8-2,4.3-4.3,4.3-6.9v-198.1c0-4.7-1.4-8.2-4.2-10.6-2.8-2.4-6.9-3.6-12.2-3.6h-21.7v-12.5ZM204.3,311.6h46.8c14.4,0,25.8-4.2,34.4-12.7,8.5-8.5,12.8-22.3,12.8-41.6s-2-21.2-6.1-27.9c-4.1-6.7-10-11.5-17.7-14.6-7.7-3.1-21.1-4.6-40.2-4.6s-21.8,1-25.1,2.9c-3.2,1.9-4.8,5.4-4.8,10.3v88.1ZM204.3,324.2v95.3c0,4.5,1.3,7.8,3.9,10,2.6,2.2,7.3,3.3,14.1,3.3h29.9c19.8,0,34.5-4.4,44-13.1,9.5-8.7,14.2-22.4,14.2-40.9s-4.9-30.3-14.7-40c-9.8-9.8-23.4-14.6-40.6-14.6h-50.8Z" />
    <path className="dark:fill-white" d="M559.6,217.3l11.5-23.9h10.5l4.3,99.5h-11.2c-7.4-28-16.6-48.6-27.8-61.9-13.8-16.6-30.3-24.9-49.5-24.9s-37.6,9.3-50.7,27.8c-13,18.5-19.6,49.8-19.6,94s7.5,65.4,22.4,84.9c12.7,16.5,30.5,24.7,53.5,24.7s36.9-6.4,50.5-19.3c13.6-12.9,22.5-32.3,26.6-58.3h11.9c-3.5,29.4-13.5,52.1-30.3,67.9-16.7,15.8-37.8,23.7-63.2,23.7s-39.5-5.2-56.8-15.5c-17.2-10.4-31-25.3-41.3-44.7-10.3-19.4-15.5-40.8-15.5-63.9s5.3-47.8,16-69.4c10.6-21.6,24.3-37.9,40.9-48.7,16.6-10.9,34.5-16.3,53.7-16.3s21.1,1.8,31.1,5.5c10,3.7,21,10,32.8,18.9Z" />
    <path className="dark:fill-white" d="M767.1,216.8l15-21.6h12.2l1,90.1h-11c-6.9-27.6-17.1-47.8-30.7-60.5-13.5-12.7-29.1-19.1-46.7-19.1s-26.7,4.4-36.1,13.2c-9.4,8.8-14,19.6-14,32.3s1.8,14.9,5.3,20.8c3.6,6,8.9,10.8,16,14.6,7.1,3.7,20.4,7.7,40,11.9,27.5,6,46.9,12,57.9,18.2,11.1,6.1,19.4,13.9,24.8,23.2,5.5,9.3,8.2,20.2,8.2,32.7,0,22.3-7.5,40.8-22.5,55.4-15,14.7-34.4,22-58.1,22s-47.7-8.2-66.5-24.7l-18.9,23.1h-12v-95.8h12c4.7,26.4,15.2,47.3,31.4,62.5,16.3,15.3,34.6,22.9,55,22.9s30-4.9,40.4-14.6c10.4-9.8,15.6-21.6,15.6-35.5s-2-14.9-5.9-20.8c-3.9-6-10.1-11-18.6-15-8.5-4.1-25.1-9-50-14.8-27.3-6.5-45.9-13.7-55.8-21.7-13.9-11.4-20.9-27.5-20.9-48.3s6.9-39.5,20.8-53.4c13.9-13.9,31.6-20.8,53.2-20.8s20.2,1.8,29.6,5.5,19.1,9.8,29.1,18.4Z" />
  </svg>
)

const LogoSkeleton = () => (
  <div className="flex items-center align-middle gap-2">
    <Skeleton className="h-10 w-10 rounded-full" />
    <Skeleton className="h-8 w-32" />
  </div>
)

interface LogoProps {
  companyName: string | undefined;
}

const Logo = ({ companyName }: LogoProps) => (
  <div className="flex items-center align-middle gap-4">
    <Suspense fallback={<LogoSkeleton />}>
      <LogoImage />
      <Link href="/" className="text-lg lg:text-2xl">
        {companyName}
      </Link>
    </Suspense>
  </div>
)

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME;

  const MobileLink = ({ href, children, className = "", icon: Icon }: MobileLinkProps) => (
    <Link
      href={href}
      className={`flex items-center gap-2 p-2 rounded-md hover:bg-secondary active:bg-secondary/80 ${className}`}
      onClick={() => setIsOpen(false)}
    >
      {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
      <span className="text-sm">{children}</span>
    </Link>
  )

  return (
    <header className="fixed w-full top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Logo companyName={companyName} />
          </div>

          {/* Desktop Navigation - Right side */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle() + " bg-transparent hover:bg-secondary/50 transition-colors"}>
                      <Home className="h-4 w-4 mr-2" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                {Object.entries(routes).map(([key, section]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50 transition-colors">
                      {section.icon && <section.icon className="h-4 w-4 mr-2" />}
                      {section.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                        <div className="grid gap-3 md:grid-cols-2">
                          <div className="row-span-3">
                            <h4 className="text-sm font-medium leading-none mb-2">
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
                              <div className="font-medium flex items-center gap-2">
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

            <ModeToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="p-2 -mr-2">
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <SheetTitle className="mb-8 text-base">Menu</SheetTitle>
                <nav className="flex flex-col gap-6">
                  <MobileLink href="/" icon={Home} className="bg-secondary/50">
                    Home
                  </MobileLink>

                  {Object.entries(routes).map(([key, section]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex items-center gap-2 px-2 font-medium text-sm">
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
        </nav>
      </div>
    </header>
  )
}

export default MainNav