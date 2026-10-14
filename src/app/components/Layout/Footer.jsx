import Image from "next/image";
import Link from "next/link";

const services = [
  { label: "SaaS Development", href: "/service/saas-development" },
  { label: "Mobile App Development", href: "/service/mobile-app-development" },
  { label: "Website Development", href: "/service/website-development" },
  { label: "UI/UX ", href: "/service/ui-ux-design" },
  { label: " Graphic Design", href: "/service/graphic-design" },
  { label: "SEO & Digital Marketing", href: "/service/seo-digital-marketing" },
];

const usefulLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" fill="currentColor" stroke="none" />
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3V9.5zm7 0h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4 0 4.74 2.63 4.74 6.05V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.69V21h-4V9.5z" fill="currentColor" stroke="none" />
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

const PinIcon = () => (
  <svg className="mt-1 h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

export default function Footer({
  logo = "/images/logo.png.svg", // apne logo ka path (Navbar wala logo)
  emails = ["kamran@softflux.co", "hr@softflux.co"],
  address = "Office 1, 1st floor Shahzaib Basti barrier wah cantt Pakistan 21, Wah Cantt, 47040, Pakistan",
  phones = ["+92(328)9777009", "+442038072184"],
  companyName = "Software Flux Solution",
}) {
  return (
    <footer className="bg-[#2e1848] text-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-8 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.6fr_1fr_1fr]">

          {/* COLUMN 1: LOGO + CONTACT */}
          <div>
            <Image
              src={logo}
              alt={companyName}
              width={360}
              height={70}
              className="h-auto w-[300px] max-w-full"
            />

            <p className="mt-8 text-xl">Drop us an email</p>
            <div className="mt-1 space-y-4">
              {emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-xl font-bold hover:text-[#c88bd0]"
                >
                  {email}
                </a>
              ))}
            </div>

            <div className="mt-8 flex gap-4 text-xl leading-[1.9]">
              <PinIcon />
              <p className="max-w-[600px]">{address}</p>
            </div>

            <div className="mt-4 space-y-2">
              {phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-3 text-xl hover:text-[#c88bd0]"
                >
                  <PhoneIcon />
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: WHAT WE DO */}
          <div>
            <h3 className="text-3xl font-extrabold md:text-4xl">What We Do</h3>
            <span className="mt-3 block h-[5px] w-[86px] bg-white" />

            <ul className="mt-10 space-y-6">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="pl-4 text-lg text-gray-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: USEFUL LINKS + SOCIALS */}
          <div>
            <h3 className="text-3xl font-extrabold md:text-4xl">Useful Links</h3>
            <span className="mt-3 block h-[5px] w-[86px] bg-white" />

            <ul className="mt-10 space-y-6">
              {usefulLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="pl-4 text-lg text-gray-200 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-[84px] w-[84px] items-center justify-center rounded-full border border-white/80 transition hover:bg-white hover:text-[#2e1848]"
                >
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-12 text-center text-lg">
          © {new Date().getFullYear()}.{" "}
          <span className="font-bold">{companyName}</span>
        </p>
      </div>
    </footer>
  );
}