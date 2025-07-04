import { images, sampleImages, sportsContent, ProjectsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Volleyball Court Construction in India",
    description:
        "Indoor and outdoor volleyball court construction across India with synthetic, acrylic, and sand surfaces. Built to standard dimensions. Based in Uttar Pradesh, serving pan-India.",
    keywords:
        "volleyball court construction, outdoor volleyball court India, indoor volleyball flooring, synthetic court builder, sand volleyball court, volleyball contractors UP",
    alternates: {
        canonical: "https://sports-facility.in/sports/volleyball-court/",
    },
};

const VolleyballCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[8].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Volleyball Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Indoor & Outdoor Volleyball Court Construction Across
                        India
                    </h2>
                    <p>
                        At Sports Facility, we construct standard-size
                        volleyball courts tailored for schools, academies,
                        clubs, and residential developments. Our surfaces are
                        engineered for optimal bounce, grip, and shock
                        absorption — suitable for both indoor and outdoor play.
                        With experience in multi-sport and volleyball-specific
                        builds, we provide full project delivery including civil
                        work, flooring, net systems, and accessories.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Surface Options for Volleyball Court
                    </h2>
                    <p>
                        All options adhere to FIVB (Fédération Internationale de
                        Volleyball) specifications and Indian climate standards.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🟩 Acrylic Synthetic Courts:</strong>{" "}
                            Weatherproof and textured for grip. Perfect for
                            outdoor volleyball in schools, clubs, and
                            institutions.
                        </li>
                        <li>
                            <strong>🔶 PU (Cushioned) Flooring:</strong>{" "}
                            Seamless, shock-absorbing indoor surface with high
                            bounce and controlled slide. Great for tournaments
                            and high-traffic arenas.
                        </li>
                        <li>
                            <strong>🪵 Wooden Flooring Courts:</strong> Maple or
                            teak hardwood with shock pads. Ideal for competitive
                            indoor courts with accurate ball response.
                        </li>
                        <li>
                            <strong>🏖️ Sand Volleyball Courts:</strong> Washed
                            river sand layer with proper boundary zoning.
                            Designed for beach-style recreational setups.
                        </li>
                        <li>
                            <strong>🧱 Concrete with Coated Surface:</strong>{" "}
                            Budget option for community setups and housing
                            societies. Includes anti-skid acrylic top finish.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Ideal For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Schools and colleges</li>
                        <li>🏘️ Residential societies</li>
                        <li>🏢 Indoor stadiums & gyms</li>
                        <li>🏅 Sports academies & training centers</li>
                        <li>🏨 Resorts, clubs, and event venues</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>
                        We ensure precision delivery for every volleyball court:
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            📐 Space planning and standard layout (18m × 9m
                            court size)
                        </li>
                        <li>
                            🧱 Civil base (RCC, asphalt, or sand compaction)
                        </li>
                        <li>
                            🧪 Surface installation (acrylic, PU, wood, or sand)
                        </li>
                        <li>🎯 Court markings and zoning</li>
                        <li>
                            🏗️ Net post setup, fencing, and lighting (if
                            required)
                        </li>
                    </ul>
                    <p>
                        We handle single and multi-court projects, with
                        flexibility in open or enclosed arenas.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Installation coverage across India
                    </h2>
                    <p>
                        Though based in Uttar Pradesh, we provide Volleyball
                        Court Construction services across India. We maintain a
                        dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Why Choose Sports Facility?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            🛠️ Over a decade of experience in indoor flooring
                        </li>
                        <li>🧪 Certified surface materials and coatings</li>
                        <li>👷 Fully in-house civil + flooring team</li>
                        <li>📦 On-time project completion, pan-India</li>
                        <li>
                            🔄 Repair, resurfacing & annual maintenance options
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Looking to build an indoor or outdoor volleyball court at a cheaper price?
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
                        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
                    {ProjectsContent.map((project) => {
                        if (project.tags.includes("volleyball")) {
                            return (
                                <div
                                    className="flex flex-col gap-2"
                                    key={project.title}
                                >
                                    <div className="h-[50vh] overflow-hidden rounded-lg">
                                        <Image
                                            src={project.image}
                                            width={1920}
                                            height={1080}
                                            alt={project.title}
                                            className="h-full object-cover"
                                        />
                                    </div>
                                    <h2 className="font-text uppercase text-blue-400">
                                        {project.type}
                                    </h2>
                                    <h1 className="font-text text-2xl font-medium uppercase">
                                        {project.title}
                                    </h1>
                                    <p className="font-text text-gray-600">
                                        {project.description}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

const page = () => {
    return (
        <>
            <VolleyballCourt />
        </>
    );
};

export default page;
