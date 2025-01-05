"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Menu,
    Home,
    Users,
    //Briefcase,
    GraduationCap,
    Contact,
    UserCog,
    Code,
    // FolderKanban,
    // BookOpen,
    Building2,
    Coffee
} from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { Suspense, useState } from "react"
import { ModeToggle } from "./mode-toggle"
import Image from 'next/image';
import { Skeleton } from "./ui/skeleton"

interface MobileLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    icon?: React.ComponentType<{ className?: string }>;
}

const LogoImage = () => {
    return (
      <Image
        src={'/logo.png'}
        alt={'Arthur Edwards'}
        className="object-cover"
        width={40}
        height={40}
      />
    )
  }
  
  const LogoSkeleton = () => {
    return (
      <div className="flex items-center align-middle gap-2">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-8 w-32" />
      </div>
    )
  }
  
  const Logo = () => {
    return (
      <div className="flex items-center align-middle gap-4">
        <Suspense fallback={<LogoSkeleton />}>
          <LogoImage />
          <Link href="/" className="text-2xl font-light text-primary">
            Arthur Edwards
          </Link>
        </Suspense>
      </div>
    )
  }

export function MainNav() {
    const [isOpen, setIsOpen] = useState(false)

    const MobileLink = ({ href, children, className = "", icon: Icon }: MobileLinkProps) => (
        <Link
            href={href}
            className={`flex items-center gap-1 p-1 text-primary hover:bg-accent rounded-md ${className}`}
            onClick={() => setIsOpen(false)}
        >
            {Icon && <Icon className="h-5 w-5" />}
            {children}
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
                                <Menu className="h-6 w-6 text-primary" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetTitle>Navigation Menu</SheetTitle>
                                <nav className="flex flex-col gap-2 mt-8">
                                    <MobileLink href="/" icon={Home}>Home</MobileLink>

                                    <div className="space-y-3">
                                        <h4 className="px-4 font-medium text-primary flex items-center gap-2">
                                            <Users className="h-4 w-4" />
                                            Our Team
                                        </h4>
                                        <MobileLink href="/team" className="pl-8" icon={UserCog}>Meet Our team</MobileLink>
                                        <MobileLink href="/team/developers" className="pl-8" icon={Code}>Developers</MobileLink>
                                    </div>

                                    {/* <div className="space-y-3">
                                        <h4 className="px-4 font-medium text-primary flex items-center gap-2">
                                            <Briefcase className="h-4 w-4" />
                                            Our Work
                                        </h4>
                                        <MobileLink href="/work/projects" className="pl-8" icon={FolderKanban}>Projects</MobileLink>
                                        <MobileLink href="/work/case-studies" className="pl-8" icon={BookOpen}>Case Studies</MobileLink>
                                    </div> */}

                                    <div className="space-y-3">
                                        <h4 className="px-4 font-medium text-primary flex items-center gap-2">
                                            <GraduationCap className="h-4 w-4" />
                                            Careers
                                        </h4>
                                        <MobileLink href="/careers/openings" className="pl-8" icon={Building2}>Open Positions</MobileLink>
                                        <MobileLink href="/careers/culture" className="pl-8" icon={Coffee}>Culture</MobileLink>
                                    </div>

                                    <MobileLink href="/contact" icon={Contact}>Contact Us</MobileLink>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:block relative z-50 justify-self-center">
                        <NavigationMenuList>
                            {/* Home */}
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-primary hover:text-primary hover:bg-secondary`}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* Our Team */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-primary hover:bg-secondary">Our Team</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-primary">Meet Our Team</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Discover the talented professionals at Arthur Edwards. Learn more about our team and how we work together to deliver exceptional results.
                                                </p>
                                            </div>
                                            <Link href="/team" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Leadership</div>
                                                <div className="text-sm text-muted-foreground">Meet our executive team</div>
                                            </Link>
                                            <Link href="/team/developers" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Developers</div>
                                                <div className="text-sm text-muted-foreground">Our technical experts</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Our Work */}
                            {/* <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-primary hover:bg-secondary">Our Work</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-primary">Portfolio</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Explore our successful projects and case studies
                                                </p>
                                            </div>
                                            <Link href="/work/projects" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Projects</div>
                                                <div className="text-sm text-muted-foreground">View our latest work</div>
                                            </Link>
                                            <Link href="/work/case-studies" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Case Studies</div>
                                                <div className="text-sm text-muted-foreground">Detailed success stories</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem> */}

                            {/* Careers */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-primary hover:bg-secondary">Careers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-primary">Join Our Team</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Discover exciting opportunities to grow with us
                                                </p>
                                            </div>
                                            <Link href="/careers/openings" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Open Positions</div>
                                                <div className="text-sm text-muted-foreground">Current job opportunities</div>
                                            </Link>
                                            <Link href="/careers/culture" className="group block space-y-1 rounded-md p-3 hover:bg-secondary">
                                                <div className="font-medium text-primary">Culture</div>
                                                <div className="text-sm text-muted-foreground">Life at our company</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Contact */}
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-primary hover:text-primary hover:bg-secondary`}>
                                        Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="hidden lg:block justify-self-end">
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div >
    )
}