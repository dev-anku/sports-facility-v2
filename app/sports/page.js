import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                    Sports facility provides expert sporting surfaces for a wide
                    range of sports and transforming them with premium
                    solutions.
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-8 gap-y-20 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {sportsContent.map((sport, index) => (
                    <div
                        className="flex flex-col gap-2 text-center"
                        key={index}
                    >
                        <Image
                            src={sport.image}
                            width={1920}
                            height={1080}
                            alt={sport.title}
                            className="h-full object-cover rounded-lg"
                        />
                        <h2 className="font-text text-xl font-medium uppercase">
                            {sport.title}
                        </h2>
                        <Link
                            href={sport.link}
                            className="uppercase text-blue-500"
                        >
                            View More
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
            <SportsSection />
        </>
    );
};

export default page;
