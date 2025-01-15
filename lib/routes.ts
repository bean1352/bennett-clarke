import { Building, Contact, Star, Search, Shield, UserCircle, Users } from "lucide-react";

// Navigation routes configuration
const routes = {
  company: {
    title: "Company",
    icon: Building,
    links: [
      { href: "/about-us", label: "About Us", icon: Building },
      { href: "/contact", label: "Contact", icon: Contact },
      { href: "/testimonials", label: "Testimonials", icon: Star },
      { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
    ]
  },
  jobSeekers: {
    title: "For Job Seekers",
    icon: Users,
    links: [
      { href: "/jobs/find-jobs", label: "Search Jobs", icon: Search },
      { href: "/job-salaries", label: "Job Salaries", icon: UserCircle },
      //{ href: "/resources", label: "Career Resources", icon: BookOpen },
      //{ href: "/salary", label: "Salary Guide", icon: DollarSign },
    ]
  },
  // employers: {
  //   title: "For Employers",
  //   icon: Building2,
  //   links: [
  //     // { href: "/employer/find-talent", label: "Post a Job", icon: Briefcase },
  //     // { href: "/employer/talent-search", label: "Browse Talent", icon: Users },
  //     // { href: "/employer/pricing", label: "Pricing Plans", icon: DollarSign },
  //     // { href: "/employer/resources", label: "Employer Resources", icon: BookMarked },
  //   ]
  // }
}

export default routes;