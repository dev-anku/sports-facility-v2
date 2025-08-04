import { images, sampleImages, sportsContent, ProjectsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { faqDataSquash } from "@/public/constants"

export const metadata = {
    title: "Squash Court Construction in India",
    description:
        "Professional squash court construction services with high-quality materials, precision design, and durable finishes for competitive and recreational play for schools and clubs.",
    keywords:
        "squash court construction, squash court flooring, wooden squash court India, squash court builders, glass wall squash court, squash court contractors India, indoor squash court UP",
    alternates: {
        canonical: "https://sports-facility.in/sports/squash-court",
    },
};

const SquashCourt = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[6].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    Squash Court Construction
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Premium Squash Court Construction with Professional
                        Finishes
                    </h2>
                    <p>
                        Sports Facility builds regulation-compliant squash
                        courts for academies, sports complexes, institutions,
                        and residential clubs across India. We specialize in
                        delivering turnkey squash court projects with <Link className="text-blue-400" target="_blank" href="/sports/wooden-sports-flooring">hardwood
                        sports flooring</Link>, plastered or glass wall systems, and
                        integrated lighting — ensuring safety, precision, and
                        long-term durability. Our team operates from Uttar
                        Pradesh and delivers projects across the nation.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Squash Court Surface Options
                    </h2>
                    <p>
                        All surfaces conform to WSF standards for professional
                        squash court construction.
                    </p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🪵 <Link className="text-blue-400" target="_blank" href="/sports/wooden-sports-flooring">Hardwood Flooring</Link>:</strong> Premium maple
                            or teak wood with shock-absorbent sublayers and
                            anti-skid coating. Built for consistent rebound and
                            fast-paced footwork.
                        </li>
                        <li>
                            <strong>🧱 Plastered Side Walls:</strong>{" "}
                            High-density hard plaster system with multi-coat
                            finish for true ball rebound and long-term
                            durability.
                        </li>
                        <li>
                            <strong>🪟 Glass Back Wall:</strong> Tempered safety
                            glass for visibility and a premium aesthetic — ideal
                            for tournament setups and audience viewing.
                        </li>
                        <li>
                            <strong>🔦 LED Lighting & Wall Padding:</strong>{" "}
                            Glare-free overhead lights and optional acoustic
                            panels or protective padding for enhanced play
                            experience.
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Ideal For
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏫 Colleges and universities</li>
                        <li>🏘️ Housing societies and high-end real estate</li>
                        <li>🏅 Sports academies and training centers</li>
                        <li>🏢 Government and public recreation spaces</li>
                        <li>🏨 Clubs, gyms, and wellness resorts</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Our Construction Process
                    </h2>
                    <p>
                        We deliver end-to-end squash court construction with
                        engineered precision:
                    </p>
                    <ul className="list-inside list-disc">
                        <li>📍 Site analysis & layout planning</li>
                        <li>🧱 Civil work & sub-base leveling</li>
                        <li>🪵 <Link className="text-blue-400" target="_blank" href="/sports/wooden-sports-flooring">Wooden floor</Link> system with shock pads</li>
                        <li>
                            🧪 Wall finishing (plaster or glass installation)
                        </li>
                        <li>🔦 LED lighting integration & equipment fitting</li>
                        <li>🎯 Final court testing, markings & handover</li>
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
                        Though based in Uttar Pradesh, we provide Squash Court
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
                        if (project.tags.includes("squash")) {
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
                        Need a squash court built to WSF standards at a cheaper price?
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

const FAQSection = () => {
  return (
    <section 
      id="faq" 
      className="flex flex-col gap-8 mt-10 mx-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-60"
      data-aos="fade-right"
    >
      <div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-center">
          Frequently Asked Questions
        </h1>
      </div>
      <div>
        <FAQ faqData={faqDataSquash} />
      </div>
    </section>
  );
};

const page = () => {
    return (
        <>
            <SquashCourt />
            <FAQSection />
        </>
    );
};

export default page;
