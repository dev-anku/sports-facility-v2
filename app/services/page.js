import {
  productsImages,
  sampleImages,
  servicesPageContent,
} from "@/public/constants";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <header className="flex flex-col xl:mx-12">
      <div
        className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${sampleImages[0]})`,
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
            <Image
              src="https://placehold.co/400x500"
              alt={service.title}
              width={1920}
              height={1080}
              className="h-full object-cover"
            />
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
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-8 xl:flex-row">
          <div>
            <h1 className="font-text text-3xl font-semibold">
              <span className="mr-2 border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>{" "}
              Synthetic System
            </h1>
            <p className="mt-4 font-text text-gray-700">
              Elevate your game with our premium Synthetic Courts, expertly
              engineered for performance and longevity. As a leading
              manufacturer and service provider, Ridham Enterprises is dedicated
              to delivering world-class synthetic court surfaces that cater to
              players of all levels, from recreational to professional.
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
              <strong className="text-xl text-black">Surface Board</strong>
              <br />
              MAPLE WOOD SPORTS FLOORING finishing with 21mm thick, 53 to 93 mm
              wide and in random length in tongue and groove shape. The edges of
              the boards should have finger lock groove and the bottom side with
              air pass groove.
            </p>
            <p className="font-text text-gray-700">
              <strong className="text-xl text-black">The Under Frame</strong>
              <br />
              Made of pine wood runners of 70mmx45mm, treated with anti-termite
              solution and fixed on the bottom side with 10/19mm thick Rubber
              air cushioned pads, stappled through the two wings at 300mmx300mm.
              Installation - IPS subfloor treated with a vapour barrier to be
              placed on the leveled IPS sub floor before laying the under frame.
              the runners having air cushion pads to be placed on the vapour
              barrier in perfect level at 350mm in 1 direction.
            </p>
          </div>
          <div className="xl:w-[30%]">
            <p className="font-text text-gray-700">
              <strong className="text-xl text-black">Finish</strong>
              <br />
              The surface board to be screwed to the runner through the tongue
              only and will lock the screwed tongue by the groove of adjoining
              board. ends of the boards will be locked by inserting the wooden
              fingers through the edge grooves and fixed with suitable adhesive.
              an expansion of 15 to 20 mm to be left open between the wooden
              flooring the surrounding tiled area / walls. finishing - After
              installation the floor will be machine sanded in uniform level and
              finishing with P.U. POLISHING water based polyurethane lacquer.
            </p>
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
              For those looking to paint their floors in vivid colours, PlaySafe
              Premium offers a solution mix of organic and inorganic dyes, that
              speaks colours. The product offers a chance for architects and
              designers to mix and match the colour of the playground with the
              main theme. Based on EPDM technology, this flooring comes with
              fresh and permanent colours that do not fade away with either time
              or use.
            </p>
          </div>
          <div className="xl:w-[30%]">
            <p className="font-text text-gray-700 xl:mt-16">
              EPDM or Ethylene Propylene Diene Monomer is an organic synthetic
              elastomer which has many properties equivalent to or better than
              those of natural virgin rubber, after curing. During the
              production of the elastomer, several additives are used to enhance
              colours and their stability. This assures that the colours are
              durable, flexible and can also stand the test of weather and time.
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
