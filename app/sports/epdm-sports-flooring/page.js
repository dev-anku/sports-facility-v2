import { faqDataEPDM, images, sampleImages, sportsContent } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { faqDataEPDM } from "@/public/constants"

export const metadata = {
    title: "EPDM Sports Flooring",
    description:
        "Discover expert EPDM flooring construction services for durable, safe, and high-performance sports surfaces tailored for indoor and outdoor use.",
    keywords:
        "EPDM sports flooring, outdoor rubber flooring, EPDM court surface, playground surfacing India, EPDM flooring contractors, EPDM flooring Uttar Pradesh",
    alternates: {
        canonical: "https://sports-facility.in/sports/epdm-sports-flooring",
    },
};

const EPDMFlooring = () => {
    return (
        <section
            id="about"
            className="mx-6 my-8 flex flex-col items-center justify-center gap-16 xl:mx-auto xl:my-12 xl:w-4/6"
        >
            <div>
                <Image
                    src={sportsContent[1].image}
                    width={1920}
                    height={1080}
                    alt="hero"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col gap-4 font-text text-gray-600 xl:text-xl">
                <h1 className="font-heading text-5xl uppercase text-black">
                    EPDM Sports Flooring
                </h1>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        EPDM Rubber Flooring for Outdoor Courts & Playgrounds
                    </h2>
                    <p>
                        Sports Facility offers high-performance, weatherproof
                        EPDM sports flooring for{" "}
                        <Link
                            className="text-blue-400"
                            target="_blank"
                            href="/sports"
                        >
                            outdoor courts
                        </Link>
                        , playgrounds, and athletic zones across India. Based in
                        Uttar Pradesh, we deliver customized surfacing systems
                        suitable for heavy outdoor use, ensuring maximum safety,
                        grip, and long-term durability.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Why Choose EPDM Flooring?
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>🛡️ Shock-Absorbent Surface:</strong> Reduces
                            joint strain and injury risk
                        </li>
                        <li>
                            <strong>🌧️ UV & Weather Resistant:</strong>{" "}
                            Withstands sun, rain, and outdoor wear
                        </li>
                        <li>
                            <strong>🧼 Low Maintenance:</strong> Doesn’t chip,
                            peel, or trap moisture
                        </li>
                        <li>
                            <strong>🦶 Non-Slip Texture:</strong> Enhances
                            player traction during fast motion
                        </li>
                        <li>
                            <strong>🎨 Color Variety:</strong> Available in
                            vibrant tones and patterns
                        </li>
                        <li>
                            <strong>🧒 Child-Safe:</strong> Ideal for school
                            grounds and playgrounds
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Technical Specifications
                    </h2>
                    <p>Our EPDM Flooring system includes:</p>
                    <ul className="list-inside list-disc">
                        <li>
                            <strong>Base Layer:</strong> SBR granules for shock
                            absorption
                        </li>
                        <li>
                            <strong>Top Layer:</strong> Virgin EPDM granules for
                            UV resistance and vibrant finish
                        </li>
                        <li>
                            <strong>Binder:</strong> Polyurethane binder for
                            strong adhesion
                        </li>
                        <li>
                            <strong>Thickness Options:</strong> Ranges from 10mm
                            to 25mm based on usage
                        </li>
                        <li>
                            <strong>Surface Finish:</strong> Matte, textured, or
                            sealed — based on sport or play area needs
                        </li>
                        <li>
                            <strong>Application:</strong> Poured-in-place or
                            tile format depending on client requirements{" "}
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-black">
                        Where EPDM Flooring Works Best
                    </h2>
                    <ul className="list-inside list-disc">
                        <li>🏸 <Link className="text-blue-400" target="_blank" href="/sports">Multi-sport outdoor courts</Link></li>
                        <li>🏀 <Link className="text-blue-400" target="_blank" href="/sports/basketball-court">Basketball</Link> and <Link className="text-blue-400" target="_blank" href="/sports/volleyball-court">volleyball</Link> surfaces</li>
                        <li>🧒 Children’s play areas and school playgrounds</li>
                        <li>🏃 <Link className="text-blue-400" target="_blank" href="/sports/skating-track">Skating tracks</Link> and walkways</li>
                        <li>
                            🏫 Recreational zones in institutions and housing
                            societies
                        </li>
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
                        Though based in Uttar Pradesh, we provide EPDM rubber
                        flooring installation services across India. We maintain
                        a dedicated team of installers, surface specialists, and
                        project managers who ensure timely delivery, precise
                        installation, and post-installation support — anywhere
                        in the country.
                    </p>
                </div>
                <div>
                    <h2 className="mb-3 text-2xl font-semibold text-black">
                        Looking to install a long-lasting, visually striking
                        EPDM surface for your facility at a cheaper price?
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
        <FAQ faqData={faqDataEPDM} />
      </div>
    </section>
  );
};

const page = () => {
    return (
        <>
            <EPDMFlooring />
            <FAQSection />
        </>
    );
};

export default page;
