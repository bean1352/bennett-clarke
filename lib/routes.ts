import { BookMarked, BookOpen, Briefcase, Building, Building2, Contact, DollarSign, NewspaperIcon, Search, Shield, UserCircle, Users } from "lucide-react";

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

export default routes;