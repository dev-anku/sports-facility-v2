"use client";
import "aos/dist/aos.css";
import AOS from "aos";

import BackgroundImageSlider from "@/components/BackgroundImageSlider";
import React, { useEffect, useState } from "react";
import {
  images,
  sampleImages,
  servicesContent,
  productsContent,
  sportsContent,
  aboutImages,
  serviceImages,
  productImages,
  galleryImages,
  igImages,
} from "@/public/constants";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import GallerySlider from "@/components/GallerySlider";
import InstagramSection from "@/components/InstagramSection";
import { FAQ } from "@/components/FAQ";
import { faqData } from "@/public/constants"

const HeroSection = () => {
  return (
    <header className="mx-6 flex flex-col xl:mx-12">
      <div className="h-[55vh] overflow-hidden object-fill xl:h-[60vh]">
        <Image
          src="/assets/images/hero.jpg"
          width={1920}
          height={1080}
          alt="hero"
          className="object-[50% 50%] center object-cover max-xl:h-full"
        />
      </div>
      <div className="my-6 flex flex-col gap-1 xl:items-center">
        <h1 className="font-heading text-5xl font-bold uppercase xl:text-7xl">
          Elevate Your Game
        </h1>
        <p className="font-text font-medium tracking-wide">
          Premium and Precise Sports Surfaces for every court.
        </p>
        <div className="mt-5 flex gap-2">
          <button className="rounded-full bg-black px-4 py-2 font-semibold text-white hover:bg-gray-500">
            <Link href="/projects">Our Projects</Link>
          </button>
          <button className="rounded-full bg-black px-4 py-2 font-semibold text-white hover:bg-gray-500">
            <Link href="/contact">Contact Us</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="flex flex-col xl:mt-20 xl:flex-row">
      <div
        data-aos="fade-right"
        className="relative h-96 overflow-hidden xl:h-auto xl:w-3/5"
      >
        <BackgroundImageSlider images={aboutImages} />
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col justify-between gap-6 px-8 py-16 sm:px-20 xl:w-2/5"
      >
        <h1 className="font-heading text-6xl uppercase">About Us</h1>
        <p className="font-text leading-normal">
          At <strong>Sports Facility</strong> we are dedicated to building
          high-quality sports facilities that inspire athletes and communities.
          With years of expertise in sports construction, we specialize in
          designing and constructing top-tier courts, fields, and recreational
          spaces tailored to meet the needs of professionals, schools, and
          recreational players alike.
        </p>
        <p className="font-text leading-normal">
          Our team combines innovation, precision, and industry-leading
          materials to deliver durable, high-performance sports infrastructure.
          Whether it&apos;s pickleball courts, tennis courts, basketball courts,
          running tracks, or multi-sport facilities, we bring your vision to
          life with superior craftsmanship and attention to detail.
        </p>
        <p className="font-text leading-normal">
          Let’s build something extraordinary together. Contact us today to
          start your project!
        </p>
        <Link target="_blank" href="/about">
          <Button label={"Know More"} />
        </Link>
      </div>
    </section>
  );
};

const SportsSection = () => {
  return (
    <section id="sports" className="mb-16 flex flex-col gap-4 xl:mt-16">
      <h1 className="px-8 font-heading text-5xl uppercase">Flooring Types</h1>
      <div className="scroll relative h-[400px] max-xl:overflow-x-scroll xl:overflow-x-hidden xl:hover:overflow-x-scroll">
        <div className="flex w-fit gap-4 px-8">
          {sportsContent.map((sport, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={(index + 1) * 200}
              key={sport.title}
              className="relative h-96 w-80 xl:w-[33vw]"
            >
              <Image
                src={sport.image}
                width={1920}
                height={1080}
                alt={sport.title}
                className="h-full object-cover"
              />
              <span className="absolute bottom-8 left-8 rounded-full bg-white px-4 py-2 font-text font-medium">
                {sport.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <section id="services" className="flex flex-col xl:mt-20 xl:flex-row">
      <div
        data-aos="fade-left"
        className="relative flex h-[650px] overflow-hidden xl:h-auto xl:w-[55%]"
      >
        <BackgroundImageSlider images={productImages} overlay={true} />
        <div className="flex flex-col gap-8 px-8 pt-16 text-white sm:px-20 sm:py-20 xl:items-start">
          <h1 className="font-heading text-6xl uppercase">Products</h1>
          <p className="font-text leading-relaxed xl:w-[85%]">
            At Ridham Enterprises, we offer a range of premium sports flooring
            solutions tailored to meet your needs. From high-performance
            synthetic courts to durable EPDM and wooden surfaces, our products
            are trusted by schools, stadiums, and sports facilities across the
            region.
          </p>
          <Link target="_blank" href="/services">
            <Button label={"See More"} light={true} />
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="flex flex-col gap-8 px-8 py-16 sm:px-20 sm:py-20 xl:w-[45%]"
      >
        {productsContent.map((product) => (
          <div key={product.title} className="flex flex-col gap-4">
            <h1 className="flex gap-4 font-heading text-4xl font-light">
              <span className="border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>
              {product.title}
            </h1>
            <p className="font-text font-light leading-normal">
              {product.description}
            </p>
          </div>
        ))}
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
        <FAQ faqData={faqData} />
      </div>
    </section>
  );
};


const ServicesSection = () => {
  return (
    <section
      id="services"
      className="flex flex-col xl:mt-20 xl:flex-row-reverse"
    >
      <div
        data-aos="fade-right"
        className="relative flex h-[650px] overflow-hidden xl:h-auto xl:w-[55%]"
      >
        <BackgroundImageSlider images={serviceImages} overlay={true} />
        <div className="flex flex-col gap-8 px-8 pt-16 text-white sm:px-20 sm:py-20 xl:items-start">
          <h1 className="font-heading text-6xl uppercase">Services</h1>
          <p className="font-text leading-relaxed xl:w-[85%]">
            We provide professional court installation, resurfacing, and
            maintenance services to ensure your sports facility remains in top
            condition, delivering a safe and high-performance environment for
            athletes year-round.
          </p>
          <Link target="_blank" href="/services">
            <Button label={"See More"} light={true} />
          </Link>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="flex flex-col gap-8 px-8 py-16 sm:px-20 sm:py-20 xl:w-[45%]"
      >
        {servicesContent.map((service) => (
          <div key={service.title} className="flex flex-col gap-4">
            <h1 className="flex gap-4 font-heading text-4xl font-light">
              <span className="border-b-[5px] border-l-[10px] border-t-[5px] border-black border-b-transparent border-t-transparent"></span>
              {service.title}
            </h1>
            <p className="font-text font-light leading-normal">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) =>
        (prevIndex - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  return (
    <section
      id="gallery"
      className="flex max-h-[80vh] flex-col overflow-hidden xl:mt-20 xl:flex-row-reverse"
    >
      <div
        data-aos="fade-left"
        className="bg-background-dark flex flex-col justify-between gap-8 px-8 pb-16 sm:px-20 xl:w-2/5 xl:pt-16"
      >
        <h1 className="font-heading text-6xl font-semibold uppercase">
          Gallery
        </h1>
        <div className="flex flex-col gap-2">
          <p className="font-text text-xl leading-relaxed">
            &quot;Explore the highlights of our facilities through our gallery –
            a showcase of premium sports surfaces and unforgettable
            moments.&quot;
          </p>
          <Link target="_blank" href="/projects">
            <Button label={"Explore Our Projects"} />
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-gray-300 p-2 text-2xl text-gray-700"
            onClick={handlePrev}
          >
            ⟵
          </button>
          <button
            className="rounded-full bg-gray-300 p-2 text-2xl text-gray-700"
            onClick={handleNext}
          >
            ⟶
          </button>
        </div>
      </div>
      <div data-aos="fade-right" className="xl:w-3/5">
        <GallerySlider images={galleryImages} index={index} />
      </div>
    </section>
  );
};

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SportsSection />
      <ProductsSection />
      <ServicesSection />
      <InstagramSection />
      <Gallery />
      <FAQSection />
    </>
  );
};

export default Page;
