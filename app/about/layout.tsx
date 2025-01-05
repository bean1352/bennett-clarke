import { Metadata } from "next";
import AboutPage from "./page";


export const metadata: Metadata = {
    title: "Privacy Policy | Arthur Edwards",
    description: "Privacy policy and data handling practices for Arthur Edwards",
};

export default function Layout() {

    return (
        <AboutPage />
    )
}