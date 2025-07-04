import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Pickle Ball Court Construction in India",
    description:
        "Professional pickleball court construction across India using acrylic, synthetic, and concrete surfaces. Durable, weatherproof layouts delivered from Uttar Pradesh nationwide.",
    keywords:
        "pickleball court construction, outdoor pickleball court India, acrylic pickleball surface, pickleball contractors India, UP pickleball court builders, pickleball flooring systems",
    alternates: {
        canonical: "https://sports-facility.in/sports/pickle-ball-court/",
    },
};

const PickleBallCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[10].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Pickle Ball Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Pickleball Court Construction by Sports Facility
                    </h2>
                    <p>
                        Sports Facility constructs high-performance pickleball
                        courts for clubs, communities, schools, and fitness
                        centers across India. Whether you're planning a
                        standalone pickleball space or a multi-sport layout, we
                        offer full design + build services, including base work,
                        surfacing, equipment, and lighting.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Surface Options for Pickleball Courts
                    </h2>
                    <p>
                        All surfaces meet USAPA and international pickleball
                        guidelines for bounce, grip, and court markings.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🟩 Acrylic Synthetic Courts:</strong>{" "}
                            Non-slip, low-maintenance surfaces ideal for both
                            indoor and outdoor use. Suitable for fast-paced
                            rallies with consistent ball bounce.
                        </li>
                        <li>
                            <strong>
                                🔶 PU (Polyurethane) Cushioned Flooring:
                            </strong>{" "}
                            Shock-absorbing indoor surface offering high
                            traction and comfort. Ideal for clubs and
                            multi-sport halls.
                        </li>
                        <li>
                            <strong>
                                🧱 Concrete Base with Synthetic Coating:
                            </strong>{" "}
                            Durable and cost-effective for housing societies,
                            schools, and open public courts.
                        </li>
                        <li>
                            <strong>
                                🌱 Artificial Turf (optional for multi-sport):
                            </strong>{" "}
                            Installed where flexibility for multiple sports or
                            recreational use is needed.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Add-On Options Available
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>Net post systems & pole padding</li>
                        <li>Acrylic surface logo branding</li>
                        <li>Lighting systems (LED/floodlights)</li>
                        <li>Perimeter fencing & spectator seating</li>
                        <li>Custom color zones or anti-glare coating</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Who We Build For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏘️ Housing societies and real estate projects</li>
                        <li>🏫 Schools, clubs, and fitness academies</li>
                        <li>
                            🏢 Government wellness centers & public sports parks
                        </li>
                        <li>🏨 Resorts, hotels, and retirement communities</li>
                        <li>
                            🏅 Multi-sport arenas and commercial sports
                            facilities
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>We handle your court project from start to finish:</p>
                    <ul className="list-inside list-disc">
                        <li>
                            📍 Site inspection and standard 13.41m × 6.1m layout
                        </li>
                        <li>🧱 RCC or asphalt sub-base construction</li>
                        <li>
                            🧪 Surface coating (acrylic/PU/turf) with color
                            customization
                        </li>
                        <li>🎯 Pickleball line marking (singles/doubles)</li>
                        <li>
                            🏗️ Net post installation, fencing, and lighting (if
                            needed)
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
                        Though based in Uttar Pradesh, we provide Pickle Ball
                        Court Construction services across India. We maintain a
                        dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Why Sports Facility?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            🛠️ Experienced in USAPA & Indian court design
                            standards
                        </li>
                        <li>
                            🧪 Certified acrylic, PU, and multi-surface options
                        </li>
                        <li>👷 In-house team: civil + surfacing + equipment</li>
                        <li>
                            📐 Custom layout options for clubs or public spaces
                        </li>
                        <li>
                            🔁 Maintenance contracts & resurfacing available
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Ready to build your own pickleball court?
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
            <PickleBallCourt />
        </>
    );
};

export default page;
