import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Badminton Court Construction in India",
    description:
        "Indoor and outdoor badminton court construction services across India with wooden, synthetic, and vinyl surfaces. Engineered for safety, speed, and precision. Based in Uttar Pradesh.",
    keywords:
        "badminton court construction India, indoor badminton flooring, wooden badminton court, synthetic badminton court installation, vinyl sports flooring India, badminton contractors UP",
    alternates: {
        canonical: "https://sports-facility.in/sports/badminton-court/",
    },
};

const BadmintonCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[5].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Badminton Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Custom-Built Badminton Courts with Professional Grade
                        Flooring
                    </h2>
                    <p>
                        At Sports Facility, we design and construct badminton
                        courts that meet both recreational and professional
                        standards. Our expertise spans indoor training arenas,
                        school halls, residential clubhouses, and commercial
                        complexes. Whether you need a wooden badminton floor, a
                        synthetic mat, or a multi-use vinyl surface, we provide
                        end-to-end solutions — civil base to final line markings
                        — delivered with unmatched precision.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Badminton Court Surface Options
                    </h2>
                    <p>
                        All surfaces are designed to meet BWF standards for
                        bounce, grip, and court marking accuracy.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🪵 Wooden Flooring Courts:</strong> Indoor
                            maple or teak wood with shock-absorbent sublayers
                            and anti-skid finish. Preferred for competitive
                            academies and pro-level play.
                        </li>
                        <li>
                            <strong>🟩 Vinyl (PVC) Synthetic Mats:</strong>{" "}
                            Roll-based cushioned surfaces with anti-slip
                            texture. Ideal for schools, clubs, and fast
                            installations.
                        </li>
                        <li>
                            <strong>
                                🔶 PU (Cushioned Polyurethane) Courts:
                            </strong>{" "}
                            Seamless, cushioned floors offering comfort,
                            consistent shuttle bounce, and low impact on joints.
                            Great for indoor multi-use setups.
                        </li>
                        <li>
                            <strong>
                                🧱 Concrete Base with Acrylic Coating:
                            </strong>{" "}
                            Budget-friendly option for semi-indoor or covered
                            outdoor setups, featuring a textured, anti-skid
                            acrylic top layer.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        What's Included In Our Turnkey Service:
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>📐 Layout design & space optimization</li>
                        <li>🧱 Base work (RCC or levelling)</li>
                        <li>🧪 Flooring system installation</li>
                        <li>🎯 Court markings (BWF spec)</li>
                        <li>🏗️ Pole and net systems</li>
                        <li>
                            🔧 Optional: wall padding, LED lighting, branding
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Who We Build For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Educational institutions and hostels</li>
                        <li>🏢 Government and municipal sports facilities</li>
                        <li>🏅 Sports academies and indoor training centers</li>
                        <li>🏘️ Residential townships and clubs</li>
                        <li>🏨 Hotels, wellness centers, and fitness chains</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>
                        We handle the complete badminton court setup — from
                        structural groundwork to final finishes:
                    </p>
                    <ul className="list-inside list-disc">
                        <li>📐 Site inspection & measurement</li>
                        <li>
                            🧱 Sub-base construction (concrete/RCC leveling as
                            required)
                        </li>
                        <li>
                            🧪 Surface installation (wood, vinyl, PU, or coated
                            concrete)
                        </li>
                        <li>🎯 BWF-compliant line marking and detailing</li>
                        <li>🏗️ Net pole installation and accessory fitting</li>
                        <li>
                            🔦 Optional: lighting, wall padding, logo branding,
                            and acoustic paneling
                        </li>
                    </ul>
                    <p>
                        All our courts are designed for maximum playability,
                        grip, and bounce — in accordance with FIBA standards.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Installation coverage across India
                    </h2>
                    <p>
                        Though based in Uttar Pradesh, we provide Badminton
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
                        Want to build a high-performance badminton court?
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
            <BadmintonCourt />
        </>
    );
};

export default page;
