import { images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Synthetic Sports Flooring",
    description:
        "Top-quality synthetic sports flooring for outdoor and indoor courts across India. UV-resistant, anti-skid, and long-lasting surfaces built to international standards.",
    keywords:
        "synthetic sports flooring, acrylic court surface, outdoor court flooring India, synthetic flooring UP, synthetic basketball court, synthetic tennis court, synthetic turf installers",
    alternates: {
        canonical:
            "https://sports-facility.in/sports/synthetic-sports-flooring/",
    },
};

const SyntheticFlooring = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[2].image}
                    width={1920}
                    height={1080}
                    className="rounded-lg"
                    alt="hero"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Synthetic Sports Flooring
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Synthetic Sports Flooring for Courts, Tracks &
                        Playgrounds
                    </h2>
                    <p>
                        At Sports Facility, we design and install durable,
                        low-maintenance synthetic flooring systems for outdoor
                        and indoor sports. Our flooring is UV-resistant,
                        anti-skid, weatherproof, and built to handle the demands
                        of everyday play across India. Whether for basketball,
                        tennis, volleyball, or multi-sport arenas, we provide
                        end-to-end flooring solutions tailored to your
                        requirements.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Why Choose Synthetic Flooring?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🌞 UV & Weather Resistant:</strong> Built
                            for outdoor durability in any climate
                        </li>
                        <li>
                            <strong>🚫 Low Maintenance:</strong> No polishing,
                            sealing, or repainting required
                        </li>
                        <li>
                            <strong>🦶 Slip Resistance:</strong> Ensures safe
                            grip even during wet conditions
                        </li>
                        <li>
                            <strong>🎯 Multi-Sport Friendly:</strong> Supports
                            multiple game types on one surface
                        </li>
                        <li>
                            <strong>🧩 Quick Installation:</strong> Fast curing
                            and minimal downtime
                        </li>
                        <li>
                            <strong>🎨 Color & Custom Marking Options:</strong>{" "}
                            Choose court layout, branding, and visual theme
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Technical Specifications
                    </h2>
                    <p>Our Synthetic Flooring system includes:</p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Acrylic Top Coating:</strong> Long-lasting
                            anti-skid surface layer
                        </li>
                        <li>
                            <strong>PU / Rubberized Base Layer:</strong>{" "}
                            Optional shock-absorbent underlay
                        </li>
                        <li>
                            <strong>Sub-base Compatibility:</strong> Can be
                            applied over concrete or asphalt
                        </li>
                        <li>
                            <strong>Line Markings:</strong> High-contrast,
                            fade-resistant paint
                        </li>
                        <li>
                            <strong>System Thickness:</strong> Varies between
                            2–5 mm depending on usage
                        </li>
                        <li>
                            <strong>Finish:</strong> Textured matte finish for
                            grip and speed control
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Where Synthetic Flooring Works Best
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏀 Basketball courts (indoor & outdoor)</li>
                        <li>🎾 Tennis & Pickleball courts</li>
                        <li>🏐 Volleyball & futsal courts</li>
                        <li>🏫 School play areas & institutional grounds</li>
                        <li>
                            🏃 Athletic tracks & multi-use recreational spaces
                        </li>
                        <li>
                            🏠 Clubhouses, societies, and commercial facilities
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        End-to-End Service: From Base to Bounce
                    </h2>
                    <p>We handle your full project lifecycle:</p>
                    <ul className="list-inside list-disc">
                        <li>Site evaluation & measurement</li>
                        <li>Base layer construction / repairs</li>
                        <li>Material application (PU, acrylic, or combo)</li>
                        <li>Sanding, levelling & curing</li>
                        <li>Game line painting and client inspection</li>
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
                        Our company is headquartered in Uttar Pradesh, but we
                        install synthetic flooring across all major cities in
                        India, including: Delhi NCR, Lucknow, Noida, Kanpur,
                        Varanasi, Ahmedabad, Mumbai, Pune, Bengaluru, Hyderabad,
                        Kolkata, and more. Whether it's a new sports complex,
                        school project, or a court renovation, we bring the same
                        precision and quality nationwide.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Planning to install a long-lasting, weatherproof
                        synthetic surface for your court or facility?
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
            <SyntheticFlooring />
        </>
    );
};

export default page;
