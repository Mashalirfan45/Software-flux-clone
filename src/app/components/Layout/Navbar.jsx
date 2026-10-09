"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import CustomButton from "../Reusable_Components/CustomButton";
const links = [
  "Home",
  "About US",
  "Our Services",
  "Our Work",
  "Blog",
  "Contact Us",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#520a5c] via-[#3f0d44] to-[#27121f]">

      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <img
            src="/images/logo.png.svg"
            alt="Software Flux Solutions"
            className="w-56 h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 font-medium text-white text-lg">

          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="hover:text-gray-200 transition"
              >
                {l}
              </a>
            </li>
          ))}

        </ul>

        {/* Get Started */}
        <div className="hidden md:block">
          <CustomButton>
            Get Started
          </CustomButton>
        </div>

        {/* Mobile Menu */}
        <IconButton
          className="md:!hidden"
          onClick={() => setOpen(true)}
          sx={{ color: "white" }}
        >
          <MenuIcon />
        </IconButton>

      </nav>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List sx={{ width: 250 }}>

          {links.map((l) => (
            <ListItemButton
              key={l}
              component="a"
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={l} />
            </ListItemButton>
          ))}

        </List>
      </Drawer>

    </header>
  );
}

