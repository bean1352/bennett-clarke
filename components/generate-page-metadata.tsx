import { Metadata } from "next";

export function generatePageMetadata(title: string, description: string): Metadata {
    return {
        title,
        description,
        openGraph: {
            description,
        },
        twitter: {
            description,
        }
    };
}