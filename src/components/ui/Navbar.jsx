"use client";
import { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes, FaSearch, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import CartBadge from "@/components/cart/CartBadge"; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { user, logout } = useAuth();

  const links = [
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
            <Link key={link.href} href={link.href} className="hover:text-neutral-900 transition">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="flex gap-6 items-center relative">
          <FaSearch className="text-xl cursor-pointer hover:text-neutral-900 transition" />
          
          {/* CartBadge  */}
          <CartBadge />

          {/* Auth via FaUser icon */}
          <div className="relative">
            <FaUser
              className="text-xl cursor-pointer hover:text-neutral-900 transition"
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md flex flex-col">
                {!user && (
                  <>
                    <Link href="/login" className="px-4 py-2 hover:bg-neutral-100">Login</Link>
                    <Link href="/register" className="px-4 py-2 hover:bg-neutral-100">Register</Link>
                  </>
                )}
                {user?.role === "user" && (
                  <>
                    <Link href="/user/profile" className="px-4 py-2 hover:bg-neutral-100">Profile</Link>
                    <Link href="/user/orders" className="px-4 py-2 hover:bg-neutral-100">Orders</Link>
                    <button onClick={logout} className="px-4 py-2 text-left hover:bg-neutral-100">Logout</button>
                  </>
                )}
                {user?.role === "admin" && (
                  <>
                    <Link href="/admin/products" className="px-4 py-2 hover:bg-neutral-100">Dashboard</Link>
                    <button onClick={logout} className="px-4 py-2 text-left hover:bg-neutral-100">Logout</button>
                  </>
                )}
              </div>
            )}
          </div>

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

        {/* Auth dropdown for mobile */}
        <div className="flex flex-col items-center gap-2 mt-2">
          {!user && (
            <>
              <Link href="/login" onClick={handleLinkClick} className="hover:text-neutral-900 transition">Login</Link>
              <Link href="/register" onClick={handleLinkClick} className="hover:text-neutral-900 transition">Register</Link>
            </>
          )}
          {user?.role === "user" && (
            <>
              <Link href="/user/profile" onClick={handleLinkClick} className="hover:text-neutral-900 transition">Profile</Link>
              <Link href="/user/orders" onClick={handleLinkClick} className="hover:text-neutral-900 transition">Orders</Link>
              <button onClick={logout} className="hover:text-neutral-900 transition">Logout</button>
            </>
          )}
          {user?.role === "admin" && (
            <>
              <Link href="/admin/products" onClick={handleLinkClick} className="hover:text-neutral-900 transition">Dashboard</Link>
              <button onClick={logout} className="hover:text-neutral-900 transition">Logout</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}