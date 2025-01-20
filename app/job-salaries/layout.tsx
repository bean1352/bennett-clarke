import { Metadata } from "next";
import AverageJobSalaries from "./page";
import { generatePageMetadata } from "@/components/generate-page-metadata";

export const metadata: Metadata = generatePageMetadata(
    'Job Salaries',
    `Explore detailed salary statistics for various job categories over time. Use our interactive charts to analyze trends and make informed career decisions. Stay updated with the latest salary data in your field.`
);

export default function Layout() {
    return (
        <AverageJobSalaries />
    )
}