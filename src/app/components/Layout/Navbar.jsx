
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import CustomButton from "../Reusable_Components/CustomButton";

const serviceLinks = [
  { label: "SaaS Development", href: "/service/saas-development" },
  { label: "Mobile App Development", href: "/service/mobile-app-development" },
  { label: "Website Development", href: "/service/website-development" },
  { label: "UI/UX Design", href: "/service/ui-ux-design" },
  { label: "Graphic Design", href: "/service/graphic-design" },
  {
    label: "SEO & Digital Marketing",
    href: "/service/seo-digital-marketing",
  },
];

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/service", children: serviceLinks },
  { label: "Our Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#520a5c] via-[#3f0d44] to-[#27121f]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="Software Flux Solutions home">
          <img
            src="/images/logo.png.svg"
            alt="Software Flux Solutions"
            className="h-auto w-56"
          />
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-8 text-lg font-medium text-white md:flex">
          {links.map((link) =>
            link.children ? (
              <li key={link.label} className="group relative">
                <Link
                  href={link.href}
                  aria-haspopup="menu"
                  className="flex items-center gap-1.5 transition group-hover:text-[#d58cff] group-focus-within:text-[#d58cff]"
                >
                  {link.label}
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="relative w-[270px] rounded-lg bg-white py-3 shadow-xl">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-white" />
                    <ul role="menu">
                      {link.children.map((service) => (
                        <li key={service.href} role="none">
                          <Link
                            href={service.href}
                            role="menuitem"
                            className="block px-5 py-3 text-[15px] font-semibold text-[#1a1a3e] transition hover:bg-[#f6ecfa] hover:text-[#8a2a9b]"
                          >
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition hover:text-[#d58cff]"
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden md:block">
          <CustomButton>Get Started</CustomButton>
        </div>

        {/* Mobile menu button */}
        <IconButton
          className="md:!hidden"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          sx={{ color: "white" }}
        >
          <MenuIcon />
        </IconButton>
      </nav>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={open} onClose={closeDrawer}>
        <List sx={{ width: 270 }}>
          {links.map((link) =>
            link.children ? (
              <div key={link.label}>
                <ListItemButton
                  onClick={() => setServicesOpen((value) => !value)}
                  aria-expanded={servicesOpen}
                >
                  <ListItemText primary={link.label} />
                  {servicesOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>

                <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemButton
                      component={Link}
                      href={link.href}
                      onClick={closeDrawer}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText
                        primary="All Services"
                        primaryTypographyProps={{ fontSize: 14 }}
                      />
                    </ListItemButton>

                    {link.children.map((service) => (
                      <ListItemButton
                        key={service.href}
                        component={Link}
                        href={service.href}
                        onClick={closeDrawer}
                        sx={{ pl: 4 }}
                      >
                        <ListItemText
                          primary={service.label}
                          primaryTypographyProps={{ fontSize: 14 }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton
                key={link.label}
                component={Link}
                href={link.href}
                onClick={closeDrawer}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            )
          )}
        </List>

        <div className="px-4 py-3">
          <Link href="/contact" onClick={closeDrawer}>
            <CustomButton>Get Started</CustomButton>
          </Link>
        </div>
      </Drawer>
    </header>
  );
}
