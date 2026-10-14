"use client";

import { useState } from "react";

const testimonials = [
  {
    text: "Perfect service, very talented team. Does everything with passion and commitment! Thanks Kamran for everything!",
    name: "XXL Lichtletters",
  },
  {
    text: "Great Company, 100% recommended for App development.",
    name: "Taiba institute saudi",
  },
  {
    text: "The team at Software Flux Solution have revolutionised my business. With their development team. Highly recommended!",
    name: "Nicholas Lightstone",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const testimonial = testimonials[active];

  return (
    <section className="bg-white py-12 overflow-hidden">

      {/* Testimonial Box */}
      <div className="w-full flex justify-center px-6">

        <div
          className="
            relative
            bg-[#fff8e3]
            w-[82%]
            h-[360px]
            mx-auto
            rounded-[180px]
            flex
            flex-col
            items-center
            justify-center
            px-10
            md:px-20
            pt-16
            pb-8
          "
        >

          {/* Quote Icon */}
          <div
            className="
              absolute
              -top-1
              left-1/2
              -translate-x-1/2
              w-[90px]
              h-[90px]
              rounded-full
              bg-[#92278f]
              flex
              items-center
              justify-center
            "
          >
            <span className="text-white text-5xl font-bold leading-none">
              “
            </span>
          </div>

          {/* Stars */}
          <div className="flex gap-3 mb-3 mt-4">

            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-orange-400 text-3xl"
              >
                ★
              </span>
            ))}

          </div>

          {/* Testimonial Text */}
          <p
  className="
    max-w-[950px]
    px-10
    md:px-16
    text-center
    text-xl
    md:text-3xl
    leading-[1.45]
    text-black
    mb-5
    mx-auto
  "
>
  {testimonial.text}
</p>

          {/* Client Name */}
          <h3 className="text-2xl md:text-3xl font-bold text-[#252b7c]">
            {testimonial.name}
          </h3>

        </div>

      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-4 mt-10">

        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Show testimonial ${index + 1}`}
            className={`
              rounded-full transition-all duration-300
              ${
                active === index
                  ? "w-10 h-10 bg-[#c88bd0] relative"
                  : "w-3.5 h-3.5 bg-[#92278f]"
              }
            `}
          >

            {active === index && (
              <span
                className="
                  absolute
                  w-3.5
                  h-3.5
                  bg-[#92278f]
                  rounded-full
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              ></span>
            )}

          </button>
        ))}

      </div>

    </section>
  );
}