import Image from "next/image";
import React from "react";
import { images, ProjectsContent, sampleImages } from "@/public/constants";

export const metadata = {
    title: "Our Projects | Sports Facility, Lucknow, Uttar Pradesh",
    description:
        "Hardworked Projects Completed by Sports Facility, known for sports flooring and construction, established in Lucknow, Uttar Pradesh",
};

const HeroSection = () => {
  return (
    <header className="flex flex-col xl:mx-12">
      <div
        className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[7]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
          Our Projects
        </h1>
      </div>
    </header>
  );
};

const ProjectsSection = () => {
  return (
    <section className="mx-6 my-8 xl:mx-32 xl:my-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {ProjectsContent.map((project) => (
          <div className="flex flex-col gap-2" key={project.title}>
            <div className="h-[50vh] overflow-hidden">
              <Image
                src={project.image}
                width={1920}
                height={1080}
                alt={project.title}
                className="object-cover h-full"
              />
            </div>
            <h2 className="font-text uppercase text-blue-400">{project.type}</h2>
            <h1 className="font-text text-2xl font-medium uppercase">
              {project.title}
            </h1>
            <p className="font-text text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
    </>
  );
};

export default page;
