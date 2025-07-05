import {
    images,
    sampleImages,
    sportsContent,
    ProjectsContent,
} from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Running Track Construction in India",
    description:
        "Professional running track construction with EPDM, PU, and acrylic surfaces. Built for athletic training and multi-use across India. Based in Uttar Pradesh with pan-India execution.",
    keywords:
        "running track construction, synthetic track India, EPDM running track, PU athletic track, 200m track installation, sports track contractors India, jogging track builder UP",
    alternates: {
        canonical: "https://sports-facility.in/sports/running-track/",
    },
};

const RunningTrack = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[7].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Running Track Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        All-Weather Running Track Construction by Sports
                        Facility
                    </h2>
                    <p>
                        Sports Facility designs and builds high-quality running
                        tracks for schools, stadiums, public parks, colleges,
                        and residential projects across India. We specialize in
                        shock-absorbent, weather-resistant surfaces using EPDM,
                        PU, or acrylic-based systems, installed with accurate
                        leveling and drainage. Headquartered in Uttar Pradesh,
                        we manage complete track construction projects
                        nationwide — from foundation to final lane marking.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Surface Options for Running Tracks
                    </h2>
                    <p>
                        All track systems are slip-resistant, fade-proof, and
                        built to handle extreme Indian weather conditions.{" "}
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🟥 EPDM Rubber Tracks:</strong>{" "}
                            Long-lasting, UV-resistant, and highly cushioned.
                            Great for school grounds, public parks, and
                            multi-use jogging areas.
                        </li>
                        <li>
                            <strong>🟨 PU (Polyurethane) Tracks:</strong>{" "}
                            Seamless, durable surface preferred for competitive
                            athletic tracks and training grounds.
                        </li>
                        <li>
                            <strong>🟦 Acrylic Spray-Coated Tracks:</strong>{" "}
                            Budget-friendly, low-maintenance solution for light
                            athletic or recreational use on concrete bases.
                        </li>
                        <li>
                            <strong>🟩 SBR Base with EPDM Top Layer:</strong>{" "}
                            Two-layer system combining shock absorption with
                            premium surface grip. Ideal for 100m–400m tracks and
                            training circuits.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Ideal For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Schools and universities</li>
                        <li>🏅 Stadiums and sports authorities</li>
                        <li>🏘️ Housing societies and commercial real estate</li>
                        <li>🏢 Municipal parks and government projects</li>
                        <li>🏨 Resorts and fitness retreats</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Add-On Options
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>Track lighting and pole setup</li>
                        <li>Steel fencing and gates</li>
                        <li>Rest benches and shade structures</li>
                        <li>Branding, signboards, and logos</li>
                        <li>Long jump or multi-purpose extensions</li>
                    </ul>
                    <p>
                        Add-ons: acoustic panels, ventilation setup, digital
                        scoreboard wiring.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Installation coverage across India
                    </h2>
                    <p>
                        Though based in Uttar Pradesh, we provide Running Track
                        Construction services across India. We maintain a
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
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
                    {ProjectsContent.map((project) => {
                        if (project.tags.includes("running")) {
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
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Planning a new running or jogging track at a cheaper price?
                    </h2>
                    <Link target="_blank" href="/contact">
                        <Button label={"Contact Us"} />
                    </Link>
                    <Link className="xl:ml-2" target="_blank" href="/projects">
                        <Button label={"See Our Projects"} />
                    </Link>
                    <Link className="xl:ml-2" target="_blank" href="/sports">
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
            <RunningTrack />
        </>
    );
};

export default page;
