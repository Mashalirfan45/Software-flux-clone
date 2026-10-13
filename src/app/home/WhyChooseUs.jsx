"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Custom SaaS Development",
    text: "We design and build scalable, secure SaaS products from scratch, covering architecture, multi-tenant setup, billing and dashboards, so you can launch faster.",
  },
  {
    title: "Mobile App Development",
    text: "We create fast, user-friendly iOS and Android apps that connect smoothly with your SaaS platform and keep your users engaged.",
  },
  {
    title: "Website Development",
    text: "We build modern, responsive and SEO-friendly websites that load quickly and turn visitors into customers.",
  },
  {
    title: "SEO & Digital Marketing",
    text: "We grow your reach with search optimization, content and paid campaigns that bring in quality traffic and leads.",
  },
  {
    title: "UI/UX & Graphic design",
    text: "We grow your reach with search optimization, content and paid campaigns that bring in quality traffic and leads.",
  },
];

const ArrowIcon = ({ open }) => (
  <svg
    className={`h-7 w-7 shrink-0 transition-transform duration-300 ${
      open ? "rotate-90" : "rotate-0"
    }`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Full-width white wrapper: dark mode me bhi background white rahega
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 block text-lg font-bold tracking-[3px] text-[#9b2090]">
            WHY CHOOSE US
          </span>
          <h3 className="text-[28px] font-extrabold leading-tight text-[#1c1f7a] sm:text-4xl lg:text-4xl">
            We Provide Complete, End-to-End
            <br className="hidden sm:block" />
            SaaS Development Services
          </h3>
        </div>

        {/* Content */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ul>
            {services.map((service, index) => {
              const isOpen = openIndex === index;

              return (
                <li key={service.title} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between bg-transparent py-7 text-left text-2xl font-bold transition-colors duration-200 hover:text-[#9b2090] md:py-9 lg:text-[32px] ${
                      isOpen ? "text-[#9b2090]" : "text-black"
                    }`}
                  >
                    <span>{service.title}</span>
                    <ArrowIcon open={isOpen} />
                  </button>

                  {/* Smooth open/close */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pr-10 text-base leading-relaxed text-gray-600 md:text-lg">
                        {service.text}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="flex justify-center">
            <Image
              src="/images/C1.webp"
              alt="Hands framing a question mark"
              width={700}
              height={560}
              className="h-auto max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}