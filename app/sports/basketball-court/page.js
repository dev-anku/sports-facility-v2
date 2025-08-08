import {
    images,
    sampleImages,
    sportsContent,
    ProjectsContent,
    basketballFlooringTypes,
} from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import { FAQ } from "@/components/FAQ";
import { faqDataBasketball } from "@/public/constants"

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

const HeroSection = () => {
  return (
    <header className="relative w-full h-[70vh] flex items-center justify-center bg-black">
      <Image
        src={sportsContent[4].image}
        alt="Badminton Court Flooring"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="z-10 text-center px-4 text-white">
        <h1 className="font-heading text-4xl md:text-7xl font-bold mb-4">
          Premium BasketBall Court Flooring
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Explore top-quality wooden, synthetic, and PP Tiles flooring options designed for professional gameplay and long-term durability.
        </p>
      </div>
    </header>
  );
}
const DescriptionSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="w-full h-[260px] xl:h-[450px]  relative rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/images/sports/nba.jpeg" // Update to your image path
              alt="Outdoor Tennis Court"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className=" font-heading text-4xl md:text-5xl text-gray-900 mb-4">
              Basketball 
            </h2>
            <p className="text-gray-700 mb-4">
              ⛹️Basketball is a fast-paced game and well known globally popular sport, loved for its excitement, thrill and team strategy. It doesn’t matter it is played in a professionally or recreationally manners, knowing the basketball game rules is essential for the players to play a fair and learn the game in better way. With the rise of interest in sport world, the searches for basketball game, basketball flooring indoor, and basketball rules, basketball court flooring material these searches have significantly increased, highlighting the demand for quality playing surfaces. 
 
            </p>
            {/* <p className="text-gray-700 mb-4">
              📏Court Dimensions & Flooring: A basketball court flooring measures are 28.65 meters long and 15.24 meters wide. Flooring plays a key role—indoor basketball court flooring is usually made of hardwood like Teak wood for the wooden basketball court flooring. Synthetic basketball flooring is also used for the basketball courts; outdoor basketball games use different material for construction and maintenance. Indoor and outdoor basketball material is decided according to the condition and the requirement of the user which offering excellent bounce and durability. The usage of the right basketball court flooring material always ensures safety & enhances performance, which is always beneficial for the indoor basketball games. 
            </p> */}
            <p className="text-gray-700 mb-6">
              🏆 Major Tournaments and Courts Usage:   Some of the names are NBA, NCAA, and FIBA World Cup are hosted on premium indoor basketball courts that are specially designed for professional play. Meanwhile, local and street matches often take place on outdoor basketball courts for the player to practice and enhance their skills they can also use synthetic surfaces. Understanding the usage of different types of basketball courts helps in choosing the right one based on the level of play and setting

            </p>
            <Link href={"/contact"}>
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-full shadow">
              Enquire Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
const FlooringTypesSection = () => {
  return (
    <section id='flooringtypes' className=" py-16">
      <div className="container mx-auto  px-4">
        <h2 className="font-heading text-4xl md:text-5xl  text-center mb-10">
          Basketball Flooring We Offer
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {basketballFlooringTypes.map((flooring, index) => (
            <div
              key={index}
              className="flip-card relative w-full h-80 flex flex-col gap-4"
            >
              <div className="flip-inner relative w-full h-full">
                {/* Front Side */}
                <div className="relative flip-front bg-white shadow-lg p-4 flex flex-col items-center justify-center">
                  <div className=" w-full h-40 mb-4 ">
                    <Image
                      src={flooring.image}
                      alt={flooring.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                </div>

                {/* Back Side */}
                <div className="flip-back bg-white shadow-xl p-6 flex items-center justify-center">
                  <p className="text-gray-800 text-lg text-center">
                    {flooring.description}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-center bottom-5">
                    {flooring.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const CourtDimensionsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-4xl md:text-5xl text-center mb-12">
          Dimensions Of Basketball Court
        </h2>
        <div className="grid md:grid-cols-3 items-center xl:h-[50vh]">
          {/* Left: Details */}
          <div className="bg-gray-100 md:col-span-1 rounded-xl p-6 shadow-md space-y-4 text-gray-800 text-lg h-max">
            <div>
              <span className="font-semibold">➤ Minimum Area:</span> 6742 Sq.Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Length:</span> 94 Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Width:</span> 50 Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Playing Area:</span> 4700 Sq.Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Three-point Arc:</span> 22 Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Centre Circle:</span> 12 Ft.
            </div>
            <div>
              <span className="font-semibold">➤ Free Throw Lane:</span> 16 Ft.
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full h-[35vh] xl:h-[50vh] md:col-span-2 relative rounded-xl overflow-hidden shadow-md bg-black">
            <Image
              src="/assets/images/dimmension/basketball.jpeg" // Rename your file to this or update the path
              alt="Tennis Court Dimensions"
              fill
              className="object-fill"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
const ProjectSection = () =>{
  return(
    <section id="project" className="flex flex-col gap-10 mx-5 xl:mx-10 py-10">
      <h2 className="font-heading text-4xl md:text-5xl text-center">
        Basketball Projects We have Worked on
      </h2>
      <div className="container grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 mx-auto">
        {ProjectsContent.map((project) => {
          if (project.tags.includes("basketball")) {
            return (
              <div
                className="flex flex-col gap-2"
                key={project.title}
              >
              <div className="h-[45vh] overflow-hidden rounded-lg">
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
    </section>
                    
  )
}
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
        <FAQ faqData={faqDataBasketball} />
      </div>
    </section>
  );
};

const page = () => {
    return (
        <>
        {/* <BasketballCourt /> */}
        <HeroSection />
        <DescriptionSection />
        <FlooringTypesSection />
        <CourtDimensionsSection />
        <ProjectSection />
        <FAQSection />
        </>
    );
};

export default page;
