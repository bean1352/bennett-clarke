import { Metadata } from "next";
import AverageJobSalaries from "./page";

export const metadata: Metadata = {
    title: "Job Salaries | Arthur Edwards",
    description: "Explore detailed salary statistics for various job categories over time. Use our interactive charts to analyze trends and make informed career decisions. Stay updated with the latest salary data in your field.",
};

export default function Layout() {
    return (
        <AverageJobSalaries />
    )
}