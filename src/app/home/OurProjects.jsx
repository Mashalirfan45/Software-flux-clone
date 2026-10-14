"use client";

import Carousel from "../components/Reusable_Components/Carousel";
import CustomButton from "../components/Reusable_Components/CustomButton";

const projects = [
  {
    image: "/images/p1.webp",
    title: "XXL Lichtletters | Custom CRM & CMS Platform with Integrated Booking System",
    date: "April 17, 2026",
  },
  {
    image: "/images/p2.webp",
    title: "Evenlyo SaaS Platform | Multi Vendor Event Rental CRM & CMS",
    date: "May 14, 2026",
  },
  {
    image: "/images/p3.webp",
    title: "Stek+ | Corporate Website with Admin Panel & Dynamic Content Management",
    date: "April 17, 2026",
  },
  {
    image: "/images/p4.webp",
    title: "SaaS Business Platform | Scalable Web Application Development",
    date: "March 20, 2026",
  },
];

export default function OurProjects() {
  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <Carousel
          items={projects}
          breakpoints={{ 0: 1, 768: 3 }}
          gap={40}
          autoPlay
          interval={4000}
          showDots
          renderItem={(project, index, { position, next }) => (
            <div>
              <div className="relative w-[80%]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-[380px] w-full rounded-[35px] object-cover"
                />

                {/* Arrow on the 3rd visible card */}
                {position === 2 && (
                  <button
                    onClick={next}
                    aria-label="Next projects"
                    className="group absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full border-[7px] border-[#92278f] bg-white transition hover:bg-[#92278f]"
                  >
                    <span className="text-4xl leading-none text-[#252b7c] group-hover:text-white">
                      ›
                    </span>
                  </button>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold leading-snug text-[#252b7c] md:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm font-bold text-gray-700 md:text-base">
                - {project.date}
              </p>
            </div>
          )}
        />

        <div className="mt-10 flex justify-center">
          <CustomButton>Get Us a review</CustomButton>
        </div>
      </div>
    </section>
  );
}