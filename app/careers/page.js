// pages/careers.js
// "use client";
import Head from "next/head";
import Link from "next/link";

const HeroSection = () => {
    return(
        <section className="bg-gradient-to-r from-[#153576] via-[#153576] to-[#213e58] text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold font-montserrat tracking-tight mb-2">
            Careers at Sports Facility
          </h1>
          <p className="text-lg font-medium">
            Join a passionate team shaping the next generation of sports infrastructure across India!
          </p>
        </div>
      </section>
    )
}

const OpeningsCard = ({ title, location, experience, type, description, applyLink }) => {
    const buttonText = "Opening Soon!"
    return(
        <div className="bg-white rounded-lg shadow-lg p-7 flex flex-col min-h-[260px]">
              <h3 className="text-xl font-semibold text-[#1e369e] mb-3">{title}</h3>
              <ul className="list-disc list-inside mb-2 text-sm text-[#213e58]">
                <li>{location}</li>
                <li>{experience}</li>
                <li>{type}</li>
              </ul>
              <p className="flex-grow text-gray-700 text-sm mb-4">
                {description}
              </p>
              <a
                href={applyLink}
                className={`inline-block mt-auto font-bold py-2 px-6 rounded shadow transition-colors
                    ${buttonText === "Opening Soon!" 
                        ? "bg-gray-400 cursor-not-allowed pointer-events-none" 
                        : "bg-[#1e369e] hover:bg-[#2f63c7] text-white"}
                    `}              
                >
                {buttonText}
              </a>
        </div>
    )
}

const OpeningsSection = () => {
    return(
        <section className="bg-[#f6fafd] py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-[#153576] mb-8">
            Current Openings
          </h2>
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            < OpeningsCard 
             title="Data Entry Associate" 
             location="Location: Lucknow" 
             experience="Experience: 0-1 year" 
             type="Type: Full-time" 
             description="Responsible for generating leads, client meetings, and partnerships."
             applyLink="mailto:careers@sports-facility.in?subject=Business Development Application"
            />
            <OpeningsCard 
             title="Blog Writer" 
             location="Location: Lucknow" 
             experience="Experience: 0-1 year" 
             type="Type: Full-time" 
             description="Responsible for generating leads, client meetings, and partnerships."
             applyLink="mailto:careers@sports-facility.in?subject=Business Development Application"
            />
            {/* Add more job cards as needed */}
          </div>
        </div>
      </section>
    )
}

const WorkWithUsSection = () => {
    return(
         <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-[#153576] mb-4">
            Why Work With Us?
          </h2>
          <ul className="list-disc list-inside text-[#213e58] space-y-1 pl-4">
            <li>Dynamic & growing sports infrastructure industry</li>
            <li>Supportive, collaborative team culture</li>
            <li>Opportunities for career growth and training</li>
            <li>Competitive salary and benefits</li>
          </ul>
        </div>
      </section>
    )
}

const ContactSection = () => {
     return(
        <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-montserrat text-[#153576] mb-2">
            Didn’t find a role for you?
          </h2>
          <p className="text-[#213e58]">
            We’re always looking for talented people. Email your CV and introduction to&nbsp;
            <a
              href="mailto:careers@sports-facility.in"
              className="text-[#1e369e] underline hover:text-[#2f63c7]"
            >
              careers@sports-facility.in
            </a>.
          </p>
        </div>
      </section>
     )
}
export default function Careers() {
    
  return (
    <>
        <HeroSection />
        <OpeningsSection />
        <WorkWithUsSection />
    </>
  );
}

