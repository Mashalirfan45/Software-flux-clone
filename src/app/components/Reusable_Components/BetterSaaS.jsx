"use client";

import CustomButton from "./CustomButton";

export default function BetterSaaS({
  topHeading = "Delivering SaaS Application\nDevelopment Solutions Across Industries",
  showTopHeading = true,
  title = "We’re Here to Build\nBetter SaaS Products.",
  text = "Software Flux Solution is a full-service saas app development company that turns complex ideas into scalable, revenue-generating SaaS products. Our saas software development company has worked with startups, SMEs, and enterprises across the globe – delivering custom saas development solutions that are fast, secure, and built to last.",
  image = "/images/pic.webp",
  imageAlt = "SaaS Application Development",
  imageLeft = false, // true = image left, content right
  buttonText, // khali ho to button nahi dikhega
  buttonHref = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-white py-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-left-top bg-no-repeat opacity-90"
        style={{ backgroundImage: "url('/images/background01.png')" }}
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-[1400px] px-6">

        {/* TOP HEADING (optional) */}
        {showTopHeading && (
          <div className="mb-20 text-center">
            <h3 className="mx-auto max-w-[1000px] whitespace-pre-line text-4xl font-bold leading-tight text-[#252b7c] md:text-5xl lg:text-4xl">
              {topHeading}
            </h3>
          </div>
        )}

        {/* CONTENT */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">

          {/* TEXT */}
          <div className={imageLeft ? "md:order-2" : "md:order-1"}>
           <h3 className="mb-8 whitespace-pre-line text-4xl font-bold">
              {title}
            </h3>

            <p className="text-lg leading-[1.9] text-gray-500 md:text-xl">
              {text}
            </p>

            {/* BUTTON (sirf tab dikhega jab buttonText diya ho) */}
            {buttonText && (
              <div className="mt-10">
                <CustomButton href={buttonHref}>{buttonText}</CustomButton>
              </div>
            )}
          </div>

          {/* IMAGE */}
          <div
            className={`flex justify-center ${
              imageLeft
                ? "md:order-1 md:justify-start"
                : "md:order-2 md:justify-end"
            }`}
          >
            <div
              className={`w-full max-w-[800px] overflow-hidden rounded-[18px] ${
                imageLeft ? "animate-slide-in-left" : "animate-slide-in-right"
              }`}
            >
              <img
                src={image}
                alt={imageAlt}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Slide Animations */}
      <style jsx>{`
        .animate-slide-in-right {
          animation: slideInRight 1.2s ease-out forwards;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1.2s ease-out forwards;
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-150px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}