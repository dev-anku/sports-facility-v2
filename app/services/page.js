import {
    images,
    productsImages,
    sampleImages,
    servicesPageContent,
} from "@/public/constants";
import Image from "next/image";
import React from "react";

export const metadata = {
    title: "Services",
    description:
        "Services offered by Sports Facility, known for sports flooring and construction, established in Lucknow, Uttar Pradesh",
    alternates: {
        canonical: "https://sports-facility.in/services",
    },
};

const HeroSection = () => {
    return (
        <header className="flex flex-col xl:mx-12">
            <div
                className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
                style={{
                    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[2]})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <h1 className="text-center font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
                    Services & Products
                </h1>
            </div>
        </header>
    );
};

const ServicesSection = () => {
    return (
        <section className="mx-6 my-8 flex flex-col items-center justify-center gap-8 xl:mx-32 xl:my-12">
            <h1 className="font-heading text-[2.5rem] uppercase xl:text-6xl">
                What We Do?
            </h1>
            <div className="flex flex-col items-center justify-center gap-8 xl:flex-row">
                {servicesPageContent.map((service, index) => (
                    <div
                        className="relative flex flex-col gap-4 bg-gray-200 text-center"
                        style={{ top: `${index * 50}px` }}
                        key={service.title}
                    >
                        <div className="h-[50vh]">
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={1920}
                                height={1080}
                                className="h-full object-cover"
                            />
                        </div>
                        <h1 className="font-text text-3xl">{service.title}</h1>
                        <p className="px-4 pb-4 font-text leading-normal text-gray-600">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const ProductsSection = () => {
    return (
        <section className="mx-6 mt-40 flex flex-col items-center justify-center gap-10 xl:mx-32 xl:gap-20">
            <h1 className="text-center font-heading text-[2.5rem] uppercase xl:text-6xl">
                Products That We Offer
            </h1>
            <div className="flex flex-col gap-8 xl:flex-row">
                <div className="xl:w-[40%]">
                    <h1 className="font-text text-3xl font-semibold">
                        <span className="mr-2 border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>{" "}
                        Wooden Flooring
                    </h1>
                    <div className="my-8">
                        <Image
                            src={productsImages[2]}
                            alt="Wooden Flooring"
                            width={1920}
                            height={1080}
                            className="h-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-8 xl:w-[30%]">
                    <p className="font-text text-gray-700">
                        At Sports Facility, we take pride in developing the best
                        wooden courts with superior-quality wooden flooring,
                        designed to meet international standards. Our expertise
                        extends across India, providing durable,
                        high-performance flooring solutions for sports arenas,
                        academies, and institutions.
                    </p>
                    <p className="font-text text-gray-700">
                        We offer three types of premium wooden flooring: Teak
                        Wood, Maple Wood, and Hevea, each carefully selected for
                        its durability, performance, and aesthetic appeal. To
                        ensure the longevity of our wooden courts, we also
                        provide anti-termite treatment, protecting the wood from
                        damage and ensuring it remains strong and long-lasting.
                    </p>
                </div>
                <div className="xl:w-[30%]">
                    With a commitment to excellence and precision, we guarantee
                    that every court we build enhances gameplay, safety, and
                    durability. Whether for basketball, badminton, or
                    multi-sport use, our wooden flooring is trusted by
                    professionals and enthusiasts alike, making us a leading
                    name in sports infrastructure across the country.
                </div>
            </div>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-8 xl:flex-row">
                    <div>
                        <h1 className="font-text text-3xl font-semibold">
                            <span className="mr-2 border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>{" "}
                            Synthetic System
                        </h1>
                        <p className="mt-4 font-text text-gray-700">
                            Elevate your game with our premium Synthetic Courts,
                            expertly engineered for performance and longevity.
                            As a leading manufacturer and service provider,
                            Ridham Enterprises is dedicated to delivering
                            world-class synthetic court surfaces that cater to
                            players of all levels, from recreational to
                            professional.
                        </p>
                    </div>
                    <div className="xl:mt-8">
                        <h1 className="mb-2 font-text text-2xl">
                            5 Layer Synthetic System
                        </h1>
                        <div>
                            <Image
                                src={productsImages[0]}
                                alt="5 Layer Synthetic System"
                                width={1920}
                                height={1080}
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="xl:mt-8">
                        <h1 className="mb-2 font-text text-2xl">
                            8 Layer Synthetic System
                        </h1>
                        <div>
                            <Image
                                src={productsImages[1]}
                                alt="8 Layer Synthetic System"
                                width={1920}
                                height={1080}
                                className="h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 xl:flex-row">
                    <div className="xl:w-[40%]">
                        <h1 className="font-text text-3xl font-semibold">
                            <span className="mr-2 border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>{" "}
                            EPDM Flooring
                        </h1>
                        <div className="my-8 flex gap-2">
                            <Image
                                src={productsImages[3]}
                                alt="EPDM Flooring"
                                width={1920}
                                height={1080}
                                className="h-full w-1/2 object-cover"
                            />
                            <Image
                                src={productsImages[4]}
                                alt="EPDM Flooring 2"
                                width={1920}
                                height={1080}
                                className="h-full w-1/2 object-cover"
                            />
                        </div>
                    </div>
                    <div className="xl:w-[30%]">
                        <p className="font-text text-gray-700 xl:mt-16">
                            We prioritize the safety and enjoyment of children
                            with our premium EPDM (Ethylene Propylene Diene
                            Monomer) flooring. Designed specifically for
                            kid&apos;s play areas, EPDM flooring provides a
                            soft, impact-resistant, and slip-proof surface,
                            ensuring a secure and fun environment for children
                            of all ages.
                            <br />
                            <br />
                            At Halwasiya, we ensure high-quality installation
                            using premium materials to create a safe and
                            engaging space for children. Give your little ones
                            the freedom to play, explore, and grow without
                            worries!
                        </p>
                    </div>
                    <div className="xl:w-[30%]">
                        <p className="font-text text-gray-700 xl:mt-16">
                            <strong>Why Choose EPDM Flooring for Kids?</strong>{" "}
                            <br />✅ Shock Absorption – Reduces the risk of
                            injuries from falls <br />✅ Non-Slip Surface –
                            Enhances safety during playtime <br />✅ Durable &
                            Weather-Resistant – Withstands heavy foot traffic
                            and outdoor conditions <br />✅ Vibrant Colors &
                            Custom Designs – Create engaging and playful themes{" "}
                            <br />✅ Low Maintenance & Eco-Friendly – Easy to
                            clean and made from sustainable materials <br />
                            <br />
                            Perfect for Various Play Areas <br />
                            ✔️ Schools & Kindergartens <br />
                            ✔️ Parks & Playgrounds <br />
                            ✔️ Indoor Play Zones <br />
                            ✔️ Residential Play Areas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const page = () => {
    return (
        <>
            <HeroSection />
            <ServicesSection />
            <ProductsSection />
        </>
    );
};

export default page;
