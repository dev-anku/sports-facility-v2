import Image from "next/image";
import React from "react";
import { ProjectsContent, sampleImages } from "@/public/constants";

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
        <h1 className="font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
          Our Projects
        </h1>
      </div>
    </header>
  );
};

const ProjectsSection = () => {
  return (
    <section className="my-8 mx-6 xl:mx-32 xl:my-12">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3">
        {ProjectsContent.map((project) => (
          <div className="flex flex-col gap-2" key={project.title}>
            <Image
              src={`https://placehold.co/400x500`}
              width={1920}
              height={1080}
              alt={project.title}
              className="object-cover"
            />
            <p className="font-text uppercase text-blue-400">{project.type}</p>
            <p className="font-text text-3xl font-medium uppercase">
              {project.title}
            </p>
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
