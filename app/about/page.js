import InstagramSection from "@/components/InstagramSection";
import { images, sampleImages } from "@/public/constants";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "About Us | Sports Facility, Lucknow, Uttar Pradesh",
    description:
        "About Sports Facility, known for sports flooring and construction, established in Lucknow, Uttar Pradesh",
};

const HeroSection = () => {
    return (
        <header className="flex flex-col xl:mx-12">
            <div
                className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[10]})`,
                    backgroundPosition: "40% 70%",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-center font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
                    About Us
                </h1>
            </div>
        </header>
    );
};

const AboutSection = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6 xl:flex-row"
        >
            <div>
                <Image src={images[9]} width={1920} height={1080} alt="hero" />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-6xl uppercase text-black">
                    About Us
                </h1>
                <p>
                    At sports facility we are dedicated to building high-quality
                    sports facilities that inspire athletes and communities.
                    With years of expertise in sports construction, we
                    specialize in designing and constructing top-tier courts,
                    fields, and recreational spaces tailored to meet the needs
                    of professionals, schools, and recreational players alike.
                </p>
                <p>
                    Our team combines innovation, precision, and
                    industry-leading materials to deliver durable,
                    high-performance sports infrastructure. Whether it&apos;s
                    pickleball courts, tennis courts, basketball courts, running
                    tracks, or multi-sport facilities, we bring your vision to
                    life with superior craftsmanship and attention to detail.
                </p>
                <p>
                    With a proven track record of successfully completing over
                    1500+ projects across India, we have helped transform sports
                    infrastructure nationwide. Our commitment to excellence
                    ensures that every project meets the highest standards of
                    safety, quality, and performance.
                </p>
                <p>
                    At sports facility we believe that great sports facilities
                    are more than just playing surfaces, they&apos;re the
                    foundation of passion, competition, and community
                    engagement. From concept to completion, we turn your vision
                    into reality
                </p>
            </div>
        </section>
    );
};

const page = () => {
    return (
        <>
            <HeroSection />
            <InstagramSection />
            <AboutSection />
        </>
    );
};

export default page;
