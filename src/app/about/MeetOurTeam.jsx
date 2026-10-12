"use client";

import { useState, useEffect } from "react";

const defaultMembers = [
  { name: "Kamran Qadeer", role: "CEO", image: "/images/CEO.webp" },
  { name: "Sinan lakhani", role: "Senior Project Manager", image: "/images/SPM.webp" },
  { name: "Sumara", role: "HR", image: "/images/hr.webp" },
  { name: "Sehrish Saleem", role: "SQA", image: "/images/SQA.webp" },
];

export default function MeetOurTeam({
  eyebrow = "MEET OUR TEAM",
  description = "Our saas development services team is made up of senior engineers, product managers, and designers, all passionate about building great SaaS products.",
  members = defaultMembers,
  intervalSeconds = 5, // har kitne seconds baad slide ho
}) {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  // Screen ke hisaab se kitne cards dikhein
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, intervalSeconds * 1000);
    return () => clearInterval(timer);
  }, [intervalSeconds]);

  // Loop ke liye pehle cards ki copy aakhir mein lagti hai
  const extended = [...members, ...members.slice(0, perView)];

  // Copy tak pahunchne ke baad bina animation ke pehle par wapas
  const handleTransitionEnd = () => {
    if (index >= members.length) {
      setAnimate(false);
      setIndex(0);
    }
  };

  return (
    <section className="overflow-hidden bg-white py-16">
      <div className="mx-auto max-w-[1300px] px-6">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="mb-4 block text-base font-extrabold tracking-[3px] text-[#8b238e]">
            {eyebrow}
          </span>
          <p className="mx-auto max-w-[850px] text-lg leading-[1.9] text-[#1c1f7a]">
            {description}
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className={`flex ${animate ? "transition-transform duration-700 ease-in-out" : ""}`}
            style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extended.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="shrink-0 px-4"
                style={{ flexBasis: `${100 / perView}%` }}
              >
                <div className="mx-auto w-[260px] pb-4">

                  {/* Photo */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-[260px] w-[260px] rounded-[40px] object-cover"
                  />

                  {/* Name aur role */}
                  <h3 className="mt-4 text-2xl font-bold text-[#1c1f7a]">
                    {member.name}
                  </h3>
                  <p className="text-base text-[#8b238e]">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}