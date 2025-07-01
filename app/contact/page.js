import { contactData, images, sampleImages } from "@/public/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
    title: "Contact Us | Sports Facility, Lucknow, Uttar Pradesh",
    description:
        "Contact details of Sports Facility, known for sports flooring and construction, established in Lucknow, Uttar Pradesh",
};

const HeroSection = () => {
  return (
    <header className="flex flex-col xl:mx-12">
      <div
        className="flex h-[55vh] items-center justify-center overflow-hidden object-fill xl:h-[60vh]"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[8]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="font-heading text-5xl font-bold uppercase text-white xl:text-7xl">
          Contact Us
        </h1>
      </div>
    </header>
  );
};

const ContactSection = () => {
  return (
    <section className="mx-6 my-16 flex flex-col justify-center gap-8 max-sm:text-center xl:mx-auto xl:w-4/6 xl:flex-row">
      <div className="xl:w-2/5">
        <h1 className="mt-8 font-text text-4xl font-bold uppercase">
          Get In Touch
        </h1>
        <p className="mt-4 font-text text-lg text-gray-500">
          Have questions or need expert advice on sports surfaces? We&apos;re
          here to help! Reach out to us for inquiries, project consultations, or
          collaborations. Let&apos;s build the perfect sports facility together
        </p>
        <div className="mt-3 flex gap-4 justify-center xl:justify-start">
          <a href="tel:+918009483311" className="h-8 w-8">
            <Image
              src="/assets/icons/call.png"
              width={200}
              height={200}
              alt="phone"
              className="h-full w-full object-cover"
            />
          </a>
          <a href="mailto:ridhamteam125@gmail.com" className="h-8 w-8">
            <Image
              src="/assets/icons/email.png"
              width={200}
              height={200}
              alt="mail"
              className="h-full w-full object-cover"
            />
          </a>
          <a
            href="https://www.instagram.com/sports_facility.in/"
            className="h-8 w-8"
          >
            <Image
              src="/assets/icons/instagram.png"
              width={200}
              height={200}
              alt="instagram"
              className="h-full w-full object-cover"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-gray-100 p-4 py-8 xl:w-3/5">
        <h1 className="font-text text-3xl font-bold uppercase">
          Contact Information
        </h1>
        <div className="flex flex-col gap-2">
          {contactData.map((contact) => (
            <p className="font-text leading-normal" key={contact.label}>
              <strong>{contact.label}</strong>: {contact.value}
            </p>
          ))}
        </div>
        <div className="sm:col-span-2 xl:col-span-1 xl:row-span-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.303644233732!2d80.9620219385119!3d26.884215396936668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957dff6c665e1%3A0xd8a2a219e075a97f!2sRidham%20Sports!5e0!3m2!1sen!2sin!4v1737020159505!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <HeroSection />
      <ContactSection />
    </>
  );
};

export default page;
