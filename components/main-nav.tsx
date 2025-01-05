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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface MobileLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

export function MainNav() {
    const [isOpen, setIsOpen] = useState(false)

    const MobileLink = ({ href, children, className = "" }: MobileLinkProps) => (
        <Link 
            href={href} 
            className={`block p-4 text-blue-600 hover:bg-blue-50 rounded-md ${className}`}
            onClick={() => setIsOpen(false)}
        >
            {children}
        </Link>
    )

    return (
        <div className="bg-white shadow-sm relative z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center px-4 py-4">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-blue-600">
                        Arthur Edwards
                    </Link>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger className="p-2">
                                <Menu className="h-6 w-6 text-blue-600" />
                            </SheetTrigger>
                            <SheetContent>
                                <nav className="flex flex-col gap-2 mt-8">
                                    <MobileLink href="/">Home</MobileLink>
                                    
                                    <div className="space-y-3">
                                        <h4 className="px-4 text-sm font-medium text-blue-600">Our Team</h4>
                                        <MobileLink href="/team/leadership" className="pl-8">Leadership</MobileLink>
                                        <MobileLink href="/team/developers" className="pl-8">Developers</MobileLink>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="px-4 text-sm font-medium text-blue-600">Our Work</h4>
                                        <MobileLink href="/work/projects" className="pl-8">Projects</MobileLink>
                                        <MobileLink href="/work/case-studies" className="pl-8">Case Studies</MobileLink>
                                    </div>

                                    <div className="space-y-3">
                                        <h4 className="px-4 text-sm font-medium text-blue-600">Careers</h4>
                                        <MobileLink href="/careers/openings" className="pl-8">Open Positions</MobileLink>
                                        <MobileLink href="/careers/culture" className="pl-8">Culture</MobileLink>
                                    </div>

                                    <MobileLink href="/contact">Contact Us</MobileLink>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:block relative z-50">
                        <NavigationMenuList>
                            {/* Home */}
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-blue-600 hover:text-blue-800 hover:bg-blue-50`}>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            {/* Our Team */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">Our Team</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px] bg-white">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-blue-600">Meet Our Team</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Get to know the passionate individuals driving innovation and excellence
                                                </p>
                                            </div>
                                            <Link href="/team/leadership" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Leadership</div>
                                                <div className="text-sm text-muted-foreground">Meet our executive team</div>
                                            </Link>
                                            <Link href="/team/developers" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Developers</div>
                                                <div className="text-sm text-muted-foreground">Our technical experts</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Our Work */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">Our Work</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px] bg-white">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-blue-600">Portfolio</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Explore our successful projects and case studies
                                                </p>
                                            </div>
                                            <Link href="/work/projects" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Projects</div>
                                                <div className="text-sm text-muted-foreground">View our latest work</div>
                                            </Link>
                                            <Link href="/work/case-studies" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Case Studies</div>
                                                <div className="text-sm text-muted-foreground">Detailed success stories</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Careers */}
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-blue-600 hover:text-blue-800 hover:bg-blue-50">Careers</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px] bg-white">
                                        <div className="grid gap-3 md:grid-cols-2">
                                            <div className="row-span-3">
                                                <h4 className="text-sm font-medium leading-none mb-2 text-blue-600">Join Our Team</h4>
                                                <p className="text-sm leading-snug text-muted-foreground">
                                                    Discover exciting opportunities to grow with us
                                                </p>
                                            </div>
                                            <Link href="/careers/openings" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Open Positions</div>
                                                <div className="text-sm text-muted-foreground">Current job opportunities</div>
                                            </Link>
                                            <Link href="/careers/culture" className="group block space-y-1 rounded-md p-3 hover:bg-blue-50">
                                                <div className="font-medium text-blue-600">Culture</div>
                                                <div className="text-sm text-muted-foreground">Life at our company</div>
                                            </Link>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            {/* Contact */}
                            <NavigationMenuItem>
                                <Link href="/contact" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-blue-600 hover:text-blue-800 hover:bg-blue-50`}>
                                        Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </div>
    )
}