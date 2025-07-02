import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Sports We Offer | Sports Facility, Lucknow, Uttar Pradesh",
    description:
        "Sports flooring offered by Sports Facility, known for sports flooring and construction, established in Lucknow, Uttar Pradesh",
    alternates: {
        canonical: "https://sports-facility.in/sports",
    },
};

const HeroSection = () => {
  return (
    <header className="flex flex-col xl:mx-12">
      <div
        className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[1]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="px-2 text-center font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
          Sporting Surfaces
        </h1>
      </div>
    </header>
  );
};

const layout = ({ children }) => {
    return (
        <>
            <HeroSection />
            {children}
        </>
    );
};

export default layout;
