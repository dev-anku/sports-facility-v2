import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Wooden Sports Flooring",
    description:
        "Professional-grade wooden flooring installation for indoor sports courts in UP. Slip-resistant, shock-absorbent, and built for high performance and long-term use.",
    keywords:
        "wooden sports flooring, indoor court flooring, teak maple flooring UP, gym flooring installation, sports flooring contractors India",
    alternates: {
        canonical: "https://sports-facility.in/sports/wooden-sports-flooring",
    },
};

const WoodenFlooring = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[0].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Wooden Sports Flooring
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Indoor Wooden Sports Flooring for Gyms, Courts & Halls
                    </h2>
                    <p>
                        At Sports Facility, we install high-performance wooden
                        flooring systems for indoor sports courts that demand
                        durability, precision, and playability. Whether for
                        basketball, badminton, volleyball, or multi-sport use,
                        our wooden flooring delivers the quality needed for
                        competitive play.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Why Wooden Flooring for Sports?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Shock-Absorbent Layers:</strong> Protects
                            joints and reduces injury risk
                        </li>
                        <li>
                            <strong>Consistent Surface Bounce:</strong> Ideal
                            for fast-paced sports like badminton and basketball
                        </li>
                        <li>
                            <strong>Slip Resistance:</strong> Anti-skid finishes
                            ensure player safety and control
                        </li>
                        <li>
                            <strong>Easy Maintenance:</strong> Dust-resistant,
                            sealed surfaces with long lifespan
                        </li>
                        <li>
                            <strong>Aesthetic & Functional:</strong> Looks
                            premium, performs professionally
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        What Makes Our Floors Different?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Solid Hardwood Construction:</strong>{" "}
                            Premium-grade maple or teak
                        </li>
                        <li>
                            <strong>Cushioned Underlay Systems:</strong>{" "}
                            Engineered for comfort and energy return
                        </li>
                        <li>
                            <strong>Matte or Glossy Finishing:</strong>{" "}
                            Depending on usage and lighting conditions
                        </li>
                        <li>
                            <strong>Precision Court Markings:</strong> Compliant
                            with sport-specific rules
                        </li>
                        <li>
                            <strong>Custom Options:</strong> Multiple wood
                            tones, branding, and layout flexibility
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Technical Specifications
                    </h2>
                    <p>Our Wooden Flooring system includes:</p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Hardwood Surface:</strong> Certified maple
                            or teak planks
                        </li>
                        <li>
                            <strong>Shock Pad Layer:</strong> High-density foam
                            or rubber cushion base
                        </li>
                        <li>
                            <strong>Moisture Barrier:</strong> Protects subfloor
                            integrity
                        </li>
                        <li>
                            <strong>Anti-Skid Coating:</strong> Player-safe
                            friction level
                        </li>
                        <li>
                            <strong>Friction & Rebound Ratings:</strong>{" "}
                            Engineered to match professional standards (BWF,
                            FIBA, etc.)
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Multi-Sport Compatibility
                    </h2>
                    <p>Our wooden flooring solutions are designed for:</p>
                    <ul className="list-inside list-disc">
                        <li>🏸 Badminton Courts</li>
                        <li>🏀 Basketball Courts</li>
                        <li>🏐 Volleyball Courts</li>
                        <li>🏫 School & College Gyms</li>
                        <li>🏢 Indoor Sports Complexes</li>
                        <li>🏠 Multi-Purpose Halls</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        End-to-End Service: From Base to Bounce
                    </h2>
                    <p>We handle your full project lifecycle:</p>
                    <ul className="list-inside list-disc">
                        <li>Site inspection & design</li>
                        <li>Moisture testing & leveling</li>
                        <li>Material supply & installation</li>
                        <li>Court marking</li>
                        <li>Post-installation polishing & maintenance</li>
                    </ul>
                    <p>We also offer:</p>
                    <ul className="list-inside list-disc">
                        <li>Annual maintenance contracts</li>
                        <li>Line repainting & resurfacing</li>
                        <li>Panel replacement for damaged zones</li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Installation coverage across India
                    </h2>
                    <p>
                        We deliver and install sports flooring all around India
                        including major cities in Uttar Pradesh like Lucknow,
                        Kanpur, Varanasi, Noida, Agra, Bareilly, Gorakhpur,
                        Meerut, etc.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Ready to upgrade your indoor facility with
                        professionally installed wooden flooring at a cheaper price?
                    </h2>
                    <Link target="_blank" href="/contact">
                        <Button label={"Contact Us"} />
                    </Link>
                    <Link className="ml-2" target="_blank" href="/projects">
                        <Button label={"See Our Projects"} />
                    </Link>
                    <Link className="ml-2" target="_blank" href="/sports">
                        <Button label={"See More"} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

const page = () => {
    return (
        <>
            <WoodenFlooring />
        </>
    );
};

export default page;
