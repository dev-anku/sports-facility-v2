import { images, sampleImages, sportsContent, ProjectsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Skating Track Construction in India",
    description:
        "Expert skating track and roller skating rink construction across India. Durable concrete, PU, and synthetic skating surfaces. Based in Uttar Pradesh, serving pan-India.",
    keywords:
        "skating track construction, roller skating rink India, concrete skating surface, PU skating track, outdoor skating court builders, skating contractors Uttar Pradesh",
    alternates: {
        canonical: "https://sports-facility.in/sports/skating-track/",
    },
};

const SkatingTrack = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[9].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Skating Track Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Outdoor & Indoor Skating Track Construction by Sports
                        Facility
                    </h2>
                    <p>
                        Sports Facility constructs professional skating tracks
                        and roller rinks for schools, clubs, academies, and
                        urban sports parks across India. Whether you’re planning
                        a recreational circuit or a professional roller sports
                        arena, we deliver custom track layouts with high-grip,
                        impact-resistant surfaces designed for safety,
                        durability, and smooth rolling.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Surface Options for Skating Tracks
                    </h2>
                    <p>
                        All surfaces are non-slip, weather-resistant, and
                        engineered for smooth rolling and reduced fall impact.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🧱 Polished Concrete Tracks:</strong>{" "}
                            Smooth, wear-resistant finish ideal for speed
                            skating, with excellent grip for wheels. Best for
                            open public rinks and training loops.
                        </li>
                        <li>
                            <strong>🔶 PU (Polyurethane) Coated Tracks:</strong>{" "}
                            Seamless, cushioned surface with controlled grip.
                            Great for indoor skating and multi-sport use.
                        </li>
                        <li>
                            <strong>🟩 Acrylic Synthetic Tracks:</strong>{" "}
                            UV-resistant, low-maintenance coating ideal for
                            semi-outdoor recreational skating circuits.
                        </li>
                        <li>
                            <strong>🧪 Hybrid Skating Surfaces:</strong> Custom
                            blends of rubber, acrylic, or PU for specific
                            performance or aesthetic requirements.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Add-On Options Available
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>LED perimeter lighting</li>
                        <li>Guard rails and fencing</li>
                        <li>Seating arrangements</li>
                        <li>Logo branding or painted circuits</li>
                        <li>Rest zones and water stations</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Who We Build For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Educational institutions</li>
                        <li>🏘️ Housing society parks</li>
                        <li>🏢 Municipal sports departments</li>
                        <li>🏅 Skating academies & clubs</li>
                        <li>🏨 Resorts & lifestyle townships</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>We handle your court project from start to finish:</p>
                    <ul className="list-inside list-disc">
                        <li>
                            📐 Site planning, loop layout & curve mapping
                            (typically 100m–200m)
                        </li>
                        <li>
                            🧱 Sub-base construction (concrete, RCC, or asphalt)
                        </li>
                        <li>
                            🧪 Surface application with polishing, coating, or
                            PU pouring
                        </li>
                        <li>🎯 Markings for lanes, speed zones, or circuits</li>
                        <li>
                            🛞 Equipment placement: guardrails, benches,
                            boundary poles
                        </li>
                        <li>
                            🔦 Optional lighting, fencing & seating integration
                        </li>
                    </ul>
                    <p>
                        We design oval, circular, figure-eight, or freestyle
                        layouts based on usage type and space.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Installation coverage across India
                    </h2>
                    <p>
                        Though based in Uttar Pradesh, we provide Skating Track
                        Construction services across India. We maintain a
                        dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Planning a skating track or roller rink?
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
                        if (project.tags.includes("skating")) {
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
            <SkatingTrack />
        </>
    );
};

export default page;
