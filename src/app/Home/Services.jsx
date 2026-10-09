"use client";

import { useState } from "react";

import {
  CloudCog,
  Smartphone,
  Globe,
  Palette,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    title: "SaaS Development",
    description:
      "Build scalable and secure SaaS applications designed to grow with your business.",
    icon: CloudCog,
  },
  {
    title: "Mobile App Development",
    description:
      "Create modern and user-friendly mobile applications for Android and iOS.",
    icon: Smartphone,
  },
  {
    title: "Website Development",
    description:
      "Develop responsive, fast, and professional websites for your business.",
    icon: Globe,
  },
  {
    title: "UI/UX & Graphic Design",
    description:
      "Design attractive and intuitive digital experiences that users love.",
    icon: Palette,
  },
  {
    title: "SEO & Digital Marketing",
    description:
      "Improve your online presence and reach the right audience.",
    icon: TrendingUp,
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const visibleServices = [
    services[(active - 1 + services.length) % services.length],
    services[active],
    services[(active + 1) % services.length],
  ];

  return (
    <section id="our-services" className="overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-28 text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold text-gray-900 md:text-5xl">
            All the SaaS Application Development Services You Need
          </h2>
        </div>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-16 md:grid-cols-3">

          {visibleServices.map((service, index) => {
            const isActive = index === 1;
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  relative rounded-[200px] px-12 pb-14 pt-20 transition-all duration-500
                  ${
                    isActive
                      ? "-translate-y-20 border-[6px] border-[#8b238e] bg-white"
                      : "translate-y-0 border-[6px] border-transparent bg-[#fef7e0]"
                  }
                `}
              >

                {/* Icon - Top Left */}
                <div
                  className={`
                    absolute left-10 top-0 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-500
                    ${
                      isActive
                        ? "bg-[#8b238e] text-white"
                        : "border-[5px] border-[#8b238e] bg-white text-black"
                    }
                  `}
                >
                  <Icon className="h-9 w-9" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="text-left">
                  <h3 className="mb-4 text-2xl font-bold text-[#1c1f7a] md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="line-clamp-3 text-lg leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* Carousel Dots */}
        <div className="mt-16 flex items-center justify-center gap-4">

          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              aria-label={`Show service ${index + 1}`}
              className={`
                relative flex items-center justify-center rounded-full transition-all duration-300
                ${
                  index === active
                    ? "h-9 w-9 bg-[#c88bd0]"
                    : "h-3 w-3 bg-[#8b238e]"
                }
              `}
            >
              {index === active && (
                <span className="h-3.5 w-3.5 rounded-full bg-[#c4286f]" />
              )}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
}