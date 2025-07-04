import { images, sampleImages, sportsContent, ProjectsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Tennis Court Construction in India",
    description:
        "Expert tennis court construction services across India. Synthetic, clay, and turf surfaces designed to international standards. Installed by specialists based in Uttar Pradesh.",
    keywords:
        "tennis court construction, synthetic tennis court India, acrylic tennis court, tennis court contractors, tennis court builders in Uttar Pradesh, outdoor tennis court flooring",
    alternates: {
        canonical: "https://sports-facility.in/sports/tennis-court/",
    },
};

const TennisCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[3].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Tennis Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Professional Tennis Court Construction Services in India
                    </h2>
                    <p>
                        At Sports Facility, we specialize in building
                        high-performance tennis courts for schools, sports
                        academies, housing societies, and private clients across
                        India. Based in Uttar Pradesh, our expert team delivers
                        courts that meet international quality standards and are
                        tailored to your usage, surface preference, and location
                        conditions.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Surface Options We Offer
                    </h2>
                    <p>
                        We construct tennis courts using materials suited for
                        Indian climate and player level:
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🟩 Synthetic Acrylic Courts:</strong> Most
                            popular, low maintenance, ideal for all-weather play
                        </li>
                        <li>
                            <strong>🌱 Artificial Turf Courts:</strong> 
                            Cushioned and slip-resistant, preferred in
                            residential setups
                        </li>
                        <li>
                            <strong>🪵 Wooden Tennis Courts:</strong> 
                            Indoor use with shock-absorbent wooden flooring
                            Ideal for training academies and indoor arenas
                        </li>
                        <li>
                            <strong>🧱 Cushioned Acrylic (PU):</strong> Ideal
                            for professional or training academies
                        </li>
                        <li>
                            <strong>
                                🏗️ Concrete or Cement Base with Surface Coating:
                            </strong>{" "}
                            Long life, strong foundation
                        </li>
                    </ul>
                    <p>
                        All our surfaces are engineered for bounce consistency,
                        water drainage, player safety, and durability.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Optional Add-Ons
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>Court lighting systems</li>
                        <li>Net posts and fencing</li>
                        <li>Seating and walkway zones</li>
                        <li>Drainage and leveling</li>
                        <li>Surface branding & logo painting</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Who We Build For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Schools, colleges, and sports institutions</li>
                        <li>🏘️ Residential societies and private homeowners</li>
                        <li>🏅 Tennis academies and clubs</li>
                        <li>🏢 Government and municipal complexes</li>
                        <li>🏨 Hotels and resorts</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Full Construction Process
                    </h2>
                    <p>We handle your court project from start to finish:</p>
                    <ul className="list-inside list-disc">
                        <li>📍 Site inspection and layout design</li>
                        <li>
                            🧱 Civil base construction (concrete/asphalt/RCC)
                        </li>
                        <li>
                            🧪 Surface installation (synthetic, turf, PU, etc.)
                        </li>
                        <li>🖌️ ITF-standard line markings and coating</li>
                        <li>
                            ⚙️ Add-ons: fencing, lighting, branding, and more
                        </li>
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
                        Though based in Uttar Pradesh, we provide Tennis Court
                        Construction services across India. We maintain a
                        dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Looking to build a professional tennis court?
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
                        if (project.tags.includes("tennis")) {
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
            <TennisCourt />
        </>
    );
};

export default page;
