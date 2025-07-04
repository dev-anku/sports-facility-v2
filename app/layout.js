import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: {
        default: "Sports Flooring & Court Surfacing | Sports Facility, Lucknow, Uttar Pradesh",
        template: "%s | Sports Facility, Lucknow, Uttar Pradesh",
    },
    alternates: {
        canonical: "https://sports-facility.in",
    },
    description:
        "Discover premium sports flooring and court surfacing solutions, including EPDM Flooring, synthetic flooring, and wooden courts and wooden flooring.",
    icons: {
        icon: "/assets/icons/logo.png",
    },
    keywords:
        "basketball court construction in UP, basketball court construction cost in UP, outdoor basketball court construction in UP, indoor basketball court construction in UP, badminton court construction in UP, badminton court construction estimate in UP, sand volleyball court construction  UP, indoor running track construction UP, clay tennis court construction cost in UP, tennis court construction in UP, sports facility, court surfaces, synthetic courts, EPDM flooring, wooden flooring, sports flooring, sports flooring lucknow, court surfacing, lucknow court surfaces, court fixing, resurfacing courts, ridham sports, ridham enterprises, ridham court surfacing, ridham flooring, ridham flooring lucknow, ridham flooring lucknow, ridham flooring lucknow",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="w-screen overflow-x-hidden">
            <body className="mx-auto">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
