"use client";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/studio", label: "Studio" },
    { href: "/artists", label: "Artists" },
    { href: "/gallery", label: "Gallery" },
    { href: "/bookings", label: "Bookings" },
    { href: "/testimonials", label: "Testimonials" },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-sky-50 text-neutral-700 shadow-md">
      <div className="max-w-[1200px] mx-auto flex flex-row md:flex-row items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Logo size={48} />

        {/* Desktop links */}
        <div className="hidden md:flex justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/contact">
            <Button variant="primary" size="md">Contact</Button>
          </Link>
        </div>

        {/* Burger / X button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          className="md:hidden focus:outline-none text-2xl"
        >
          {open ? <FaTimes className="text-yellow-400" /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-sky-50 backdrop-blur-md flex flex-col items-center gap-4 pb-4 z-40
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="hover:text-yellow-400 transition"
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" onClick={handleLinkClick}>
          <Button variant="primary" size="md">Contact</Button>
        </Link>
      </div>
    </nav>
  );
}