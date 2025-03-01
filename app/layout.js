import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sports Facility",
  description: "Elevate Your Game with World-Class Court Surfaces",
  icons: {
    icon: "/assets/icons/logo.png",
  },
  keywords:
    "sports facility, court surfaces, synthetic courts, EPDM flooring, wooden flooring, sports flooring, sports flooring lucknow, court surfacing, lucknow court surfaces, court fixing, resurfacing courts, ridham sports, ridham enterprises, ridham court surfacing, ridham flooring, ridham flooring lucknow, ridham flooring lucknow, ridham flooring lucknow",
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
