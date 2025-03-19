import Link from 'next/link';
import React from 'react'
import Button from './ui/Button';
import Image from 'next/image';
import { igImages } from '@/public/constants';

const InstagramSection = () => {
  return (
    <section className="xl:mt-20 xl:px-20 p-8 flex flex-col gap-4">
      <div className="flex flex-col xl:flex-row justify-between mr-8">
        <h1 className="font-heading text-6xl uppercase">Instagram</h1>
        <Link
          target="_blank"
          href="https://www.instagram.com/sports_facility.in"
        >
          <Button label={"Follow"} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {igImages.map((image, index) => (
          <div key={index} className="xl:h-[50vh] relative overflow-hidden">
            <Link
              target="_blank"
              href="https://www.instagram.com/sports_facility.in"
            >
              <Image
                src={image}
                alt={image}
                width={1920}
                height={1080}
                className="object-cover"
              />
              <div className="absolute top-0 z-10 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                View On Instagram
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection