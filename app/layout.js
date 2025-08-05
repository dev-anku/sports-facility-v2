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
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "sports-facility",
      "image": "https://sports-facility.in/logo.png",
      "url": "https://sports-facility.in/",
      "telephone": "+91 8009483311",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "529/50, Rahim Nagar Rd, Mahanagar",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226006",
        "addressCountry": "IN"
      },
      "description": "We build high-quality sports facilities that inspire athletes and communities for sports like basketball court construction."
    })
  }}
/>
            </body>
        </html>
    );
}
