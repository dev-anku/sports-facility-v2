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
    title: "Basketball Court Construction in India",
    description:
        "Expert Basketball court construction and premium Sports flooring solutions tailored for performance, durability, and safety across all play levels.",
    keywords:
        "basketball court construction India, outdoor basketball flooring, wooden basketball court, synthetic basketball court builders, PU sports flooring, basketball contractors India, court construction UP",
    alternates: {
        canonical: "https://sports-facility.in/sports/basketball-court",
    },
};

const BasketballCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[4].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Basetball Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Indoor & Outdoor Basketball Court Construction by Sports
                        Facility
                    </h2>
                    <p>
                        At Sports Facility, we offer complete construction
                        solutions for basketball courts, covering everything
                        from sub-base construction to final court marking and
                        accessories. Whether indoor or outdoor, we deliver
                        precision-built courts using durable and
                        performance-oriented flooring — with all services
                        handled in-house. Based in Uttar Pradesh, we serve
                        clients nationwide across India.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Basketball Court Surface Options
                    </h2>
                    <p>
                        All surfaces are engineered for optimum grip, bounce
                        consistency, safety, and durability in Indian
                        conditions.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>
                                🪵{" "}
                                <Link
                                    className="text-blue-400"
                                    target="_blank"
                                    href="/sports/wooden-sports-flooring"
                                >
                                    Wooden Flooring Courts
                                </Link>
                                :
                            </strong>{" "}
                            Ideal for indoor play, built with shock-absorbent
                            maple or teak. Preferred by academies and
                            professional training centers.
                        </li>
                        <li>
                            <strong>
                                🟩{" "}
                                <Link
                                    className="text-blue-400"
                                    target="_blank"
                                    href="/sports/synthetic-sports-flooring"
                                >
                                    Synthetic Acrylic Courts
                                </Link>
                                :
                            </strong>{" "}
                            Weatherproof, anti-skid, and budget-friendly. Great
                            for schools, societies, and public sports grounds.
                        </li>
                        <li>
                            <strong>🔶 PU (Cushioned Acrylic) Courts:</strong>{" "}
                            Seamless, cushioned, and high-performance surface
                            suitable for multi-sport indoor courts.
                        </li>
                        <li>
                            <strong>🌱 Artificial Turf Courts:</strong> Soft,
                            low-impact surface best for recreational and
                            residential setups.
                        </li>
                        <li>
                            <strong>🧱 Concrete Base with Coating:</strong>{" "}
                            Long-lasting, cost-effective solution with synthetic
                            top layer for outdoor installations.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Add-On Services Available
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>Court lighting installation</li>
                        <li>Fencing and pole system</li>
                        <li>
                            Branding, logos, and multi-sport layout integration
                        </li>
                        <li>Seating and side paving</li>
                        <li>
                            Surface re-polishing, repairs, and annual
                            maintenance
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Who We Build For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Schools, colleges, and universities</li>
                        <li>🏢 Government sports facilities</li>
                        <li>🏠 Residential townships & societies</li>
                        <li>🏅 Sports academies & training centers</li>
                        <li>🏨 Hotels, resorts, and clubs</li>
                        <li>🏗️ Corporate & commercial real estate projects</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>We handle your court project from start to finish:</p>
                    <ul className="list-inside list-disc">
                        <li>📍 Site survey and leveling</li>
                        <li>🧱 Civil base construction (concrete/asphalt)</li>
                        <li>
                            🧪 Surface layering (
                            <Link
                                className="text-blue-400"
                                target="_blank"
                                href="/sports/wooden-sports-flooring"
                            >
                                wood
                            </Link>
                            ,{" "}
                            <Link
                                className="text-blue-400"
                                target="_blank"
                                href="/sports/epdm-sports-flooring"
                            >
                                acrylic
                            </Link>
                            , PU, etc.)
                        </li>
                        <li>🖌️ FIBA-compliant court markings</li>
                        <li>
                            🏗️ Accessories: hoops, poles, backboards, and
                            fencing
                        </li>
                        <li>🔦 Optional: Lighting and branding</li>
                    </ul>
                    <p>
                        All our courts are designed for maximum playability,
                        grip, and bounce — in accordance with FIBA standards.We
                        also offer:
                    </p>
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
                        Though based in Uttar Pradesh, we provide Basketball
                        Court Construction services across India. We maintain a
                        dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
                    {ProjectsContent.map((project) => {
                        if (project.tags.includes("basketball")) {
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
                        Need a reliable team to build your indoor or outdoor
                        basketball court for a cheaper price?
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
            <BasketballCourt />
        </>
    );
};

export default page;
