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

const SportsSection = () => {
  return (
    <section className="mx-6 my-8 flex flex-col items-center justify-center gap-20 xl:mx-32 xl:my-12">
      <div className="flex flex-col gap-2 text-center xl:w-1/2">
        <h1 className="font-text text-2xl font-medium uppercase xl:text-3xl">
          Our Range Of
          <p className="mt-1 font-heading text-[2.5rem] xl:text-6xl">
            Sporting Surfaces
          </p>
        </h1>
        <h3 className="font-text text-lg text-gray-600">
          Sports facility provides expert sporting surfaces for a wide range of
          sports and transforming them with premium solutions.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-8 gap-y-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {sportsContent.map((sport, index) => (
          <div className="flex flex-col gap-2 text-center" key={index}>
            <Image
              src={sport.image}
              width={1920}
              height={1080}
              alt={sport.title}
              className="h-full object-cover"
            />
            <h2 className="font-text text-xl font-medium uppercase">
              {sport.title}
            </h2>
            <Link href="/sports" className="uppercase text-blue-500">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <HeroSection />
      <SportsSection />
    </>
  );
};

export default page;
