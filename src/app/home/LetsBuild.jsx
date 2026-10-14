import Image from "next/image";
import CustomButton from "../components/Reusable_Components/CustomButton";

const points = [
  "Custom SaaS Application Development",
  "SaaS Platform & Software Development",
  "SaaS Development Consulting & Strategy",
];

const CheckIcon = () => (
  <svg
    className="h-5 w-5 shrink-0 text-[#92278f]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 13l5 5L20 6" />
  </svg>
);

export default function LetsBuild({
  title = "Let’s Build Your SaaS Product Together.",
  description = "Contact us and we’ll set up a video call to discuss your saas development requirements in detail.",
  items = points,
  buttonText = "Get in Touch",
  image = "/images/l1.webp",
}) {
  return (
    <section className="bg-white py-16 md:py-24">
     <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-[1.6fr_1fr]">

        {/* LEFT CONTENT */}
        <div>
          <h3 className="text-2xl font-extrabold leading-tight text-black md:text-3xl">
            {title}
          </h3>

          <p className="mt-8 max-w-[560px] text-lg leading-[2] text-gray-700 md:text-xl">
            {description}
          </p>

          <ul className="mt-8 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-base text-gray-600 md:text-lg"
              >
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <CustomButton>Get in Touch</CustomButton>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={image}
            alt="Video call illustration"
            width={600}
            height={600}
            className="h-auto w-full max-w-[400px]"
          />
        </div>

      </div>
    </section>
  );
}