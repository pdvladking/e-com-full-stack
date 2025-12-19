"use client";
import { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/trends", label: "Trends" },
    { href: "/shop", label: "Shop" },
    { href: "/crafted-stories", label: "Crafted Stories" },
    { href: "/contact", label: "Contact" },
    { href: "/about-us", label: "About Us" },
  ];

  const handleLinkClick = () => setOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-neutral-50 text-neutral-700 shadow-md">
      <div className="max-w-[1200px] mx-auto flex flex-row items-center justify-between px-6 py-4">

        {/* Logo */}
        <Logo size={48} />

        {/* Desktop navlinks */}
        <div className="hidden md:flex justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex gap-6 items-center">
          <FaSearch
            aria-label="Search"
            className="text-xl cursor-pointer hover:text-neutral-900 transition"
          />
          <FaShoppingCart
            aria-label="Shopping cart"
            className="text-xl cursor-pointer hover:text-neutral-900 transition"
          />
          <Link href="/login" aria-label="Login">
            <FaUser className="text-xl cursor-pointer hover:text-neutral-900 transition" />
          </Link>

          {/* Burger / X button (mobile only) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            className="md:hidden focus:outline-none text-2xl"
          >
            {open ? <FaTimes className="text-gray-700" /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-neutral-50 backdrop-blur-md flex flex-col items-center gap-4 pb-4 z-40
        transition-all duration-300 ease-in-out
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="hover:text-neutral-900 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}