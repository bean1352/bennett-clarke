import { Metadata } from "next";
import AboutPage from "./page";

export const metadata: Metadata = {
    title: "About Us | Arthur Edwards",
    description: "Arthur Edwards is a recruitment company specializing in connecting highly skilled talent in actuarial, banking, and engineering industries.",
};


export default function Layout() {

    return (
        <AboutPage />
    )
}