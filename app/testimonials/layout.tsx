import { Metadata } from "next";
import Testimonials from "./page";

export const metadata: Metadata = {
    title: "Testimonials | Arthur Edwards",
    description: "Read testimonials from our satisfied clients who have successfully found top talent through Arthur Edwards Recruitment.",
};


export default function Layout() {

    return (
        <Testimonials />
    )
}