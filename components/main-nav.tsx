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
import Image from 'next/image'
import { Skeleton } from "./ui/skeleton"
import routes from "@/lib/routes"

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
      <Link href="/" className="text-2xl font-light">
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
        <div className="grid md:grid-cols-3 grid-cols-1 justify-between items-center px-4 py-4">
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
              <SheetContent side="right" className="w-[300px] overflow-y-auto">
                <SheetTitle className="mb-8">Menu</SheetTitle>
                <nav className="flex flex-col gap-6 pb-8">
                  <MobileLink href="/" icon={Home} className="bg-secondary/50">
                    Home
                  </MobileLink>

                  {Object.entries(routes).map(([key, section]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex items-center gap-2 px-2 font-medium">
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

          <div className="hidden lg:block justify-self-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainNav