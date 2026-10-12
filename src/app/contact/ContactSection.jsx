"use client";

import { useState } from "react";
import { Phone, MapPin, Mail, ChevronDown } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CustomButton from "../components/Reusable_Components/CustomButton";

const info = [
  {
    icon: Phone,
    title: "Phone No",
    lines: [
      { text: "+92(328)9777009", href: "tel:+923289777009" },
      { text: "+44(203)807-2184", href: "tel:+442038072184" },
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [
      {
        text: "Office 1, 1st floor Shahzaib Basti barrier wah cantt Pakistan 21, Wah Cantt, 47040, Pakistan",
        href: "https://www.google.com/maps/place/Software+Flux+Solution",
      },
    ],
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: [{ text: "kamran@softflux.co", href: "mailto:kamran@softflux.co" }],
  },
];

const services = [
  "SaaS Development",
  "Mobile App Development",
  "Website Development",
  "UIUX & Graphic Design",
  "SEO & Digital Marketing",
];

const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/software-flux-solution",
    icon: (
      <path
        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69V21h-4V9.5z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Softflux-61573041870441/",
    icon: (
      <path
        d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z"
        fill="currentColor"
        stroke="none"
      />
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/softwarefluxsolution",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

const fieldClass =
  "w-full rounded-full border-2 border-gray-200 bg-white px-8 py-4 text-base text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-[#8b238e]";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: services[0], message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white pt-24">

      {/* INFO CARDS (cream section ke upar chadhe hue) */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-6">
        <div className="grid items-start gap-8 md:grid-cols-3">
          {info.map(({ icon: Icon, title, lines }, i) => (
            <div
              key={title}
              className={`rounded-2xl bg-white px-6 pb-8 pt-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${
                i === 1 ? "md:-translate-y-10" : ""
              }`}
            >
              <div className="mx-auto mb-5 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#8b238e] text-white">
                <Icon className="h-10 w-10" strokeWidth={1.8} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-[#1c1f7a]">{title}</h3>
              {lines.map((l) => (
                <a
                  key={l.text}
                  href={l.href}
                  className="block py-0.5 text-base leading-relaxed text-gray-600 transition hover:text-[#8b238e]"
                >
                  {l.text}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* CREAM SECTION */}
      <div
        id="form"
        className="-mt-24 scroll-mt-24 rounded-tl-[90px] bg-[#fdf6dc] pb-24 pt-44"
      >
        <div className="mx-auto grid max-w-[1100px] gap-14 px-6 lg:grid-cols-2">

          {/* LEFT: HEADING + FIVERR CARD */}
          <div>
            <h2 className="text-5xl font-extrabold leading-tight text-[#1c1f7a] md:text-6xl">
              Ready to Start?
            </h2>
            <p className="mt-6 max-w-[430px] text-lg leading-[1.8] text-gray-600">
              Whether you need a full saas development services team, saas
              development consulting, or just want to explore your options,
              we’re here to help. Tell us about your project and we’ll get back
              to you within 24 hours.
            </p>

            {/* FIVERR GIG CARD */}
            <div className="mt-10 max-w-[500px] overflow-hidden rounded-lg border border-gray-200 bg-white">
              <img
                src="/images/ceo2.jpg"
                alt="We Develop Your Desire"
                className="h-auto w-full object-cover"
              />

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1dbf73] font-bold text-white">
                      S
                    </span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">Softflux</p>
                      <p className="text-xs text-gray-500">
                        <span className="text-orange-400">★</span> 4.9 (45) • Level 2
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
                    1 day
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold leading-snug text-gray-900">
                  I will develop custom SaaS CRM ERP web and mobile applications
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "React Native"].map((t) => (
                    <span key={t} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://www.fiverr.com/fluxdevelopm007/develop-web-site-on-your-desire"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded bg-[#1dbf73] py-3 text-center text-sm font-bold text-white transition hover:bg-[#19a463]"
                  >
                    View Gig
                  </a>
                  <a
                    href="https://www.fiverr.com/fluxdevelopm007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-[#1dbf73] py-3 text-center text-sm font-bold text-[#1dbf73] transition hover:bg-[#1dbf73]/10"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={fieldClass}
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className={fieldClass}
              />

              {/* PHONE (country dropdown ke saath) */}
              <div className="flex w-full max-w-[420px] items-center rounded-full border-2 border-gray-200 bg-white px-6 py-3 transition focus-within:border-[#8b238e] [&_.PhoneInputInput]:ml-3 [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:border-0 [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputInput]:text-base [&_.PhoneInputInput]:text-gray-700 [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:placeholder:text-gray-500">
                <PhoneInput
                  international
                  defaultCountry="PK"
                  placeholder="Phone Number"
                  value={form.phone || undefined}
                  onChange={(value) =>
                    setForm((f) => ({ ...f, phone: value || "" }))
                  }
                  className="w-full"
                />
              </div>

              {/* SERVICE DROPDOWN */}
              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className={`${fieldClass} appearance-none pr-14`}
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Project Brief"
                required
                rows={5}
                className="w-full rounded-[35px] border-2 border-gray-200 bg-white px-8 py-5 text-base text-gray-700 outline-none transition placeholder:text-gray-500 focus:border-[#8b238e]"
              />

              <div className="pt-2">
                <CustomButton type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </CustomButton>
              </div>

              {status === "success" && (
                <p className="font-semibold text-green-600">
                  Thank you! We’ll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="font-semibold text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* SOCIAL NETWORKING */}
            <h3 className="mb-5 mt-14 text-lg font-extrabold uppercase tracking-wide text-black">
              Social Networking:
            </h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white text-[#1c1f7a] transition hover:bg-[#8b238e] hover:text-white"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}