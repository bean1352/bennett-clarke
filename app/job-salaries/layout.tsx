import { Metadata } from "next";
import AverageJobSalaries from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata(
    'Job Salaries',
    `Discover comprehensive salary insights across a range of job categories and industries. Our detailed salary statistics and interactive charts provide a clear view of trends over time, helping you analyze market changes and make well-informed career decisions. Stay ahead with up-to-date salary data tailored to your field, whether you’re planning your next career move or benchmarking for your current role.`
);

export default function Layout() {
    return (
        <AverageJobSalaries />
    )
}