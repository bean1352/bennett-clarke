import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export function MainNav() {
    return (
        <div className="flex justify-center">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Home */}
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    {/* Our Team */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Our Team</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="row-span-3">
                                        <h4 className="text-sm font-medium leading-none mb-2">Meet Our Team</h4>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                            Get to know the passionate individuals driving innovation and excellence
                                        </p>
                                    </div>
                                    <Link href="/team/leadership" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Leadership</div>
                                        <div className="text-sm text-muted-foreground">Meet our executive team</div>
                                    </Link>
                                    <Link href="/team/developers" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Developers</div>
                                        <div className="text-sm text-muted-foreground">Our technical experts</div>
                                    </Link>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Our Work */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Our Work</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="row-span-3">
                                        <h4 className="text-sm font-medium leading-none mb-2">Portfolio</h4>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                            Explore our successful projects and case studies
                                        </p>
                                    </div>
                                    <Link href="/work/projects" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Projects</div>
                                        <div className="text-sm text-muted-foreground">View our latest work</div>
                                    </Link>
                                    <Link href="/work/case-studies" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Case Studies</div>
                                        <div className="text-sm text-muted-foreground">Detailed success stories</div>
                                    </Link>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Careers */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-[400px] p-4 md:w-[500px] lg:w-[600px]">
                                <div className="grid gap-3 md:grid-cols-2">
                                    <div className="row-span-3">
                                        <h4 className="text-sm font-medium leading-none mb-2">Join Our Team</h4>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                            Discover exciting opportunities to grow with us
                                        </p>
                                    </div>
                                    <Link href="/careers/openings" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Open Positions</div>
                                        <div className="text-sm text-muted-foreground">Current job opportunities</div>
                                    </Link>
                                    <Link href="/careers/culture" className="group block space-y-1 rounded-md p-3 hover:bg-accent">
                                        <div className="font-medium">Culture</div>
                                        <div className="text-sm text-muted-foreground">Life at our company</div>
                                    </Link>
                                </div>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Contact */}
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact Us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}